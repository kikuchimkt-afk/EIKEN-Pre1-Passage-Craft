import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { MainLayout } from './components/layout/MainLayout';
import { Tabs } from './components/ui/Tabs';
import { AVAILABLE_YEARS, MOCK_DATA } from './data/mockData';

// Markdown Renderer
const MarkdownRenderer = ({ text }) => {
  if (!text) return <div className="markdown-body">No content available</div>;
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h2: (props) => <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginTop: '1.5rem' }} {...props} />,
          h3: (props) => <h3 style={{ color: 'var(--accent-primary)', marginTop: '1.5rem' }} {...props} />,
          p: (props) => <p style={{ marginBottom: '1rem', lineHeight: '1.8' }} {...props} />,
          li: (props) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
          strong: (props) => <strong className="highlight-text" {...props} />,
          table: (props) => <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}><table className="data-table" {...props} /></div>,
          th: (props) => <th {...props} />,
          td: (props) => <td {...props} />,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};

// Export Button Component
const ExportButton = ({ label, onClick, icon = "📋" }) => (
  <button
    onClick={onClick}
    style={{
      padding: '0.5rem 1rem',
      fontSize: '0.85rem',
      backgroundColor: 'var(--accent-primary)',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'background-color 0.2s'
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = 'var(--accent-hover)'}
    onMouseOut={(e) => e.target.style.backgroundColor = 'var(--accent-primary)'}
  >
    {icon} {label}
  </button>
);

// Utility: Split text into sentences
const splitIntoSentences = (text) => {
  // Remove markdown headers and clean text
  const cleanText = text
    .replace(/^##.*$/gm, '')
    .replace(/^\s*\n/gm, '\n')
    .trim();

  // Split by sentence-ending punctuation followed by space or newline
  const sentences = cleanText.split(/(?<=[.!?])\s+(?=[A-Z])/);
  return sentences.filter(s => s.trim().length > 10);
};

// Utility: Identify complex sentences (nested structures)
const identifyComplexSentences = (sentences) => {
  const complexIndicators = [
    { pattern: /,\s*which\s/i, type: '関係代名詞 (which)' },
    { pattern: /,\s*who\s/i, type: '関係代名詞 (who)' },
    { pattern: /,\s*where\s/i, type: '関係副詞 (where)' },
    { pattern: /—[^—]+—/i, type: 'ダッシュによる挿入' },
    { pattern: /\([^)]+\)/i, type: '括弧による挿入' },
    { pattern: /\s(although|though|while|whereas)\s/i, type: '譲歩節' },
    { pattern: /\s(because|since|as)\s.*,/i, type: '理由節' },
    { pattern: /\s(if|unless|provided)\s/i, type: '条件節' },
    { pattern: /not only\s.*but\s(also)?/i, type: '相関接続詞' },
    { pattern: /\s(what|whatever|whoever|however)\s/i, type: '複合関係詞' },
    { pattern: /,\s*\w+ing\s/i, type: '分詞構文' },
    { pattern: /:\s[a-z]/i, type: 'コロンによる説明' },
  ];

  const complexSentences = [];
  sentences.forEach((sentence, index) => {
    const found = [];
    complexIndicators.forEach(({ pattern, type }) => {
      if (pattern.test(sentence)) {
        found.push(type);
      }
    });
    // Count commas as complexity indicator
    const commaCount = (sentence.match(/,/g) || []).length;
    if (found.length > 0 || commaCount >= 3) {
      complexSentences.push({
        index: index + 1,
        sentence: sentence.substring(0, 60) + (sentence.length > 60 ? '...' : ''),
        types: found.length > 0 ? found : ['複数の節を含む複雑な構造'],
        commaCount
      });
    }
  });
  return complexSentences;
};

// Generate syntax analysis template
const generateSyntaxTemplate = (content, title) => {
  const sentences = splitIntoSentences(content);
  const complexSentences = identifyComplexSentences(sentences);

  let output = `# 構文解説用テンプレート: ${title}\n\n`;

  // Complex sentence warnings at the top
  if (complexSentences.length > 0) {
    output += `## ⚠️ 注意すべき複雑な構造を含むセンテンス\n\n`;
    output += `> **以下のセンテンスは入れ子構造や挿入句を含むため、特に注意して解説してください。**\n\n`;
    complexSentences.forEach(cs => {
      output += `- **Sentence ${cs.index}:** ${cs.types.join(', ')}\n`;
      output += `  - 「${cs.sentence}」\n`;
    });
    output += `\n---\n\n`;
  }

  output += `## 全センテンス構造解析\n\n`;
  output += `**総センテンス数:** ${sentences.length}\n\n`;

  sentences.forEach((sentence, index) => {
    output += `### Sentence ${index + 1}\n\n`;
    output += `> ${markMainVerbs(sentence)}\n\n`;
    output += `**構造分解:**\n`;
    output += `1. **主語 (Subject):** [記入]\n`;
    output += `2. **主動詞 (Main Verb):** [記入]\n`;
    output += `3. **目的語/補語 (Object/Complement):** [記入]\n`;
    output += `4. **修飾要素 (Modifiers):** [記入]\n\n`;
    output += `**ポイント:** [記入]\n\n`;
    output += `---\n\n`;
  });

  return output;
};

// Mark main verbs in text (bold format for markdown)
function markMainVerbs(content) {
  // 1. Auxiliary Verb Phrases (Heuristic: Aux + (Adv) + Non-Determiner/Prep)
  // Matches "has eaten", "is running", "can go", "was strictly forbidden"
  // Excludes "has a", "is in", "can the"
  const phrasePattern = /\b(can|could|will|would|shall|should|may|might|must|has|have|had|is|are|was|were|does|do|did)\s+(?:not\s+)?(?:never\s+)?(?:always\s+)?(?:[a-z]+ly\s+)?(?!a\b|an\b|the\b|my\b|your\b|his\b|her\b|its\b|our\b|their\b|this\b|that\b|these\b|those\b|some\b|any\b|no\b|to\b|in\b|on\b|at\b|by\b|for\b|of\b|with\b|from\b)\w+\b/gi;

  // 2. Finite Strong Verbs (Single words) - Fallback for simple tenses
  const verbPatterns = [
    phrasePattern,
    // Be verbs and modals (as single verbs)
    /\b(is|are|was|were)\b/gi,
    /\b(has|have|had)\b/gi,
    /\b(does|do|did)\b/gi,
    /\b(can|could|will|would|shall|should|may|might|must)\b/gi,

    // Strong verbs (Finite forms only, mostly)
    /\b(became|become|becomes)\b/gi,
    /\b(made|make|makes)\b/gi,
    /\b(led|lead|leads)\b/gi,
    /\b(began|begin|begins)\b/gi,
    /\b(rose|rise|rises)\b/gi,
    /\b(fell|fall|falls)\b/gi,
    /\b(took|take|takes)\b/gi,
    /\b(gave|give|gives)\b/gi,
    /\b(found|find|finds)\b/gi,
    /\b(brought|bring|brings)\b/gi,
    /\b(thought|think|thinks)\b/gi,
    /\b(said|say|says)\b/gi,
    /\b(went|go|goes)\b/gi,
    /\b(came|come|comes)\b/gi,
    /\b(saw|see|sees)\b/gi,
    /\b(knew|know|knows)\b/gi,
    /\b(got|get|gets)\b/gi,
    /\b(set|sets)\b/gi,
    /\b(put|puts)\b/gi,
    /\b(kept|keep|keeps)\b/gi,
    /\b(left|leave|leaves)\b/gi,
    /\b(felt|feel|feels)\b/gi,
    /\b(seemed|seem|seems)\b/gi,
    /\b(appeared|appear|appears)\b/gi,
    /\b(remained|remain|remains)\b/gi,
    /\b(continued|continue|continues)\b/gi,
    /\b(established|establish|establishes)\b/gi,
    /\b(created|create|creates)\b/gi,
    /\b(developed|develop|develops)\b/gi,
    /\b(discovered|discover|discovers)\b/gi,
    /\b(believed|believe|believes)\b/gi,
    /\b(considered|consider|considers)\b/gi,
    /\b(resulted|result|results)\b/gi,
    /\b(caused|cause|causes)\b/gi,
    /\b(allowed|allow|allows)\b/gi,
    /\b(required|require|requires)\b/gi,
    /\b(included|include|includes)\b/gi,
    /\b(provided|provide|provides)\b/gi,
    /\b(suggested|suggest|suggests)\b/gi,
    /\b(argued|argue|argues)\b/gi,
    /\b(claimed|claim|claims)\b/gi,
    /\b(proved|prove|proves)\b/gi,
    /\b(showed|show|shows)\b/gi,
    /\b(meant|mean|means)\b/gi,
    /\b(spread|spreads)\b/gi,
    /\b(built|build|builds)\b/gi,
    /\b(used|use|uses)\b/gi,
    /\b(helped|help|helps)\b/gi,
    /\b(changed|change|changes)\b/gi,
    /\b(controlled|control|controls)\b/gi,
    /\b(covered|cover|covers)\b/gi,
    /\b(employed|employ|employs)\b/gi,
    /\b(granted|grant|grants)\b/gi,
    /\b(hoped|hope|hopes)\b/gi,
    /\b(endured|endure|endures)\b/gi,
    /\b(adopted|adopt|adopts)\b/gi,
  ];

  let markedContent = content;

  const paragraphs = markedContent.split('\n\n');
  const processedParagraphs = paragraphs.map(para => {
    // Skip markdown headers and other special formatting
    if (para.startsWith('#') || para.startsWith('*') || para.startsWith('-') || para.startsWith('>')) {
      return para;
    }

    // Split into sentences to handle structural logic better
    const sentences = para.split(/(?<=[.!?])\s+(?=[A-Z])/);

    return sentences.map(sentence => {
      // 1. Mask excluded zones to prevent marking
      let workingSentence = sentence;

      // Mask quoted text
      workingSentence = workingSentence.replace(/"[^"]*"/g, match => ' '.repeat(match.length));
      workingSentence = workingSentence.replace(/“[^”]*”/g, match => ' '.repeat(match.length));
      // Mask included text in parentheses
      workingSentence = workingSentence.replace(/\([^)]*\)/g, match => ' '.repeat(match.length));

      // Mask relative clauses / subordinate clauses (Heuristic)
      const subordinators = ['who', 'which', 'that', 'where', 'when', 'if', 'although', 'because', 'since', 'while', 'as'];
      subordinators.forEach(sub => {
        // Regex to match subordinator and following text until comma or a limit
        const regex = new RegExp(`\\b${sub}\\b[^,;]*`, 'gi');
        workingSentence = workingSentence.replace(regex, match => ' '.repeat(match.length));
      });

      // Mask "to" + word (Infinitive)
      workingSentence = workingSentence.replace(/\bto\s+\w+/gi, match => ' '.repeat(match.length));

      // 2. Find finite verbs (or phrases) in the remaining "Safe" text
      let matches = [];
      verbPatterns.forEach(pattern => {
        let match;
        // Reset lastIndex for global regex
        pattern.lastIndex = 0;
        while ((match = pattern.exec(workingSentence)) !== null) {
          matches.push({
            word: match[0],
            index: match.index
          });
        }
      });

      if (matches.length === 0) return sentence;

      // Sort by index ASC, then by Length DESC (prioritize longer phrases starting at same pos)
      matches.sort((a, b) => {
        if (a.index !== b.index) return a.index - b.index;
        return b.word.length - a.word.length;
      });

      // Strategy: Pick the first one (most likely Main Verb in main clause), 
      // AND any subsequent ones preceded by 'and', 'or', 'but'
      const finalVerbs = [];

      if (matches.length > 0) {
        finalVerbs.push(matches[0]);
        // Track end position to avoid overlaps
        let lastEnd = matches[0].index + matches[0].word.length;

        // Look for coordinated verbs
        for (let i = 1; i < matches.length; i++) {
          const curr = matches[i];
          // Skip if overlapping with selected match
          if (curr.index < lastEnd) continue;

          // Check text between last match and current
          const textBetween = sentence.substring(lastEnd, curr.index);

          if (/\b(and|or|but)\b/.test(textBetween) && textBetween.length < 20) {
            finalVerbs.push(curr);
            lastEnd = curr.index + curr.word.length;
          }
        }
      }

      // 3. Mark the selected verbs in the ORIGINAL sentence
      // Create boolean mask
      const isVerb = new Array(sentence.length).fill(false);
      finalVerbs.forEach(v => {
        for (let i = 0; i < v.word.length; i++) {
          isVerb[v.index + i] = true;
        }
      });

      let rebuilt = '';
      let i = 0;
      while (i < sentence.length) {
        if (isVerb[i]) {
          rebuilt += '**';
          let j = i;
          while (j < sentence.length && isVerb[j]) j++;
          rebuilt += sentence.substring(i, j);
          rebuilt += '**';
          i = j;
        } else {
          rebuilt += sentence[i];
          i++;
        }
      }
      return rebuilt;

    }).join(' '); // Rejoin sentences
  });

  return processedParagraphs.join('\n\n');
}

// Copy to clipboard utility
const copyToClipboard = async (text, successMessage = 'コピーしました！') => {
  try {
    await navigator.clipboard.writeText(text);
    alert(successMessage);
  } catch (err) {
    console.error('Copy failed:', err);
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(successMessage);
  }
};

function App() {
  const [selectedYearSession, setSelectedYearSession] = useState("2025-1");

  // Tab State
  const [activeLeftTab, setActiveLeftTab] = useState('past');
  const [activeRightTab, setActiveRightTab] = useState('intent');

  // Left Column Tabs
  const leftTabs = [
    { id: 'past', label: '過去問本文' },
    { id: 'past_q', label: '過去問設問' },
    { id: 'original', label: 'オリジナル本文' },
    { id: 'original_q', label: 'オリジナル設問' },
  ];

  // Right Column Tabs
  const rightTabs = [
    { id: 'intent', label: '作成意図・根拠' },
    { id: 'comparison', label: '過去問との比較' },
    { id: 'syntax', label: '構文解説' },
  ];

  // Derive content based on selection
  const currentData = MOCK_DATA[selectedYearSession] || {
    past: { title: "Data Not Found", content: "Data not available for this selection." },
    original: {},
    analysis: {}
  };

  // Helper to get content for Left Panel
  const getLeftContent = () => {
    switch (activeLeftTab) {
      case 'past': return currentData.past?.content;
      case 'past_q': return currentData.past?.questions;
      case 'original': return currentData.original?.content;
      case 'original_q': return currentData.original?.questions;
      default: return '';
    }
  };

  // Helper to get content for Right Panel
  const getRightContent = () => {
    switch (activeRightTab) {
      case 'intent': return currentData.analysis?.intent;
      case 'comparison': return currentData.analysis?.comparison;
      case 'syntax': return currentData.analysis?.syntax;
      default: return '';
    }
  };

  // Export handlers
  const handleExportOriginalWithVerbs = () => {
    const content = currentData.original?.content;
    if (!content) {
      alert('オリジナル本文がありません');
      return;
    }
    const markedContent = markMainVerbs(content);
    const output = `# オリジナル本文（主動詞マーク済み）\n\n${markedContent}`;
    copyToClipboard(output, 'オリジナル本文（主動詞マーク済み）をコピーしました！');
  };

  const handleExportOriginalQuestions = () => {
    const questions = currentData.original?.questions;
    if (!questions) {
      alert('オリジナル設問がありません');
      return;
    }
    copyToClipboard(questions, 'オリジナル設問をコピーしました！');
  };

  const handleExportSyntaxTemplate = () => {
    const content = currentData.original?.content;
    const title = currentData.original?.title;
    if (!content) {
      alert('オリジナル本文がありません');
      return;
    }
    const template = generateSyntaxTemplate(content, title || 'Original Passage');
    copyToClipboard(template, '構文解説テンプレートをコピーしました！');
  };

  const handleExportAll = () => {
    const content = currentData.original?.content;
    const questions = currentData.original?.questions;
    const title = currentData.original?.title;

    if (!content) {
      alert('データがありません');
      return;
    }

    const markedContent = markMainVerbs(content);
    const syntaxTemplate = generateSyntaxTemplate(content, title || 'Original Passage');

    const output = [
      `# ${title || 'Original Passage'} - Complete Data`,
      `\n## 1. オリジナル本文（主動詞マーク済み）\n\n${markedContent}`,
      `\n## 2. オリジナル設問\n\n${questions || '（設問データなし）'}`,
      `\n## 3. 構文解説テンプレート\n\n${syntaxTemplate}`
    ].join('\n\n---\n\n');

    copyToClipboard(output, '全データを一括コピーしました！');
  };

  // --- Render Components ---

  const HeaderComponent = (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0, color: 'white' }}>
          英検準1級 PassageCraft
        </h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>対象回:</label>
        <select
          value={selectedYearSession}
          onChange={(e) => setSelectedYearSession(e.target.value)}
        >
          {AVAILABLE_YEARS.map((y, index) => (
            y.type === "separator" ? (
              <option key={`sep-${index}`} disabled style={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>
                {y.label}
              </option>
            ) : (
              <option key={`${y.year}-${y.session}`} value={`${y.year}-${y.session}`}>
                {y.label || `${y.year}年度 第${y.session}回`}
              </option>
            )
          ))}
        </select>
      </div>
    </>
  );

  const LeftColumnComponent = (
    <>
      <Tabs
        tabs={leftTabs}
        activeTab={activeLeftTab}
        onTabChange={setActiveLeftTab}
      />
      <div className="content-area">
        <MarkdownRenderer text={getLeftContent()} />
      </div>
    </>
  );

  const RightColumnComponent = (
    <>
      <Tabs
        tabs={rightTabs}
        activeTab={activeRightTab}
        onTabChange={setActiveRightTab}
      />
      <div className="content-area">
        <MarkdownRenderer text={getRightContent()} />
      </div>
    </>
  );

  // Export Panel Component
  const ExportPanel = (
    <div style={{
      padding: '1rem',
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      <ExportButton
        label="📦 全てコピー (All-in-One)"
        onClick={handleExportAll}
        icon="📋"
      />
      <div style={{ width: '1px', backgroundColor: 'var(--border-color)', margin: '0 0.5rem' }}></div>
      <ExportButton
        label="本文（動詞マーク）"
        onClick={handleExportOriginalWithVerbs}
        icon="📝"
      />
      <ExportButton
        label="設問"
        onClick={handleExportOriginalQuestions}
        icon="❓"
      />
      <ExportButton
        label="構文解説テンプレート"
        onClick={handleExportSyntaxTemplate}
        icon="📊"
      />
    </div>
  );

  return (
    <MainLayout
      header={HeaderComponent}
      leftColumn={LeftColumnComponent}
      rightColumn={RightColumnComponent}
      footer={ExportPanel}
    />
  );
}

export default App;
