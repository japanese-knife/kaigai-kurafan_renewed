'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './column-detail.module.css';
import Header from '@/features/Header';
import Footer from '@/features/Footer';
import useResponsiveQuery from '@/hooks/useResponsiveQuery';
import { columnsApi, getColumnImageUrl, Column } from '@/lib/supabase';

interface ColumnDetailClientProps {
  id: string;
}

export default function ColumnDetailClient({ id }: ColumnDetailClientProps) {
  const router = useRouter();
  const isMobile = useResponsiveQuery("(max-width: 768px)");
  const isIpad = useResponsiveQuery("(min-width: 769px) and (max-width: 1024px)");
  
  const [column, setColumn] = useState<Column | null>(null);
  const [relatedColumns, setRelatedColumns] = useState<Column[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchColumnData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 全コラムを取得
        const allColumns = await columnsApi.getAll();
        
        // IDまたはインデックスで該当コラムを検索
        let targetColumn: Column | null = null;
        
        // まずUUIDとして検索
        targetColumn = allColumns.find(col => col.id === id) || null;
        
        // UUIDで見つからない場合、インデックスとして検索
        if (!targetColumn) {
          const index = parseInt(id);
          if (!isNaN(index) && index >= 0 && index < allColumns.length) {
            targetColumn = allColumns[index];
          }
        }
        
        if (!targetColumn) {
          setError('記事が見つかりませんでした');
          return;
        }
        
        setColumn(targetColumn);
        
        // 関連記事を取得（同じカテゴリの他の記事）
        const related = allColumns
          .filter(col => col.category === targetColumn.category && col.id !== targetColumn.id)
          .slice(0, 3);
        setRelatedColumns(related);
        
      } catch (err) {
        console.error('Failed to fetch column:', err);
        setError('記事の読み込みに失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchColumnData();
  }, [id]);

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

  if (error || !column) {
    return (
      <>
        <Header isMobile={isMobile} isIpad={isIpad || false} headerSize={58} />
        <div className={styles.container}>
          <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <p>{error || '記事が見つかりませんでした'}</p>
            <button
              onClick={() => router.push('/column')}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                background: '#43CEA2',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              コラム一覧に戻る
            </button>
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
        <div className={styles.content}>
          {/* パンくずナビ */}
          <nav className={styles.breadcrumb}>
            <button onClick={() => router.push('/')} className={styles.breadcrumbLink}>
              ホーム
            </button>
            <span className={styles.breadcrumbSeparator}>›</span>
            <button onClick={() => router.push('/column')} className={styles.breadcrumbLink}>
              コラム
            </button>
            <span className={styles.breadcrumbSeparator}>›</span>
            <span className={styles.breadcrumbCurrent}>{column.title}</span>
          </nav>

          {/* 記事ヘッダー */}
          <article className={styles.article}>
            <div className={styles.articleHeader}>
              <div className={styles.articleMeta}>
                <span className={styles.articleCategory}>{column.category}</span>
                <span className={styles.articleDate}>
                  {new Date(column.published_date).toLocaleDateString('ja-JP')}
                </span>
                <span className={styles.articleReadTime}>📖 {column.read_time}で読める</span>
              </div>
              
              <h1 className={styles.articleTitle}>{column.title}</h1>
              <p className={styles.articleExcerpt}>{column.excerpt}</p>
              
              <div className={styles.articleTags}>
                {(column?.tags || []).map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* 記事画像 */}
            <div className={styles.articleImageContainer}>
              <Image
                src={getColumnImageUrl(column.image_url)}
                alt={column.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* 記事本文 */}
            <div className={styles.articleBody}>
              {column.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={index} className={styles.h1}>{paragraph.substring(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className={styles.h2}>{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className={styles.h3}>{paragraph.substring(4)}</h3>;
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className={styles.bold}>{paragraph.substring(2, paragraph.length - 2)}</p>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index} className={styles.listItem}>{paragraph.substring(2)}</li>;
                } else if (paragraph.trim() === '') {
                  return <br key={index} />;
                } else {
                  return <p key={index} className={styles.paragraph}>{paragraph}</p>;
                }
              })}
            </div>

            {/* 著者情報 */}
            <div className={styles.authorSection}>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{column.author}</h4>
                <p className={styles.authorDescription}>
                  海外クラウドファンディングの専門家として、数多くのプロジェクトを成功に導いてきました。
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className={styles.ctaSection}>
              <h3 className={styles.ctaTitle}>
                海外クラファン.comで<br />
                あなたの商品を世界へ
              </h3>
              <p className={styles.ctaDescription}>
                日本製の高品質な商品を海外クラウドファンディングで世界に届けませんか？<br />
                専門チームが企画から配送まで完全サポートいたします。
              </p>
              <button 
                className={styles.ctaButton}
                onClick={() => router.push('/#contact')}
              >
                無料ご相談はこちら →
              </button>
            </div>
          </article>

          {/* 関連記事 */}
          {relatedColumns.length > 0 && (
            <section className={styles.relatedSection}>
              <h3 className={styles.relatedTitle}>関連記事</h3>
              <div className={styles.relatedGrid}>
                {relatedColumns.map((relatedColumn) => (
                  <article 
                    key={relatedColumn.id}
                    className={styles.relatedCard}
                    onClick={() => router.push(`/column/${relatedColumn.id}`)}
                  >
                    <div className={styles.relatedImageContainer}>
                      <Image
                        src={getColumnImageUrl(relatedColumn.image_url)}
                        alt={relatedColumn.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.relatedContent}>
                      <div className={styles.relatedMeta}>
                        <span className={styles.relatedCategory}>{relatedColumn.category}</span>
                        <span className={styles.relatedDate}>
                          {new Date(relatedColumn.published_date).toLocaleDateString('ja-JP')}
                        </span>
                      </div>
                      <h4 className={styles.relatedCardTitle}>{relatedColumn.title}</h4>
                      <p className={styles.relatedExcerpt}>{relatedColumn.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer isMobile={isMobile || false} />
    </>
  );
}