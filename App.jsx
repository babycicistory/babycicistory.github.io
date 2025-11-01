import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { translations, questions, typeData } from './data/quizData.js'
import './App.css'

function App() {
  const [language, setLanguage] = useState('zh-TW')
  const [currentScreen, setCurrentScreen] = useState('welcome') // welcome, quiz, result
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const t = translations[language]

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const handleAnswer = (answer) => {
    const question = questions[currentQuestion]
    setAnswers(prev => ({
      ...prev,
      [question.dimension]: (prev[question.dimension] || 0) + (answer ? 1 : 0)
    }))

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateResult()
    }
  }

  const calculateResult = () => {
    const scores = { ...answers }
    
    // Calculate type based on scores
    const powerDynamic = (scores['D'] || 0) > (scores['s'] || 0) ? 'D' : 's'
    const painConnection = (scores['S'] || 0) > (scores['M'] || 0) ? 'S' : 'M'
    const structuralPreference = (scores['B'] || 0) > (scores['F'] || 0) ? 'B' : 'F'
    const focusOfPractice = (scores['P'] || 0) > (scores['H'] || 0) ? 'P' : 'H'
    
    const typeCode = powerDynamic + painConnection + structuralPreference + focusOfPractice
    setResult(typeCode)
    setCurrentScreen('result')
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
    setCurrentScreen('welcome')
  }

  const WelcomeScreen = () => (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="language-selector">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zh-TW">繁體中文</SelectItem>
              <SelectItem value="zh-CN">简体中文</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <h1 className="site-title">{t.siteName}</h1>
        <h2 className="welcome-title">{t.welcomeTitle}</h2>
        <p className="welcome-subtitle">{t.welcomeSubtitle}</p>
        <p className="welcome-description">{t.welcomeDescription}</p>
        
        <Button 
          size="lg" 
          className="start-button"
          onClick={() => setCurrentScreen('quiz')}
        >
          {t.startQuiz}
        </Button>
      </div>
    </div>
  )

  const QuizScreen = () => {
    const question = questions[currentQuestion]
    const progress = ((currentQuestion + 1) / questions.length) * 100

    return (
      <div className="quiz-screen">
        <div className="quiz-header">
          <div className="language-selector">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="zh-TW">繁體中文</SelectItem>
                <SelectItem value="zh-CN">简体中文</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="progress-section">
            <p className="progress-text">{t.progress}: {currentQuestion + 1} / {questions.length}</p>
            <Progress value={progress} className="progress-bar" />
          </div>
        </div>

        <Card className="question-card">
          <div className="question-content">
            <h3 className="question-number">Question {currentQuestion + 1}</h3>
            <p className="question-text">{question.text[language]}</p>
            
            <div className="answer-buttons">
              <Button 
                size="lg" 
                variant="outline"
                className="answer-button no-button"
                onClick={() => handleAnswer(false)}
              >
                {t.no}
              </Button>
              <Button 
                size="lg"
                className="answer-button yes-button"
                onClick={() => handleAnswer(true)}
              >
                {t.yes}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  const ResultScreen = () => {
    const type = typeData[result]
    
    return (
      <div className="result-screen">
        <div className="language-selector">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zh-TW">繁體中文</SelectItem>
              <SelectItem value="zh-CN">简体中文</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="result-content">
          <h2 className="result-title">{t.yourType}</h2>
          <h1 className="result-type-code">{result}</h1>
          <h3 className="result-type-name">{type.name[language]}</h3>
          
          <div className="result-image-container">
            <img 
              src={type.image} 
              alt={type.name[language]}
              className="result-image"
            />
          </div>

          <Card className="result-description-card">
            <h4 className="section-title">{t.typeDescription}</h4>
            <p className="type-description">{type.description[language]}</p>
          </Card>

          <Card className="compatibility-card">
            <h4 className="section-title">{t.compatibility}</h4>
            <div className="compatibility-types">
              {type.compatibility.map(compatType => (
                <div key={compatType} className="compat-type">
                  <span className="compat-code">{compatType}</span>
                  <span className="compat-name">{typeData[compatType].name[language]}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="result-actions">
            <Button 
              size="lg"
              variant="outline"
              onClick={resetQuiz}
            >
              {t.retakeQuiz}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="background-overlay"></div>
      <div className="content-wrapper">
        {currentScreen === 'welcome' && <WelcomeScreen />}
        {currentScreen === 'quiz' && <QuizScreen />}
        {currentScreen === 'result' && <ResultScreen />}
      </div>
    </div>
  )
}

export default App

