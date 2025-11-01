# BDSM Love Type 16 測驗網站

## 項目概述

這是一個完整的 BDSM 人格類型測驗網站，基於 MBTI 的四維度模型設計，包含 16 種獨特的 BDSM 人格類型。網站採用黑暗維多利亞風格設計，支援繁體中文、簡體中文和英文三種語言。

## 核心特性

### 1. 四維度測驗系統
- **權力動態 (Power Dynamic)**: D (Dominant 支配) vs s (submissive 臣服)
- **痛感連結 (Pain Connection)**: S (Sadistic 施虐) vs M (Masochistic 受虐)
- **結構偏好 (Structural Preference)**: B (Bondage 束縛) vs F (Fluid 流動)
- **實踐焦點 (Focus of Practice)**: P (Psychological 心理) vs H (Hedonistic 享樂)

### 2. 16 種人格類型

#### Dominant 類型 (D-)
1. **DSBP** - 顯赫的支配者 (The Sovereign Psychologist)
2. **DSBH** - 冷酷的施虐者 (The Ruthless Hedonist)
3. **DSFP** - 狡黠的霸主 (The Cunning Overlord)
4. **DSFH** - 誘惑的挑逗者 (The Seductive Tease)
5. **DMBP** - 施虐的藝術家 (The Sadistic Artist)
6. **DMBH** - 殘酷的享樂者 (The Cruel Sensualist)
7. **DMFP** - 誘惑的挑逗者 (The Seductive Tease)
8. **DMFH** - 慾望的煉金術士 (The Desire Alchemist)

#### submissive 類型 (s-)
9. **sSBP** - 堅韌的奴隸 (The Resilient Devotee)
10. **sSBH** - 痛楚的朝聖者 (The Pain Pilgrim)
11. **sSFP** - 自由的靈魂 (The Free Spirit)
12. **sSFH** - 感官的追尋者 (The Sensory Seeker)
13. **sMBP** - 受虐的詩人 (The Masochistic Poet)
14. **sMBH** - 痛楚的享樂者 (The Pain Hedonist)
15. **sMFP** - 縹緲的夢想家 (The Ethereal Dreamer)
16. **sMFH** - 慾望的舞者 (The Desire Dancer)

### 3. 測驗內容
- **40 道精心設計的問題**，每個維度 10 題
- 是/否二選一的簡潔答題方式
- 實時進度追蹤
- 流暢的動畫過渡效果

### 4. 結果頁面
每個類型包含：
- **類型代碼**：四字母代碼（如 DSBP）
- **類型名稱**：中英文雙語名稱
- **人物圖像**：獨特的維多利亞風格 AI 生成圖像
- **詳細分析**：性格特徵、行為模式、心理動機
- **模擬經歷**：個人化的情境描述
- **最佳配對**：3 個最互補的類型推薦

### 5. 多語言支援
- 繁體中文 (zh-TW)
- 簡體中文 (zh-CN)
- English (en)
- 即時語言切換，無需重新載入頁面

### 6. 設計風格
- **黑暗維多利亞風格**：深色背景、金棕色調
- **優雅字體**：Cinzel (英文) + Noto Serif TC (中文)
- **精緻邊框**：古典裝飾元素
- **流暢動畫**：淡入淡出、懸停效果
- **響應式設計**：完美支援桌面和移動設備

## 技術架構

### 前端技術棧
- **框架**：React 18 + Vite
- **樣式**：Tailwind CSS + 自定義 CSS
- **UI 組件**：shadcn/ui
- **字體**：Google Fonts (Cinzel, Noto Serif TC)
- **圖像**：AI 生成的維多利亞風格人物肖像

### 項目結構
```
bdsm-lovetype16/
├── public/
│   └── images/              # 16 個人物圖像
├── src/
│   ├── components/ui/       # UI 組件
│   ├── data/
│   │   └── quizData.js     # 測驗數據和類型資訊
│   ├── App.jsx             # 主應用組件
│   ├── App.css             # 樣式定義
│   └── main.jsx            # 入口文件
└── dist/                    # 構建產物
```

### 核心組件

#### App.jsx
主應用組件，包含三個主要畫面：
- **WelcomeScreen**：歡迎頁面
- **QuizScreen**：測驗頁面
- **ResultScreen**：結果頁面

#### quizData.js
包含：
- `translations`：所有文本的多語言翻譯
- `questions`：40 道測驗問題
- `typeData`：16 種類型的詳細資訊

## 使用說明

### 本地開發
```bash
cd bdsm-lovetype16
pnpm install
pnpm run dev
```

### 構建生產版本
```bash
pnpm run build
```

### 部署
網站已部署到 Manus 平台，可通過部署 URL 訪問。

## 測驗邏輯

### 計分系統
- 每個問題對應一個維度（D/s、S/M、B/F、P/H）
- 回答「是」為該維度加 1 分
- 回答「否」為對立維度加分

### 類型判定
根據四個維度的得分，選擇每個維度中得分較高的一方：
1. 權力動態：D 或 s
2. 痛感連結：S 或 M
3. 結構偏好：B 或 F
4. 實踐焦點：P 或 H

組合成四字母代碼，如 DSBP、sMFH 等。

## 配對算法

每個類型都有 3 個最佳配對類型，基於以下原則：
- **權力互補**：D 類型與 s 類型配對
- **痛感協調**：S 與 M、或相同類型配對
- **結構平衡**：考慮 B/F 的兼容性
- **焦點契合**：P/H 的相互吸引

## 圖像設計

所有 16 個人物圖像均由 AI 生成，特點：
- **維多利亞時代風格**：古典服飾、優雅姿態
- **情感表達**：符合各類型的性格特徵
- **藝術質感**：油畫般的柔和色調
- **一致性**：統一的美術風格

## 文件清單

### 核心文件
- `App.jsx` - 主應用組件
- `App.css` - 樣式定義
- `quizData.js` - 測驗數據

### 類型分析文檔（16 個）
- `bdsm_type_analysis_DSBP.md`
- `bdsm_type_analysis_DSBH.md`
- `bdsm_type_analysis_DSFP.md`
- `bdsm_type_analysis_DSFH.md`
- `bdsm_type_analysis_DMBP.md`
- `bdsm_type_analysis_DMBH.md`
- `bdsm_type_analysis_DMFP.md`
- `bdsm_type_analysis_DMFH.md`
- `bdsm_type_analysis_sSBP.md`
- `bdsm_type_analysis_sSBH.md`
- `bdsm_type_analysis_sSFP.md`
- `bdsm_type_analysis_sSFH.md`
- `bdsm_type_analysis_sMBP.md`
- `bdsm_type_analysis_sMBH.md`
- `bdsm_type_analysis_sMFP.md`
- `bdsm_type_analysis_sMFH.md`

### 人物圖像（16 個）
所有圖像位於 `public/images/` 目錄：
- `DSBP_character.png` 至 `sMFH_character.png`

## 特色功能

### 1. 流暢的用戶體驗
- 無縫的頁面切換
- 平滑的動畫效果
- 即時的進度反饋

### 2. 專業的視覺設計
- 精心調配的色彩方案
- 優雅的排版布局
- 細膩的視覺細節

### 3. 深度的內容分析
- 每個類型超過 500 字的詳細分析
- 真實的情境模擬
- 科學的配對建議

### 4. 完善的多語言
- 所有界面文本完全翻譯
- 自然流暢的語言表達
- 文化適配的內容調整

## 未來擴展可能

1. **社交分享功能**：分享測驗結果到社交媒體
2. **詳細報告下載**：生成 PDF 格式的個人報告
3. **配對匹配系統**：幫助用戶尋找互補的伴侶
4. **社群功能**：同類型用戶的交流平台
5. **進階測驗**：更深入的子類型分析

## 版權聲明

- 測驗設計：原創
- 人物圖像：AI 生成
- 字體：Google Fonts（開源授權）
- UI 組件：shadcn/ui（MIT 授權）

## 聯絡資訊

如有任何問題或建議，歡迎聯繫開發團隊。

---

**最後更新**：2025年10月10日
**版本**：1.0.0
