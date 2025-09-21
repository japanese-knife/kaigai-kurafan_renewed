'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './column.module.css';
import Header from '@/features/Header';
import Footer from '@/features/Footer';
import useResponsiveQuery from '@/hooks/useResponsiveQuery';
import SectionTitle from '@/components/SectionTitle';
import { ResponsiveImage } from '@/components/Image/ResponsiveImage';
import { useColumns } from '@/hooks/useSupabaseData';
import { getColumnImageUrl } from '@/lib/supabase';

function ColumnClientInner() {
  const _searchParams = useSearchParams();
  const router = useRouter();
  const isMobile = useResponsiveQuery("(max-width: 768px)");
  const isIpad = useResponsiveQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );

  const [selectedCategory, setSelectedCategory] = useState("すべて");

  const { columns, featuredColumn, categories, loading, getColumnsByCategory } = useColumns();
  const [filteredColumns, setFilteredColumns] = useState(columns);


  // カテゴリフィルタリング
  useEffect(() => {
    const filterColumns = async () => {
      if (selectedCategory === "すべて") {
        setFilteredColumns(columns);
      } else {
        const filtered = await getColumnsByCategory(selectedCategory);
        setFilteredColumns(filtered);
      }
    };
    filterColumns();
  }, [selectedCategory, columns, getColumnsByCategory]);

  const displayFeaturedColumn = featuredColumn || (columns.length > 0 ? columns[0] : null);

  const handleArticleClick = (articleId: number) => {
    if (articleId === -1 && displayFeaturedColumn) {
      // 注目記事の場合
      router.push(`/column/${displayFeaturedColumn.id}`);
    } else {
      // 通常記事の場合
      const targetColumn = filteredColumns[articleId];
      if (targetColumn) {
        router.push(`/column/${targetColumn.id}`);
      }
    }
  };

  if (loading) {
    return (
      <>
        <Header isMobile={isMobile} isIpad={isIpad || false} headerSize={58} />
        <div className={styles.container}>
          <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <p>読み込み中...</p>
          </div>
        </div>
        <Footer isMobile={isMobile || false} />
      </>
    );
  }

  return (
    <>
      <Header isMobile={isMobile} isIpad={isIpad || false} headerSize={58} />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <ResponsiveImage
            src="BACKGROUND.png"
            alt="background"
            fill={true}
            style={{
              position: "absolute",
              zIndex: 0,
              top: 0,
              width: "100%",
              height: "100%",
              opacity: 0.3,
              objectFit: "cover",
            }}
          />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>コラム</h1>
            <p className={styles.heroSubtitle}>
              海外クラウドファンディングと<br />
              海外進出に関する情報をお届け
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.featuredSection}>
            <SectionTitle title="注目記事" subtitle="FEATURED ARTICLE" />
            {displayFeaturedColumn && (
              <div 
                className={styles.featuredArticle}
                onClick={() => handleArticleClick(-1)}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.featuredImageContainer}>
                  <Image
                    src={getColumnImageUrl(displayFeaturedColumn?.image_url)}
                    alt={displayFeaturedColumn.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.featuredBadge}>注目</div>
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.featuredMeta}>
                    <span className={styles.featuredCategory}>{displayFeaturedColumn.category}</span>
                    <span className={styles.featuredDate}>{new Date(displayFeaturedColumn.published_date).toLocaleDateString('ja-JP')}</span>
                    <span className={styles.featuredReadTime}>📖 {displayFeaturedColumn.read_time}で読める</span>
                  </div>
                  <h2 className={styles.featuredTitle}>{displayFeaturedColumn.title}</h2>
                  <p className={styles.featuredExcerpt}>{displayFeaturedColumn.excerpt}</p>
                  <div className={styles.featuredTags}>
                    {(displayFeaturedColumn?.tags || []).map((tag, index) => (
                      <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  {!isMobile && (
                    <button 
                      className={styles.readMoreButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      記事を読む
                    </button>
                  )}
                </div>
              </div>
            )}
          </section>

          <section className={styles.articlesSection}>
            <SectionTitle title="記事一覧" subtitle="ALL ARTICLES" />
            
            <div className={styles.categoryFilter}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className={styles.articlesGrid}>
              {filteredColumns.length === 1 ? (
                // 1件の場合は注目記事と同じデザイン
                <div className={styles.featuredArticle}>
                  <div className={styles.featuredImageContainer}>
                    <Image
                      src={getColumnImageUrl(filteredColumns[0].image_url)}
                      alt={filteredColumns[0].title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.featuredContent}>
                    <div className={styles.featuredMeta}>
                      <span className={styles.featuredCategory}>{filteredColumns[0].category}</span>
                      <span className={styles.featuredDate}>{new Date(filteredColumns[0].published_date).toLocaleDateString('ja-JP')}</span>
                      <span className={styles.featuredReadTime}>📖 {filteredColumns[0].read_time}で読める</span>
                    </div>
                    <h2 className={styles.featuredTitle}>{filteredColumns[0].title}</h2>
                    <p className={styles.featuredExcerpt}>{filteredColumns[0].excerpt}</p>
                    <div className={styles.featuredTags}>
                      {(filteredColumns[0]?.tags || []).map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <button 
                      className={styles.readMoreButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleArticleClick(0);
                      }}
                    >
                      記事を読む
                    </button>
                  </div>
                </div>
              ) : (
                // 複数件の場合は通常のグリッドデザイン
                filteredColumns.map((column, index) => (
                  <article 
                    key={column.id}
                    className={styles.articleCard}
                    onClick={() => handleArticleClick(index)}
                  >
                    <div className={styles.articleImageContainer}>
                      <Image
                        src={getColumnImageUrl(column.image_url)}
                        alt={column.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.articleContent}>
                      <div className={styles.articleMeta}>
                        <span className={styles.articleCategory}>{column.category}</span>
                        <span className={styles.articleDate}>{new Date(column.published_date).toLocaleDateString('ja-JP')}</span>
                        <span className={styles.articleReadTime}>📖 {column.read_time}で読める</span>
                      </div>
                      <h3 className={styles.articleTitle}>{column.title}</h3>
                      <p className={styles.articleExcerpt}>{column.excerpt}</p>
                      <div className={styles.articleTags}>
                        {(column?.tags || []).map((tag, index) => (
                          <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </section>

          <section className={styles.relatedLinksSection}>
            <SectionTitle title="関連リンク" subtitle="RELATED LINKS" />
            <div className={styles.relatedLinksGrid}>
              {[
                {
                  title: "サービス内容",
                  description: "私たちが提供するサービスの詳細をご確認ください",
                  link: "/service"
                },
                {
                  title: "料金プラン",
                  description: "お客様のニーズに合わせた料金プランをご用意",
                  link: "/pricing"
                },
                {
                  title: "導入事例",
                  description: "成功事例と実績をご紹介します",
                  link: "/#works"
                },
                {
                  title: "無料ご相談",
                  description: "まずはお気軽にご相談ください",
                  link: "/#contact"
                }
              ].map((link, index) => (
                <div 
                  key={index} 
                  className={styles.relatedLinkCard}
                  onClick={() => window.location.href = link.link}
                  style={{ cursor: 'pointer' }}
                >
                  <h4 className={styles.relatedLinkTitle}>{link.title}</h4>
                  <p className={styles.relatedLinkDescription}>{link.description}</p>
                  <span className={styles.relatedLinkButton}>
                    詳しく見る →
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <section style={{
        background: "linear-gradient(135deg, #43CEA2 0%, #185A9D 100%)",
        padding: isMobile ? "60px 20px" : "80px 40px",
        textAlign: "center",
        color: "white",
        position: "relative",
        zIndex: 1
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: isMobile ? "1.8rem" : "2.5rem",
            fontWeight: "700",
            marginBottom: "20px",
            lineHeight: "1.3"
          }}>
            学んだ知識を<br />
            実践に繋げてみませんか
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            marginBottom: "40px",
            lineHeight: "1.6",
            opacity: "0.9"
          }}>
            コラムで得た情報を実際の挑戦に活かせるよう、安心して海外クラウドファンディングを始められる体制を整えております。<br />
            気になる方は、まずは無料ご相談から具体的な商品やご意見をお聞かせください。
          </p>
          <button
            onClick={() => window.location.href = "/#contact"}
            style={{
              background: "white",
              color: "#185A9D",
              border: "none",
              borderRadius: "50px",
              padding: isMobile ? "16px 32px" : "20px 40px",
              fontSize: isMobile ? "1.1rem" : "1.3rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              letterSpacing: "1px"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
            }}
          >
            無料ご相談で具体的な戦略を聞く →
          </button>
        </div>
      </section>

      <Footer isMobile={isMobile || false} />
    </>
  );
}

export default function ColumnClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ColumnClientInner />
    </Suspense>
  );
}