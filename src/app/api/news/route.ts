// Disabled for bolt.new deployment
// This file provides mock data instead of connecting to external API

import { NextResponse } from 'next/server';

// Mock news data for demo
const mockNews = [
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

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log('Mock news API called, returning:', mockNews.length, 'items');
    return NextResponse.json(mockNews);
  } catch (error) {
    console.warn('Mock news API error:', error);
    return NextResponse.json(mockNews, { status: 200 });
  }
}