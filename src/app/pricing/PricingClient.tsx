'use client';

export const dynamic = 'force-dynamic';

import React, { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './pricing.module.css';
import Header from '@/features/Header';
import Footer from '@/features/Footer';
import useResponsiveQuery from '@/hooks/useResponsiveQuery';
import SectionTitle from '@/components/SectionTitle';
import { ResponsiveImage } from '@/components/Image/ResponsiveImage';

function PricingClientInner() {
  const isMobile = useResponsiveQuery("(max-width: 768px)");
  const isIpad = useResponsiveQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const _scrollToPlan = (planId: string) => {
    const element = document.getElementById(planId);
    if (element) {
      const headerHeight = 60; // ヘッダーの高さ
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

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
              }, index * 200); // 200ms間隔で順次表示
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

  const plans = [
    {
      name: "ライトプラン",
      price: "0円",
      commission: "20%",
      color: "#43CEA2",
      bgColor: "#E8F5E8",
      description: "初めての海外クラファンに最適な基本プラン",
      features: [
        "運営・支援者とのやり取り",
        "海外向け広告（オプション）",
        "掲載後の永続販売",
        "基本的なサポート",
      ],
      notIncluded: [
        "海外配送代行",
        "プロジェクトページ制作",
        "カスタマーサポート対応",
        "プロジェクト運用",
        "画像動画撮影・編集"
      ],
      recommended: false
    },
    {
      name: "スタンダードプラン",
      price: "148,000円",
      originalPrice: "198,000円",
      commission: "20%",
      color: "#185A9D",
      bgColor: "#E3F2FD",
      description: "充実したサポートで成功確率を高めるプラン",
      features: [
        "運営・支援者とのやり取り",
        "海外向け広告（オプション）",
        "掲載後の永続販売",
        "海外配送代行",
        "プロジェクトページ制作",
        "プロジェクト運用",
        "カスタマーサポート対応"
      ],
      notIncluded: [
        "マーケティング戦略立案",
        "画像動画撮影・編集"
      ],
      recommended: false
    },
    {
      name: "フルプラン",
      price: "298,000円",
      originalPrice: "398,000円",
      commission: "20%",
      color: "#185A9D",
      bgColor: "#F5F3FF",
      description: "充実したサポートで成功確率を高めるプラン",
      features: [
        "運営・支援者とのやり取り",
        "海外向け広告（オプション）",
        "掲載後の永続販売",
        "海外配送代行",
        "プロジェクトページ制作",
        "マーケティング戦略立案",
        "画像動画撮影・編集",
        "プロジェクト運用",
        "プロジェクト進捗管理",
        "カスタマーサポート対応"
      ],
      notIncluded: [],
      recommended: true
    },
    {
      name: "プレミアムプラン",
      price: "898,000円",
      originalPrice: "1,098,000円",
      commission: "20%",
      color: "#8B5CF6",
      bgColor: "#F5F3FF",
      description: "「クラファン後も、世界で売れ続ける仕組みを。」\n海外向けECサイト制作を含む最高レベルの完全サポートプラン",
      features: [
        "運営・支援者とのやり取り",
        "海外向け広告（オプション）",
        "掲載後の永続販売",
        "海外配送代行",
        "プロジェクトページ制作",
        "画像動画撮影・編集",
        "海外向けECサイト制作・運営",
        "多言語対応ECサイト構築",
        "決済システム統合",
        "専属プロジェクトマネージャー",
        "カスタム戦略コンサルティング",
        "追加マーケティング施策",
        "優先サポート対応",
        "長期運営サポート（6ヶ月）"
      ],
      notIncluded: [],
      recommended: false
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
            <h1 className={styles.heroTitle}>料金プラン</h1>
            <p className={styles.heroSubtitle}>
              お客様のニーズに合わせた<br />
              柔軟な料金体系をご用意
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <section ref={sectionRef} className={styles.plansSection}>
            <SectionTitle title="料金プラン比較" subtitle="PRICING PLANS" />
            <div className={styles.plansGrid}>
              {plans.slice(0, 3).map((plan, index) => (
                <div 
                  key={index} 
                  data-card-index={index}
                  id={index === 0 ? 'light-plan' : index === 1 ? 'standard-plan' : 'full-plan'}
                  className={`${styles.planCard} ${plan.recommended ? styles.recommended : ''}`}
                  style={{
                    opacity: visibleCards[index] ? 1 : 0,
                    transform: visibleCards[index] ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.95)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {plan.recommended && (
                    <div className={styles.recommendedBadge}>おすすめ</div>
                  )}
                  <div className={styles.planHeader} style={{ backgroundColor: plan.bgColor }}>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <div className={styles.planPricing}>
                      {plan.originalPrice && (
                        <span className={styles.originalPrice}>¥{plan.originalPrice}</span>
                      )}
                      <span className={styles.planPrice}>¥{plan.price}</span>
                      <span className={styles.planCommission}>+ 手数料{plan.commission}</span>
                    </div>
                  </div>
                  <div className={styles.planBody}>
                    <p className={styles.planDescription}>{plan.description}</p>
                    <div className={styles.featuresSection}>
                      <h4 className={styles.featuresTitle}>含まれるサービス</h4>
                      <ul className={styles.featuresList}>
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={styles.featureItem}>
                            <span className={styles.checkIcon}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {plan.notIncluded.length > 0 && (
                        <>
                          <h4 className={styles.notIncludedTitle}>含まれないサービス</h4>
                          <ul className={styles.notIncludedList}>
                            {plan.notIncluded.map((item, itemIndex) => (
                              <li key={itemIndex} className={styles.notIncludedItem}>
                                <span className={styles.crossIcon}>×</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <section className={styles.premiumPlanSection}>
              <div id="premium-plan" className={styles.premiumPlanCard}>
                <div className={styles.premiumPlanHeader}>
                  <div className={styles.premiumPlanInfo}>
                    <h3 className={styles.premiumPlanName}>{plans[3].name}</h3>
                    <p className={styles.premiumPlanDescription}>{plans[3].description}</p>
                  </div>
                  <div className={styles.premiumPlanPricing}>
                    <span className={styles.originalPrice}>¥{plans[3].originalPrice}</span>
                    <span className={styles.premiumPlanPrice}>¥{plans[3].price}</span>
                    <span className={styles.premiumPlanCommission}>+ 手数料{plans[3].commission}</span>
                  </div>
                </div>
                <div className={styles.premiumPlanBody}>
                  <div className={styles.premiumServicesGrid}>
                    <div className={styles.premiumServiceCategory}>
                      <h4 className={styles.premiumCategoryTitle}>
                        海外クラウドファンディングサポート
                      </h4>
                      <ul className={styles.premiumFeaturesList}>
                        <li>運営・支援者とのやり取り</li>
                        <li>海外向け広告（オプション）</li>
                        <li>海外配送代行</li>
                        <li>プロジェクトページ制作</li>
                        <li>画像動画撮影・編集</li>
                        <li>プロジェクト運用</li>
                        <li>マーケティング戦略立案</li>
                        <li>プロジェクト進捗管理</li>
                        <li>カスタマーサポート対応</li>
                      </ul>
                    </div>
                    <div className={styles.premiumServiceCategory}>
                      <h4 className={styles.premiumCategoryTitle}>
                        海外向けECサイト制作
                      </h4>
                      <ul className={styles.premiumFeaturesList}>
                        <li>海外向けECサイト制作・運営</li>
                        <li>多言語対応ECサイト構築</li>
                        <li>決済システム統合</li>
                        <li>専属プロジェクトマネージャー</li>
                        <li>カスタム戦略コンサルティング</li>
                        <li>追加マーケティング施策</li>
                        <li>優先サポート対応</li>
                        <li>長期運営サポート（6ヶ月）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>

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
            海外市場への第一歩を、<br />
            今すぐ踏み出しませんか？
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            marginBottom: "40px",
            lineHeight: "1.6",
            opacity: "0.9"
          }}>
            無料ご相談では、あなたの商品の海外展開可能性を詳しく分析し、<br />
            最適なプランをご提案いたします。まずはお気軽にご相談ください。
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
            無料ご相談で海外進出の可能性を探る →
          </button>
        </div>
      </section>

      <Footer isMobile={isMobile || false} />
    </>
  );
}

export default function PricingClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PricingClientInner />
    </Suspense>
  );
}