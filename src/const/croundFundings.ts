export interface CrofunCardType {
  userName: string;
  userImgSrc: string;
  tag: string;
  title: string;
  imgSrc: string;
  description: string;
  progress: number;
  nowOpen: boolean;
  commingSoon: boolean;
  totalAmount: number;
  numOfInvestors: number;
  startDate: string | null;
  place: string;
  plan: "light" | "standard" | "basic";
  videoId?: string;
}


export interface DataObjectType {
  chawaka: CrofunCardType;
  urushi: CrofunCardType;
  uwasa: CrofunCardType;
  ybb: CrofunCardType;
  macbook: CrofunCardType;
  fujiko: CrofunCardType;
}

export const CROUD_FUNDINGS_DATA: DataObjectType = {
  // MATOU Kimono Travel Hoodie
matou: {
  userName: "MATOU",
  userImgSrc: "matou.avif",
  tag: "着物アップサイクル",
  title: "MATOU Kimono Travel Hoodie – 日本製ハンドメイド トラベルフーディ",
  description:
    "日本の伝統的な着物生地を使用した100%ハンドメイドのトラベルフーディ。合計6つの多機能ポケット、内蔵アイマスク、サングラスホルダーなど旅を快適にする工夫を凝縮。日本の職人技とラグジュアリー素材を融合した、日常から長旅まで活躍するプレミアムウェア。",
  imgSrc: "matou-hoodie.avif",
  nowOpen: true,
  commingSoon: false,
  progress: 0,
  totalAmount: 0,
  numOfInvestors: 0,
  startDate: "2025年予定",
  place: "日本",
  plan: "standard",
  videoId: undefined,
},

// KNIGHT FANG
knightfang: {
  userName: "ShadowEdge Series",
  userImgSrc: "knightfang.avif",
  tag: "EDCチタンナイフ",
  title: "KNIGHT FANG — チタン製EDCナイフ",
  description:
    "軽量オールブラック仕様のチタン製EDCナイフ。高耐久・高切れ味を兼ね備え、日常携帯からキャンプ・フィールドワークまで対応。Kickstarter限定モデルとして誕生したShadowEdgeシリーズの原点となる一本。",
  imgSrc: "knightfang-knife.avif",
  nowOpen: true,
  commingSoon: false,
  progress: 0,
  totalAmount: 0,
  numOfInvestors: 0,
  startDate: "2025年予定",
  place: "日本",
  plan: "standard",
  videoId: undefined,
},

// Air Beads Pillow
airbeads: {
  userName: "Air Beads",
  userImgSrc: "airbeads.avif",
  tag: "快眠テック",
  title: "エアビーズ枕 | 海外展開を見据えた快眠プロジェクト",
  description:
    "日本国内で高評価を得たAir Beads枕の海外クラウドファンディング第二弾。撮影ディレクション、ブランドコピー、ページデザイン、広告戦略設計、Kickstarter運用まで一貫支援。グローバル市場向けに再構築されたクリエイティブで世界展開を本格化。",
  imgSrc: "airbeads-pillow.avif",
  nowOpen: true,
  commingSoon: false,
  progress: 0,
  totalAmount: 0,
  numOfInvestors: 0,
  startDate: "2025年予定",
  place: "日本",
  plan: "premium",
  videoId: undefined,
},

// Karatto Plus
karatto: {
  userName: "Karatto Plus",
  userImgSrc: "karatto.avif",
  tag: "シューケアデバイス",
  title: "Karatto Plus | 次世代シューズ用除湿＆消臭デバイス",
  description:
    "わずか1時間で中敷きの湿気を81%低減し、ニオイを99%除去する次世代シューケアデバイス。プロモーション動画制作、ページ設計、広告集客、海外配送までトータル支援を実施し、世界市場への挑戦をサポート。",
  imgSrc: "karatto-device.avif",
  nowOpen: true,
  commingSoon: false,
  progress: 0,
  totalAmount: 0,
  numOfInvestors: 0,
  startDate: "2025年予定",
  place: "日本",
  plan: "standard",
  videoId: undefined,
},

// Hinokuni Urushi Knife
hinokuni: {
  userName: "熊本刃物工房",
  userImgSrc: "hinokuni.avif",
  tag: "漆包丁",
  title: "Hinokuni Urushi Knife｜受け継がれた刀鍛冶の技を、世界のキッチンへ",
  description:
    "熊本の刃物工房が手がける漆仕上げ包丁プロジェクト。Kickstarterで目標の1000％を短期間で達成。ストーリー設計、翻訳、広告運用を通じて“漆と職人技の融合”という独自価値を海外市場へ訴求。",
  imgSrc: "hinokuni-knife.avif",
  nowOpen: true,
  commingSoon: false,
  progress: 1000,
  totalAmount: 0,
  numOfInvestors: 0,
  startDate: "実施済",
  place: "熊本県",
  plan: "premium",
  videoId: undefined,
},