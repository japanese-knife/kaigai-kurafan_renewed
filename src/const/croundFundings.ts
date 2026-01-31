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
  matou: CrofunCardType;
  knightfang: CrofunCardType;
  airbeads: CrofunCardType;
  hinokuni: CrofunCardType;
  karatto: CrofunCardType;
}

export const CROUD_FUNDINGS_DATA: DataObjectType = {
  // 1️⃣ MATOU Kimono Travel Hoodie
  matou: {
    userName: "MATOU（製作者チーム）",
    userImgSrc: "MATOU.avif",
    tag: "アパレル / トラベル",
    title: "MATOU Kimono Travel Hoodie – 日本製ハンドメイド トラベルフーディ",
    imgSrc: "MATOU_HOODIE.avif",
    description:
      "日本の伝統的な着物生地を使った100%ハンドメイドのトラベルフーディ。6つの高機能ポケット、内蔵アイマスク、サングラスホルダーなど旅先の快適性を追求。上質素材と職人技が融合したラグジュアリーな一着。",
    nowOpen: true,
    commingSoon: false,
    progress: 0,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: null,
    place: "日本",
    plan: "standard",
  },

  // 2️⃣ KNIGHT FANG
  knightfang: {
    userName: "KNIGHT FANG 開発チーム",
    userImgSrc: "KNIGHT_FANG.avif",
    tag: "EDCナイフ / チタン",
    title: "KNIGHT FANG — チタン製EDCナイフ",
    imgSrc: "KNIGHT_FANG_KNIFE.avif",
    description:
      "軽量オールブラックのチタン製EDCナイフ。高い耐久性と鋭い切れ味を兼ね備え、日常使いからアウトドアまで対応。ShadowEdgeシリーズの出発点となるKickstarter限定モデル。",
    nowOpen: true,
    commingSoon: false,
    progress: 0,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: null,
    place: "日本",
    plan: "basic",
  },

  // 3️⃣ Air Beads Pillow
  airbeads: {
    userName: "Air Beads",
    userImgSrc: "AIR_BEADS.avif",
    tag: "快眠 / ヘルスケア",
    title: "エアビーズ枕 | 海外クラファンで注目の快眠プロジェクト",
    imgSrc: "AIR_BEADS_PILLOW.avif",
    description:
      "国内で高評価を得たAir Beadsの海外第2弾。撮影ディレクション、コピー制作、ページ設計、広告戦略、Kickstarter運用まで一貫支援し、グローバル展開を本格化。",
    nowOpen: true,
    commingSoon: false,
    progress: 0,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: null,
    place: "日本",
    plan: "standard",
  },

  // 4️⃣ Hinokuni Urushi Knife
  hinokuni: {
    userName: "熊本の刃物工房",
    userImgSrc: "HINOKUNI.avif",
    tag: "包丁 / 伝統工芸",
    title: "Hinokuni Urushi Knife｜刀鍛冶の技を世界のキッチンへ",
    imgSrc: "HINOKUNI_URUSHI_KNIFE.avif",
    description:
      "熊本の刃物工房が手掛けた漆包丁。Kickstarterで目標の1000％を達成。ストーリー設計・翻訳・広告運用を支援し、漆と職人技の融合が海外で高評価を獲得。",
    nowOpen: true,
    commingSoon: false,
    progress: 1000,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: null,
    place: "熊本県",
    plan: "standard",
  },

  // 5️⃣ Karatto Plus
  karatto: {
    userName: "カラッとプラス",
    userImgSrc: "KARATTO_PLUS.avif",
    tag: "シューケア / デバイス",
    title: "Karatto Plus | 次世代シューズ用除湿＆消臭デバイス",
    imgSrc: "KARATTO_PLUS_DEVICE.avif",
    description:
      "1時間で湿気を81%低減、ニオイを99%除去する次世代シューケア。動画制作、ページ設計、広告集客、海外配送まで総合支援し、世界市場へ展開。",
    nowOpen: false,
    commingSoon: false,
    progress: 0,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: null,
    place: "日本",
    plan: "standard",
  },
};