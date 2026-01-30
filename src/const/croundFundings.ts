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
    userName: "MATOU株式会社",
    userImgSrc: "matou.avif",
    tag: "着物リメイク",
    title: "MATOU Kimono Travel Hoodie – 日本製ハンドメイド トラベルフーディ",
    description:
      "古い着物を再利用し、現代のライフスタイルに合わせたトラベルウェアにアップサイクル。職人の手仕事による一点物のフーディで、サステナブルかつ個性的なファッションを提案。",
    imgSrc: "matou_hoodie.avif",
    nowOpen: true,
    commingSoon: false,
    progress: 156,
    totalAmount: 468000,
    numOfInvestors: 31,
    startDate: "2025年2月1日",
    place: "京都府 京都市",
    plan: "standard",
    videoId: undefined,
  },

  // KNIGHT FANG
  knightfang: {
    userName: "ナイトファング工房",
    userImgSrc: "knightfang.avif",
    imgSrc: "knight_fang.avif",
    tag: "EDCツール",
    title: "KNIGHT FANG — チタン製EDCナイフ",
    description:
      "航空宇宙グレードのチタン合金を使用した、超軽量かつ高耐久性のEDCナイフ。日常携帯に最適なコンパクト設計ながら、プロフェッショナルユースにも耐える品質を実現。",
    nowOpen: true,
    commingSoon: false,
    progress: 342,
    totalAmount: 1025000,
    numOfInvestors: 87,
    startDate: "2025年1月20日",
    place: "新潟県 三条市",
    plan: "basic",
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
    totalAmount: 820750,
    numOfInvestors: 19,
    startDate: "2025年2月9日",
    place: "熊本県 下益城郡",
    plan: "basic",
    videoId: undefined,
  },

  // Air Beads Pillow
  airbeads: {
    userName: "スリープテック株式会社",
    userImgSrc: "sleeptech.avif",
    imgSrc: "airbeads_pillow.avif",
    tag: "快眠グッズ",
    title: "エアビーズ枕 | クラウドファンディング初日から注目を集める快眠プロジェクト",
    description:
      "特殊なマイクロビーズと通気性に優れたエアフロー構造を組み合わせた革新的な枕。首や頭の形に自然にフィットし、睡眠の質を向上。洗濯可能で衛生的に長く使える設計。",
    nowOpen: true,
    commingSoon: false,
    progress: 567,
    totalAmount: 1701000,
    numOfInvestors: 203,
    startDate: "2025年2月5日",
    place: "東京都 品川区",
    plan: "standard",
    videoId: undefined,
  },

  // Flex Suit
  flexsuit: {
    userName: "マルタカ産業",
    userImgSrc: "marutaka.webp",
    imgSrc: "flexsuit.png",
    tag: "機能性スーツ",
    title: "フレックススーツ | あらゆるシーンに対応する究極の軽量スーツ",
    description:
      "愛媛県・今治市で70年以上にわたり体操服を製造してきたマルタカ産業様。耐久性・快適性に優れた衣類づくりのノウハウを活かし、ストレッチ性と通気性を兼ね備えた次世代スーツを開発。",
    nowOpen: true,
    commingSoon: false,
    progress: 234,
    totalAmount: 702000,
    numOfInvestors: 45,
    startDate: "2025年2月15日",
    place: "愛媛県 今治市",
    plan: "basic",
    videoId: undefined,
  },
};