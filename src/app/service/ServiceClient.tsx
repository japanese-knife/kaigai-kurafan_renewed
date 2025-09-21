'use client';

export const dynamic = 'force-dynamic';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './service.module.css';
import Header from '@/features/Header';
import Footer from '@/features/Footer';
import useResponsiveQuery from '@/hooks/useResponsiveQuery';
import SectionTitle from '@/components/SectionTitle';
import { ResponsiveImage } from '@/components/Image/ResponsiveImage';
import { useEffect, useRef, useState } from 'react';

function ServiceClientInner() {
  const _searchParams = useSearchParams();
  const isMobile = useResponsiveQuery("(max-width: 768px)");
  const isIpad = useResponsiveQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: "海外クラウドファンディング掲載",
      description: "Kickstarter、Indiegogoなどの海外クラウドファンディングサイトへの掲載を代行します。",
      image: "SERVICE1.png",
      features: [
        "プロジェクトページの作成・掲載",
        "海外向けのコンテンツ制作",
        "多言語対応（英語・中国語等）",
        "プラットフォームとの連携"
      ]
    },
    {
      title: "海外配送代行",
      description: "複雑な海外配送業務を一括代行し、支援者への商品発送を確実に行います。",
      image: "SERVICE2.png",
      features: [
        "国際配送の手配",
        "通関手続きの代行",
        "配送状況の追跡",
        "配送トラブルの対応"
      ]
    },
    {
      title: "海外マーケティング",
      description: "海外市場での認知度向上とプロジェクト成功に向けたマーケティング戦略を提供します。",
      image: "SERVICE3.png",
      features: [
        "SNS広告運用",
        "インフルエンサーマーケティング",
        "プレスリリース配信",
        "コミュニティ運営"
      ]
    },
    {
      title: "コンテンツ制作",
      description: "海外市場で効果的なプロモーション動画や画像コンテンツを制作します。",
      image: "SERVICE4.png",
      features: [
        "プロモーション動画制作",
        "商品紹介動画制作",
        "画像・グラフィックデザイン",
        "ストーリーボード制作"
      ]
    }
    ,
    {
      title: "日本製特化メディア販売",
      description: "弊社の日本製特化メディアを通じて、クラウドファンディング終了後も継続的な販売機会を提供します。",
      image: "SERVICE1.png",
      features: [
        "日本製品専門メディアでの商品掲載",
        "継続的な商品プロモーション",
        "海外顧客への永続的なアプローチ",
        "ブランド認知度の長期的な向上"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-card-index]');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150); // 150ms間隔で順次表示
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const _processSteps = [
    {
      step: "STEP1",
      title: "ヒアリング・分析",
      description: "商品の特徴、ターゲット市場、予算などを詳しくお聞きし、海外市場での成功可能性を分析します。"
    },
    {
      step: "STEP2",
      title: "戦略策定",
      description: "分析結果を基に、最適なプラットフォームとマーケティング戦略を策定します。"
    },
    {
      step: "STEP3",
      title: "コンテンツ制作",
      description: "海外市場に適したプロモーション動画や画像コンテンツを制作します。"
    },
    {
      step: "STEP4",
      title: "掲載・運営",
      description: "クラウドファンディングサイトに掲載し、期間中の運営とコミュニケーション対応を行います。"
    },
    {
      step: "STEP5",
      title: "配送・サポート",
      description: "プロジェクト成功後、商品の海外配送とアフターサポートを提供します。"
    }
  ];

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
            <h1 className={styles.heroTitle}>サービス内容</h1>
            <p className={styles.heroSubtitle}>
              海外クラウドファンディング成功を<br />
              トータルでサポート
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <section ref={sectionRef} className={styles.servicesSection}>
            <SectionTitle title="サービス内容" subtitle="OUR SERVICES" />
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div 
                  key={index} 
                  data-card-index={index}
                  className={styles.serviceCard}
                  style={{
                    opacity: visibleCards[index] ? 1 : 0,
                    transform: visibleCards[index] ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.95)',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <div className={styles.serviceIconWrapper}>
                    <ResponsiveImage
                      src={service.image}
                      alt={service.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.featuresSection}>
            <SectionTitle title="サービスの特徴" subtitle="SERVICE FEATURES" />
            <div className={styles.featuresGrid}>
              {[
                {
                  title: "専門知識",
                  description: "海外クラウドファンディングの豊富な経験と専門知識を活かしたサポート"
                },
                {
                  title: "一貫したサポート",
                  description: "掲載から配送まで、プロジェクト全体を一貫してサポート"
                },
                {
                  title: "多言語対応",
                  description: "英語、中国語など多言語でのコンテンツ制作とコミュニケーション"
                },
                {
                  title: "柔軟な対応",
                  description: "お客様のニーズに合わせた柔軟なサービス提供"
                }
              ].map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <span className={styles.featureNumber}>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* 画像ギャラリーセクション */}
      <section style={{
        background: "white",
        padding: isMobile ? "60px 20px" : "80px 40px",
        textAlign: "center"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: isMobile ? "1.8rem" : "2.2rem",
            fontWeight: "700",
            color: "#383E86",
            marginBottom: "20px"
          }}>
            サービス実績ギャラリー
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            color: "#666",
            marginBottom: "40px",
            lineHeight: "1.6"
          }}>
            これまでに手がけたプロジェクトの制作過程や成果をご紹介します
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "40px"
          }}>
            {[
              { src: "examination1.png", title: "プロジェクトページ制作例", description: "海外向けに最適化されたページデザイン" },
              { src: "movie5.mp4", title: "動画制作の様子", description: "商品の魅力を伝える動画撮影" },
              { src: "shipping.png", title: "海外配送の流れ", description: "確実で安全な配送システム" }
            ].map((item, index) => (
              <div key={index} style={{
                background: "#f8f9fa",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease"
              }}>
                {item.src.endsWith('.mp4') ? (
                  <video
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      backgroundColor: "#e9ecef"
                    }}
                    autoPlay
                    muted
                    loop
                    preload="metadata"
                  >
                    <source src={`/images/${item.src}`} type="video/mp4" />
                    お使いのブラウザは動画の再生に対応していません。
                  </video>
                ) : (
                  <div style={{
                    width: "100%",
                    height: "200px",
                    background: `url(/images/${item.src}) center/cover`,
                    backgroundColor: "#e9ecef"
                  }} />
                )}
                <div style={{ padding: "20px" }}>
                  <h3 style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#383E86",
                    marginBottom: "8px"
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: "1.5",
                    margin: "0"
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: "linear-gradient(135deg, #43CEA2 0%, #185A9D 100%)",
        padding: isMobile ? "60px 20px" : "80px 40px",
        textAlign: "center",
        color: "white"
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
            充実したサービスで、<br />
            海外進出を確実に成功させましょう
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            marginBottom: "40px",
            lineHeight: "1.6",
            opacity: "0.9"
          }}>
            私たちの専門知識と豊富な経験で、あなたの商品を世界に届けます。<br />
            まずは無料ご相談にて、具体的な目標やご希望をお聞かせください。
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
            専門チームに相談してみる →
          </button>
        </div>
      </section>

      <Footer isMobile={isMobile || false} />
    </>
  );
}

export default function ServiceClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceClientInner />
    </Suspense>
  );
} 