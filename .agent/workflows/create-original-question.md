---
description: 設問4形式（Passage 2/3）のオリジナル問題を作成する手順
---

# 設問4形式 オリジナル問題作成ワークフロー

## 概要
英検準1級 Passage 2（4問形式）またはPassage 3（4問形式）のオリジナル問題を作成し、mockData.jsに登録するためのワークフロー。

**入力:** ユーザーが過去問の画像（本文、設問、正答表）をアップロード
**出力:** mockData.jsに登録された新規エントリ（past, original, analysis）

---

## Phase 1: 過去問分析・テーマ提案

### 1.1 画像から情報を抽出
1. 本文画像からテキストを読み取り
2. 設問・選択肢を読み取り
3. 正答表から正答を確認

### 1.2 過去問の構造分析
| 項目 | 確認ポイント |
|------|-------------|
| タイトル | 年度・回・Passage番号 |
| テーマ | 歴史/科学/社会/技術 |
| パラグラフ数 | 3〜4パラグラフ |
| 設問タイプ | 各設問の正答根拠の位置 |

### 1.3 オリジナルテーマの提案
- 過去問と同じカテゴリ内で類似テーマを選定
- ユーザーに計画を提示し承認を得る

**テーマ対応例:**
| 過去問テーマ | オリジナルテーマ例 |
|------------|------------------|
| イギリス東インド会社 | オランダ東インド会社 |
| クメール帝国の王 | マウリヤ朝のアショーカ王 |
| ミイラ茶色顔料 | ティリアンパープル |
| 点字の競争 | QWERTYキーボード論争 |
| 砂漠長距離偵察隊 | ナバホ暗号兵 |

---

## Phase 2: mockData.jsへの登録

### 2.1 AVAILABLE_YEARS配列に追加
```javascript
// 設問4タイプセクション内、年代順に追加
{ year: 2021, session: "2-p3", label: "2021年第2回(3) (Jayavarman VII)" },
```

### 2.2 MOCK_DATAオブジェクトに追加

ファイル末尾の `};` の直前に新エントリを追加:

```javascript
  "2021-2-p3": {
    past: {
      title: "タイトル",
      content: `## Title: タイトル\n\n本文...`,
      questions: `### Questions\n\n**(38) 設問文**\n1. 選択肢1\n2. 選択肢2\n3. 選択肢3\n4. 選択肢4\n\n---\n**Answer Key:** (38) X, (39) Y, (40) Z, (41) W`
    },
    original: {
      title: "オリジナルタイトル",
      content: `## Title: オリジナルタイトル\n\n本文...`,
      questions: `### Original Questions\n\n**(1) 設問文**\n1. 選択肢1\n...\n\n---\n**Answer Key:** (1) X, (2) Y, (3) Z, (4) W`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)\n\n...`,
      comparison: `## 過去問との比較分析 (Category Comparison)\n\n...`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)\n\n...`
    }
  }
```

---

## Phase 3: analysisセクションの詳細

### 3.1 intent（作成意図・根拠）

```markdown
## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** [過去問タイトル] ([年度]) - Category: [カテゴリ]

### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~[語数] words (過去問と同等)
*   **パラグラフ構成:**
    1.  **導入・背景 (Introduction):** [内容] (Q1)
    2.  **展開・変化 (Development):** [内容] (Q2)
    3.  **具体例・詳細 (Details):** [内容] (Q3)
    4.  **結論・影響 (Conclusion):** [内容] (Q4)

### 2. テーマの模倣 (Thematic Imitation)
*   **過去問:** [過去問のテーマ]
*   **オリジナル:** [オリジナルのテーマ]

### 3. 語彙・表現 (Lexical Level)
*   **対比表現:** "[表現1]" vs "[表現2]"
*   **重要語彙:** [語彙リスト]
```

### 3.2 comparison（過去問との比較）

```markdown
## 過去問との比較分析 (Category Comparison)

| **項目** | **[過去問] (過去問)** | **[オリジナル] (オリジナル)** | **共通点** |
|----------|----------------------|----------------------------|------------|
| **テーマ** | ... | ... | ... |
| **構造** | ... | ... | ... |

<br/>

### 1. トピックと展開の相違

*   **[過去問] (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> [トピック]
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> [展開]
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> [焦点]

*   **[オリジナル] (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> [トピック]
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> [展開]
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> [焦点]

<br/>

### 2. 設問設計の比較

*   **Q1/38 (内容一致 - [テーマ]):**
    *   **過去問:** "[正答根拠]"
    *   **Original:** "[正答根拠]"
```

### 3.3 syntax（構文解説）

**重要:** 各設問の正答根拠となる構文を3つ程度選び解説する

```markdown
## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: [英語タイトル] ([日本語タイトル] - [役割])
> [文全体。**解説部分を太文字**で強調]

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>[文法用語] ([日本語]):</strong> [該当部分] ([解説])</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>[文法パターン]:</strong> [解説]。設問Xの正答根拠となる重要な構文です。
</div>
```

---

## Phase 4: 検証

// turbo
1. Node.jsで構文エラーチェック:
```powershell
node -e "const d = require('./src/data/mockData.js'); console.log('Past:', d.MOCK_DATA['XXXX-X-pX'].past.title); console.log('Original:', d.MOCK_DATA['XXXX-X-pX'].original.title)"
```

2. ユーザーにブラウザ確認を依頼

---

## 注意事項

### コンテンツ形式
- タイトルは `## Title: タイトル` 形式
- 設問は `**(38) 設問文**` 形式（過去問）、`**(1) 設問文**` 形式（オリジナル）
- 正答キーは `**Answer Key:** (38) X, (39) Y, (40) Z, (41) W` 形式

### 文法・スタイル
- 太文字には `**text**` 形式を使用（<strong>タグではなく）
- 表はマークダウン形式（`| ... |`）を使用
- HTMLタグは analysis.syntax 内の panel-success/panel-warning のみ使用

### オリジナル問題の設計
- 語数は過去問と同等（±50語程度）
- パラグラフ構成を模倣
- 設問タイプを模倣（正答根拠の位置を合わせる）
- 正答番号は過去問とは異なるパターンにする
