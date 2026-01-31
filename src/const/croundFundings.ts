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
  chawaka: CrofunCardType; // MATOU
  urushi: CrofunCardType; // Hinokuni Urushi Knife
  uwasa: CrofunCardType; // Air Beads
  ybb: CrofunCardType; // Karatto Plus
  macbook: CrofunCardType; // KNIGHT FANG
  fujiko: CrofunCardType; // 予備（必要なら差し替えOK）
}

export const CROUD_FUNDINGS_DATA: DataObjectType = {
  // MATOU Kimono Travel Hoodie
  urushi: {
    userName: "MATOU（製作者チーム）",
    userImgSrc: "matou.jpg",
    tag: "アパレル / トラベル",
    title: "MATOU Kimono Travel Hoodie – 日本製ハンドメイド トラベルフーディ",
    imgSrc: "matou.jpg",
    description:
      "海外クラファン.comがページ構成設計、ビジュアル撮影ディレクション、英語コピー制作、広告運用、そしてプロジェクト運営までを一括支援。伝統素材の魅力を“海外向け体験価値”として再定義し、グローバル市場へ向けたブランド訴求を成功させました。",
    nowOpen: true,
    commingSoon: false,
    progress: 0,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: null,
    place: "日本",
    plan: "standard",
    videoId: undefined,
  },

  // Hinokuni Urushi Knife
  fujiko: {
    userName: "熊本の刃物工房（Hinokuni）",
    userImgSrc: "hinokuni.webp",
    imgSrc: "hinokuni.webp",
    tag: "包丁 / 伝統工芸",
    title: "Hinokuni Urushi Knife｜受け継がれた刀鍛冶の技を、世界のキッチンへ",
    description:
      "海外クラファン.comがストーリー設計、翻訳、ページ制作、広告戦略まで総合支援。日本の刀鍛冶技術と漆文化を“ラグジュアリークラフト”として再編集し、海外ユーザーに強く訴求。結果、短期間で目標の1000％を超える支援を達成しました。",
    nowOpen: true,
    commingSoon: false,
    progress: 1000,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: null,
    place: "熊本県",
    plan: "standard",
    videoId: undefined,
  },

  // Air Beads Pillow
  uwasa: {
    userName: "Air Beads（ブランド）",
    userImgSrc: "air_beads.jpg",
    imgSrc: "air_beads.jpg",
    tag: "快眠 / ヘルスケア",
    title: "エアビーズ枕 | クラウドファンディング初日から注目を集める快眠プロジェクト",
    description:
      "海外クラファン.comが撮影ディレクション、ブランドコピー制作、ページデザイン、広告運用、Kickstarter運営まで一括支援。日本国内で実績のあった製品を“睡眠テック”として再ブランディングし、海外市場向けプロジェクトとして展開しました。",
    nowOpen: true,
    commingSoon: false,
    progress: 0,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: null,
    place: "日本",
    plan: "standard",
    videoId: undefined,
  },

  // Karatto Plus
  ybb: {
    userName: "カラッとプラス（ブランド）",
    userImgSrc: "karatto_plus.png",
    tag: "シューケア / デバイス",
    title: "Karatto Plus | 次世代シューズ用除湿＆消臭デバイス",
    description:
      "海外クラファン.comがプロモーション動画の企画・撮影・編集、ページ設計、広告集客、プロジェクト終了後の海外配送までワンストップで支援。機能訴求をビジュアル化し、グローバル市場で通用する“フットウェアケアデバイス”として展開しました。",
    imgSrc: "karatto_plus.png",
    nowOpen: false,
    commingSoon: false,
    progress: 0,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: null,
    place: "日本",
    plan: "standard",
    videoId: undefined,
  },

  // KNIGHT FANG
  chawaka: {
    userName: "KNIGHT FANG（開発チーム）",
    userImgSrc: "knight_fang.jpg",
    tag: "EDCナイフ / チタン",
    title: "KNIGHT FANG — チタン製EDCナイフ",
    description:
      "海外クラファン.comがプロダクトの強み整理、英語コピー制作、ページデザイン、広告運用を担当。EDC市場向けに“軽量チタン×実用性能”を軸とした訴求へ最適化し、グローバルユーザーに向けたブランド立ち上げを支援しました。",
    imgSrc: "knight_fang.jpg",
    nowOpen: true,
    commingSoon: false,
    progress: 0,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: null,
    place: "日本",
    plan: "basic",
    videoId: undefined,
  },
};