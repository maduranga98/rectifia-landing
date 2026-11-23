/**
 * Japanese-language landing page for Japan's Whistleblower Protection Act
 * (公益通報者保護法). Served at /ja/naibu-tsuho-system and paired with the
 * English page /jurisdictions/japan-whistleblower-protection-act-compliance
 * via hreflang. Have a native Japanese reviewer check any edits to this copy.
 */

export const JA_PATH = "/ja/naibu-tsuho-system";
export const EN_JAPAN_PATH = "/jurisdictions/japan-whistleblower-protection-act-compliance";

export const jaPage = {
  metaTitle: "公益通報者保護法対応の内部通報システム",
  metaDescription:
    "2026年12月1日施行の改正公益通報者保護法に対応。従事者の指定・管理、匿名通報、通報者情報の守秘を支える内部通報・調査管理システム。従業員300人超の事業者向け。",
  kicker: "JP · 日本",
  h1: "公益通報者保護法に対応した内部通報システム",
  lede: "Rectifiaは、従業員が安心して通報できる窓口と、人事・コンプライアンス部門のための調査・案件管理をひとつにまとめたシステムです。改正公益通報者保護法の「従事者」の指定と守秘義務を前提に設計しています。",
  cta: "デモを予約する",
};

export const jaAmendments = {
  heading: "2026年12月1日から何が変わるのか",
  intro:
    "2025年に成立した改正公益通報者保護法（令和7年法律第62号）は、2026年12月1日に施行されます。主な改正点は次のとおりです。",
  items: [
    {
      title: "通報を理由とする解雇・懲戒に刑事罰",
      body: "個人は6か月以下の拘禁刑または30万円以下の罰金、法人は3,000万円以下の罰金の対象となります。配置転換は刑事罰の対象外です。",
    },
    {
      title: "1年以内の解雇・懲戒は通報が理由と推定",
      body: "公益通報から1年以内に行われた解雇・懲戒は、通報を理由とするものと推定されます（民事上）。事業者側が別の理由を示す必要があります。",
    },
    {
      title: "フリーランスも保護の対象に",
      body: "業務委託契約中のフリーランスに加え、契約終了後1年以内の者も保護されます。",
    },
    {
      title: "通報者の探索・通報の妨害を禁止",
      body: "正当な理由なく通報者を特定しようとする行為や、通報を妨げる行為は禁止されます。通報を妨げる合意は無効です。",
    },
    {
      title: "執行の強化",
      body: "従事者を指定しないなど義務を果たさない事業者に対し、消費者庁は立入検査や命令を行うことができ、命令に違反した場合は罰則があります。",
    },
  ],
  guideline:
    "2026年3月31日に公表された改正指針では、従事者を指定する際、通報者を特定させる情報についての守秘義務があること、違反した場合に刑事罰が科され得ることを本人に明示するよう求めています。",
};

export const jaObligations = {
  heading: "従業員300人超の事業者に求められること",
  intro:
    "常時使用する労働者が300人を超える事業者は、内部通報体制の整備が法的義務です。300人以下の事業者は努力義務です。",
  items: [
    { label: "内部通報体制の整備", detail: "従業員が実際に利用できる内部公益通報の受付・調査・是正の仕組み。" },
    {
      label: "従事者の指定",
      detail: "部署ではなく、特定の個人を公益通報対応業務従事者として指定し、その記録を残すこと。",
    },
    {
      label: "従事者の守秘義務",
      detail: "通報者を特定させる情報を正当な理由なく漏らした場合、30万円以下の罰金の対象となります。",
    },
    { label: "不利益取扱いの防止", detail: "通報者に対する解雇・降格などの不利益な取扱いを防ぐ措置。" },
  ],
};

export const jaFeatures = {
  heading: "Rectifiaでの対応",
  items: [
    {
      title: "従事者レジスター",
      body: "管轄に「JP」を設定すると有効になる専用機能です。一般の担当者権限とは別に、誰を・いつ従事者に指定したかを記録し、閲覧権限も指定に従います。",
    },
    {
      title: "暗号化された通報者情報",
      body: "通報者の身元情報は暗号化された保管領域に分割鍵で保護されます。身元の開示は、意図的に行われ記録される操作になります。",
    },
    {
      title: "匿名・ログイン不要の通報",
      body: "通報者はアカウントを作らずに通報でき、ケースIDとパスコードで匿名のまま進捗確認や担当者とのやり取りができます。",
    },
    {
      title: "最小限のアクセス権",
      body: "担当者は割り当てられた案件のみ閲覧できます。会社管理者（Company Admin）は設計上、案件の内容にアクセスできません。",
    },
    {
      title: "一貫性チェック",
      body: "案件を終える前に、提案された対応を類似の過去案件と照合し、似た事案で処分がばらつくことを防ぎます。AIは重大度と証拠の充足度を評価して振り分けますが、判断や処分の決定は必ず人が行います。",
    },
    {
      title: "日本語対応",
      body: "通報画面と管理画面は日本語で利用できます。",
    },
  ],
};

export const jaPricing = {
  heading: "料金",
  intro: "従業員数に応じた月額料金です。通報件数による課金はありません。500名以下は初期費用不要です。",
  tiers: [
    { name: "Starter", range: "25名まで", price: "月額59米ドル" },
    { name: "Growth", range: "26〜200名", price: "月額199米ドル" },
    { name: "Scale", range: "201〜500名", price: "月額549米ドル" },
    { name: "Enterprise", range: "501名以上", price: "従業員数に基づく料金（お問い合わせください）" },
  ],
};

export const jaFaqs: { question: string; answer: string }[] = [
  {
    question: "従業員300人以下でも内部通報制度は必要ですか？",
    answer:
      "300人以下の事業者にとって、内部通報体制の整備は努力義務です。ただし2026年12月1日以降、通報を理由とする解雇・懲戒への刑事罰や、通報者の探索・通報妨害の禁止は、事業者の規模にかかわらず適用されます。",
  },
  {
    question: "従事者とは何ですか？",
    answer:
      "公益通報対応業務従事者のことで、内部公益通報の受付・調査・是正に関わり、通報者を特定させる情報を知り得る立場として事業者が指定する個人です。正当な理由なくその情報を漏らした場合、30万円以下の罰金の対象となります。",
  },
  {
    question: "匿名で通報できますか？",
    answer:
      "はい。通報者はログイン不要で匿名のまま通報でき、発行されるケースIDとパスコードで、身元を明かさずに進捗確認や追加のやり取りができます。",
  },
  {
    question: "Rectifiaは日本語で利用できますか？",
    answer: "はい。通報画面と管理画面を日本語で利用できます。",
  },
  {
    question: "SOC 2やISO 27001の認証はありますか？",
    answer:
      "現時点では取得していません（ロードマップに含まれています）。調達要件として現時点での認証が必須の場合は、Rectifiaはまだ適していない可能性があります。",
  },
  {
    question: "このページは法的助言ですか？",
    answer:
      "いいえ。本ページは法制度についての一般的な説明であり、法的助言ではありません。具体的な対応は、日本の労働法・公益通報者保護法に詳しい弁護士にご相談ください。",
  },
];

export const jaSources = [
  {
    label: "公益通報者保護法の一部を改正する法律（概要・英訳）, Japanese Law Translation",
    href: "https://www.japaneselawtranslation.go.jp/outline/200/905R726.pdf",
  },
  {
    label: "Baker McKenzie: Japan 2026 guidelines update for Whistleblower Protection Act",
    href: "https://www.bakermckenzie.com/en/insight/publications/2026/04/japan-2026-guidelines-update-for-whistleblower-protection-act",
  },
  {
    label: "DLA Piper: Amendments to the Whistleblower law in Japan",
    href: "https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/2025/Amendments-to-the-Whistleblower-law-in-Japan-create-new-obligations-penalties-and-enforcement-powers",
  },
];
