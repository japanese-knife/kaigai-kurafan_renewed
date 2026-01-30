
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
  // CHAKORO
  chawaka: {
    userName: "株式会社 TAJIRO",
    userImgSrc: "CHAKAWA.avif",
    tag: "伝統工芸品",
    title: "茶和花 | 日本製の茶香炉",
    description:
      "アートとサステナビリティを融合させたブランド「茶和花（CHAWAKA）」を展開。日本の未利用資源を活かした商品開発を通じて、持続可能なものづくりを推進。",
    imgSrc: "chakouro.avif",
    nowOpen: true,
    commingSoon: false,
    progress: 273,
    totalAmount: 273690,
    numOfInvestors: 23,
    startDate: "2025年2月9日",
    place: "京都府 宇治市",
    plan: "basic",
    videoId: undefined,
  },

  // URUSHI KNIFE
  urushi: {
    userName: "隈部刃物製作所",
    userImgSrc: "samuraibrade.avif",
    imgSrc: "KNIFE.avif",
    tag: "隈部刃物",
    title: '"Hinokuni Urushi Knife" - 日本あ',
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

  // UWASA
  uwasa: {
    userName: "丸鷹産業",
    userImgSrc: "uwasa.webp",
    imgSrc: "UWASA.png",
    tag: "究極の軽量スーツ",
    title: "UWASA | あらゆるシーンに対応する究極の軽量スーツ",
    description:
      "愛媛県・今治市で70年以上にわたり体操服を製造してきたマルタカ産業様。耐久性・快適性に優れた衣類づくりのノウハウを活かし、カジュアルスーツなどの新商品を開発。",
    nowOpen: true,
    commingSoon: false,
    progress: 101,
    totalAmount: 100600,
    numOfInvestors: 7,
    startDate: "2025年2月15日",
    place: "東京都 町田市",
    plan: "basic",
    videoId: undefined,
  },

  // YBB
  ybb: {
    userName: "株式会社YBB",
    userImgSrc: "YBB.png",
    tag: "盆栽",
    title: "侘水景 | 日本のミニチュア・ガーデン",
    description:
      "日本の庭園文化をミニチュア化し、癒しと創造性を提供する株式会社YBB様。伝統美と自然の魅力を手軽に楽しめるプロダクトを開発し、「侘び寂びの感性」を世界に。",
    imgSrc: "YBB.png",
    nowOpen: true,
    commingSoon: false,
    progress: 0,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: "2025年3月1日",
    place: "山口県 柳井市",
    plan: "basic",
    videoId: undefined,
  },

  // MacBook
  macbook: {
    userName: "ZEN LABO",
    userImgSrc: "zenlabo.avif",
    tag: "西陣織",
    title: "「西陣織×本革」日本の職人の手で生まれる13インチMacBookケース",
    description:
      "日本の伝統工芸とレザーを融合し、PCやガジェットを優しく包むデザインに。伝統工芸をより身近に感じてもらうことを目指しているZEN LABO様。13インチのiPadケース、A4ファイルフォルダーとしても使える2way仕様のlaptop caseを開発",
    imgSrc: "MacBook.png",
    nowOpen: true,
    commingSoon: false,
    progress: 0,
    totalAmount: 0,
    numOfInvestors: 0,
    startDate: "2025年4月1日",
    place: "神奈川県 川崎市",
    plan: "basic",
    videoId: undefined,
  },

  // FUJIKO II
  fujiko: {
    userName: "株式会社ベストバランス",
    userImgSrc: "fuji-ko.jpg",
    imgSrc: "FUJIKO.avif",
    tag: "マッサージ",
    title: "FUJI-KO II: 腰痛緩和の究極の解決策",
    description:
      "骨格バランスを整え体の歪みを改善する整体で、施術とセルフケアを通じて健やかな体づくりをサポートする整骨院ベストバランス様。腰痛に悩む人々が、どこにいても簡単にセルフケアを行えるマッサージ器具を開発。",
    nowOpen: true,
    commingSoon: false,
    progress: 1233,
    totalAmount: 616711,
    numOfInvestors: 134,
    startDate: "2024年8月26日",
    place: "千葉県 君津市",
    plan: "standard",
    videoId: undefined,
  },
};
