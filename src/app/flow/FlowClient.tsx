'use client';

export const dynamic = 'force-dynamic';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './flow.module.css';
import Header from '@/features/Header';
import Footer from '@/features/Footer';
import useResponsiveQuery from '@/hooks/useResponsiveQuery';
import SectionTitle from '@/components/SectionTitle';
import FlowCard from '@/components/Card/FlowCard';
import { ResponsiveImage } from '@/components/Image/ResponsiveImage';
import { useEffect, useRef, useState } from 'react';

const detailedSteps = [
  {
    phase: "準備期間",
    steps: [
      {
        title: "初回ヒアリング",
        description: "商品の特徴、ターゲット市場、予算などを詳しくお聞きします。",
        duration: "1-2日",
        deliverables: ["海外クラファン概要資料", "初期提案書"]
      },
      {
        title: "市場調査・分析",
        description: "海外市場での競合分析と成功可能性を調査します。",
        duration: "3-5日",
        deliverables: ["単価相場調査", "競合分析"]
      },
      {
        title: "戦略策定",
        description: "マーケティング戦略とプロジェクト計画を立案します。",
        duration: "2-3日",
        deliverables: ["プロジェクト進行書類", "スケジュール表"]
      }
    ]
  },
  {
    phase: "制作期間",
    steps: [
      {
        title: "コンテンツ企画",
        description: "プロジェクトページの構成と訴求ポイントを企画します。",
        duration: "2-3日",
        deliverables: ["商品企画", "商品選定"]
      },
      {
        title: "翻訳・ローカライズ",
        description: "文化的背景を考慮した英語翻訳を行います。",
        duration: "3-5日",
        deliverables: ["英語版掲載文章", "海外クラファン特化の構成案"]
      },
      {
        title: "デザイン・動画制作",
        description: "魅力的な画像・動画コンテンツを制作します。",
        duration: "5-7日",
        deliverables: ["デザイン素材", "プロモーション動画"]
      }
    ]
  },
  {
    phase: "実行期間",
    steps: [
      {
        title: "プラットフォーム申請",
        description: "KickstarterやIndiegogoへの掲載申請を行います。",
        duration: "3-7日",
        deliverables: ["申請書類", "承認通知"]
      },
      {
        title: "プロジェクト運営",
        description: "期間中の運営業務とコミュニケーション対応を行います。",
        duration: "30-60日",
        deliverables: ["売り上げ", "市場調査"]
      },
      {
        title: "配送・永続販売",
        description: "商品配送とアフターサポートを提供します。",
        duration: "30-90日",
        deliverables: ["プロジェクトの分析データ", "永続的な販売スキーム"]
      }
    ]
  }
];

function FlowClientInner() {
  const _searchParams = useSearchParams();
  const isMobile = useResponsiveQuery("(max-width: 768px)");
  const isIpad = useResponsiveQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [visiblePhases, setVisiblePhases] = useState<boolean[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<{ [key: number]: boolean[] }>({});
  const detailedSectionRef = useRef<HTMLElement>(null);

  const mainFlows = [
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

  // 詳細プロセスセクション用のIntersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // フェーズを順次表示
            detailedSteps.forEach((_, phaseIndex) => {
              setTimeout(() => {
                setVisiblePhases(prev => {
                  const newVisible = [...prev];
                  newVisible[phaseIndex] = true;
                  return newVisible;
                });
                
                // 各フェーズ内のステップを順次表示
                detailedSteps[phaseIndex].steps.forEach((_, stepIndex) => {
                  setTimeout(() => {
                    setVisibleSteps(prev => ({
                      ...prev,
                      [phaseIndex]: {
                        ...prev[phaseIndex],
                        [stepIndex]: true
                      }
                    }));
                  }, stepIndex * 400); // ステップ間は400ms間隔
                });
              }, phaseIndex * 800); // フェーズ間は800ms間隔
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

    if (detailedSectionRef.current) {
      observer.observe(detailedSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
            <h1 className={styles.heroTitle}>一連の流れ</h1>
            <p className={styles.heroSubtitle}>
              海外クラウドファンディング成功までの<br />
              詳細なプロセスをご紹介
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <section ref={sectionRef} className={styles.mainFlowSection}>
            <SectionTitle title="基本的な流れ" subtitle="MAIN FLOW" />
            <div className={styles.flowIntro}>
              <p>海外クラウドファンディング成功までの5つのステップをご紹介します。</p>
            </div>
            <div className={styles.flowGrid}>
              {mainFlows.map((flow, index) => (
                <div 
                  key={index} 
                  data-card-index={index}
                  className={styles.flowCardWrapper}
                  style={{
                    opacity: visibleCards[index] ? 1 : 0,
                    transform: visibleCards[index] ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.95)',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <FlowCard
                    title={flow.title}
                    subTitle={flow.subTitle}
                    description={flow.description}
                    titleFontSize={20}
                    contentFontSize={16}
                    spacing={2}
                  />
                </div>
              ))}
            </div>
          </section>

          <section ref={detailedSectionRef} className={styles.detailedFlowSection}>
            <SectionTitle title="詳細プロセス" subtitle="DETAILED PROCESS" />
            <div className={styles.processIntro}>
              <p>各フェーズでの具体的な作業内容と成果物をご確認いただけます。</p>
            </div>
            <div className={styles.phasesContainer}>
              {detailedSteps.map((phase, phaseIndex) => (
                <div 
                  key={phaseIndex} 
                  className={`${styles.phaseSection} ${styles[`phase${phaseIndex + 1}`]}`}
                  style={{
                    opacity: visiblePhases[phaseIndex] ? 1 : 0,
                    transform: visiblePhases[phaseIndex] ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.95)',
                    transition: 'all 1.0s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${phaseIndex * 200}ms`
                  }}
                >
                  <h3 className={styles.phaseTitle}>{phase.phase}</h3>
                  <div className={styles.stepsContainer}>
                    {phase.steps.map((step, stepIndex) => (
                      <div 
                        key={stepIndex} 
                        className={styles.stepCard}
                        style={{
                          opacity: visibleSteps[phaseIndex]?.[stepIndex] ? 1 : 0,
                          transform: visibleSteps[phaseIndex]?.[stepIndex] ? 'translateY(0px) scale(1)' : 'translateY(20px) scale(0.98)',
                          transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
                          transitionDelay: `${stepIndex * 150}ms`
                        }}
                      >
                        <div className={styles.stepHeader}>
                          <h4 className={styles.stepTitle}>{step.title}</h4>
                          <span className={styles.stepDuration}>{step.duration}</span>
                        </div>
                        <p className={styles.stepDescription}>{step.description}</p>
                        <div className={styles.deliverablesSection}>
                          <h5 className={styles.deliverablesTitle}>成果物</h5>
                          <ul className={styles.deliverablesList}>
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className={styles.deliverableItem}>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.timelineSection}>
            <SectionTitle title="標準的なスケジュール" subtitle="TIMELINE" />
            <div className={styles.timelineIntro}>
              <p>プロジェクト開始から完了まで、約3-4ヶ月の標準的なスケジュールです。</p>
            </div>
            <div className={styles.timelineContainer}>
              {[
                { 
                  week: "1-2週目", 
                  phase: "準備期間", 
                  tasks: ["初回ヒアリング", "市場調査・分析", "戦略策定"],
                  color: "#43CEA2"
                },
                { 
                  week: "3-6週目", 
                  phase: "制作期間", 
                  tasks: ["コンテンツ企画", "翻訳・ローカライズ", "デザイン・動画制作"],
                  color: "#185A9D"
                },
                { 
                  week: "7週目", 
                  phase: "申請期間", 
                  tasks: ["プラットフォーム申請", "審査対応", "最終調整"],
                  color: "#6B5ACD"
                },
                { 
                  week: "8-12週目", 
                  phase: "実行期間", 
                  tasks: ["プロジェクト運営", "コミュニケーション対応", "進捗管理"],
                  color: "#383E86"
                },
                { 
                  week: "13週目以降", 
                  phase: "完了期間", 
                  tasks: ["商品配送", "アフターサポート", "レポート作成"],
                  color: "#2CB5C4"
                }
              ].map((schedule, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker} style={{ backgroundColor: schedule.color }}>
                    <span className={styles.timelineNumber}>{index + 1}</span>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineWeek}>{schedule.week}</div>
                    <h4 className={styles.timelinePhase}>{schedule.phase}</h4>
                    <ul className={styles.timelineTaskList}>
                      {schedule.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </div>
                  {index < 4 && <div className={styles.timelineConnector}></div>}
                </div>
              ))}
            </div>
          </section>

          <section className={styles.summarySection}>
            <SectionTitle title="プロジェクト概要" subtitle="PROJECT SUMMARY" />
            <div className={styles.summaryIntro}>
              <p>プロジェクト全体の期間と各フェーズの目安をまとめました。</p>
            </div>
            <div className={styles.summaryGrid}>
              {[
                {
                  title: "総期間",
                  value: "約5-6ヶ月",
                  description: "準備から掲載終了まで"
                },
                {
                  title: "制作期間",
                  value: "4-6週間",
                  description: "コンテンツ制作・翻訳"
                },
                {
                  title: "運営期間",
                  value: "30-60日",
                  description: "クラウドファンディング実行"
                },
                {
                  title: "配送期間",
                  value: "1-3ヶ月",
                  description: "商品配送・サポート"
                }
              ].map((item, index) => (
                <div key={index} className={styles.summaryCard}>
                  <h4 className={styles.summaryTitle}>{item.title}</h4>
                  <div className={styles.summaryValue}>{item.value}</div>
                  <p className={styles.summaryDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* プロセス詳細画像セクション */}
      <section style={{
        background: "linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)",
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
            制作プロセスの詳細
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            color: "#666",
            marginBottom: "40px",
            lineHeight: "1.6"
          }}>
            実際の制作現場や成果物をご紹介します
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "30px",
            marginBottom: "40px"
          }}>
            {[
              { 
                src: "contents4.mp4", 
                title: "コンテンツ制作の様子",
                description: "プロのデザイナーによる動画・画像制作の現場"
              },
              { 
                src: "page1.gif", 
                title: "ページ構成・翻訳作業",
                description: "海外向けに最適化されたページ制作プロセス"
              },
              { 
                src: "shipping.png", 
                title: "海外配送システム",
                description: "確実で安全な配送ネットワーク"
              },
              { 
                src: "ABOUT-OPERATION.png", 
                title: "運営・サポート体制",
                description: "24時間体制でのプロジェクト管理"
              }
            ].map((item, index) => (
              <div key={index} style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
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
                    fontSize: "1.2rem",
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
            実際に始めて一歩を踏み出したい方はこちら
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            marginBottom: "40px",
            lineHeight: "1.6",
            opacity: "0.9"
          }}>
            経験豊富な専門チームが、あなたの海外クラウドファンディング成功まで<br />
            しっかりと伴走させていただきます。まずは無料ご相談にて具体的な商品や目標についてお聞かせください。
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
            今すぐ無料ご相談を申し込む →
          </button>
        </div>
      </section>

      <Footer isMobile={isMobile || false} />
    </>
  );
}

export default function FlowClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FlowClientInner />
    </Suspense>
  );
}