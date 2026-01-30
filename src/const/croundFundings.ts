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
  urushi: CrofunCardType;
  airbeads: CrofunCardType;
  flexsuit: CrofunCardType;
}

export const CROUD_FUNDINGS_DATA: DataObjectType = {
  // MATOU Kimono Travel Hoodie
  matou: {
    userName: "株式会社MATOU",
    userImgSrc: "CHAKAWA.avif",
    tag: "着物",
    title: "MATOU Kimono Travel Hoodie – 日本製ハンドメイド トラベルフーディ",
    description:
      "日本の伝統的な着物の美しさと現代的な機能性を融合させたトラベルウェア。職人の手作業により一枚一枚丁寧に仕立てられ、旅行やアウトドアシーンで快適さとスタイルを両立。",
    imgSrc: "chakouro.avif",
    nowOpen: true,
    commingSoon: false,
    progress: 180,
    totalAmount: 1800000,
    numOfInvestors: 45,
    startDate: "2025年2月1日",
    place: "京都府 京都市",
    plan: "standard",
    videoId: undefined,
  },

  // KNIGHT FANG
  knightfang: {
    userName: "KNIGHT FANG工房",
    userImgSrc: "samuraibrade.avif",
    imgSrc: "KNIFE.avif",
    tag: "EDCナイフ",
    title: "KNIGHT FANG — チタン製EDCナイフ",
    description:
      "航空宇宙グレードのチタン合金を使用した超軽量EDCナイフ。日常の携帯に最適な耐久性と機能性を兼ね備え、アウトドアから日常使いまで幅広いシーンで活躍する次世代ツール。",
    nowOpen: true,
    commingSoon: false,
    progress: 450,
    totalAmount: 4500000,
    numOfInvestors: 89,
    startDate: "2025年2月5日",
    place: "新潟県 燕市",
    plan: "standard",
    videoId: undefined,
  },

  // URUSHI KNIFE
  urushi: {
    userName: "隈部刃物製作所",
    userImgSrc: "samuraibrade.avif",
    imgSrc: "KNIFE.avif",
    tag: "隈部刃物",
    title: '"Hinokuni Urushi Knife" - 日本の傑作',
    description:
      "隈部刃物は熊本郊外にある100年近い歴史を持つ刃物工房製作所様。資材高騰や後継者不足の課題を抱えながらも、伝統技術を守り、日本の皇室も認める、受け継がれた刀鍛冶の伝統技術を集約した包丁を世界へ。",
    nowOpen: true,
    commingSoon: false,
    progress: 820,
    totalAmount: 8200750,
    numOfInvestors: 156,
    startDate: "2025年2月9日",
    place: "熊本県 下益城郡",
    plan: "standard",
    videoId: undefined,
  },

  // AIR BEADS PILLOW
  airbeads: {
    userName: "エアビーズ株式会社",
    userImgSrc: "uwasa.webp",
    imgSrc: "UWASA.png",
    tag: "快眠グッズ",
    title: "エアビーズ枕 | クラウドファンディング初日から注目を集める快眠プロジェクト",
    description:
      "独自開発の極小エアビーズを使用し、頭部を優しく包み込む新感覚の枕。通気性と体圧分散性に優れ、どんな寝姿勢でも快適な睡眠をサポート。発売初日から大きな反響を呼ぶ革新的な快眠ソリューション。",
    nowOpen: true,
    commingSoon: false,
    progress: 650,
    totalAmount: 6500000,
    numOfInvestors: 210,
    startDate: "2025年2月12日",
    place: "東京都 品川区",
    plan: "light",
    videoId: undefined,
  },

  // FLEX SUIT
  flexsuit: {
    userName: "フレックスウェア株式会社",
    userImgSrc: "YBB.png",
    imgSrc: "YBB.png",
    tag: "軽量スーツ",
    title: "フレックススーツ | あらゆるシーンに対応する究極の軽量スーツ",
    description:
      "ビジネスからカジュアルまで、シーンを選ばない次世代スーツ。高機能素材により驚異的な軽さと伸縮性を実現し、長時間着用でも疲れにくい快適な着心地。出張や移動が多いビジネスパーソンに最適。",
    nowOpen: true,
    commingSoon: false,
    progress: 320,
    totalAmount: 3200000,
    numOfInvestors: 78,
    startDate: "2025年2月15日",
    place: "愛媛県 今治市",
    plan: "basic",
    videoId: undefined,
  },
};