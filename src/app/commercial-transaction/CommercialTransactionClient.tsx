'use client';

export const dynamic = 'force-dynamic';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './commercial-transaction.module.css';
import Header from '@/features/Header';
import Footer from '@/features/Footer';
import useResponsiveQuery from '@/hooks/useResponsiveQuery';

function CommercialTransactionClientInner() {
  const _searchParams = useSearchParams();
  const isMobile = useResponsiveQuery("(max-width: 768px)");
  const isIpad = useResponsiveQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );

  return (
    <>
      <Header isMobile={isMobile} isIpad={isIpad || false} headerSize={58} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title1}>特定商取引法に基づく記載/運営会社</h1>

          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th className={styles.tableHeader}>事業者名</th>
                  <td className={styles.tableCell}>株式会社RE-IDEA</td>
                </tr>

                <tr>
                  <th className={styles.tableHeader}>運営統括責任者</th>
                  <td className={styles.tableCell}>代表取締役 中井涼祐</td>
                </tr>

                <tr>
                  <th className={styles.tableHeader}>住所</th>
                  <td className={styles.tableCell}>〒151-0051 東京都渋谷区千駄ヶ谷1-30-10-4F</td>
                </tr>

                <tr>
                  <th className={styles.tableHeader}>お問い合わせ先</th>
                  <td className={styles.tableCell}>
                    TEL：03-6759-9299<br/>
                    Mail：info@re-idea.jp
                  </td>
                </tr>

                <tr>
                  <th className={styles.tableHeader}>設立</th>
                  <td className={styles.tableCell}>2024年5月31日</td>
                </tr>

                <tr>
                  <th className={styles.tableHeader}>ご利用料金</th>
                  <td className={styles.tableCell}>各プラン記載の税込価格をご確認ください。</td>
                </tr>

                <tr>
                  <th className={styles.tableHeader}>その他お客様の負担する費用</th>
                  <td className={styles.tableCell}>
                    ・海外クラウドファンディングサイトの決済時に生じる販売手数料9.5 %。<br/>
                    ・オプションとしてご提供する海外プロモーションの料金。<br/>
                    ・銀行振込の際の振込手数料。<br/>
                    <br/>
                    返品・キャンセルについて：製品の性質上、原則、商品の返品・キャンセルはお受けしておりません。
                  </td>
                </tr>

                <tr>
                  <th className={styles.tableHeader}>事業内容</th>
                  <td className={styles.tableCell}>
                    ・日本の事業者様に対し、海外クラウドファンディングサイトへの掲載・コンテンツ制作・運営・海外配送までの一括代行サービスを提供。<br/>
                  </td>
                </tr>

                <tr>
                  <th className={styles.tableHeader}>引渡時期</th>
                  <td className={styles.tableCell}>
                    ・契約書締結後、3営業日以内にサービス提供を開始。
                  </td>
                </tr>

                <tr>
                  <th className={styles.tableHeader}>受付可能な銀行振込</th>
                  <td className={styles.tableCell}>
                    ・国内の銀行振込
                  </td>
                </tr>

                <tr>
                  <th className={styles.tableHeader}>決済期間</th>
                  <td className={styles.tableCell}>
                    （1）初期費用について、本契約締結後10日間以内<br/>
                    （2）クラウドファンディングにおける売上の20％について、売上が着金した翌月末日限り
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer isMobile={isMobile || false} />
    </>
  );
}

export default function CommercialTransactionClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CommercialTransactionClientInner />
    </Suspense>
  );
} 