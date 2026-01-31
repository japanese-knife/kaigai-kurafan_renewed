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
      "日本の伝統的な着物生地を使った100%ハンドメイドのトラベルフーディ。収納力の高い合計6つのポケットに加え、内蔵アイマスク、サングラスホルダーなど旅先の快適性と機能性を追求。上質な素材と日本の職人技によるラグジュアリーな1着として、日常使いから長旅まで幅広く活躍。",
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
      "熊本の刃物工房がKickstarterで発表し、目標の1000％を短期間で達成した包丁プロジェクト。海外クラファン.comがストーリー設計・翻訳・広告運用をサポートし、“漆と職人技の融合”が海外ユーザーに大きく響いた。",
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
      "国内で高評価を得た「Air Beads」が海外クラウドファンディング第二弾を始動。海外市場での魅せ方を徹底追求するため、撮影ディレクション・ブランドコピー・ページデザイン・広告戦略設計・Kickstarter運用サポートまで一貫して支援。世界展開を見据えたクリエイティブ戦略でグローバル拡大を本格化。",
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
      "わずか1時間で中敷きの湿気を81%低減し、ニオイを99%除去できる次世代シューケアアイテム。海外クラファン.comがプロモーション動画の撮影・編集、ページデザイン、広告集客、プロジェクト終了後の海外配送まで総合支援し、世界市場への挑戦をサポート。",
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
      "日常使いからアウトドアまで活躍する、軽量オールブラックのチタン製EDCナイフ。高い耐久性とシャープな切れ味を両立し、キャンプやフィールドワークなど幅広い場面で頼れる一本として設計。Kickstarter限定モデルとして、素材選定から仕上げまでこだわったShadowEdgeシリーズの出発点となる製品。",
    imgSrc: "KNIGHT_FANG_KNIFE.avif",
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