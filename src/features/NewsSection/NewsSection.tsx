"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { NewsItem, ResponsiveProps } from '@/types';
import { formatDate } from '@/utils/dataTransformers';
import styles from './NewsSection.module.css';

interface NewsSectionProps extends ResponsiveProps {
  news: NewsItem[];
  isLoading?: boolean;
}

const NewsSection = ({ 
  news, 
  isMobile, 
  isLoading = false 
}: NewsSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(2);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);

  // カテゴリごとの色分け
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      '市場動向': '#43CEA2',
      'プロジェクト報告': '#185A9D',
      'お知らせ': '#383E86',
      'サービス': '#6B5ACD',
      'イベント': '#2CB5C4',
      'ノウハウ': '#FF6B6B',
      '事例紹介': '#FFA726',
      'マーケティング': '#AB47BC',
      '海外進出': '#26A69A',
      'クラウドファンディング': '#5C6BC0'
    };
    return colors[category] || '#43CEA2'; // デフォルトカラー
  };

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleShowMore = () => {
    setIsExpanding(true);
    setTimeout(() => {
      setDisplayCount(prev => Math.min(prev + 3, news.length));
      setIsExpanding(false);
    }, 150);
  };

  const handleCollapse = () => {
    setIsCollapsing(true);
    setTimeout(() => {
      setDisplayCount(2);
      setIsCollapsing(false);
    }, 300);
  };

  const displayedNews = news.slice(0, displayCount);

  if (isLoading) {
    return (
      <section id="news" style={{ padding: "32px 16px", fontFamily: "sans-serif", maxWidth: 500 }}>
        <SectionTitle title="お知らせ" subtitle="NEWS" />
        <div style={{ textAlign: "center", padding: "20px" }}>読み込み中...</div>
      </section>
    );
  }

  if (news.length === 0) {
    return (
      <section id="news" style={{ padding: "32px 16px", fontFamily: "sans-serif", maxWidth: 500 }}>
        <SectionTitle title="お知らせ" subtitle="NEWS" />
        <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
          お知らせはありません
        </div>
      </section>
    );
  }

  return (
    <section id="news" style={{ padding: "56px 16px", fontFamily: "sans-serif", maxWidth: 500 }}>
      <SectionTitle title="お知らせ" subtitle="NEWS" />

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {displayedNews.map((item, index) => {
          const isOpen = openIndex === index;
          const isNewItem = index >= 2; // 最初の2件以外は新しく追加された項目
          return (
            <div 
              key={item.newsId}
              className={styles.newsItem}
              style={{
                opacity: isNewItem && isExpanding ? 0 : 1,
                transform: isNewItem && isExpanding ? 'translateY(-20px) scale(0.95)' : 'translateY(0) scale(1)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: isNewItem ? `${(index - 2) * 100}ms` : '0ms'
              }}
            >
              <div 
                className={styles.newsHeader}
                onClick={() => toggle(index)}
              >
                <div>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "8px", 
                    marginBottom: "4px" 
                  }}>
                    <span style={{
                      backgroundColor: getCategoryColor(item.category),
                      color: "white",
                      padding: "2px 8px",
                      borderRadius: "12px",
                      fontSize: "0.7rem",
                      fontWeight: "600",
                      whiteSpace: "nowrap"
                    }}>
                      {item.category}
                    </span>
                    <span className={styles.newsDate}>
                      {formatDate(item.startDate)}
                    </span>
                  </div>
                  <h6 className={styles.newsTitle}>
                    {item.title}
                  </h6>
                </div>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles.expandIcon}
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <polyline
                    points="6 9 12 15 18 9"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div 
                className={styles.newsContent}
                style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div 
                  className={styles.newsContentInner}
                  style={{
                    padding: isOpen ? "12px 0 8px 0" : "0",
                    fontSize: "0.9rem",
                    color: "#555",
                    lineHeight: "1.6",
                    whiteSpace: "pre-wrap",
                    transform: isOpen ? "translateY(0)" : "translateY(-10px)",
                    transitionDelay: isOpen ? "0.1s" : "0s"
                  }}
                >
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {displayCount < news.length ? (
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <button
            onClick={handleShowMore}
            style={{
              padding: "10px 70px",
              backgroundColor: "#383E86",
              color: "#fff",
              fontWeight: 500,
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: isMobile ? "1.1rem" : "1.1rem",
            }}
          >
            もっと見る
          </button>
        </div>
      ) : displayCount > 2 && (
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <button
            onClick={handleCollapse}
            disabled={isCollapsing}
            style={{
              padding: "10px 40px",
              backgroundColor: isCollapsing ? "#999" : "#383E86",
              color: "#fff",
              fontWeight: 500,
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: isMobile ? "0.9rem" : "1.1rem",
              transition: "all 0.3s ease",
              opacity: isCollapsing ? 0.7 : 1,
              transform: isCollapsing ? "scale(0.95)" : "scale(1)",
            }}
          >
            {isCollapsing ? "閉じています..." : "閉じる"}
          </button>
        </div>
      )}
    </section>
  );
};

export default NewsSection;