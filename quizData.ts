// BDSM Love Type 16 Quiz Data

export const translations = {
  'zh-TW': {
    siteName: 'BDSM Love Type 16',
    startQuiz: '開始測驗',
    next: '下一題',
    previous: '上一題',
    viewResult: '查看結果',
    yes: '是',
    no: '否',
    yourType: '你的類型',
    typeDescription: '類型描述',
    compatibility: '最佳配對',
    retakeQuiz: '重新測驗',
    shareResult: '分享結果',
    languageSelector: '語言',
    progress: '進度',
    welcomeTitle: '探索你的慾望原型',
    welcomeSubtitle: '透過 16 種 BDSM 人格類型，發現你內心深處的權力與臣服之舞',
    welcomeDescription: '這個測驗將引導你探索四個核心維度：權力動態、痛感連結、結構偏好與實踐焦點。完成 40 道問題後，你將獲得專屬於你的 BDSM 人格類型分析。',
  },
  'zh-CN': {
    siteName: 'BDSM Love Type 16',
    startQuiz: '开始测验',
    next: '下一题',
    previous: '上一题',
    viewResult: '查看结果',
    yes: '是',
    no: '否',
    yourType: '你的类型',
    typeDescription: '类型描述',
    compatibility: '最佳配对',
    retakeQuiz: '重新测验',
    shareResult: '分享结果',
    languageSelector: '语言',
    progress: '进度',
    welcomeTitle: '探索你的欲望原型',
    welcomeSubtitle: '透过 16 种 BDSM 人格类型，发现你内心深处的权力与臣服之舞',
    welcomeDescription: '这个测验将引导你探索四个核心维度：权力动态、痛感连结、结构偏好与实践焦点。完成 40 道问题后，你将获得专属于你的 BDSM 人格类型分析。',
  },
  'en': {
    siteName: 'BDSM Love Type 16',
    startQuiz: 'Start Quiz',
    next: 'Next',
    previous: 'Previous',
    viewResult: 'View Result',
    yes: 'Yes',
    no: 'No',
    yourType: 'Your Type',
    typeDescription: 'Type Description',
    compatibility: 'Best Match',
    retakeQuiz: 'Retake Quiz',
    shareResult: 'Share Result',
    languageSelector: 'Language',
    progress: 'Progress',
    welcomeTitle: 'Discover Your Desire Archetype',
    welcomeSubtitle: 'Explore 16 BDSM personality types and unveil the dance of power and submission within',
    welcomeDescription: 'This quiz will guide you through four core dimensions: Power Dynamic, Pain Connection, Structural Preference, and Focus of Practice. After 40 questions, you will receive your unique BDSM personality type analysis.',
  }
};

export const questions = [
  // Power Dynamic (D/s) - 10 questions
  { id: 1, dimension: 'D', text: { 'zh-TW': '我享受為伴侶設定規則與期望。', 'zh-CN': '我享受为伴侣设定规则与期望。', 'en': 'I enjoy setting rules and expectations for my partner.' } },
  { id: 2, dimension: 's', text: { 'zh-TW': '在關係中，我更傾向於追隨而非領導。', 'zh-CN': '在关系中，我更倾向于追随而非领导。', 'en': 'In relationships, I prefer to follow rather than lead.' } },
  { id: 3, dimension: 'D', text: { 'zh-TW': '掌控伴侶的快樂與痛苦能帶給我極大的滿足感。', 'zh-CN': '掌控伴侣的快乐与痛苦能带给我极大的满足感。', 'en': 'Controlling my partner\'s pleasure and pain brings me great satisfaction.' } },
  { id: 4, dimension: 's', text: { 'zh-TW': '我渴望將自己的意志完全交託給一個值得信賴的人。', 'zh-CN': '我渴望将自己的意志完全交托给一个值得信赖的人。', 'en': 'I desire to completely surrender my will to someone trustworthy.' } },
  { id: 5, dimension: 'D', text: { 'zh-TW': '我喜歡在親密關係中扮演決策者的角色。', 'zh-CN': '我喜欢在亲密关系中扮演决策者的角色。', 'en': 'I like to be the decision-maker in intimate relationships.' } },
  { id: 6, dimension: 's', text: { 'zh-TW': '被伴侶引導和指揮讓我感到安全與興奮。', 'zh-CN': '被伴侣引导和指挥让我感到安全与兴奋。', 'en': 'Being guided and commanded by my partner makes me feel safe and excited.' } },
  { id: 7, dimension: 'D', text: { 'zh-TW': '我從看到伴侶順從我的指令中獲得愉悅。', 'zh-CN': '我从看到伴侣顺从我的指令中获得愉悦。', 'en': 'I derive pleasure from seeing my partner obey my commands.' } },
  { id: 8, dimension: 's', text: { 'zh-TW': '我享受放棄控制權，讓伴侶主導一切。', 'zh-CN': '我享受放弃控制权，让伴侣主导一切。', 'en': 'I enjoy relinquishing control and letting my partner take charge.' } },
  { id: 9, dimension: 'D', text: { 'zh-TW': '我認為自己天生適合擔任支配者的角色。', 'zh-CN': '我认为自己天生适合担任支配者的角色。', 'en': 'I believe I am naturally suited for a dominant role.' } },
  { id: 10, dimension: 's', text: { 'zh-TW': '臣服於伴侶的意志讓我感到深刻的滿足。', 'zh-CN': '臣服于伴侣的意志让我感到深刻的满足。', 'en': 'Submitting to my partner\'s will gives me profound satisfaction.' } },

  // Pain Connection (S/M) - 10 questions
  { id: 11, dimension: 'S', text: { 'zh-TW': '我對探索伴侶的痛苦閾值感到好奇。', 'zh-CN': '我对探索伴侣的痛苦阈值感到好奇。', 'en': 'I am curious about exploring my partner\'s pain threshold.' } },
  { id: 12, dimension: 'M', text: { 'zh-TW': '對我而言，痛苦可以是一種深刻的親密表現。', 'zh-CN': '对我而言，痛苦可以是一种深刻的亲密表现。', 'en': 'For me, pain can be a profound expression of intimacy.' } },
  { id: 13, dimension: 'S', text: { 'zh-TW': '製造可控的疼痛感，對我來說是一種藝術形式。', 'zh-CN': '制造可控的疼痛感，对我来说是一种艺术形式。', 'en': 'Creating controlled pain is an art form to me.' } },
  { id: 14, dimension: 'M', text: { 'zh-TW': '在安全的環境下，我願意為了伴侶的愉悅而承受痛苦。', 'zh-CN': '在安全的环境下，我愿意为了伴侣的愉悦而承受痛苦。', 'en': 'In a safe environment, I am willing to endure pain for my partner\'s pleasure.' } },
  { id: 15, dimension: 'S', text: { 'zh-TW': '我享受看到伴侶因我的行為而產生的反應。', 'zh-CN': '我享受看到伴侣因我的行为而产生的反应。', 'en': 'I enjoy seeing my partner\'s reactions to my actions.' } },
  { id: 16, dimension: 'M', text: { 'zh-TW': '痛苦能夠幫助我達到更深層次的快感。', 'zh-CN': '痛苦能够帮助我达到更深层次的快感。', 'en': 'Pain helps me reach deeper levels of pleasure.' } },
  { id: 17, dimension: 'S', text: { 'zh-TW': '我對使用各種工具來增強感官體驗感興趣。', 'zh-CN': '我对使用各种工具来增强感官体验感兴趣。', 'en': 'I am interested in using various tools to enhance sensory experiences.' } },
  { id: 18, dimension: 'M', text: { 'zh-TW': '我從身體上的挑戰和極限中找到解放。', 'zh-CN': '我从身体上的挑战和极限中找到解放。', 'en': 'I find liberation in physical challenges and limits.' } },
  { id: 19, dimension: 'S', text: { 'zh-TW': '精心設計的痛苦場景能激發我的創造力。', 'zh-CN': '精心设计的痛苦场景能激发我的创造力。', 'en': 'Carefully designed pain scenarios inspire my creativity.' } },
  { id: 20, dimension: 'M', text: { 'zh-TW': '我認為承受痛苦是一種奉獻的表現。', 'zh-CN': '我认为承受痛苦是一种奉献的表现。', 'en': 'I believe enduring pain is a form of devotion.' } },

  // Structural Preference (B/F) - 10 questions
  { id: 21, dimension: 'B', text: { 'zh-TW': '我認為詳細的場景規劃與儀式感是 BDSM 體驗的關鍵。', 'zh-CN': '我认为详细的场景规划与仪式感是 BDSM 体验的关键。', 'en': 'I believe detailed scene planning and ritual are key to BDSM experiences.' } },
  { id: 22, dimension: 'F', text: { 'zh-TW': '我偏好隨性、不可預測的互動，而非嚴格的規則。', 'zh-CN': '我偏好随性、不可预测的互动，而非严格的规则。', 'en': 'I prefer spontaneous, unpredictable interactions over strict rules.' } },
  { id: 23, dimension: 'B', text: { 'zh-TW': '一份清晰的契約或規則清單能讓我感到安心與興奮。', 'zh-CN': '一份清晰的契约或规则清单能让我感到安心与兴奋。', 'en': 'A clear contract or list of rules makes me feel secure and excited.' } },
  { id: 24, dimension: 'F', text: { 'zh-TW': '對我來說，最棒的體驗是打破常規、即興發揮。', 'zh-CN': '对我来说，最棒的体验是打破常规、即兴发挥。', 'en': 'For me, the best experiences come from breaking conventions and improvising.' } },
  { id: 25, dimension: 'B', text: { 'zh-TW': '我喜歡建立明確的界限和期望。', 'zh-CN': '我喜欢建立明确的界限和期望。', 'en': 'I like to establish clear boundaries and expectations.' } },
  { id: 26, dimension: 'F', text: { 'zh-TW': '我享受探索未知和不確定性帶來的刺激。', 'zh-CN': '我享受探索未知和不确定性带来的刺激。', 'en': 'I enjoy the thrill of exploring the unknown and uncertainty.' } },
  { id: 27, dimension: 'B', text: { 'zh-TW': '嚴格的紀律和一致性對我很重要。', 'zh-CN': '严格的纪律和一致性对我很重要。', 'en': 'Strict discipline and consistency are important to me.' } },
  { id: 28, dimension: 'F', text: { 'zh-TW': '我更喜歡自由流動的體驗，而不是預先設定的劇本。', 'zh-CN': '我更喜欢自由流动的体验，而不是预先设定的剧本。', 'en': 'I prefer free-flowing experiences over pre-set scripts.' } },
  { id: 29, dimension: 'B', text: { 'zh-TW': '儀式化的行為能增強我的體驗深度。', 'zh-CN': '仪式化的行为能增强我的体验深度。', 'en': 'Ritualized behaviors enhance the depth of my experience.' } },
  { id: 30, dimension: 'F', text: { 'zh-TW': '我認為最好的時刻往往是計劃之外的。', 'zh-CN': '我认为最好的时刻往往是计划之外的。', 'en': 'I believe the best moments are often unplanned.' } },

  // Focus of Practice (P/H) - 10 questions
  { id: 31, dimension: 'P', text: { 'zh-TW': '言語上的羞辱或讚美，對我的刺激大於身體上的接觸。', 'zh-CN': '言语上的羞辱或赞美，对我的刺激大于身体上的接触。', 'en': 'Verbal humiliation or praise stimulates me more than physical contact.' } },
  { id: 32, dimension: 'H', text: { 'zh-TW': '我更著迷於繩索、工具等物理性的束縛與接觸。', 'zh-CN': '我更着迷于绳索、工具等物理性的束缚与接触。', 'en': 'I am more fascinated by physical restraints and contact like ropes and tools.' } },
  { id: 33, dimension: 'P', text: { 'zh-TW': '心理上的控制與臣服，是我追求的核心體驗。', 'zh-CN': '心理上的控制与臣服，是我追求的核心体验。', 'en': 'Psychological control and submission are the core experiences I seek.' } },
  { id: 34, dimension: 'H', text: { 'zh-TW': '我享受身體被完全控制或用於滿足伴侶慾望的感覺。', 'zh-CN': '我享受身体被完全控制或用于满足伴侣欲望的感觉。', 'en': 'I enjoy the feeling of my body being completely controlled or used to satisfy my partner.' } },
  { id: 35, dimension: 'P', text: { 'zh-TW': '精神上的遊戲和挑戰比身體上的感受更吸引我。', 'zh-CN': '精神上的游戏和挑战比身体上的感受更吸引我。', 'en': 'Mental games and challenges attract me more than physical sensations.' } },
  { id: 36, dimension: 'H', text: { 'zh-TW': '我渴望強烈的身體感官刺激。', 'zh-CN': '我渴望强烈的身体感官刺激。', 'en': 'I crave intense physical sensory stimulation.' } },
  { id: 37, dimension: 'P', text: { 'zh-TW': '情感上的連結和心理深度對我至關重要。', 'zh-CN': '情感上的连结和心理深度对我至关重要。', 'en': 'Emotional connection and psychological depth are crucial to me.' } },
  { id: 38, dimension: 'H', text: { 'zh-TW': '我更關注身體的反應和物理上的快感。', 'zh-CN': '我更关注身体的反应和物理上的快感。', 'en': 'I focus more on bodily responses and physical pleasure.' } },
  { id: 39, dimension: 'P', text: { 'zh-TW': '我喜歡透過言語和眼神來建立權力動態。', 'zh-CN': '我喜欢透过言语和眼神来建立权力动态。', 'en': 'I like to establish power dynamics through words and eye contact.' } },
  { id: 40, dimension: 'H', text: { 'zh-TW': '實際的身體接觸和觸感對我來說最為重要。', 'zh-CN': '实际的身体接触和触感对我来说最为重要。', 'en': 'Actual physical contact and touch are most important to me.' } },
];

export const typeData = {
  'DSBP': {
    name: { 'zh-TW': '顯赫的支配者', 'zh-CN': '显赫的支配者', 'en': 'The Sovereign Psychologist' },
    image: '/images/DSBP_character.png',
    compatibility: ['sSBP', 'sMBP', 'sSFP'],
    description: {
      'zh-TW': 'DSBP 類型是 BDSM 世界中權力的絕對掌控者，他們不僅在身體上尋求支配，更深層次地渴望在心理層面建立無可撼動的權威。他們是天生的領導者，享受制定規則、引導伴侶、並在關係中扮演主導角色的過程。',
      'zh-CN': 'DSBP 类型是 BDSM 世界中权力的绝对掌控者，他们不仅在身体上寻求支配，更深层次地渴望在心理层面建立无可撼动的权威。他们是天生的领导者，享受制定规则、引导伴侣、并在关系中扮演主导角色的过程。',
      'en': 'DSBP types are absolute masters of power in the BDSM world. They seek dominance not only physically but also desire to establish unshakeable authority on a psychological level. Natural leaders who enjoy setting rules, guiding partners, and taking the lead role in relationships.'
    }
  },
  'DSBH': {
    name: { 'zh-TW': '至高的懲罰者', 'zh-CN': '至高的惩罚者', 'en': 'The Supreme Punisher' },
    image: '/images/DSBH_character.png',
    compatibility: ['sSBH', 'sMBH', 'sSFH'],
    description: {
      'zh-TW': 'DSBH 類型是 BDSM 領域中，將支配與身體懲罰藝術化的高手。他們不僅追求權力上的絕對主導，更享受透過物理手段來塑造、訓練和「矯正」伴侶的過程。',
      'zh-CN': 'DSBH 类型是 BDSM 领域中，将支配与身体惩罚艺术化的高手。他们不仅追求权力上的绝对主导，更享受透过物理手段来塑造、训练和「矫正」伴侣的过程。',
      'en': 'DSBH types are masters who turn dominance and physical punishment into an art form. They seek absolute power and enjoy shaping, training, and "correcting" their partners through physical means.'
    }
  },
  'DSFP': {
    name: { 'zh-TW': '狡黠的霸主', 'zh-CN': '狡黠的霸主', 'en': 'The Cunning Overlord' },
    image: '/images/DSFP_character.png',
    compatibility: ['sSFP', 'sMFP', 'sSBP'],
    description: {
      'zh-TW': 'DSFP 類型是 BDSM 領域中，以其機智、魅惑和對心理遊戲的精通而聞名的支配者。他們享受在關係中扮演主導角色，但更偏好透過巧妙的操控、言語的挑逗和情境的營造來達成目的。',
      'zh-CN': 'DSFP 类型是 BDSM 领域中，以其机智、魅惑和对心理游戏的精通而闻名的支配者。他们享受在关系中扮演主导角色，但更偏好透过巧妙的操控、言语的挑逗和情境的营造来达成目的。',
      'en': 'DSFP types are dominants known for their wit, charm, and mastery of psychological games. They prefer achieving dominance through clever manipulation, verbal teasing, and situational control.'
    }
  },
  'DSFH': {
    name: { 'zh-TW': '狂野的獵人', 'zh-CN': '狂野的猎人', 'en': 'The Wild Hunter' },
    image: '/images/DSFH_character.png',
    compatibility: ['sSFH', 'sSBH', 'sSFP'],
    description: {
      'zh-TW': 'DSFH 類型是 BDSM 領域中，追求原始、本能和無拘無束的支配者。他們享受透過身體上的力量、速度和感官刺激來征服和控制伴侶的過程。',
      'zh-CN': 'DSFH 类型是 BDSM 领域中，追求原始、本能和无拘无束的支配者。他们享受透过身体上的力量、速度和感官刺激来征服和控制伴侣的过程。',
      'en': 'DSFH types are dominants who pursue primal, instinctual, and uninhibited power. They enjoy conquering and controlling partners through physical strength, speed, and sensory stimulation.'
    }
  },
  'DMBP': {
    name: { 'zh-TW': '施虐的藝術家', 'zh-CN': '施虐的艺术家', 'en': 'The Sadistic Artist' },
    image: '/images/DMBP_character.png',
    compatibility: ['sMBP', 'sSBP', 'sMFP'],
    description: {
      'zh-TW': 'DMBP 類型是 BDSM 領域中，將支配與心理施虐結合為一種精緻藝術的實踐者。他們享受在關係中扮演主導角色，並透過巧妙的心理遊戲、情感操控和精神上的挑戰來「雕塑」伴侶。',
      'zh-CN': 'DMBP 类型是 BDSM 领域中，将支配与心理施虐结合为一种精致艺术的实践者。他们享受在关系中扮演主导角色，并透过巧妙的心理游戏、情感操控和精神上的挑战来「雕塑」伴侣。',
      'en': 'DMBP types combine dominance and psychological sadism into a refined art. They sculpt their partners through clever psychological games, emotional manipulation, and mental challenges.'
    }
  },
  'DMBH': {
    name: { 'zh-TW': '無情的工頭', 'zh-CN': '无情的工头', 'en': 'The Ruthless Foreman' },
    image: '/images/DMBH_character.png',
    compatibility: ['sMBH', 'sSBH', 'sSFH'],
    description: {
      'zh-TW': 'DMBH 類型是 BDSM 領域中，將支配與身體上的嚴格訓練和懲罰結合的實踐者。他們享受在關係中扮演主導角色，並透過設定高標準、嚴格的紀律和身體上的挑戰來「鍛鍊」伴侶。',
      'zh-CN': 'DMBH 类型是 BDSM 领域中，将支配与身体上的严格训练和惩罚结合的实践者。他们享受在关系中扮演主导角色，并透过设定高标准、严格的纪律和身体上的挑战来「锻炼」伴侣。',
      'en': 'DMBH types combine dominance with strict physical training and punishment. They forge their partners through high standards, strict discipline, and physical challenges.'
    }
  },
  'DMFP': {
    name: { 'zh-TW': '誘惑的挑逗者', 'zh-CN': '诱惑的挑逗者', 'en': 'The Seductive Tease' },
    image: '/images/DMFP_character.png',
    compatibility: ['sSFP', 'sMFP', 'sSBP'],
    description: {
      'zh-TW': 'DMFP 類型是 BDSM 領域中，以其魅惑、狡黠和對心理遊戲的精通而聞名的支配者。他們享受在關係中扮演主導角色，但更偏好透過巧妙的操控、言語的挑逗和情境的營造來達成目的。',
      'zh-CN': 'DMFP 类型是 BDSM 领域中，以其魅惑、狡黠和对心理游戏的精通而闻名的支配者。他们享受在关系中扮演主导角色，但更偏好透过巧妙的操控、言语的挑逗和情境的营造来达成目的。',
      'en': 'DMFP types are dominants known for their seductive charm and mastery of psychological games. They prefer achieving control through clever manipulation, verbal teasing, and situational seduction.'
    }
  },
  'DMFH': {
    name: { 'zh-TW': '原始的掠奪者', 'zh-CN': '原始的掠夺者', 'en': 'The Primal Predator' },
    image: '/images/DMFH_character.png',
    compatibility: ['sSFH', 'sSBH', 'sSFP'],
    description: {
      'zh-TW': 'DMFH 類型是 BDSM 領域中，追求原始、本能和無拘無束的支配者。他們享受透過身體上的力量、速度和感官刺激來征服和控制伴侶的過程。',
      'zh-CN': 'DMFH 类型是 BDSM 领域中，追求原始、本能和无拘无束的支配者。他们享受透过身体上的力量、速度和感官刺激来征服和控制伴侣的过程。',
      'en': 'DMFH types are primal predators who pursue instinctual and uninhibited dominance. They conquer through raw physical power, speed, and intense sensory experiences.'
    }
  },
  'sSBP': {
    name: { 'zh-TW': '虔誠的侍僧', 'zh-CN': '虔诚的侍僧', 'en': 'The Devout Acolyte' },
    image: '/images/sSBP_character.png',
    compatibility: ['DSBP', 'DMBP', 'DSFP'],
    description: {
      'zh-TW': 'sSBP 類型渴望被完全支配，並從嚴格的規則和儀式感中獲得安全感與愉悅。他們對心理上的臣服有著天生的傾向，能夠完全融入支配者所創造的權力結構中。',
      'zh-CN': 'sSBP 类型渴望被完全支配，并从严格的规则和仪式感中获得安全感与愉悦。他们对心理上的臣服有着天生的倾向，能够完全融入支配者所创造的权力结构中。',
      'en': 'sSBP types desire complete domination and find security and pleasure in strict rules and rituals. They have a natural inclination for psychological submission and can fully integrate into power structures.'
    }
  },
  'sSBH': {
    name: { 'zh-TW': '甘願的祭品', 'zh-CN': '甘愿的祭品', 'en': 'The Willing Sacrifice' },
    image: '/images/sSBH_character.png',
    compatibility: ['DSBH', 'DMBH', 'DSFH'],
    description: {
      'zh-TW': 'sSBH 類型渴望被身體上的限制和疼痛所征服，並從中獲得解脫與愉悅。他們對紀律和規則有著天生的服從傾向，能夠完全融入嚴格訓練體系中。',
      'zh-CN': 'sSBH 类型渴望被身体上的限制和疼痛所征服，并从中获得解脱与愉悦。他们对纪律和规则有着天生的服从倾向，能够完全融入严格训练体系中。',
      'en': 'sSBH types desire to be conquered through physical restraint and pain, finding liberation and pleasure. They have a natural tendency to obey discipline and rules within strict training systems.'
    }
  },
  'sSFP': {
    name: { 'zh-TW': '嬉戲的獵物', 'zh-CN': '嬉戏的猎物', 'en': 'The Playful Prey' },
    image: '/images/sSFP_character.png',
    compatibility: ['DSFP', 'DMFP', 'DSBP'],
    description: {
      'zh-TW': 'sSFP 類型渴望被追逐、被誘惑，並從不確定性和心理遊戲中獲得興奮。他們對心理上的臣服有著天生的傾向，能夠完全融入充滿變數的權力結構中。',
      'zh-CN': 'sSFP 类型渴望被追逐、被诱惑，并从不确定性和心理游戏中获得兴奋。他们对心理上的臣服有着天生的倾向，能够完全融入充满变数的权力结构中。',
      'en': 'sSFP types desire to be chased and seduced, finding excitement in uncertainty and psychological games. They naturally submit psychologically and thrive in dynamic power structures.'
    }
  },
  'sSFH': {
    name: { 'zh-TW': '野性的臣服者', 'zh-CN': '野性的臣服者', 'en': 'The Feral Submissive' },
    image: '/images/sSFH_character.png',
    compatibility: ['DSFH', 'DMFH', 'DSBH'],
    description: {
      'zh-TW': 'sSFH 類型渴望被原始力量征服，並從身體上的刺激和感官衝擊中獲得興奮。他們對身體上的臣服有著天生的傾向，能夠完全融入充滿野性本能的權力結構中。',
      'zh-CN': 'sSFH 类型渴望被原始力量征服，并从身体上的刺激和感官冲击中获得兴奋。他们对身体上的臣服有着天生的倾向，能够完全融入充满野性本能的权力结构中。',
      'en': 'sSFH types desire to be conquered by primal force, finding excitement in physical stimulation and sensory impact. They naturally submit physically within wild, instinctual power dynamics.'
    }
  },
  'sMBP': {
    name: { 'zh-TW': '詩意的受難者', 'zh-CN': '诗意的受难者', 'en': 'The Poetic Sufferer' },
    image: '/images/sMBP_character.png',
    compatibility: ['DMBP', 'DSBP', 'DMFP'],
    description: {
      'zh-TW': 'sMBP 類型渴望被心理上的挑戰和情感的起伏所征服，並從中獲得深刻的體驗和昇華。他們對心理上的臣服有著天生的傾向，能夠完全融入支配者所創造的權力結構中。',
      'zh-CN': 'sMBP 类型渴望被心理上的挑战和情感的起伏所征服，并从中获得深刻的体验和升华。他们对心理上的臣服有着天生的倾向，能够完全融入支配者所创造的权力结构中。',
      'en': 'sMBP types desire to be conquered through psychological challenges and emotional waves, finding profound experiences and transcendence. They naturally submit psychologically within created power structures.'
    }
  },
  'sMBH': {
    name: { 'zh-TW': '堅忍的容器', 'zh-CN': '坚忍的容器', 'en': 'The Enduring Vessel' },
    image: '/images/sMBH_character.png',
    compatibility: ['DMBH', 'DSBH', 'DMFH'],
    description: {
      'zh-TW': 'sMBH 類型渴望被身體上的挑戰和極限考驗所征服，並從中獲得成長和愉悅。他們對紀律和規則有著天生的服從傾向，能夠完全融入嚴格訓練體系中。',
      'zh-CN': 'sMBH 类型渴望被身体上的挑战和极限考验所征服，并从中获得成长和愉悦。他们对纪律和规则有着天生的服从倾向，能够完全融入严格训练体系中。',
      'en': 'sMBH types desire to be conquered through physical challenges and limit testing, finding growth and pleasure. They naturally obey discipline and rules within strict training systems.'
    }
  },
  'sMFP': {
    name: { 'zh-TW': '縹緲的夢想家', 'zh-CN': '缥缈的梦想家', 'en': 'The Ethereal Dreamer' },
    image: '/images/sMFP_character.png',
    compatibility: ['DMFP', 'DMBP', 'DSFP'],
    description: {
      'zh-TW': 'sMFP 類型享受心理上的探索和情感的波動，他們的「夢想家」特質可以在支配者的框架內找到新的樂趣。他們從情感的起伏和精神上的挑戰中獲得滿足。',
      'zh-CN': 'sMFP 类型享受心理上的探索和情感的波动，他们的「梦想家」特质可以在支配者的框架内找到新的乐趣。他们从情感的起伏和精神上的挑战中获得满足。',
      'en': 'sMFP types enjoy psychological exploration and emotional fluctuations. Their dreamer qualities find new pleasures within dominant frameworks, deriving satisfaction from emotional waves and mental challenges.'
    }
  },
  'sMFH': {
    name: { 'zh-TW': '狂喜的受虐者', 'zh-CN': '狂喜的受虐者', 'en': 'The Ecstatic Martyr' },
    image: '/images/sMFH_character.png',
    compatibility: ['DMFH', 'DMBH', 'DSFH'],
    description: {
      'zh-TW': 'sMFH 類型渴望被原始力量征服，並從身體上的刺激和感官衝擊中獲得興奮。他們對身體上的臣服有著天生的傾向，能夠完全融入充滿野性本能的權力結構中。',
      'zh-CN': 'sMFH 类型渴望被原始力量征服，并从身体上的刺激和感官冲击中获得兴奋。他们对身体上的臣服有着天生的倾向，能够完全融入充满野性本能的权力结构中。',
      'en': 'sMFH types desire to be conquered by primal force, finding excitement in physical stimulation and sensory impact. They naturally submit physically within wild, instinctual power dynamics.'
    }
  }
};

