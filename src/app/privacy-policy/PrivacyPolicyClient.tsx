'use client';

export const dynamic = 'force-dynamic';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './privacy-policy.module.css';
import Header from '@/features/Header';
import Footer from '@/features/Footer';
import useResponsiveQuery from '@/hooks/useResponsiveQuery';

function PrivacyPolicyClientInner() {
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
          <h1 className={styles.title}>プライバシーポリシー</h1>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. 個人情報の取得について</h2>
            <p className={styles.paragraph}>
              当社は、お客様の個人情報を適切に取得・利用・管理することが社会的責務であると考え、個人情報の保護に努めております。
              当社は、以下の場合に個人情報を取得いたします。
            </p>
            <ul className={styles.list}>
              <li>お問い合わせフォームからのお問い合わせ時</li>
              <li>サービス利用時</li>
              <li>その他、当社が定める方法による取得時</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. 個人情報の利用目的について</h2>
            <p className={styles.paragraph}>
              当社は、取得した個人情報を以下の目的で利用いたします。
            </p>
            <ul className={styles.list}>
              <li>お客様からのお問い合わせへの対応</li>
              <li>サービスの提供・運営</li>
              <li>サービスの改善・開発</li>
              <li>お客様への情報提供（メールマガジン等）</li>
              <li>その他、当社の事業に付随する目的</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. 個人情報の管理について</h2>
            <p className={styles.paragraph}>
              当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報の漏洩、滅失、き損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. 個人情報の第三者提供について</h2>
            <p className={styles.paragraph}>
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
            </p>
            <ul className={styles.list}>
              <li>お客様の同意がある場合</li>
              <li>法令に基づき開示することが必要である場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合であって、お客様の同意を得ることが困難である場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要な場合であって、お客様の同意を得ることが困難である場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. 個人情報の開示・訂正・利用停止について</h2>
            <p className={styles.paragraph}>
              お客様は、当社に対して、ご自身の個人情報の開示・訂正・利用停止を求めることができます。
              これらのご要望がある場合は、下記の連絡先までお問い合わせください。
            </p>
            <div className={styles.contactInfo}>
              <p>【お問い合わせ先】</p>
              <p>株式会社RE-IDEA</p>
              <p>メールアドレス：info@re-idea.jp</p>
              <p>電話番号：03-6759-9299</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. クッキー（Cookie）の使用について</h2>
            <p className={styles.paragraph}>
              当社のウェブサイトでは、お客様により良いサービスを提供するため、クッキー（Cookie）を使用することがあります。
              クッキーは、お客様のコンピュータに送信され、お客様のコンピュータに保存されます。
              お客様は、ブラウザの設定により、クッキーの受け取りを拒否することができます。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. アクセス解析ツールについて</h2>
            <p className={styles.paragraph}>
              当社のウェブサイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
              このGoogleアナリティクスはデータの収集のためにCookieを使用しています。
              このデータは匿名で収集されており、個人を特定するものではありません。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. プライバシーポリシーの変更について</h2>
            <p className={styles.paragraph}>
              当社は、必要に応じて、このプライバシーポリシーの内容を変更することがあります。
              その場合、変更内容を当社のウェブサイトに掲載いたします。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. お問い合わせについて</h2>
            <p className={styles.paragraph}>
              このプライバシーポリシーに関するお問い合わせは、下記の連絡先までお願いいたします。
            </p>
            <div className={styles.contactInfo}>
              <p>【お問い合わせ先】</p>
              <p>株式会社RE-IDEA</p>
              <p>メールアドレス：info@re-idea.jp</p>
              <p>電話番号：03-6759-9299</p>
              <p>住所：〒151-0051 東京都渋谷区千駄ヶ谷1-30-10-4F</p>
            </div>
          </section>

          <div className={styles.lastUpdated}>
            <p>制定日：2024年5月31日</p>
            <p>最終更新日：2024年5月31日</p>
          </div>
        </div>
      </div>
      <Footer isMobile={isMobile || false} />
    </>
  );
}

export default function PrivacyPolicyClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrivacyPolicyClientInner />
    </Suspense>
  );
} 