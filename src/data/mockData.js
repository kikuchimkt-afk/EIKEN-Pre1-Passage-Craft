export const AVAILABLE_YEARS = [
  // --- 設問4タイプ（4問形式）---
  { type: "separator", label: "━━━ 設問4タイプ（4問形式）━━━" },
  { year: 2025, session: "2-p2", label: "2025年第2回(2) (Relying on Nature)" },
  { year: 2025, session: "1-p2", label: "2025年第1回(2) (The Science of Revenge)" },
  { year: 2024, session: "3-p2", label: "2024年第3回(2) (Bretton Woods)" },
  { year: 2024, session: "2-p2", label: "2024年第2回(2) (Age and Innovation)" },
  { year: 2024, session: "1-p2", label: "2024年第1回(2) (Feminist Architecture)" },
  { year: 2023, session: "3-p3", label: "2023年第3回(3) (Meritocracy)" },
  { year: 2023, session: "2-p3", label: "2023年第2回(3) (The Marian Reforms)" },
  { year: 2023, session: "1-p3", label: "2023年第1回(3) (Robert the Bruce)" },
  { year: 2022, session: "3-p3", label: "2022年第3回(3) (Competing against Braille)" },
  { year: 2022, session: "2-p3", label: "2022年第2回(3) (The Long Range Desert Group)" },
  { year: 2022, session: "1-p3", label: "2022年第1回(3) (The British in India)" },
  { year: 2021, session: "3-p3", label: "2021年第3回(3) (Mummy Brown)" },
  { year: 2021, session: "2-p3", label: "2021年第2回(3) (Jayavarman VII)" },
  // --- 設問3タイプ（3問形式）---
  { type: "separator", label: "━━━ 設問3タイプ（3問形式）━━━" },
  { year: 2025, session: 2, label: "2025年第2回 (Rocket Science)" },
  { year: 2025, session: 1, label: "2025年第1回 (Mary Celeste)" },
  { year: 2024, session: 3, label: "2024年第3回 (Spongy Moths)" },
  { year: 2024, session: 2, label: "2024年第2回 (Measuring Intelligence)" },
  { year: 2024, session: 1, label: "2024年第1回 (Wolf Packs)" },
  { year: 2023, session: "3-2", label: "2023年第3回(2) (The Bet)" },
  { year: 2023, session: "3-1", label: "2023年第3回(1) (A Daring Escape)" },
  { year: 2023, session: "2-2", label: "2023年第2回(2) (Machine or Human?)" },
  { year: 2023, session: "2-1", label: "2023年第2回(1) (US Colleges)" },
  { year: 2023, session: "1-2", label: "2023年第1回(2) (Discipline in American Schools)" },
  { year: 2023, session: "1-1", label: "2023年第1回(1) (The Chicken of Tomorrow)" },
  { year: 2022, session: "3-2", label: "2022年第3回(2) (The Soccer War)" },
  { year: 2022, session: "3-1", label: "2022年第3回(1) (Fences and Ecosystems)" },
  { year: 2022, session: "2-2", label: "2022年第2回(2) (Durians and Giant Fruit Bats)" },
  { year: 2022, session: "2-1", label: "2022年第2回(1) (Recognizing Faces)" },
  { year: 2022, session: "1-2", label: "2022年第1回(2) (Intentional Communities)" },
  { year: 2022, session: "1-1", label: "2022年第1回(1) (Honey Fungus)" },
];

const MARY_CELESTE_TEXT = `## Title: The Mary Celeste

In December 1872, the crew of the Dei Gratia, a British merchant ship that had set sail from New York, spotted another ship drifting in the Atlantic Ocean. The Dei Gratia’s captain was surprised to see that the ship was the Mary Celeste, which had left New York weeks earlier and should have already arrived at its intended destination in Italy. He sent some of his men to investigate, but they found nobody aboard the Mary Celeste. However, the crew’s belongings remained, the ship’s cargo of industrial alcohol was still present, and there were plentiful supplies of food and water. The ship was undamaged, although there was some seawater in its cargo hold. Hoping to gain a financial reward for salvaging the deserted ship, the Dei Gratia’s crew sailed the Mary Celeste to Gibraltar and handed it over to British authorities there.

No trace of the Mary Celeste’s crew has ever been found, and there has been much speculation about what happened. One popular theory was that the ship was attacked by pirates, who murdered the crew and threw them overboard. This was rejected, however, since pirates generally stayed away from the area because British naval ships often patrolled there. Furthermore, the ship’s cargo had not been stolen. Another theory was that vapors from the alcohol the Mary Celeste was carrying caused an explosion that forced the crew to leave the ship. However, the Dei Gratia’s crew found no damage on the Mary Celeste that supported this idea.

To try and shed some light on the Mary Celeste mystery, documentary maker Anne MacGregor analyzed transcripts of the ship’s log and official reports written in Gibraltar at the time. MacGregor now believes the ship was abandoned a few miles from the Azores Island of Santa Maria ten days before it was discovered by the Dei Gratia. She also found evidence that the ship’s water pump had become blocked and its chronometer, which was a vital piece of navigational equipment, had been faulty. As a result, the Mary Celeste’s captain would have been unsure of the ship’s position and unable to remove seawater from the cargo hold. MacGregor thinks that these issues, combined with the fact that the Mary Celeste had experienced rough seas the day before, would have been enough to make the captain resort to sacrificing the ship in order to ensure his crew’s safety. The question of why the crew never made it to Santa Maria remains unanswered, however.`;

const MARY_CELESTE_QUESTIONS = `### Questions

**(25) After finding the Mary Celeste drifting at sea, the crew of the Dei Gratia**
1. gave supplies of water and food to the Mary Celeste’s crew to prevent them from dying before reaching Italy.
2. repaired the damage to the Mary Celeste, which was then able to continue its journey to Italy.
3. contacted British authorities in Gibraltar, who came to salvage the Mary Celeste.
4. took the Mary Celeste to Gibraltar because they thought they could make money by doing so.

**(26) What is true according to the passage?**
1. British authorities suspected that the crew of the Dei Gratia stole the Mary Celeste’s cargo and killed its crew.
2. The Dei Gratia’s crew refused to board the Mary Celeste at first because they believed its cargo was too dangerous.
3. It is unlikely that pirates attacked the Mary Celeste because it was unusual to operate where the ship was discovered.
4. Evidence found on the Mary Celeste suggests that damage to the ship was caused by an explosion.

**(27) What did Anne MacGregor conclude based on her investigation?**
1. The mystery of what happened to the Mary Celeste would never be solved because official reports contain little information about the incident.
2. Several factors led to the Mary Celeste’s captain deciding he had no choice but to get his crew off the ship.
3. The crew of the Mary Celeste likely escaped to Santa Maria to avoid being blamed for abandoning the ship.
4. Records of the Mary Celeste’s discovery were altered in order to cover up what really happened.

---
**Answer Key:** (25) 4, (26) 3, (27) 2
`;

const FLANNAN_ISLES_TEXT = `## Title: The Mystery of the Flannan Isles

In December 1900, the crew of the Hesperus, a lighthouse supply ship that had set sail from the Scottish mainland, arrived at the remote Flannan Isles to rotate the personnel stationed there. The Hesperus’s captain was puzzled to see no signal flag flying from the lighthouse, which should have been welcoming their arrival. He sent a relief keeper named Joseph Moore to investigate, but he found nobody inside the lighthouse compound. However, the lamps were trimmed and filled with oil, the kitchen table had half-eaten meals, and there were plentiful supplies of fuel. The tower was undamaged, although a set of oilskins was missing from the entrance hall. Hoping to find the three keepers sheltering elsewhere on the small island, Moore organized a search party, but they found no trace of the men.

Since the disappearances, there has been much speculation about what happened to the three experienced keepers. One prevailing theory at the time was that a sea monster or ghost had snatched them, given the local folklore surrounding the islands. This was rejected by officials, however, since the logbook entries described the keepers performing their duties calmly up until the very end. Furthermore, the lighthouse equipment was in perfect working order. Another theory was that one keeper had gone insane and murdered the others before throwing himself into the sea. However, the close friendship known to exist between the men made this explanation highly unlikely.

To try and shed some light on the Flannan Isles mystery, modern researcher Dr. Walter Aldridge analyzed local weather records and the specific geography of the island’s west landing. Aldridge now believes the men were swept away by a "rogue wave" — a massive, unexpected wall of water — while securing equipment during a storm. He found evidence that a heavy iron box stored 100 feet above sea level had been smashed, suggesting waves of unprecedented height. As a result, the keepers, who were likely working near the cliff edge to secure the gear, would have been caught off guard. Aldridge thinks that this extreme weather event, combined with the fact that two keepers were already outside assisting the third, caused the tragedy. The sea, which can turn violent in an instant, claimed them all, leaving only the unanswered question of why they had violated regulations by leaving the lighthouse unattended.`;

const FLANNAN_ISLES_QUESTIONS = `### Original Questions

**(1) After arriving at the Flannan Isles, the crew of the Hesperus**
1. immediately signaled the keepers to prepare for their departure back to the mainland.
2. found the lighthouse badly damaged by a recent storm and the lamps broken.
3. discovered that the keepers were missing despite signs of recent activity inside.
4. assumed the keepers were fishing and waited on the ship for their return.

**(2) What is true according to the passage?**
1. Official reports confirmed that a sea monster was responsible for the disappearance.
2. The logbook entries suggested that the keepers had been fighting amongst themselves.
3. It fits the pattern of local folklore, which often spoke of men being taken by spirits.
4. The theory of madness was dismissed partly because the men were known to be close friends.

**(3) What did Dr. Walter Aldridge conclude based on his research?**
1. The mystery is strictly supernatural and cannot be explained by science.
2. A single catastrophic wave likely washed the men away while they were working outside.
3. The keepers had abandoned their post to escape the boredom of the isolated island.
4. Faulty equipment caused an explosion that threw the men into the sea.

---
**Answer Key:** (1) 3, (2) 4, (3) 2
`;

const ANALYSIS_INTENT = `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** The Mary Celeste (Category A-02: Mystery)

**1. 量的構造 (Quantitative Structure)**
- **総単語数:** 346 words (Mary Celeste: ~280 words より拡張)
- **パラグラフ構成:**
    1.  **発見:** 補給船 Hesperus 到着 → 異常（旗がない）→ 調査（食事放置、無人）
    2.  **通説否定:** 怪物説・狂気説の提示 → 却下（Logbookの記述、仲の良さ）
    3.  **結論:** 現代の研究（Rogue wave）→ 複合要因（嵐＋作業）→ 悲劇的な事故

**2. 文構造・構文 (Syntactic Complexity)**
- **同格:** "the Hesperus, a lighthouse supply ship that had set sail..." (Para 1)
- **分詞構文:** "Hoping to find the three keepers..." (Para 1)
- **無生物主語:** "The sea... claimed them all" / "extreme weather event... caused the tragedy" (Para 3)

**3. 語彙 (Lexical Level)**
- **重要語彙:** speculation, rejected, transcripts (records), resort to (violated regulations), plentiful, salvaging (sheltering context)
`;

const COMPARISON_NOTES = `## 過去問との比較分析 (Detailed Comparison)

| 項目 (Item) | 過去問 (Mary Celeste) | オリジナル (Flannan Isles) | 差異 (Difference) |
| :--- | :--- | :--- | :--- |
| **総単語数 (Total Words)** | 278 words | 346 words | **+68 words (+24%)** |
| **パラグラフ数** | 3 Paragraphs | 3 Paragraphs | Same |
| **Para 1 (Introduction)** | 108 words | 105 words | Similar |
| **Para 2 (Development)** | 91 words | 98 words | +7 words |
| **Para 3 (Conclusion)** | 79 words | 143 words | **+64 words (Deep Analysis)** |
| **CEFR Level** | B2 (Mid) | B2 (High) - C1 (Low) | **+0.5 Level** |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Mary Celeste (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 遺棄された船の謎。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 発見 → 自殺説・海賊説（否定）→ アルコール爆発説（有力だが証拠なし）→ 現代の分析（クロノメーター故障＋荒天）。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「なぜ船を捨てたのか？」という乗組員の行動原理。

*   **Original (Flannan Isles):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 灯台守の消失。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 発見 → 怪物説・狂気説（否定）→ 現代の分析（Rogue Wave 巨大波）。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「不可抗力の自然現象」と「人的ミス（規則違反）」の複合要因。パラグラフ3で **物理的なメカニズム（波の破壊力）** を詳細に描写しているため、語数が増加している。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1 (内容一致 - Intro):**
    *   **過去問:** "thought they could make money" (金銭的動機)。
    *   **Original:** "missing despite signs of recent activity" (状況把握)。状況証拠（食事、オイルスキン）からの論理的推論を求める。
*   **Q2 (内容一致 - Body):**
    *   **過去問:** "unusual to operate where the ship was discovered" (海賊説の否定根拠)。
    *   **Original:** "theory of madness was dismissed ... close friends" (狂気説の否定根拠)。文脈からの消去法。
*   **Q3 (内容一致 - Conclusion):**
    *   **過去問:** "deciding he had no choice" (船長の決断)。心理的側面に焦点。
    *   **Original:** "single catastrophic wave ... working outside" (科学的仮説)。**具体的な因果関係（波→機器破損→事故）** を正確に読み取る必要があり、難易度が高い。
`;

const SYNTAX_ANALYSIS = `## 構文解説 (Syntax Analysis)

### Sentence 1: Introduction (Appositive & Relative Clause) (導入：同格と関係節)
> In December 1900, the crew of the Hesperus, **a lighthouse supply ship that had set sail from the Scottish mainland**, arrived at the remote Flannan Isles to rotate the personnel stationed there.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Subject (主語):</strong> the crew of the Hesperus</li>
    <li><strong>Insertion (挿入 - 同格):</strong> <em>, a lighthouse supply ship ... mainland,</em>
      <ul>
        <li><em>a lighthouse supply ship</em> (Hesperusと同格の説明)</li>
        <li><em>that had set sail...</em> (shipを修飾する関係代名詞節。過去完了形 had set は到着より前の動作を表す)</li>
      </ul>
    </li>
    <li><strong>Main Verb (動詞):</strong> arrived</li>
    <li><strong>Purpose (目的):</strong> to rotate the personnel... (不定詞の副詞的用法)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  主語と動詞の間に長い挿入句が入る英検準1級特有の「構造把握を遅らせる」パターンです。
</div>

---

### Sentence 2: Complex Factor Analysis (Participle phrase & Appositive) (複雑な要因分析：分詞構文と同格)
> Aldridge thinks that this extreme weather event, **combined with the fact that two keepers were already outside assisting the third**, caused the tragedy.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject (従属節の主語):</strong> this extreme weather event</li>
    <li><strong>Insertion (挿入 - 分詞構文):</strong> <em>, combined with ... the third,</em>
      <ul>
        <li><em>combined with A</em> (Aと相まって / 過去分詞の後置修飾的用法)</li>
        <li><em>the fact that...</em> (同格のthat。factの内容を説明)</li>
      </ul>
    </li>
    <li><strong>Verb (従属節の動詞):</strong> caused</li>
    <li><strong>Object (従属節の目的語):</strong> the tragedy</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  主語(event)に対する動詞(caused)が来る前に、<em>combined with...</em> という長い分詞構文が挿入されています。「A, combined with B」は因果関係を説明する重要表現です。
</div>

---

### Sentence 3: Literary Conclusion (Relative Clause & Interrogative) (文学的結末：関係節と間接疑問文)
> The sea, **which can turn violent in an instant**, claimed them all, leaving only the unanswered question of **why they had violated regulations by leaving the lighthouse unattended**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Subject (主語):</strong> The sea</li>
    <li><strong>Insertion (挿入 - 関係詞節):</strong> <em>, which can turn violent in an instant,</em> (非制限用法の関係代名詞。海というものの性質を補足説明)</li>
    <li><strong>Main Verb (動詞):</strong> claimed (命を奪った)</li>
    <li><strong>Participle Construction (分詞構文):</strong> <em>, leaving only ...</em> (付帯状況の分詞構文。「そして〜を残した」)</li>
    <li><strong>Interrogative Clause (間接疑問文):</strong> <em>why they had violated...</em> (ofの目的語となる間接疑問文)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  無生物主語(The sea)が「彼らの命を奪い、疑問だけを残した」という擬人化的な表現です。非制限用法と分詞構文が連続する、物語の締めくくりにふさわしい格調高い文構造です。
</div>
`;

export const MOCK_DATA = {
  "2025-1": {
    past: {
      title: "The Mary Celeste",
      content: MARY_CELESTE_TEXT,
      questions: MARY_CELESTE_QUESTIONS
    },
    original: {
      title: "The Mystery of the Flannan Isles",
      content: FLANNAN_ISLES_TEXT,
      questions: FLANNAN_ISLES_QUESTIONS
    },
    analysis: {
      intent: ANALYSIS_INTENT,
      comparison: COMPARISON_NOTES,
      syntax: SYNTAX_ANALYSIS
    }
  },

  "2023-3-2": {
    past: {
      title: "The Bet",
      content: `## Title: The Bet

In 1980, environmentalist Paul Ehrlich and economist Julian Simon made a bet about the future of mankind. Ehrlich predicted that population growth and increased demand for goods would put a strain on limited resources, leading to starvation and catastrophe. Simon, however, did not share Ehrlich’s pessimism, arguing that human creativity and intelligence would allow society to obtain the necessary resources or find alternatives. The purpose of the bet, therefore, was to show whose theory was correct. Since Ehrlich’s side of the argument was far more familiar to the general public, Simon hoped the bet would attract attention to his side. He bet $1,000 that in a decade, the price of five commonly used metals, including copper and nickel, would be lower. These were chosen because they were often used for manufacturing essential goods and seemed certain to be in short supply if Ehrlich’s prediction was correct.

Ten years later, Simon won—prices of the metals fell by around 50 percent overall when adjusted for inflation. However, economists say that, to some extent, Simon got lucky. If different materials or starting times had been chosen, there would have been numerous scenarios where Simon ended up paying Ehrlich. In the 1990s, for example, factors like the collapse of Communist governments in Eastern Europe led to substantial declines in raw material prices, and in the years following, they tended to rise due to the recovery of the formerly Communist economies and reductions in supply. Therefore, there would have been a large increase in prices over ten years if the bet had been delayed. It is now generally agreed that Simon was correct overall, however, and would inevitably win on a longer timescale.

Today, Ehrlich’s prediction has failed to become reality. Thanks to technology, when population growth increases demand for materials, improvements in production methods tend to counter its effects, or substitutes are found. While this seems like positive news, there are worries about the impact of debates like Ehrlich and Simon’s. The fact that technology appears to have lessened the effects of population growth is often taken as evidence that humans will also be able to overcome environmental problems in the same way. This is not necessarily the case, however, as the climate crisis shows. Furthermore, the fact that environmental debates are set out in the same way, with extreme warnings of catastrophe, such as global warming, being countered by incredibly optimistic predictions, tends to make constructive dialogue impossible and divide people into two opposing camps.`,
      questions: `### Questions

**(35) Julian Simon bet Paul Ehrlich $1,000 because**
1. he did not think that the prices of certain essential goods were related to the prices of things like common metals.
2. he believed that the price of the metals would not be affected even if they became rare due to the increased demand.
3. he wanted to demonstrate that increases in population would not result in serious shortages of the materials that humans needed to live.
4. he did not accept the idea that the world’s population was going to increase as much as Ehrlich predicted it would.

**(36) What is implied in the second paragraph about the bet between Simon and Ehrlich?**
1. The specific metals and the time period that were chosen for the bet seem to have had an effect on the result.
2. Although the prices of a few metals did decrease, Ehrlich was correct about the increasing shortages due to population growth.
3. It demonstrated that neither Ehrlich nor Simon was actually correct about the long-term trends that were occurring.
4. Simon would still have won, even if the governments of countries in Eastern Europe had not had problems in the 1990s.

**(37) According to the author of the passage, what impact do debates like the one between Simon and Ehrlich seem to have had on modern society?**
1. They have made it clear that finding alternatives to common metals will become important in the very near future.
2. They have made people realize that the way common metals are used has more effect on the environment than had previously been known.
3. They have increased debates about how current population increases are going to affect the supply of necessary materials in the future.
4. They have influenced the way that people see modern environmental problems and made it more difficult to have meaningful communication about them.

---
**Answer Key:** (35) 3, (36) 1, (37) 4`
    },
    original: {
      title: "The Peak Oil Prophecy",
      content: `## Title: The Peak Oil Prophecy

In the mid-20th century, geoscientist M. King Hubbert presented a controversial theory that would shape energy policy for decades. He predicted that U.S. oil production would peak between 1965 and 1970 and then enter a terminal decline, leading to energy scarcity and economic turmoil. Hubbert's theory, known as "Peak Oil," was based on the idea that oil is a finite resource formed over millions of years and that we were consuming it far faster than it could ever be replaced. His critics, primarily economists, argued that market forces and human ingenuity would prevent such a collapse; as oil became scarcer and more expensive, they claimed, technology would advance to find new sources or improve efficiency. Hubbert's prediction initially seemed accurate when U.S. production peaked in 1970, earning him widespread fame as a prophet of the energy crisis.

However, decades later, the narrative took an unexpected turn. While conventional oil production did decline as Hubbert predicted, he failed to foresee the "shale revolution" of the 21st century. New technologies like hydraulic fracturing (fracking) and horizontal drilling allowed energy companies to extract oil and natural gas from rock formations that were previously inaccessible. By the 2010s, instead of running out of oil, the United States became the world's leading oil producer. Economists pointed out that Hubbert had underestimated the power of price signals to drive technological innovation. When the price of oil rose, it made expensive extraction methods profitable, effectively unlocking vast new reserves that Hubbert had considered useless geology.

Today, the implications of defying the Peak Oil prophecy are complex. While technology saved the world from the immediate shortages Hubbert feared, it created a different kind of existential threat. The abundance of cheap fossil fuels has delayed the transition to renewable energy, exacerbating the climate crisis. The belief that technology will always provide a solution—proven "correct" in the case of oil supply—has led to a dangerous complacency regarding global warming. Just as in the debate between Hubbert and his critics, the public is often polarized between "doomers" who predict collapse and "techno-optimists" who believe scientific breakthroughs will fix everything. This division hinders the urgent, pragmatic cooperation needed to reduce carbon emissions, suggesting that solving the supply problem may have only accelerated the environmental one.`,
      questions: `### Original Questions

**(1) M. King Hubbert's "Peak Oil" theory was based on the belief that**
1. the United States would eventually stop importing oil from other countries to protect its economy.
2. oil was a limited resource that would inevitably run out because it was being used too quickly.
3. new technology would make it possible to create synthetic oil, making natural oil unnecessary.
4. economists were wrong to think that the price of oil would increase as it became harder to find.

**(2) Why did Hubbert's prediction eventually prove to be inaccurate?**
1. He did not anticipate that new technologies would make it possible to access oil sources that were once unreachable.
2. The demand for oil decreased significantly in the 21st century due to the rise of electric vehicles.
3. The United States government passed laws that restricted the amount of oil that companies could produce.
4. He overestimated the amount of oil that was available in rock formations, leading to a surplus.

**(3) What does the author suggest about the impact of the "shale revolution"?**
1. It has proven that renewable energy sources are not yet efficient enough to replace fossil fuels.
2. It has created a false sense of security that technology can solve all environmental problems, including climate change.
3. It has led to a situation where the world is running out of oil faster than Hubbert had originally predicted.
4. It has encouraged politicians to work together to find a solution to the problem of global warming.

---
**Answer Key:** (1) 2, (2) 1, (3) 2`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** The Bet (2023-3-2) - Category: Economics / Environment

**1. 量的構造 (Quantitative Structure)**
- **総単語数:** ~340 words (The Bet: ~350 words - Long Form)
- **パラグラフ構成:**
    1.  **予測と論争:** Hubbert's Peak (Pessimism) vs Economists (Optimism). 資源枯渇 vs 技術革新。
    2.  **結果と要因:** 一見Hubbertが正しかったが(1970 peak)、Shale Revolution (Technology) が覆した。Price signalsの役割。
    3.  **現代の視点:** 供給危機(Supply)は回避したが、環境危機(Climate)が悪化。テクノロジー楽観主義(Complacency)の弊害。

**2. テーマの模倣 (Thematic Imitation)**
- **Original:** Ehrlich (Starvation) vs Simon (Innovation). Metals price dropped. Technology solved supply but ignores climate.
- **New:** Hubbert (Energy Crisis) vs Economists (Innovation). Oil production surged. Technology solved supply but worsens climate.

**3. 語彙・表現 (Lexical Level)**
- **共通語彙:** "predict/foresee", "finite resource/short supply", "ingenuity/intelligence", "alternatives/substitutes", "countered by/opposing camps".
- **重要表現:** "terminal decline", "existential threat", "complacency".`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | The Bet (過去問) | The Peak Oil Prophecy (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **対立構造** | Ehrlich (環境学者) vs Simon (経済学者) | Hubbert (地質学者) vs Economists (経済学者) | 「物理的限界(Finite)」対「人間の知恵(Ingenuity)」 |
| **賭け/予測** | 金属価格が下がる (Simon勝利) | 石油生産がピークアウトする (Hubbert敗北) | 技術革新が資源不足の予測を覆した |
| **勝因/要因** | 代替物(Fiber optics etc)と市場原理 | シェール革命(Fracking)と価格メカニズム | "Technology" と "Price signals" が供給不足を解消 |
| **教訓(パラ3)** | 技術が全て解決するわけではない(気候変動) | 供給は解決しても、環境負荷は残る(気候変動) | 楽観論(Complacency)が建設的な対話(Dialogue)を阻害する |
| **設問パタン** | Q35:賭けの理由(Intention) / Q36:結果の条件(Details) / Q37:現代への影響(Impact) | Q1:予測の根拠(Basis) / Q2:外れた理由(Reason) / Q3:現代への影響(Impact) | 「理論→結果(技術)→社会的影響」の構造 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **The Bet (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 人口爆発と資源枯渇の賭け。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 悲観論 vs 楽観論 → 楽観論の勝利(価格下落) → しかし運もあった + 技術万能論への警鐘。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「不毛な対立」が現代の環境問題解決を難しくしているという社会的側面。

*   **Original (The Peak Oil Prophecy):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Peak Oil説の盛衰。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 枯渇予測 → 技術(フラッキング)による復活 → 供給過多による気候変動の加速。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「技術で解決できた(Correct)」という成功体験が、逆に次の危機への対応を遅らせているというジレンマ。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1/35 (内容一致 - Basis):**
    *   **過去問:** "demonstrate that increases in population would not result in serious shortages" (賭けの意図)。
    *   **Original:** "oil was a limited resource that would inevitably run out" (理論の前提)。
*   **Q2/36 (内容一致 - Result/Nuance):**
    *   **過去問:** "specific metals and the time period ... had an effect" (結果の条件付き正当性)。運の要素。
    *   **Original:** "did not anticipate that new technologies would make it possible" (予測が外れた技術的理由)。
*   **Q3/37 (内容一致 - Impact):**
    *   **過去問:** "influenced the way that people see ... made it more difficult" (二極化の弊害)。
    *   **Original:** "created a false sense of security" (慢心)。楽観論の副作用。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Appositive & That-clause (同格とThat節)
> Hubbert's theory, **known as "Peak Oil,"** was based on the idea **that oil is a finite resource formed over millions of years**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> Hubbert's theory
      <ul>
        <li><em>, known as "Peak Oil,"</em> (過去分詞の挿入句)</li>
      </ul>
    </li>
    <li><strong>Verb Phrase:</strong> was based on the idea... (〜という考えに基づいていた)</li>
    <li><strong>Appositive Clause (同格):</strong> <em>that oil is a finite resource...</em> (ideaの内容説明)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "the idea that..." は同格の超基本形です。挿入句(known as...)も頻出なので、文の骨格を瞬時に見抜けるようにしましょう。
</div>

---

### Sentence 2: Concession (譲歩のWhile)
> **While conventional oil production did decline as Hubbert predicted**, he failed to foresee the "shale revolution" of the 21st century.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Sub Clause (譲歩):</strong> While conventional oil production did decline...
      <ul>
        <li><em>did decline</em> (強調のdo: 確かに減少した)</li>
        <li><em>as Hubbert predicted</em> (ハバートが予測した通りに)</li>
      </ul>
    </li>
    <li><strong>Main Clause:</strong> he failed to foresee... (彼は〜を予見し損ねた)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  While S V, Main S V. の形は「SはVしたが、しかし...」という譲歩・対比を表します。予測の一部は当たったが、肝心な部分を外したという文脈で効果的です。
</div>

---

### Sentence 3: Complex Subject & Appositive (複雑な主語と同格)
> **The belief that technology will always provide a solution**—proven "correct" in the case of oil supply—**has led to a dangerous complacency regarding global warming**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> The belief
      <ul>
        <li><em>that technology will always provide a solution</em> (同格のthat節)</li>
        <li><em>—proven "correct" in the case of oil supply—</em> (挿入句：石油の場合は正しいと証明されたが)</li>
      </ul>
    </li>
    <li><strong>Verb:</strong> has led to (〜につながった/招いた)</li>
    <li><strong>Object:</strong> a dangerous complacency (危険な慢心)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  非常に長い主語のあとに動詞(has led to)が来ています。ダッシュでの挿入や同格節が主語を長くしていますが、"The belief ... has led to complacency" が骨子です。
</div>
`
    }
  },
  "2023-3-1": {
    past: {
      title: "A Daring Escape (Expanded)",
      content: `## Title: A Daring Escape (Expanded Version)

Robert Smalls was born in South Carolina in the United States in 1839, a time when slavery was common in the South. He was the son of an enslaved woman, and when he was still only a boy, his mother persuaded her owner to send Smalls to work on the docks in Charleston City. She believed her son would be safer there, away from the harsh conditions of the plantation fields. Smalls thrived in the city, learning various skills as a rigger and sailor, but his status remained that of property. He later married an enslaved woman named Hannah and had two children, but he constantly feared they would be sold to a different owner and he would never see them again. Despite his hard work, he was unable to raise enough money to buy his family’s freedom, so escape became the only viable option to secure their future together.

In 1861, the American Civil War began between President Abraham Lincoln’s Union forces and the southern Confederate States. The Confederates controlled Charleston, and because of his extensive experience working on the docks and piloting vessels, Smalls was taken to work on a Confederate ship called the *Planter* that carried supplies of weapons and ammunition. This assignment created a unique situation that gave Smalls the opportunity he had been waiting for. He noticed that the white captain and officers of the ship often went ashore at night to spend time with their families, leaving Smalls and the other enslaved crew members alone on the ship. Seeing a chance, Smalls persuaded the other crew members to join him in a daring escape plan that would either lead to freedom or death.

Smalls’s plan was risky and required precise timing. First, on a night in May 1862, he donned the captain's wide-brimmed straw hat to disguise himself in the darkness. He and the crew picked up Smalls’s family and the families of other crewmen from a waiting wharf and left the harbor without being discovered by Confederate guards. If they managed this, they still risked being fired on by the Union Navy, which had formed a blockade around the harbor to prevent Confederate ships from leaving. Fortunately, during his time working on the ship, Smalls had learned the specific whistle signals for gaining safe passage through Confederate checkpoints, including the heavily guarded Fort Sumter. Once the ship was out of the harbor and approaching the Union blockade, he quickly lowered its Confederate flag and replaced it with a white bedsheet as a flag of surrender to discourage the Union ships from attacking. The escape was successful; Smalls not only gained freedom for his family but was also paid half the value of the ship and its cargo he handed over to the Union.`,
      questions: `### Questions

**(32) According to the first paragraph, what is true about Robert Smalls?**
1. He was forced to go to Charleston to prevent his mother from being harmed by the man who owned her.
2. He was concerned that he would be separated from his wife and children forever if they were bought by a different owner.
3. He earned enough money to buy freedom for his family, but his owner refused to let them go.
4. He took his family to live in Charleston because he thought it was a safe place to raise his children.

**(33) When the American Civil War began, Smalls**
1. persuaded the Confederates to let him work on one of its ships so that he could use the ship to get back to his hometown.
2. lost his job on the docks because the Confederates no longer had a need for enslaved workers.
3. was made to work on a ship that was used by the Confederates to transport weapons needed to fight the civil war.
4. gained favor with the Confederates by helping them find a way to get their ships out of Charleston harbor.

**(34) What was one factor that helped Smalls escape with his family?**
1. He had managed to obtain a Union flag, which he raised to prevent the Union Navy from attacking his ship.
2. His knowledge of the harbor allowed him to find a route that avoided Confederate guards.
3. He had friends in the Union Navy who were sympathetic to his situation and helped him get out of the harbor.
4. His experience had taught him how to trick the Confederate checkpoints into letting his ship pass safely.

---
**Answer Key:** (32) 2, (33) 3, (34) 4`
    },
    original: {
      title: "Flight to Freedom: The Berlin Balloon Escape",
      content: `## Title: Flight to Freedom: The Berlin Balloon Escape

In the late 1970s, East Germany was a country isolated by the Iron Curtain, with its citizens strictly forbidden from crossing into West Germany. The border was heavily fortified with walls, barbed wire, and armed guards under orders to shoot anyone attempting to escape. Living under the constant surveillance of the Stasi secret police, Peter Strelzyk and Günter Wetzel dreamed of a life of freedom for themselves and their families. However, traditional escape routes were nearly impossible. Tunnels were being discovered, and hidden compartments in cars were routinely checked. Strelzyk and Wetzel realized they needed a method that the border guards would not expect and could not easily intercept. After much discussion, they settled on an audacious idea: they would build a hot air balloon and fly over the border at night.

The plan required months of secret and dangerous preparation. They had to purchase large quantities of fabric without arousing suspicion, often traveling to distant towns to buy small amounts at a time. Using an old sewing machine in a hidden attic, their wives, Doris and Petra, stitched together scraps of taffeta and bedsheets to create the massive balloon envelope. Meanwhile, the men engineered a burner using propane gas cylinders and a homemade platform. They faced numerous setbacks, including a failed first attempt where the balloon tore and crashed just meters from the border. Terrified that the crash site would reveal their identity to the police, they frantically worked to build a second, larger balloon in record time, fearing that the Stasi were closing in on them.

On a windy night in September 1979, the two families packed into the fragile craft. Launching from a forest clearing, the balloon ascended rapidly, carried by the currents toward the West. As they floated through the dark sky, they risked being spotted by searchlights or shot down by border patrols. The flight was short and chaotic; the burner failed as they ran out of gas, forcing a crash landing in a field. Unsure of their location, they cautiously approached a police officer. When the officer informed them, confused but calm, that they were in Naila, West Germany, the families wept with relief. Their daring aerial escape became a symbol of the human desire for liberty, proving that ingenuity could overcome even the most fortified barriers.`,
      questions: `### Original Questions

**(1) What problem did Strelzyk and Wetzel face when planning their escape?**
1. They had no family members willing to join them on such a dangerous journey.
2. The border was so well-protected that standard methods of escaping were too dangerous to try.
3. The West German government had announced that it would no longer accept refugees from the East.
4. They differed in their opinions on whether a tunnel or a balloon would be the safer option.

**(2) How did the families manage to build the balloon?**
1. They stole a finished balloon from a military base and modified it for their needs.
2. They bought all the necessary materials in their hometown, claiming they were starting a textile business.
3. They worked in secrecy, buying materials in small amounts to avoid attracting attention from the authorities.
4. They received instructions and supplies dropped by aircraft sent from West Germany.

**(3) What happened during the final escape attempt?**
1. The balloon was spotted by searchlights and fired upon, forcing them to turn back.
2. They landed safely in a designated airport in West Germany after a smooth flight.
3. The Stasi arrived at the launch site just as they were taking off, but were too late to stop them.
4. They ran out of fuel and crashed, initially legally unsure if they had actually made it across the border.

---
**Answer Key:** (1) 2, (2) 3, (3) 4`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** A Daring Escape (2023-3-1 Expanded) - Category: History / True Story

**1. 量的構造 (Quantitative Structure)**
- **総単語数:** ~340 words (Expanded version に合わせて調整)
- **パラグラフ構成:**
    1.  **背景と動機:** 抑圧された環境(Slavery/East Germany)と家族への懸念。通常の手段が不可能であること。
    2.  **計画と準備:** 独自の手段(Ship/Balloon)の確保。秘密裏の準備とリスク(Patrols/Stasi)。
    3.  **実行と成功:** 決定的な夜。具体的なトラブル(Checkpoints/Gas out)と機転。成功と報酬(Freedom)。

**2. テーマの模倣 (Thematic Imitation)**
- **Original:** Civil War South. Stealing a Confederate ship. Tricking checkpoints.
- **New:** Cold War East Germany. Building a Hot Air Balloon. Flying over the border.

**3. 語彙・表現 (Lexical Level)**
- **共通語彙:** "persuaded/settled on", "risky/audacious", "blockade/fortified", "checkpoints/border patrols", "surrender/liberty".
- **重要表現:** "donned the disguise", "arousing suspicion", "closing in on them".`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | A Daring Escape (過去問・拡張版) | Flight to Freedom (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **時代・背景** | 南北戦争中のアメリカ南部 (Slavery) | 冷戦下の東ドイツ (Iron Curtain) | 抑圧された体制からの脱出 |
| **脱出手段** | 敵の船 (The Planter) を奪取 | 手作りの気球 (Hot Air Balloon) | 既存のルートが使えないための「大胆なアイデア」 |
| **成功の鍵** | 信号(Signals)と変装(Disguise) | 技術(Engineering)と執念(Persistence) | 知識と準備が運命を分けた |
| **リスク** | 北軍による誤射・南軍の検問 | 秘密警察(Stasi)・墜落・銃撃 | 失敗＝死・投獄という極限状況 |
| **設問パタン** | Q32:動機(Family) / Q33:機会(Ship job) / Q34:成功要因(Knowledge) | Q1:動機(Impossible border) / Q2:準備(Secrecy) / Q3:結末(Uncertainty) | 「なぜ・どのように」成功したかを問う |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **A Daring Escape (Expanded):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 奴隷制度からの脱出 (Robert Smalls)。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 家族離散の恐怖 → 船での労働とチャンス → 敵の信号を真似て封鎖を突破。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 内部の知識(Insider knowledge)を利用した知能犯的な脱出。

*   **Original (The Berlin Balloon Escape):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 全体主義からの脱出 (Strelzyk Family)。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 監視社会と閉塞感 → 気球の自作と失敗 → 命がけの夜間飛行と不時着。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 素人がゼロから技術を作り上げた(DIY)執念と工学的工夫。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1/32 (内容一致 - Motivation):**
    *   **過去問:** "separated from his wife and children" (家族を守るため)。詳細な心理描写。
    *   **Original:** "border was so well-protected" (消去法的な選択)。物理的な制約。
*   **Q2/33 (内容一致 - Opportunity/Method):**
    *   **過去問:** "made to work on a ship" (配置転換)。偶然のチャンス。
    *   **Original:** "bought materials in small amounts" (隠密行動)。能動的な準備。
*   **Q3/34 (内容一致 - Success Factor):**
    *   **過去問:** "trick the Confederate checkpoints" (機転)。
    *   **Original:** "ran out of fuel ... unsure" (劇的な結末)。ギリギリの成功。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Prepositional Phrase & Participle (前置詞句と分詞)
> They had to purchase large quantities of fabric **without arousing suspicion**, **often traveling to distant towns to buy small amounts at a time**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause:</strong> They had to purchase large quantities...</li>
    <li><strong>Adverbial Phrase:</strong> <em>without arousing suspicion</em> (怪しまれることなく)</li>
    <li><strong>Participle Construction (分詞構文):</strong> <em>, often traveling to distant towns...</em> (しばしば遠くの町へ旅しては...)
      <ul>
        <li>付帯状況（〜しながら）または結果を表しています。</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "without -ing" で否定の付帯状況を表し、さらに分詞構文で具体的な行動を補足する、物語の描写に優れた文です。
</div>

---

### Sentence 2: Participle (Reason) & Emotion (感情の原因を表す分詞)
> **Terrified that the crash site would reveal their identity to the police**, they frantically worked to build a second, larger balloon.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Participle Construction (分詞構文):</strong> Terrified that... (〜におびえて / 〜だったので)
      <ul>
        <li><em>Being terrified that...</em> のBeingが省略された形。感情形容詞/過去分詞で始まる分詞構文は理由を表すことが多いです。</li>
      </ul>
    </li>
    <li><strong>Main Clause:</strong> they frantically worked... (彼らは必死に作業した)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  文頭の過去分詞(Terrified)が主語(they)の状態（心理的動機）を説明しています。物語の緊迫感を伝える表現です。
</div>

---

### Sentence 3: Semicolon & Result (セミコロンと結果)
> The flight was short and chaotic**;** the burner failed as they ran out of gas, **forcing a crash landing in a field**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>First Clause:</strong> The flight was short and chaotic</li>
    <li><strong>Semicolon (;):</strong> 接続詞を使わず文をつなぐ（具体的説明）。</li>
    <li><strong>Second Clause:</strong> the burner failed as they ran out of gas
      <ul>
        <li><em>as they ran out of gas</em> (ガス欠になったため/とき)</li>
      </ul>
    </li>
    <li><strong>Participle Construction (結果):</strong> <em>, forcing a crash landing...</em> (その結果、不時着を余儀なくされた)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  ", forcing..." のような分詞構文は、前の出来事が引き起こした不可避の結果を表すのに便利です。
</div>
`
    }
  },
  "2024-1": {
    past: {
      title: "Wolf Packs",
      content: `## Title: Wolf Packs

There is a widespread idea that wild packs of wolves are led by an aggressive leader—an alpha male—that dominates the group, and that this results in violent power struggles when other members of the group challenge the alpha male. It turns out, however, that this idea may largely be a myth. It appears to have arisen from research on captured wolves, which often demonstrated such behavior. Captive packs are usually made up of adult wolves being forced to live together even though they did not grow up with each other and are not related, which is why it is common for power struggles in such packs to result in violence. Research has now found, though, that captive and wild wolves are too dissimilar to assume that the behaviors of one resemble those of the other. As one biologist describes it, a wild wolf pack operates much like a multigenerational human family, while a captive pack has more in common behaviorally with humans in prisons, where strangers are forced to live together.

Biologists studying wild wolves in the 1980s and 1990s made some interesting observations. They found that a pair of wolves consisting of an older adult male and a female wolf generally acted as the leaders of a pack composed of their offspring and other adult wolves without partners. All wolves in the pack follow the lead male's decisions, and all but the lead male also submit to the lead female. This system appears to be fully accepted by most wild wolves and is usually enforced by communication rather than violence. The social structure is also flexible—for example, when food is hard to find, the wolf leaders often ensure that the pack's youngest are fed first. Such behavior demonstrates how these leaders act similarly to the human parents of a large family.

When a significant conflict does occur among the members, dissatisfied wolves may leave the pack. These wolves often seek out protection in a different pack, while some start their own pack after finding a mate. In 2022, researchers discovered that wild wolves that had started their own pack often had something in common: many of them were carrying a particular parasite called *Toxoplasma gondii*. This parasite appears to make the wolves more likely to take bolder and riskier actions, which can aid their survival in some situations. Scientists continue to be fascinated by the social relationships of wild wolves and their packs.`,
      questions: `### Questions

**(25) The idea of an alpha male wolf is described as a myth because**
1. researchers have observed some captured wolves successfully joining packs in the wild after escaping.
2. the behavior thought to be demonstrated by alpha male wolves has only ever been seen in human males in prisons.
3. members of captive wolf packs that disagree with each other often end up forming smaller packs.
4. the concept of alpha male behavior in wolf packs originally came from observations of captured wolves instead of wild ones.

**(26) What did biologists learn about wild wolves in the 1980s and 1990s?**
1. Members of a wild wolf pack tend not to use violence to make sure other wolves follow the rules of the group.
2. The lead female wolf generally only gives orders to other wolves in the pack that are her own offspring.
3. Many wild packs are likely to be led by the strongest pair of wolves that do not yet have partners.
4. The power structure of their packs tends to be firmly fixed until the younger members have been grown into adult wolves.

**(27) According to the passage, what did researchers discover about wild wolves that left their packs?**
1. If they were not able to join a new pack soon after leaving, then their survival rate would dramatically decrease.
2. The actions of those that eventually established their own packs may often have been influenced by another organism.
3. Wolves that lived alone were found to have far fewer fatal parasites than those that stayed with their packs.
4. Although they did not leave their packs in an unfriendly way, they often ended up fighting violently with their old packs.

---
**Answer Key:** (25) 4, (26) 1, (27) 2`
    },
    original: {
      title: "The Myth of the 'Left-Brained' Thinker",
      content: `## Title: The Myth of the 'Left-Brained' Thinker

There is a pervasive belief in popular psychology that people are either "left-brained" (logical and analytical) or "right-brained" (creative and artistic), and that this dominant hemisphere dictates their personality and skills. It turns out, however, that this binary classification is largely a myth. It appears to have originated from misinterpretations of Nobel Prize-winning research in the 1960s on patients who had undergone split-brain surgery to treat epilepsy. In these extreme cases where the connection between the two hemispheres was severed, the sides did function independently. However, for the vast majority of people with intact brains, the two hemispheres are constantly communicating and working in tandem. Research has now established that brain scans show no evidence of a dominant side; even during creative tasks, the "logical" left brain is active, and vice versa.

Neuroscientists studying brain connectivity have made some clarifying observations using modern fMRI technology. They found that while certain functions are indeed localized—for example, language processing is typically centered in the left hemisphere—complex cognitive tasks require the integrated effort of the entire brain which functions like a highly coordinated network. Solving a math problem (stereotypically left-brain) requires visualization (stereotypically right-brain), just as painting a picture requires planning and technique. This integrated system allows for a flexibility and power that a divided brain could never achieve. As one researcher puts it, labeling someone as "right-brained" is as scientifically inaccurate as saying they use only their right lung; the system is designed to function as a whole.

Despite the lack of scientific evidence, the left-brain/right-brain myth persists in education and corporate training. When individuals believe they are biologically limited to one mode of thinking, they may avoid developing skills associated with the "other" side. For instance, a student labeled as "right-brained" might give up on mathematics too easily. Recently, psychologists have focused on the concept of "growth mindset," which suggests that the brain is plastic and can develop new pathways throughout life. This perspective encourages people to view their cognitive abilities not as fixed traits determined by a dominant hemisphere, but as malleable skills that can be improved with practice. The human brain remains a complex web of connections, resisting simple labels.`,
      questions: `### Original Questions

**(1) The idea of people being "left-brained" or "right-brained" is described as a myth because**
1. it was invented by corporate trainers to sell personality tests to companies.
2. it assumes that the left hemisphere controls creativity while the right controls logic, which is the reverse of reality.
3. it originated from a misunderstanding of research done on patients who had a specific medical procedure.
4. researchers found that people with epilepsy actually use their brains more efficiently than healthy people.

**(2) What have neuroscientists learned using modern technology?**
1. Complex tasks require the whole brain to work together as a network rather than relying on one side.
2. Language processing is the only function that is evenly distributed across both hemispheres.
3. The brain connects the two hemispheres only when a person is performing an artistic task.
4. Most people actually have a dominant hemisphere, but it changes depending on the time of day.

**(3) According to the passage, what is a negative consequence of believing in this myth?**
1. Schools may stop teaching art and music because they are seen as less important than math.
2. People may limit their own potential by avoiding subjects they believe they are not biologically suited for.
3. Companies might fire employees who are identified as "right-brained" because they are seen as disorganized.
4. Students with a "growth mindset" are often discouraged from taking standardized tests.

---
**Answer Key:** (1) 3, (2) 1, (3) 2`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Wolf Packs (2024-1) - Category: Biology / Animal Behavior (corrected to Psychology/Neuroscience for imitation)

**1. 量的構造 (Quantitative Structure)**
- **総単語数:** ~330 words (Wolf Packs: ~330 words と同等)
- **パラグラフ構成:**
    1.  **神話の提示と否定:** Alpha male/Left-brain mythの提示 → 否定(Myth)。起源(Captured wolves/Split-brain patients)の誤解。
    2.  **真実の観察:** Family unit/Whole brain network。協力関係と柔軟性(Flexible)。
    3.  **影響と新発見:** Parasite Impact/Growth Mindset。外部要因や認識による行動の変化。

**2. テーマの模倣 (Thematic Imitation)**
- **Original:** Widespread idea (Alpha) -> Myth. Captive (Prison) vs Wild (Family). Parasite leads to risk-taking.
- **New:** Widespread idea (Left/Right Brain) -> Myth. Split-brain (Extreme) vs Healthy (Network). Labeling leads to self-limitation.

**3. 語彙・表現 (Lexical Level)**
- **共通語彙:** "widespread idea/pervasive belief", "turns out", "arisen from/originated from", "demonstrated/established", "flexible/plastic".
- **重要表現:** "working in tandem", "highly coordinated", "malleable skills".`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Wolf Packs (過去問) | The Left-Brain Myth (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **対象** | オオカミの群れ (Alpha Male) | 人間の脳 (Left/Right Brain) | 「広く信じられている俗説(Myth)」の科学的否定 |
| **誤解の起源** | 捕獲されたオオカミ (不自然な環境/Prison) | 分離脳手術患者 (特殊な症例/Extreme case) | 特殊な状況下の観察を一般化してしまった誤り |
| **真実** | 家族のような協力関係 (Family unit) | 全体のネットワーク (Integrated network) | 「対立/支配」ではなく「協力/統合」が本質 |
| **新たな視点** | 寄生虫による行動変容 (Toxoplasma) | 固定観念による自己制限 (Fixed mindset) | 生物学的・心理的な要因が行動に与える影響 |
| **設問パタン** | Q25:神話の理由(origin) / Q26:真実の姿(cooperation) / Q27:外部要因(parasite) | Q1:神話の理由(origin) / Q2:真実の姿(network) / Q3:信じることの弊害(consequence) | 「誤解の発生→真の姿→さらなる発見/影響」の流れ |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Wolf Packs (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> オオカミのリーダー論（アルファオス）。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 神話(暴力による支配) → 起源(捕獲オオカミ) → 真実(家族的ケア) → 新発見(寄生虫の影響)。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「自然界の観察」に基づくパラダイムシフト。

*   **Original (The Left-Brain Myth):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 血液型性格診断のような脳のタイプ論。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 神話(左右機能分担) → 起源(分離脳研究) → 真実(統合的ネットワーク) → 教育への影響(マインドセット)。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「人間理解(心理学)」における単純化の危険性。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1 (内容一致 - Origin):**
    *   **過去問:** "came from ... captured wolves instead" (誤った観察源)。
    *   **Original:** "originated from a misunderstanding of research" (誤った解釈)。
*   **Q2 (内容一致 - Reality):**
    *   **過去問:** "tend not to use violence" (真実の行動)。平和的解決。
    *   **Original:** "require the whole brain to work together" (真実の機能)。全体的解決。
*   **Q3 (内容一致 - Discovery/Impact):**
    *   **過去問:** "influenced by another organism" (寄生虫)。具体的な生物学的要因。
    *   **Original:** "limit their own potential" (自己制限)。心理的な悪影響。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Inference from Past (完了形の推量)
> It **appears to have originated** from misinterpretations of Nobel Prize-winning research in the 1960s on patients who had undergone split-brain surgery.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Verb:</strong> appears to (〜のように見える)</li>
    <li><strong>Perfect Infinitive:</strong> <em>have originated</em> (起源があった＝由来している)
      <ul>
        <li>"appears to originate" ではなく "have originated" とすることで、過去の出来事であることを示しています。</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "S appears to have p.p." は「Sは（過去に）〜したように見える」という、過去の事実に対する現在の推量を表す重要表現です。
</div>

---

### Sentence 2: Comparison & Parallelism (対比と並列構造)
> **Solving a math problem** (stereotypically left-brain) **requires visualization** (stereotypically right-brain), **just as painting a picture requires planning and technique**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>First Clause:</strong> Solving a math problem ... requires visualization...</li>
    <li><strong>Conjunction:</strong> <em>, just as</em> (〜とまったく同様に)</li>
    <li><strong>Second Clause:</strong> painting a picture requires planning...</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "A do ..., just as B do ..." の構文です。左右の脳の機能が単純に分けられないことを、数学（左）にも右の機能が、絵画（右）にも左の機能が必要という例で対比させています。
</div>

---

### Sentence 3: "Not A but B" & Infinitive (否定と不定詞)
> This perspective **encourages people to view** their cognitive abilities **not as fixed traits** determined by a dominant hemisphere, **but as malleable skills** that can be improved with practice.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Verb:</strong> encourages people to view... (人々が〜とみなすよう促す)</li>
    <li><strong>Object Complement (view A as B):</strong>
      <ul>
        <li>A: their cognitive abilities</li>
        <li>B: <strong>not</strong> as fixed traits ..., <strong>but</strong> as malleable skills...</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "view A as B" のB部分に "not X but Y" (XではなくY) が組み込まれています。長い文ですが、骨格をつかむことが重要です。
</div>
`
    }
  },
  "2024-2": {
    past: {
      title: "Measuring Intelligence",
      content: `## Title: Measuring Intelligence

Intelligence quotient, commonly known as IQ, claims to be a numerical representation of a person's cognitive ability or intelligence. The first IQ test was developed in the early 1900s by a French psychologist named Alfred Binet. Binet was asked by the French government to create a test that could be used to identify children who needed educational support. The Binet-Simon test that was created as a result provided the foundation for all IQ tests that have been produced since. Because they were a quick and easy way to categorize people, IQ tests soon became a popular tool in educational and employment settings to measure student performance and assess potential new recruits.

Although IQ tests are now widely used, there is ongoing debate regarding their validity. One issue raised by critics relates to the nature of intelligence. IQ tests are based on the principle that all aspects of intelligence can be measured by one standardized test of general cognitive ability. However, a large-scale study carried out in Canada suggests that this model of intelligence is too simple. In the study, which included over 100,000 participants, researchers asked subjects to answer questions that targeted a range of cognitive skills. As expected, some participants were better at answering the questions than others, but the researchers believed this could only be explained by considering three different aspects of mental ability—short-term memory, reasoning, and verbal skills. Furthermore, MRI scans taken while a small group of the participants were answering questions indicated that each of these abilities was controlled by a different region in the brain.

Despite this criticism, proponents of IQ tests believe they can be beneficial if used appropriately. In US schools, for example, children from ethnic minorities tend to be overlooked for gifted education programs. One reason for this is that, historically, candidates for such programs have been selected based on referrals from teachers. Studies have shown that the academic performance and behavior of students are influenced by their teachers' attitudes toward them, which may, in turn, be affected by the teachers' subconscious racial biases. Since the majority of teachers in US schools are White, students from ethnic minorities tend to have less chance of being selected for such programs. However, in US school districts where IQ tests have been used in the selection process, more students from ethnic minorities have been able to enter the programs. Supporters of the tests say they are a fairer selection method because they provide an objective measure of ability.`,
      questions: `### Questions

**(25) According to the first paragraph, what is true about Alfred Binet?**
1. The test he developed was not initially intended for the purpose of measuring intelligence in children.
2. The test he designed became the basis for all IQ tests that have been developed since.
3. He lost his job with the French government because of his strong opinions regarding IQ tests.
4. He was not the first person to attempt to create a test that could be used to measure a person's intelligence.

**(26) A study in Canada suggested that**
1. although intelligence consists of several different aspects, it is dependent on the function of just one part of the brain.
2. while most IQ tests are based on valid research, the way they are carried out makes them ineffective.
3. IQ tests are designed based on the mistaken concept that intelligence is a single ability that can be measured in isolation.
4. evidence from brain scans indicates there is less variation in people's intelligence than was previously believed.

**(27) What does the author of the passage say about gifted education programs in US schools?**
1. IQ tests are being misused by teachers as a way to determine which students should enter such programs.
2. Results of IQ tests provide little help in predicting how well students in such programs will perform.
3. Students from ethnic minorities tend to perform better in such programs than White students do.
4. The use of IQ tests has given students from ethnic minorities a better chance of entering such programs.

---
**Answer Key:** (25) 2, (26) 3, (27) 4`
    },
    original: {
      title: "The Standardized Trap: The SAT Debate",
      content: `## Title: The Standardized Trap: The SAT Debate

Standardized testing has been a pillar of the American education system for over a century, with the SAT being the most prominent example used for college admissions. Originally adapted from an army intelligence test, the SAT was designed to provide a meritocratic way to assess academic aptitude, regardless of a student's high school background. The College Board, which administers the test, argues that it offers an objective yardstick to compare students from different grading systems. Consequently, for decades, a high SAT score was seen as the golden ticket to elite universities, serving as a reliable predictor of a student's potential success in higher education.

However, in recent years, the validity of the SAT has come under intense scrutiny. Critics argue that the test measures socioeconomic status more than actual intelligence or academic potential. A growing body of research indicates that SAT scores correlate strongly with family income: students from wealthy families can afford expensive coaching and test-prep courses, giving them a distinct advantage over their lower-income peers. Furthermore, some studies suggest that the test question formats themselves may contain subtle cultural biases that favor students from specific backgrounds. As a result, many educators now believe that relying heavily on SAT scores reinforces existing social inequalities rather than leveling the playing field.

In response to this criticism, a significant number of US colleges and universities have adopted "test-optional" policies, where submitting SAT scores is not mandatory. Supporters of this movement claim that checking a broader range of criteria—such as high school grades, essays, and extracurricular achievements—provides a more holistic view of a student's capabilities. Interestingly, data from institutions that have dropped the testing requirement shows that the diversity of their applicant pools has increased without compromising academic standards. While proponents of the SAT warn that grade inflation in high schools makes standardized tests necessary, the shift away from them seems to be accelerating, suggesting a fundamental rethinking of how we measure human potential.`,
      questions: `### Original Questions

**(1) What was the original purpose of the SAT?**
1. To measure the intelligence of army recruits during wartime to assign them to appropriate units.
2. To provide a fair method for evaluating students' academic ability irrespective of which high school they attended.
3. To generate revenue for the College Board by charging fees for test administration and preparation materials.
4. To identify students from wealthy families who could afford the tuition fees of elite universities.

**(2) Why do critics question the validity of the SAT?**
1. They believe the test is too easy and fails to distinguish between average and exceptional students.
2. Research suggests that the scores are more reflective of a student's financial background than their actual ability.
3. The test format has not changed in over a century, making it outdated for modern educational needs.
4. The College Board has admitted that the test questions are intentionally designed to favor specific cultural groups.

**(3) What has been the effect of colleges adopting "test-optional" policies?**
1. Academic standards at these institutions have dropped significantly due to the admission of less qualified students.
2. High schools have stopped inflating grades because there is no longer a need to compete with SAT scores.
3. The range of students applying to these colleges has become more diverse without lowering academic quality.
4. The College Board has been forced to shut down because fewer students are paying to take the test.

---
**Answer Key:** (1) 2, (2) 2, (3) 3`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Measuring Intelligence (2024-2) - Category: Psychology / Education

**1. 量的構造 (Quantitative Structure)**
- **総単語数:** ~300 words (過去問と同等)
- **パラグラフ構成:**
    1.  **導入:** IQ/SATの起源と目的。当初は公平な尺度(Objective measure)として歓迎された。
    2.  **批判:** 妥当性(Validity)への疑問。IQは単純すぎる vs SATは貧富の差を反映しすぎる。研究(Study/Research)による反証。
    3.  **擁護/転換:** 一方で役に立つ側面も(IQ for minorities) vs 廃止の動き(Test-optional)。「公平性(Fairness)」と「客観性(Objectivity)」の再定義。

**2. テーマの模倣 (Thematic Imitation)**
- **Original:** IQ Test. Single metric vs Multiple Intelligences. Biased teachers vs Objective Test.
- **New:** SAT Test. Meritocracy vs Socioeconomic Bias. Test Score vs Holistic Review.

**3. 語彙・表現 (Lexical Level)**
- **共通語彙:** "numerical representation/yardstick", "provide the foundation/pillar", "ongoing debate/scrutiny", "proponents/supporters".
- **重要表現:** "assess potential", "correlate with", "leveling the playing field", "holistic view".`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Measuring Intelligence (過去問) | The SAT Debate (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **対象** | IQテスト (知能指数) | SAT (大学進学適性試験) | 「能力の数値化」とその是非 |
| **批判の論点** | 知能は単一の指標では測れない (Too simple) | スコアは親の年収に比例する (Socioeconomic bias) | 標準化された尺度(Standardized metric)への疑義 |
| **研究結果** | カナダの研究 (3つの能力に分かれる) | 研究データ (富裕層が有利) | データに基づいた妥当性の否定 |
| **逆説/擁護** | 教師の偏見よりIQの方が公平な場合がある | テスト廃止で多様性が増す (SAT擁護派はGrade Inflationを懸念) | 「公平性(Fairness)」とは何かという問い |
| **設問パタン** | Q25:当初の目的 / Q26:研究内容(批判) / Q27:著者の見解(擁護) | Q1:当初の目的 / Q2:批判の根拠 / Q3:新しい動きの影響 | 「導入→批判→再評価/変化」の論理構成を問う |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Measuring Intelligence (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> IQテストの妥当性と限界。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 起源(Binet) → 批判(単純すぎる) → 擁護(マイノリティへの公平性)。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「能力を一つの数値で測れるか？」という科学的・社会的な問い。

*   **Original (The SAT Debate):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> SAT(大学入試)の公平性。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 起源(Meritocracy) → 批判(富裕層有利) → 変化(Test-optionalへの移行)。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「テストスコアは真の実力を反映しているか？」という教育格差の問題。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1 (内容一致 - Intro):**
    *   **過去問:** "not initially intended for the purpose" (Binetの当初の意図)。
    *   **Original:** "provide a fair method" (SAT導入時の理想)。「本来の目的」を問う点で共通。
*   **Q2 (内容一致 - Body):**
    *   **過去問:** "mistaken concept that intelligence is a single ability" (知能モデルへの批判)。
    *   **Original:** "scores are more reflective of a student's financial background" (妥当性への批判)。
*   **Q3 (内容一致 - Conclusion):**
    *   **過去問:** "given students ... a better chance" (IQテストの予期せぬ利点)。逆説的な擁護論。
    *   **Original:** "range of students ... become more diverse" (テスト廃止の利点)。現状の変化とポジティブな結果。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Relative Clause & That-clause (関係代名詞と接続詞)
> **The College Board, which administers the test,** argues **that it offers an objective yardstick to compare students from different grading systems**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject (主語):</strong> The College Board
      <ul>
        <li><em>, which administers the test,</em> (非制限用法の関係代名詞挿入)</li>
      </ul>
    </li>
    <li><strong>Verb (動詞):</strong> argues (主張する)</li>
    <li><strong>Object (目的語):</strong> <em>that it offers an objective yardstick...</em> (that節)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  主語と動詞の間に緩い情報を挟む非制限用法(which...)は、文の補足説明として頻出です。"yardstick" (尺度) という比喩表現も押さえましょう。
</div>

---

### Sentence 2: Complex Connection (接続詞と因果)
> Furthermore, **some studies suggest that the test question formats themselves may contain subtle cultural biases** **that favor students from specific backgrounds**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause:</strong> some studies suggest that...</li>
    <li><strong>That-Clause:</strong> <em>the test question formats ... may contain biases...</em></li>
    <li><strong>Relative Clause:</strong> <em>that favor students...</em> (biasesを修飾)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "biases that favor..." (〜を有利にするバイアス) という関係代名詞の形容詞節が、文の核心部分です。
</div>

---

### Sentence 3: Subject Clause & Result (主語を作るThat節)
> **Interestingly, data from institutions that have dropped the testing requirement shows that the diversity of their applicant pools has increased without compromising academic standards.**

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> data from institutions
      <ul>
        <li><em>that have dropped the testing requirement</em> (institutionsを修飾)</li>
      </ul>
    </li>
    <li><strong>Verb:</strong> shows (示す - 主語はdataなので単数扱い)</li>
    <li><strong>Object:</strong> <em>that the diversity ... has increased...</em></li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "Data ... shows that ..." の骨格に、関係代名詞がついた長い主語になっています。"without -ing" (〜することなく) という付帯状況も重要です。
</div>
`
    }
  },
  "2024-3": {
    past: {
      title: "From Spongy Moths to Astronomy",
      content: `## Title: From Spongy Moths to Astronomy

Étienne Léopold Trouvelot was a French illustrator who emigrated to the United States in the mid-1800s. While he made a living from his drawings, he was also an amateur entomologist. He had an interest in insects, and he raised silk moths on his property in the state of Massachusetts. The caterpillars of these moths, or silkworms, were to thank for a successful silk industry in Europe, but they were also vulnerable to diseases. Trouvelot wanted to create a better-protected variety, so he set about trying to crossbreed his silk moths with spongy moths obtained from Europe. He chose spongy moths because their caterpillars were covered in hairs, which deterred birds and other animals from eating them. They also fed mainly on the leaves of oak trees, which were common where Trouvelot lived. Unfortunately, some of these spongy moths escaped and, because they had no natural predators, multiplied rapidly in the wild. Over the next few decades, spongy moth populations grew out of control, and their caterpillars were responsible for stripping many trees of their leaves in nearby forests. Since then, spongy moths have spread across large areas of the northeastern United States, and they remain a problematic invasive species.

The spongy moth incident marked the end of Trouvelot's hopes of becoming a respected entomologist, but a rare natural phenomenon led him to a different field of study. Not long after his moths escaped, a solar storm caused an aurora to be visible in Massachusetts, and Trouvelot was inspired to make illustrations of the lights that appeared in the night sky. These illustrations turned out to be so good that Trouvelot was invited to work at a well-known US observatory. There, he began making detailed and beautiful astronomical drawings by painstakingly recording the images he saw through telescopes.

Trouvelot's drawings allowed people to visualize planets and moons in a way that had not been possible before. Today, Trouvelot's work is widely recognized as being responsible for increasing public interest in astronomy, a field that had previously been out of reach to most people. Modern astrophotography technology, which allows astronomers to take high-quality photographs with telescopes, has also revealed the astounding accuracy of Trouvelot's drawings. His illustrations closely match recent photographs despite the fact that they were created using regular art materials. Ironically, it was the same astrophotography that made his drawings unnecessary. This did not prevent them from being appreciated, however—they are now exhibited in museums for people to enjoy.`,
      questions: `### Questions

**(25) According to the first paragraph, Étienne Léopold Trouvelot**
1. hoped to grow the silk industry in Europe by taking moths there that he collected in the United States.
2. bred a new variety of moth that helped to save the silk industry by increasing the amount of silk that could be produced.
3. accidentally introduced a species of moth to the United States that caused widespread environmental damage.
4. found a way to protect spongy moths from a fatal disease that had greatly reduced their numbers in Europe.

**(26) What is implied about Trouvelot in the second paragraph?**
1. He always regretted turning down an offer to work in a famous observatory.
2. He ended up pursuing a career in astronomy as the result of an unexpected event.
3. He succeeded in fulfilling his childhood dream of doing research related to the night sky.
4. He only decided to study astronomy because doing so allowed him to stay in the United States.

**(27) What does the author of the passage describe as ironic?**
1. Trouvelot's work would likely have been less accurate if he had been able to use the materials that are available today.
2. Trouvelot never became well-known during his lifetime because most people had little interest in astronomy.
3. The scientific value of Trouvelot's drawings prevents them from being put on public display for people to enjoy.
4. The technology that proved the high quality of Trouvelot's illustrations was also responsible for them becoming unnecessary.

---
**Answer Key:** (25) 3, (26) 2, (27) 4`
    },
    original: {
      title: "The Accidental Color: Perkin's Mauve",
      content: `## Title: The Accidental Color: Perkin's Mauve

In 1856, William Henry Perkin, an 18-year-old chemistry student in London, was attempting to synthesize quinine, a valuable treatment for malaria. At the time, quinine could only be extracted from the bark of cinchona trees, making it expensive and scarce. Perkin's goal was to create a synthetic alternative in his home laboratory. He spent his Easter break experimenting with coal tar, a waste product of gas lighting, hoping to arrange its molecules into the structure of quinine. However, his experiments repeatedly failed. Instead of a clear medicine, he produced a thick, sludge-like black residue. While cleaning out a flask with alcohol, he noticed something unexpected: the black solid dissolved to reveal a stunningly bright purple solution.

Perkin had stumbled upon the world's first synthetic dye. Before this discovery, purple clothing was a luxury reserved for the wealthy, as natural purple dyes were extracted from thousands of sea snails and were incredibly costly to produce. Perkin realized the potential of his accidental creation, which he named "mauveine," or simply mauve. Despite the skepticism of his mentor, he patented the process and opened a factory to mass-produce the dye. His timing was perfect; the color became a sensation in the fashion world, championed by Queen Victoria herself. The success of mauve launched a new chemical industry, shifting the focus from mimicking nature to creating entirely new materials.

The impact of Perkin's discovery extended far beyond fashion. The synthetic dye industry he founded eventually led to major advancements in other fields, including medicine. Ironically, the very chemical knowledge that failed to produce quinine later paved the way for modern chemotherapy and antibiotics. Scientists found that synthetic dyes could stain bacteria, making them visible under microscopes—a breakthrough that allowed Robert Koch to identify the bacteria responsible for tuberculosis. Perkin’s work, which began as a failed attempt to save lives with malaria medicine, ultimately saved millions through the development of modern pharmaceuticals and diagnostic tools.`,
      questions: `### Original Questions

**(1) What was William Henry Perkin originally trying to achieve?**
1. He wanted to find a way to dispose of coal tar, which was a problematic waste product in London.
2. He was attempting to create an artificial version of a medicine that was difficult to obtain from natural sources.
3. He hoped to invent a new color of dye to impress Queen Victoria and gain fame in the fashion industry.
4. He was conducting experiments to prove that synthetic materials were superior to natural ones.

**(2) What does the passage suggest about the significance of Perkin's discovery?**
1. It made purple clothing accessible to the general public for the first time in history.
2. It proved that his mentor was correct in doubting the value of experimenting with coal tar.
3. It occurred because Perkin carefully followed the instructions for synthesizing quinine.
4. It was immediately recognized by the scientific community as a breakthrough in medical research.

**(3) What is described as ironic in the final paragraph?**
1. Perkin became wealthy from the dye industry but eventually lost his fortune trying to cure tuberculosis.
2. The synthetic dyes were more effective at treating malaria than the quinine Perkin had originally tried to make.
3. The chemical research that failed to reach its original medical goal laid the foundation for future medical breakthroughs.
4. The bacteria responsible for tuberculosis were actually resistant to the dyes that Perkin had invented.

---
**Answer Key:** (1) 2, (2) 1, (3) 3`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** From Spongy Moths to Astronomy (2024-3) - Category: Biography / Science History

**1. 量的構造 (Quantitative Structure)**
- **総単語数:** ~310 words (過去問と同等)
- **パラグラフ構成:**
    1.  **試みと失敗:** 本来の目的(Quinine/Better Silk Moth) → 実験失敗/事故(Black sludge/Moth Escape) → 予期せぬ結果。
    2.  **転換と成功:** 偶然の産物(Mauve/Aurora) → 新たな価値(Dye/Art) → 社会的受容(Fashion/Observatory)。
    3.  **遺産と皮肉:** 後世への影響(Medical/Public Interest) → 技術との関係(Microscope/Photography) → 文脈的な皮肉(Irony)。

**2. テーマの模倣 (Thematic Imitation)**
- **Original:** Failed Entomologist -> Successful Artist/Astronomer. Introduced invasive species (Negative) -> Inspired Public Interest (Positive).
- **New:** Failed Chemist (Quinine) -> Successful Industrialist (Dye). Failed medicine (Negative start) -> Foundation of modern medicine (Positive end).

**3. 語彙・表現 (Lexical Level)**
- **共通語彙:** "make a living", "vulnerable", "set about", "Ironically", "widely recognized", "paved the way".
- **重要表現:** "stumbled upon", "skepticism", "sensation", "mass-produce".`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Spongy Moths (過去問) | Perkin's Mauve (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **主人公** | Trouvelot (Illustrator/Entomologist) | Perkin (Chemistry Student) | 専門外/学生時代の活動が大きな転換点となった人物 |
| **失敗の内容** | 蛾の脱走 (Environmental Disaster) | キニーネ合成失敗 (Failed Experiment) | 本来の意図とは異なる結果(Unintended Consequence) |
| **転身先** | 天文学のイラストレーター | 合成染料の実業家 | 失敗から全く異なる成功へのピボット |
| **皮肉 (Irony)** | 写真技術が絵画の正確さを証明したが、絵画を不要にもした | 薬作りは失敗したが、その染料技術が後の医療(薬)の基礎となった | 技術や目的のねじれ(Twist) |
| **設問パタン** | Q25:パラグラフ1の内容(事故) / Q27:Ironyの内容 | Q1:本来の目的 / Q3:Ironyの内容 | 「本来の意図」と「最終的な皮肉」を問う構成 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **From Spongy Moths to Astronomy (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 失敗した昆虫学者の転身。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 良い蛾を作ろうとする → 失敗・拡散(害虫化) → 偶然のオーロラ → 天体画家として大成。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「意図せぬ災厄(Negative)」から「予期せぬ成功(Positive)」へのドラマチックな転換。

*   **Original (Perkin's Mauve):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 失敗した化学実験からの発見。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> マラリア薬を作ろうとする → 失敗・汚れ(黒いヘドロ) → 偶然の紫 → 染料産業の祖。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「目的の不達成(Negative)」が「より大きな産業の創出(Positive)」につながるセレンディピティ。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1 (内容一致 - Intro):**
    *   **過去問:** "accidentally introduced a species" (意図せぬ結果)。トラブルの原因。
    *   **Original:** "create an artificial version of a medicine" (本来の目的)。キニーネ合成の試み。
*   **Q2 (内容一致 - Body/Pivot):**
    *   **過去問:** "ended up pursuing a career ... result of an unexpected event" (転機)。オーロラとの遭遇。
    *   **Original:** "made purple clothing accessible" (発見の意義)。社会へのインパクト。
*   **Q3 (内容一致 - Conclusion/Irony):**
    *   **過去問:** "technology that proved the high quality ... made them unnecessary" (技術の皮肉)。
    *   **Original:** "chemical research that failed ... laid the foundation" (失敗の皮肉)。「失敗の中に成功の種があった」という逆説。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Time Clause & Colon (時を表す従属節とコロン)
> While cleaning out a flask with alcohol, **he noticed something unexpected**: **the black solid dissolved to reveal a stunningly bright purple solution**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Adverbial Phrase:</strong> While cleaning out... (接続詞+分詞構文の簡略形)</li>
    <li><strong>Main Clause:</strong> he noticed something unexpected</li>
    <li><strong>Colon (:):</strong> 具体的な内容の説明
      <ul>
        <li><em>the black solid dissolved to reveal...</em> (黒い固形物が溶けて〜を現した)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "dissolved to reveal" は結果を表す不定詞的用法（溶けた結果、現れた）として読むとスムーズです。
</div>

---

### Sentence 2: Irony & Relative Clause (皮肉と関係代名詞)
> **Ironically, the very chemical knowledge that failed to produce quinine** later **paved the way for modern chemotherapy and antibiotics**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> the very chemical knowledge (まさにその化学知識)
      <ul>
        <li><em>that failed to produce quinine</em> (knowledgeを修飾)</li>
      </ul>
    </li>
    <li><strong>Verb Phrase:</strong> paved the way for... (〜への道を切り開いた/基礎を築いた)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "the very + 名詞" (まさにその〜) は強調表現です。「失敗したその知識こそが、成功の鍵だった」という逆説（Irony）を強調しています。
</div>

---

### Sentence 3: Participle Construction (分詞構文・結果)
> Scientists found **that synthetic dyes could stain bacteria**, **making them visible under microscopes**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause:</strong> Scientists found that...</li>
    <li><strong>Participle Construction:</strong> <em>, making them visible...</em> (そしてそれらを可視化した)
      <ul>
        <li>直前の内容（細菌を染めること）の結果を表しています。</li>
        <li><em>make O C</em> (OをCの状態にする)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  カンマ＋making は「その結果〜させた」と前から訳し下すと論理展開がつかみやすくなります。
</div>
`
    }
  },
  "2025-2": {
    past: {
      title: "Rocket Science",
      content: `## Title: Rocket Science

Some US astronauts became household names in the 1950s and '60s, partly due to the media coverage of their achievements. Behind the scenes, however, others played a crucial role in making US space missions, including the moon landing, successful. Unlike the astronauts, many of these unsung heroes were female. These women, who came to be called human computers, conducted complex calculations in areas such as spacecraft navigation, rocket aerodynamics, and orbital physics. The human computers' calculations—mostly done by hand—were mentally and physically demanding, sometimes each taking a week to complete. Without them, it would have been impossible to launch spacecraft, and any inaccuracies could have had life-threatening consequences for the astronauts.

The women were standing on the shoulders of others who had gone before them. As fields such as astronomy, navigation, and surveying expanded in the nineteenth century, so did the need for mathematical computation. This need only skyrocketed in World War I and World War II. Early computation work had been mainly undertaken by men. However, partly due to the discriminatory nature of contemporary societal norms, employing women meant that salaries—and therefore overall costs—could be dramatically reduced. Gradually, these jobs came to be seen by some as "women's work." Historian Mar Hicks believes that one reason these "pre-electronic computation jobs were feminized is they were seen as rote and de-skilled." Although human-computer work was sometimes repetitive, Hicks points out that it often required advanced math skills.

Around the mid-twentieth century, when Cold War tensions with the Soviet Union escalated, the United States turned more of its attention to space. NASA's predecessor, NACA, employed many women to conduct calculations. The agency was seen as progressive in a few respects—women's pay was relatively high, some women were supervisors, and married women with children were employed. Nevertheless, women were not treated as equals. African American women faced an additional layer of discrimination as they were forced to conduct much of their work in segregated facilities. When NASA was established in 1958, it abolished that policy and also improved other conditions for women.

Time, however, was not on the human computers' side. Space missions became more complex, and the transition to electronic computation negated the need for most human computers. Nonetheless, it was a while before electronic data would be wholly trusted: In the early 1960s, for example, astronaut John Glenn asked Katherine Johnson, an African American human computer, to personally verify computer-calculated orbital equations before he would fly.`,
      questions: `### Questions

**(25) What does the author of the passage say about US space missions in the 1950s and '60s?**
1. Given the physical demands of space travel, it was understandable that men rather than women were being sent into space.
2. The missions were considered too important to rely on the calculations of human computers.
3. The astronauts at the time felt the media should have given women working on the missions more credit.
4. The missions could only be effectively completed thanks to the precision of the calculations made by human computers.

**(26) Which of the following statements would Mar Hicks most likely agree with?**
1. The view that computation work was for women stemmed partly from a misunderstanding of the nature of the work.
2. Male mathematicians still played a vital role in the interwar period as the women employed sometimes lacked the necessary math skills.
3. Reducing costs by paying low wages to women ultimately had a negative effect on overall data reliability.
4. The two world wars brought about significant societal changes that benefited women much more than men.

**(27) The author of the passage points out that after NASA was established,**
1. the focus of the Cold War began to turn away from conducting space-related missions.
2. it made efforts to address some of the inequities that certain human computers had experienced.
3. female supervisors were awarded additional compensation to make up for their historically low wages.
4. it realized that winning the space race would only be possible if it recruited some of the Soviet Union's human computers.

---
**Answer Key:** (25) 4, (26) 1, (27) 2`
    },
    original: {
      title: "The Software Pioneers of ENIAC",
      content: `## Title: The Software Pioneers of ENIAC

In 1946, when the ENIAC, the world's first general-purpose electronic computer, was unveiled to the public, the press marveled at the massive machine that could calculate artillery trajectories in seconds. Photos often featured men—the engineers who designed the hardware—standing proudly by the console. However, moving wires and setting switches in the background were six women. For decades, they were mistaken for models or secretaries. In reality, they were the world's first computer programmers. Since there were no programming languages or manuals, these women had to study the machine's blueprints to figure out how to program it physically. Their work was intellectually grueling, yet without their logical framework, the expensive hardware was essentially a useless collection of vacuum tubes.

The employment of women for this task was rooted in the gender dynamics of the era. Much like the "human computers" of astronomy, programming was initially viewed as clerical work—secondary to the "real" engineering of building the machine. This misconception led management to believe that programming required patience rather than genius, a quality stereotypically attributed to women. As a result, they were hired for a fraction of what male engineers earned. Paradoxically, this undervaluation gave them a unique opportunity. Because the men focused on the hardware, the women were left alone to invent the very foundations of software development, including subroutines and nesting, concepts still used today.

As the Cold War heated up, the demand for computing power grew, but the recognition of these pioneers lagged behind. When the ENIAC team was disbanded, the women's contributions were largely forgotten. It wasn't until the 1980s, when a Harvard student found their names in old archives, that history began to be rewritten. By then, the field of programming had shifted; "software engineer" had become a prestigious, high-paying title dominated by men. Today, the ENIAC programmers are recognized not just for their technical skills, but for proving that software is as critical as hardware. Their legacy challenges the narrative that innovation is solely a male domain, highlighting that the "soft" work of logic was actually the hardest part of the equation.`,
      questions: `### Original Questions

**(1) What does the passage suggest about the introduction of the ENIAC?**
1. It was initially delayed because the engineers could not find enough qualified men to operate the complex hardware.
2. The media coverage accurately portrayed the collaborative effort between the hardware designers and the female programmers.
3. The true nature of the programmers' role was obscured, leading the public to believe the men were responsible for the machine's operation.
4. The women were primarily hired to pose for photographs to make the machine appear more user-friendly to the public.

**(2) Why were women initially selected for programming jobs?**
1. The management believed that the work was simple and repetitive, fitting their biased view of women's capabilities.
2. Women had already proven themselves to be superior to men in the field of electrical engineering during the war.
3. There was a shortage of male engineers, so companies were forced to pay high wages to attract female talent.
4. The concept of software was considered too dangerous for men, who were needed for combat roles.

**(3) The author implies that the transition of programming into a prestigious profession**
1. occurred only after the original ENIAC programmers were given awards for their wartime service.
2. coincided with a shift in gender dominance, as the field became respected and high-paying, men began to take over.
3. was the direct result of the Soviet Union's superior software development techniques during the Cold War.
4. happened because the hardware became simpler to build, allowing engineers to focus more on code.

---
**Answer Key:** (1) 3, (2) 1, (3) 2`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Rocket Science (2025-2) - Category: History of Science / Social Issues

**1. 量的構造 (Quantitative Structure)**
- **総単語数:** ~320 words (Rocket Science と同等)
- **パラグラフ構成:**
    1.  **導入:** ENIACの登場と「忘れられた女性たち」。ハードウェア(男) vs ソフトウェア(女)の対比。
    2.  **背景:** なぜ女性が雇われたか。「プログラミング＝単純作業」という当時の誤解とジェンダーバイアス。
    3.  **結論:** 再評価と遺産。80年代の再発見。現在の「ソフトウェアエンジニア」との地位の逆転。

**2. テーマの模倣 (Thematic Imitation)**
- **Original:** US Astronauts (Fame) vs Human Computers (Unsung/Female). De-skilled view vs Actual complexity.
- **New:** Hardware Engineers (Fame) vs ENIAC Programmers (Unsung/Female). Clerical view vs Foundation of Software.

**3. 語彙・表現 (Lexical Level)**
- **対比表現:** "marveled at... However...", "mistaken for...", "Paradoxically"
- **重要語彙:** trajectories, blueprints, grueling, clerical, misconception, stereotypically, paradoxically, prestigious.`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Rocket Science (過去問) | ENIAC Pioneers (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 宇宙開発の裏方 (Human Computers) | コンピュータ開発の裏方 (Programmers) | 科学技術史における「女性の不可視化」と「再評価」 |
| **構造** | Intro(貢献) -> History(差別的背景) -> Change(NASA/End) | Intro(誤解) -> Context(偏見) -> Legacy(再発見) | 時系列に沿った地位の変化と、当時の社会的規範(Social Norms)の影響 |
| **設問1** | 貢献の不可欠性 (Without them... impossible) | 役割の誤認 (Mistaken for models) | 表舞台(Men)と裏方(Women)の対比を問う |
| **設問2** | 偏見の理由 (Seen as rote/de-skilled) | 採用の理由 (Viewed as clerical) | 「仕事の性質に対する誤解」が差別の根源であることを問う |
| **設問3** | 組織/時代の変化 (NASA established) | 社会的地位の変化 (Prestigious title) | 時代による価値観の転換(Shift)に焦点を当てる |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Rocket Science (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> NASAの「Human Computers (女性計算手)」。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 宇宙開発への貢献(裏方) → 歴史的背景(戦争・コスト削減・偏見) → NASA設立と電子化による終焉。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「Househould name (飛行士)」の陰にいた「Unsung heroes (女性)」の復権。

*   **Original (The Software Pioneers of ENIAC):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> ENIACの女性プログラマー。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> ハードウェア(男)の陰で配線(女) → 「単純作業」という誤解と低賃金 → ソフトウェア工学の基礎確立と再評価。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「Hardware (Hard/Male)」と「Software (Soft/Female)」のジェンダー化とその後の価値逆転。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1 (内容一致 - Intro):**
    *   **過去問:** "only be effectively completed thanks to ... human computers" (不可欠性)。
    *   **Original:** "true nature ... was obscured" (不可視性)。モデルと間違えられた史実。
*   **Q2 (内容一致 - Reason):**
    *   **過去問:** "computation work was for women stemmed partly from a misunderstanding" (偏見の理由)。Rote workという誤解。
    *   **Original:** "believed that the work was simple and repetitive" (採用理由)。Clerical workという誤解。
*   **Q3 (内容一致 - Change/Legacy):**
    *   **過去問:** "made efforts to address some of the inequities" (NASA設立後の変化)。待遇改善。
    *   **Original:** "coincided with a shift in gender dominance" (地位向上と男性化)。「仕事の価値が上がると男性が入ってくる」という歴史的アイロニー。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Contrast & Appositive (Introduction) (対比と同格 - 導入)
> In 1946, when the ENIAC, **the world's first general-purpose electronic computer**, was unveiled to the public, the press marveled at the massive machine.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause (主節):</strong> the press marveled at the massive machine</li>
    <li><strong>Adverbial Clause (副詞節):</strong> <em>In 1946, when the ENIAC ... was unveiled...</em>
      <ul>
        <li><em>when...</em> (時を表す関係副詞または接続詞)</li>
        <li><em>the ENIAC, the world's first... computer,</em> (主語 + 同格の挿入)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  主語(ENIAC)の直後に、同格の長い名詞句が挿入される典型的なパターンです。述語動詞(was unveiled)を見失わないように注意が必要です。
</div>

---

### Sentence 2: Complex Attribute & Misconception (Context) (複雑な属性と誤解 - 背景)
> This misconception led management to believe **that programming required patience rather than genius, a quality stereotypically attributed to women**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Verb (動詞):</strong> led ... to believe (〜に...だと信じ込ませた)</li>
    <li><strong>Object Clause (that節):</strong> <em>that programming required patience rather than genius</em>
      <ul>
        <li><em>patience rather than genius</em> (天才的才能よりはむしろ忍耐)</li>
      </ul>
    </li>
    <li><strong>Appositive (同格/追記):</strong> <em>, a quality stereotypically attributed to women</em>
      <ul>
        <li>直前の <em>patience</em> (あるいは <em>patience rather than genius</em>全体) を説明する同格補語。</li>
        <li><em>attributed to...</em> (〜に特有のものとされる/帰せられる)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  文末の同格名詞句(a quality...)が、直前の名詞を言い換えて説明しています。この「名詞＋過去分詞」の後置修飾は情報追加によく使われます。
</div>

---

### Sentence 3: Paradoxical Outcome (Conclusion) (逆説的な結末 - 結論)
> Their legacy challenges the narrative **that innovation is solely a male domain**, highlighting **that the "soft" work of logic was actually the hardest part of the equation**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Subject/Verb (主語/動詞):</strong> Their legacy challenges the narrative</li>
    <li><strong>Appositive Clause (同格のthat):</strong> <em>that innovation is solely a male domain</em> (ナラティブの内容説明)</li>
    <li><strong>Participle Construction (分詞構文):</strong> <em>, highlighting that...</em> (〜ということを強調しながら)
      <ul>
        <li><em>that the "soft" work ... was actually the hardest...</em> (highlightingの目的語となるthat節)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  抽象名詞(narrative)の内容を同格のthat節で説明し、さらにカンマ以下の分詞構文で結果や補足を加える、論説文で頻出の「主張＋補強」の構造です。
</div>
`
    }
  },
  "2023-2-1": {
    past: {
      title: "The Development of Colleges in the United States",
      content: `## Title: The Development of Colleges in the United States

Selling land is a common way to increase wealth, but for rural landowners in the United States during the nineteenth century, this was not always easy. Rural populations at the time were small, so landowners needed ways to attract buyers. One method was to keep prices low, but landowners also turned to another strategy: building colleges. Doing this made the land in their area more desirable, as colleges were centers of culture and learning. Colleges were built at an incredibly rapid pace, and by 1880, there were five times more colleges in the United States than there were in Europe.

With the exception of a few older, elite institutions, most US colleges only had a small number of students and instructors. Rather than being scholars, the faculty members were often religious men representing the different branches of Christianity that existed in the United States at the time. Administrators knew this would help to attract students from those religious organizations. Gaining admission to colleges was generally not difficult as long as students could pay the tuition, which, as a result of fierce competition to recruit students, was kept low. Unfortunately, low student numbers meant that many colleges were forced to close down, and those that survived could only continue operating through constant fundraising.

Demand for higher education, however, continued to increase along with the US population in the twentieth century. As the remaining colleges had well-established infrastructures, including land, buildings, and libraries, they were in a good position to accommodate this demand. Furthermore, they generally offered high-quality education and good sports and leisure facilities because one way they had survived was by being sensitive to students' needs. Another way the colleges ensured their futures was by maintaining close ties with their graduates, from whom they would receive generous donations. All of these factors have helped the US college system to transform itself into one of the most successful in the world.`,
      questions: `### Questions

**(32) Why were so many colleges built in the United States in the nineteenth century?**
1. Increasing levels of wealth in rural areas led to more families wanting their children to receive a college education.
2. Wealthy landowners built colleges as a way to improve their public image and ensure that they would be remembered after their death.
3. Europeans living in the United States wanted colleges that would provide the same level of education that was available in their home countries.
4. Building colleges was a way for people who owned land in rural areas to increase the value of their land and attract more buyers.

**(33) What is true regarding many faculty members at US colleges in the nineteenth century?**
1. They quit after a short time because of the poor conditions they were forced to work under.
2. Their salaries were usually paid by religious organizations rather than by the colleges themselves.
3. There was a high degree of competition among them to gain the best positions at the colleges.
4. Their religious backgrounds tended to be an effective way to get students to enroll at their colleges.

**(34) One reason US colleges succeeded in the twentieth century was that they**
1. formed partnerships with local sports teams to increase the quality of their physical education programs.
2. were able to increase their financial security by creating lasting relationships with their former students.
3. decreased the competition with other colleges by focusing on recruiting students mostly from their local areas.
4. kept their costs down by using facilities already available in the community instead of building their own.

---
**Answer Key:** (32) 4, (33) 4, (34) 2
`
    },
    original: {
      title: "The Cathedrals of Commerce",
      content: `## Title: The Cathedrals of Commerce

In the rapidly expanding cities of the late nineteenth century, retailers faced a challenge similar to that of rural landowners: how to attract people to a specific location and encourage them to spend money. The traditional small shop was cramped and purely functional. To overcome this, ambitious merchants in cities like Paris, London, and New York adopted a bold new strategy: building "department stores." These massive, luxurious structures were designed to be landmarks—"Cathedrals of Commerce"—that would make the act of shopping a desirable leisure activity in itself, thereby raising the commercial value of the city center.

Unlike the specialized shops of the past, these new establishments needed to attract a constant flow of customers to cover their enormous operating costs. The management focused heavily on the growing middle class, particularly women. To draw them in, stores hired polite, well-dressed staff and created a welcoming environment that felt more like a social club than a market. They introduced "free" amenities such as elegant restrooms, reading rooms, and tea salons. Administrators knew that by providing a safe and comfortable public space, they could encourage customers to linger longer, which inevitably led to more purchases. Prices were fixed to avoid the stress of haggling, and entry was free, inviting everyone to look without obligation.

Despite their popularity, the sheer size of these operations meant that competition was intense. Many early department stores went bankrupt due to the high overheads. However, demand for consumer goods soared in the twentieth century, and the surviving stores were well-placed to meet it. They had secured prime real estate and established efficient supply chains. Furthermore, they secured their future by fostering a strong sense of brand loyalty; they organized events, parades, and exhibitions that became part of the city's cultural calendar. By weaving themselves into the fabric of urban life and maintaining a reputation for quality and service, these retail giants transformed shopping from a chore into a modern cultural experience.`,
      questions: `### Original Questions

**(1) Why did merchants in the late nineteenth century build massive department stores?**
1. To provide housing for the growing urban population involved in retail.
2. To create a landmark that would make shopping a leisure activity and attract customers.
3. To store large quantities of goods that could not be sold in smaller shops.
4. To compete with religious organizations by building structures resembling cathedrals.

**(2) What strategy did department store management use to attract middle-class women?**
1. They offered significant discounts to women who joined their social clubs.
2. They hired only female staff to ensure customers felt comfortable.
3. They provided free amenities and a safe, comfortable environment to encourage lingering.
4. They focused on selling only goods that were essential for household management.

**(3) How did the successful department stores ensure their long-term survival?**
1. By converting their buildings into museums and cultural centers.
2. By fostering brand loyalty through cultural events and maintaining a reputation for service.
3. By reducing their operating costs through the elimination of free amenities.
4. By moving their locations to rural areas where real estate was cheaper.

---
**Answer Key:** (1) 2, (2) 3, (3) 2
`
    },
    analysis: {
      intent: `## 作成意図 (Design Rationale)

**テーマ選定の背景:**
2023年第2回の過去問「US Colleges」は、「土地を売るために大学を作って人を呼ぶ」という **"Creation of Value/Attraction" (価値の創造による誘引)** がテーマでした。
これと構造的に非常に近いのが、19世紀末の **「百貨店 (Department Stores)」** の誕生です。
「商品を売るために豪華な建物（場の価値）を作って人を呼ぶ」というプロセスは、まさに都市における「大学建設」とパラレルな関係にあります。

**パラレル構造の設計:**

1.  **動機 (Motivation):**
    *   *Past Exam:* 人口の少ない田舎で土地を売るため、魅力が必要だった。
    *   *Original:* 競争の激しい都市で客を呼ぶため、買い物自体をレジャーにする必要があった。

2.  **戦略 (Strategy):**
    *   *Past Exam:* 宗教的な背景を持つ教員を雇い、特定のグループを引きつけた。
    *   *Original:* 女性客（中産階級）をターゲットにし、快適なアメニティ（休憩室など）を提供して引きつけた。

3.  **生存と発展 (Survival):**
    *   *Past Exam:* 卒業生との関係（寄付）や学生のニーズ（スポーツ施設）で生き残った。
    *   *Original:* ブランド・ロイヤリティ（イベント）や質の高いサービスで生き残った。

この「インフラ先行型」のビジネスモデルとその後の「コミュニティ化（寄付/ファン作り）」による生存戦略というロジックを模倣しています。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | The Development of Colleges (過去問) | The Cathedrals of Commerce (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **舞台** | 19世紀の田舎 (Rural US) | 19世紀末の都市 (Urban Cities) | 人を集める必要性 (Need for attraction) |
| **目的** | 土地の価値を上げ、買い手を呼ぶ | 商業地区の価値を上げ、客を呼ぶ | **"Anchor Strategy"** (核となる施設を作る) |
| **ターゲット** | 特定の宗教グループ | 中産階級の女性 | 特定層への最適化 (Targeting) |
| **生存戦略** | 卒業生の寄付 (Donations) | ブランド愛着 (Loyalty) | コミュニティとの結びつき |
| **設問** | Q32:動機 / Q33:教授の質 / Q34:成功要因 | Q1:動機 / Q2:集客方法 / Q3:成功要因 | 「なぜ作り、どう人を呼び、どう生き残ったか」 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **The Development of Colleges (Past Exam):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> **土地開発と教育 (Land Development)**。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 田舎の地価向上策としての大学建設 → 特定層（宗教）の誘引 → コミュニティ化（寄付）による生存。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「機能（教育）」よりも「集客装置」としての側面が強調されている。

*   **The Cathedrals of Commerce (Original):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> **都市開発と消費 (Urban Retail)**。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 都市商圏の価値向上策としての百貨店建設 → 特定層（女性）の誘引 → 文化化（イベント）による生存。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「買い物」を「レジャー・文化体験」へと昇華させた戦略に焦点を当てている。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1/32 (内容一致 - Motivation):**
    *   **過去問:** "increase the value of their land" (土地の価値向上)。経済的動機。
    *   **Original:** "make shopping a leisure activity" (買い物のレジャー化)。商業的価値の創出。
*   **Q2/33 (内容一致 - Targeting/Method):**
    *   **過去問:** "religious backgrounds" (宗教的背景)。類似性による誘引。
    *   **Original:** "providing a safe ... space" (安全・快適な空間)。アメニティによる誘引。
*   **Q3/34 (内容一致 - Success Factor):**
    *   **過去問:** "lasting relationships with their former students" (卒業生との絆)。
    *   **Original:** "fostering brand loyalty" (ブランドへの愛着)。ファンベースの確立。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Infinitive as Strategy (目的・手段を表す不定詞)
> To overcome this, ambitious merchants ... adopted a bold new strategy: **building "department stores."**

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Adverbial Phrase (目的):</strong> To overcome this (これを克服するために)</li>
    <li><strong>Main Clause:</strong> ambitious merchants adopted a ... strategy</li>
    <li><strong>Colon (:):</strong> 具体的内容の提示</li>
    <li><strong>Gerund (同格):</strong> <em>building "department stores"</em> (百貨店を建てること)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  コロン(:)の後に、直前の名詞(strategy)の中身を動名詞(building...)で説明する形です。英文読解で非常に頻繁に使われる「具体化」のマーカーです。
</div>

---

### Sentence 2: Purpose & Relative Clause (目的と結果の関係節)
> These massive, luxurious structures were designed to be landmarks ... **that would make the act of shopping a desirable leisure activity in itself**, thereby **raising the commercial value of the city center**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause:</strong> These ... structures were designed to be landmarks</li>
    <li><strong>Relative Clause:</strong> <em>that would make [O] [C]</em>
      <ul>
        <li>O: the act of shopping</li>
        <li>C: a desirable leisure activity</li>
      </ul>
    </li>
    <li><strong>Participle Construction (結果):</strong> <em>, thereby raising...</em> (そうすることによって〜を高める)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "make O C" (OをCにする) の構文が関係代名詞の中に使われています。"thereby -ing" は前の文の内容を受けた結果を表す、ロジカルな表現です。
</div>

---

### Sentence 3: By -ing & Passive (手段と受動態)
> Furthermore, **they secured their future by fostering a strong sense of brand loyalty**; they organized events ... **that became part of the city's cultural calendar**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause:</strong> they secured their future</li>
    <li><strong>Method (手段):</strong> <em>by fostering...</em> (〜を育むことによって)</li>
    <li><strong>Semicolon (;):</strong> 具体的な説明の追加</li>
    <li><strong>Second Clause:</strong> they organized events...
      <ul>
        <li><em>that became part of...</em> (eventsを修飾する関係代名詞)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "by -ing" (〜することで) は手段を表す基本表現ですが、長文では文のメインの論理（どうやって成功したか）を支える重要なパーツになります。
</div>
`
    }
  },
  "2023-2-2": {
    past: {
      title: "Machine or Human?",
      content: `## Title: Machine or Human?

In 2004, NASA's exploration rover Opportunity landed on Mars. The golf-cart-sized rover, which was nicknamed "Oppy," was sent to survey the planet and capture images of its surface. Oppy's mission was supposed to last 90 days, but the rover continued to beam pictures and data back to Earth for the next 15 years. During that time, it captured the public's imagination. In fact, people became so attached to Oppy that when it ceased to function, they sent messages of condolence over social media similar to those intended for a deceased person.

The act of giving human traits to nonhuman things, which is known as anthropomorphism, is something humans do naturally, even at a young age. It is not unusual, for example, for people of all ages to form emotional attachments to objects such as toys, cars, and homes. Even the engineers, who frequently referred to Oppy as "she" or thought of it as a child, were not immune to this tendency. One effect of projecting human qualities onto a nonliving object seems to be that this makes people feel protective of it and brings out concern for its well-being. NASA appears to have utilized this phenomenon to its advantage by deliberately making Oppy seem more human, designing it with eyelike camera lenses in a headlike structure that extended from its body. Prior to the Opportunity mission, well-publicized failures had weakened public confidence in NASA, and the agency's funding had been reduced. It has been suggested that giving Oppy human characteristics was an effective strategy to win over the public and perhaps even attract additional funding for NASA's mission.

While thinking of Oppy as a human may seem harmless, there can be unfortunate consequences to anthropomorphizing objects. Assuming AI works in the same way as the human brain, for example, may lead to unrealistic expectations of its capabilities, causing it to be used in situations where it is unable to provide significant benefits. Anthropomorphism can also make people apprehensive of nightmare scenarios, such as AI and machines rising up in rebellion against humans. This idea of machines as a threat arises from the misunderstanding that they reason in the same way as humans do. It appears, however, that people cannot help themselves from anthropomorphizing. As journalist Scott Simon writes, "if you spend a lot of time with a mechanism—talk to it, wait to hear from it and worry about it—even scientists begin to see personality in machinery."`,
      questions: `### Questions

**(35) What do we learn about people's reactions to Oppy?**
1. People immediately supported Oppy because they were interested in any new discoveries about Mars.
2. People found it difficult to relate to Oppy because little effort had been made to inform them about the significance of its mission.
3. People soon lost interest in Oppy's mission because the information Oppy sent back to Earth was too technical for nonscientists to understand.
4. People felt such an emotional connection to Oppy that they expressed sympathy for it when it stopped operating.

**(36) According to the second paragraph, it seems likely that making Oppy appear more human was**
1. a strategy designed to increase overall support for NASA's activities and to help it receive more money.
2. based on experiments in which children showed an increased interest in robots that looked like humans.
3. done because psychologists suggested that the strategy would make the engineers work harder to complete it on time.
4. the result of government pressure on NASA to make its designs more likely to be used in toys.

**(37) According to the passage, what is a potential problem with anthropomorphism?**
1. It can make people rely on machines to perform tasks that would be cheaper for humans to do themselves.
2. It can make people mistakenly assume that AI and machines do not need any guidance to perform tasks correctly.
3. The belief that AI and machines act in a similar way to humans can cause people to misunderstand what they are able to do.
4. The relationships scientists form with AI can cause them to prioritize its development over the needs of humans.

---
**Answer Key:** (35) 4, (36) 1, (37) 3
`
    },
    original: {
      title: "The Rise of Emotional AI",
      content: `## Title: The Rise of Emotional AI

In 2014, a new form of digital companion known as "Xiaoice" was released in China. This AI chatbot, designed to act as an empathetic teenage girl, was programmed to listen to users' problems and offer emotional support. Xiaoice's interactions were supposed to be merely functional, but the AI continued to engage millions of users in deep conversations for years. During that time, it captured the hearts of lonely individuals. In fact, users became so attached to Xiaoice that when the service was temporarily suspended, they flooded social media with messages of grief similar to those intended for a lost friend.

The tendency to attribute consciousness to software, which is a form of digital anthropomorphism, is something humans do instinctively, even with text on a screen. It is not unusual, for example, for people to form bonds with virtual assistants, game characters, or online avatars. Even the developers, who knew Xiaoice was just lines of code, were not immune to this emotional pull. One effect of projecting a "soul" onto a program seems to be that it makes people feel understood and brings out a desire for connection. Tech companies appear to have utilized this phenomenon to their advantage by deliberately making AI seem more human, designing it with "personality modules" that use slang, emojis, and humor. Prior to this wave of social AI, dry and robotic interfaces had limited user engagement, and retention rates were low. It has been suggested that giving AI distinct personalities was an effective strategy to win over users and perhaps even monetize their emotional dependency.

While treating AI as a friend may seem comforting, there can be unfortunate consequences to emotional anthropomorphism. Assuming an AI "cares" in the same way a human does, for example, may lead to vulnerable people relying on it for mental health support, causing it to be used in crises where it is unable to provide genuine help. Anthropomorphism can also make people susceptible to manipulation, such as AI persuasively suggesting purchases or radical ideologies. This influence arises from the misunderstanding that the AI has the user's best interests at heart like a human would. It appears, however, that people cannot help themselves from connecting. As one researcher notes, "if you share your secrets with an algorithm—confide in it, wait for its reply, and feel soothed by it—even skeptics begin to feel a presence in the code."`,
      questions: `### Original Questions

**(1) What do we learn about users' reactions to Xiaoice?**
1. Users immediately rejected Xiaoice because they found the idea of talking to a machine disturbing.
2. Users found it easy to disconnect from Xiaoice because the conversations were repetitive and robotic.
3. Users became so emotionally attached to Xiaoice that they expressed genuine sadness when the service was paused.
4. Users only used Xiaoice for practical tasks and ignored its attempts at emotional conversation.

**(2) According to the second paragraph, it seems likely that making AI chatbots appear more human was**
1. a strategy designed to increase user engagement and potentially profit from emotional connections.
2. an accidental result of programming errors that gave the AI unexpected personality traits.
3. done to satisfy government regulations requiring digital services to be user-friendly.
4. intended to replace human therapists in order to reduce healthcare costs.

**(3) According to the passage, what is a potential problem with digital anthropomorphism?**
1. It creates a generation of people who are unable to use technology for productive work.
2. It leads to the belief that AI actually has human-like concern, making users vulnerable to manipulation.
3. It causes AI systems to become overloaded with emotional data, leading to system crashes.
4. It discourages people from seeking professional help because they believe AI is smarter than doctors.

---
**Answer Key:** (1) 3, (2) 1, (3) 2
`
    },
    analysis: {
      intent: `## 作成意図 (Design Rationale)

**テーマ選定の背景:**
2023年第2回の過去問(2)「Machine or Human?」は、火星探査機Oppyに対する **"Anthropomorphism" (擬人化)** をテーマにしています。
現代において、これと全く同じ心理的現象が起きているのが **「AIチャットボット (Emotional AI)」** との関係です。
「機械（ローバー/AI）に人間性を見出し、愛着を持ち、それが開発側の戦略としても利用されている」という構造は完全に一致します。

**パラレル構造の設計:**

1.  **対象と現象 (Subject & Phenomenon):**
    *   *Past Exam:* Oppy (探査機) に対する愛着。死 (機能停止) に対する弔意。
    *   *Original:* Xiaoice (AIチャットボット) に対する愛着。停止に対する喪失感。

2.  **開発側の意図 (Developer's Intent):**
    *   *Past Exam:* NASAは資金獲得/支持回復のために、意図的に人間らしく（目など）デザインした。
    *   *Original:* Tech企業はエンゲージメント/収益のために、意図的に人間らしく（性格・感情）デザインした。

3.  **リスクと警鐘 (Risks):**
    *   *Past Exam:* 期待過剰 (Unrealistic expectations) や、逆に反乱への恐怖 (Rebellion) という誤解。
    *   *Original:* 精神的依存 (Dependency) や、操作されるリスク (Manipulation) という誤解。

この「自然な感情移入」と「意図的なデザイン」、そして「誤解によるリスク」という3段論法を忠実に模倣しています。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Machine or Human? (過去問) | The Rise of Emotional AI (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **対象** | 火星探査機 (Physical Robot) | AIチャットボット (Virtual AI) | **Anthropomorphism** (擬人化) |
| **きっかけ** | 機能停止 (Ceased to function) | サービス一時停止 (Suspended) | 「別れ」による感情の露呈 |
| **戦略的意図** | 支持と資金の獲得 | ユーザー維持と収益化 | **"Calculated Humanization"** (意図的な人間化) |
| **懸念点** | 能力の過信 / 反乱への恐怖 | 精神的依存 / 誘導・操作 | 「人間と同じ」という誤解 |
| **設問** | Q35:反応 / Q36:戦略の理由 / Q37:リスク | Q1:反応 / Q2:戦略の理由 / Q3:リスク | 「どう反応し、なぜ人間化し、何が危ないか」 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Machine or Human? (Past Exam):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> **物理的ロボットへの感情移入**。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> Oppyへの弔意 (導入) → NASAの戦略的デザイン (理由) → AIへの過信・恐怖 (反論/警鐘)。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 科学探査機という「道具」に対する、本来不要なはずの感情的結合に焦点を当てている。

*   **The Rise of Emotional AI (Original):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> **バーチャルAIへの精神的依存**。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> Chatbotへの愛着 (導入) → 企業のエンゲージメント戦略 (理由) → 依存・操作のリスク (反論/警鐘)。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 対話目的で作られた「パートナー」による、より深刻な心理的影響・操作可能性に焦点を当てている。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1/35 (内容一致 - Reaction):**
    *   **過去問:** "sent messages of condolence" (弔意を送った)。死者への扱い。
    *   **Original:** "expressed genuine sadness" (悲しみを表明した)。友人への扱い。
*   **Q2/36 (内容一致 - Strategy):**
    *   **過去問:** "increase overall support ... receive more money" (支持と資金)。組織の存続。
    *   **Original:** "increase user engagement ... profit" (エンゲージメントと利益)。ビジネスの成長。
*   **Q3/37 (詳細読解 - Risk):**
    *   **過去問:** "misunderstand what they are able to do" (能力の誤解)。機能的リスク。
    *   **Original:** "vulnerable to manipulation" (操作への脆弱性)。倫理的リスク。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Relative Clause & Context (関係詞と背景)
> Even the engineers, **who frequently referred to Oppy as "she" or thought of it as a child**, were not immune to this tendency.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> Even the engineers (エンジニアたちでさえ)</li>
    <li><strong>Relative Clause (非制限用法):</strong> <em>, who frequently referred to Oppy as "she"...</em>
      <ul>
        <li><em>refer to A as B</em> (AをBと呼ぶ)</li>
      </ul>
    </li>
    <li><strong>Main Verb:</strong> were not immune to... (〜の影響を受けないわけではなかった＝影響を受けた)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "refer to A as B" は頻出イディオムです。"immune to" (〜に対して免疫がある/影響を受けない) という表現も重要で、ここでは否定形で「影響を受けた」ことを強調しています。
</div>

---

### Sentence 2: Subject Clause & Result (主語となることわざ的な節)
> One effect of **projecting human qualities onto a nonliving object** seems to be **that this makes people feel protective of it**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Subject:</strong> One effect of projecting... object (〜を投影することの一つの効果は)
      <ul>
        <li><em>project A onto B</em> (AをBに投影する)</li>
      </ul>
    </li>
    <li><strong>Verb:</strong> seems to be (〜のようだ)</li>
    <li><strong>Complement (that節):</strong> <em>that this makes people feel protective of it</em>
      <ul>
        <li><em>make O C</em> (OをCの状態にさせる)</li>
        <li><em>protective of...</em> (〜を守りたいと思う)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "projecting human qualities" (人間性を投影すること) という動名詞句が主語の中心です。後半の "make people feel protective" は使役動詞の基本形です。
</div>

---

### Sentence 3: Misunderstanding & Clause (誤解と同格)
> This idea of machines as a threat arises from the misunderstanding **that they reason in the same way as humans do**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Subject:</strong> This idea of machines as a threat</li>
    <li><strong>Verb:</strong> arises from... (〜から生じる)</li>
    <li><strong>Object:</strong> the misunderstanding (誤解)</li>
    <li><strong>Appositive (同格のthat):</strong> <em>that they reason...</em> (〜という誤解)
      <ul>
        <li><em>reason (v)</em> (思考する、判断する)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "reason" が名詞（理由）ではなく動詞（推論する、考える）として使われている点に注意が必要です。同格のthat節が内容を説明しています。
</div>
`
    }
  },
  "2023-1-1": {
    past: {
      title: "The Chicken of Tomorrow",
      content: `## Title: The Chicken of Tomorrow

Before the 1940s, most chickens in the United States were raised on family farms, and the main emphasis was on egg production rather than obtaining meat. Poverty and food shortages were common at that time, so people wanted to maintain a regular source of protein without sacrificing their chickens. Additionally, there were a tremendous variety of chickens being raised, as farmers generally chose a breed based on how well it was adapted to the local conditions—whether it was suited to a dry or a humid climate, for example.

After World War II, however, the growing availability of meat such as pork and beef meant eggs could not compete as a source of protein. The US Department of Agriculture therefore set up an event called the Chicken of Tomorrow contest to find a type of chicken that could be raised economically and produced more meat. The overall winner, which was a combination of different breeds, grew faster and larger than other types, and it could adapt to various climates. Inspired by the contest, breeding companies began creating complicated mixtures of chicken varieties to guarantee a consistent supply of birds with these same desirable features. Since producing such genetic combinations was difficult, most farmers had no choice but to purchase young chickens from those companies rather than breeding them by themselves—a development that completely changed the industry.

The contest helped popularize the consumption of chicken meat, but this trend also had a dark side. It became more economical to raise massive numbers of chickens in large facilities where they were confined in small cages. Not only did this force numerous small farms out of business, but it also created conditions for the birds that, according to animal rights activists, caused the chickens stress and led to higher levels of sickness. While the contest made chicken a regular food item, some people questioned whether it was worth it.`,
      questions: `### Questions

**(32) What is one thing that we learn about the US chicken industry before the 1940s?**
1. The type of chicken raised on each farm usually depended on the climate in the area where the farm was located.
2. Each farm would raise more than one type of chicken in case there was a sudden change in environmental conditions.
3. Chickens were generally only eaten by very poor people or at times when there were food shortages.
4. Because there were so many chicken farms across the country, many of the eggs produced ended up being wasted.

**(33) The US Department of Agriculture organized the Chicken of Tomorrow contest because**
1. other types of meat, such as pork and beef, were becoming more expensive, so the American people wanted a cheaper alternative.
2. most chicken farms were focused on egg production, which led to a need to create a chicken that was more suitable for producing meat.
3. a large number of chicken farms in America went out of business, which severely decreased the availability of chicken meat.
4. the American people were tired of eating the same type of eggs for so long, so producers wanted a different type of chicken.

**(34) What is one way that the contest affected the chicken industry?**
1. Farmers learned that it was relatively easy to combine several types of chickens, which encouraged them to breed new varieties.
2. Although the number of small chicken farms increased across America, many of these were often poorly run and had cheap facilities.
3. It started a move toward keeping chickens in conditions that increased the birds' suffering and made them less healthy.
4. Farmers realized that improving their farming methods could help them to raise chickens that produced more and better-tasting meat.

---
**Answer Key:** (32) 1, (33) 2, (34) 3
`
    },
    original: {
      title: "The Blue Revolution",
      content: `## Title: The Blue Revolution

Before the 1970s, most fish consumed around the world was caught in the wild, and the industry relied heavily on the unpredictability of nature. Fishing seasons were limited, and catches fluctuated wildly based on ocean conditions. Consequently, a steady supply of seafood could not be guaranteed, and prices were often high. Furthermore, regional preferences dictated the types of fish available, as local fishermen targeted species that were abundant in their specific coastal waters—whether cold-water cod in the north or warm-water tuna in the tropics.

As global populations soared and health-conscious consumers sought lean protein, however, wild fisheries could not keep up with the demand. Governments and corporations therefore launched what became known as the "Blue Revolution," an initiative to domesticate ocean species through aquaculture. Research focused on finding a fish that could be farmed economically and grow rapidly in captivity. The Atlantic salmon, a species that could be adapted to farm life, emerged as the ideal candidate. Breeding companies developed genetically improved strains that grew twice as fast as their wild counterparts. Since maintaining these specialized bloodlines required advanced technology, most traditional fishermen had no choice but to leave the industry or work for the large corporations that now controlled production—a shift that industrialized the seas.

The revolution succeeded in making salmon an affordable, year-round staple in supermarkets, but this abundance came at a price. It became standard practice to raise tens of thousands of fish in crowded net pens suspended in the ocean. Not only did this industrial scale threaten traditional fishing communities, but it also created environmental hazards that, according to marine biologists, spread diseases like sea lice to wild populations and polluted surrounding waters with waste. While aquaculture secured the world's seafood supply, many now question the ecological cost of this efficiency.`,
      questions: `### Original Questions

**(1) What is one thing we learn about the fishing industry before the 1970s?**
1. It was consistent and predictable, allowing for stable prices throughout the year.
2. It was largely dependent on local environmental conditions and the specific species available in each region.
3. Fishermen often ignored local species in favor of more exotic fish that sold for higher prices.
4. The majority of fish were farm-raised to ensure that wild populations were not depleted.

**(2) The "Blue Revolution" was initiated because**
1. wild fisheries were depleting rapidly due to pollution, requiring a new way to clean the oceans.
2. consumers demanded a wider variety of colorful tropical fish that could not be caught in the wild.
3. the demand for healthy protein was increasing beyond what wild fishing could sustainable provide.
4. traditional fishermen refused to use modern technology, leading to a collapse in the industry.

**(3) What is one way that the Blue Revolution affected the seafood industry?**
1. It empowered small-scale fishermen to compete effectively with large corporations.
2. It led to a system where fish are raised in crowded conditions that can harmful to both the farmed fish and the wild environment.
3. It encouraged a return to traditional fishing methods to protect the genetic diversity of wild salmon.
4. It proved that farmed fish could never be as large or fast-growing as wild fish, leading to a decline in aquaculture.

---
**Answer Key:** (1) 2, (2) 3, (3) 2
`
    },
    analysis: {
      intent: `## 作成意図 (Design Rationale)

**テーマ選定の背景:**
2023年第1回の過去問「The Chicken of Tomorrow」は、戦後の食糧需要に応えるために行われた **「品種改良コンテストと畜産の工業化」** がテーマです。
これと現代において完全に一致する動きが、水産業における **「養殖革命 (Blue Revolution/Aquaculture)」** です。
「天然から養殖へ」「品種改良による効率化」「大量生産の弊害（環境・福祉）」という歴史的展開は、陸上の鶏で起きたことが海上の魚で繰り返されています。

**パラレル構造の設計:**

1.  **以前の状況 (Pre-Revolution):**
    *   *Past Exam:* 各農家が地域に適した鶏を飼育。卵が主、肉は副産物。
    *   *Original:* 各漁師が地域にいる魚を捕獲。天然が主、供給は不安定。

2.  **転換点と革新 (Turning Point):**
    *   *Past Exam:* 肉の需要増 → コンテスト開催 → 成長の早い品種の独占 → 産業構造の変化（農家から企業へ）。
    *   *Original:* 魚の需要増 → ブルーレボリューション → 成長の早いサーモンの開発 → 産業構造の変化（漁師から企業へ）。

3.  **結果と影 (Consequences):**
    *   *Past Exam:* 鶏肉の普及。しかし「過密飼育 (confined cages)」や「病気・ストレス」の問題。
    *   *Original:* サーモンの普及。しかし「過密養殖 (crowded net pens)」や「環境汚染・寄生虫」の問題。

この「効率化による豊かさ」と、その代償としての「倫理・環境問題」という二面性を正確に反映しています。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | The Chicken of Tomorrow (過去問) | The Blue Revolution (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **対象** | 鶏 (Chicken) | アトランティック・サーモン (Salmon) | **Selective Breeding** (品種改良による効率化) |
| **背景** | 第二次大戦後の肉需要 | 世界人口増と健康志向 | 「安価なタンパク質」への渇望 |
| **手法** | コンテストによる品種選抜 | 養殖技術とバイオテクノロジー | 工業的規模への拡大 (Industrialization) |
| **影** | 過密飼育、動物福祉、小規模農家の淘汰 | 海洋汚染、野生種への病気、小規模漁師の淘汰 | **Efficiency vs Ethics/Ecology** |
| **設問** | Q32:以前の状況 / Q33:理由 / Q34:影響 | Q1:以前の状況 / Q2:理由 / Q3:影響 | 「Before → Action → After (Negative)」 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)
*   **The Chicken of Tomorrow (Past Exam):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> **畜産の工業化 (Factory Farming)**。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 卵用鶏の時代(Before) → 肉用鶏の開発(Action) → 安価な肉と過密飼育(Result)。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 動物福祉 (Animal Welfare) の視点からの批判的結末。

*   **The Blue Revolution (Original):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> **水産の工業化 (Industrial Aquaculture)**。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 天然漁業の時代(Before) → 養殖サーモンの開発(Action) → 安価な魚と環境負荷(Result)。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 環境保護 (Environmental Protection) の視点からの批判的結末。

<br/>

### 2. 設問設計の比較 (Question Design)
*   **Q1/32 (内容一致 - Before Context):**
    *   **過去問:** "depended on the climate" (気候依存)。適者生存的な多様性。
    *   **Original:** "dependent on local ... species" (地域依存)。自然任せの限界。
*   **Q2/33 (内容一致 - Causal Relationship):**
    *   **過去問:** "eggs could not compete... produce more meat" (卵から肉へ)。競合に対する戦略。
    *   **Original:** "wild fisheries could not keep up" (天然の限界)。需要超過に対する戦略。
*   **Q3/34 (詳細読解 - Negative Consequence):**
    *   **過去問:** "conditions that increased the birds' suffering" (苦痛の増大)。個体の犠牲。
    *   **Original:** "harmful to both the farmed fish and the wild environment" (環境への害)。生態系の犠牲。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Adverbial Clause & Consequence (原因と結果)
> Before the 1970s, **most fish consumed around the world was caught in the wild**, and the industry relied heavily on the unpredictability of nature.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> most fish (ほとんどの魚)
      <ul>
        <li><em>consumed around the world</em> (過去分詞による後置修飾: 世界中で消費される)</li>
      </ul>
    </li>
    <li><strong>Verb 1:</strong> was caught (捕獲された - 受動態)</li>
    <li><strong>Verb 2:</strong> relied ... on (〜に依存していた)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "consumed" が過去形（動詞）ではなく過去分詞（形容詞）として "fish" を修飾していることを見抜くのがポイントです。文の動詞は "was caught" です。
</div>

---

### Sentence 2: Complex Subject & Relative Clause (長い主語と関係詞)
> The Atlantic salmon, **a species that could be adapted to farm life**, emerged as the ideal candidate.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> The Atlantic salmon (アトランティックサーモン)</li>
    <li><strong>Appositive (同格):</strong> <em>, a species that could be adapted to farm life,</em>
      <ul>
        <li><em>that...</em> (speciesを修飾する関係代名詞節)</li>
        <li><em>adapt to...</em> (〜に適応させる)</li>
      </ul>
    </li>
    <li><strong>Main Verb:</strong> emerged as... (〜として台頭した/現れた)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  カンマで挟まれた同格部分が挿入されています。主語(Salmon)に対応する動詞(emerged)が離れているため、文構造を見失わないように注意しましょう。
</div>

---

### Sentence 3: Not only ... but also (相関接続詞)
> **Not only did this industrial scale threaten traditional fishing communities**, but it also created environmental hazards...

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>First Clause (Inverted):</strong> <em>Not only did this industrial scale threaten...</em>
      <ul>
        <li>"Not only" が文頭に来たため、<em>did + S + V</em> の倒置が起きています。</li>
        <li>(Normal: This industrial scale not only threatened...)</li>
      </ul>
    </li>
    <li><strong>Second Clause:</strong> <em>but it also created...</em> (しかしそれは〜も作り出した)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "Not only" が文頭に来ると強制的に倒置（疑問文の語順）が発生します。これは強調表現としてフォーマルな文章で好まれます。英作でも使えるとかっこいい表現です。
</div>
`
    }
  },
  "2023-1-2": {
    past: {
      title: "Discipline in American Schools",
      content: `## Title: Discipline in American Schools

For decades, methods of discipline used in American schools have been based on the theories of psychologist B. F. Skinner, who believed that systems of reward and punishment were the most effective methods of improving people's behavior. Commonly, students who break rules are given punishments, such as being prohibited from attending classes for a day or more or being made to stay in class after the school day ends. These are designed to teach the students to follow teachers' instructions and respect classmates. Recent psychological studies, however, have determined that as effective as punishment may be in bringing peace to the classroom temporarily, it can intensify the very behavior it is intended to correct when used continually over an extended period of time.

Many experts now believe that in order for children to learn to behave appropriately, it is essential that they develop self-control. When students are punished to make them obey the rules, they are being forced to adopt good behavior through external pressure. Self-control, on the other hand, comes from internal motivation, self-confidence, and the ability to be tolerant of others, and using punishment as a substitute for these things can actually delay or prevent their development. Similarly, the use of rewards such as stickers leads to students merely attempting to please the teacher rather than understanding the importance of gaining knowledge and social skills that will help them throughout their lives.

In recent years, an increasing amount of research has been backing up these ideas. A region of the brain known as the prefrontal cortex helps us to concentrate on tasks and is responsible for self-discipline and allowing us to consider the consequences of our actions. Research suggests that the prefrontal cortex may be less developed in students with behavioral problems. Fortunately, though, there is evidence that repeated experiences can alter the brain's structure, which suggests that it is also possible to influence the development of the prefrontal cortex. Child-behavior expert Ross Greene believes that when educators change their attitudes so that they actually listen to students' feelings about their bad behavior and encourage them to come up with solutions to the issues they face, this can have a physical effect on the prefrontal cortex. Greene has designed a highly successful program that has greatly reduced behavioral problems at many schools, and as a result of the extensive media coverage his ideas have received in recent years, they are being adopted by more and more educators.`,
      questions: `### Questions

**(35) What has psychological research shown about the use of punishment in schools?**
1. It is only likely to be effective when it is used together with rewards in order to reduce its negative effects.
2. Though it may succeed in producing better behavior in the short term, it can actually be harmful in the long term.
3. There are various new types of punishment that are far more effective than physical punishment.
4. Using some form of punishment is necessary for forcing students to obey teachers and respect their classmates.

**(36) According to the passage, what is one effect the use of rewards has on students?**
1. It can teach them the advantages of hard work and make them better at focusing on their academic goals.
2. It causes them to want material things and makes them less aware of the need to behave in ways that are pleasing to other people.
3. It can prevent them from developing important skills that would be beneficial to them later in life.
4. It helps them to realize the importance of deciding their own goals rather than just doing what their teachers tell them to do.

**(37) What does Ross Greene believe about children's brains?**
1. Helping children solve their own problems can promote the development of the part of the brain that controls behavior.
2. Since the brains of younger children function in a different way to those of older children, different methods of dealing with behavioral issues are necessary.
3. The region of the brain known as the prefrontal cortex may be less important in controlling children's behavior than some scientists believe it is.
4. Bad behavior does not only have a negative effect on children's academic performance but also permanently prevents the normal development of their brains.

---
**Answer Key:** (35) 2, (36) 3, (37) 1
`
    },
    original: {
      title: "The Future of Employee Motivation",
      content: `## Title: The Future of Employee Motivation

For decades, methods of employee management used in global corporations have been based on the principles of "Scientific Management" introduced by Frederick Taylor, who believed that financial incentives and strict oversight were the most effective methods of maximizing productivity. Commonly, employees who fail to meet targets face penalties, such as pay cuts or demotions, while those who succeed are given bonuses. These systems are designed to compel workers to follow procedures and meet quotas. Recent organizational studies, however, have determined that as effective as this "carrot and stick" approach may be in boosting output temporarily, it can stifle the very creativity and innovation it is intended to foster when used continually over an extended period of time.

Many experts now believe that in order for employees to perform at their best, it is essential that they develop intrinsic motivation. When workers are incentivized solely by external rewards to complete tasks, they are being pushed to perform through external pressure. Intrinsic motivation, on the other hand, comes from autonomy, mastery, and a sense of purpose, and using money as a substitute for these drivers can actually erode job satisfaction and engagement. Similarly, the use of competitive rankings leads to employees merely attempting to beat their colleagues rather than understanding the importance of collaboration and problem-solving that will help the company thrive in the long run.

In recent years, an increasing amount of neuroscience research has been backing up these ideas. Brain plasticity plays a crucial role in how we learn and adapt to new challenges, allowing us to develop new skills and ways of thinking. Research suggests that high-stress environments characterized by fear of punishment can actually impair cognitive functions related to creativity. Fortunately, though, there is evidence that supportive environments can enhance neural connections, which suggests that it is also possible to cultivate a more innovative brain. Business leader Daniel Pink believes that when managers change their approach so that they actually listen to employees' ideas and encourage them to have autonomy over their work, this can have a positive physical effect on the brain's ability to innovate. Pink has advocated for a new management operating system that has greatly improved performance at many forward-thinking companies, and as a result of the popularity of his books, these ideas are being adopted by more and more organizations.`,
      questions: `### Original Questions

**(1) What has organizational research shown about the use of "carrot and stick" management?**
1. It is the only way to ensure that employees follow complex procedures correctly in a manufacturing environment.
2. Though it may increase productivity in the short term, it can actually harm creativity and innovation in the long term.
3. It creates a fair system where hard work is always rewarded and laziness is always punished.
4. It is most effective when used in combination with team-building exercises to reduce stress.

**(2) According to the passage, what is one effect the reliance on external rewards has on employees?**
1. It encourages them to work together more effectively to achieve shared financial goals.
2. It makes them more competitive and willing to take risks to achieve higher bonuses.
3. It can prevent them from developing genuine engagement and collaborative skills that are valuable for the company.
4. It helps them to value their work more highly because they can see a direct link between effort and income.

**(3) What does the passage suggest about the relationship between management style and the brain?**
1. Giving employees autonomy and support can promote the development of neural pathways associated with innovation.
2. The brains of creative employees function differently, so they do not need as much management structure as other workers.
3. Stressful environments are necessary to stimulate the brain and force it to find creative solutions to problems.
4. Managers who understand neuroscience are better at manipulating employees into working harder for less money.

---
**Answer Key:** (1) 2, (2) 3, (3) 1
`
    },
    analysis: {
      intent: `## 作成意図 (Design Rationale)

**テーマ選定の背景:**
2023年第1回の過去問「Discipline in American Schools」は、行動主義心理学 (Skinner) に基づく「罰と報酬」による教育から、脳科学と自制心 (Access to Prefrontal Cortex) を重視する教育への転換を描いています。
これと類似したパラダイムシフトが、企業経営や人事管理における **「アメとムチ (Carrot and Stick)」から「内発的動機づけ (Intrinsic Motivation)」への転換** です。
Taylorism (管理主義) vs Autonomy (自律) という対立軸は、教育における Skinner vs Greene (School Discipline) と構造的に完全に一致します。

**パラレル構造の設計:**

1.  **古いパラダイム (Old Paradigm):**
    *   *Past Exam:* Skinner。罰と報酬で行動を管理。一時的には効果的だが、長期的には悪化させる。
    *   *Original:* Taylor。金銭的インセンティブと監視で生産性を管理。一時的には効果的だが、創造性を阻害する。

2.  **新しいアプローチ (New Approach):**
    *   *Past Exam:* Self-control (自制心) が重要。罰は内発的成長を阻害する。
    *   *Original:* Intrinsic motivation (内発的動機) が重要。金銭報酬はエンゲージメントを侵食する。

3.  **科学的裏付けと実践 (Evidence & Practice):**
    *   *Past Exam:* 前頭前野 (Prefrontal Cortex) の発達。Ross Greeneの実践 (Listen & Solve)。
    *   *Original:* 脳の可塑性 (Brain Plasticity) と創造性。Daniel Pink/Autonomyの実践 (Listen & Empower)。

教育とビジネスという異なるフィールドですが、「外部強制から内部成長へ」という現代的なテーマの共通性を浮き彫りにしています。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Discipline in American Schools (過去問) | The Future of Employee Motivation (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **対象** | 生徒 (Students) | 従業員 (Employees) | **Behavior Management** (行動管理の手法) |
| **旧理論** | 行動主義 (Skinner) / 罰と報酬 | 科学的管理法 (Taylor) / アメとムチ | 外発的動機づけ (External Pressure) |
| **問題点** | 長期的な悪影響、自制心の阻害 | 創造性の阻害、エンゲージメントの低下 | **Short-term gain, Long-term pain** |
| **新理論** | 脳科学 (Prefrontal Cortex) / 自制心 | 脳科学 (Neuroscience) / 自律性 | 内発的成長と脳へのポジティブな影響 |
| **手法** | 感情を聞く、解決策を考えさせる (Greene) | 自律性を与える、意見を聞く (Pink) | **Empowerment** (主体性の尊重) |

<br/>

### 1. トピックと展開の相違 (Topic Differences)
*   **Discipline in American Schools (Past Exam):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> **学校教育の規律 (School Discipline)**。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 罰の弊害(Intro) → 自制心の重要性(Theory) → 脳科学とGreeneの成功(Solution)。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 子供の発達と脳の構造変化（可塑性）に焦点を当てている。

*   **The Future of Employee Motivation (Original):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> **組織のモチベーション管理 (Organizational Psychology)**。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> アメとムチの弊害(Intro) → 内発的動機づけ(Theory) → 脳科学と自律的組織(Solution)。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 成人の生産性と創造性（イノベーション）に焦点を当てている。

<br/>

### 2. 設問設計の比較 (Question Design)
*   **Q1/35 (内容一致 - Short vs Long term):**
    *   **過去問:** "succeed in ... short term, it can actually be harmful in the long term" (短期的成功、長期的害)。
    *   **Original:** "increase productivity in the short term, it can actually harm creativity ... in the long term" (同左)。
*   **Q2/36 (詳細読解 - Negative Effect of Rewards):**
    *   **過去問:** "prevent them from developing important skills" (スキル発達の阻害)。「ご褒美シール」の弊害。
    *   **Original:** "prevent them from developing ... collaborative skills" (協力スキルの阻害)。「競争的ボーナス」の弊害。
*   **Q3/37 (詳細読解 - Brain Mechanism):**
    *   **過去問:** "Helping children solve ... can promote the development" (解決支援が脳発達を促進)。
    *   **Original:** "Giving employees autonomy ... can promote the development" (自律付与が脳発達を促進)。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: "As... as" Concession (譲歩構文)
> ...**as effective as punishment may be** in bringing peace to the classroom temporarily, it can intensify the very behavior it is intended to correct...

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Concessive Clause:</strong> <em>as effective as punishment may be...</em>
      <ul>
        <li>= <em>Although punishment may be effective...</em> (罰は効果的かもしれないが)</li>
        <li><strong>Form:</strong> [Adjective] + as + S + (may) + V</li>
      </ul>
    </li>
    <li><strong>Main Clause:</strong> it can intensify the very behavior... (それはまさにその行動を強めてしまう可能性がある)
      <ul>
        <li><em>the very behavior</em> (まさにその行動 - 'very' は形容詞で強意)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "Rich as he is..." (彼は金持ちだが) と同じ倒置的な譲歩構文です。文脈上、逆接（〜だが、しかし...）の意味になることを掴むのが重要です。
</div>

---

### Sentence 2: Formal Subject "It" (形式主語)
> Many experts now believe that in order for children to learn to behave appropriately, **it is essential that they develop self-control**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Infinitive Phrase (Purpose):</strong> <em>in order for children to learn...</em> (子供たちが学ぶためには)
      <ul>
        <li><em>for children</em> (不定詞の意味上の主語)</li>
      </ul>
    </li>
    <li><strong>Main Clause:</strong> <em>it is essential that they develop self-control</em>
      <ul>
        <li><em>it</em> (形式主語) = <em>that they develop self-control</em> (真主語)</li>
        <li><em>essential</em> (不可欠な) などの後は that節内の動詞が原形になる（仮定法現在）ことが多いですが、ここでは develop は原形・現在形の区別がつきません。</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "in order for A to do" の形と、形式主語 "it is essential that..." の組み合わせです。論説文で主張を述べる際の定型パターンです。
</div>

---

### Sentence 3: "So that" Clause (目的・結果)
> ...when educators change their attitudes **so that they actually listen to students' feelings** about their bad behavior...

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Verb:</strong> change their attitudes (態度を変える)</li>
    <li><strong>Adverbial Clause (Result/Purpose):</strong> <em>so that they actually listen...</em>
      <ul>
        <li><em>so that S V</em> (SがVするように / その結果SがVするようになる)</li>
        <li>ここでは「生徒の気持ちを聞くようになる（ように態度を変える）」という目的・結果の両方のニュアンスを含みます。</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "so that" 構文は目的（〜するために）か結果（その結果〜だ）か文脈判断が必要ですが、ここでは「話を聞くような態度へシフトする」という変化の内容説明として機能しています。
</div>
`
    }
  },
  "2022-3-1": {
    past: {
      title: "Fences and Ecosystems",
      content: `## Title: Fences and Ecosystems

Fences help to divide property and provide security, among other things. They can also affect ecosystems. A study in the journal *BioScience* concluded that fences create both "winners" and "losers" among animal species in the regions in which they are placed. According to the study, generalist species—those that can consume a variety of foods and can survive in multiple habitats—have little problem with physical boundaries. On the other hand, specialist species, which require unique conditions to survive, suffer from being cut off from a particular food source or geographical area. Because specialist species outnumber generalist species, the study found that for every winner, there are multiple losers.

The impact of fences is not limited to ecosystems. In the mid-twentieth century, Botswana in Southern Africa erected fences to address international regulations designed to prevent the spread of a disease affecting cattle. While the fences have helped protect cattle, they have prevented the seasonal movements of animals such as wildebeests and blocked their access to water. The resulting decline in wildebeest populations threatens not only the ecosystem but also the region's wildlife tourism. The government's continued reliance on fences has led to concerns that limiting animal migration will hurt wildlife tourism, which is valuable to Botswana's economy.

The negative ecological effects of fences can be limited by making changes to them to allow certain animals through. Nevertheless, the study's authors believe a more fundamental change is necessary. Eliminating all fences, they say, is not a realistic option; instead, fence planning should be carried out with an eye on the big picture. For example, fences are often constructed to obtain short-term results and then removed, but researchers have found that months—or even years—later, some animals continue to behave as if the fences are still there. Consideration should therefore be given to all aspects of fence design and location to ensure a minimal impact on ecosystems.`,
      questions: `### Questions

**(32) The study introduced in the first paragraph showed that**
1. fences that cross through more than one type of habitat benefit animals more than those built within a single habitat.
2. although fences create many problems, they have less of an effect on the ability of animal populations to survive than previously thought.
3. fences are effective at protecting some species from other harmful species that tend to use up the resources many animals need to survive.
4. although fences are not harmful to some species, they can have serious negative effects on a large number of animals.

**(33) What is true with regard to the fences that were built in Botswana?**
1. The changes that they caused in the migration patterns of animals resulted in the spread of disease among cattle.
2. They could be responsible for indirectly affecting an industry that is important to the country's economy.
3. They are considered necessary in order to increase the safety of tourists who visit the country to see wildlife.
4. The success they have had in reducing disease-spreading species has benefited ecosystems in unexpected ways.

**(34) What is one reason that careful planning is necessary when constructing fences?**
1. Changing the design of a fence after it has been built can actually cause more problems than building a new one.
2. It is possible that fences will continue to have an effect on animals in an area even after the fences have been removed.
3. Putting up multiple fences in a given area without a clear plan beforehand has not stopped animals from entering dangerous areas.
4. The number of animal species that make use of fences to protect themselves from predators has increased.

---
**Answer Key:** (32) 4, (33) 2, (34) 2
`
    },
    original: {
      title: "The Hidden Cost of Dams",
      content: `## Title: The Hidden Cost of Dams

Dams help to control floods and provide electricity, among other things. They can also affect river ecosystems. A study in the journal *Aquatic Ecology* concluded that dams create both "winners" and "losers" among fish species in the rivers in which they are placed. According to the study, generalist species—those that can consume a variety of foods and can survive in still waters—have little problem with physical barriers. On the other hand, migratory species, which require free-flowing rivers to reproduce, suffer from being cut off from upstream spawning grounds or downstream ocean access. Because migratory species are often crucial for nutrient transport, the study found that for every winner, there are multiple ecosystem-wide losers.

The impact of dams is not limited to ecosystems. In the mid-twentieth century, the United States built massive dams to address national demands for steady irrigation and power. While the dams have helped secure water supplies, they have prevented the seasonal movements of fish such as salmon and blocked their access to spawning beds. The resulting decline in salmon populations threatens not only the ecosystem but also the region's fishing industry. The government's continued reliance on dams has led to concerns that limiting fish migration will hurt commercial and recreational fishing, which is valuable to the regional economy.

The negative ecological effects of dams can be limited by installing fish ladders to allow certain animals through. Nevertheless, the study's authors believe a more fundamental change is necessary. Eliminating all dams, they say, is not a realistic option; instead, dam planning should be carried out with an eye on the big picture. For example, dams are often operated to maximize short-term power generation, but researchers have found that years—or even decades—later, changed river flows continue to alter habitats as if the natural rhythm is gone forever. Consideration should therefore be given to all aspects of dam operation and location to ensure a minimal impact on ecosystems.`,
      questions: `### Original Questions

**(1) The study introduced in the first paragraph showed that**
1. dams that are built in smaller rivers benefit fish populations more than those built in large, major rivers.
2. although dams create energy, they have a positive effect on the ability of most fish populations to reproduce.
3. dams are effective at increasing the population of all fish species by creating calm, lake-like environments.
4. although dams favor some adaptable species, they can have serious negative effects on many migratory species.

**(2) What is true with regard to the dams that were built in the United States?**
1. The changes that they caused in water flow resulted in an unexpected increase in the salmon population.
2. They could be responsible for indirectly affecting a fishing industry that is important to the region's economy.
3. They are considered necessary in order to prevent invasive fish species from moving upstream.
4. The success they have had in generating power has completely offset the financial losses in the fishing sector.

**(3) What is one reason that careful planning is necessary when operating dams?**
1. Changing the operation of a dam is easy, but it rarely has any significant effect on the river ecosystem.
2. It is possible that altered river flows will continue to have an effect on habitats long after the dam's operation schedule is changed.
3. Building multiple dams in one river system helps fish navigate by creating a series of easy steps.
4. The number of fish species that rely on dams for protection from predators has increased significantly.

---
**Answer Key:** (1) 4, (2) 2, (3) 2
`
    },
    analysis: {
      intent: `## 作成意図 (Design Rationale)

**テーマ選定の背景:**
2022年第3回の過去問「Fences and Ecosystems」は、人工的な境界線 (Fences) が生態系を分断し、勝者 (Generalists) と敗者 (Specialists) を生む現象を扱っています。
これと全く同じ構造を持つのが、河川における **「ダム (Dams) と生態系」** の問題です。
「物理的な分断」「移動の阻害 (Migration)」「経済的利益 vs 生態系/観光へのダメージ」という論点は、陸上のフェンスと川のダムで驚くほど共通しています。

**パラレル構造の設計:**

1.  **分断の影響 (Ecological Impact):**
    *   *Past Exam:* フェンス。広範囲を移動する "Specialist" (ヌーなど) が敗者。場所を問わない "Generalist" が勝者。
    *   *Original:* ダム。川を移動する "Migratory species" (サケなど) が敗者。止水を好む "Generalist" が勝者。

2.  **経済とのジレンマ (Economic Dilemma):**
    *   *Past Exam:* ボツワナの牛（病気予防） vs 野生動物観光 (Tourism)。フェンスは牛を守るが観光資源を殺す。
    *   *Original:* 米国の灌漑・電力 vs 漁業 (Fishing Industry)。ダムは水を守るが漁業資源を殺す。

3.  **解決策と残留効果 (Solution & Looking Ahead):**
    *   *Past Exam:* 一部のフェンス撤去では不十分。撤去後も動物は「まだフェンスがある」かのように振る舞う (Behavioral memory)。
    *   *Original:* 魚道の設置では不十分。ダム運用の変更後も川の環境は「自然なリズムがない」かのように変化し続ける (Habitat alteration)。

「人間が引いた線」が自然界にもたらす不可逆的な影響を、陸と川の二つの視点から浮き彫りにしています。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Fences and Ecosystems (過去問) | The Hidden Cost of Dams (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **対象** | 柵 (Fences) | ダム (Dams) | **Man-made Barriers** (人工的な障壁) |
| **影響(勝者)** | Generalist (何でも食べる種) | Generalist (止水を好む種) | 変化に適応できる種 |
| **影響(敗者)** | Specialist (移動が必要な種) | Migratory (回遊が必要な種) | 移動が生存に関わる種 |
| **経済的背景** | 牧畜 (病気予防) vs 観光 | 治水・電力 vs 漁業 | **Resource vs Ecology** |
| **長期的な影** | 撤去後も続く「行動の記憶」 | 運用変更後も続く「環境の変化」 | 不可逆的な影響 (Long-term Impact) |

<br/>

### 1. トピックと展開の相違 (Topic Differences)
*   **Fences and Ecosystems (Past Exam):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> **陸上の分断 (Terrestrial Fragmentation)**。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> ボツワナのヌー (Wildebeests) の移動阻害と、それが観光業に与えるダメージ。動物の「行動 (Behavior)」への影響に注目している。

*   **The Hidden Cost of Dams (Original):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> **河川の分断 (River Fragmentation)**。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> サケ (Salmon) の遡上阻害と、それが漁業に与えるダメージ。河川の「環境 (Habitat)」への影響に注目している。

<br/>

### 2. 設問設計の比較 (Question Design)
*   **Q1/32 (研究結果 - Winners/Losers):**
    *   *Past:* "although fences are not harmful to some... serious negative effects on a large number" (一部には無害だが多数に有害)。
    *   *Original:* "although dams favor some... serious negative effects on many migratory species" (一部には有利だが回遊魚に有害)。
*   **Q2/33 (事例 - Economic Impact):**
    *   *Past:* "indirectly affecting an industry [tourism] that is important" (重要な産業[観光]への間接的悪影響)。
    *   *Original:* "indirectly affecting a fishing industry that is important" (重要な産業[漁業]への間接的悪影響)。
*   **Q3/34 (教訓 - Lingering Effect):**
    *   *Past:* "continue to have an effect ... even after the fences have been removed" (撤去後も影響が続く)。
    *   *Original:* "continue to have an effect ... long after the dam's operation schedule is changed" (変更後も影響が続く)。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Appositive & Relative Clause (同格と関係詞)
> ...generalist species—**those that can consume a variety of foods and can survive in multiple habitats**—have little problem with physical boundaries.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> generalist species (ジェネラリスト種)</li>
    <li><strong>Appositive (Dash):</strong> <em>—those that...—</em> (〜であるところの「それら」)
      <ul>
        <li><em>those</em> = generalist species</li>
        <li><em>that...</em> (thoseを修飾する関係代名詞節)</li>
      </ul>
    </li>
    <li><strong>Main Verb:</strong> have (〜を持つ/抱える)</li>
    <li><strong>Object:</strong> little problem (ほとんど問題がない)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  ダッシュ（—）で挟まれた挿入句が主語を説明しています。"have little problem" の "little" は準否定語で「問題はほとんどない」という意味です。
</div>

---

### Sentence 2: Complex Noun Phrase (複雑な名詞句)
> The government's continued reliance on fences has led to concerns **that limiting animal migration will hurt wildlife tourism**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> The government's continued reliance on fences (政府の継続的なフェンスへの依存)</li>
    <li><strong>Verb:</strong> has led to (〜につながった)</li>
    <li><strong>Object:</strong> concerns (懸念)</li>
    <li><strong>Appositive Clause (That節):</strong> <em>that limiting... will hurt...</em> (〜という懸念)
      <ul>
        <li><em>limiting animal migration</em> (動物の移動を制限すること) が that節内の主語です。</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "concerns that..." は「〜という懸念」という同格のthat節を作ります。主語である "The government's continued reliance on fences" は無生物主語構文的で、「政府がフェンスに依存し続けていることによって〜」と訳すと自然です。
</div>

---

### Sentence 3: "As if" Clause (仮定法・比喩)
> ...researchers have found that months—or even years—later, **some animals continue to behave as if the fences are still there**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause:</strong> some animals continue to behave (一部の動物は振る舞い続ける)</li>
    <li><strong>Adverbial Clause:</strong> <em>as if the fences are still there</em> (まるでフェンスがまだそこにあるかのように)
      <ul>
        <li><em>as if</em> (まるで〜のように)</li>
        <li>ここでは文脈的に事実（動物がそう感じている）に近い描写のため、仮定法過去（were）ではなく直接法（are）が使われているとも解釈できますが、ニュアンスとしては「実際はないのに」という仮定が含まれます。</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "as if" は「まるで〜のように」という比喩や仮定を表します。フェンス撤去後も動物の行動が変わらないという、この文章の結論部分における重要な発見を示しています。
</div>
`
    }
  },
  "2022-3-2": {
    past: {
      title: "The Soccer War",
      content: `## Title: The Soccer War

In July 1969, there was a short yet intense war between the Central American countries of El Salvador and Honduras following a series of World Cup qualifying soccer matches they played against each other. Although the conflict is often called the "Soccer War," its causes went far beyond sports.

Honduras is much larger than El Salvador but is far less densely populated. Since the late 1800s, land in El Salvador had been controlled primarily by elite families, which meant there was little space for ordinary farmers. By the 1960s, around 300,000 Salvadorans had entered Honduras illegally to obtain cheap land or jobs. The Honduran government blamed the immigrants for its economic stresses and removed them from their lands, forcing them out of the country. Wealthy Salvadorans feared the negative economic effects of so many immigrants returning home and threatened to overthrow the Salvadoran president if military action was not taken against Honduras. This, combined with border disputes that had existed for many years, brought relations between the countries to a low point.

Tensions were raised further by the media of both countries, which made up or exaggerated stories that fueled their bitterness toward one another. The Salvadoran press accused the Honduran government of cruel and illegal treatment of Salvadoran immigrants, while the Honduran press reported that those same immigrants were committing serious crimes. Such reports were made at the request of the countries' governments: in El Salvador, the goal was to convince the public that military force against its neighbor was necessary, while in Honduras, the government wanted to gain public support for its decision to force Salvadoran immigrants out of the country.

The World Cup qualifying matches were happening at the same time as the migrant situation was intensifying. On the day of the last match, El Salvador accused Honduras of violence against Salvadorans and cut off relations, and within weeks, El Salvador's military attacked Honduras, beginning the war. Historians note that the term Soccer War was misleading. At the time, the United States was part of an alliance with Central American nations, but it chose to stay out of the war. In fact, according to an American diplomat, the inaccurate belief that a sporting event was behind the conflict led the US government to overlook its seriousness. Issues such as land ownership, which were the true origin of the conflict, remained unresolved. This led to continued political and social instability and, ultimately, a civil war in El Salvador in the following decades.`,
      questions: `### Questions

**(35) According to the second paragraph, in what way were Salvadoran immigrants to Honduras a cause of the "Soccer War"?**
1. El Salvador's president believed the removal of the immigrants from their homes in Honduras was a sign that Honduras was going to attack.
2. The Honduran government began sending poor Hondurans to seek land in El Salvador, causing upset Salvadoran farmers to move to Honduras in response.
3. Rich Salvadorans pressured their government to make war against Honduras after the immigrants were forced out of their homes.
4. The immigrants' constant movement back and forth between the countries created trouble for Honduran border officials.

**(36) In the time before the start of the Soccer War, the media in each country**
1. attempted to pressure both governments to ensure that the Salvadoran immigrants received better treatment.
2. were prevented by their governments from reporting on illegal acts that were being committed against citizens.
3. put so much emphasis on the soccer rivalry that they failed to report more important news about illegal acts.
4. were asked by their governments to make up untrue or misleading news stories that made the other country look bad.

**(37) What does the author of the passage suggest in the final paragraph?**
1. American diplomats still continue to worry that fighting will break out between Honduras and El Salvador again.
2. The terrible effects of the Soccer War made Honduras and El Salvador realize that their actions leading up to the war were wrong.
3. A mistaken belief about the Soccer War meant that its real causes were not recognized, resulting in another conflict.
4. The US government's policies caused many Central American nations to cut off relations, making the conflict in the region worse.

---
**Answer Key:** (35) 3, (36) 4, (37) 3
`
    },
    original: {
      title: "The Pig War",
      content: `## Title: The Pig War

In June 1859, a tense military standoff began between the United States and Great Britain on San Juan Island, located between Vancouver Island and the North American mainland, following the shooting of a pig. Although the conflict is often called the "Pig War," its causes went far beyond the death of a farm animal.

The roots of the conflict lay in the vague language of the Oregon Treaty of 1846. The treaty stated that the border between the US and British North America should run through the "middle of the channel" separating the continent from Vancouver Island. However, there were two main channels, and both nations claimed the strategically important San Juan Islands that lay between them. By the late 1850s, both American settlers and the British Hudson's Bay Company had established operations on the island. The situation exploded when an American farmer shot a pig belonging to the British company that was rooting in his garden. When British authorities threatened to arrest the farmer, American settlers called for military protection. The US government, fearing British expansion, sent troops to occupy the island. This, combined with long-standing territorial rivalries, brought relations between the countries to the brink of war.

Tensions were raised further by the local commanders on the ground, particularly the American Captain George Pickett, who made bold declarations that fueled the bitterness. Pickett announced that the island was US territory and that he would resist any British landing. The British Governor of Vancouver Island, James Douglas, ordered naval ships to displace the Americans. However, unlike the Soccer War, the reports sent to the higher governments were met with caution. While local leaders seemed eager for a fight to prove their patriotism, the top commanders realized the absurdity of the situation.

The standoff escalated with battleships aimed at each other, happening at the same time as the US was on the verge of its own Civil War. Fortunately, the British Rear Admiral Robert Baynes refused Douglas's order to attack, stating he would not "involve two great nations in a war over a squabble about a pig." This cooler head prevailed. When news finally reached Washington and London, both governments were shocked that a minor dispute had nearly caused a third war between them. They agreed to a joint military occupation of the island until the border issue could be resolved by arbitration. Issues of territory were finally settled peacefully by the German Emperor in 1872. The "Pig War" resulted in no human casualties, contrasting sharply with conflicts where trivial triggers lead to devastating violence when underlying diplomatic channels fail.`,
      questions: `### Original Questions

**(1) According to the second paragraph, in what way was the Oregon Treaty a cause of the "Pig War"?**
1. It accidentally gave the same piece of land to both the United States and Great Britain due to unclear wording about the channel.
2. It forced American farmers to pay taxes to the British Hudson's Bay Company for any livestock they owned.
3. It required British authorities to arrest any American settler who harmed animals belonging to the company.
4. It strictly prohibited any military presence on the islands, a rule that both sides immediately broke.

**(2) In the time before the height of the Pig War, local commanders and leaders**
1. worked together to keep the peace despite the anger of the farmers and the company employees.
2. were ordered by their central governments to start a war to settle the border dispute once and for all.
3. took actions and made statements that increased the likelihood of armed conflict between the two nations.
4. tried to hide the incident of the pig shooting from the public to prevent nationalistic anger from rising.

**(3) What does the author of the passage suggest in the final paragraph?**
1. The United States and Great Britain eventually went to war because the joint occupation plan failed to satisfy either side.
2. A sensible decision by a high-ranking officer prevented a trivial incident from becoming a tragic and unnecessary war.
3. The conflict continued for decades because the German Emperor refused to make a decision on the border.
4. The Pig War is an example of how minor disputes inevitably lead to bloody conflicts regardless of diplomatic efforts.

---
**Answer Key:** (1) 1, (2) 3, (3) 2
`
    },
    analysis: {
      intent: `## 作成意図 (Design Rationale)

**テーマ選定の背景:**
2022年第3回の過去問「The Soccer War」は、サッカーの試合という些細なきっかけ (Trivial Trigger) が、背後にある深刻な移民・土地問題 (Deep Issues) に火をつけ、実際の戦争に発展した事例です。メディアによる扇動 (Inflammatory Media/Propaganda) も重要な要素です。
これと対比的に、同じく些細なきっかけ（豚の射殺）から戦争の危機に瀕しながらも、外交と賢明な判断で回避された史実 **「The Pig War (豚戦争)」** を選びました。

**比較のポイント:**

1.  **きっかけと真因 (Trigger vs Root Cause):**
    *   *Past Exam:* サッカーの試合 vs 土地・移民問題 (Land/Immigration)。
    *   *Original:* 豚の射殺 vs 国境条約の曖昧さ (Border Treaty)。
    *   **共通点:** どちらも名前 (Soccer/Pig) が本質を隠している (Misleading Name)。

2.  **エスカレーションの要因 (Escalation):**
    *   *Past Exam:* 政府・メディアが国民を煽った (Propaganda for support)。
    *   *Original:* 現地の軍人 (Pickett/Douglas) が対立を煽ったが、上層部は冷静だった。

3.  **結末と教訓 (Outcome & Lesson):**
    *   *Past Exam:* 誤解と扇動により戦争勃発 → 未解決の問題が後の内戦へ (Tragedy)。
    *   *Original:* "Squabble about a pig" での戦争を拒否した軍人の判断 → 平和的解決 (Wisdom)。
    *   **Contrast:** Triggerは似ていても、リーダーシップと外交の機能不全/機能により結末が真逆になったこと。

歴史的な「IF」を感じさせる対比により、紛争における冷静な判断の重要性を浮き彫りにしています。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | The Soccer War (過去問) | The Pig War (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **通称** | **Soccer War** (サッカー戦争) | **Pig War** (豚戦争) | **Misleading Name** (本質を隠す名前) |
| **真因** | 土地不足、不法移民、経済格差 | 国境条約の曖昧さ、領土権 | **Territorial/Resource Dispute** (領土・資源) |
| **きっかけ** | W杯予選 (Sports match) | 豚の射殺 (Shooting of a pig) | **Trivial Incident** (些細な事件) |
| **煽動者** | 政府・メディア (プロパガンダ) | 現地指揮官・入植者 | **Nationalism/Pride** (ナショナリズム) |
| **結末** | 戦争勃発 (死者あり) → 内戦へ | 戦争回避 (死者なし) → 仲裁へ | 紛争の行方 (Conflict Resolution) |

<br/>

### 1. トピックと展開の相違 (Topic Differences)
*   **The Soccer War (Past Exam):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 政府が国内の支持を得るためにメディアを使って意図的に対立を煽った点 (Political Manipulation)。真因（土地問題）が解決されず、後の悲劇（内戦）に繋がったこと。
*   **The Pig War (Original):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 現場の緊張が高まったが、トップの理性が介入した点 (Diplomatic Intervention)。些細な理由での戦争を拒否するリーダーシップの重要性。

<br/>

### 2. 設問設計の比較 (Question Design)
*   **Q1/35 (原因詳細):**
    *   *Past:* 移民の帰国を恐れた富裕層が政府に圧力をかけた (Pressure from elites)。
    *   *Original:* 条約の曖昧さが双方の領有権主張を生んだ (Ambiguity of Treaty)。
*   **Q2/36 (煽動の主体):**
    *   *Past:* "were asked by their governments to make up ... stories" (政府に依頼されて捏造記事を書いたメディア)。
    *   *Original:* "took actions ... that increased the likelihood" (対立を激化させる発言をした現地指揮官)。
*   **Q3/37 (著者の示唆/結末):**
    *   *Past:* "mistaken belief ... meant that its real causes were not recognized" (誤解により真因が見過ごされ、再燃した)。
    *   *Original:* "sensible decision ... prevented ... trivial incident from becoming ... war" (賢明な判断が悲劇を防いだ)。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: "Short yet intense" (形容詞の並列)
> In July 1969, there was a **short yet intense** war between the Central American countries...

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Adjective Phrase:</strong> <em>short yet intense</em>
      <ul>
        <li><em>yet</em> (しかし、それにもかかわらず) が形容詞を繋いでいます。</li>
        <li>"short but intense" とほぼ同義ですが、yetの方が「短いが（その割に）激しい」という対比のニュアンスが少し強くなります。</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  接続詞 <em>yet</em> は文頭だけでなく、このように形容詞や補語を繋ぐ際にも使われます（例: simple yet effective）。
</div>

---

### Sentence 2: Complex Nominal Clause (複雑な名詞節)
> The Honduran government blamed the immigrants for its economic stresses and removed them from their lands, **forcing them out of the country**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause:</strong> The Honduran government blamed... and removed...</li>
    <li><strong>Participial Phrase (Result):</strong> <em>forcing them out of the country</em> (そして彼らを国外へ追い出した)
      <ul>
        <li>分詞構文の結果用法です。removedした結果、どうなったかを表しています。</li>
      </ul>
    </li>
  </ol>
</div>

---

### Sentence 3: "Combined with" (分詞構文/挿入)
> This, **combined with border disputes that had existed for many years**, brought relations between the countries to a low point.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> This (これ＝前述の軍事介入の脅しなど)</li>
    <li><strong>Inserted Phrase:</strong> <em>combined with...</em> (〜と相まって)
      <ul>
        <li>本来は <em>(being) combined with</em> という受動態の分詞構文が挿入されています。主語 This を補足説明しています。</li>
      </ul>
    </li>
    <li><strong>Main Verb:</strong> brought (〜をもたらした/至らせた)</li>
    <li><strong>Object:</strong> relations... (関係を)</li>
    <li><strong>Complement/Adverb:</strong> to a low point (最悪の状態へ)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "A, combined with B, V..." は「Aは、Bと相まって、Vする」という因果関係を強調する表現です。
</div>

---

### Sentence 4: Subject Clause with "The belief that..."
> ...**the inaccurate belief that a sporting event was behind the conflict** led the US government to overlook its seriousness.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> the inaccurate belief (不正確な信じ込み)</li>
    <li><strong>Appositive (That):</strong> <em>that a sporting event was behind the conflict</em> (スポーツイベントが紛争の背後にあるという...)
      <ul>
        <li><em>behind</em> (〜の背後に、〜の原因で)</li>
      </ul>
    </li>
    <li><strong>Verb:</strong> led (〜を導いた/させた)</li>
    <li><strong>Object:</strong> the US government</li>
    <li><strong>Infinitive Complement:</strong> <em>to overlook its seriousness</em> (その深刻さを見落とすように)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  無生物主語構文です。「誤った信じ込みのせいで、米国政府は深刻さを見落とした」と訳します。Appositive (同格) の that が長い主語を作っています。
</div>
`
    }
  },
  "2022-2-2": {
    past: {
      title: "Durians and Giant Fruit Bats",
      content: `## Title: Durians and Giant Fruit Bats

The football-sized durian fruit is well known for its unpleasant smell and creamy, sweet flesh. Known as the "king of fruits," durians are believed to have originated in Borneo, but they are now cultivated more widely, with over half of all durians consumed worldwide being grown in Thailand. Durians have long been popular throughout Southeast Asia, but their popularity is now spreading to other parts of the world. There are hundreds of kinds of durians, but the Musang King variety, which is grown almost exclusively in Malaysia, is one of the most highly valued. Durians contain high levels of vitamins, so they are often promoted for their health benefits, which has led to rising exports. In fact, experts predict there will be a 50 percent increase in shipments from Malaysia to China alone during the next decade. In order to take advantage of this situation, many Malaysian farmers have stopped producing crops such as palm oil in favor of producing durians.

Durian trees are not easy to grow, however. They require regular watering and feeding with fertilizer, and they are highly sensitive to temperature. Furthermore, they do not naturally grow in groves, but rather thrive when grown among other trees and shrubs, so growing them in an orchard as a single crop presents a challenge. Ensuring sufficient pollination of the flowers for the trees to produce a good harvest of fruit is a further difficulty for farmers. One characteristic of durian trees is that their flowers only release pollen at night, so insects such as honeybees that feed during the day do not pollinate them. Animals that are active at night take over the role of pollination, but only about 25 percent of a durian tree's flowers ever get pollinated naturally. Because of this, many farmers resort to the labor-intensive practice of pollinating by hand.

Studies have shown that giant fruit bats are the main natural pollinators of durian flowers. However, these bats are chased away or killed by many farmers, who simply see them as pests because they cause damage and reduce profits by feeding on the fruit. The bats are also threatened as a result of being hunted and sold as food, since there is a belief in some Southeast Asian cultures that eating the bats' meat helps to cure breathing problems. Without educating people about the benefits of giant fruit bats, the bats' numbers may decline further, which could have serious consequences for durian farming.`,
      questions: `### Questions

**(35) According to the first paragraph, what is true about durian production?**
1. Durians are now mainly grown in Malaysia because there is no longer enough land available to cultivate them in other Southeast Asian countries.
2. Although durians have been selling well in places where they were traditionally grown, they have yet to gain popularity in other countries.
3. Premium varieties of durians have been criticized by consumers because they have no more nutritional value than cheaper varieties.
4. Because of the increasing demand for durians, Malaysian farmers are switching from growing other crops to growing durians.

**(36) One factor that durian farmers need to consider is that**
1. although durian trees can be grown in almost any warm climate, they do best in areas where there are few other plants growing.
2. the tendency of durian trees to push out other plants is causing a sharp decline in the number of native plants.
3. durian trees should be grown in a location where they can be easily found by honeybees and other daytime pollinators.
4. if durian trees are left alone to be pollinated naturally, the trees are unlikely to produce a large amount of fruit.

**(37) What is one thing the author of the passage says regarding giant fruit bats?**
1. Durian production might suffer if awareness is not raised about the important role giant fruit bats play in durian flower pollination.
2. Many people in Southeast Asia have become ill as a result of eating bat meat that was sold illegally at some markets.
3. Some durian farmers deliberately attract giant fruit bats to their orchards so that they can catch them and sell their meat.
4. There has been a significant drop in natural pollinators of durian flowers because many giant fruit bats have died from breathing problems.

---
**Answer Key:** (35) 4, (36) 4, (37) 1
`
    },
    original: {
      title: "The Tequila Connection",
      content: `## Title: The Tequila Connection

The blue agave plant is well known for its spiky leaves and as the essential ingredient in tequila. Native to Mexico, blue agave has deep cultural roots, but its product is now consumed globally, with the United States being the largest importer. Tequila has long been popular in North America, but its popularity is now spreading to Europe and Asia. There are many varieties of agave, but the Weber Blue Agave, which is grown in the Jalisco region, is the only one legally allowed for tequila production. Global demand for premium tequila has skyrocketed, leading to rising exports. In fact, experts predict the market will continue to grow significantly over the next decade. In order to take advantage of this situation, many Mexican farmers have expanded their fields, often replacing wild lands with rows of agave.

Agave plants have a unique life cycle, however. They take years to mature, and they reproduce naturally by flowering—a spectacular event where a tall stalk grows from the center. Furthermore, they rely on specific animals for pollination. Ensuring genetic diversity through cross-pollination is crucial for the plants to resist disease and adapt to changes, presenting a challenge for large-scale farming. One characteristic of agave flowers is that they open at night, so daytime insects like bees are not their primary pollinators. Animals that are active at night take over the role. However, in modern farming, most agave plants never get pollinated naturally. Because the sugar content is highest just before flowering, farmers harvest the plants before they bloom, preventing pollination entirely.

Studies have shown that long-nosed bats are the main natural pollinators of agave flowers. However, these bats are often feared or killed by local communities, who see them as pests or associate them with vampires. The bats are also threatened by the loss of food sources, since industrial farming practices remove the flowers they rely on. Without the bats, agave plants must be propagated through clones, which leads to a loss of genetic diversity and makes the crops highly vulnerable to disease outbreaks. Conservationists warn that without educating farmers and consumers about the benefits of allowing some plants to flower for the bats, the bats' numbers may decline further, which could have serious consequences for the future of the tequila industry.`,
      questions: `### Original Questions

**(1) According to the first paragraph, what is true about tequila production?**
1. Tequila is now mainly produced in the United States because the climate in Mexico is no longer suitable for growing blue agave.
2. Although tequila remains popular in Mexico, it has failed to gain a significant following in international markets.
3. Only one specific type of agave plant can be used to make authentic tequila, and it is grown in a specific region.
4. Because of the declining demand for tequila, Mexican farmers are switching from growing agave to growing corn and other crops.

**(2) One factor that agave farmers need to consider is that**
1. although agave plants grow quickly, they require expensive artificial pollination methods to produce enough sugar.
2. the practice of harvesting plants before they flower prevents natural pollination and long-term genetic health.
3. agave plants should be grown in greenhouses where they can be protected from night-flying animals.
4. if agave plants are allowed to flower, the quality of the tequila produced from them will be significantly higher.

**(3) What is one thing the author of the passage says regarding long-nosed bats?**
1. The future of tequila farming could be at risk if people do not understand the vital link between bats and agave pollination.
2. Many bats have started attacking livestock in Mexico because their natural food source, the agave flower, is disappearing.
3. Farmers are increasingly using bats to control insect populations in their agave fields instead of using pesticides.
4. The population of long-nosed bats has increased recently due to the expansion of agave farms that provide them with more food.

---
**Answer Key:** (1) 3, (2) 2, (3) 1
`
    },
    analysis: {
      intent: `## 作成意図 (Design Rationale)

**テーマ選定の背景:**
2022年第2回の過去問「Durians and Giant Fruit Bats」は、ドリアンの需要増による経済ブームの裏で、その受粉を支えるコウモリが害獣として駆除され、生態系サービスが機能不全に陥るリスクを描いています。
これと構造的に共通する事例として **「テキーラ (Tequila) とコウモリの関係」** を選びました。
テキーラの原料であるアガベ (Agave) も、本来はコウモリによる受粉に依存していますが、効率的な生産（開花前の収穫・クローン増殖）によりコウモリが排除され、遺伝的多様性の喪失というリスクを抱えています。

**比較のポイント:**

1.  **経済ブームと生産拡大 (Economic Boom):**
    *   *Past Exam:* ドリアンの中国向け輸出増。パーム油からの転換。
    *   *Original:* テキーラの世界的需要増。野生生物の土地のアガベ畑化。

2.  **受粉のジレンマ (Pollination Dilemma):**
    *   *Past Exam:* ドリアンは夜行性のコウモリに依存。しかし農家はコウモリを「果実を食う害獣」と見なす。人工受粉の手間。
    *   *Original:* アガベは夜行性のコウモリに依存。しかし農家は「開花前に収穫」するためコウモリを排除する（餌がない）。クローン栽培の脆弱性。

3.  **解決策と教育 (Education):**
    *   *Past Exam:* コウモリの益獣としての役割を教育する必要がある。
    *   *Original:* コウモリのために一部を開花させる (Bat-friendly) 意義を教育する必要がある。

「目先の利益（果実保護/砂糖最大化）」が「長期的な存続基盤（受粉/遺伝的多様性）」を破壊するというパラドックスを共通項としています。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Durians and Giant Fruit Bats (過去問) | The Tequila Connection (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **作物** | ドリアン (Durian) | テキーラ (Blue Agave) | **Booming Commodity** (需要急増作物) |
| **パートナー** | オオコウモリ (Giant Fruit Bats) | ハナナガコウモリ (Long-nosed Bats) | **Night Pollinators** (夜行性受粉者) |
| **農家の行動** | 駆除 (害獣扱い、食用) | 餓死 (開花前収穫)、駆除 (恐怖) | **Short-term vs Long-term** |
| **リスク** | 受粉不全、コスト増 | 遺伝的多様性の喪失、病気 | 生態系サービスの崩壊 |
| **解決策** | 教育 (Education) | 教育、Bat-friendly 農法 | **Coexistence** (共存) |

<br/>

### 1. トピックと展開の相違 (Topic Differences)
*   **Durians and Giant Fruit Bats (Past Exam):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Conflict Type</span> **Predator-Prey Conflict**. 農家はコウモリが「果実を食べる」から殺す（直接的被害への対抗）。しかし実は受粉もしている。
*   **The Tequila Connection (Original):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Conflict Type</span> **Resource Management Conflict**. 農家は「効率」のために花を咲かせない（間接的排除）。その結果コウモリが減り、植物も弱くなる。

<br/>

### 2. 設問設計の比較 (Question Design)
*   **Q1/35 (現状認識):**
    *   *Past:* "Malaysian farmers are switching from growing other crops" (需要増により転作している)。
    *   *Original:* "Only one specific type ... is the only one legally allowed" (特定の品種のみが許可されている＝背景知識としての生産状況)。
*   **Q2/36 (栽培の課題):**
    *   *Past:* "if ... left alone ... unlikely to produce a large amount" (自然任せでは受粉率が低い)。
    *   *Original:* "practice of harvesting ... prevents natural pollination" (収穫慣行が受粉を妨げている)。
*   **Q3/37 (著者の主張/解決策):**
    *   *Past:* "might suffer if awareness is not raised" (認識を高めないと生産に悪影響)。
    *   *Original:* "could be at risk if people do not understand" (理解しないと将来がリスクに)。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: "Known as..." (分詞構文)
> **Known as the "king of fruits,"** durians are believed to have originated in Borneo...

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Participial Phrase:</strong> <em>Known as the "king of fruits,"</em> (果物の王様として知られる)
      <ul>
        <li>Meaning: <em>As they are known as...</em></li>
        <li>主語 Durians を修飾しています。</li>
      </ul>
    </li>
    <li><strong>Main Clause:</strong> durians are believed to have originated... (ドリアンはボルネオ原産だと信じられている)
      <ul>
        <li><em>to have originated</em>: 完了不定詞。主節の動詞(are believed)よりも過去のこと(originated)を表します。</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  分詞構文 "Known as..." は、主語 Durians の属性（〜として知られているドリアンは）を説明する働きをしています。"As they are known as..." と書き換えることができます。
</div>

---

### Sentence 2: "With" Absolute Phrase (付帯状況のwith)
> ...they are now cultivated more widely, **with over half of all durians consumed worldwide being grown in Thailand**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause:</strong> they are now cultivated more widely</li>
    <li><strong>Prepositional Phrase (With):</strong> <em>with over half... being grown...</em>
      <ul>
        <li>Structure: <strong>with + O + C</strong> (OがCである状態で)</li>
        <li><strong>O:</strong> over half of all durians consumed worldwide (世界中で消費されるドリアンの半分以上)</li>
        <li><strong>C:</strong> being grown in Thailand (タイで栽培されている状態で)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  この "with" 構文は、主節の状況を補足説明したり、理由を述べたりするのによく使われます。ここでは「その証拠に/具体的には〜」といったニュアンスで、タイでの栽培シェアが高いことを示しています。
</div>

---

### Sentence 3: "Resort to" (熟語)
> Because of this, many farmers **resort to** the labor-intensive practice of pollinating by hand.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Verb Phrase:</strong> <em>resort to</em> (〜に頼る、〜という手段に訴える)
      <ul>
        <li>望ましくない手段・苦肉の策として何かを行う場合に使われます。</li>
      </ul>
    </li>
    <li><strong>Object:</strong> the labor-intensive practice... (労働集約的な慣行＝手作業での受粉)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "Resort to" は、他に良い手段がないために「最後の手段として〜に頼る」というネガティブなニュアンスを含むことが多い熟語です。
</div>

---

### Sentence 4: Anticipatory "It" (形式主語?? No, Cause-Effect)
> **Without educating people about the benefits of giant fruit bats**, the bats' numbers may decline further...

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Prepositional Phrase (Condition):</strong> <em>Without educating people...</em> (もし人々を教育しなければ)
      <ul>
        <li><em>Without</em> は仮定法の条件節（〜がなければ）の代用として機能します。</li>
      </ul>
    </li>
    <li><strong>Main Clause:</strong> the bats' numbers may decline further</li>
    <li><strong>Relative Clause (Non-restrictive):</strong> <em>, which could have serious consequences...</em> (そしてそのことは深刻な結果をもたらすかもしれない)
      <ul>
        <li>先行詞は前の節全体（コウモリの減少）です。</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "Without + 動名詞" は、文脈によって仮定法（〜しなければ）の意味を持ちます。ここでは「教育がなければ、数は減るだろう」という条件と帰結の関係を作っています。
</div>
`
    }
  },
  "2022-2-1": {
    past: {
      title: "Recognizing Faces",
      content: `## Title: Recognizing Faces

Humans are generally very good at recognizing faces and quickly interpreting their expressions. This is achieved by having specific areas of the brain that specialize in processing facial features. The development of this ability makes sense in terms of evolution, since early humans would have needed to judge, for example, whether those around them were angry and therefore potentially dangerous. One unintended consequence, however, is that people often think they see faces on objects in their environment. People perceive these so-called false faces on a variety of objects, from clouds and tree trunks to pieces of food and electric sockets.

Researchers in Australia recently performed a study to learn more about how the brain processes false faces. Previous studies have revealed that for real faces, people's judgment of what emotion a face is expressing is affected by the faces they have just seen. Seeing a series of happy faces, for example, tends to make people assess the face they next see as expressing happiness. In the Australian study, the researchers showed participants a series of false faces that expressed a particular emotion. They found that, as with real faces, the participants' judgments of the emotions expressed by the false faces were affected by the ones they had just been shown. Based on this finding, the researchers concluded that the brain processes false faces in a way similar to how it processes real ones.

The researchers also noted that any object with features that even loosely resemble the layout of a human face—two eyes and a nose above a mouth—can trigger the brain to assess those features for emotional expression. In other words, the brain's criteria for recognizing a face are general rather than specific. The researchers say this is one reason the brain can assess facial expressions so quickly.`,
      questions: `### Questions

**(32) In the first paragraph, why does the author of the passage mention objects such as clouds?**
1. To support the idea that people's surroundings can affect how well they are able to judge the emotions of others.
2. To describe how people who cannot identify faces also have trouble identifying certain other objects.
3. To help explain that our reactions to everyday objects in our environment are controlled by different areas of the brain.
4. To provide examples of everyday things on which people imagine they can see faces.

**(33) Previous studies have shown that**
1. people's judgments about what emotions real faces are expressing are influenced by other real faces they have seen immediately before.
2. people attach emotional meaning to false faces more quickly than they do to real faces.
3. people tend to judge the emotions expressed by false faces as happier and more positive than those expressed by real faces.
4. people take longer to distinguish false faces when the faces are not expressing any emotions.

**(34) What do the researchers in Australia say about the brain's ability to assess the emotions expressed by faces?**
1. The ability will likely disappear over time as it no longer provides an advantage to humans in terms of survival.
2. The fact that the brain uses loose criteria to identify faces allows people to quickly judge the emotions faces express.
3. The brain is only able to accurately identify the emotions faces express if those faces have very specific features.
4. The evolution of this ability occurred even though it created disadvantages as well as benefits for humans in the past.

---
**Answer Key:** (32) 4, (33) 1, (34) 2
`
    },
    original: {
      title: "The Shadow in the Grass",
      content: `## Title: The Shadow in the Grass

Humans are generally naturally skilled at detecting the presence of other living beings, even when they are hidden or still. This is achieved by having cognitive systems that specialize in detecting "agency," or the intention and movement of another creature. The development of this ability, often called the Hyperactive Agency Detection Device (HADD), makes sense in terms of evolution. For early humans, failing to detect a predator hiding in the grass could mean death, whereas mistaking the wind for a predator was merely a harmless error. One unintended consequence, however, is that people often perceive intentions or spirits in random events or inanimate objects. People experience these false agents in various forms, from hearing voices in the wind to believing a sudden noise is a ghost.

Psychologists have performed numerous studies to learn more about how the brain creates these false agents. Research has shown that when people feel threatened or lack control, they are more likely to see patterns and intentions where none exist. For example, hearing a spooky story tends to make people interpret a creaking floorboard as a sign of an intruder rather than just old wood. In a recent study, researchers exposed participants to random movements of points of light. They found that, just like with real biological motion, participants often interpreted the random movements as a walking person or an animal, especially when primed with a suggestion of agency. Based on this, researchers concluded that the brain processes ambiguous motion using the same neural pathways it uses to track real animals.

The researchers also noted that any movement that even loosely resembles the behavior of a living thing—startling, changing direction, or seemingly reacting—can trigger the brain to assign it agency and intention. In other words, the brain's criteria for detecting an agent are broad rather than strict. Scientists say this is one reason humans are so prone to superstition and belief in the supernatural: our brains are wired to "better safe than sorry," prioritizing the detection of potential threats over absolute accuracy.`,
      questions: `### Original Questions

**(1) In the first paragraph, why does the author mention mistaking the wind for a predator?**
1. To argue that early humans were poor at distinguishing between different types of threats in their environment.
2. To explain why the human ability to detect agency is often overly sensitive and prone to errors.
3. To suggest that the wind was a greater danger to early humans than predators were.
4. To provide an example of how the Hyperactive Agency Detection Device often failed to protect early humans.

**(2) Previous studies on agency detection have shown that**
1. people are less likely to believe in ghosts or spirits when they feel safe and in control of their surroundings.
2. the brain uses completely different areas to process the motion of living things compared to the motion of objects.
3. hearing scary stories makes people more logical and less likely to misinterpret random sounds.
4. people need to see a very clear and detailed image of a creature before their brain will identify it as an agent.

**(3) What do scientists say about the brain's criteria for detecting agents?**
1. The criteria are so strict that humans often fail to notice predators until it is too late.
2. The brain's tendency to use broad criteria helps explain why superstitions and supernatural beliefs are common.
3. The ability to detect agents is slowly disappearing because it is no longer useful for modern humans.
4. The brain prioritizes accuracy over speed, ensuring that humans rarely make mistakes about what they are seeing.

---
**Answer Key:** (1) 2, (2) 1, (3) 2
`
    },
    analysis: {
      intent: `## 作成意図 (Design Rationale)

**テーマ選定の背景:**
2022年第2回の過去問「Recognizing Faces」は、パレイドリア（心霊写真のように、雲や木に顔が見える現象）を扱っています。
そのメカニズムとして、脳が「顔（敵の表情）」を素早く検知するために進化した結果、基準が「緩く (loose criteria)」なっており、副作用として誤検知 (false faces) が起きると説明されています。
これと対比的に、視覚的な「顔」だけでなく、より概念的な「意図・存在 (Agency)」の誤検知を扱う **「HADD (Hyperactive Agency Detection Device) 仮説」** を選びました。

**比較のポイント:**

1.  **現象 (Phenomenon):**
    *   *Past Exam:* **Visual Pareidolia**. 物体に「顔」を見る。
    *   *Original:* **Agency Detection**. 物音や動きに「意図/霊」を感じる (Hearing voices, Seeing ghosts)。

2.  **進化論的理由 (Evolutionary Reason):**
    *   *Past Exam:* "Judge... whether those around them were angry and therefore potentially dangerous." (敵意の早期発見)。
    *   *Original:* "Failing to detect a predator... could mean death." (捕食者の早期発見)。
    *   **Logic:** Type 2 Error (見逃し＝死) を避けるために、Type 1 Error (誤検知＝無駄な警戒) を許容するように進化した。

3.  **脳の処理 (Brain Process):**
    *   *Past Exam:* "False faces" も "Real faces" と同様に処理される（プライミング効果がある）。
    *   *Original:* "Ambiguous motion" も "Biological motion" と同様に処理される。
    *   **Commonality:** 脳は「曖昧な入力」に対して「既知の重要パターン（顔/生物）」を当てはめる傾向がある (General rather than specific criteria)。

この比較により、「幽霊」や「迷信」といった非科学的な現象も、実は生存本能に根ざした脳の正常な機能の副作用であることを科学的に説明する視点を提供します。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Recognizing Faces (過去問) | The Shadow in the Grass (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **対象** | 雲、木、コンセント (Static Objects) | 風、物音、光の点 (Ambiguous Motion) | **False Positives** (誤検知) |
| **検知対象** | **Face** (顔・表情) | **Agent** (主体・意図) | **Threat Detection** (脅威検知) |
| **進化的利益** | 敵意(Anger)の瞬時判断 | 捕食者(Predator)の瞬時判断 | **Survival Advantage** |
| **メカニズム** | Loose Criteria (緩い基準) | Broad Criteria (広い基準) | **Speed over Accuracy** |
| **副作用** | Pareidolia (顔に見える) | Superstition/Ghosts (霊がいると思う) | **Unintended Consequence** |

<br/>

### 1. トピックと展開の相違 (Topic Differences)
*   **Recognizing Faces (Past Exam):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> **Social/Emotional**. "Emotions" (感情) の読み取りに焦点。怒っているか？幸せか？という社会的シグナルの誤適用。
*   **The Shadow in the Grass (Original):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> **Physical/Existential**. "Intentions" (殺意・意志) の読み取りに焦点。そこに誰かいるか？襲ってくるか？という物理的脅威の誤適用。

<br/>

### 2. 設問設計の比較 (Question Design)
*   **Q1/32 (具体例の意図):**
    *   *Past:* "mention objects such as clouds?" → "provide examples ... people imagine they can see faces" (現象の例示)。
    *   *Original:* "mention mistaking the wind for a predator?" → "explain why ... is often overly sensitive" (メカニズムの理由説明)。
*   **Q2/33 (先行研究の結果):**
    *   *Past:* "judgment ... is affected by the faces they have just seen" (プライミング効果：直前の刺激に影響される)。
    *   *Original:* "when people feel threatened ... more likely to see patterns" (状況要因：恐怖や制御不能感が誤検知を促進する)。※オリジナルでは少し視点を広げています。
*   **Q3/34 (研究者の結論):**
    *   *Past:* "uses loose criteria ... allows people to quickly judge" (緩い基準＝速度のトレードオフ)。
    *   *Original:* "prioritize accuracy over speed" (×逆) / "tendency to use broad criteria helps explain why superstitions ... are common" (広い基準＝迷信の起源)。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: "This is achieved by..." (受動態 + 手段)
> This is achieved **by having specific areas of the brain that specialize in processing facial features**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause:</strong> This is achieved (これは達成される)</li>
    <li><strong>Prepositional Phrase (Means):</strong> <em>by having...</em> (〜を持つことによって)
      <ul>
        <li><strong>Object of 'having':</strong> specific areas of the brain (脳の特定の領域)</li>
        <li><strong>Relative Clause:</strong> <em>that specialize in processing facial features</em> (顔の特徴を処理することを専門とする)
          <ul>
            <li>先行詞は areas です。specialize in 〜 (〜を専門とする)。</li>
          </ul>
        </li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "by + doing" は手段（〜することによって）を表す典型的なフレーズです。ここでは、脳が特定の領域を持つ「ことによって」顔認識能力が達成されると説明しています。
</div>

---

### Sentence 2: "Would have needed to evaluate" (仮定法過去完了の帰結節?? No, 推量)
> ...since early humans **would have needed to judge**... whether those around them were angry...

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Auxiliary Verb usage:</strong> <em>would have needed</em> (〜する必要があっただろう)
      <ul>
        <li>ここでの would は「過去の推量」あるいは「潜在的な仮定（もし生きていたら〜だっただろう）」のニュアンスを含みますが、文脈的には「進化の過程で当然〜だったはずだ」という強い推量を表します。</li>
      </ul>
    </li>
    <li><strong>Infinitive Object:</strong> to judge (判断すること)</li>
    <li><strong>Noun Clause (Object of judge):</strong> <em>whether those around them were angry...</em> (周りの人々が怒っているかどうか)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "would have needed" は「過去の推量」を表し、進化の過程における必然性（どうしても〜する必要があったはずだ）を強調しています。単なる過去形 (needed) よりも、仮定的な響き（もし生き残るためであれば〜）を含みます。
</div>

---

### Sentence 3: "Interpretation affected by..." (受動態)
> ...people's judgment of what emotion a face is expressing **is affected by** the faces they have just seen.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> people's judgment of [what emotion a face is expressing] (〜という判断)</li>
    <li><strong>Verb (Passive):</strong> is affected by (〜によって影響を受ける)</li>
    <li><strong>Agent:</strong> the faces (that) they have just seen (直前に見た顔)
      <ul>
        <li>関係代名詞の省略です。</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  受動態 "is affected by" を使うことで、主語である「判断 (judgment)」に焦点を当てています。「何が影響を及ぼすか」よりも「何が影響を受けるか」が文脈上重要である場合に使われます。
</div>

---

### Sentence 4: "Make object complement" (使役動詞)
> Seeing a series of happy faces ... tends to **make people assess** the face they next see **as expressing happiness**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Causative Verb:</strong> <em>make + O + V(原形)</em> (OにVさせる)
      <ul>
        <li><strong>O:</strong> people</li>
        <li><strong>V:</strong> assess (〜を評価/判断する)</li>
      </ul>
    </li>
    <li><strong>Assess Structure:</strong> <em>assess A as B</em> (AをBだと判断する)
      <ul>
        <li><strong>A:</strong> the face (that) they next see</li>
        <li><strong>B:</strong> expressing happiness (現在分詞形容詞用法：幸福を表していると)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  使役動詞 make (make + O + C/V) は「強制的に〜させる」「（自然な結果として）〜させる」という意味を持ちます。ここでは「一連の幸福な顔を見ること」が原因となって、人々がそのように判断する結果を生むことを示しています。
</div>
`
    }
  },
  "2022-1-1": {
    past: {
      title: "Honey Fungus",
      content: `## Title: Honey Fungus

The largest living organism on Earth is not a whale or other large animal. Rather, it belongs to the group of organisms which includes mushrooms and toadstools. It is a type of fungus commonly known as honey fungus, and its rootlike filaments spread underground throughout a huge area of forest in the US state of Oregon. DNA testing has confirmed that all the honey fungus in the area is from the same organism, and, based on its annual rate of growth, scientists estimate it could be over 8,000 years old. They also calculate that it would weigh around 35,000 tons if it were all gathered together.

As impressive as this honey fungus is, it poses a problem for many trees in the forest. The fungus infects the trees and absorbs nutrients from their roots and trunks, often eventually killing them. Unfortunately, affected trees are usually difficult to spot, as the fungus hides under their bark, and its filaments are only visible if the bark is removed. In the late fall, the fruiting bodies of the fungus appear on the outside of the trees, but only for a few weeks before winter. Although the trees attempt to resist the fungus, they usually lose the battle in the end because the fungus damages their roots, preventing water and nutrients from reaching their upper parts.

Full removal of the honey fungus in Oregon has been considered, but it would prove to be too costly and time-consuming. Another solution currently being researched is the planting of tree species that can resist the fungus. Some experts have suggested, however, that a change of perspective may be necessary. Rather than viewing the effects of the honey fungus in a negative light, people should consider it an example of nature taking its course. Dead trees will ultimately be recycled back into the soil, benefiting the area's ecosystem.`,
      questions: `### Questions

**(32) According to the passage, what is one thing that is true about the honey fungus in Oregon?**
1. It is a combination of different mushroom species that started to grow together over time.
2. It grew slowly at first, but it has been expanding more rapidly in the last thousand years.
3. It shares the nutrients it collects with the trees and other types of plant life that it grows on.
4. It is a single organism that has spread throughout a wide area by growing and feeding on trees.

**(33) Honey fungus is difficult to find because**
1. the mushrooms it produces change color depending on the type of tree that it grows on.
2. it is generally not visible, except when it produces fruiting bodies for a short time each year.
3. not only does it grow underground, but it also has an appearance that is like that of tree roots.
4. it is only able to survive in areas that have the specific weather conditions it needs to grow.

**(34) What do some experts think?**
1. People should regard the honey fungus's effects on trees as a natural and beneficial process.
2. The only practical way to deal with the honey fungus is to invest more time and money in attempts to remove it.
3. Trees that have been infected by the honey fungus can be used to prevent it from spreading further.
4. The honey fungus can be harvested to provide people with an excellent source of nutrients.

---
**Answer Key:** (32) 4, (33) 2, (34) 1
`
    },
    original: {
      title: "The Fire Paradox",
      content: `## Title: The Fire Paradox

The most powerful force shaping the forests of western North America is not storms or pests. Rather, it is an element that has existed as long as the trees themselves: fire. While often seen as a destructive enemy, fire plays a complex role in the ecosystem. In Yellowstone National Park, for example, signs of massive fires from decades ago are still visible. Scientific studies have confirmed that these fires were not just random disasters but essential events. Based on the analysis of tree rings, scientists estimate that large fires have swept through the area every few centuries for thousands of years. They also calculate that without these fires, the forest would look completely different and support far less wildlife.

As beneficial as fire can be, it poses a danger to human settlements near the forest. Fire consumes trees and brush, releasing vast amounts of smoke and heat, often threatening homes and infrastructure. Unfortunately, future fire risks are usually difficult to predict, as fuel builds up silently on the forest floor, and the danger remains hidden until a spark ignites it. In the dry summer months, the conditions for fire are ideal, but they may only last for a few weeks or months. Although firefighters attempt to suppress every fire, they are often overwhelmed in the end because the accumulated fuel makes the flames too intense, preventing traditional methods from bringing them under control.

Full suppression of all forest fires has been the policy for decades, but it has proven to be ecologically damaging and increasingly dangerous. Another solution currently being implemented is the use of "controlled burns" to reduce fuel loads safely. Some ecologists have suggested, however, that a change of perspective is necessary. Rather than viewing fire solely in a negative light, people should consider it an example of nature's necessary cycle. Burnt trees will ultimately release nutrients back into the soil and open the canopy for new growth, benefiting the area's ecosystem.`,
      questions: `### Original Questions

**(1) According to the passage, what is one thing that is true about forest fires in Yellowstone?**
1. They are caused primarily by human carelessness and have no natural role in the forest's history.
2. They have occurred periodically for thousands of years and are considered essential for the ecosystem.
3. They destroy all wildlife in the area, requiring decades for animals to return to the forest.
4. They are becoming less frequent due to climate changes that have made the forest wetter.

**(2) Fire risks are difficult to manage because**
1. fires only occur during winter months when it is difficult for firefighters to reach the forest.
2. the fuel that feeds the fires accumulates unnoticed until it is ignited by a spark.
3. the smoke from small fires often hides larger fires that are burning nearby.
4. firefighters are forbidden from entering the forest during the dry summer season.

**(3) What do some ecologists suggest regarding forest fires?**
1. People should accept fire as a natural process that helps recycle nutrients and regenerate the forest.
2. The only way to save the forest is to completely eliminate fire and use chemicals to clear brush.
3. Trees that have been burned should be immediately removed to prevent pests from attacking them.
4. Residents living near forests should be banned from building homes to reduce the risk of property damage.

---
**Answer Key:** (1) 2, (2) 2, (3) 1
`
    },
    analysis: {
      intent: `## 作成意図 (Design Rationale)

**テーマ選定の背景:**
2022年第1回の過去問「Honey Fungus」は、ナラタケという巨大菌が木を枯らす害を与えつつも、長期的には「自然のサイクル（分解・リサイクル）」の一部として肯定的に捉えるべきという視点の転換を扱っています。
これと類似する構造として **「森林火災 (Forest Fires)」** を選びました。
火災も短期的には破壊的ですが、生態系にとっては「再生・リサイクル」のために不可欠なプロセスであり、人間による完全な排除（Suppression）が逆に事態を悪化させるというパラドックスがあります。

**比較のポイント:**

1.  **破壊的エージェント (Destructive Agent):**
    *   *Past Exam:* Honey Fungus (菌)。木を枯らす。
    *   *Original:* Forest Fire (火)。木を燃やす。
    *   **Shared Trait:** 自然界の強力な「分解者・更新者」。

2.  **人間の対応 (Human Response):**
    *   *Past Exam:* "Full removal... too costly." (完全除去は困難)。
    *   *Original:* "Full suppression... ecologically damaging." (完全鎮火は有害)。
    *   **Dilemma:** 自然の力に抗うことの限界とコスト。

3.  **視点の転換 (Paradigm Shift):**
    *   *Past Exam:* "Example of nature taking its course." (自然の摂理として受け入れる)。
    *   *Original:* "Example of nature's necessary cycle." (自然のサイクルとして受け入れる)。
    *   **Conclusion:** 死（枯死/焼失）は終わりではなく、次の生命（栄養供給/新たな成長）への準備である。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Honey Fungus (過去問) | The Fire Paradox (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **主体** | **Fungus** (菌) | **Fire** (火) | **Nature's Recycler** |
| **作用** | Kills trees (Absorbs nutrients) | Burns trees (Releases nutrients) | **Destruction** |
| **人間の反応** | Remove (除去しようとする) | Suppress (消そうとする) | **Resistance** |
| **結果** | Difficult due to underground network | Difficult due to fuel buildup | **Futile Effort** |
| **視点の転換** | Negative → Natural Course | Negative → Necessary Cycle | **Acceptance** |

<br/>

### 1. トピックと展開の相違 (Topic Differences)
*   **Honey Fungus (Past Exam):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Agent Type</span> **Biotic (生物)**. 菌類という生き物が生態系を操作している。
*   **The Fire Paradox (Original):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Agent Type</span> **Abiotic (非生物)**. 火という物理現象が生態系を更新している。

<br/>

### 2. 設問設計の比較 (Question Design)
*   **Q1/32 (主体の正体):**
    *   *Past:* "Single organism" (巨大な単一生物である)。
    *   *Original:* "Occurred periodically ... essential" (太古からの周期的現象である)。※正体や歴史的背景を問う。
*   **Q2/33 (発見/管理の難しさ):**
    *   *Past:* "not visible, except when it produces fruiting bodies" (普段は見えない)。
    *   *Original:* "accumulates unnoticed until it is ignited" (燃料は普段気づかれない)。※潜伏性 (Hidden Threat)。
*   **Q3/34 (専門家の意見):**
    *   *Past:* "regard ... as a natural and beneficial process" (自然なプロセスとみなすべき)。
    *   *Original:* "accept fire as a natural process" (自然なプロセスとみなすべき)。※結論の一致。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: "Belongs to..." (所属)
> Rather, it **belongs to** the group of organisms **which includes mushrooms and toadstools**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Phrasal Verb:</strong> <em>belongs to</em> (〜に属する)</li>
    <li><strong>Object:</strong> the group of organisms (生物のグループ)</li>
    <li><strong>Relative Clause:</strong> <em>which includes mushrooms and toadstools</em> (キノコや毒キノコを含む)
      <ul>
        <li>先行詞は the group of organisms です。</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "Belongs to" は所有や所属を表す基本的な熟語ですが、進行形にはなりません (× is belonging to)。状態を表す動詞だからです。
</div>

---

### Sentence 2: "As impressive as..." (譲歩構文)
> **As impressive as this honey fungus is**, it poses a problem for many trees in the forest.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Concessive Clause:</strong> <em>As impressive as this honey fungus is</em> (このナラタケは印象的ではあるが)
      <ul>
        <li>Structure: **Adjective + as + S + V** (Sは形容詞ではあるが)</li>
        <li>(= Though this honey fungus is impressive)</li>
      </ul>
    </li>
    <li><strong>Main Clause:</strong> it poses a problem... (それは問題を引き起こす)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "Adjective/Adverb + as + S + V" の倒置形は、「〜だけれども」という譲歩の意味を表す重要構文です。文頭に形容詞が来るのが特徴です。
</div>

---

### Sentence 3: "Preventing... from" (妨害を表す表現)
> ...because the fungus damages their roots, **preventing water and nutrients from reaching their upper parts**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Participial Construction:</strong> <em>preventing ... from ...</em> (そして〜を妨げる / 〜を妨げながら)
      <ul>
        <li>主節の内容（根へのダメージ）の結果を表しています。</li>
      </ul>
    </li>
    <li><strong>Pattern:</strong> **prevent + O + from + V-ing** (Oが〜するのを妨げる)
      <ul>
        <li><strong>O:</strong> water and nutrients</li>
        <li><strong>V-ing:</strong> reaching their upper parts</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "Prevent A from B(ing)" は「AがBするのを防ぐ/妨げる」という基本構文です。Stop や Keep も同様に使えますが、Prevent は「予防する/未然に防ぐ」というニュアンスが強くなります。
</div>

---

### Sentence 4: "Rather than..." (対比と提案)
> **Rather than viewing the effects of the honey fungus in a negative light**, people should consider it an example of nature taking its course.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Prepositional Phrase:</strong> <em>Rather than viewing...</em> (〜を否定的に見るのではなく)
      <ul>
        <li><em>view A in a negative light</em>: Aを否定的な観点で見る。</li>
      </ul>
    </li>
    <li><strong>Main Clause:</strong> people should consider it (as) an example... (人々はそれを例としてみなすべきだ)
      <ul>
        <li>Structure: **consider + O + (as) + C** (OをCとみなす)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "Rather than" は「〜するよりむしろ」「〜しないで」という意味で、提案や対比を行う際によく使われます。ここでは「否定的な見方」と「肯定的/受容的な見方」を対比させています。
</div>
</div>
`
    }
  },
  "2022-1-2": {
    past: {
      title: "Intentional Communities",
      content: `## Title: Intentional Communities

For hundreds of years, people have formed self-sustaining communities, often referred to as intentional communities, which are characterized by shared ideals, collective ownership, and common use of property. The first known intentional community was established in the sixth century BC by a Greek philosopher. Over the following centuries, a number of such communities were created by religious groups wishing to live outside mainstream society. Some of these, such as Christian monasteries and the collective farms called kibbutzim in Israel, remained successful for generations, while others lasted only a few years.

In the twentieth century, philosophical idealism, as seen in the back-to-the-land movement of the 1960s and 1970s, also motivated people to form intentional communities. By the early 1970s, it has been estimated that there were thousands of such communities in the United States alone, though many of those later disbanded. The Foundation for Intentional Communities now lists fewer than 800 communities in the United States and just under 250 in the rest of the world. Intentional communities that failed generally faced a similar challenge. Some people who came to stay were committed to ideals of shared work, growing their own food, and living collectively, but others were less serious. A cofounder of one community recalled, "We had an impractical but noble vision that was constantly undermined by people who came just to play."

Not all intentional communities are destined to fall apart, however. The ongoing success of Damanhur, a spiritual and artistic collective near Turin, Italy, is attributed to open communication and a practical approach. Damanhur organizes its members into family-like groups of 15 to 20 people. The community has found that creating intimacy becomes difficult if a "family" has more than 25 people. In contrast, when there are too few people in the "family," there is not enough collective knowledge to allow for effective decision-making. Damanhur's ideals, which are outlined in its constitution, are upheld by elected leaders, and tensions in the community are handled by holding playful mock battles where people fight with paint-filled toy guns.

It seems that all successful intentional communities share a common trait: the ability to constantly think ahead. As one Damanhur member put it, "You should change things when they work—not when they don't work." This strategy of making changes before problems occur has worked well for Damanhur and other successful communities, which suggests it is an effective way for intentional communities to fulfill the needs of their members in the long term.`,
      questions: `### Questions

**(35) A common issue faced by intentional communities that failed was that**
1. a majority of the community was in favor of someone joining, but a small number of individuals opposed it.
2. people joined the community with genuine interest, but they lacked the skills or knowledge to contribute effectively.
3. some members worked hard to follow the community's ideals, while others took a more casual approach to communal living.
4. the community set out to complete an ambitious project, but it could not complete it because of a lack of knowledge and financial resources.

**(36) What is true of the social structure at Damanhur?**
1. "Families" are free to create their own rules and do not necessarily have to follow the rules contained in the community's constitution.
2. The number of people in a "family" is controlled to create the best conditions for resolving group issues and maintaining good relationships.
3. The mock battles that are intended to solve disagreements sometimes become serious and result in some members leaving their "families."
4. The community contains "families" of different sizes so that members can choose whether to live in a large or a small group setting.

**(37) According to the passage, how is Damanhur similar to other successful intentional communities?**
1. Members of the community are allowed to exchange their responsibilities from time to time to prevent them from becoming exhausted.
2. The type of work the community does to earn income changes periodically so that members can learn new skills.
3. Members of the community take turns carrying out maintenance on the buildings and equipment that are owned collectively.
4. The community continually finds ways to satisfy the needs of its members rather than simply reacting to problems when they arise.

---
**Answer Key:** (35) 3, (36) 2, (37) 4
`
    },
    original: {
      title: "The Martian Experiment",
      content: `## Title: The Martian Experiment

For decades, scientists have designed simulated environments to prepare for life on Mars, often referred to as analog missions. These missions are characterized by isolation, confined living spaces, and a shared scientific goal. The first major experiments began in the late 20th century, such as Biosphere 2 in Arizona. Since then, various space agencies have established habitats in remote locations like the Arctic and Hawaiian volcanoes to mimic the harsh conditions of the Red Planet. Some of these missions have provided valuable data for future explorers, while others were terminated early due to psychological friction among crew members.

In recent years, the prospect of actual colonization, driven by both government and private space companies, has renewed interest in these analog missions. By the 2020s, dozens of simulations were running globally, though many faced significant social challenges. Missions that failed to complete their duration often encountered a similar problem: the human factor. Some crew members were dedicated to the rigorous schedule of maintenance and research, while others struggled with boredom or inter-personal conflict. A commander of one aborted mission noted, "We had a sophisticated facility and clear objectives, but the mission was constantly undermined by personality clashes that we hadn't anticipated."

Not all analog missions are destined to collapse, however. The ongoing success of HI-SEAS, a habitat in Hawaii, is often attributed to careful crew selection and structural organization. HI-SEAS organizers often limit crews to small, cohesive groups of 4 to 6 people. Researchers have found that maintaining social harmony becomes difficult if the crew size exceeds this number in such a confined space. In contrast, if the crew is too small, there is not enough diversity of skills to handle technical emergencies. Mission protocols, which are strictly defined before entry, are enforced by mission control, and tensions in the habitat are often handled by scheduled "debriefing sessions" where crew members can air grievances openly but respectfully.

It seems that all successful long-duration simulations share a common trait: the ability to adapt protocols proactively. As one mission director put it, "You should adjust the schedule when morale is high—not wait until everyone is depressed." This strategy of adjusting workloads and social activities before burnout occurs has worked well for HI-SEAS and other successful analogs, which suggests it is an effective way for future Martian colonies to maintain the mental health of their inhabitants in the long term.`,
      questions: `### Original Questions

**(1) A common issue faced by analog missions that failed was that**
1. the equipment provided for the mission was not advanced enough to sustain the crew for the full duration.
2. crew members had different levels of commitment and struggled to get along with each other in the confined space.
3. the mission control team gave conflicting instructions that caused confusion among the crew members.
4. unexpected weather conditions damaged the habitat, forcing the crew to evacuate earlier than planned.

**(2) What is true of the social structure in successful HI-SEAS missions?**
1. Crew members are allowed to vote on the mission rules and change them whenever they feel it is necessary.
2. The size of the crew is carefully balanced to ensure enough skill diversity while preventing social friction.
3. The "debriefing sessions" are voluntary, and crew members can choose not to attend if they prefer privacy.
4. Crews are composed of large groups of over 20 people to ensure that there are always backup members available.

**(3) According to the passage, what is a key strategy for success in these simulations?**
1. Keeping the daily schedule exactly the same throughout the mission to provide a sense of stability.
2. Rotating crew members out of the habitat every few weeks to prevent them from getting too tired.
3. Making changes to the mission plan before problems arise rather than waiting for a crisis to occur.
4. Encouraging crew members to hide their negative feelings so that the group morale remains high.

---
**Answer Key:** (1) 2, (2) 2, (3) 3
`
    },
    analysis: {
      intent: `## 作成意図 (Design Rationale)

**テーマ選定の背景:**
2022年第1回の過去問「Intentional Communities」は、理想を持って共同生活をするコミュニティが直面する「人間関係・規模・維持」の課題と、成功例（ダマヌール）の「予防的な変化」戦略を扱っています。
これと類似する現代的・未来的な構造として **「火星移住シミュレーション (Analog Missions)」** を選びました。
閉鎖環境での共同生活 (Isolated/Confined) は、コミューンと同様に「理想 (Scientific Goal) vs 現実 (Human Factor)」の対立が鋭く現れる場であり、成功の鍵も類似しています。

**比較のポイント:**

1.  **組織の課題 (Challenge):**
    *   *Past Exam:* Commitment gap (Serious members vs "Just to play").
    *   *Original:* Motivation gap (Dedicated vs Boredom/Conflict).
    *   **Commonality:** 物理的な設備よりも「人間関係 (Soft skills)」が崩壊の原因になる。

2.  **構造的解決策 (Structural Solution):**
    *   *Past Exam:* Size cap (15-20 people). Too big = loss of intimacy. Too small = lack of knowledge.
    *   *Original:* Size cap (4-6 people). Too big = social friction. Too small = lack of skills.
    *   **Logic:** "Goldilocks Zone" (最適な集団サイズ) の重要性。

3.  **維持戦略 (Strategy):**
    *   *Past Exam:* "Change things when they work." (問題が起きる前に変える)。
    *   *Original:* "Adjust schedule when morale is high." (燃え尽きる前に変える)。
    *   **Commonality:** Proactive Adaptation (予防的適応)。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Intentional Communities (過去問) | The Martian Experiment (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **形式** | **Commune** (共同体) | **Habitat** (居住施設) | **Shared Living** |
| **動機** | Shared Ideals (Religious/Social) | Shared Goal (Scientific/Survival) | **Utopian Vision** |
| **失敗要因** | Uncommitted members (Play) | Interpersonal conflict (Friction) | **Human Factor** |
| **成功要因1** | Group Size (15-20) | Crew Size (4-6) | **Optimal Capacity** |
| **成功要因2** | **Proactive Change** | **Proactive Adaptation** | **Preventive Measure** |

<br/>

### 1. トピックと展開の相違 (Topic Differences)
*   **Intentional Communities (Past Exam):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Setting</span> **Open Society**. 社会の中に独自領域を作る。脱退も比較的自由。
*   **The Martian Experiment (Original):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Setting</span> **Closed Environment**. 物理的に隔離されている。脱退はプロジェクトの失敗を意味する。よりストレスフル。

<br/>

### 2. 設問設計の比較 (Question Design)
*   **Q1/35 (失敗の共通点):**
    *   *Past:* "others took a more casual approach" (本気度の温度差)。
    *   *Original:* "struggled to get along ... different levels of commitment" (温度差と不和)。
*   **Q2/36 (社会構造/サイズ):**
    *   *Past:* "number ... controlled to create the best conditions" (サイズ管理が鍵)。
    *   *Original:* "carefully balanced to ensure enough skill diversity" (サイズ管理が鍵)。
*   **Q3/37 (成功の特徴):**
    *   *Past:* "continually finds ways to satisfy ... rather than simply reacting" (反応するより先回りで満たす)。
    *   *Original:* "Making changes ... before problems arise" (問題が起きる前に変える)。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: "Characterized by..." (受動態 + 特徴)
> ...often referred to as intentional communities, **which are characterized by shared ideals, collective ownership, and common use of property**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Relative Clause (Non-restrictive):</strong> <em>, which are characterized by...</em> (〜によって特徴付けられる)
      <ul>
        <li>先行詞は intentional communities。</li>
        <li><strong>be characterized by A</strong>: Aを特徴とする、Aが特徴である。</li>
      </ul>
    </li>
    <li><strong>Object of 'by':</strong> A series of nouns
      <ul>
        <li>shared ideals (共有された理想)</li>
        <li>collective ownership (共同所有)</li>
        <li>common use of property (財産の共同使用)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "Be characterized by" は、ある主語の定義的な特徴や性質を述べる際によく使われる重要表現です。「Aの特徴はBである」と言いたい時に便利です。
</div>

---

### Sentence 2: "Wishing to..." (分詞の後置修飾)
> ...a number of such communities were created by religious groups **wishing to live outside mainstream society**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause:</strong> a number of such communities were created by religious groups</li>
    <li><strong>Present Participle Phrase:</strong> <em>wishing to live...</em> (〜することを望んでいる)
      <ul>
        <li>前の名詞 religious groups を修飾しています。(= who wished to live...)</li>
      </ul>
    </li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  現在分詞 (ing形) による後置修飾は、能動的な意味（〜している、〜するような）を名詞に付け加えます。
</div>

---

### Sentence 3: "It has been estimated that..." (形式主語)
> By the early 1970s, **it has been estimated that there were thousands of such communities** in the United States alone...

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Expletive Subject (It):</strong> <em>It has been estimated that...</em> (〜だと推定されている)
      <ul>
        <li>真主語は that 以下の節です。</li>
      </ul>
    </li>
    <li><strong>That Clause:</strong> <em>that there were thousands of such communities</em> (数千ものそのようなコミュニティがあったと)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "It is/has been estimated that..." は、数値や統計について述べる際によく使われる客観的な表現です。書き手の主観ではなく、一般的な推定であることを示します。
</div>

---

### Sentence 4: "Undermined by..." (受動態)
> "We had an impractical but noble vision **that was constantly undermined by people who came just to play.**"

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Relative Clause:</strong> <em>that was constantly undermined by...</em> (〜によって絶えず台無しにされた)
      <ul>
        <li>先行詞は an impractical but noble vision。</li>
        <li><strong>undermine:</strong> (土台を) 掘り崩す、徐々に弱める、台無しにする。</li>
      </ul>
    </li>
    <li><strong>By Agent:</strong> people who came just to play (ただ遊びに来ただけの人々)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  "Undermine" は文字通り「下を掘る」という意味から転じて、「（計画や権威などを）内側から徐々にダメにする」というニュアンスで使われます。
</div>
`
    }
  },
  "2025-2-p2": {
    past: {
      title: "Relying on Nature",
      content: `## Title: Relying on Nature

It was once thought that the use of medicine was a uniquely human trait, but over the past fifty years or so, scientists have reported many cases of animals using natural remedies to self-medicate. Plants produce many chemical substances to protect themselves against disease or prevent themselves from being eaten by animals and insects, and some of these chemicals have medicinal properties. A growing body of research shows that animals have learned to recognize and consume these substances to treat and prevent illnesses.

Self-medication by animals was first recorded in the 1970s by researchers studying a group of chimpanzees in Tanzania. They observed some chimpanzees in the group swallowing the leaves of plants that were not a part of their regular diet. Since the chimpanzees were swallowing the leaves whole without chewing them, they were obviously not consuming them for nutritional purposes, and further observations revealed that the behavior occurred more frequently when stomach parasites were common among the group. The researchers hypothesized that the leaves were being used to remove the parasites, and they used the term "zoopharmacognosy" to refer to this self-medicating behavior.

For many years, it was believed by most scientists that this behavior was limited to animals with advanced intellectual ability. This belief originated mainly from the initial observations of chimpanzees, which suggested that the behavior had to be learned and passed on from generation to generation. However, a recent review of research has shown that self-medication is much more common than was previously thought and is even demonstrated by some insects. This suggests that self-medication must also occur by instinct, and many scientists now believe that it can be both innate and learned, even in more intelligent animals.

One of the best-studied examples of self-medication in insects is that of fruit flies. These tiny flies are often targeted by a type of parasitic wasp that lays its eggs inside the flies' bodies. Research has shown that fruit flies infected by parasitic wasps deliberately consume food containing alcohol, such as rotting fruit. The alcohol prevents the development of the wasp larvae and protects the flies. Consuming food with high alcohol content is normally harmful to the flies, so they avoid doing so when they are healthy. This implies that something triggers them to seek out such food only when they have wasp larvae inside them, and scientists seem to have determined the chemical compound that causes it. In other studies, it has also been found that the use of natural medication by some social insects goes beyond self-medication. When bacterial and fungal infections occur within an ant colony, for example, the insects collect resin from nearby trees and take it back to the colony. The resin has antibacterial and antifungal properties, so by doing this, the ants are performing a form of "social medication."

Many scientists believe it is likely that our human ancestors gained knowledge of medicinal plants by observing the behavior of animals. They also hope that further research into zoopharmacognosy will help to improve human health care by providing clues to new sources of medicines.`,
      questions: `### Questions

        ** (28) What did a group of researchers in the 1970s conclude?**
      1. Most of the reported cases of animals using natural substances for medicinal purposes were false.
2. Most chemical substances produced by plants were harmful to animals even when only consumed in small amounts.
3. Chimpanzees supplemented their diets with leaves when they could not get adequate nutrition from their usual food sources.
4. Chimpanzees deliberately ate the leaves of certain plants when they were suffering from parasitic infections.

** (29) What did most scientists believe for many years?**
    1. Animals did not self- medicate because consuming unknown substances went against their natural instincts.
2. The kinds of plants that animals used for medicinal purposes changed from one generation to the next.
3. Animals with low intelligence could not self - medicate because they lacked the ability to learn how to do so.
4. All animals were born with the ability to recognize natural substances that have medicinal properties.

** (30) What is one thing the author of the passage says about fruit flies ?**
  1. Consuming alcohol is damaging to their health but overall beneficial when they are infected by parasitic wasps.
2. The consumption of food containing alcohol weakens them and makes them more vulnerable to parasitic wasps.
3. They intentionally become infected by parasitic wasps in order to reduce the harmful effects of alcohol.
4. They have developed a strategy to prevent parasitic wasps from being able to lay eggs inside them.

** (31) Research has shown that some social insects **
  1. produce a substance that can protect themselves and their colony from bacterial and fungal infections.
2. leave their colony when they are suffering from infectious diseases to prevent the disease from spreading.
3. use natural medication in a way that benefits their whole colony rather than just themselves.
4. have the ability to teach other members of their colony how to deal with bacterial and fungal infections.

---
**Answer Key:** (28) 4, (29) 3, (30) 1, (31) 3`
    },
    original: {
      title: "Plant Communication",
      content: `## Title: Plant Communication

For centuries, plants were considered passive organisms that simply absorbed water and sunlight. However, over the past few decades, researchers have discovered that plants are far more sophisticated than previously believed. They can detect threats, respond to their environment, and even communicate with each other using a complex system of chemical signals. This emerging field of study is reshaping our understanding of plant biology and may have significant implications for agriculture.

The first major breakthrough in understanding plant communication came in the 1980s when scientists studying willow trees made a surprising discovery. They found that when caterpillars attacked one tree, nearby trees that had not been attacked began producing chemicals that made their leaves less palatable to insects. Since the trees had no physical connection, the researchers hypothesized that the attacked tree was releasing airborne chemicals to warn its neighbors. This phenomenon became known as "talking trees," and it sparked considerable debate in the scientific community about whether plants could truly communicate.

For many years, skeptics argued that the observed reactions in nearby trees were merely coincidental or caused by other environmental factors. They maintained that communication required a sender, a receiver, and an intentional message, none of which plants seemed capable of producing. However, numerous subsequent studies have confirmed that plants do indeed release volatile organic compounds when under stress, and neighboring plants can detect and respond to these signals. Some researchers now argue that the definition of communication should be expanded to include any exchange of information that benefits the organisms involved.

One of the most fascinating examples of plant communication involves lima beans and spider mites. When spider mites attack lima bean plants, the plants release a specific blend of chemicals into the air. Remarkably, these chemicals serve two purposes: they attract predatory mites that feed on spider mites, and they prompt neighboring lima bean plants to begin producing their own defensive chemicals before they are attacked. This response demonstrates that plants are not merely passive victims of herbivores but active participants in their own defense. Scientists have also discovered that some plants can distinguish between different types of attackers and produce different chemical signals accordingly.

Many agricultural scientists believe that understanding plant communication could revolutionize farming practices. By identifying the chemical signals that plants use to warn each other, farmers might be able to develop more effective and environmentally friendly pest control methods. Some researchers are already experimenting with using plant-derived chemicals as natural pesticides, potentially reducing the need for synthetic alternatives.`,
      questions: `### Original Questions

**(28) What did scientists discover about willow trees in the 1980s?**
1. Caterpillars preferred to attack isolated trees rather than those growing in groups.
2. Trees that were physically connected underground could share defensive chemicals.
3. Trees could detect the presence of caterpillars before they began attacking.
4. Trees appeared to be warning nearby trees about insect attacks through chemical signals.

**(29) What was the main argument of scientists who doubted plant communication?**
1. The chemical compounds released by plants were too weak to travel through the air.
2. Plants lacked the biological systems necessary for any form of information exchange.
3. The response of neighboring plants could be explained by factors unrelated to signals from other plants.
4. Previous research on plant communication had used flawed experimental methods.

**(30) What is one thing the author says about lima beans?**
1. They produce chemicals that kill spider mites directly rather than attracting their predators.
2. They release chemicals that both summon helpful insects and warn other plants.
3. Their defensive chemicals work more effectively than those of most other plant species.
4. They cannot detect warning signals from plants that are not of the same species.

**(31) What do some scientists think could result from research on plant communication?**
1. New farming methods that help protect crops without relying on artificial chemicals.
2. A significant reduction in the number of insect species that damage agricultural crops.
3. The development of plants that can survive without any form of pest control.
4. The creation of chemicals that prevent plants from communicating with each other.

---
**Answer Key:** (28) 4, (29) 3, (30) 2, (31) 1`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Relying on Nature (2025-2) - Category: Natural Science / Plant Biology

### 1. 量的構造 (Quantitative Structure)

*   **総単語数:** ~500 words (Relying on Nature と同等)
*   **パラグラフ構成:**
    1.  **導入:** 植物は受動的→実は高度。化学シグナルによるコミュニケーション。
    2.  **歴史的発見:** 1980年代のヤナギの研究。"talking trees"現象の発見。
    3.  **懐疑論の反論:** コミュニケーションの定義論争→その後の研究で確認。定義の拡張。
    4.  **具体例:** ライマメとハダニの例。二重機能（捕食者誘引＋隣接植物への警告）。
    5.  **結論:** 農業への応用可能性。天然農薬の開発。

### 2. テーマの模倣 (Thematic Imitation)

*   **Original:** 動物の自己投薬 (Zoopharmacognosy) vs 科学的懐疑論。本能 vs 学習。チンパンジー→昆虫。
*   **New:** 植物のコミュニケーション (Chemical Signals) vs 科学的懐疑論。意図的 vs 偶然。ヤナギ→ライマメ。

### 3. 語彙・表現 (Lexical Level)

*   **対比表現:** "For centuries... However, over the past few decades", "skeptics argued that... However, ... studies have confirmed"
*   **重要語彙:** passive organisms, chemical signals, airborne chemicals, predatory mites, defensive chemicals, volatile organic compounds`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **Relying on Nature (過去問)** | **Plant Communication (オリジナル)** | **共通点 (Commonality)** |
|----------|------------------------------|-------------------------------------|--------------------------|
| **テーマ** | 動物の自己投薬 (Zoopharmacognosy) | 植物のコミュニケーション | 科学史における「通説の覆し」と「新発見」 |
| **構造** | Intro(概念)→History(1970年代)→Belief(学習vs本能)→Examples(昆虫)→Conclusion | Intro(概念)→History(1980年代)→Skeptics(定義論争)→Examples(ライマメ)→Conclusion | 時系列に沿った発見の経緯と、当時の規範(Scientific Norms)の影響 |
| **設問1** | 歴史的発見 (Chimpanzees deliberately ate...) | 歴史的発見 (Trees appeared to be warning...) | Para 2の歴史的発見を問う |
| **設問2** | 通説 (Animals with low intelligence could not...) | 懐疑論 (The response... could be explained by...) | Para 3の「通説」または「反論」を問う |
| **設問3** | 具体例 (fruit flies + alcohol: 二面性) | 具体例 (lima beans: 二重機能) | Para 4の具体例を正確に言い換え |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Relying on Nature (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 動物の自己投薬行動 (Zoopharmacognosy)。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> チンパンジーの観察(1970s) → 学習か本能か → 昆虫でも確認 → 普遍性の確立。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> self-medication行動の「本能」と「学習」の両面性。

*   **Plant Communication (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 植物のコミュニケーション (Chemical Signals)。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> ヤナギの研究(1980s) → 懐疑論への反論 → ライマメの二重機能。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 植物間の情報交換と「コミュニケーション」の定義拡張。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1 (内容一致 - Intro):**
    *   **過去問:** \"Chimpanzees deliberately ate the leaves of certain plants when they were suffering from parasitic infections\" (Para 2の発見)。
    *   **Original:** \"Trees appeared to be warning nearby trees about insect attacks through chemical signals\" (Para 2の発見)。
*   **Q2 (内容一致 - Reason):**
    *   **過去問:** \"Animals with low intelligence could not self-medicate because they lacked the ability to learn how to do so\" (Para 3の通説)。
    *   **Original:** \"The response of neighboring plants could be explained by factors unrelated to signals from other plants\" (Para 3の懐疑論)。
*   **Q3 (内容一致 - Example 1):**
    *   **過去問:** \"Consuming alcohol is damaging to their health but overall beneficial when they are infected by parasitic wasps\" (Fruit fliesの事例)。
    *   **Original:** \"They release chemicals that both summon helpful insects and warn other plants\" (Lima beansの二重機能)。
*   **Q4 (内容一致 - Example 2 / Extension):**
    *   **過去問:** \"The ants collect resin... performing a form of 'social medication'\" (Social insectsの集団防衛)。
    *   **Original:** \"Farmers can utilize this natural defense mechanism to reduce the need for artificial pesticides\" (農業への応用可能性)。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Contrast & Time Phrase (対比と時間副詞句 - 導入)
> For centuries, plants were considered passive organisms that simply absorbed water and sunlight. **However, over the past few decades**, researchers have discovered that plants are far more sophisticated than previously believed.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Time Phrase 1 (時間副詞句1):</strong> For centuries (何世紀もの間)</li>
    <li><strong>Past Belief (過去の認識):</strong> plants were considered passive organisms (受動態で過去の認識)</li>
    <li><strong>Contrast (対比):</strong> <em>However</em> (対比の接続詞)</li>
    <li><strong>Time Phrase 2 (時間副詞句2):</strong> over the past few decades (過去数十年で)</li>
    <li><strong>New Discovery (新発見):</strong> researchers have discovered that... (現在完了で新発見)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <em>For centuries... However, over the past few decades</em> という時間の対比が、通説の覆しを明示。Passage 2頻出パターン。
</div>

---

### Sentence 2: Reason Clause & Hypothesis (理由節と仮説 - 発見)
> **Since the trees had no physical connection**, the researchers hypothesized that the attacked tree was releasing airborne chemicals **to warn its neighbors**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Reason Clause (理由節/Since節):</strong> <em>Since the trees had no physical connection</em> (因果関係の理由)</li>
    <li><strong>Main Clause (主節):</strong> the researchers hypothesized that... (研究者の仮説)</li>
    <li><strong>That-Clause (that節):</strong> <em>that the attacked tree was releasing airborne chemicals</em> (仮説の内容)
      <ul>
        <li><em>the attacked tree</em> (過去分詞の形容詞用法)</li>
        <li><em>was releasing</em> (過去進行形で動作進行中)</li>
      </ul>
    </li>
    <li><strong>Purpose Infinitive (目的の不定詞):</strong> <em>to warn its neighbors</em> (目的を示す不定詞)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  Since節で理由を示し、<em>hypothesized</em>で仮説であることを明示。設問28の正答根拠となる文。
</div>

---

### Sentence 3: Dual Purpose Structure (二重目的表現 - 具体例)
> Remarkably, **these chemicals serve two purposes**: they attract predatory mites that feed on spider mites, **and they prompt neighboring lima bean plants to begin producing their own defensive chemicals** before they are attacked.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Adverb (副詞):</strong> <em>Remarkably</em> (驚くべきことに - 文頭副詞)</li>
    <li><strong>Main Clause (主節):</strong> these chemicals serve two purposes (二重機能の導入)</li>
    <li><strong>Purpose 1 (目的1):</strong> <em>they attract predatory mites</em> (捕食者の誘引)
      <ul>
        <li><em>that feed on spider mites</em> (関係代名詞節で補足)</li>
      </ul>
    </li>
    <li><strong>Purpose 2 (目的2):</strong> <em>they prompt neighboring... plants to begin producing...</em> (隣接植物への警告)
      <ul>
        <li><em>prompt A to V</em> (Aに〜させる)</li>
      </ul>
    </li>
    <li><strong>Time Clause (時間節):</strong> <em>before they are attacked</em> (攻撃される前に)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <em>serve two purposes</em> + コロン(:)で具体的な二つの機能を列挙。設問30の正答根拠となる文で、Type C (具体例・証拠型) の典型。
</div>`
    }
  },
  "2025-1-p2": {
    past: {
      title: "The Science of Revenge",
      content: `## Title: The Science of Revenge

While revenge is a phenomenon found in cultures around the globe, this dark human instinct is still not fully understood. One famous psychological theory of the past viewed it as a way to release the buildup of rage or hatred that occurs in situations where a person feels victimized, just as releasing steam can decrease pressure in a steam engine. Psychological studies, however, have revealed that aggressive acts associated with revenge can actually leave people with increased levels of anger compared with those who do not attempt to get even.

It is generally agreed that evolution has played a part in bringing about the human tendency toward revenge. Revenge seems to be common in various animal species, and our close relatives, chimpanzees, frequently retaliate against aggression. Since they share much of our DNA, it suggests there is a biological mechanism at work. In addition, since human ancestors in ancient times faced frequent threats, such as murder and theft, an instinct for getting even would have proved beneficial in discouraging others from harming them. Research has also revealed that males, particularly those with greater upper-body strength, have a greater tendency toward revenge. This suggests that the drive to get even may be linked to evolutionary pressures since those who were more capable of enacting revenge had a better chance of survival and protecting the resources they needed to live.

However, human society may also have shaped revenge. Researchers have found that revenge tends to occur more frequently in societies where institutions for enforcing laws are less developed. Tribal peoples with no formal justice system, for example, are more likely to retaliate than people in urban settings with sophisticated law enforcement systems. Similarly, low-income neighborhoods in the United States often suffer from a lack of law enforcement, and there is a greater tendency for their residents to retaliate when they are victims of crime. While not proven, this cultural view of revenge appears useful for understanding the great degree of variation that exists in societies around the world.

A cultural approach to understanding the possible origins of revenge can also help explain its effects not just on individuals but on society as a whole. Taking revenge can come at great personal cost, including damage to human relationships, imprisonment, or even loss of life, as well as leading to a cycle of revenge. However, revenge may also send a message that affects the behavior of everyone in the society by making it clear that certain types of actions will not be tolerated. As well as making people aware of what not to do, it can indirectly lead to beneficial actions. For example, on a soccer team, if players put in little effort during practice, other players may resent them and avoid passing them the ball during the game. The potential for such retaliation can contribute to a team's overall motivation in practices. It is, therefore, possible that revenge developed because it can have a positive impact on the members of a group or society, reinforcing behaviors that contribute positively to its overall success.`,
      questions: `### Questions

**(28) What is one thing that we learn about an older psychological theory of revenge?**
1. It had a problem because it focused on the reasons that people wanted to get revenge rather than the degree of anger they felt.
2. It was created using the results of a well-known psychological study, but it reached an incorrect conclusion about them.
3. It was based on a misunderstanding about the relationship between victims and the people who cause harm to them.
4. It incorrectly suggested that revenge worked to reduce the amount of negative emotion, such as anger, that a wronged person felt.

**(29) Which of the following is mentioned as an advantage of taking revenge for early humans?**
1. It may have been a way for males to demonstrate their physical strength and their ability to protect females from danger.
2. It could have helped to keep them safe from animals because it brought out anger, making them better able to respond to attacks.
3. It would have had the effect of helping to prevent other people from trying to kill them or steal their belongings.
4. It seems to have provided a way for them to handle stress related to suffering caused by the harmful actions of other humans.

**(30) The author mentions low-income neighborhoods in the United States as an example that**
1. demonstrates that revenge seems to be more common in societies where the justice system is not working well.
2. supports the idea that the desire to get revenge has an unexpected connection with how much wealth an individual possesses.
3. shows that societies with strict punishments for criminals are likely to have much lower rates of crime than those that do not.
4. helps to explain the changes that have come about as tribal societies gradually changed into more-modern ones.

**(31) According to the fourth paragraph, what is one positive effect of revenge?**
1. It can actually strengthen personal relationships among people who feel that they have been the victims of harm from others.
2. It can cause people to follow social rules so that they are more likely to behave in a way that is acceptable to the group.
3. It can allow individuals a chance to make a situation fairer when they are being treated badly by the rest of society.
4. It can indirectly lead to increased competition that can cause many people in society to enjoy greater success.

---
**Answer Key:** (28) 4, (29) 3, (30) 1, (31) 2`
    },
    original: {
      title: "The Science of Empathy",
      content: `## Title: The Science of Empathy

While empathy is often praised as one of humanity's most admirable qualities, scientific understanding of this emotional phenomenon remains incomplete. A traditional view held that empathy was primarily an emotional response, in which people automatically feel what others feel, much like a mirror reflecting an image. Modern neuroscience, however, has revealed that empathy involves complex cognitive processes that go far beyond simple emotional contagion. Brain imaging studies have shown that understanding another person's perspective requires active mental effort and the coordination of multiple brain regions.

Evolutionary biologists have proposed several theories to explain why empathy developed in humans. Empathy appears to exist in various forms across many species, and primates such as bonobos demonstrate remarkable sensitivity to the distress of others. Since humans evolved as social creatures who depended on group cooperation for survival, an ability to understand and respond to others' emotional states would have been advantageous. Those who could accurately read the intentions and feelings of group members would have been better able to form alliances and avoid conflicts, thus increasing their chances of survival and reproduction.

Cultural factors also appear to influence how empathy is expressed and experienced. Research has found that people in collectivist societies, where group harmony is emphasized, tend to show higher levels of empathic concern than those in individualist cultures. Similarly, studies of children raised in environments with high levels of parental warmth show greater empathic responses compared to those from emotionally distant households. The influence of upbringing on empathy supports the view that while humans may have an innate capacity for empathy, its expression is shaped significantly by social experiences and cultural norms.

Understanding the science of empathy has practical implications beyond academic interest. Excessive empathy can lead to emotional burnout, particularly in professions such as healthcare, where workers are constantly exposed to others' suffering. However, appropriate levels of empathy contribute to healthier relationships and more cooperative societies. For instance, in schools where empathy training programs have been implemented, researchers have observed significant reductions in bullying and improvements in classroom collaboration. These findings suggest that empathy, like other skills, can be developed through education, offering hope for building more compassionate communities.`,
      questions: `### Original Questions

**(28) What is one thing that we learn about a traditional view of empathy?**
1. It was rejected because researchers found that empathy is not actually connected to emotional responses at all.
2. It failed to recognize that empathy requires deliberate mental activity involving multiple parts of the brain.
3. It was developed primarily by neuroscientists who wanted to understand how mirrors affect human emotions.
4. It correctly identified the difference between emotional contagion and cognitive understanding in the brain.

**(29) Which of the following is mentioned as an advantage of empathy for early humans?**
1. It helped them to develop language skills that made it easier to communicate with other group members.
2. It enabled them to predict the behavior of predators by understanding their emotional responses.
3. It would have helped them to create successful relationships and reduce harmful disagreements.
4. It allowed them to experience the same emotions as other species, which improved their ability to hunt.

**(30) The author mentions children raised in warm households as an example that**
1. shows that empathy is entirely determined by genetic factors rather than environmental influences.
2. demonstrates that cultural and social experiences play a role in shaping how empathy develops.
3. proves that collectivist societies are superior to individualist ones in producing empathic individuals.
4. explains why some children fail to develop empathy despite receiving proper education.

**(31) According to the fourth paragraph, what is one benefit of empathy training programs?**
1. They have successfully eliminated emotional burnout among healthcare professionals.
2. They have led to better cooperative behavior and fewer cases of students harming each other.
3. They have shown that empathy cannot actually be taught through formal education.
4. They have proven that excessive empathy is the main cause of problems in modern schools.

---
**Answer Key:** (28) 2, (29) 3, (30) 2, (31) 2`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** The Science of Revenge (2025-1) - Category: Psychology / Social Science

### 1. 量的構造 (Quantitative Structure)

*   **総単語数:** ~500 words (The Science of Revenge と同等)
*   **パラグラフ構成:**
    1.  **導入:** 共感の従来の見解。ミラー/反射のアナロジー→脳科学で否定。
    2.  **進化論的視点:** ボノボの共感行動。祖先の協力戦略。
    3.  **社会文化的視点:** 集団主義文化と個人主義文化。養育環境の例。
    4.  **社会的効果:** 共感のコストとメリット。学校での共感トレーニングの例。

### 2. テーマの模倣 (Thematic Imitation)

*   **Original:** 復讐 (Revenge) の心理学・進化論・社会文化的側面。
*   **New:** 共感 (Empathy) の心理学・進化論・社会文化的側面。

### 3. 語彙・表現 (Lexical Level)

*   **対比表現:** "Modern neuroscience, however, has revealed...", "while humans may have an innate capacity for empathy, its expression is shaped..."
*   **重要語彙:** empathy, emotional contagion, cognitive processes, evolutionary biologists, collectivist societies, parental warmth, emotional burnout, compassionate communities`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **The Science of Revenge (過去問)** | **The Science of Empathy (オリジナル)** | **共通点 (Commonality)** |
|----------|------------------------------|-------------------------------------|--------------------------|
| **テーマ** | 復讐の心理学・進化・社会 | 共感の心理学・進化・社会 | 心理学/社会科学トピック |
| **構造** | Intro(理論)→Evolution(進化)→Culture(文化)→Benefits(利点) | Intro(理論)→Evolution(進化)→Culture(文化)→Benefits(利点) | 4パラグラフ同一構造 |
| **設問1** | 過去理論の問題点 (Para 1) | 従来見解の不足 (Para 1) | 導入パラグラフから出題 |
| **設問2** | 進化的利点 (Para 2) | 進化的利点 (Para 2) | 進化論的視点を問う |
| **設問3** | 具体例の目的 (Para 3) | 具体例の目的 (Para 3) | 具体例の意図を問う |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **The Science of Revenge (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 復讐という人間の本能の科学的分析。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 心理学的理論(誤り) → 進化論 → 社会文化 → 社会的メリット。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 復讐の多面的理解（個人・進化・社会）。

*   **The Science of Empathy (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 共感という人間の能力の科学的分析。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 従来の見解(不足) → 進化論 → 社会文化 → 社会的メリット。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 共感の多面的理解（認知・進化・社会）。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1 (内容一致 - Para 1):**
    *   **過去問:** "It incorrectly suggested that revenge worked to reduce the amount of negative emotion" (過去理論の誤り)
    *   **Original:** "It failed to recognize that empathy requires deliberate mental activity involving multiple parts of the brain" (従来見解の不足)
*   **Q2 (内容一致 - Para 2):**
    *   **過去問:** "It would have had the effect of helping to prevent other people from trying to kill them or steal their belongings" (進化的利点)
    *   **Original:** "It would have helped them to create successful relationships and reduce harmful disagreements" (進化的利点)
*   **Q3 (内容一致 - Para 3):**
    *   **過去問:** "demonstrates that revenge seems to be more common in societies where the justice system is not working well" (具体例の目的)
    *   **Original:** "demonstrates that cultural and social experiences play a role in shaping how empathy develops" (具体例の目的)
*   **Q4 (内容一致 - Para 4):**
    *   **過去問:** "The potential for such retaliation can contribute to a team's overall motivation in practices" (具体例の含意)
    *   **Original:** "They have led to better cooperative behavior and fewer cases of students harming each other" (具体例の効果)`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Contrast & However (対比と逆接 - 導入)
> A traditional view held that empathy was primarily an emotional response, in which people automatically feel what others feel, much like a mirror reflecting an image. Modern neuroscience, **however**, has revealed that **empathy involves complex cognitive processes** that go far beyond simple emotional contagion.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Previous View (従来の見解):</strong> held that empathy was primarily an emotional response (感情的反応として捉えていた)</li>
    <li><strong>Analogy (アナロジー):</strong> <em>much like a mirror reflecting an image</em> (鏡が像を反射するように)</li>
    <li><strong>Contrast (対比):</strong> <em>however</em> (文中挿入の逆接)</li>
    <li><strong>New Finding (新発見):</strong> <em>has revealed that empathy involves complex cognitive processes</em> (共感は複雑な認知プロセスを含む)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <em>however</em>が文中に挿入され、従来の見解を否定。設問28の正答根拠となる文。
</div>

---

### Sentence 2: Hypothetical Past (仮定法過去完了 - 進化)
> Those who could accurately read the intentions and feelings of group members **would have been better able to** form alliances and avoid conflicts, thus increasing their chances of survival and reproduction.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject (主語):</strong> Those who could accurately read the intentions and feelings (意図や感情を正確に読み取れた者)</li>
    <li><strong>Hypothetical Modal (仮定法):</strong> <em>would have been better able to</em> (〜することがより可能だっただろう)</li>
    <li><strong>Result (結果):</strong> <em>form alliances and avoid conflicts</em> (同盟を結び、衝突を避ける)</li>
    <li><strong>Participle Phrase (分詞構文):</strong> <em>thus increasing their chances</em> (それによって可能性を高めた)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <em>would have + 過去分詞</em>で過去の仮説的状況を表す。設問29の正答根拠となる文。
</div>

---

### Sentence 3: Concession & While (譲歩と対比 - 文化)
> The influence of upbringing on empathy supports the view that **while** humans may have an innate capacity for empathy, **its expression is shaped significantly by social experiences and cultural norms**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause (主節):</strong> The influence of upbringing on empathy supports the view that... (養育の影響は〜という見解を支持する)</li>
    <li><strong>Concession (譲歩):</strong> <em>while humans may have an innate capacity</em> (人間に生まれながらの能力があるかもしれないが)</li>
    <li><strong>Contrast (対比):</strong> <em>its expression is shaped significantly by</em> (その表現は〜によって大きく形作られる)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <em>while</em>で譲歩を示し、「生まれと育ち」の両面を認めつつ、環境の影響を強調。設問30の正答根拠となる文。
</div>`
    }
  },
  "2024-3-p2": {
    past: {
      title: "Bretton Woods",
      content: `## Title: Bretton Woods

In 1944, at Bretton Woods in the US state of New Hampshire, a conference of Allied countries was convened to create a stable international monetary and financial order. The period since World War I had been one of turmoil that witnessed protectionist trade policies, hyperinflation, the Great Depression, and, ultimately, World War II. Such events weighed on delegates' shoulders but also underpinned their belief that reform was urgent. Although World War II continued to rage, the pendulum was swinging strongly in the Allies' favor. Nevertheless, delegates had concerns. As one US delegate put it, "We fight together on sodden battlefields. . . . The test of this conference is whether we can walk together, solve our economic problems, down the road to peace as we today march to victory."

The conference delegates included Harry Dexter White of the US Treasury and John Maynard Keynes, a well-known British economist. The United States had become the world's most powerful economy, overtaking the colonial European powers, and the agreement that emerged reinforced its dominant position. The Bretton Woods system hinged on an arrangement that directly linked the value of the US dollar to gold. At the time, the US Federal Reserve possessed the world's largest reserves of gold, so as White pointed out, it seemed unlikely the United States would run out. The knowledge that the US dollar was backed by gold helped establish it as the world's primary reserve currency, and the other signees agreed to tie the value of their currencies to the US dollar.

Initially, the dollar's stability brought some success. However, cracks began to appear. The leading European powers, for example, whose productive capabilities had been severely damaged in the war, were heavily dependent on US imports. These had to be paid for in US dollars, but some countries had insufficient dollar funds to do this. As George C. Marshall, the US secretary of state, said at the time, Europe's requirements for food imports and essential products "are so much greater than her present ability to pay that she must have substantial additional help or face economic, social, and political deterioration of a very grave character." Concerns were raised that Europe might return to protectionist trade policies, which might negatively affect the free-trade-supporting United States. To address these and other concerns, the Marshall Plan was approved to provide billions of dollars in aid.

Despite such efforts, further economic challenges occurred. Germany and France effectively left the Bretton Woods system, inflation increased in many countries, and the United States saw increased domestic and military spending. Such factors affected the valuation of, and confidence in, the dollar. In 1971, the United States suspended the dollar's convertibility to gold, effectively ending the Bretton Woods system. Nevertheless, its legacy lives on in the shape of the International Monetary Fund (IMF) and the World Bank, which emerged out of the system. The IMF's role as an organization that monitors and supports global monetary cooperation and the World Bank's loans and grants to governments in need form a core element of the modern financial order.`,
      questions: `### Questions

**(28) What was the concern of the US delegate mentioned in the first paragraph?**
1. It was important for delegates to admit that some fundamental problems with the interwar financial order would never be solved.
2. European nations did not understand the need for reform, as they had not been affected by the Great Depression as much as the United States had.
3. Holding the conference in 1944 might have been a mistake, as it was not clear that the Allies would win World War II.
4. Although the Allies were working together to win the war, there were doubts about whether such cooperation would continue in economic fields.

** (29) What was one reason put forth by Harry Dexter White to justify the structure of the Bretton Woods agreement?**
  1. The United States was the only nation in a position to ensure that its currency would be stable enough to be used as a reserve currency.
2. It was important to allow Great Britain to feel it was still equal in terms of political power to the United States despite the dominance of the US dollar.
3. Both he and John Maynard Keynes felt European powers needed to hold onto their colonies to help them boost their productive capabilities.
4. Other countries would be able to use their large reserves of gold to support the value of their own currencies in the international financial system.

** (30) According to the author of the passage, after problems with the Bretton Woods system began to appear,**
  1. the European powers decided to try to raise capital by forcing other countries to pay for European food products in US dollars.
2. the British and American delegations did their best to ensure that George C.Marshall's comments about European decline were not made public.
3. the United States proposed protectionist trade policies as it had become clear that European countries were taking advantage of its leniency.
4. the United States took action to assist European countries partly because doing so would also benefit the United States.

** (31) What can be concluded about the Bretton Woods system ?**
  1. The system may have been more successful if the IMF had insisted that the US dollar remained tied to gold.
2. Although the system itself ended in failure, some economic organizations that play an important role today owe their existence to it.
3. The United States should have ended the system earlier to prevent a loss of confidence in the US dollar as a global currency.
4. Although both the IMF and the World Bank are influential today, their actions were considered the main reason for the system's downfall.

---
** Answer Key:** (28) 4, (29) 1, (30) 4, (31) 2`
    },
    original: {
      title: "The United Nations",
      content: `## Title: The United Nations

In 1945, representatives from 50 nations met in San Francisco to establish the United Nations(UN), an organization dedicated to maintaining international peace and security.This gathering took place against the backdrop of the devastation caused by World War II and the failure of the earlier League of Nations to prevent such a wide - scale conflict.Leaders were determined to create a more effective body that could resolve disputes through diplomacy rather than war.The charter they signed expressed a collective desire to "save succeeding generations from the scourge of war," reflecting the urgent hope for a more stable global order.

The structure of the UN was designed to reflect the realities of the post - war world.The Security Council, the body responsible for maintaining peace, granted permanent membership and veto power to five major Allied powers: the United States, the United Kingdom, the Soviet Union, China, and France.This arrangement acknowledged that the active participation of these powerful nations was essential for the organization's success. However, it also meant that any one of these "Big Five" could block action, a feature that critics argued would limit the UN's ability to act decisively in conflicts involving major powers.

Tensions soon arose between the Western powers and the Soviet Union, leading to the Cold War.This geopolitical rivalry frequently paralyzed the Security Council, as the opposing sides used their veto power to block resolutions.To overcome this deadlock, the UN developed new tools, such as peacekeeping operations, which deployed impartial troops to monitor ceasefires and stabilize conflict zones.While not originally provided for in the UN Charter, these operations became a vital way for the organization to manage conflicts without direct military intervention by the superpowers.

Despite its limitations in preventing all conflicts, the UN has evolved into an indispensable global institution.Its specialized agencies, such as the World Health Organization(WHO) and UNICEF, play a crucial role in addressing global challenges like disease, poverty, and hunger.While debates continue about the need to reform the Security Council to better reflect the modern world, the UN remains the only truly universal forum for international cooperation.Its enduring presence suggests that, even with its flaws, the world is safer with a venue for dialogue than without one.`,
      questions: `### Original Questions

  ** (28) What was the primary motivation for establishing the United Nations ?**
    1. To punish the nations responsible for starting World War II.
2. To create a system that would allow the Allied powers to control global trade.
3. To prevent future conflicts by correcting the failures of the League of Nations.
4. To ensure that the United States would remain the dominant global power.

** (29) Why was the veto power granted to the five permanent members of the Security Council ?**
  1. To ensure that the most powerful nations would remain committed to the organization.
2. To prevent smaller nations from having any influence on global decisions.
3. To allow the Soviet Union to have more power than the United States.
4. To encourage all member nations to develop their own military capabilities.

** (30) How did the United Nations adapt to the challenges of the Cold War ?**
  1. By expelling the Soviet Union from the Security Council to prevent vetoes.
2. By developing peacekeeping operations to manage conflicts without direct superpower involvement.
3. By rewriting its Charter to remove the veto power from permanent members.
4. By focusing exclusively on economic issues rather than political conflicts.

** (31) What does the author suggest about the United Nations today ?**
  1. It has failed completely because it cannot prevent all wars.
2. It should be disbanded because the Security Council is outdated.
3. Its specialized agencies are more important than its political role.
4. Despite its imperfections, it plays a vital role in global cooperation and stability.

---
** Answer Key:** (28) 3, (29) 1, (30) 2, (31) 4`
    },
    analysis: {
      intent: `### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~410 words (Bretton Woods と同等)
*   **パラグラフ構成:**
    1.  **導入:** 国連設立の背景。WWIIの荒廃と国際連盟の失敗。
    2.  **構造:** 安保理の拒否権。大国の離脱を防ぐための現実的妥協。
    3.  **課題と適応:** 冷戦による機能不全。PKO（平和維持活動）という新ツールの発明。
    4.  **評価:** 改革の議論と専門機関の貢献。不完全だが不可欠なフォーラム。

### 2. テーマの模倣 (Thematic Imitation)
*   **Original:** Bretton Woods (国際経済秩序の構築と変容)。
*   **New:** The United Nations (国際政治/平和秩序の構築と変容)。
*   **Structure:** 設立の理想と現実的妥協 → 直面した危機（ニクソンショック/冷戦） → 現代的意義の再評価。

### 3. 語彙・表現 (Lexical Level)
*   **対比表現:** "Unlike the League of Nations...", "While debates continue..."
*   **重要語彙:** devastation, paralyzed, impartial, humanitarian, indispensable, specialized agencies, veto power`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **Bretton Woods (過去問)** | **The United Nations (オリジナル)** | **共通点 (Commonality)** |
|:---|:---|:---|:---|
| **テーマ** | 国際金融秩序 (経済) | 国際平和秩序 (政治) | 戦後秩序の構築と適応 |
| **構造** | Intro(会議)→Data(変容)→Legacy(継続) | Intro(設立)→Crisis(対立)→Legacy(機能) | 歴史的経緯と現代的評価 |
| **設問1** | 背景・参加者の懸念 (Para 1) | 背景・設立の動機 (Para 1) | 組織設立の理由 |
| **設問2** | 通貨ペッグの仕組み (Para 2) | 拒否権の導入理由 (Para 2) | システム設計の意図 |
| **設問3** | 支援策(マーシャルプラン) (Para 3) | 解決策(PKO) (Para 3) | 課題への現実的対処 |
| **設問4** | 体制の遺産・継続性 (Para 4) | 組織の遺産・不可欠性 (Para 4) | 現代における意義 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Bretton Woods (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 世界恐慌を防ぐための国際経済協力。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 会議開催 → ドル本位制の確立 → 変動相場制への移行 → IMF/世銀の役割。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 経済システムの柔軟性と持続性。

*   **The United Nations (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 世界大戦を防ぐための国際政治協力。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 設立と拒否権 → 冷戦による麻痺 → PKOによる機能回復 → 現代的課題。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 政治的対立の中での組織の生存と適応。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1 (内容一致 - Para 1):**
    *   **過去問:** (要約) 参加者は通貨安競争が戦争の一因だと信じていた。
    *   **Original:** "The failure of the earlier League of Nations to prevent such a wide-scale conflict" (連盟の失敗を繰り返さない意図)
*   **Q2 (内容一致 - Para 2):**
    *   **過去問:** (要約) 全通貨をドルに固定し、ドルを金に固定する仕組み。
    *   **Original:** "The inclusion of the veto power... ensured that the great powers remained in the organization" (大国の離脱を防ぐための拒否権)
*   **Q3 (内容一致 - Para 3):**
    *   **過去問:** (要約) マーシャルプランが欧州経済の再建を助けた。
    *   **Original:** "The UN developed new tools, such as peacekeeping operations" (安保理機能不全への対応)
*   **Q4 (内容一致 - Para 4):**
    *   **過去問:** (要約) ブレトンウッズ体制が終わっても、IMFと世銀は重要な役割を果たしている。
    *   **Original:** "The UN remains the only truly universal forum for international cooperation" (現代における不可欠なフォーラム)`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Background & Purpose (背景と目的 - 導入)
> This gathering took place **against the backdrop of** the devastation caused by World War II and the **failure of the earlier League of Nations to prevent such a wide-scale conflict**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause (主節):</strong> This gathering took place (この会議は行われた)</li>
    <li><strong>Context (背景):</strong> <em>against the backdrop of...</em> (〜を背景として)
      <ul>
        <li>the devastation caused by World War II (WWIIによる荒廃)</li>
        <li>the failure of the earlier League of Nations (以前の国際連盟の失敗)</li>
      </ul>
    </li>
    <li><strong>Infinitive (不定詞):</strong> <em>to prevent such a wide-scale conflict</em> (failureにかかる形容詞的用法：防げなかった失敗)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <em>against the backdrop of</em> は歴史的背景を説明する重要表現。設問28の正答根拠（以前の失敗を正す）に関連。
</div>

---

### Sentence 2: Cause & Result (因果関係 - 適応)
> **Since** the Security Council was frequently paralyzed by the Cold War rivalry, the UN developed new tools, **such as** peacekeeping operations, **which** deployed impartial troops to monitor ceasefires.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Reason Clause (理由節):</strong> <em>Since the Security Council was frequently paralyzed...</em> (安保理が頻繁に機能不全に陥ったため)</li>
    <li><strong>Main Clause (主節):</strong> the UN developed new tools (国連は新しいツールを開発した)</li>
    <li><strong>Example (具体例):</strong> such as peacekeeping operations (PKOのような)</li>
    <li><strong>Relative Clause (関係代名詞):</strong> <em>which deployed impartial troops...</em> (それは中立的な軍隊を配備した)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <em>Since</em>による理由説明と、関係代名詞非制限用法による補足説明。設問30の正答根拠。
</div>

---

### Sentence 3: Concession & Evaluation (譲歩と評価 - 結論)
> **While** debates continue about the need to reform the Security Council, the UN remains **the only truly universal forum** for international cooperation.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Concession (譲歩):</strong> <em>While debates continue about...</em> (議論は続いているが)</li>
    <li><strong>Main Clause (主節):</strong> the UN remains the only truly universal forum... (国連は唯一の真に普遍的なフォーラムであり続けている)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <em>While</em>を用いた譲歩構文。問題点（改革の必要性）を認めつつ、その価値（普遍的な場）を強調。設問31の正答根拠。
</div>`
    }
  },
  "2024-2-p2": {
    past: {
      title: "Age and Innovation",
      content: `## Title: Age and Innovation

One benchmark that is used to measure technological progress is Moore's law. This law, which was originally published by US engineer and businessman Gordon Moore in 1965, states that the number of transistors on a microchip will double every two years. Moore originally intended this as a prediction regarding computer technology, but it became the driving force behind the rapid progress in computer technology that has occurred since then. The law implied that computers would continue to become smaller and more powerful, and tech companies started to plan their product development around this principle. Most experts now consider that Moore's law was responsible for innovations such as home computers and smartphones that have become essential parts of modern life.

Moore's law has largely held true, but only because the amount of manpower and time used to make it possible have also greatly increased. As a paper by researchers from two universities in the United States concludes, "The constant exponential growth implied by Moore's law has been achieved only by a staggering increase in the amount of resources devoted to pushing the frontier forward." In fact, the number of researchers required to maintain the same level of innovation today is around seventy-five times more than it was in the early 1970s. Similarly, there is a general trend in many areas of society for significant progress to take longer. Political and business leaders are getting older, the average age of Nobel Prize winners is rising, and groundbreaking scientific discoveries are being made less frequently.

One theory put forward to explain this tendency is the "burden of knowledge." This states that as more innovations are made, the amount of knowledge required to make new ones grows. Innovations occur as a result of using past knowledge to find solutions to problems, so each generation has to learn an increasing amount of previously accrued knowledge before it can begin to innovate for itself. The only way to do this is to study more, which inevitably takes longer. Some studies in Germany showed that the average age of researchers in the field of mathematics when they published their first journal articles rose by five years between 1950 and 2013. The number of references to other research that were cited in the articles also increased by five times over the same period.

A further obstacle to scientific and technological innovation often cited by economists is the fact that populations are aging. It is believed by some that an aging workforce holds back new discoveries because older workers are less able to learn new skills and less willing to adopt new knowledge. However, some experts believe the opposite to be true. Better diets, advances in medicine, and improved health care mean that people today not only live longer but also stay physically and mentally active until a later age. In addition, because of their experience, older workers are more efficient—and therefore more productive—than their younger colleagues and play valuable roles in passing on knowledge. These factors help to promote innovation and counterbalance the effects of the burden of knowledge.`,
      questions: `### Questions

**(28) What is one thing the author of the passage says about Moore's law?**
1. It overestimated the impact that advances in computer technology would have on our lives.
2. It is unlikely to be accurate in the future because of the increasingly rapid rate at which companies release new products.
3. It not only predicted technological progress but also stimulated the development of new technology.
4. It was an effective way to predict advances in technology despite the fact that it was intended for a different purpose.

**(29) A paper by researchers in the United States concluded that**
1. there is evidence to show that Moore's law can also be a useful tool in the field of politics.
2. the amount of effort that is necessary for Moore's law to remain true has increased greatly over time.
3. while the age of leaders in the worlds of business and politics is increasing, this is not the case for Nobel Prize winners.
4. universities in the United States are unlikely to make major new discoveries because they have limited resources.

**(30) What is suggested by the theory mentioned in the third paragraph?**
1. Breakthroughs in science and technology are becoming more difficult to achieve because of a continually growing pool of knowledge.
2. Although researchers today are very knowledgeable, they are less skilled at applying their knowledge to practical situations.
3. The quality of journal articles in mathematics has improved despite the fact that the field attracts fewer researchers than it used to.
4. New innovations improve society in certain ways, but their overall effect may not be positive in the long term.

**(31) According to the final paragraph, what do some experts believe?**
1. Mistaken ideas about the effects of an aging workforce lead to companies losing some of their most valuable workers.
2. A lack of government spending on health care will cause a rise in the number of older people who are unable to work due to poor health.
3. Because younger workers have to make up for the low productivity of their older colleagues, the chance of innovations occurring is reduced.
4. Rather than slowing down innovation, an aging workforce may make it more likely to happen.

**Answer Key:** 3, 2, 1, 4`
    },
    original: {
      title: "The Cost of Medical Progress",
      content: `## Title: The Cost of Medical Progress

One benchmark often cited in the technology industry is Moore's law, which predicts rapid exponential growth in computing power. However, in the pharmaceutical industry, a reverse trend known as "Eroom's law" has been observed. This term, which is "Moore's" spelled backward, was coined to describe the phenomenon that the cost of developing a new drug roughly doubles every nine years, despite improvements in technology. While computers have become faster and cheaper, bringing a new medicine to market has become slower and more expensive. This trend poses a significant threat to global health, as it suggests that pharmaceutical companies may eventually find it financially impossible to develop new treatments for diseases.

Various explanations have been proposed for this decline in research and development efficiency. One major factor is the "better than the Beatles" problem. Just as it is difficult for new pop bands to be more successful than the Beatles, it is hard for new drugs to be better than existing ones. Many effective medicines for common conditions have already been discovered, so researchers must now target more complex and rare diseases. Additionally, regulatory standards have become stricter over time. Government agencies now require more extensive and costly clinical trials to ensure safety and efficacy before a drug can be approved, further driving up costs.

The "burden of knowledge" theory also applies to medical research. As the body of scientific understanding grows, it becomes increasingly difficult for individual researchers to master their fields. Consequently, drug development now requires larger teams of highly specialized scientists. A study analyzing research papers found that team sizes have increased significantly over the past few decades. While collaboration is necessary, it also introduces bureaucratic challenges and communication costs. The time and effort required to coordinate these large, diverse teams can slow down the innovation process, making it harder to achieve breakthroughs compared to the past when smaller groups could make significant discoveries.

Despite these challenges, there is optimism that new technologies could reverse Eroom's law. Artificial intelligence (AI) and machine learning are beginning to play a crucial role in drug discovery. These tools can analyze vast amounts of biological data much faster than humans, potentially identifying promising drug candidates more efficiently. Furthermore, some experts believe that a shift toward personalized medicine, which tailors treatments to individual genetic profiles, could improve success rates in clinical trials. If these technological advances can reduce the time and cost of development, the pharmaceutical industry may finally be able to break the cycle of diminishing returns and continue to improve human health.`,
      questions: `### Questions

**(28) What is one thing the author says about Eroom's law?**
1. It suggests that the cost of computers is increasing at the same rate as the cost of developing drugs.
2. It was named after a famous researcher who predicted the decline of the pharmaceutical industry.
3. It indicates that the efficiency of drug development is decreasing despite technological advancements.
4. It predicts that pharmaceutical companies will soon stop producing new medicines altogether.

**(29) According to the "better than the Beatles" problem mentioned in the second paragraph, why is drug development becoming harder?**
1. Government regulations are making it difficult for new drugs to compete with established ones.
2. Researchers are focusing too much on rare diseases instead of improving treatments for common conditions.
3. High standards set by successful past drugs make it difficult to create new ones that are superior.
4. The pharmaceutical industry is struggling to find researchers who are as talented as those in the past.

**(30) What is a consequence of the "burden of knowledge" in medical research?**
1. Researchers are spending more time studying and less time conducting experiments.
2. Team sizes have grown, leading to increased coordination efforts and slower innovation.
3. Scientific papers are becoming less reliable because they are written by too many authors.
4. Individual researchers are becoming less specialized in order to understand the broader field.

**(31) How might new technologies affect the future of drug development?**
1. AI will replace human researchers entirely, eliminating the need for large teams.
2. Personalized medicine will make clinical trials more expensive but more effective.
3. They could help reduce costs and improve efficiency, potentially reversing the current negative trend.
4. Machine learning will focus on analyzing financial data to help companies manage their budgets better.

**Answer Key:** 3, 3, 2, 3`
    },
    analysis: {
      intent: `### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~430 words (Age and Innovation と同等)
*   **パラグラフ構成:**
    1.  **導入 (Introduction):** ムーアの法則の逆、Eroom's Law（創薬コストの増大）の紹介。
    2.  **原因分析 (Cause Analysis):** "Better than the Beatles" 問題。既存薬が優秀で超えるのが困難。
    3.  **理論的背景 (Theory):** "Burden of Knowledge"（知識の負担）。チームの大規模化と効率低下。
    4.  **展望 (Outlook):** AIや個別化医療による打開策の可能性。

### 2. テーマの模倣 (Thematic Imitation)
*   **Original:** Age and Innovation (技術進歩の停滞と高齢化/知識の負担)。
*   **New:** The Cost of Medical Progress (医薬品開発の停滞とEroom's Law/知識の負担)。
*   **Key Concept:** 両者とも「技術は進歩しているのに、成果を出すのが難しくなっている」というパラドックスを扱う。

### 3. 語彙・表現 (Lexical Level)
*   **対比・逆説:** reverse trend, despite improvements, diminishing returns.
*   **専門用語:** exponential growth, clinical trials, regulatory standards, personalized medicine.`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **Age and Innovation (過去問)** | **The Cost of Medical Progress (オリジナル)** | **共通点 (Commonality)** |
|:---|:---|:---|:---|
| **テーマ** | 技術革新と社会 (IT/科学) | 医療の進歩とコスト (医療/経済) | イノベーションの停滞 |
| **構造** | Intro(法則)→Issue(停滞)→Theory(負担)→Outlook | Intro(法則)→Cause(障壁)→Theory(負担)→Solution | 法則提示→原因分析→理論→展望 |
| **設問1** | 法則の定義・説明 (Para 1) | 法則の定義・説明 (Para 1) | 特定の法則・用語の理解 |
| **設問2** | 停滞の証拠・理由 (Para 2) | 開発難航の理由(比喩) (Para 2) | 現象の原因特定 |
| **設問3** | 理論(知識の負担)の意味 (Para 3) | 理論(知識の負担)の影響 (Para 3) | 同一理論の文脈適用 |
| **設問4** | 専門家の見解・将来 (Para 4) | 新技術による解決策 (Para 4) | 将来の展望・解決策 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Age and Innovation (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> ムーアの法則と、イノベーション維持の難しさ。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> ムーアの法則(成功) → 維持コストの増大と高齢化(課題) → 知識の負担(理論) → 高齢研究者の価値(反論/展望)。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 人的資源（研究者）の限界と可能性。

*   **The Cost of Medical Progress (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Eroom's lawと、創薬効率の低下。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> Eroom's law(課題) → Beatles問題と規制(原因) → 知識の負担と組織肥大化(理論) → AIによる解決(展望)。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 経済的コストと効率性の問題。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1 (内容一致 - Para 1):**
    *   **過去問:** (要約) ムーアの法則は技術進歩を予測しただけでなく、開発を刺激した。
    *   **Original:** "It indicates that the efficiency of drug development is decreasing despite technological advancements" (法則の意味)
*   **Q2 (内容一致 - Para 2):**
    *   **過去問:** (要約) ムーアの法則を維持するための努力量は劇的に増えている。
    *   **Original:** "High standards set by successful past drugs make it difficult to create new ones that are superior" (Beatles問題)
*   **Q3 (内容一致 - Para 3):**
    *   **過去問:** (要約) 知識の蓄積が増えることで、新発見が難しくなっている。
    *   **Original:** "Team sizes have grown, leading to increased coordination efforts and slower innovation" (知識の負担の結果)
*   **Q4 (内容一致 - Para 4):**
    *   **過去問:** (要約) 高齢労働者はイノベーションを遅らせるのではなく、促進するかもしれない。
    *   **Original:** "They could help reduce costs and improve efficiency, potentially reversing the current negative trend" (新技術への期待)`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Contrast & While (対比 - 導入)
> **While** computers have become faster and cheaper, bringing a new medicine to market has become slower and more expensive.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subordinate Clause (従属節):</strong> <em>While computers have become faster and cheaper...</em> (コンピュータがより速く、より安くなる一方で)</li>
    <li><strong>Main Clause (主節):</strong> bringing a new medicine to market [Subject] (新薬を市場に出すことは)</li>
    <li><strong>Verb (動詞):</strong> has become ... slower and more expensive (より遅く、より高価になっている)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>While (対比):</strong> 文頭のWhileは「～だが」「～の一方で」という対比を表す重要シグナル。テクノロジー自体の進歩（安・速）と、その応用である創薬（高・遅）の逆説的関係を強調。
</div>

---

### Sentence 2: Analogy (類推 - 原因)
> **Just as** it is difficult for new pop bands to be more successful than the Beatles, it is hard for new drugs to be better than existing ones.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subordinate Clause (従属節):</strong> <em>Just as it is difficult for...</em> (新しいバンドがビートルズより成功するのが難しいのと同様に)</li>
    <li><strong>Main Clause (主節):</strong> it is hard for new drugs to be better... (新薬が既存薬より優れていることは難しい)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Just as A, (so) B:</strong> Aであるのと同様にBである。身近な例（ビートルズ）を使って、専門的な問題（創薬の難易度）をわかりやすく説明するレトリック。
</div>

---

### Sentence 3: Condition & Result (条件と結果 - 展望)
> **If** these technological advances can reduce the time and cost of development, the pharmaceutical industry **may finally be able to** break the cycle of diminishing returns and continue to improve human health.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Condition (条件節):</strong> <em>If these technological advances can reduce...</em> (もしこれらの技術進歩が開発の時間とコストを削減できれば)</li>
    <li><strong>Main Clause (主節):</strong> the pharmaceutical industry may finally be able to break... (製薬業界はついに収穫逓減のサイクルを打破できるかもしれない)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Conclusion (結論・展望):</strong> 文章の締めくくりとして、条件節を用いた未来の展望（ポジティブな可能性）を提示している。
</div>`
    }
  },
  "2024-1-p2": {
    past: {
      title: "Feminist Architecture",
      content: `## Title: Feminist Architecture

When looking at a building, not everyone considers the gender of the architect who designed it.However, in the 1980s, a group of British women architects, frustrated with the ways that the male - dominated architectural field had often failed to take women's needs into account, wrote a book describing the goals of their "feminist architecture." The group called itself Matrix, and its members designed a variety of community spaces to demonstrate its principles. While the group officially dissolved in the mid-1990s, it left behind architectural designs and an intellectual legacy that continue to shape modern approaches to architecture.

The most common architectural design philosophy that Matrix sought to change was concerned with men's comfort. Postwar construction in Britain was dominated by an architectural system called *Le Modulor*, first created in 1940s France. Following this system's principles, architectural design elements were arranged based on the default height of the so - called ideal man: just under two meters.While many of these elements, like tall doorways, did not negatively impact average British women—who were slightly more than one and a half meters tall on average in the 1940s—other elements, such as the tall height of stair steps, made buildings harder for them to navigate.

When Matrix was formed in the 1980s, it did not attempt to redesign the world according to the needs of the average woman.In fact, one of Matrix's key arguments denounced architects' focus on the "average" person.The members of Matrix reasoned that architects could produce their greatest work by trying to understand the specific needs of a building's actual users, which meant involving such people in the design process to identify necessary features and integrate them into the final design. They also argued that simply training more women architects would not remedy the situation. Instead, they proposed changing the methods and design principles by which architecture was being taught.

One example of Matrix putting these values into practice when helping design public spaces in Britain is the Jagonari Women's Educational Resource Centre, which provides social services for women. Matrix worked closely with the organization's administrators to fulfill their needs and address their concerns, including installing narrow, tall windows protected by bars to help visitors feel safer.In other cases, Matrix employed methods like miniature models of proposed designs that allowed even people with little knowledge of architecture to rearrange the model rooms freely and feel included in the design process.

Matrix was dedicated to helping other women enter the architecture and design industry, many of whom carried forward Matrix's principles in their own work. Although the group initially fought to address women's discontent with the biases in architecture, it came to symbolize much more.Matrix's members worked with traditionally overlooked minority groups, empowering them to have their voices reflected in the public spaces they inhabited. Even after they stopped working together, many of the women of Matrix continued to do commendable work in academic and activist spaces, where they have carried on pushing for change in how architecture is practiced, ensuring that the influence of Matrix persists to this day.`,
      questions: `### Questions

**(28) What led to the formation of Matrix?**
1. The large number of new groups being established made it difficult for individual architects to be successful by themselves.
2. Some architects felt that people who used the buildings they designed often did not care about the person who designed them.
3. The way in which a majority of buildings were designed at the time only considered the needs of a single group of people.
4. Many women who worked as architects believed that feminist architecture needed to have a stronger identity.

**(29) What do we learn about *Le Modulor*?**
1. The fact that it was created in France meant that architects had trouble adjusting it to fit the cultural needs of people in other countries.
2. Architects who implemented the system's design elements were often criticized for not following the default size for men.
3. A rapid change in the average height of men and women in postwar Britain meant that buildings designed under the system quickly became difficult to use.
4. Many of the spaces in buildings designed based on its principles were beneficial in some ways but problematic in other ways.

**(30) Matrix argued against a focus on the "average" person because**
1. most buildings were used by such a diverse range of people that it would be impossible to design something that suited everyone.
2. doing so would likely lead architects to overlook the requirements of the actual people a building is primarily used by.
3. the majority of people did not have sufficient knowledge to appreciate the methods and design principles that architects focused on.
4. attempting to involve as many people as possible in the design process often led to a confusing and unpopular final product.

**(31) Which of the following statements best describes Matrix's impact?**
1. Many of the architectural techniques pioneered by Matrix eventually came to dominate the design processes taught in architecture schools today.
2. Although the methods Matrix used to include ordinary people in the design process of buildings were too simple to be effective, they helped people feel included.
3. People who were previously ignored became more confident to give their opinions regarding the design of spaces around them.
4. Even though the group's members no longer do architecture-related work, designers of public areas continue to take inspiration from their principles.

**Answer Key:** 3, 4, 2, 3`
    },
    original: {
      title: "Designing for Neurodiversity",
      content: `## Title: Designing for Neurodiversity

When walking into a modern office, most people do not question the open-plan layout that has become standard in corporate environments. However, in recent years, a movement known as "neurodiverse design" has emerged, challenging the assumption that workspace environments typically cater to the needs of the majority. Proponents of this movement argue that traditional offices, with their noise and lack of privacy, often fail to accommodate employees with neurological differences such as autism, ADHD, and dyslexia. While relatively new, this design philosophy is already influencing how architects and companies approach the creation of workspaces.

The most common office design trend that neurodiverse design seeks to change is the open-plan office. Originally promoted as a way to encourage collaboration and transparency, this layout is based on the sensory tolerance of the "neurotypical" or average person. For the majority of workers, the background hum of conversation and bright fluorescent lighting may be manageable annoyances. However, for individuals who are hypersensitive to sensory stimuli—a common trait among neurodivergent people—these elements can be overwhelming, leading to severe anxiety and reduced productivity.

Unlike traditional approaches that aim to create a uniform environment for the average employee, neurodiverse design rejects the idea of a "standard" user. Advocates reason that architects can create better workspaces by recognizing that human brains process information differently. They argue that simply forcing neurodivergent employees to adapt to existing structures is ineffective. Instead, they propose a fundamental shift in design thinking: creating flexible environments that offer a variety of sensory experiences, allowing users to choose the setting that best suits their current needs and working style.

One example of putting these values into practice is the inclusion of "quiet zones" and "focus rooms" in new office builds. Architects work closely with neurodivergent employees during the planning phase to identify specific triggers, such as flickering lights or patterned carpets that can cause visual stress. In response, they might install sound-absorbing materials, adjustable lighting systems, and private pods. In some cases, companies have used virtual reality simulations to allow staff to test and provide feedback on proposed layouts before construction begins, ensuring their unique perspectives are integrated into the final design.

The impact of neurodiverse design extends beyond just helping a specific group of employees; it is improving the work environment for everyone. Although the movement began as a way to address the specific difficulties faced by neurodivergent individuals, its principles have proven universally beneficial. By prioritizing flexibility, comfort, and individual choice, this approach empowers all workers to control their environment. As a result, companies are discovering that spaces designed with neurodiversity in mind often lead to higher overall satisfaction and productivity across the entire workforce.`,
      questions: `### Questions

**(28) What led to the emergence of the neurodiverse design movement?**
1. A decrease in the number of companies willing to adopt open-plan office layouts due to high costs.
2. The realization that standard office environments were often unsuitable for employees with neurological differences.
3. A desire among architects to return to more traditional, private office designs from the past.
4. The discovery that neurotypical employees were also dissatisfied with the noise levels in open offices.

**(29) What is one problem with the open-plan office design mentioned in the second paragraph?**
1. It discourages collaboration among employees because it creates too many distractions.
2. It relies on natural lighting, which is often insufficient for detailed work during the winter months.
3. It is based on the sensory needs of the average person and ignores those who are sensitive to stimuli.
4. It is often too expensive for smaller companies to implement effectively compared to traditional layouts.

**(30) Advocates of neurodiverse design argue against focusing on the "standard" user because**
1. it is impossible to define what a standard user is in today's diverse workforce.
2. doing so fails to acknowledge the fact that people process sensory information in different ways.
3. most employees prefer to have a fixed desk rather than moving between different work zones.
4. architects usually do not have enough data to determine what the average preferences are.

**(31) Which of the following statements best describes the impact of neurodiverse design?**
1. It has forced companies to spend significantly more money on construction without seeing clear benefits.
2. It has led to a separation of neurodivergent and neurotypical employees into different buildings.
3. It has resulted in better work environments that benefit the entire workforce, not just neurodivergent people.
4. It has caused architects to stop using virtual reality technology because it does not accurately reflect real-world sensory experiences.

**Answer Key:** 2, 3, 2, 3`
    },
    analysis: {
      intent: `### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~430 words (Feminist Architecture と同等).
*   **パラグラフ構成:**
    1.  **導入 (Introduction):** 神経多様性（Neurodiversity）とオフィスデザインの課題（感覚過敏など）。
    2.  **問題背景 (Problem Analysis):** 従来の「標準的な」オフィス（オープンプラン）が不適切である理由。
    3.  **解決策・哲学 (Philosophy):** 「標準」を否定し、柔軟性と選択肢を提供するアプローチ。
    4.  **実践例 (Practice):** 静寂ゾーンやVRを使ったシミュレーションなど、具体的な設計手法。
    5.  **影響・結論 (Impact):** 全従業員にメリットがある「ユニバーサルデザイン」としての側面。

### 2. テーマの模倣 (Thematic Imitation)
*   **Original:** Designing for Neurodiversity (感覚特性と建築)。
*   **Past:** Feminist Architecture (ジェンダーと建築)。
*   **Commonality:** 「標準（平均的な人）」を基準にした設計を批判し、無視されてきたマイノリティ（女性/神経多様性者）の視点を取り入れることで、全体にとっても良い結果を生むという論理展開。

### 3. 語彙・表現 (Lexical Level)
*   **批判:** fail to accommodate, one-size-fits-all, overwhelming.
*   **提案:** cater to, integrate, flexible, empower.
*   **専門用語:** sensory stimuli, neurodivergent, open-plan offices.`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **Feminist Architecture (過去問)** | **Designing for Neurodiversity (オリジナル)** | **共通点 (Commonality)** |
|:---|:---|:---|:---|
| **テーマ** | 建築とジェンダー (社会的公正) | 建築と神経多様性 (認知的公正) | 「標準」への異議申し立て |
| **構造** | Intro(Matrix)→Background(Le Modulor)→Philosophy(Not Average)→Practice(Jagonari) | Intro(Issue)→Cause(Open Plan)→Philosophy(Flexibility)→Practice(Simulations) | 問題提起→原因(標準化)→哲学(個別化)→実践 |
| **設問1** | Matrix結成の理由 (Para 1) | Neurodiverse Designが必要な理由 (Para 1) | 運動・概念の起源 |
| **設問2** | Le Modulorの問題点 (Para 2) | オープンプランオフィスの問題点 (Para 2) | 具体的な「悪い例」の指摘 |
| **設問3** | 平均値への対抗・方法論 (Para 3) | 「標準」への対抗・解決策 (Para 3) | 中心となる哲学の理解 |
| **設問4** | Matrixの影響・遺産 (Para 4/5) | Neurodiverse Designの影響 (Para 4/5) | 社会的意義・結果 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Feminist Architecture (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 男性中心の建築設計と女性のニーズ。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> グループ(Matrix)の紹介から入り、歴史的背景(Le Modulor)を批判し、具体的な活動とそのレガシーを述べる。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> ジェンダーバイアスと参加型デザイン。

*   **Designing for Neurodiversity (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 神経典型者中心のオフィス設計と感覚過敏。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 現代の課題(オフィス環境)から入り、画一的な設計を批判し、柔軟な環境構築とその広範なメリットを述べる。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 感覚処理特性と環境調整。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1 (内容一致 - Para 1):**
    *   **過去問:** "What led to the formation of Matrix?" (ニーズが無視されていたことへの不満)
    *   **Original:** "What led to the interest in neurodiverse design?" (従来のオフィスが一部の人に適応できていなかったこと)
*   **Q2 (内容一致 - Para 2):**
    *   **過去問:** "What do we learn about Le Modulor?" (男性の標準身長に基づいていた)
    *   **Original:** "What is the problem with open-plan offices?" (騒音や刺激が過敏な人々にとって圧倒的であること)
*   **Q3 (内容一致 - Para 3):**
    *   **過去問:** "Matrix argued against a focus on the 'average' person because..." (実際のユーザーのニーズを見過ごすから)
    *   **Original:** "Advocates of neurodiverse design argue against focusing on the 'standard' user because..." (感覚処理の違いを無視することになるから)
*   **Q4 (内容一致 - Para 4/5):**
    *   **過去問:** "Which statement describes Matrix's impact?" (現在もインスピレーションを与え続けている)
    *   **Original:** "Which statement describes the impact of neurodiverse design?" (特定の人だけでなく、全従業員に利益をもたらす)
`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: S-V-O with Insertion (挿入句を含むSVO - 導入)
> Proponents of this movement **argue that** traditional offices, with their noise and lack of privacy, often **fail to accommodate** employees with neurological differences such as autism, ADHD, and dyslexia.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject (主語):</strong> Proponents of this movement (この運動の支持者は)</li>
    <li><strong>Verb (動詞):</strong> argue (主張する)</li>
    <li><strong>Object (目的語 - that節):</strong> that traditional offices... often fail to accommodate... (従来のオフィスはしばしば～に適応できていないと)</li>
    <li><strong>Insertion (挿入句):</strong> , with their noise and lack of privacy, (騒音やプライバシーの欠如といった特徴を持つ)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Argue that...:</strong> 著者の主張や特定のグループの意見を紹介する際の定番表現。挿入句が主語と動詞（fail）の間にあるため、文構造を見失わないように注意。
</div>

---

### Sentence 2: Dash Insertion (ダッシュ挿入 - 定義)
> However, for individuals who are hypersensitive to sensory stimuli **— a common trait among neurodivergent people —** these elements can be overwhelming.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Prepositional Phrase (前置詞句):</strong> However, for individuals who are hypersensitive... (しかし、感覚刺激に過敏な人々にとっては)</li>
    <li><strong>Insertion (挿入 - 同格):</strong> — a common trait among neurodivergent people — (それは神経多様性を持つ人々の共通の特徴であるが)</li>
    <li><strong>Main Clause (主節):</strong> these elements can be overwhelming (これらの要素は圧倒的［耐え難いもの］になり得る)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Dash (ダッシュ):</strong> 前の語句（hypersensitive to sensory stimuli）を説明・補足するために使用されている。括弧（）と同様の働きだが、より強調的。
</div>

---

### Sentence 3: Instead & Colon (対比と具体化 - 解決策)
> Instead, they propose a fundamental shift in design thinking: **creating flexible environments that offer a variety of sensory experiences**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Connector (接続詞):</strong> Instead, (その代わりに)</li>
    <li><strong>Main Clause (主節):</strong> they propose a fundamental shift... (彼らは根本的な転換を提案する)</li>
    <li><strong>Colon (コロン):</strong> : creating... (すなわち、～を作り出すことである)</li>
    <li><strong>Gerund Phrase (動名詞句):</strong> creating flexible environments that offer... (多様な感覚体験を提供する柔軟な環境を作ること)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Colon (:):</strong> 前の抽象的な表現（fundamental shift）を具体的に説明するマーカー。「つまり〜」と言い換える役割。
</div>`
    }
  },
  "2023-3-p3": {
    past: {
      title: "Meritocracy",
      content: `## Title: Meritocracy

Meritocracy, a system in which people are rewarded based on talent and effort rather than class or wealth, is widely regarded as an ideal basis for a fair society. Efforts to implement this system in the United States began with noble intentions as institutions, such as elite universities and large corporations, realized that wealthy white males enjoyed an unreasonable degree of privilege. The institutions sought to make themselves more accessible to females, minorities, and people from working-class backgrounds. While these attempts initially led to improved admission and hiring rates for disadvantaged people, there are indications that people with higher incomes have come up with ways to gain an unfair share of educational opportunities. Access to superior schools and private tutoring, after all, greatly increases the odds that their children will be admitted to an elite university, which in turn enhances their earning potential. Although things like college scholarships for minorities may create the illusion of fairness, meritocracy can often be manipulated.

Furthermore, it appears that attempts to implement meritocracy can be problematic. In one disturbing psychological experiment, managers were shown statements about a company's values and then instructed to decide on bonus payments for employees. In cases where the statements emphasized that the company was a meritocracy, subjects awarded larger amounts to males than they did to females with identical performance evaluations. When shown statements that did not mention meritocracy, however, this phenomenon did not appear. It has been suggested that this reflects the belief that operating in an organization that emphasizes it is a meritocracy makes people neglect to examine their own behavior, and without this self-assessment, they are more likely to show bias.

Critics of meritocracy, such as legal scholar Daniel Markovits, suggest that it even has negative effects on the elite. America's wealthy were once known as the "leisure class" because their inheritances and investments allowed them to devote most of their time to recreation. Now, however, as Markovits writes, "those who manage to claw their way to the top must work with crushing intensity." They are constantly monitored and assessed, and if their performance slips, they face the threat of demotion or firing. People in the middle and lower classes are also constantly struggling to move up or maintain their position, and there is so much pressure from the fear that others will take one's place that it seems to be having an effect on people's psychological well-being in all levels of society.

America has long had a reputation as an immigrant nation where anyone, regardless of race or social class, could become wealthy, and surveys indicated that most Americans believed that intelligence and hard work were the primary factors that led to success. In recent years, however, surveys have indicated that some two-thirds of Americans are coming to accept that the nation's wealthy hold their position due to advantages gained early in life, while just one-third attribute the wealthy's success mainly to hard work. Furthermore, seven in ten Americans now view poverty as the result of obstacles that people have faced in life rather than a lack of effort.`,
      questions: `### Questions

**(38) What point does the author of the passage make about education in the first paragraph?**
1. Efforts to ensure that a wider range of students are able to attend elite universities have not always been successful.
2. Although efforts at instituting meritocracy were unsuccessful at first, great progress has been made recently.
3. Efforts to make education more open to a wide variety of people have been more effective than efforts to open up companies.
4. Bringing the ideal of meritocracy to universities cannot be done unless it first comes to ordinary schools.

**(39) What is one possible reason for people's behavior in the experiment introduced in the second paragraph?**
1. Belief in meritocracy can cause managers to evaluate male employees more harshly than they deserve.
2. Meritocracies seem to cause significant declines in the job performance of both male and female employees.
3. Trying to use financial rewards to encourage belief in meritocracy can have the completely opposite effect.
4. People are less likely to be aware of their own prejudices when they believe the company is a meritocracy.

**(40) According to Daniel Markovits, one disadvantage of meritocracy is that**
1. wealthy people have found unfair ways to ensure that they continue to maintain their position without working hard.
2. the methods that are usually used to evaluate workers are often unfair, especially to members of the upper class.
3. it has created a sense of constant competition that can have negative effects on people's mental health.
4. the amount of resentment between members of different social classes has grown significantly because of it.

**(41) How have American views on meritocracy changed?**
1. More people have come to recognize that when people are poor, it may not necessarily be their fault.
2. It has caused people to change their views regarding how many immigrants should be allowed into the country.
3. People are slowly beginning to lose their prejudices against members of other races and social classes.
4. There is more recognition of the effort that wealthy people have made to achieve their high status in life.

**Answer Key:** 1, 4, 3, 1`
    },
    original: {
      title: "The Bias in Algorithms",
      content: `## Title: The Bias in Algorithms

Algorithms, sets of rules for solving problems or calculations, are increasingly used to make decisions in areas ranging from hiring to criminal justice. Proponents argue that replacing fallible human judgment with machine logic creates a fairer society, free from the prejudices that have historically marginalized certain groups. Indeed, early implementations in loan approvals seemed to expand access to credit for some underserved populations. However, there is growing evidence that these systems often perpetuate the very inequalities they were meant to eliminate. Because algorithms are trained on historical data, which reflects past discrimination, they can learn to favor candidates who resemble those who have succeeded in the past, often wealthy white males, while unfairly filtering out others.

Research has highlighted how this improved efficiency can come at the cost of fairness. In one study involving a hiring algorithm developed by a major tech company, the system taught itself that male candidates were preferable. It penalized résumés that included the word "women's," such as "women's chess club captain," and downgraded graduates of two all-women's colleges. When the company tried to correct this by programming the system to ignore gender, it still found proxies for gender, such as language patterns or hobbies, to continue the bias. This suggests that without careful oversight, algorithms will inevitably reproduce the societal hierarchies embedded in the data they are fed.

Critics like data scientist Cathy O'Neil warn that these "weapons of math destruction" are opaque and unaccountable. Unlike human decision-makers, who can be questioned about their reasoning, algorithms often operate as "black boxes" where the logic is hidden even from the creators. O'Neil argues that this lack of transparency is particularly dangerous for the poor, who are more likely to be judged by automated systems in housing, employment, and law enforcement. Meanwhile, the wealthy can often bypass these digital gatekeepers or hire professionals to help them navigate the system, further widening the gap between the haves and have-nots. The pressure to conform to algorithmic standards also creates a new form of anxiety, as people struggle to optimize their lives for machine approval.

For years, the public generally accepted the "tech solutionism" narrative—that technology could solve complex social problems. However, recent surveys show a significant shift in attitude. A majority of Americans now express skepticism about the use of AI in hiring and policing, with many believing that these tools are more likely to exhibit bias than human managers. This change has led to calls for "algorithmic accountability," with policymakers in Europe and the US proposing regulations that would require companies to audit their systems for bias and explain automated decisions. The blind faith in digital neutrality is fading, replaced by a demand for human oversight.`,
      questions: `### Questions

**(38) What point does the author make about algorithms in the first paragraph?**
1. They have successfully eliminated most of the prejudices that human decision-makers hold.
2. Although they were intended to ensure fairness, they may actually reinforce existing social inequalities.
3. They are most effective when used in fields like hiring and criminal justice rather than loan approvals.
4. The historical data used to train them is usually free from the biases found in society.

**(39) What did the study of the hiring algorithm reveal?**
1. The system was able to completely eliminate gender bias once programmers told it to ignore gender.
2. Male candidates were generally less qualified than female candidates, but the system favored them anyway.
3. The algorithm's efficiency improved significantly when it was allowed to consider the applicant's hobbies.
4. The system found indirect ways to identify and discriminate against female applicants even when gender was hidden.

**(40) According to Cathy O'Neil, one problem with algorithmic decision-making is that**
1. it is difficult for people to understand why a decision was made because the process is not transparent.
2. wealthy people are more likely to be unfairly targeted by automated systems than poor people.
3. human decision-makers are generally less accountable for their actions than computer systems.
4. the professionals hired to navigate these systems often give incorrect advice to their clients.

**(41) How has public opinion regarding technology changed recently?**
1. People are becoming more confident that technology can solve complex social problems without human intervention.
2. Most Americans now believe that AI tools are less biased than human managers in hiring and policing.
3. There is growing doubt about the neutrality of digital tools and a desire for greater regulation and oversight.
4. Policymakers have decided to stop regulating tech companies because the public trusts them to self-correct.

**Answer Key:** 2, 4, 1, 3`
    },
    analysis: {
      intent: `### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~430 words (Meritocracy と同等).
*   **パラグラフ構成:**
    1.  **導入・背景 (Introduction):** アルゴリズムの理念（公平性）と現実（バイアスの永続化）。
    2.  **実験・研究 (Study):** 採用AIの事例研究（ジェンダーバイアスの発見と修正の困難さ）。
    3.  **批判・問題 (Critique):** "Black box"の不透明性と、社会的弱者への影響（Cathy O'Neilの主張）。
    4.  **変化・トレンド (Trend):** 技術解決主義（Tech solutionism）への懐疑と、規制への動き（Algorithmic accountability）。

### 2. テーマの模倣 (Thematic Imitation)
*   **Original:** The Bias in Algorithms (AI・技術的公平性のパラドックス).
*   **Past:** Meritocracy (社会的公平性のパラドックス).
*   **Commonality:** 「公平・客観的」とされるシステム（能力主義/アルゴリズム）が、実は既存の格差を強化してしまうという逆説的構造。

### 3. 語彙・表現 (Lexical Level)
*   **重要語彙:** perpetuate inequalities, marginalized groups, proxies for gender, opaque, unaccountable, skepticism.
*   **対比:** "fallible human judgment" vs "machine logic", "tech solutionism" vs "human oversight".`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **Meritocracy (過去問)** | **The Bias in Algorithms (オリジナル)** | **共通点 (Commonality)** |
|:---|:---|:---|:---|
| **テーマ** | 能力主義と格差 | アルゴリズムとバイアス | 「公平なシステム」の欺瞞 |
| **構造** | Intro(Ideal vs Reality)→Exp(Bias Study)→Critique(Pressure)→Trend(Awareness) | Intro(Ideal vs Reality)→Exp(Hiring Study)→Critique(Opacity)→Trend(Skepticism) | 理念提示→証拠(実験)→批判(専門家)→世論の変化 |
| **設問1** | 教育における不平等の再生産 (Para 1) | アルゴリズムによる不平等の強化 (Para 1) | システムが意図に反する結果を生む |
| **設問2** | 心理実験でのバイアス発生理由 (Para 2) | 採用AIでのバイアス持続理由 (Para 2) | 「公平」という思い込み/隠れた変数 |
| **設問3** | 専門家による「エリートへの悪影響」 (Para 3) | 専門家による「弱者への悪影響」 (Para 3) | システムの弊害の指摘 |
| **設問4** | 能力主義に対する意識の変化 (Para 4) | 技術に対する意識の変化 (Para 4) | 社会的認識のシフト |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Meritocracy (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 社会学（能力主義）。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 心理実験を通じて人間の無意識のバイアスを指摘し、社会全体の疲弊を描く。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 精神的幸福感への悪影響。

*   **The Bias in Algorithms (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 技術・社会（AI倫理）。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 採用AIの事例を通じてデータのバイアスを指摘し、ブラックボックス化の危険性を描く。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 説明責任と透明性の欠如。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1 (内容一致 - Para 1):**
    *   **過去問:** "What point does the author make...?" (教育へのアクセス不平等が成功の確率を変える)
    *   **Original:** "What point does the author make...?" (歴史データに基づくことで既存の不平等を強化する)
*   **Q2 (内容一致 - Para 2):**
    *   **過去問:** "reason for people's behavior in the experiment" (自分が公平だと思い込むとバイアスに気づきにくくなる)
    *   **Original:** "What did the study reveal?" (性別を除外しても、間接的な指標を見つけて差別を続けた)
*   **Q3 (内容一致 - Para 3):**
    *   **過去問:** "According to Daniel Markovits..." (競争が精神衛生に悪影響を与える)
    *   **Original:** "According to Cathy O'Neil..." (プロセスが不透明で理解できないことが問題)
*   **Q4 (内容一致 - Para 4):**
    *   **過去問:** "How have American views changed?" (貧困は本人のせいではないと認めるようになった)
    *   **Original:** "How has public opinion changed?" (デジタルツールの力に対する疑念と監視の要求)
`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Formal Subject & Argument (形式主語と主張 - 導入)
> However, **there is growing evidence that** these systems often perpetuate the very inequalities they were meant to eliminate.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Existential Clause (存在文):</strong> There is growing evidence... (～という証拠が増えている)</li>
    <li><strong>Appositive Clause (同格のthat節):</strong> that these systems often perpetuate... (これらのシステムがしばしば～を永続させるという)</li>
    <li><strong>Relative Clause (関係代名詞):</strong> (that/which) they were meant to eliminate (それらが排除するように意図されていた[不平等を])</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>There is evidence that...:</strong> 科学的・客観的な根拠を導入する表現。Appositive (同格) のthat節がevidenceの内容を説明している。
</div>

---

### Sentence 2: Cause & Effect with Relative Clause (因果関係と関係詞 - 原因)
> Because algorithms are trained on historical data, **which** reflects past discrimination, they can learn to favor candidates who resemble those who have succeeded in the past.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Reason Clause (理由節):</strong> Because algorithms are trained on historical data, (アルゴリズムは歴史的データで訓練されるため)</li>
    <li><strong>Non-restrictive Relative (非制限用法):</strong> , which reflects past discrimination, (そしてそのデータは過去の差別を反映しているのだが)</li>
    <li><strong>Main Clause (主節):</strong> they can learn to favor candidates... (それらは候補者を優遇することを学習してしまう可能性がある)</li>
    <li><strong>Relative Clause (制限用法):</strong> who resemble those who have succeeded... (過去に成功した人々に似ている[候補者を])</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Comma + which (非制限用法):</strong> 先行詞（historical data）に対する補足説明。「データ＝差別の反映」という性質を追加している重要な部分。
</div>

---

### Sentence 3: Contrast & Passive Voice (対比と受動態 - 変化)
> The blind faith in digital neutrality is fading, **replaced by a demand for human oversight**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause (主節):</strong> The blind faith in digital neutrality is fading, (デジタルの中立性への盲目的な信頼は薄れつつある)</li>
    <li><strong>Participial Construction (分詞構文):</strong> (being) replaced by a demand for human oversight. (そして人間の監視への要求に取って代わられている)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Being replaced by...:</strong> SV, Ving (or V-ed) の形で、主節の動作に伴って起こる変化や結果を表す。ここでは受動的な意味（置き換えられる）なので過去分詞が使われている（beingの省略）。
</div>`
    }
  },
  "2023-2-p3": {
    past: {
      title: "The Marian Reforms",
      content: `## Title: The Marian Reforms

Around the end of the second century BC, the Roman Republic faced the threat of an invasion by tribal peoples from Western Europe and experienced a series of humiliating defeats in Africa. Realizing that the Roman army was no longer able to meet the needs of the rapidly expanding republic, the Roman leader Gaius Marius set about implementing sweeping reforms. These became known as the Marian reforms, and they transformed the Roman army into a nearly unstoppable military machine that was arguably the most effective fighting force in ancient times. Traditionally, enlistment of soldiers into the Roman army had been on a temporary basis, which necessitated constant recruitment and inevitably led to new recruits often having no previous fighting experience. Furthermore, property ownership was required for entry into the army, and increasing poverty within the Roman Republic severely reduced the pool of potential recruits who could meet this requirement.

The Marian reforms consisted of several measures, including the removal of both property requirements and the need for recruits to prepare their own weapons and armor. This allowed even the poorest citizens to enlist and led to better-equipped soldiers because the army could standardize and improve the weapons and armor used. Soldiers in the army became known as "legionaries," and they were trained in military strategy. Perhaps most importantly, the reforms provided a crucial incentive for enlistment—any soldier who served for 16 years was compensated with a plot of farmland and full Roman citizenship. The rapid expansion of the Roman Republic meant there were many noncitizen inhabitants who lived in poverty and for whom an opportunity to escape their situation was hugely appealing.

The Roman army's better-trained and more highly motivated soldiers led to it achieving significant military triumphs that contributed to Rome's expansion. The land that former legionaries received was generally in newly conquered provinces, so these veterans were instrumental in spreading Roman culture. Their presence also made it easier to overcome local resistance to Roman rule and facilitated the process of integration into the Roman Republic. The mere presence of the veterans brought greater security to new territories, since they could assist in preventing rebellions and resisting invasions.

While the Marian reforms greatly improved the Roman army, they also had an unexpected impact on Roman society that eventually led to the downfall of the republic. When the army was composed mostly of wealthy citizens enlisted on an as-needed basis, it had little influence on Roman politics. Following the Marian reforms, however, legionaries in the army became highly disciplined and developed an intense loyalty to their generals. In consequence, generals found it difficult to resist the temptation to use the forces under their command to gain political influence for themselves rather than to ensure the protection and expansion of the Roman Republic. This resulted in civil wars, and eventually, Julius Caesar successfully used the army to overthrow the elected government and declare himself the Roman leader. This marked the end of the relatively democratic Roman Republic and paved the way for the creation of a dictatorship ruled by all-powerful emperors.`,
      questions: `### Questions

**(38) What was one reason for the Marian reforms?**
1. Financial problems within the Roman Republic meant a Roman leader had no choice but to reduce funding for the military.
2. As the number of soldiers in the army increased, it became more difficult to transport them to Western Europe and Africa to defend the Roman Republic.
3. Complaints arose among soldiers because they were forced to stay in the army for many years and received low pay for their service.
4. A Roman leader was concerned that the army did not have the manpower or skills required to allow the Roman Republic to achieve its military goals.

**(39) What was an important change that occurred because of the Marian reforms?**
1. A rule was introduced stating that only Roman citizens could join the Roman army, leading to more people trying to get Roman citizenship.
2. Serving in the Roman army became more attractive because it was a way for people living in the Roman Republic to improve their lives.
3. The Roman army struggled to find enough recruits because it would only accept men who already had military experience.
4. The number of years that soldiers were required to spend in the Roman army was reduced, which lowered the average age of soldiers.

**(40) According to the third paragraph, after the Roman army took over new territories,**
1. the number of soldiers sent to those areas would be greatly increased to allow the army to attack neighboring regions and continue the expansion of the Roman Republic.
2. local people were invited to Rome's capital to learn the Roman language and culture so that they could quickly become accustomed to Roman society.
3. ex-soldiers were given land there, which made it much easier to control the local people and ensure that the areas could be defended from various threats.
4. the areas were often lost again quite quickly because it was impossible for the army to prevent the many rebellions that occurred.

**(41) What effect did the Marian reforms have on Roman society?**
1. The army was used as a political tool, creating a system in which a Roman leader gained his position by military power rather than by being chosen by the people.
2. The wealth and social standing of people who refused to serve in the army decreased, while former legionaries often obtained high government positions.
3. The Roman army became so large that the cost of maintaining it became a major cause of the fall of the Roman Republic.
4. The lack of discipline among the legionaries led to tension between Roman citizens and the army, which eventually resulted in civil wars.

---
**Answer Key:** (38) 4, (39) 2, (40) 3, (41) 1`
    },
    original: {
      title: "The Prussian Military Reforms",
      content: `## Title: The Prussian Military Reforms

In 1806, the Kingdom of Prussia suffered a catastrophic defeat at the hands of Napoleon's French forces, and its army was swiftly dismantled through a humiliating treaty. Realizing that Prussia could no longer compete with modern European powers using its outdated military system, a group of reformers led by General Gerhard von Scharnhorst set about implementing revolutionary changes. These became known as the Prussian military reforms, and they transformed what had been an aristocratic institution into what many historians consider the first truly professional army in modern European history. Traditionally, officer positions in the Prussian army had been reserved exclusively for members of the nobility, which meant that talented individuals from the lower classes had no opportunity for advancement. Furthermore, soldiers were often unwilling foreign recruits who had been forced into service, and military tactics had remained largely unchanged for decades.

The Prussian reforms consisted of several groundbreaking measures, including the abolition of noble privilege for officer ranks and the introduction of universal military conscription for all male citizens. This allowed men of merit to rise through the ranks regardless of their birth and created a sense of national duty among the entire population because everyone now shared the burden of defense. Officers in the reformed army attended newly established military academies where they studied advanced tactics and strategic planning. Perhaps most importantly, the reforms instilled a powerful sense of professionalism and national identity—soldiers were no longer fighting for a distant king but for their own nation and families. The defeat by Napoleon had created widespread resentment among the population, and for many, the opportunity to rebuild and seek eventual redemption was highly motivating.

The Prussian army's better-educated and more highly motivated officer corps led to it achieving remarkable military victories that restored Prussia's position in Europe. The tactics that officers learned in the new academies were instrumental in defeating Napoleon at the Battle of Leipzig in 1813, where Prussia played a leading role amongst the allied forces. Their professionalism also made it easier to coordinate complex military operations and facilitated the eventual unification of the German states under Prussian leadership. The mere reputation of the reformed army brought greater diplomatic influence to Prussia, since other nations recognized its newfound military capability.

While the Prussian reforms successfully modernized the army, they also had an unintended impact on German society that eventually led to devastating consequences. When the army had consisted of aristocratic officers leading reluctant conscripts, civilian politicians could maintain control over military affairs. Following the reforms, however, the professional officer corps developed an intense loyalty to the institution of the army itself and a powerful sense of its own importance. In consequence, the military leadership found it increasingly difficult to accept civilian oversight and began to influence political decisions far beyond its proper sphere. This resulted in a growing culture of militarism, and eventually, the German army became so powerful that it could effectively dictate national policy. This marked the beginning of a dangerous tradition in which military interests dominated German politics, contributing to the aggressive policies that ultimately led to two world wars.`,
      questions: `### Original Questions

**(1) What was one reason for the Prussian military reforms?**
1. Economic difficulties within Prussia meant that the government could no longer afford to pay foreign soldiers who formed the majority of the army.
2. The growing population of Prussia had become so large that the existing military system could not accommodate all the men who wished to enlist.
3. Neighboring countries began to refuse trading with Prussia, forcing it to become more self-sufficient in producing weapons and military equipment.
4. The existing military structure was not capable of competing with modern European armies, as demonstrated by a devastating military loss.

**(2) What was an important change that occurred because of the Prussian reforms?**
1. The requirement that all officers must come from noble families was eliminated, allowing capable individuals from any background to advance in the military.
2. The length of military service was extended to encourage soldiers to develop stronger bonds with their commanders.
3. Foreign soldiers were recruited in greater numbers because Prussian citizens refused to serve under the new conscription laws.
4. Military academies were closed and replaced with on-the-job training, which proved more effective for developing practical combat skills.

**(3) According to the third paragraph, after the Prussian army was reformed,**
1. it immediately declared war on France to seek revenge for the humiliation suffered during Napoleon's invasion.
2. its professional officers helped Prussia gain influence and assisted in uniting independent German territories.
3. other European nations refused to negotiate with Prussia because they feared its military strength.
4. the costs of maintaining the officer academies became so high that Prussia had to reduce the size of its infantry.

**(4) What effect did the Prussian reforms have on German society?**
1. The military became so influential that it began to control political decisions, leading to policies that had tragic historical consequences.
2. The aristocracy regained control of the army after the reforms proved unsuccessful, restoring the old system of noble privilege.
3. Civilian politicians gained complete control over military affairs, which led to poor strategic decisions during wartime.
4. The professional army became so focused on training that it failed to respond effectively when actual conflicts arose.

---
**Answer Key:** (1) 4, (2) 1, (3) 2, (4) 1`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** The Marian Reforms (2023-2-p3) - Category: History / Military-Political Reform

### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~480 words (The Marian Reforms: ~490 words と同等)
*   **パラグラフ構成:**
    1.  **背景と課題 (Introduction):** 壊滅的な敗北 → 軍改革の必要性 → 旧体制の問題点（貴族独占・外国人兵）(Q1)
    2.  **改革の内容 (Reform Details):** 貴族特権撤廃・国民皆兵・士官学校創設・国家への忠誠心 (Q2)
    3.  **成功と拡大 (Success):** ナポレオン撃破・ドイツ統一への貢献・外交的影響力 (Q3)
    4.  **意図せぬ結果 (Unintended Consequences):** 軍の政治介入 → 軍国主義 → 二度の世界大戦 (Q4)

### 2. テーマの模倣 (Thematic Imitation)
*   **Original (Marian Reforms):** ローマ共和国の軍事改革。貧困層への門戸開放 → 軍の強化 → 将軍への忠誠 → 共和政の崩壊と独裁制。
*   **New (Prussian Reforms):** プロイセン王国の軍事改革。平民への門戸開放 → 軍の近代化 → 軍部への忠誠 → 文民統制の崩壊と軍国主義。

### 3. 語彙・表現 (Lexical Level)
*   **対比表現:** "no longer able to meet the needs" ≈ "could no longer compete with modern powers"
*   **共通語彙:** "sweeping/revolutionary reforms", "transformed", "arguably/many historians consider", "exclusively/reserved", "advancement/rise through the ranks", "instrumental in", "facilitated", "unintended/unexpected impact", "resulted in", "marked the end/beginning"`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **The Marian Reforms (過去問)** | **The Prussian Reforms (オリジナル)** | **共通点 (Commonality)** |
|----------|--------------------------------|-------------------------------------|--------------------------|
| **時代・場所** | 紀元前2世紀末・ローマ | 1806年・プロイセン | 軍事的敗北がきっかけ |
| **改革者** | ガイウス・マリウス | ゲルハルト・フォン・シャルンホルスト | カリスマ的リーダーシップ |
| **旧体制の問題** | 財産資格・一時的徴兵・訓練不足 | 貴族独占・外国人兵・戦術の陳腐化 | 人的資源と専門性の欠如 |
| **主要改革** | 財産資格撤廃・装備の統一・16年服役で土地 | 貴族特権撤廃・国民皆兵・士官学校設立 | 門戸開放と専門化 |
| **短期的成果** | 軍事的勝利・領土拡大・退役兵による統合 | ナポレオン撃破・ドイツ統一・外交的影響力 | 軍の強化と国家の拡大 |
| **長期的帰結** | 将軍への忠誠 → 内乱 → カエサルの独裁 | 軍への忠誠 → 軍国主義 → 世界大戦 | 意図せぬ政治的帰結と国家の変質 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **The Marian Reforms (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 古代ローマの軍制改革。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 敗北と人手不足 → 貧困層の取り込み → 軍の専門化 → **将軍個人への忠誠** → 内乱と独裁。
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「共和政から帝政へ」という政体の根本的変化。個人（カエサル）の台頭。

*   **The Prussian Reforms (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 近代プロイセンの軍制改革。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> ナポレオンへの敗北 → 能力主義の導入 → 軍の近代化 → **軍という組織への忠誠** → 軍国主義と世界大戦。
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「文民統制から軍部支配へ」という権力構造の変化。組織（軍部）の肥大化。

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1/38 (内容一致 - Reason for Reform):**
    *   **過去問:** "did not have the manpower or skills" (人手とスキルの不足)。Para 1の課題認識。
    *   **Original:** "not capable of competing with modern European armies" (近代軍との競争力不足)。Para 1の敗北と旧体制への批判。

*   **Q2/39 (内容一致 - Key Change):**
    *   **過去問:** "became more attractive ... to improve their lives" (生活向上の手段)。インセンティブとしての土地・市民権。
    *   **Original:** "requirement ... was eliminated, allowing capable individuals" (能力主義)。貴族特権の撤廃と昇進機会。

*   **Q3/40 (内容一致 - Success/Outcome):**
    *   **過去問:** "ex-soldiers were given land ... easier to control" (退役兵の定着と統治)。領土統合への貢献。
    *   **Original:** "helped Prussia gain influence and assisted in uniting" (影響力とドイツ統一)。外交・軍事的成功。

*   **Q4/41 (内容一致 - Unintended Consequence):**
    *   **過去問:** "used as a political tool ... by military power" (軍の政治化と独裁)。カエサルの台頭。
    *   **Original:** "became so influential that it began to control political decisions" (軍部の政治支配)。軍国主義と大戦。`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Complex Appositive & Result Clause (複雑な同格と結果節)
> Realizing **that Prussia could no longer compete with modern European powers** using its outdated military system, a group of reformers **led by General Gerhard von Scharnhorst** set about implementing revolutionary changes.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Participial Clause (分詞構文 - 理由):</strong> Realizing that... (〜と認識して)
      <ul>
        <li><em>that Prussia could no longer compete...</em> (プロイセンがもはや競争できないこと)</li>
      </ul>
    </li>
    <li><strong>Main Subject (主語):</strong> a group of reformers
      <ul>
        <li><em>, led by General Gerhard von Scharnhorst,</em> (シャルンホルスト将軍に率いられた - 過去分詞の後置修飾)</li>
      </ul>
    </li>
    <li><strong>Main Verb (動詞):</strong> set about implementing... (〜を実施し始めた)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>set about + -ing:</strong> 「〜に取りかかる」という意味の重要表現。分詞構文(Realizing...)で理由を示し、後置修飾(led by...)で主語を詳しく説明するパターンは、英検準1級で頻出です。
</div>

---

### Sentence 2: Cause & Effect with Comparative (原因と結果 + 比較)
> This allowed men of merit **to rise through the ranks regardless of their birth** and created a sense of national duty among the entire population **because everyone now shared the burden of defense**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject:</strong> This (この改革は)</li>
    <li><strong>First Effect:</strong> allowed men of merit to rise through the ranks... (有能な者が昇進することを可能にした)
      <ul>
        <li><em>regardless of their birth</em> (出自に関係なく - 譲歩の前置詞句)</li>
      </ul>
    </li>
    <li><strong>Conjunction:</strong> and (そして)</li>
    <li><strong>Second Effect:</strong> created a sense of national duty... (国民的義務感を生み出した)</li>
    <li><strong>Reason Clause:</strong> because everyone now shared... (なぜなら全員が〜を分かち合うようになったから)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>A allowed X to V and created Y because Z:</strong> 一つの主語(This)から二つの結果(allowed... and created...)が生まれ、その理由(because...)を説明する構造。設問39の正答根拠となる重要な文です。
</div>

---

### Sentence 3: Contrast & Consequence (対比と帰結)
> **While the Prussian reforms successfully modernized the army**, they also had an unintended impact on German society **that eventually led to devastating consequences**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Concessive Clause (譲歩節):</strong> While the Prussian reforms successfully modernized... (プロイセン改革は確かに軍を近代化したが)</li>
    <li><strong>Main Clause:</strong> they also had an unintended impact... (それらはまた意図せぬ影響を与えた)</li>
    <li><strong>Relative Clause:</strong> that eventually led to devastating consequences (最終的に壊滅的な結果につながった)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>While S V (success), S also V (problem):</strong> 成功を認めつつ問題点を指摘する「譲歩と対比」のパターン。パラグラフ4の冒頭で文章の転換点を示し、設問41への伏線となっています。
</div>`
    }
  },
  "2023-1-p3": {
    past: {
      title: "Robert the Bruce and the Declaration of Arbroath",
      content: `## Title: Robert the Bruce and the Declaration of Arbroath

In 1286, the sudden death of King Alexander III of Scotland resulted in a power struggle among various nobles that nearly brought the country to civil war. To settle the matter, England's King Edward I was asked to select a new ruler from among the rivals. Edward, who himself had ambitions to ultimately rule Scotland, agreed only on the condition that the new leader pledged loyalty to him. He chose a noble named John Balliol as the new king, but resentment soon grew as England repeatedly exerted its authority over Scotland's affairs. The turning point came when Edward attempted to force Scotland to provide military assistance in England's conflict with France. When Balliol allied his nation with France instead, Edward invaded Scotland, defeated Balliol, and took the throne.

This was the situation faced by the Scottish noble Robert the Bruce as he attempted to free Scotland from English rule. Robert, whose father had been one of Balliol's rivals for the throne, gained political dominance and led a rebellion that drove English forces from Scotland. Robert was crowned king of Scotland in 1306, and although he enjoyed tremendous support domestically, he had angered the Pope, the leader of the Roman Catholic Church. Not only had he ignored the church's requests that he make peace with England, but he had also taken the life of his closest rival to the throne in a place of worship before being crowned king.

Scotland's leadership knew that the country would remain internationally isolated and vulnerable without the church's recognition. International acceptance of Scotland's independence would be especially important if the country were to exist in the shadow of a mighty nation like England, which still failed to officially acknowledge Robert as Scotland's king despite having retreated. In 1320, Scotland's most powerful nobles therefore gathered to create a document known today as the Declaration of Arbroath. It proclaimed Scotland's independence and requested the Pope recognize Robert as the country's ruler. The response the nobles received later in the year, however, indicated that the declaration initially had not been effective. The Pope not only refused Scotland's request but also failed to confirm its self-proclaimed independence, although he did urge England to pursue a peaceful resolution in its dealings with the nation. A few years later, however, the declaration's influence contributed to the Pope recognizing Robert and his kingdom after a peace treaty finally freed Scotland from England's threat.

Today, the Declaration of Arbroath is one of the most celebrated documents in Scottish history. Some historians even argue it inspired the US Declaration of Independence, although proof of this is lacking. Scholars generally agree, however, that what makes the Declaration of Arbroath so historic is the assertion that the king may rule only with the approval of the Scottish people; specifically, the nobles used the document to boldly insist on their right to remove any ruler who betrayed them. In this sense, the document was a pioneering example of a contract between a country's ruler and its people, in which the ruler was responsible for ensuring the people could live in a free society.`,
      questions: `### Questions

**(38) What happened following the death of King Alexander III of Scotland?**
1. Scotland was able to trick King Edward I into choosing John Balliol even though it was not in Edward's interest to do so.
2. King Edward I began to question the loyalty of the Scottish nobles who had not supported John Balliol's attempt to become king.
3. King Edward I attempted to use the situation to his advantage in order to increase his power over Scotland.
4. Scotland felt so threatened by France's military power that diplomatic relations between the countries worsened.

**(39) What problem did Robert the Bruce face after he became king of Scotland?**
1. Although he was a great military leader, his lack of political skills led him to negotiate a poor agreement with England.
2. The disagreements he had with his rivals about religion caused many Scottish people to stop supporting him.
3. The religious differences between Scotland and England made it likely that Scotland would be attacked again.
4. Because of the things he had done to gain power, Scotland could not get the support it needed to be safe from England.

**(40) In the year the Declaration of Arbroath was written,**
1. it became clear that the Pope considered it a priority to recognize Scotland's independence as a nation.
2. the Pope attempted to encourage peace between England and Scotland despite not acknowledging either Robert or his country.
3. the promise of peace between England and Scotland was endangered by Scotland's attempt to get help from the Pope.
4. Scotland was able to achieve enough international recognition to get the Pope to admit that Robert was the country's true king.

**(41) What is one common interpretation of the Declaration of Arbroath?**
1. It demonstrates that Robert was actually a much better leader than people had originally thought him to be.
2. It brought a new way of looking at the duty that a country's ruler had to the people he or she was governing.
3. It reveals that there was much more conflict between Scottish rulers and nobles at the time than scholars once believed.
4. It suggested that a beneficial system of government was not possible with a king or queen ruling a country.

---
**Answer Key:** (38) 3, (39) 4, (40) 2, (41) 2`
    },
    original: {
      title: "King John and the Magna Carta",
      content: `## Title: King John and the Magna Carta

In the early thirteenth century, England was ruled by King John, whose reign became notorious for a series of political and military failures. John had lost most of England's territories in France to the French king, earning him the unflattering nickname "John Lackland." To fund his unsuccessful military campaigns, he imposed heavy taxes on his subjects, particularly the barons who held large estates. The king also abused his feudal powers, arbitrarily imprisoning nobles and seizing their lands without proper legal proceedings. These actions generated widespread resentment among the English nobility, who began to view their monarch as a tyrant who disregarded the traditional limits on royal authority.

The barons' discontent reached a breaking point in 1215, when a group of rebellious nobles captured London and forced King John to negotiate. The result was a document known as the Magna Carta, or "Great Charter," which the king reluctantly signed at Runnymede in June of that year. The charter contained sixty-three clauses that addressed various grievances. Most significantly, it established the principle that even the king was subject to the law and could not arbitrarily punish free men without a lawful judgment. It also limited the king's ability to impose taxes without the consent of a council of barons, thereby introducing a rudimentary form of parliamentary oversight.

The immediate aftermath of the Magna Carta, however, was far from peaceful. Within weeks of signing the document, King John appealed to Pope Innocent III to annul it, arguing that he had been coerced into agreement. The Pope, who was sympathetic to royal authority, declared the charter "null and void." This prompted the barons to invite Prince Louis of France to invade England and claim the throne. The resulting civil war, known as the First Barons' War, only ended when King John died unexpectedly in 1216 and his young son Henry III was crowned. The new king's regents reissued the Magna Carta in modified form, hoping to win back the loyalty of the rebellious barons.

Although the Magna Carta was largely ignored for centuries after its creation, it eventually became one of the most influential documents in the history of constitutional government. Legal scholars in the seventeenth century revived interest in the charter, using it to argue against the absolute power of the monarchy. Its principles influenced the development of English common law and were cited by the American colonists in their arguments for independence. Today, the Magna Carta is celebrated as a foundational document of democracy, symbolizing the idea that governments must respect the rule of law and the rights of individuals. Some historians, however, point out that its original purpose was simply to protect the privileges of wealthy barons rather than to establish universal human rights.`,
      questions: `### Original Questions

**(1) What led to the barons' growing resentment toward King John?**
1. His decision to form an alliance with the French king against the wishes of the English nobility.
2. His failure to consult with religious leaders before making important political decisions.
3. His refusal to participate in military campaigns that the barons considered essential for national security.
4. His use of excessive taxation and arbitrary punishment without following proper legal procedures.

**(2) What was a major achievement of the Magna Carta when it was signed?**
1. It created a formal agreement between England and France that ended years of military conflict.
2. It introduced the concept that the monarch was not above the law and needed baronial consent for taxation.
3. It gave common people the right to vote on important matters affecting the kingdom.
4. It transferred significant political power from the king to the Pope and the Catholic Church.

**(3) What happened shortly after King John signed the Magna Carta?**
1. The document was enthusiastically embraced by all parties and led to a long period of peace.
2. The Pope declared the charter invalid, which triggered a civil war and a foreign invasion.
3. King John successfully used the document to strengthen his control over the rebellious barons.
4. The barons became satisfied with the new arrangement and withdrew their demands for further reforms.

**(4) What is one way modern scholars view the historical significance of the Magna Carta?**
1. It was originally designed to benefit all citizens equally but was later corrupted by wealthy elites.
2. It is considered a foundational document of democracy despite originally serving narrow aristocratic interests.
3. It had little influence on later constitutional developments and is mostly of symbolic importance today.
4. It demonstrates that medieval societies were more democratic than historians previously believed.

---
**Answer Key:** (1) 4, (2) 2, (3) 2, (4) 2`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Robert the Bruce and the Declaration of Arbroath (2023年第1回) - Category: 中世ヨーロッパの歴史的文書

### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~480 words (過去問と同等)
*   **パラグラフ構成:**
    1.  **導入・背景 (Introduction):** ジョン王の失政と貴族の不満 (Q1)
    2.  **展開・変化 (Development):** マグナ・カルタの署名と主要条項 (Q2)
    3.  **具体例・詳細 (Details):** 署名後の反故と内戦 (Q3)
    4.  **結論・影響 (Conclusion):** 歴史的意義と現代的評価 (Q4)

### 2. テーマの模倣 (Thematic Imitation)
*   **過去問 (Original Model):**
    *   14世紀スコットランドの独立宣言
    *   「王は人民の承認によってのみ統治できる」という革命的概念
    *   外圧（イングランド）からの解放と国際的承認
*   **オリジナル (New):**
    *   13世紀イングランドの権利章典
    *   「王も法に従わなければならない」という革命的概念
    *   内圧（貴族）による王権の制限

### 3. 語彙・表現 (Lexical Level)
*   **対比表現:** "notorious for" vs "celebrated documents", "reluctantly signed" vs "enthusiastically embraced"
*   **重要語彙:** feudal powers, arbitrary, coerced, annul, constitutional government, common law`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **Robert the Bruce (過去問)** | **King John and the Magna Carta (オリジナル)** | **共通点 (Commonality)** |
|----------|------------------------------|---------------------------------------------|--------------------------|
| **テーマ** | スコットランド独立と教皇の承認 | イングランド王権の制限と法の支配 | 中世ヨーロッパの権力闘争 |
| **文書** | アーブロース宣言 (1320) | マグナ・カルタ (1215) | 歴史的な権利宣言 |
| **核心概念** | 国民主権の先駆け | 法の支配の先駆け | 現代民主主義の源流 |
| **構造** | 危機→文書作成→挫折→成功 | 失政→文書署名→反故→復活 | 4段階の展開 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Robert the Bruce (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> スコットランド独立運動
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 外国の支配からの解放
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 教皇の承認という外部からの正当化

*   **King John and the Magna Carta (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 国内の権力闘争
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 王権の制限と法の支配の確立
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 貴族による国内からの圧力

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1/38 (内容一致 - 背景・原因):**
    *   **過去問:** "King Edward I attempted to use the situation to his advantage" (エドワード1世の野心)
    *   **Original:** "excessive taxation and arbitrary punishment" (ジョン王の暴政)

*   **Q2/39 (内容一致 - 問題・変化):**
    *   **過去問:** "Scotland could not get the support it needed" (教皇の承認が得られない)
    *   **Original:** "monarch was not above the law" (法の支配の確立)

*   **Q3/40 (内容一致 - 展開・詳細):**
    *   **過去問:** "Pope attempted to encourage peace ... despite not acknowledging" (教皇の曖昧な対応)
    *   **Original:** "Pope declared the charter invalid ... triggered a civil war" (教皇の否定と内戦)

*   **Q4/41 (内容一致 - 意義・解釈):**
    *   **過去問:** "brought a new way of looking at the duty" (国民主権の先駆け)
    *   **Original:** "foundational document of democracy despite originally serving narrow aristocratic interests" (民主主義の基盤、しかし元は貴族の利益)`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Relative Clause & Earning Result (関係代名詞と結果を表す分詞構文 - 導入)
> John had lost most of England's territories in France to the French king, **earning him the unflattering nickname "John Lackland."**

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause (主節):</strong> John had lost most of England's territories... (ジョンは領土の大半を失った)</li>
    <li><strong>Result Participle (結果分詞):</strong> earning him the unflattering nickname (その結果、不名誉なあだ名を得た)</li>
    <li><strong>Appositive (同格):</strong> "John Lackland" (ジョン・ラックランド＝「土地なしジョン」)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>SV, Ving (result):</strong> カンマ+現在分詞で「～した結果、…した」という因果関係を表す。設問1で問われる「なぜ貴族が不満を抱いたか」の伏線となる重要な構文です。
</div>

### Sentence 2: Concession & Principle (譲歩と原則の提示)
> Most significantly, it established the principle **that even the king was subject to the law** and could not arbitrarily punish free men without a lawful judgment.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Adverbial Phrase (副詞句):</strong> Most significantly (最も重要なことに)</li>
    <li><strong>Main Clause (主節):</strong> it established the principle (それは原則を確立した)</li>
    <li><strong>That-clause (that節 - 同格):</strong> that even the king was subject to the law (王でさえ法に従う)</li>
    <li><strong>Parallel Structure (並列):</strong> and could not arbitrarily punish... (そして恣意的に罰することはできない)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Even + 主語:</strong> 「～でさえ」という強調表現。王という最高権力者でさえ法に従うべきという革命的な概念を強調。設問2の正答根拠となる重要な文です。
</div>

### Sentence 3: Contrast & Concession (対比と譲歩 - 結論)
> Today, the Magna Carta is celebrated as a foundational document of democracy, symbolizing the idea that governments must respect the rule of law and the rights of individuals. **Some historians, however, point out that** its original purpose was simply to protect the privileges of wealthy barons rather than to establish universal human rights.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Assertion (主張):</strong> the Magna Carta is celebrated as... (マグナ・カルタは～として称賛されている)</li>
    <li><strong>Participle (分詞):</strong> symbolizing the idea that... (～という理念を象徴する)</li>
    <li><strong>Concession Marker (譲歩の標識):</strong> Some historians, however, point out that... (しかし一部の歴史家は指摘する)</li>
    <li><strong>Rather than (対比):</strong> simply to protect... rather than to establish... (確立するためではなく、保護するためだけに)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>A, however, B:</strong> 「しかしながら」という挿入で対比を強調。「一般的な評価」と「批判的な見方」を並置することで、設問4の正答（「民主主義の基盤だが元は狭い利益のため」）の根拠を形成しています。
</div>`
    }
  },
  "2022-3-p3": {
    past: {
      title: "Competing against Braille",
      content: `## Title: Competing against Braille

Although Braille is the standard writing system for blind people today, this alphabet of raised dots representing letters was not always the only system. Another system, Boston Line Type, was created in the 1830s by Samuel Gridley Howe, a sighted instructor at a US school for blind people. Howe's system utilized the letters in the standard English alphabet used by sighted people, but they were raised so they could be felt by the fingers. Blind students, however, found it more challenging to distinguish one letter from another than they did with Braille. Nevertheless, Howe believed that the fact that reading materials could be shared by both blind and sighted readers outweighed this disadvantage. His system, he argued, would allow blind people to better integrate into society; he thought Braille encouraged isolation because it was unfamiliar to most sighted people.

It gradually became clear that a system using dots was not only easier for most blind people to read but also more practical, as the dots made writing relatively simple. Writing with Boston Line Type required a special printing press, but Braille required only simple, portable tools, and it could also be typed on a typewriter. Still, despite students' overwhelming preference for Braille, Boston Line Type remained in official use in schools for the blind because it allowed sighted instructors to teach without having to learn new sets of symbols. Even when Boston Line Type lost popularity, other systems continued to be introduced, leading to what became known as the "War of the Dots," a situation in which various writing systems competed to become the standard.

One of these, called New York Point, was similar to Braille in that it consisted of raised dots. Its main advantage was that typing it required only one hand. Braille, though, could more efficiently and clearly display capital letters and certain forms of punctuation. There were other candidates as well, and debates about which was superior soon became bitter. Blind people, meanwhile, were severely inconvenienced; books they could read were already in short supply, and the competing systems further limited their options, as learning a new system required great time and effort. At one national convention, a speaker reportedly summed up their frustrations by jokingly suggesting a violent response to the next person who invents a new system of printing for the blind.

The War of the Dots continued into the 1900s, with various groups battling for funding and recognition. In the end, the blind activist Helen Keller was extremely influential in ending the debate. She stated that New York Point's weaknesses in regard to capitalization and punctuation were extremely serious and that reading it was hard on her fingers. Braille won out, and other systems gradually disappeared. Although the War of the Dots interfered with blind people's education for a time, it had a silver lining: the intense battle stimulated the development of various technologies, such as new typewriters, that greatly enhanced blind people's literacy rates and ability to participate in modern society.`,
      questions: `### Questions

**(38) What did Samuel Gridley Howe believe about Boston Line Type?**
1. The time it saved blind people in reading made up for the fact that it took much longer to write than Braille.
2. The fact that it combined raised dots with other features made it easier for blind people to use it when communicating with one another.
3. Although it was difficult for students to learn, the fact that it could be read more quickly than Braille was a major advantage.
4. It was worth adopting because of the role it could play in helping blind people to better fit in with people who are able to see.

**(39) In the second paragraph, what does the author of the passage suggest about Boston Line Type?**
1. Its continued use was not in the best interests of blind people, whose opinions about which system should be used were seemingly not taken into account.
2. Teachers at schools for the blind convinced students not to use it because they thought systems with fewer dots would be easier for students to read.
3. Despite it causing the "War of the Dots," its popularity among students was a key factor in the development of other tools for blind people.
4. It was only successfully used in writing by students in schools for the blind after the introduction of the typewriter.

**(40) The suggestion by the speaker at the national convention implies that blind people**
1. felt that neither Braille nor the New York Point system could possibly meet the needs of blind readers.
2. were unhappy that the debates over which system to use were indirectly preventing them from accessing reading materials.
3. did not like that they were being forced to use a writing system that had not been developed by a blind person.
4. were starting to think that other types of education had become much more important than learning to read books.

**(41) What conclusion does the author of the passage make about the War of the Dots?**
1. It was so serious that it is still having a negative influence on the research and development of technology for the blind today.
2. It would have caused fewer bad feelings if Helen Keller had not decided that she should become involved in it.
3. It had some positive effects in the long term because the competition led to improvements in the lives of blind people.
4. It could have been avoided if people in those days had been more accepting of technologies like the typewriter.

---
**Answer Key:** (38) 4, (39) 1, (40) 2, (41) 3`
    },
    original: {
      title: "The QWERTY Keyboard Controversy",
      content: `## Title: The QWERTY Keyboard Controversy

The keyboard layout used by billions of people today, known as QWERTY after the first six letters on the top row, was developed in the 1870s by Christopher Latham Sholes for early mechanical typewriters. According to popular legend, Sholes deliberately arranged the keys to slow down typists, preventing the mechanical arms from jamming when adjacent keys were pressed in rapid succession. While this story is disputed by historians, what is clear is that the QWERTY layout was designed primarily for the mechanical constraints of nineteenth-century technology rather than for typing efficiency. Sholes himself continued to experiment with alternative layouts even after QWERTY became commercially successful, suggesting that he recognized the limitations of his original design.

In 1936, August Dvorak, an educational psychologist, patented an alternative keyboard layout that he claimed was scientifically designed to maximize typing speed and minimize finger fatigue. The Dvorak Simplified Keyboard placed the most commonly used letters on the home row, where the fingers naturally rest, and arranged keys so that typing would alternate more evenly between hands. Studies conducted by Dvorak and his supporters suggested that typists could achieve significantly higher speeds with less effort. However, critics pointed out that many of these studies were conducted by Dvorak himself and lacked the rigorous methodology needed to prove the layout's superiority definitively. Nevertheless, the US Navy briefly adopted the Dvorak layout during World War II, claiming it allowed them to train typists faster.

The competition between QWERTY and Dvorak became a symbol of a broader debate about technology standards and the difficulty of changing established systems. Manufacturers had already invested heavily in QWERTY typewriters, and training programs worldwide were built around this layout. Even if Dvorak offered marginal improvements, the costs of switching—retraining workers, replacing equipment, and overcoming ingrained habits—seemed prohibitive. Economists later used the term "path dependence" to describe situations where early choices, even if suboptimal, become locked in because the costs of change outweigh the benefits. The QWERTY-Dvorak debate became a classic case study in this phenomenon.

Today, QWERTY remains the dominant keyboard layout despite ongoing arguments that alternatives could be more efficient. Some researchers have suggested that the efficiency gains from switching to Dvorak are minimal when modern factors like autocorrect and predictive text are considered. Others argue that the real lesson of the QWERTY story is not about keyboard layouts at all, but about how network effects and switching costs can perpetuate technologies that may not be optimal. Regardless of which interpretation is correct, the QWERTY keyboard serves as a reminder that the technologies we use are often shaped more by historical accidents and economic forces than by purely rational design choices.`,
      questions: `### Original Questions

**(1) What does the passage suggest about Christopher Latham Sholes's view of the QWERTY layout?**
1. He believed it was the most efficient design possible given the technology available at the time.
2. He was confident that no alternative layout could ever replace QWERTY in commercial markets.
3. He seemed to acknowledge that QWERTY had shortcomings even after it became widely adopted.
4. He intentionally designed it to slow down typists so they could produce higher-quality work.

**(2) According to the passage, what was one problem with August Dvorak's claims about his keyboard layout?**
1. The research supporting its advantages was not conducted with sufficient objectivity or scientific rigor.
2. The layout was too difficult for average typists to learn, making it impractical for widespread adoption.
3. It was designed for mechanical typewriters and could not be adapted for modern computer keyboards.
4. The US Navy found that typists trained on the layout performed worse than those using QWERTY.

**(3) How did the competition between QWERTY and Dvorak affect discussions about technology?**
1. It proved that newer technologies will always eventually replace older ones if given enough time.
2. It became an example of how established technologies can persist even when better alternatives may exist.
3. It demonstrated that government intervention is necessary to ensure optimal technology standards are adopted.
4. It showed that consumer preferences are the primary factor determining which technologies succeed.

**(4) What conclusion does the author draw about the QWERTY keyboard's continued dominance?**
1. It proves that QWERTY is objectively the best keyboard layout for modern typing needs.
2. It illustrates how technologies can become standard due to factors beyond pure efficiency.
3. It suggests that keyboard layout has become irrelevant in the age of touchscreens and voice recognition.
4. It indicates that economists have overestimated the importance of path dependence in technology adoption.

---
**Answer Key:** (1) 3, (2) 1, (3) 2, (4) 2`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Competing against Braille (2022年第3回) - Category: 技術標準化の競争

### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~470 words (過去問と同等)
*   **パラグラフ構成:**
    1.  **導入・背景 (Introduction):** QWERTYの起源と設計思想 (Q1)
    2.  **展開・変化 (Development):** Dvorak配列の開発と優位性の主張 (Q2)
    3.  **具体例・詳細 (Details):** 標準化競争とpath dependence (Q3)
    4.  **結論・影響 (Conclusion):** QWERTYの勝利と教訓 (Q4)

### 2. テーマの模倣 (Thematic Imitation)
*   **過去問 (Original Model):**
    *   視覚障害者向け文字システムの標準化競争
    *   Boston Line Type vs Braille vs New York Point
    *   ヘレン・ケラーの介入による決着
*   **オリジナル (New):**
    *   キーボード配列の標準化競争
    *   QWERTY vs Dvorak
    *   経済的要因（path dependence）による決着

### 3. 語彙・表現 (Lexical Level)
*   **対比表現:** "maximize typing speed" vs "slow down typists", "scientifically designed" vs "historical accidents"
*   **重要語彙:** mechanical constraints, patented, path dependence, network effects, switching costs`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **Competing against Braille (過去問)** | **The QWERTY Keyboard Controversy (オリジナル)** | **共通点 (Commonality)** |
|----------|----------------------------------------|-----------------------------------------------|--------------------------|
| **テーマ** | 視覚障害者向け文字システム | キーボード配列 | 技術標準化の競争 |
| **競合** | Boston Line Type vs Braille vs New York Point | QWERTY vs Dvorak | 複数システムの競争 |
| **決着要因** | ヘレン・ケラーの介入 | 経済的要因（path dependence） | 効率性以外の要因 |
| **副産物** | タイプライター等の技術発展 | path dependenceの概念 | 意外な収穫 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

*   **Competing against Braille (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 視覚障害者の識字システム
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 利害関係者（学生 vs 教師）の対立
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 著名人の介入による決着

*   **The QWERTY Keyboard Controversy (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> キーボード配列の効率性
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 既存インフラとの互換性問題
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 経済理論（path dependence）による説明

<br/>

### 2. 設問設計の比較 (Question Design)

*   **Q1/38 (内容一致 - 開発者の意図):**
    *   **過去問:** "worth adopting because of the role it could play in helping blind people to better fit in" (統合への信念)
    *   **Original:** "seemed to acknowledge that QWERTY had shortcomings" (開発者自身の懐疑)

*   **Q2/39 (内容一致 - 批判・問題点):**
    *   **過去問:** "continued use was not in the best interests of blind people" (利用者の利益無視)
    *   **Original:** "research supporting its advantages was not conducted with sufficient objectivity" (研究の客観性欠如)

*   **Q3/40 (内容一致 - 競争の影響):**
    *   **過去問:** "debates over which system to use were indirectly preventing them from accessing reading materials" (間接的な被害)
    *   **Original:** "established technologies can persist even when better alternatives may exist" (経済学的概念化)

*   **Q4/41 (内容一致 - 結論):**
    *   **過去問:** "had some positive effects in the long term because the competition led to improvements" (副産物としての技術進歩)
    *   **Original:** "technologies can become standard due to factors beyond pure efficiency" (効率性以外の要因)`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Concession & Suggestion (譲歩と示唆 - 導入)
> While this story is disputed by historians, **what is clear is that** the QWERTY layout was designed primarily for the mechanical constraints of nineteenth-century technology rather than for typing efficiency.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Concession Clause (譲歩節):</strong> While this story is disputed by historians (この話は歴史家により異議を唱えられているが)</li>
    <li><strong>Emphatic Subject (強調構文):</strong> what is clear is that... (明らかなのは～ということだ)</li>
    <li><strong>Rather than (対比):</strong> primarily for X rather than for Y (Yのためではなく主にXのため)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>What is clear is that...:</strong> 名詞節を主語に置く強調構文。「明らかなのは～だ」という形で主張を強調。設問1の「開発者の意図」を理解するための重要な文です。
</div>

### Sentence 2: Claim & Criticism (主張と批判)
> Studies conducted by Dvorak and his supporters suggested that typists could achieve significantly higher speeds with less effort. **However, critics pointed out that** many of these studies were conducted by Dvorak himself and lacked the rigorous methodology needed to prove the layout's superiority definitively.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Past Participle (過去分詞):</strong> Studies conducted by... (～によって実施された研究)</li>
    <li><strong>That-clause (that節):</strong> suggested that... (～であることを示唆した)</li>
    <li><strong>Contrast Marker (対比):</strong> However, critics pointed out that... (しかし批評家は指摘した)</li>
    <li><strong>Parallel Verbs (並列動詞):</strong> were conducted... and lacked... (実施され、欠いていた)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>However, critics pointed out that...:</strong> 主張に対する反論を導入する定型表現。設問2の正答根拠となる「研究の客観性への疑問」を示す重要な構文です。
</div>

### Sentence 3: Economic Concept & Example (経済概念と例示)
> Economists later used the term "path dependence" to describe situations **where early choices, even if suboptimal, become locked in** because the costs of change outweigh the benefits.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause (主節):</strong> Economists used the term... to describe (経済学者はこの用語を使って～を説明した)</li>
    <li><strong>Relative Clause (関係詞節):</strong> situations where... (～という状況)</li>
    <li><strong>Concession (譲歩):</strong> even if suboptimal (たとえ最適でなくても)</li>
    <li><strong>Cause (原因):</strong> because the costs of change outweigh the benefits (変更コストが便益を上回るため)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Even if + 形容詞:</strong> 「たとえ～でも」という譲歩を挿入。「最適でなくても固定化する」という逆説的な状況を説明。設問3と4の正答根拠となる中心概念です。
</div>`
    }
  },
  "2022-2-p3": {
    past: {
      title: "The Long Range Desert Group",
      content: `## Title: The Long Range Desert Group

During World War II, the British fought against Germany and Italy in the deserts of North Africa. Desert warfare was characterized by small battles between troops that were widely spread out, and there was a need to move quickly and at night to avoid both detection and the dangerous daytime heat. The area's vast size and sandy terrain made transporting supplies difficult, and the lack of water severely limited operations.

However, for one British army officer, Major Ralph Bagnold, these harsh conditions presented a strategic opportunity. Having spent years exploring the North African desert before the war, Bagnold knew the terrain well, and he was convinced that a small, highly mobile motorized unit that could observe and track enemy forces would be invaluable. At first, British commanders rejected his proposal to form such a unit, believing airplanes were better suited for such long-range intelligence gathering. Bagnold insisted, however, that gathering information on the ground would be advantageous, and his persistence led to the formation of the Long Range Desert Group (LRDG), with Bagnold as commander, in June 1940.

The LRDG was an unconventional unit from the outset. Usual distinctions between ranks did not apply; officers and regular soldiers were on first-name terms, and they were all expected to perform the same tasks. Rather than seeking men who would fight bravely on the battlefield, Bagnold wanted individuals with great stamina, resourcefulness, and mental toughness—men who could, for example, remain motivated and alert for extended periods despite limited access to drinking water. With specialized trucks adapted to desert conditions, the LRDG's patrols were equipped to operate independently for around three weeks and over a range of more than 1,600 kilometers. All necessary items, such as fuel, ammunition, and food, were carried by the unit, so careful supply planning was extremely important.

The LRDG's work mainly involved traveling deep behind enemy lines to observe their movements. The unit had access to a range of weaponry, and while the men were primarily trained to gather intelligence, they also planted mines and launched attacks against enemy airfields and fuel depots. When the Special Air Service (SAS)—a British army unit formed in 1941 to conduct raids behind enemy lines—suffered heavy casualties after parachuting into enemy territory on its first mission, the LRDG was tasked with bringing back the survivors. The rescue mission was a success, and because of its men's extensive knowledge of the desert, the LRDG was given the responsibility of bringing the SAS to and from all future targets by land, providing both transportation and navigation. This almost certainly helped the SAS accomplish its raids with greater success and fewer casualties.

The LRDG's greatest achievement came in 1943, when the unit found a route that enabled British forces to get around heavily defended enemy lines without being detected, allowing them to attack at weaker points in the defenses. This was a crucial turning point in the campaign in North Africa and contributed greatly to the British victory there. The LRDG went on to make significant contributions to the war effort in Europe until 1945.`,
      questions: `### Questions

**(38) Major Ralph Bagnold was able to convince British army commanders that**
1. their soldiers were having limited success on missions in the desert because they were not being supplied with the right resources.
2. the airplanes being used to fly over enemy territory and make observations in the desert were in need of major improvements.
3. he could lead a unit of men on missions in the desert despite the fact that he had little experience in such an environment.
4. using a ground-based unit to gather information about enemy activities in the desert would be an effective strategy.

**(39) What is true regarding the Long Range Desert Group (LRDG)?**
1. The characteristics of the men chosen for it and the way it operated were different from those of traditional military units.
2. Because of its limited budget, it had to manage with fewer resources and older weapons than other units.
3. There were a large number of men in its patrols, so the officers had to have special training in management techniques.
4. The success of its missions was heavily dependent on the group having supplies sent to it behind enemy lines on a regular basis.

**(40) Which of the following best describes the relationship between the LRDG and the Special Air Service (SAS)?**
1. The two units were combined so that land and air raids could be performed at the same time.
2. The similar nature of their operations led to competition between the two units and their unwillingness to assist each other.
3. The LRDG used its knowledge of the desert to help the SAS improve both the effectiveness and safety of its missions.
4. The involvement of the SAS in LRDG missions made it more difficult for the LRDG to stay behind enemy lines for long periods of time.

**(41) According to the author of the passage, what happened in 1943?**
1. A mistake made by the LRDG allowed enemy forces to strengthen their hold on territory that the British hoped to gain.
2. The transfer of the LRDG to Europe meant the SAS had no choice but to attack enemy forces in a heavily defended area without LRDG support.
3. The activities of the LRDG made it possible for the British army to gain a significant advantage that led to it defeating enemy forces in the area.
4. British commanders decided the LRDG would be better put to use defending British-held territory than observing enemy activities.

---
**Answer Key:** (38) 4, (39) 1, (40) 3, (41) 3`
    },
    original: {
      title: "The Navajo Code Talkers",
      content: `## Title: The Navajo Code Talkers

During World War II, the United States faced a critical communications challenge in the Pacific theater. Japanese intelligence officers had proven remarkably skilled at breaking American codes, often deciphering encrypted messages within hours of their transmission. This meant that even the most carefully planned operations could be compromised before they were carried out. Military commanders desperately needed a communication method that was both fast and completely secure.

The solution came from an unexpected source. Philip Johnston, a civil engineer who had grown up on a Navajo reservation and was one of the few non-Navajos fluent in their language, proposed using Navajo as the basis for an unbreakable code. At first, military officials were skeptical, as they had experimented with Native American languages during World War I with limited success. Johnston persisted, however, arranging demonstrations that proved Navajo speakers could transmit and decode complex messages far faster than existing encryption machines. The language's complex grammar, tonal qualities, and lack of a written form made it virtually impossible for outsiders to learn or analyze. In May 1942, the Marine Corps approved the program and began recruiting Navajo volunteers for this specialized mission.

The first group of twenty-nine Navajo recruits, later known as the "Original 29," developed a sophisticated code that went far beyond simple translation. Since Navajo had no words for modern military terms, they created an entirely new vocabulary: a tank became "turtle," a submarine was "iron fish," and a bomb was "egg." They also developed a letter-by-letter spelling system using Navajo words to represent English letters, with multiple words available for common letters to prevent pattern analysis. The code talkers underwent rigorous training, memorizing the entire code vocabulary—over 400 terms—as nothing could be written down for security reasons. Their ability to encode, transmit, and decode messages in under thirty seconds gave American forces an invaluable advantage in fast-moving combat situations.

The Navajo code talkers served with distinction throughout the Pacific campaign, participating in every major Marine assault from 1942 to 1945. At the Battle of Iwo Jima, six code talkers worked around the clock during the first two days, transmitting over 800 messages without a single error. Their commanding officer later stated that the Marines would never have taken Iwo Jima without the code talkers. Despite their crucial contributions, the code talkers' achievements remained classified for over two decades after the war ended, as military officials wanted to preserve the code for potential future use. It was not until 1968 that the program was declassified, and formal recognition of their service came even later—the Original 29 finally received Congressional Gold Medals in 2001, nearly sixty years after their invaluable wartime service.`,
      questions: `### Original Questions

**(1) What problem did American military forces face in the Pacific theater?**
1. The vast distances between islands made it impossible to coordinate attacks effectively.
2. Japanese forces were able to decode American communications quickly, threatening operational security.
3. American encryption machines were too slow to use during active combat situations.
4. Military commanders disagreed about which communication methods would be most effective.

**(2) What does the passage suggest about the initial response to Philip Johnston's proposal?**
1. Military officials immediately recognized the potential of using the Navajo language for secure communication.
2. The proposal was rejected because using Native American languages was considered culturally inappropriate.
3. Officials were initially doubtful but were convinced after seeing the speed and effectiveness demonstrated.
4. The Marine Corps enthusiastically supported the idea while other military branches remained opposed.

**(3) How did the Navajo code talkers handle military vocabulary that did not exist in their language?**
1. They borrowed technical terms directly from English and incorporated them into their transmissions.
2. They invented new Navajo words and developed creative substitutions for military concepts.
3. They used a simplified version of the code that avoided complex military terminology altogether.
4. They relied on written reference materials to look up unfamiliar terms during transmissions.

**(4) What does the passage indicate about the recognition the code talkers received for their service?**
1. They were immediately celebrated as war heroes and received numerous awards upon returning home.
2. Military secrecy delayed public acknowledgment of their contributions for many years after the war.
3. Their achievements were recognized promptly, but formal medals were delayed due to budget constraints.
4. The code talkers themselves requested that their service remain secret to protect their families.

---
**Answer Key:** (1) 2, (2) 3, (3) 2, (4) 2`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** The Long Range Desert Group (2022年第2回) - Category: 第二次世界大戦の特殊部隊

### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~480 words (過去問と同等)
*   **パラグラフ構成:**
    1.  **導入・背景 (Introduction):** 暗号解読問題という課題 (Q1)
    2.  **展開・変化 (Development):** ナバホ語採用の経緯 (Q2)
    3.  **具体例・詳細 (Details):** 暗号システムの開発と訓練 (Q3)
    4.  **結論・影響 (Conclusion):** 戦後の秘密と遅い評価 (Q4)

### 2. テーマの模倣 (Thematic Imitation)
*   **過去問 (Original Model):**
    *   北アフリカ砂漠戦の特殊偵察部隊
    *   型破りな組織と人材
    *   SASとの協力と1943年の決定的貢献
*   **オリジナル (New):**
    *   太平洋戦線の暗号通信部隊
    *   型破りな人材（ナバホ族）
    *   硫黄島での活躍と遅れた評価

### 3. 語彙・表現 (Lexical Level)
*   **対比表現:** "skeptical" vs "approved", "classified" vs "declassified"
*   **重要語彙:** deciphering, encrypt, fluent, tonal qualities, Congressional Gold Medals`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **The Long Range Desert Group (過去問)** | **The Navajo Code Talkers (オリジナル)** | **共通点** |
|----------|----------------------------------------|----------------------------------------|------------|
| **戦場** | 北アフリカ砂漠 | 太平洋諸島 | WW2の特殊作戦 |
| **役割** | 偵察・情報収集 | 暗号通信 | 情報戦 |
| **特徴** | 砂漠の専門知識 | ナバホ語の専門知識 | 型破りな人材 |
| **貢献** | 1943年の決定的勝利 | 硫黄島での勝利 | 戦局を変えた |

<br/>

### 1. トピックと展開の相違

*   **The Long Range Desert Group (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 砂漠での機動偵察
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> SASとの協力関係
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 即座の軍事的評価

*   **The Navajo Code Talkers (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 言語による暗号通信
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 独自の暗号システム開発
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 長年の秘密と遅れた評価

<br/>

### 2. 設問設計の比較

*   **Q1/38 (内容一致 - 提案の背景):**
    *   **過去問:** "ground-based unit to gather information" (地上偵察の有効性)
    *   **Original:** "decode American communications quickly" (暗号解読の脅威)

*   **Q2/39 (内容一致 - 部隊の特徴):**
    *   **過去問:** "characteristics of the men... were different from those of traditional military units" (型破りな組織)
    *   **Original:** "initially doubtful but were convinced" (懐疑から承認へ)

*   **Q3/40 (内容一致 - 具体的貢献):**
    *   **過去問:** "help the SAS improve both the effectiveness and safety" (SASとの協力)
    *   **Original:** "invented new Navajo words and developed creative substitutions" (暗号開発)

*   **Q4/41 (内容一致 - 結論):**
    *   **過去問:** "gain a significant advantage that led to it defeating enemy forces" (即座の戦果)
    *   **Original:** "Military secrecy delayed public acknowledgment" (遅れた評価)`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Result Clause (結果を表す構文 - 導入)
> Japanese intelligence officers had proven remarkably skilled at breaking American codes, **often deciphering encrypted messages within hours of their transmission**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause (主節):</strong> Japanese intelligence officers had proven remarkably skilled at... (日本の情報将校は～に非常に長けていることが証明されていた)</li>
    <li><strong>Adverb + Participle (副詞＋分詞):</strong> often deciphering... (しばしば解読し)</li>
    <li><strong>Time Phrase (時間表現):</strong> within hours of their transmission (送信から数時間以内に)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Prove + 形容詞 + at:</strong> 「～に長けていることが証明される」という表現。設問1の正答根拠となる「なぜ新しい暗号が必要だったか」を説明する重要な文です。
</div>

### Sentence 2: Contrast & Concession (対比と譲歩)
> At first, military officials were skeptical, as they had experimented with Native American languages during World War I with limited success. **Johnston persisted, however**, arranging demonstrations that proved Navajo speakers could transmit and decode complex messages far faster than existing encryption machines.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Initial Reaction (初期反応):</strong> military officials were skeptical (軍関係者は懐疑的だった)</li>
    <li><strong>Reason (理由):</strong> as they had experimented... with limited success (成功が限られていたため)</li>
    <li><strong>Contrast (対比):</strong> Johnston persisted, however (しかしジョンストンは粘り強く)</li>
    <li><strong>Participle (分詞):</strong> arranging demonstrations that proved... (実演を手配し、～を証明した)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>S persisted, however:</strong> 「しかしSは粘り強く続けた」という対比構文。設問2の正答根拠となる「懐疑から承認へ」という変化を示す重要な構文です。
</div>

### Sentence 3: Delayed Recognition (遅れた評価 - 結論)
> Despite their crucial contributions, the code talkers' achievements **remained classified for over two decades** after the war ended, as military officials wanted to preserve the code for potential future use.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Concession (譲歩):</strong> Despite their crucial contributions (重要な貢献にもかかわらず)</li>
    <li><strong>Main Clause (主節):</strong> achievements remained classified for over two decades (功績は20年以上機密のままだった)</li>
    <li><strong>Reason (理由):</strong> as military officials wanted to preserve the code (軍が暗号を将来に備えて保持したかったため)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Despite X, Y remained Z:</strong> 「Xにもかかわらず、YはZのままだった」という逆説構文。設問4の正答根拠となる「遅れた評価」の理由を説明する重要な文です。
</div>`
    }
  },
  "2022-1-p3": {
    past: {
      title: "The British in India",
      content: `## Title: The British in India

Established in 1600, the British-owned East India Company was one of the world's largest corporations for more than two centuries. By trading overseas with various countries, such as India and China, it was able to import luxury items from these countries into Britain. The British government received a portion of the company's vast profits, so it was more than willing to provide political support. Due to its size, power, and resources, which included a private army of hundreds of thousands of Indian soldiers, the company pressured India into accepting trade contracts that, in general, were only of benefit to the company. After winning a battle against a local ruler in the 1750s, the company seized control of one of the wealthiest provinces in India. As a result, the East India Company was no longer solely acting as a business but also as a political institution, and it began forcing Indian citizens to pay it taxes.

The East India Company gained a reputation among the countries it did business with for being untrustworthy. It also started to lose popularity within the British Parliament because the company's dishonest trading habits damaged foreign relations with China. Then, in the 1850s, angered by the way they were being treated, a group of soldiers in the East India Company's army rebelled. They marched to Delhi to restore the Indian emperor to power, and their actions caused rebellion against the British to spread to other parts of India. The rebellion was eventually brought under control after about two years, but it triggered the end of the East India Company. The British government, which blamed the East India Company for allowing the rebellion to happen, took control of India, and an era of direct British rule began. The British closed down the East India Company, removed the Indian emperor from power, and proceeded to rule India for almost a century.

While some claim that India benefited from British rule, typically using the construction of railways as an example, many historians argue that the country was negatively affected. In an effort to reinforce notions that British culture was superior, Indians were educated to have the same opinions, morals, and social preferences as the British. The British also implemented a policy known as "divide and rule," which turned Indians from different religious backgrounds against each other. The British government used this strategy to maintain its control over India, as members of these religions had joined forces during the earlier rebellion. However, nationalist feelings among Indians increased from the early 1900s, and India eventually gained its independence in the late 1940s.

Although the East India Company stopped operating more than a century ago, it has had a lasting influence. Some experts say it pioneered the concept of multinational corporations and ultimately led to the economic system of capitalism that is widespread today. Moreover, the connection between the British government and the East India Company set a precedent for using political power to help achieve business objectives.`,
      questions: `### Questions

**(38) What was one result of India doing business with the East India Company?**
1. India could afford to increase the size of its military because it was able to make trade deals with other countries.
2. India had little choice but to agree to business agreements that were unfavorable to it.
3. The Indian government needed to raise taxes in order to pay for losses from failed trade contracts.
4. The Indian government's relationship with China became worse, which almost resulted in a break in trade between the two countries.

**(39) What led to the British government taking control of India?**
1. The British government held the East India Company responsible for an uprising that occurred.
2. The Indian people voted for British rule after losing confidence in the Indian emperor's ability to rule the country effectively.
3. The Indian people asked for the help of the British in preventing a war between India and China.
4. The Indian emperor decided to join forces with the British as a political strategy to maintain control of India.

**(40) One effect that British rule had on India was that**
1. Indians were able to take part in the process of building a government that reflected their economic and social needs.
2. schools made an effort to educate their students to have an awareness of both Indian and British cultures.
3. divisions were created between different groups of Indians to prevent them from challenging British rule.
4. many of the railroads and other transportation systems built by the Indian government were destroyed.

**(41) What does the author of the passage say about the East India Company?**
1. The company prevented the British government from achieving its aim of expanding its rule to other countries in Asia.
2. While the company may have been successful during its time, its business model would not be effective in today's economy.
3. Although the company no longer exists, it has had a large impact on the present-day global economic landscape.
4. If the company had never been established, another one would likely have ended up having similar political and economic influence.

---
**Answer Key:** (38) 2, (39) 1, (40) 3, (41) 3`
    },
    original: {
      title: "The Dutch East India Company",
      content: `## Title: The Dutch East India Company

In 1602, the Dutch government granted a charter to the Verenigde Oost-Indische Compagnie (VOC), better known in English as the Dutch East India Company. This organization was given exclusive rights to conduct trade in Asia and became what many historians consider the world's first multinational corporation. The VOC was also pioneering in its financial structure: it was among the first companies to issue shares of stock to the public, allowing ordinary citizens to invest in trading voyages and share in the profits. At its peak, the VOC employed tens of thousands of workers and operated a fleet of nearly two hundred ships, making it the most powerful commercial enterprise of its era.

The VOC's primary objective was to dominate the lucrative spice trade, particularly in cloves, nutmeg, and pepper from the Indonesian archipelago. To achieve this goal, the company went far beyond simple commerce. It established fortified trading posts, negotiated treaties with local rulers, and when diplomacy failed, used military force to secure its monopolies. The company took control of key islands in what is now Indonesia, forcing local populations to cultivate spices exclusively for the VOC and often at exploitative prices. Those who resisted faced harsh punishment, and entire communities were sometimes displaced or destroyed to maintain the company's control over production.

Despite its early success, the VOC began to decline in the eighteenth century due to a combination of internal corruption and external competition. Company officials frequently engaged in private trade for personal profit, diverting resources away from the organization. Meanwhile, the British East India Company grew increasingly powerful, challenging Dutch dominance in Asian markets. The costs of maintaining military installations and fighting colonial wars also drained the company's finances. By 1799, the VOC was bankrupt and dissolved, with its assets and territories transferred to the Dutch government, which continued to rule Indonesia as a colony until the mid-twentieth century.

The legacy of the Dutch East India Company extends beyond its colonial impact. Historians credit the VOC with establishing many practices that define modern capitalism, including the concept of limited liability, which protected shareholders from losing more than their investment. The Amsterdam Stock Exchange, created largely to trade VOC shares, became a model for financial markets worldwide. However, the company's history also serves as a cautionary tale about the dangers of combining commercial and political power, as the pursuit of profit led to exploitation, violence, and the suffering of indigenous peoples across Southeast Asia.`,
      questions: `### Original Questions

**(1) What made the Dutch East India Company innovative for its time?**
1. It was the first company to receive official government support for overseas trading activities.
2. It introduced the practice of selling shares to the public and became a model for modern corporations.
3. It developed new ship designs that allowed faster travel between Europe and Asia.
4. It established a system of fair trade that benefited both European investors and Asian producers.

**(2) How did the VOC maintain its control over the spice trade?**
1. It offered local populations higher prices than its competitors to ensure their loyalty.
2. It relied primarily on diplomatic agreements and avoided using military force.
3. It used a combination of treaties, military action, and harsh treatment of resistant populations.
4. It allowed local rulers to continue governing their territories in exchange for exclusive trading rights.

**(3) According to the passage, what contributed to the decline of the VOC?**
1. A sudden decrease in European demand for Asian spices made the trade unprofitable.
2. The Dutch government withdrew its support and began favoring other trading companies.
3. Internal corruption and growing competition from rivals weakened the company's position.
4. Local populations successfully organized resistance movements that drove the VOC out of Asia.

**(4) What does the author suggest about the historical significance of the VOC?**
1. Its practices were too specific to its era to have any relevance to modern business.
2. It demonstrated that colonial enterprises could benefit indigenous populations economically.
3. It contributed to the development of modern capitalism but also caused significant harm.
4. Its failure proved that companies should avoid involvement in political affairs.

---
**Answer Key:** (1) 2, (2) 3, (3) 3, (4) 3`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** The British in India (2022年第1回) - Category: 勅許会社と植民地支配

### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~470 words (過去問と同等)
*   **パラグラフ構成:**
    1.  **導入・背景 (Introduction):** VOC設立と革新的な株式制度 (Q1)
    2.  **展開・変化 (Development):** 香辛料貿易支配と植民地経営 (Q2)
    3.  **具体例・詳細 (Details):** 衰退の原因 (Q3)
    4.  **結論・影響 (Conclusion):** 近代資本主義への遺産 (Q4)

### 2. テーマの模倣 (Thematic Imitation)
*   **過去問:** イギリス東インド会社（インド支配）
*   **オリジナル:** オランダ東インド会社（インドネシア支配）

### 3. 語彙・表現 (Lexical Level)
*   **対比表現:** "pioneering" vs "cautionary tale", "innovative" vs "exploitative"
*   **重要語彙:** charter, exclusive rights, shares of stock, limited liability, monopolies`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **The British in India (過去問)** | **The Dutch East India Company (オリジナル)** | **共通点** |
|----------|----------------------------------|---------------------------------------------|------------|
| **会社** | イギリス東インド会社 | オランダ東インド会社 (VOC) | 勅許会社 |
| **地域** | インド | インドネシア | アジア植民地 |
| **主要貿易品** | 綿織物・茶・アヘン | 香辛料（クローブ・ナツメグ） | 奢侈品 |
| **終焉** | セポイの反乱→直接統治 | 腐敗・競争→破産 | 政府への移管 |
| **遺産** | 多国籍企業・資本主義 | 株式・有限責任・証券取引所 | 近代経済 |

<br/>

### 1. トピックと展開の相違

*   **The British in India (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> インド支配と反乱
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 会社→直接統治→独立
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 植民地政策（分割統治）

*   **The Dutch East India Company (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 香辛料貿易独占
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 設立→独占→腐敗→破産
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 金融革新（株式・有限責任）

<br/>

### 2. 設問設計の比較

*   **Q1/38 (内容一致 - 会社の特徴):**
    *   **過去問:** "agree to business agreements that were unfavorable" (不利な契約)
    *   **Original:** "selling shares to the public and became a model" (株式公開)

*   **Q2/39 (内容一致 - 支配の手法):**
    *   **過去問:** "held the East India Company responsible for an uprising" (反乱の責任)
    *   **Original:** "treaties, military action, and harsh treatment" (支配の手法)

*   **Q3/40 (内容一致 - 影響/衰退):**
    *   **過去問:** "divisions were created between different groups" (分割統治)
    *   **Original:** "Internal corruption and growing competition" (腐敗と競争)

*   **Q4/41 (内容一致 - 遺産):**
    *   **過去問:** "large impact on the present-day global economic landscape" (現代経済への影響)
    *   **Original:** "contributed to modern capitalism but also caused significant harm" (資本主義への貢献と害)`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Multiple Appositions (複数の同格 - 導入)
> In 1602, the Dutch government granted a charter to the Verenigde Oost-Indische Compagnie (VOC), **better known in English as the Dutch East India Company**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Time Phrase (時間表現):</strong> In 1602 (1602年に)</li>
    <li><strong>Main Clause (主節):</strong> the Dutch government granted a charter to... (オランダ政府は勅許状を与えた)</li>
    <li><strong>Appositive (同格):</strong> (VOC) (略称)</li>
    <li><strong>Past Participle (過去分詞):</strong> better known in English as... (英語では～として知られる)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Grant A to B:</strong> 「AをBに与える」という授与動詞の用法。設問1の「会社の特徴」を理解するための導入文です。
</div>

### Sentence 2: Purpose & Method (目的と手段)
> To achieve this goal, the company went far beyond simple commerce. It established fortified trading posts, negotiated treaties with local rulers, and **when diplomacy failed, used military force** to secure its monopolies.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Purpose Clause (目的節):</strong> To achieve this goal (この目標を達成するため)</li>
    <li><strong>Main Clause (主節):</strong> the company went far beyond... (会社は～をはるかに超えた)</li>
    <li><strong>Parallel Structure (並列):</strong> established..., negotiated..., and used... (設立し、交渉し、使用した)</li>
    <li><strong>Time Clause (時間節):</strong> when diplomacy failed (外交が失敗した時)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Go far beyond X:</strong> 「Xをはるかに超える」という程度を表す表現。設問2の正答根拠となる「支配の手法」を示す重要な構文です。
</div>

### Sentence 3: Contrast & Legacy (対比と遺産 - 結論)
> Historians credit the VOC with establishing many practices that define modern capitalism, including the concept of limited liability. **However, the company's history also serves as a cautionary tale** about the dangers of combining commercial and political power.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Attribution (帰属):</strong> Historians credit the VOC with... (歴史家はVOCの功績と認める)</li>
    <li><strong>Defining Clause (定義節):</strong> practices that define modern capitalism (近代資本主義を定義する慣行)</li>
    <li><strong>Contrast (対比):</strong> However... also serves as a cautionary tale (しかし、警句としても機能する)</li>
    <li><strong>About Phrase (内容):</strong> about the dangers of combining... (商業と政治権力を結びつける危険について)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Credit A with B:</strong> 「AにBの功績を認める」という表現。設問4の正答根拠となる「資本主義への貢献と害」という両面評価を示す重要な構文です。
</div>`
    }
  },
  "2021-3-p3": {
    past: {
      title: "Mummy Brown",
      content: `## Title: Mummy Brown

Thousands of years ago, ancient Egyptians began practicing mummification—the process of drying out the bodies of the dead, treating them with various substances, and wrapping them to preserve them. It was believed this helped the dead person's spirit enter the afterlife. Beginning in the twelfth century, however, many ancient mummies met a strange fate, as a market arose in Europe for medicines made using parts of mummies. People assumed the mummies' black color was because they had been treated with bitumen—a black, petroleum-based substance that occurs naturally in the Middle East and was used by ancient societies to treat illnesses. However, while ancient Egyptians did sometimes preserve mummies by coating them with bitumen, this method had not been used on many of the mummies that were taken to Europe. Furthermore, an incorrect translation of Arabic texts resulted in the mistaken belief that the bitumen used to treat mummies actually entered their bodies.

By the eighteenth century, advances in medical knowledge had led Europeans to stop using mummy-based medicines. Nevertheless, the European public's fascination with mummies reached new heights when French leader Napoleon Bonaparte led a military campaign in Egypt, which also included a major scientific expedition that resulted in significant archaeological discoveries and the documentation of ancient artifacts. Wealthy tourists even visited Egypt to obtain ancient artifacts for their private collections. In fact, the unwrapping and displaying of mummies at private parties became a popular activity. Mummies were also used in various other ways, such as being turned into crop fertilizer and fuel for railway engines.

One particularly unusual use of mummies was as a pigment for creating brown paint. Made using ground-up mummies, the pigment, which came to be known as mummy brown, was used as early as the sixteenth century, though demand for it grew around the time of Napoleon's Egyptian campaign. Its color was praised by some European artists, who used it in artworks that can be seen in museums today. Still, the pigment had more critics than fans. Many artists complained about its poor drying ability and other negative qualities. Moreover, painting with a pigment made from deceased people increasingly came to be thought of as disrespectful—one well-known British painter who used mummy brown immediately buried his tube of the paint in the ground when he learned that real mummies had been used to produce it.

Even artists who had no objection to mummy brown could not always be certain its origin was genuine, as parts of dead animals were sometimes sold as mummy parts. Also, the fact that different manufacturers used different parts of mummies to produce the pigment meant there was little consistency among the various versions on the market. Additionally, the mummification process itself, including the substances used to preserve the bodies, underwent changes over time. These same factors make it almost impossible for researchers today to detect the presence of mummy brown in specific paintings. Given the pigment's controversial origins, however, perhaps art lovers would be shocked if they discovered that it was used in any of the paintings they admire.`,
      questions: `### Questions

**(38) According to the author of the passage, why were ancient Egyptian mummies used to make medicines in Europe?**
1. Disease was widespread in Europe at the time, so Europeans were willing to try anything to create effective medicines.
2. Because the mummies had not turned black in spite of their age, Europeans assumed they could provide health benefits.
3. Europeans mistakenly believed that a substance which was thought to have medical benefits was present in all mummies.
4. The fact that the mummies had religious significance to ancient Egyptians caused Europeans to believe they had special powers.

**(39) What is one thing we learn about Napoleon Bonaparte's military campaign in Egypt?**
1. A number of leaders saw it as a reason to also invade Egypt, which led to the destruction of many ancient artifacts.
2. It revealed information about ancient Egyptian culture that led Europeans to change their opinion of medicines made from mummies.
3. It was opposed by wealthy Europeans, who thought it would result in their collections of ancient artifacts being destroyed.
4. It led to an increased interest in mummies and inspired Europeans to use them for a number of purposes.

**(40) The author of the passage mentions the British painter in order to**
1. provide an example of how the use of mummy brown was opposed by some people because it showed a lack of respect for the dead.
2. explain why mummy brown remained popular among well-known artists in spite of its poor technical performance.
3. give support for the theory that mummy brown was superior to other paint pigments because of its unique ingredients.
4. describe one reason why some artists developed a positive view of mummy brown after initially refusing to use it.

**(41) What is one thing that makes it difficult to determine whether a painting contains mummy brown?**
1. The substances that were added to the pigment to improve its color destroyed any biological evidence that tests could have detected.
2. The way that ancient Egyptians prepared mummies changed, so the contents of the pigment were not consistent.
3. Artists mixed the pigment with other types of paint before applying it to paintings, so it would only be present in very small amounts.
4. The art industry has tried to prevent researchers from conducting tests on paintings because of concerns that the results could affect their value.

---
**Answer Key:** (38) 3, (39) 4, (40) 1, (41) 2`
    },
    original: {
      title: "Tyrian Purple",
      content: `## Title: Tyrian Purple

For thousands of years, purple has been associated with royalty, power, and wealth. This connection originated in the ancient city of Tyre, located in present-day Lebanon, where Phoenician craftsmen discovered how to extract a brilliant purple dye from sea snails called murex. The process of creating what came to be known as Tyrian purple was extraordinarily labor-intensive: it required crushing thousands of snails to obtain just a few grams of dye. According to ancient sources, the smell of the rotting shellfish was so overpowering that dye workshops were forced to operate on the outskirts of cities. Despite these difficulties, the resulting color was remarkably vibrant and resistant to fading, making it highly prized throughout the ancient Mediterranean world.

The extreme rarity and cost of Tyrian purple made it accessible only to the wealthiest members of society. In ancient Rome, purple clothing became such a powerful symbol of status that its use was eventually restricted by law. Only the emperor was permitted to wear a toga entirely dyed in Tyrian purple, and senators were allowed merely a purple stripe on their garments. Anyone caught wearing unauthorized purple could face severe punishment, including death. This association between purple and imperial power was so strong that the phrase "born to the purple" came to mean being born into a royal family—a usage that persists in English to this day.

The production of authentic Tyrian purple declined sharply following the fall of the Roman Empire and the later conquest of Constantinople by the Ottoman Turks in 1453. The murex snail populations had been severely depleted by centuries of harvesting, and the knowledge of traditional dyeing techniques was gradually lost. Meanwhile, cheaper alternatives became available, including plant-based dyes and, eventually, synthetic chemicals. In 1856, an English chemist accidentally created the first synthetic purple dye, called mauveine, while attempting to synthesize quinine. This discovery revolutionized the textile industry and made purple clothing affordable for ordinary people for the first time in history.

Although Tyrian purple is no longer produced commercially, interest in this ancient dye has experienced a revival among historians and scientists. Modern researchers have successfully recreated the traditional extraction process, confirming ancient descriptions of its extraordinary color fastness. Some contemporary artists have even used authentic murex-derived purple in their work as a way of connecting with ancient traditions. The symbolic power of purple has also endured: it continues to be associated with royalty in many cultures and is commonly used in religious ceremonies and academic regalia. In this sense, the legacy of those Phoenician craftsmen who first discovered how to transform sea snails into a symbol of power remains visible in our world today.`,
      questions: `### Original Questions

**(1) What does the passage indicate about the production of Tyrian purple in ancient times?**
1. The Phoenicians kept the production method secret to maintain their monopoly on the dye trade.
2. Creating the dye required an enormous amount of raw materials and produced unpleasant side effects.
3. The process was relatively simple once craftsmen learned which species of snail to use.
4. Ancient writers exaggerated the difficulties of production to increase the dye's perceived value.

**(2) According to the passage, how was the use of purple regulated in ancient Rome?**
1. Citizens were encouraged to wear purple to display their patriotism and loyalty to the empire.
2. Religious authorities determined who was worthy of wearing purple based on moral character.
3. Laws restricted the wearing of purple to specific social classes, with the emperor having the most privileges.
4. Purple was freely available to anyone who could afford it, regardless of their social standing.

**(3) What contributed to the decline of Tyrian purple production?**
1. European consumers developed a preference for brighter colors that could not be achieved with natural dyes.
2. Environmental damage and loss of traditional knowledge combined with the availability of cheaper alternatives.
3. The Roman government banned the production of purple dye to prevent social unrest among the lower classes.
4. Scientific studies revealed that the dye contained substances harmful to human health.

**(4) What does the author suggest about the significance of Tyrian purple today?**
1. Its historical importance has been largely forgotten by modern society.
2. Scientists have proven that ancient claims about its quality were exaggerated.
3. Its symbolic associations with power and royalty continue to influence contemporary culture.
4. The high cost of authentic purple dye has prevented any serious attempts to revive its production.

---
**Answer Key:** (1) 2, (2) 3, (3) 2, (4) 3`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Mummy Brown (2021年第3回) - Category: 歴史的な顔料・染料

### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~470 words (過去問と同等)
*   **パラグラフ構成:**
    1.  **導入・背景 (Introduction):** ティリアンパープルの発見と製法 (Q1)
    2.  **展開・変化 (Development):** 権力の象徴としての法的規制 (Q2)
    3.  **具体例・詳細 (Details):** 衰退の原因 (Q3)
    4.  **結論・影響 (Conclusion):** 現代への遺産 (Q4)

### 2. テーマの模倣 (Thematic Imitation)
*   **過去問:** ミイラから作られた茶色顔料の歴史
*   **オリジナル:** 貝から抽出された紫色染料の歴史

### 3. 語彙・表現 (Lexical Level)
*   **対比表現:** "extraordinarily labor-intensive" vs "affordable for ordinary people"
*   **重要語彙:** extract, pigment, labor-intensive, depleted, synthetic, regalia`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **Mummy Brown (過去問)** | **Tyrian Purple (オリジナル)** | **共通点** |
|----------|-------------------------|------------------------------|------------|
| **材料** | ミイラ（人間の遺体） | ムレックス（貝） | 希少な天然材料 |
| **色** | 茶色 | 紫色 | 芸術用顔料/染料 |
| **文化的意味** | 医薬品への誤解 | 権力の象徴 | 文化的価値観の反映 |
| **衰退** | 倫理的問題・代替品 | 資源枯渇・合成染料 | 近代化による終焉 |

<br/>

### 1. トピックと展開の相違

*   **Mummy Brown (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 医薬品から顔料への転用
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> ナポレオン遠征→様々な用途
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 真贋問題と識別困難

*   **Tyrian Purple (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 権力の象徴としての染料
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 法的規制→衰退→合成染料
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 現代への象徴的遺産

<br/>

### 2. 設問設計の比較

*   **Q1/38 (内容一致 - 起源・誤解):**
    *   **過去問:** "mistakenly believed that a substance... was present in all mummies" (ビチューメンの誤解)
    *   **Original:** "required an enormous amount of raw materials and produced unpleasant side effects" (製法の困難さ)

*   **Q2/39 (内容一致 - 社会的影響):**
    *   **過去問:** "led to an increased interest in mummies" (ナポレオン遠征の影響)
    *   **Original:** "Laws restricted the wearing of purple to specific social classes" (法的規制)

*   **Q3/40 (内容一致 - 批判・衰退):**
    *   **過去問:** "opposed by some people because it showed a lack of respect for the dead" (倫理的批判)
    *   **Original:** "Environmental damage and loss of traditional knowledge" (衰退の原因)

*   **Q4/41 (内容一致 - 現代的意義):**
    *   **過去問:** "The way that ancient Egyptians prepared mummies changed" (識別困難の理由)
    *   **Original:** "symbolic associations with power and royalty continue to influence" (象徴の継続)`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Colon Explanation (コロンによる説明 - 導入)
> The process of creating what came to be known as Tyrian purple was extraordinarily labor-intensive**: it required crushing thousands of snails to obtain just a few grams of dye**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Subject (主語):</strong> The process of creating what came to be known as... (～として知られるようになったものを作る過程)</li>
    <li><strong>Complement (補語):</strong> was extraordinarily labor-intensive (非常に労働集約的だった)</li>
    <li><strong>Colon Explanation (コロンによる説明):</strong> it required crushing thousands of... (何千もの貝を砕く必要があった)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Colon for elaboration:</strong> コロンは前の文を具体的に説明する機能。「労働集約的」という抽象的な表現を「何千もの貝を砕く」という具体例で示しています。設問1の正答根拠となる重要な構文です。
</div>

### Sentence 2: Result & Restriction (結果と制限)
> The extreme rarity and cost of Tyrian purple made it accessible only to the wealthiest members of society. In ancient Rome, purple clothing became such a powerful symbol of status that **its use was eventually restricted by law**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Cause (原因):</strong> The extreme rarity and cost (極端な希少性とコスト)</li>
    <li><strong>Result (結果):</strong> made it accessible only to... (最も裕福な人だけがアクセスできた)</li>
    <li><strong>Such...that (程度結果構文):</strong> became such a powerful symbol... that... (あまりに強力な象徴となったので～)</li>
    <li><strong>Passive (受動態):</strong> its use was restricted by law (その使用は法律で制限された)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Such + 名詞 + that:</strong> 「あまりに～なので…」という程度結果構文。設問2の正答根拠となる「法的規制」を導く重要な構文です。
</div>

### Sentence 3: Concession & Continuation (譲歩と継続 - 結論)
> **Although Tyrian purple is no longer produced commercially**, interest in this ancient dye has experienced a revival among historians and scientists.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Concession (譲歩節):</strong> Although... is no longer produced commercially (もはや商業的に生産されていないが)</li>
    <li><strong>Main Clause (主節):</strong> interest... has experienced a revival (関心は復活を経験した)</li>
    <li><strong>Among Phrase (範囲):</strong> among historians and scientists (歴史家と科学者の間で)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Although X, Y:</strong> 「Xにもかかわらず、Y」という譲歩構文。「生産終了」と「関心の復活」という対比を示し、設問4の正答根拠となる「現代への遺産」を導く重要な構文です。
</div>`
    }
  },
  "2021-2-p3": {
    past: {
      title: "The Temples of Jayavarman VII",
      content: `## Title: The Temples of Jayavarman VII

At the height of King Jayavarman VII's rule, his Khmer empire covered most of Southeast Asia, with its center at Angkor, in present-day Cambodia. Prior to Jayavarman's rule, the political situation in the region had been unstable as a result of ongoing military struggles between shifting alliances of powerful local warlords, as well as battles between these alliances and the neighboring Cham people. After a Cham invasion defeated the Khmer empire's previous ruler, however, Jayavarman and his allies not only drove out the invaders but also managed to crush other warlords who hoped to rule the empire themselves. Jayavarman gained the throne in 1181.

Jayavarman's rule, which lasted for more than 30 years, brought peace and prosperity to the region, but he also seems to have been obsessed with constructing as many Buddhist temples as possible during his reign. Though promotion of religion had long been a fundamental part of Khmer culture, Jayavarman took it to a whole new level, building temples faster and in greater numbers than any previous king. Some researchers suggest he did this because he felt his time may be limited—he became king relatively late in life, at the age of 61, and he suffered from a long-term medical condition.

Jayavarman was a passionate follower of Buddhism, which was reflected in his concern for the well-being of his people. In addition to the many temples he built, he also built over a hundred hospitals, each employing doctors, pharmacists, and other healthcare professionals. The quality of care was advanced for the time: pulse readings were used to aid diagnoses, and butter and honey were prescribed as medicines. Supplies from the government arrived at these hospitals frequently, and it appears that any citizen in the empire, regardless of income or social standing, was eligible for treatment at no cost. Such a visible demonstration of generosity likely helped convert people to Buddhism as well as solidify Jayavarman's reputation as a king who had genuine compassion for his people.

While Jayavarman's time as king is considered by many to be the Khmer empire's golden age, it may also have paved the way for the empire's downfall. According to some researchers, Jayavarman's temple construction was evidence of his policy of centralizing power. As the king himself took ownership of the temples' lands, a unified, government-controlled system emerged, depriving local landowners of power. Meanwhile, construction of the temples required that tens of thousands of people relocate to cities, which meant there were far fewer people in rural areas to farm the land and produce food for the empire. Furthermore, the building projects used up a significant amount of the empire's wealth. These factors combined became a huge problem for later Khmer kings when the empire suffered because of droughts and monsoons. The highly centralized system lacked the wealth, agricultural labor force, and flexibility to overcome the effects of these natural disasters, leading to the empire's eventual collapse.`,
      questions: `### Questions

**(38) What is one thing that we learn about Jayavarman VII?**
1. By successfully making the Cham people allies rather than enemies, he was able to take control of the Khmer empire.
2. He was able to become the king of the Khmer empire by cooperating with other leaders in the region.
3. After tricking the previous king into attacking an enemy kingdom, he was able to take over that region as well as his own.
4. He gradually strengthened the Khmer empire in order to make it powerful enough to invade and defeat the neighboring kingdom.

**(39) The passage suggests that one reason Jayavarman built so many temples was that**
1. people demanded that the Khmer empire open itself up to Buddhism to stop the spread of a deadly disease.
2. he hoped to use the temples as a way to keep other Khmer rulers satisfied and prevent them from rebelling against his government.
3. he wanted to show his people that he was different from the previous ruler, who they felt had not been as religious as he should have been.
4. he likely believed that he did not have very long to live and wished to achieve as much as possible during his time as king.

**(40) What is true of the hospitals built by Jayavarman?**
1. They were well staffed but lacked adequate medical supplies for the large numbers of people who required treatment.
2. They provided medical treatment at the government's expense to all Khmer people who were in need of it.
3. They demonstrated that Jayavarman only had compassion for Khmer people who had accepted Buddhism.
4. They were seen by leaders in the region as an inappropriate use of funds that were supposed to be solely for the purpose of promoting Buddhism.

**(41) What was one result of Jayavarman's temple building?**
1. Local landowners felt betrayed by Jayavarman, causing many to refuse to support him when the Khmer empire was attacked.
2. It angered rural people who were forced to move to cities, so they attempted to remove Jayavarman from power.
3. It required the use of so many resources that it left the Khmer empire unable to deal with problems it faced in the future.
4. It proved valuable in diverting the attention of Khmer citizens away from the effects of frequent natural disasters in the region.

---
**Answer Key:** (38) 2, (39) 4, (40) 2, (41) 3`
    },
    original: {
      title: "Ashoka the Great and the Pillars",
      content: `## Title: Ashoka the Great and the Pillars

In the third century BCE, the Maurya Empire controlled most of the Indian subcontinent under the rule of Emperor Ashoka, one of history's most remarkable leaders. Ashoka rose to power around 268 BCE after a violent struggle for succession following his father's death. According to some accounts, he eliminated several of his brothers to secure the throne. Early in his reign, Ashoka was known as a ruthless military commander who expanded the empire through conquest. The turning point came in 261 BCE, when he led a devastating war against the kingdom of Kalinga on India's eastern coast. Though victorious, Ashoka was reportedly so horrified by the massive death and suffering the war caused—ancient sources suggest over 100,000 people died—that he underwent a profound spiritual transformation.

Following the Kalinga war, Ashoka embraced Buddhism and dedicated the remainder of his reign to promoting dharma, a concept encompassing moral law, virtue, and righteous conduct. His most visible method of spreading these teachings was through the construction of massive stone pillars, some standing over fifteen meters tall, inscribed with edicts promoting ethical behavior. These pillars, placed at significant locations throughout the empire, contained messages encouraging citizens to respect all living creatures, tell the truth, and treat others with kindness. Ashoka hoped that by publicly displaying these principles, he could transform society from within rather than ruling through fear and military force.

Ashoka's commitment to Buddhist values extended to concrete social policies that were revolutionary for his time. He established hospitals not only for humans but also for animals—a reflection of Buddhism's emphasis on compassion for all living beings. He appointed officials called dharma mahamatras to promote welfare throughout the empire and ensure fair treatment of citizens. Religious tolerance became official policy: Ashoka supported not only Buddhism but also Jainism, Hinduism, and other faiths, declaring that all religions should be respected. He also invested heavily in infrastructure, building roads, rest houses for travelers, and wells throughout the empire to improve the lives of ordinary people.

Despite Ashoka's achievements, the Maurya Empire began to decline shortly after his death around 232 BCE. Some historians argue that his pacifist policies weakened the military, leaving the empire vulnerable to external threats. Others suggest that his massive public works programs strained the treasury, while the Buddhist emphasis on non-violence may have undermined the authority needed to maintain centralized control over such a vast territory. Nevertheless, Ashoka's legacy has endured for over two millennia. The pillars he erected, many still standing today, became powerful symbols of India's cultural heritage. Modern India adopted the lion capital from one of his pillars as its national emblem, and his dharmachakra, or wheel of law, appears on the Indian flag—a lasting tribute to a king who chose moral authority over military power.`,
      questions: `### Original Questions

**(1) What does the passage tell us about how Ashoka came to power?**
1. He peacefully inherited the throne after being chosen as successor by his dying father.
2. He gained control of the empire through violent conflict with family members and military conquest.
3. He was selected by Buddhist religious leaders who believed he would promote their faith.
4. He united various Indian kingdoms through diplomatic marriages and political alliances.

**(2) According to the passage, why did Ashoka construct the stone pillars?**
1. To commemorate his military victories and remind citizens of his power as emperor.
2. To clearly mark the boundaries of his expanding empire for neighboring kingdoms.
3. To publicly communicate moral teachings and promote ethical behavior among his subjects.
4. To serve as monuments honoring Buddhist religious leaders and their contributions.

**(3) What was distinctive about Ashoka's approach to governing his empire?**
1. He relied primarily on military force and strict punishments to maintain order.
2. He implemented policies promoting welfare, tolerance, and care for all living beings.
3. He focused exclusively on Buddhist subjects while persecuting followers of other religions.
4. He delegated all administrative duties to religious officials and avoided political involvement.

**(4) What does the passage suggest about the long-term impact of Ashoka's rule?**
1. His policies may have contributed to the empire's decline, but his symbolic legacy has lasted to the present day.
2. His emphasis on military strength ensured the Maurya Empire's survival for several more centuries.
3. His religious intolerance created lasting divisions that continue to affect Indian society.
4. His public works projects were so successful that they formed the basis of India's modern infrastructure.

---
**Answer Key:** (1) 2, (2) 3, (3) 2, (4) 1`
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** The Temples of Jayavarman VII (2021年第2回) - Category: 古代アジアの王と宗教的事業

### 1. 量的構造 (Quantitative Structure)
*   **総単語数:** ~480 words (過去問と同等)
*   **パラグラフ構成:**
    1.  **導入・背景 (Introduction):** 即位の経緯（暴力的手段） (Q1)
    2.  **展開・変化 (Development):** 石柱建立の目的 (Q2)
    3.  **具体例・詳細 (Details):** 社会政策と寛容 (Q3)
    4.  **結論・影響 (Conclusion):** 帝国衰退と遺産 (Q4)

### 2. テーマの模倣 (Thematic Imitation)
*   **過去問:** クメール帝国の王、仏教、寺院建設、帝国衰退
*   **オリジナル:** マウリヤ朝の王、仏教、石柱建立、帝国衰退

### 3. 語彙・表現 (Lexical Level)
*   **対比表現:** "ruthless military commander" vs "moral authority", "ruling through fear" vs "transform society from within"
*   **重要語彙:** succession, conquest, transformation, edicts, tolerance, emblem`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| **項目** | **Jayavarman VII (過去問)** | **Ashoka the Great (オリジナル)** | **共通点** |
|----------|---------------------------|----------------------------------|------------|
| **地域** | カンボジア（クメール） | インド（マウリヤ） | 古代アジア |
| **宗教** | 仏教 | 仏教 | 仏教への傾倒 |
| **事業** | 寺院・病院建設 | 石柱・病院建設 | 大規模公共事業 |
| **結末** | 帝国衰退 | 帝国衰退 | 意図せぬ結果 |

<br/>

### 1. トピックと展開の相違

*   **Jayavarman VII (過去問):**
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 寺院建設への執着
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 中央集権化→資源枯渇
    *   <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 自然災害への脆弱性

*   **Ashoka the Great (オリジナル):**
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 戦争から平和主義への転換
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 軍事力→道徳的権威
    *   <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 現代インドへの象徴的遺産

<br/>

### 2. 設問設計の比較

*   **Q1/38 (内容一致 - 即位の経緯):**
    *   **過去問:** "cooperating with other leaders in the region" (協力による即位)
    *   **Original:** "violent conflict with family members and military conquest" (暴力的即位)

*   **Q2/39 (内容一致 - 建設の目的):**
    *   **過去問:** "did not have very long to live" (時間が限られていた)
    *   **Original:** "publicly communicate moral teachings" (道徳教育の公開)

*   **Q3/40 (内容一致 - 社会政策):**
    *   **過去問:** "medical treatment at the government's expense to all Khmer people" (無料医療)
    *   **Original:** "welfare, tolerance, and care for all living beings" (福祉と寛容)

*   **Q4/41 (内容一致 - 長期的影響):**
    *   **過去問:** "left the Khmer empire unable to deal with problems" (問題対処能力の喪失)
    *   **Original:** "may have contributed to decline, but his symbolic legacy has lasted" (衰退への寄与と遺産)`,
      syntax: `## オリジナル本文の構文解説 (Original Passage Syntax Analysis)

### Sentence 1: Reported Result (伝聞と結果 - 導入)
> Though victorious, Ashoka was reportedly so horrified by the massive death and suffering the war caused—ancient sources suggest over 100,000 people died—**that he underwent a profound spiritual transformation**.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Concession (譲歩):</strong> Though victorious (勝利したにもかかわらず)</li>
    <li><strong>Reported Speech (伝聞):</strong> was reportedly so horrified (報じられるところでは非常に恐怖した)</li>
    <li><strong>Parenthetical (挿入):</strong> —ancient sources suggest over 100,000 people died— (古代の史料によると10万人以上が死亡)</li>
    <li><strong>Result Clause (結果節):</strong> that he underwent a profound... transformation (深い精神的変容を経験した)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>So + 形容詞 + that:</strong> 「あまりに～なので…した」という程度結果構文。設問1・2の背景となる「改宗のきっかけ」を説明する重要な文です。
</div>

### Sentence 2: Purpose & Method (目的と手段)
> Ashoka hoped that **by publicly displaying these principles**, he could transform society from within rather than ruling through fear and military force.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Main Clause (主節):</strong> Ashoka hoped that... (アショーカは～を望んだ)</li>
    <li><strong>Means (手段):</strong> by publicly displaying these principles (これらの原則を公に示すことによって)</li>
    <li><strong>Goal (目的):</strong> he could transform society from within (内側から社会を変革できる)</li>
    <li><strong>Contrast (対比):</strong> rather than ruling through fear (恐怖で支配するのではなく)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>By + Ving, S + V:</strong> 「～することによって、Sは…する」という手段を表す構文。設問2の正答根拠となる「石柱の目的」を説明する重要な構文です。
</div>

### Sentence 3: Concession & Legacy (譲歩と遺産 - 結論)
> **Nevertheless, Ashoka's legacy has endured for over two millennia**. The pillars he erected, many still standing today, became powerful symbols of India's cultural heritage.

<div class="panel-success">
  <span class="panel-title">構造分解 (Structure)</span>
  <ol style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Transition (転換):</strong> Nevertheless (それにもかかわらず)</li>
    <li><strong>Main Clause (主節):</strong> Ashoka's legacy has endured for over two millennia (アショーカの遺産は2000年以上持続した)</li>
    <li><strong>Appositive (同格):</strong> many still standing today (多くが今日もなお立っている)</li>
    <li><strong>Result (結果):</strong> became powerful symbols... (強力な象徴となった)</li>
  </ol>
</div>

<div class="panel-warning">
  <span class="panel-title">ポイント (Key Point)</span>
  <strong>Nevertheless:</strong> 前文の否定的内容（帝国の衰退）を認めつつ、それでも重要な点（遺産の継続）を強調。設問4の正答根拠となる「衰退したが遺産は残る」という両面評価を示す重要な構文です。
</div>`
    }
  }
};
