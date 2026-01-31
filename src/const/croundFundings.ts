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
  chawaka: {
    userName: "MATOU（製作者チーム）",
    userImgSrc: "matou.jpg",
    tag: "アパレル / トラベル",
    title: "MATOU Kimono Travel Hoodie – 日本製ハンドメイド トラベルフーディ",
    imgSrc: "matou.jpg",
    description:
      "海外クラファン.comがページ構成設計、ビジュアル撮影ディレクション、英語コピー制作、広告運用、プロジェクト運営までを一括支援。伝統素材の魅力を海外向けに再編集し、結果として達成率5400%を記録しました。",
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

  // KNIGHT FANG
  macbook: {
    userName: "KNIGHT FANG（開発チーム）",
    userImgSrc: "knight_fang.jpg",
    tag: "EDCナイフ / チタン",
    title: "KNIGHT FANG — チタン製EDCナイフ",
    description:
      "海外クラファン.comが製品の強み整理、英語コピー制作、ページデザイン、広告運用を担当。EDC市場向けに訴求軸を最適化し、ブランド立ち上げを支援した結果、達成率2500%を記録しました。",
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

  // Air Beads Pillow
  uwasa: {
    userName: "Air Beads（ブランド）",
    userImgSrc: "air_beads.jpg",
    imgSrc: "air_beads.jpg",
    tag: "快眠 / ヘルスケア",
    title: "エアビーズ枕 | クラウドファンディング初日から注目を集める快眠プロジェクト",
    description:
      "海外クラファン.comが撮影ディレクション、ブランドコピー制作、ページデザイン、広告運用、Kickstarter運営を一括支援。国内実績製品を睡眠テックとして再ブランディングし、海外市場で達成率1050%を記録しました。",
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
  urushi: {
    userName: "熊本の刃物工房（Hinokuni）",
    userImgSrc: "hinokuni.webp",
    imgSrc: "hinokuni.webp",
    tag: "包丁 / 伝統工芸",
    title: "Hinokuni Urushi Knife｜受け継がれた刀鍛冶の技を、世界のキッチンへ",
    description:
      "海外クラファン.comがストーリー設計、翻訳、ページ制作、広告戦略を総合支援。刀鍛冶技術と漆文化をラグジュアリークラフトとして再構築し、海外ユーザーに強く訴求した結果、達成率1010%を達成しました。",
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

  // Karatto Plus
  ybb: {
    userName: "カラッとプラス（ブランド）",
    userImgSrc: "karatto_plus.png",
    tag: "シューケア / デバイス",
    title: "Karatto Plus | 次世代シューズ用除湿＆消臭デバイス",
    description:
      "海外クラファン.comがプロモーション動画の企画・制作、ページ設計、広告運用、海外配送までワンストップ支援。機能価値を視覚化し、グローバル市場向け製品として展開した結果、達成率1367%を達成しました。",
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

  // 予備（必要なら差し替えOK）
  fujiko: {
    userName: "（準備中）",
    userImgSrc: "PLACEHOLDER.avif",
    imgSrc: "PLACEHOLDER.avif",
    tag: "Coming soon",
    title: "次のプロジェクトを追加してください",
    description:
      "この枠は予備です。新しい実績（または掲載したいプロジェクト）を1つ追加する場合に差し替えてご利用ください。",
    nowOpen: false,
    commingSoon: true,
    progress: 0,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: null,
    place: "—",
    plan: "light",
    videoId: undefined,
  },
};