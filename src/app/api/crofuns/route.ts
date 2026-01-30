// Disabled for bolt.new deployment
// This file provides mock data instead of connecting to external API

import { NextResponse } from 'next/server';

// Mock crofun data for demo
const mockCrofuns = [
  {
    crofunId: "1",
    title: "Hinokuni Urushi Knife - 日本あ",
    description: "隈部刃物は熊本郊外にある100年近い歴史を持つ刃物工房製作所様。資材高騰や後継者不足の課題を抱えながらも、伝統技術を守り、日本の皇室も認める、受け継がれた刀鍛冶の伝統技術を集約した包丁を世界へ。",
    imageName: "KNIFE.avif",
    startDate: "2024-05-31",
    endDate: "2025-05-31",
    goalAmount: 100000,
    currentAmount: 820000,
    isVisible: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tag1: "伝統工芸",
    tag2: "包丁",
    tag3: "熊本",
    userId: "user1",
    userName: "隈部刃物製作所",
    userAddress: "熊本県 下益城郡",
    userImageName: "samuraibrade.avif"
  },
  {
    crofunId: "2",
    title: "茶和花 | 日本製の茶香炉",
    description: "アートとサステナビリティを融合させたブランド「茶和花（CHAWAKA）」を展開。日本の未利用資源を活かした商品開発を通じて、持続可能なものづくりを推進。",
    imageName: "chakouro.avif",
    startDate: "2024-02-09",
    endDate: "2025-02-09",
    goalAmount: 100000,
    currentAmount: 273000,
    isVisible: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tag1: "伝統工芸",
    tag2: "茶香炉",
    tag3: "京都",
    userId: "user2",
    userName: "株式会社 TAJIRO",
    userAddress: "京都府 宇治市",
    userImageName: "CHAKAWA.avif"
  },
  {
    crofunId: "3",
    title: "FUJI-KO II: 腰痛緩和の究極の解決策",
    description: "骨格バランスを整え体の歪みを改善する整体で、施術とセルフケアを通じて健やかな体づくりをサポートする整骨院ベストバランス様。腰痛に悩む人々が、どこにいても簡単にセルフケアを行えるマッサージ器具を開発。",
    imageName: "FUJIKO.avif",
    startDate: "2024-08-26",
    endDate: "2024-10-26",
    goalAmount: 50000,
    currentAmount: 616711,
    isVisible: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tag1: "ヘルスケア",
    tag2: "マッサージ",
    tag3: "千葉",
    userId: "user3",
    userName: "株式会社ベストバランス",
    userAddress: "千葉県 君津市",
    userImageName: "fuji-ko.jpg"
  }
];

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log('Mock crofuns API called, returning:', mockCrofuns.length, 'items');
    return NextResponse.json(mockCrofuns);
  } catch (error) {
    console.warn('Mock crofuns API error:', error);
    return NextResponse.json(mockCrofuns, { status: 200 });
  }
}