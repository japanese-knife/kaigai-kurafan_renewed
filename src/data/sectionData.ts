// セクション別のデータ定義
export interface ServiceItem {
  title: string;
  img: string;
  alt: string;
  subTitle: string;
  description: string;
}

export interface MeritItem {
  number: string;
  img: string;
  alt: string;
  title: string;
  content: string;
}

export interface FlowStep {
  title: string;
  subTitle: string;
  description: string;
}

export interface AboutItem {
  title: string;
  description: string;
  image: string;
}

export const serviceItems: ServiceItem[] = [
  {
    title: "業界最安値",
    img: "SERVICE1.png",
    alt: "Lowest price in the industry",
    subTitle: "良心的な\n価格設定",
    description: "弊社は、挑戦される事業者様が最大の利益を得られる料金プランを提供しております。",
  },
  {
    title: "安心の英語力",
    img: "SERVICE2.png",
    alt: "English skills",
    subTitle: "多彩な海外実績",
    description: "帰国子女や海外事業経験者など、高度な英語能力を有するスタッフが担当しています。",
  },
  {
    title: "事例分析",
    img: "SERVICE3.png",
    alt: "Overseas analysis",
    subTitle: "海外市場を熟知",
    description: "海外クラファンの商品を徹底的に分析し、その知識を元に出品する商品を選定します。",
  },
  {
    title: "海外配送代行",
    img: "SERVICE4.png",
    alt: "Overseas delivery",
    subTitle: "海外配送も\n完全サポート",
    description: "英語での手続きやトラブルが多い海外配送も、弊社が一括して代行を行っております。",
  },
];

export const meritItems: MeritItem[] = [
  {
    number: "01",
    img: "MERIT1.png",
    alt: "Large market",
    title: "圧倒的な市場規模",
    content: "海外のクラファンサイトは、特大の市場規模を誇っており、その規模は日本国内の約100倍にも上ります。そのため最終的な調達額も大きくなりやすいです。",
  },
  {
    number: "02",
    img: "MERIT2.png",
    alt: "Low risk",
    title: "リスクが低い受注生産型",
    content: "売れる数が分かってから、製造・納品することができるため、在庫を抱える心配がなく、非常に低リスクで海外進出へ挑戦できます。",
  },
  {
    number: "03",
    img: "MERIT3.png",
    alt: "Understanding demand",
    title: "海外需要の把握・顧客の獲得",
    content: "海外クラファンを行うことで、実際の需要が正確に分かります。また単なる資金調達に留まらず、海外における初期顧客との関係性を築くことができます。",
  },
  {
    number: "04",
    img: "MERIT4.png",
    alt: "Low commission",
    title: "国内よりも低い販売手数料",
    content: "海外クラファンは、国内のクラファンよりも販売手数料が低く、国内と比べても約半分ほどの10%の手数料で掲載することができます。",
  },
];

export const flowSteps: FlowStep[] = [
  {
    title: "STEP1",
    subTitle: "無料ご相談",
    description: "無料ご相談で海外クラファンの説明や商品選定のご相談を承ります。気になる方はぜひお問い合わせください。",
  },
  {
    title: "STEP2",
    subTitle: "コンテンツ制作",
    description: "ユーザーに商品の魅力を最大限伝えるために、海外向けの掲載文・動画・画像を専門デザイナーが作成します。",
  },
  {
    title: "STEP3",
    subTitle: "掲載開始",
    description: "準備が整い次第、速やかに掲載申請を行います。掲載後は、ユーザーのコメントや質問へ丁寧に対応いたします。",
  },
  {
    title: "STEP4",
    subTitle: "海外配送",
    description: "掲載後は商品を海外の支援者へ発送します。弊社が複雑な配送業務を一括代行し、安心安全の配送を実現します。",
  },
  {
    title: "STEP5",
    subTitle: "永続販売",
    description: "クラウドファンディング終了後も、弊社の日本製特化メディアを通じて継続的な販売が可能です。長期的な海外展開をサポートします。",
  },
];

export const aboutItems: AboutItem[] = [
  {
    title: "商品選定",
    description: "海外市場で売れる可能性が高い商品を、過去の成功事例や最新トレンドをもとにご提案します。初めての海外挑戦でもご安心ください。",
    image: "ABOUT-SELECTION.png"
  },
  {
    title: "掲載申請",
    description: "KickstarterやIndiegogoなど、海外クラウドファンディングプラットフォームへの掲載申請を代行いたします。煩雑な手続きもすべてお任せください。",
    image: "ABOUT-APPLICATION.png"
  },
  {
    title: "ページ構成・翻訳",
    description: "商品ページの構成から英語翻訳まで、海外の支援者に届く\"伝わる\"表現を用いて最適化。文化的なニュアンスも丁寧に調整します。",
    image: "ABOUT-PAGE.png"
  },
  {
    title: "運営・運用",
    description: "プロジェクト期間中の進捗管理、コメント返信、マーケティング施策など、運営面の負担を軽減。伴走型でご支援いたします。",
    image: "ABOUT-OPERATION.png"
  },
  {
    title: "動画・画像制作",
    description: "海外支援者の心をつかむ、視覚的に魅力的な動画・画像を制作。プロのデザイナー・ディレクターが対応いたします。",
    image: "ABOUT-CONTENTS.png"
  },
  {
    title: "海外配送代行",
    description: "言語や通関対応など複雑な海外発送業務を一括代行。世界中の支援者に安心・安全に商品をお届けします。",
    image: "ABOUT-DELIVERY.png"
  },
];

export const bannerImages = [
  "BANNER1-NEW.webp",
  "BANNER2-NEW.webp",
  "BANNER3-NEW.webp",
];