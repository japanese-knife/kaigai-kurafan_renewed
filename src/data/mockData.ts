import { CrowdfundingProject, NewsItem } from '@/types';

// モックデータの集約
export const mockCrowdfundingProjects: CrowdfundingProject[] = [
  {
    title: "Hinokuni Urushi Knife - 日本の傑作",
    description: "隈部刃物は熊本郊外にある100年近い歴史を持つ刃物工房製作所様。資材高騰や後継者不足の課題を抱えながらも、伝統技術を守り、日本の皇室も認める、受け継がれた刀鍛冶の伝統技術を集約した包丁を世界へ。",
    location: "熊本県 下益城郡",
    startDate: "2024-05-31",
    endDate: "2025-05-31",
    isOpen: true,
    isEnded: false,
    progressPercentage: 820,
    thumbnailUrl: "KNIFE.avif",
    logoUrl: "samuraibrade.avif",
    companyName: "隈部刃物製作所",
    isVisible: true,
  },
  {
    title: "茶和花 | 日本製の茶香炉",
    description: "アートとサステナビリティを融合させたブランド「茶和花（CHAWAKA）」を展開。日本の未利用資源を活かした商品開発を通じて、持続可能なものづくりを推進。",
    location: "京都府 宇治市",
    startDate: "2024-02-09",
    endDate: "2025-02-09",
    isOpen: true,
    isEnded: false,
    progressPercentage: 273,
    thumbnailUrl: "chakouro.avif",
    logoUrl: "CHAKAWA.avif",
    companyName: "株式会社 TAJIRO",
    isVisible: true,
  },
  {
    title: "FUJI-KO II: 腰痛緩和の究極の解決策",
    description: "骨格バランスを整え体の歪みを改善する整体で、施術とセルフケアを通じて健やかな体づくりをサポートする整骨院ベストバランス様。腰痛に悩む人々が、どこにいても簡単にセルフケアを行えるマッサージ器具を開発。",
    location: "千葉県 君津市",
    startDate: "2024-08-26",
    endDate: "2024-10-26",
    isOpen: true,
    isEnded: true,
    progressPercentage: 1233,
    thumbnailUrl: "FUJIKO.avif",
    logoUrl: "fuji-ko.jpg",
    companyName: "株式会社ベストバランス",
    isVisible: true,
  },
];

export const mockNews: NewsItem[] = [
  {
    newsId: "1",
    title: "海外クラウドファンディング市場の最新動向",
    description: "2024年の海外クラウドファンディング市場は前年比15%成長を記録し、特に日本の伝統工芸品への注目が高まっています。",
    startDate: new Date().toISOString(),
    category: "市場動向",
    author: "編集部",
    image: "/images/sample-news.jpg",
    isVisible: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    newsId: "2",
    title: "成功するプロジェクトの特徴とは",
    description: "クラウドファンディングで成功を収めるプロジェクトには共通の特徴があります。ストーリーテリングの重要性について解説します。",
    startDate: new Date(Date.now() - 86400000).toISOString(),
    category: "ノウハウ",
    author: "専門家",
    image: "/images/sample-news-2.jpg",
    isVisible: true,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    newsId: "3",
    title: "新サービス「スタンダードプラン」開始のお知らせ",
    description: "より充実したサポートを提供する新プラン「スタンダードプラン」の提供を開始いたします。",
    startDate: new Date(Date.now() - 172800000).toISOString(),
    category: "お知らせ",
    author: "RE-IDEA",
    image: "/images/sample-news-3.jpg",
    isVisible: true,
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString()
  }
];