import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bshchfyodjiguohfgrlb.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaGNoZnlvZGppZ3VvaGZncmxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTk2MjcsImV4cCI6MjA2Nzg3NTYyN30.Ta_jg5_cWkuKMs8AV-gPEhkV8ARwJEca001X9dIjqac'

// 開発環境でのダミー値チェック
if (supabaseUrl === 'https://bshchfyodjiguohfgrlb.supabase.co' || supabaseAnonKey === 'yeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaGNoZnlvZGppZ3VvaGZncmxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTk2MjcsImV4cCI6MjA2Nzg3NTYyN30.Ta_jg5_cWkuKMs8AV-gPEhkV8ARwJEca001X9dIjqac') {
  console.warn('⚠️ Supabase環境変数が設定されていません。実際のSupabaseプロジェクトに接続するには、.env.localファイルに正しい値を設定してください。')
}

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)

// Supabase Storage用のヘルパー関数
export const getStorageImageUrl = (bucket: string, path: string): string => {
  if (!path) return '';
  
  // 既にフルURLの場合はそのまま返す
  if (path.startsWith('http')) {
    return path;
  }
  
  // 開発環境やSupabase接続できない場合のフォールバック
  try {
    // Supabase StorageのパブリックURLを生成
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    if (data?.publicUrl) {
      return data.publicUrl;
    }
  } catch (error) {
    console.warn('Failed to get Supabase storage URL, using fallback:', error);
  }
  
  // フォールバック: ローカルの/images/パスを使用
  return `/images/${path}`;
};

// コラム画像用のヘルパー関数
export const getColumnImageUrl = (imagePath: string): string => {
  return getStorageImageUrl('column-image', imagePath);
};

// プロジェクト画像用のヘルパー関数
export const getProjectImageUrl = (imagePath: string): string => {
  return getStorageImageUrl('project-image', imagePath);
};

// 型定義
export interface Project {
  id: string
  title: string
  description: string
  location: string
  start_date: string
  end_date: string
  is_open: boolean
  is_ended: boolean
  progress_percentage: number
  thumbnail_url: string
  logo_url?: string
  company_name: string
  is_visible: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface Column {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  published_date: string
  read_time: string
  image_url: string
  tags: string[]
  is_published: boolean
  is_featured: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface News {
  id: string
  title: string
  description: string
  category: string
  author: string
  start_date: string
  is_visible: boolean
  display_order: number
  created_at: string
  updated_at: string
}

// モックコラムデータ（開発用）
const mockColumns: Column[] = [
  {
    id: '1',
    title: '海外クラウドファンディング成功の5つのポイント',
    excerpt: '海外クラウドファンディングで成功するために押さえておくべき重要なポイントを詳しく解説します。',
    content: `# 海外クラウドファンディング成功の5つのポイント

海外クラウドファンディングは、日本企業が海外市場に進出する最も効果的な手段の一つです。しかし、成功するためには戦略的なアプローチが必要です。RE-IDEAが数多くのプロジェクトを手がけてきた経験から、成功の鍵となる5つのポイントをご紹介します。

## 1. 徹底的な市場調査と競合分析

海外市場での成功は、まず市場を理解することから始まります。私たちは各プロジェクトで以下の調査を実施しています：

- **ターゲット市場の文化的背景の理解**
- **競合商品の価格帯と機能比較**
- **過去の成功事例の詳細分析**
- **季節性やトレンドの把握**

実際に、隈部刃物製作所様の「Hinokuni Urushi Knife」プロジェクトでは、海外の料理愛好家コミュニティの動向を詳細に分析し、日本の伝統技術への関心の高まりを捉えることで、目標の820%という驚異的な成果を達成しました。

## 2. 魅力的なストーリーテリング

海外の支援者は、単なる商品ではなく「ストーリー」に共感します。成功するプロジェクトには必ず心を動かす物語があります。

### 効果的なストーリーの要素
- **創業者の想い**: なぜこの商品を作ったのか
- **伝統と革新**: 日本の技術や文化の価値
- **社会的意義**: 商品が解決する問題
- **未来への展望**: 支援者と共に目指す未来

茶和花（CHAWAKA）プロジェクトでは、日本の未利用資源を活用したサステナブルなものづくりというストーリーが海外の環境意識の高い支援者に強く響き、273%の達成率を記録しました。

## 3. 視覚的に魅力的なコンテンツ制作

海外のクラウドファンディングでは、第一印象が非常に重要です。プロフェッショナルな動画と画像が成功の鍵を握ります。

### 必須コンテンツ
- **メインプロモーション動画**（2-3分）
- **商品の使用シーン動画**
- **製造プロセスの紹介**
- **高品質な商品写真**
- **インフォグラフィック**

FUJI-KO IIプロジェクトでは、実際の使用者の体験談を含む動画コンテンツが支援者の信頼を獲得し、1233%という記録的な成果につながりました。

## 4. 適切な価格設定と特典設計

海外市場では、価格設定が成功を大きく左右します。現地の購買力と競合商品を考慮した戦略的な価格設定が必要です。

### 価格設定のポイント
- **早期支援者向け割引**（30-40%オフ）
- **段階的な価格上昇**
- **限定数量の設定**
- **魅力的な特典の追加**

## 5. 継続的なコミュニケーション

プロジェクト期間中の支援者とのコミュニケーションが、最終的な成功を決定します。

### 効果的なコミュニケーション戦略
- **定期的なアップデート**（週1-2回）
- **支援者からの質問への迅速な回答**
- **製造進捗の透明な報告**
- **感謝の気持ちを込めたメッセージ**

## まとめ

海外クラウドファンディングの成功は、これらの要素を総合的に実行することで実現されます。RE-IDEAでは、これらすべての要素をプロフェッショナルなチームがサポートし、お客様の海外進出を成功に導きます。

**次のステップ**: まずは無料相談で、あなたの商品の海外展開可能性を一緒に探ってみませんか？`,
    category: 'クラウドファンディング',
    author: 'RE-IDEA編集部',
    published_date: '2024-12-15',
    read_time: '8分',
    image_url: 'MERIT1.png',
    tags: ['初心者向け', '基礎知識', '成功事例'],
    is_published: true,
    is_featured: true,
    display_order: 1,
    created_at: '2024-12-15T00:00:00Z',
    updated_at: '2024-12-15T00:00:00Z'
  },
  {
    id: '2',
    title: 'KickstarterとIndiegogoの違いとは？プラットフォーム選択ガイド',
    excerpt: '主要な海外クラウドファンディングプラットフォームの特徴と、商品に最適なプラットフォームの選び方をご紹介。',
    content: `# KickstarterとIndiegogoの違いとは？プラットフォーム選択ガイド

海外クラウドファンディングを始める際、最初に直面するのがプラットフォーム選択です。RE-IDEAでは、これまで両プラットフォームで数多くのプロジェクトを成功させてきました。その経験から、それぞれの特徴と最適な選択方法をご説明します。

## Kickstarterの特徴

### メリット
- **高い知名度と信頼性**：世界最大のクラウドファンディングプラットフォーム
- **厳格な審査による品質保証**：支援者からの信頼が厚い
- **メディア注目度が高い**：成功プロジェクトはメディアに取り上げられやすい
- **All-or-Nothing方式**：目標達成時のみ資金調達、失敗リスクが明確

### デメリット
- **審査が厳しい**：承認までに時間がかかる場合がある
- **手数料が高め**：成功時5% + 決済手数料3-5%
- **柔軟性に欠ける**：プロジェクト開始後の変更が困難

### 適している商品
- **革新的な技術商品**
- **デザイン性の高い商品**
- **ガジェット・電子機器**
- **アート・クリエイティブ商品**

## Indiegogoの特徴

### メリット
- **審査が比較的緩い**：迅速なプロジェクト開始が可能
- **柔軟な資金調達方式**：Fixed（All-or-Nothing）とFlexible（目標未達成でも資金受取可能）を選択可能
- **継続販売機能**：クラウドファンディング終了後も販売継続可能
- **グローバル対応**：より多くの国からアクセス可能

### デメリット
- **知名度がKickstarterより低い**
- **メディア注目度が相対的に低い**
- **手数料体系が複雑**：達成率により変動

### 適している商品
- **ヘルスケア・ウェルネス商品**
- **ライフスタイル商品**
- **継続販売を前提とした商品**
- **ニッチな市場向け商品**

## プラットフォーム選択の判断基準

### 1. 商品カテゴリ
**Kickstarter向き**：テック、デザイン、ゲーム、アート
**Indiegogo向き**：ヘルスケア、フィットネス、ライフスタイル

### 2. 目標金額
**高額目標（$50,000以上）**：Kickstarterの信頼性が有利
**中低額目標（$50,000未満）**：Indiegogoの柔軟性が有利

### 3. リスク許容度
**リスクを抑えたい**：IndiegogoのFlexible方式
**成功への確信がある**：KickstarterのAll-or-Nothing方式

## RE-IDEAの実績から見る選択例

### Kickstarterで成功した事例
- **Hinokuni Urushi Knife**：日本の伝統技術 × 革新的デザイン
- **達成率820%**：Kickstarterの高い注目度が功を奏した

### Indiegogoで成功した事例
- **FUJI-KO II**：ヘルスケア商品
- **達成率1233%**：継続販売機能を活用した長期戦略

## 成功のための共通ポイント

プラットフォームに関わらず、以下の要素が成功の鍵となります：

### 1. 事前準備の徹底
- **3ヶ月前からの準備開始**
- **メーリングリストの構築**
- **SNSでの事前告知**

### 2. 魅力的なコンテンツ
- **プロフェッショナルな動画制作**
- **分かりやすい商品説明**
- **信頼できる製造プロセス**

### 3. 戦略的な価格設定
- **早期支援者向け特別価格**
- **段階的な価格上昇**
- **魅力的な特典パッケージ**

## まとめ

プラットフォーム選択は重要ですが、それ以上に重要なのは**徹底した準備と戦略的な実行**です。RE-IDEAでは、お客様の商品特性と目標に最適なプラットフォームの選択から、成功までの全プロセスをサポートいたします。

**無料相談**で、あなたの商品に最適なプラットフォームと戦略を一緒に検討しませんか？`,
    category: 'クラウドファンディング',
    author: 'RE-IDEA編集部',
    published_date: '2024-12-10',
    read_time: '10分',
    image_url: 'SERVICE1.png',
    tags: ['プラットフォーム', '比較', '選び方'],
    is_published: true,
    is_featured: false,
    display_order: 2,
    created_at: '2024-12-10T00:00:00Z',
    updated_at: '2024-12-10T00:00:00Z'
  },
  {
    id: '3',
    title: '海外進出で失敗しないための市場調査の方法',
    excerpt: '海外市場への進出前に必ず行うべき市場調査の具体的な手法と、失敗を避けるためのポイントを解説します。',
    content: `# 海外進出で失敗しないための市場調査の方法

海外クラウドファンディングの成功は、徹底した市場調査から始まります。RE-IDEAがこれまで手がけた成功プロジェクトは、すべて綿密な市場調査に基づいて戦略を立てています。今回は、その具体的な手法をご紹介します。

## なぜ市場調査が重要なのか？

### 失敗プロジェクトの共通点
- **現地のニーズを理解していない**
- **競合商品の存在を把握していない**
- **価格設定が市場に合っていない**
- **文化的な違いを考慮していない**

### 成功プロジェクトの共通点
- **ターゲット市場を深く理解している**
- **競合との差別化が明確**
- **現地の購買力に適した価格設定**
- **文化的な配慮が行き届いている**

## 市場調査の5つのステップ

### ステップ1：マクロ環境分析

まず、進出予定国の基本情報を把握します。

**調査項目**
- **経済状況**：GDP、インフレ率、為替レート
- **人口動態**：年齢構成、所得分布、都市化率
- **技術普及率**：インターネット、スマートフォン普及率
- **規制環境**：輸入規制、安全基準、認証要件

**情報源**
- 各国政府統計
- 世界銀行データ
- JETRO（日本貿易振興機構）レポート
- 現地商工会議所情報

### ステップ2：ターゲット市場分析

具体的なターゲット層を特定し、そのニーズを深掘りします。

**分析手法**
- **デモグラフィック分析**：年齢、性別、所得、職業
- **サイコグラフィック分析**：価値観、ライフスタイル、興味関心
- **行動分析**：購買パターン、メディア接触、情報収集方法

**実例：FUJI-KO IIプロジェクト**
- ターゲット：30-50代の健康意識の高い層
- 特徴：在宅勤務増加による腰痛悩み増加
- 購買行動：オンラインでの健康商品購入に慣れている

### ステップ3：競合分析

直接・間接競合を特定し、詳細に分析します。

**分析項目**
- **商品特徴**：機能、デザイン、品質
- **価格戦略**：価格帯、割引戦略、支払い方法
- **マーケティング**：広告手法、メッセージ、チャネル
- **顧客評価**：レビュー分析、満足度、不満点

**競合調査ツール**
- Google Trends
- Amazon商品ランキング
- クラウドファンディングサイトの過去プロジェクト
- SNSでの言及分析

### ステップ4：価格感度分析

現地の価格感覚と購買力を把握します。

**調査方法**
- **類似商品の価格調査**
- **所得水準との比較**
- **為替変動の影響分析**
- **税金・関税の考慮**

**価格設定の考え方**
- 現地の月収に対する商品価格の割合
- 競合商品との価格比較
- 品質に対する価格の妥当性

### ステップ5：文化・嗜好分析

現地の文化的背景と消費者の嗜好を理解します。

**調査項目**
- **色彩の好み**：文化的な色の意味
- **デザインの嗜好**：シンプル vs 装飾的
- **機能の優先順位**：実用性 vs デザイン性
- **ブランドの価値観**：環境配慮、社会貢献など

## 実践的な調査手法

### オンライン調査
- **Google Trends**：検索トレンド分析
- **SNS分析**：Instagram、Facebook、Twitterでの反応
- **レビューサイト**：Amazon、楽天グローバルでの評価
- **フォーラム・掲示板**：Reddit、Quoraでの議論

### オフライン調査
- **現地視察**：店舗、展示会での実地調査
- **インタビュー**：現地消費者、販売店へのヒアリング
- **フォーカスグループ**：ターゲット層との座談会
- **専門家相談**：現地コンサルタント、業界専門家

## RE-IDEAの市場調査サービス

### 包括的な調査レポート
- **市場規模・成長性分析**
- **競合マッピング**
- **価格戦略提案**
- **リスク要因の特定**

### 実行可能な戦略提案
- **ターゲット層の明確化**
- **差別化ポイントの特定**
- **マーケティング戦略**
- **成功確率の評価**

## 成功事例：隈部刃物製作所

### 調査結果
- **市場**：欧米の料理愛好家層
- **ニーズ**：本格的な日本の包丁への憧れ
- **競合**：ドイツ製高級包丁が主流
- **差別化**：日本の伝統技術と美しいデザイン

### 戦略
- **価格設定**：競合より20%高価格でも品質で差別化
- **訴求ポイント**：100年の伝統技術と職人の物語
- **結果**：目標の820%達成

## まとめ

市場調査は時間とコストがかかりますが、成功確率を大幅に向上させる重要な投資です。RE-IDEAでは、これらの調査を専門チームが代行し、お客様の海外進出を成功に導きます。

**次のステップ**：無料相談で、あなたの商品の市場調査から始めてみませんか？`,
    category: '海外進出',
    author: 'RE-IDEA編集部',
    published_date: '2024-12-05',
    read_time: '12分',
    image_url: 'MERIT2.png',
    tags: ['市場調査', '海外進出', '戦略'],
    is_published: true,
    is_featured: false,
    display_order: 3,
    created_at: '2024-12-05T00:00:00Z',
    updated_at: '2024-12-05T00:00:00Z'
  },
  {
    id: '4',
    title: '動画制作で支援者の心を掴む方法',
    excerpt: 'クラウドファンディングで最も重要な要素の一つである動画制作。支援者の心を動かす動画の作り方を詳しく解説します。',
    content: `# 動画制作で支援者の心を掴む方法

海外クラウドファンディングにおいて、動画は最も重要な要素の一つです。統計によると、動画があるプロジェクトは動画がないプロジェクトと比べて**4倍以上**の成功率を誇ります。RE-IDEAが手がけた成功プロジェクトの動画制作ノウハウをご紹介します。

## なぜ動画が重要なのか？

### 数字で見る動画の効果
- **視聴完了率**：テキストの65倍の情報を短時間で伝達
- **記憶定着率**：動画は文字の6倍記憶に残りやすい
- **感情への訴求**：動画は文字の30倍感情に訴える力がある
- **シェア率**：動画コンテンツは文字の12倍シェアされやすい

### 支援者の行動パターン
1. **最初の10秒**：継続視聴の判断
2. **30秒まで**：商品への興味の形成
3. **1分まで**：支援意欲の醸成
4. **最後まで**：支援行動への転換

## 効果的な動画の構成

### 黄金の構成：AIDA法則

**A（Attention）- 注意を引く（0-10秒）**
- インパクトのあるオープニング
- 問題提起や驚きの事実
- 美しい映像や音楽

**I（Interest）- 興味を持たせる（10-30秒）**
- 商品の核心的な価値
- 解決する問題の明確化
- ターゲットへの共感

**D（Desire）- 欲求を喚起する（30秒-2分）**
- 商品の詳細な機能説明
- 使用シーンの具体的な描写
- 他にはない独自性の強調

**A（Action）- 行動を促す（2-3分）**
- 支援への呼びかけ
- 限定性の訴求
- 感謝のメッセージ

### 成功事例：FUJI-KO II

**構成分析**
- **0-15秒**：腰痛に悩む人の日常シーン
- **15-45秒**：FUJI-KO IIの紹介と効果
- **45秒-2分**：実際の使用方法と体験談
- **2-3分**：開発者の想いと支援への感謝

**結果**：1233%の達成率

## 動画制作の5つのポイント

### 1. ストーリーテリング

単なる商品紹介ではなく、**物語**として構成します。

**効果的なストーリー要素**
- **主人公**：開発者や使用者
- **問題**：解決したい課題
- **解決策**：商品の登場
- **変化**：商品による改善
- **未来**：支援者と共に目指す世界

**実例：隈部刃物製作所**
- 100年続く刀鍛冶の技術
- 後継者不足という危機
- 伝統技術を世界に伝える使命
- 海外の料理愛好家との出会い
- 日本の技術を世界に広める未来

### 2. 視覚的インパクト

**映像の質**
- **4K解像度**：プロフェッショナルな印象
- **安定した映像**：三脚・ジンバルの使用
- **適切な照明**：商品の魅力を最大化
- **多角度撮影**：商品の全体像を把握

**色彩設計**
- **ブランドカラー**：一貫したカラーパレット
- **感情への配慮**：色が与える心理的影響
- **文化的配慮**：ターゲット国での色の意味

### 3. 音響設計

**音楽の選択**
- **感情に合わせた楽曲**：シーンごとの適切な音楽
- **著作権フリー**：商用利用可能な楽曲
- **音量バランス**：ナレーションとのバランス

**効果音の活用**
- **商品の動作音**：リアリティの演出
- **環境音**：シーンの臨場感
- **トランジション音**：場面転換の滑らかさ

### 4. ナレーション・字幕

**ナレーションのポイント**
- **ネイティブスピーカー**：自然な発音
- **感情の込め方**：商品への愛情を表現
- **話すスピード**：理解しやすいペース

**字幕の工夫**
- **読みやすいフォント**：Sans-serif系
- **適切なサイズ**：モバイルでも読める
- **色とコントラスト**：背景との明確な区別

### 5. 長さの最適化

**プラットフォーム別最適長**
- **Kickstarter**：2-3分が理想
- **Indiegogo**：3-4分まで許容
- **SNS用**：30-60秒の短縮版も制作

**視聴者の集中力**
- **最初の30秒**：最も重要な情報を配置
- **1分以降**：詳細情報と感情的訴求
- **最後の30秒**：強いCTAで締めくくり

## 制作プロセス

### 企画・構成（1週間）
1. **ターゲット分析**
2. **競合動画研究**
3. **ストーリーボード作成**
4. **撮影計画立案**

### 撮影（2-3日）
1. **商品撮影**
2. **使用シーン撮影**
3. **インタビュー撮影**
4. **B-roll素材撮影**

### 編集・仕上げ（1-2週間）
1. **粗編集**
2. **音響調整**
3. **カラーグレーディング**
4. **最終チェック**

## よくある失敗パターン

### 1. 商品説明に終始
- **問題**：機能説明のみで感情に訴えない
- **解決**：ストーリーと感情を重視

### 2. 長すぎる動画
- **問題**：視聴者の離脱率が高い
- **解決**：簡潔で印象的な構成

### 3. 音質の問題
- **問題**：聞き取りにくいナレーション
- **解決**：プロ機材での録音

### 4. 文化的配慮不足
- **問題**：現地の文化に合わない表現
- **解決**：現地の専門家によるチェック

## RE-IDEAの動画制作サービス

### 包括的な制作サポート
- **企画・構成**：戦略的なストーリー設計
- **撮影**：プロ機材による高品質撮影
- **編集**：海外向けに最適化された編集
- **多言語対応**：字幕・ナレーションの現地化

### 成功実績
- **平均達成率**：350%以上
- **視聴完了率**：85%以上
- **支援転換率**：12%以上

## まとめ

効果的な動画制作は、技術的なスキルだけでなく、**戦略的な思考**と**文化的な理解**が必要です。RE-IDEAでは、これらすべての要素を統合した動画制作で、お客様のプロジェクト成功をサポートします。

**次のステップ**：あなたの商品の魅力を最大限に引き出す動画制作について、無料相談でご相談ください。`,
    category: 'マーケティング',
    author: 'RE-IDEA編集部',
    published_date: '2024-11-30',
    read_time: '15分',
    image_url: 'SERVICE2.png',
    tags: ['動画制作', 'マーケティング', 'コンテンツ'],
    is_published: true,
    is_featured: false,
    display_order: 4,
    created_at: '2024-11-30T00:00:00Z',
    updated_at: '2024-11-30T00:00:00Z'
  },
  {
    id: '5',
    title: '日本の伝統工芸品が海外で愛される理由',
    excerpt: '近年、海外クラウドファンディングで日本の伝統工芸品が高い評価を受けています。その背景と成功要因を分析します。',
    content: `# 日本の伝統工芸品が海外で愛される理由

近年、海外クラウドファンディングにおいて日本の伝統工芸品が驚異的な成功を収めています。RE-IDEAが手がけた隈部刃物製作所の「Hinokuni Urushi Knife」は820%、茶和花の「日本製茶香炉」は273%の達成率を記録しました。なぜ日本の伝統工芸品がこれほど海外で愛されるのでしょうか？

## 海外から見た日本の伝統工芸品の魅力

### 1. 職人の技術への憧憬

**「Craftsmanship」への尊敬**
海外では、機械生産が主流の中で、職人の手による製品は特別な価値を持ちます。

- **一生をかけた技術習得**：10年、20年をかけて磨かれた技術
- **世代を超えた継承**：親から子へ受け継がれる伝統
- **完璧への追求**：妥協を許さない品質へのこだわり

**実例：隈部刃物製作所**
- 100年近い歴史を持つ刀鍛冶の技術
- 皇室も認める品質
- 一本一本手作りによる個性

### 2. 「Wabi-Sabi」美学の浸透

**不完全の美しさ**
西洋の完璧主義とは対照的な、日本独特の美意識が注目されています。

- **自然な風合い**：使い込むほどに味が出る
- **経年変化の美**：時間と共に変化する美しさ
- **シンプルさの中の深み**：装飾を排した機能美

**実例：茶和花プロジェクト**
- 未利用資源を活用したサステナブルな美
- 使うほどに深まる香りの変化
- シンプルながら心を癒すデザイン

### 3. ストーリーテリングの力

**物語性のある商品**
海外の消費者は、商品の背景にある物語に強く惹かれます。

- **歴史的背景**：何百年も続く伝統
- **職人の人生**：技術習得への献身
- **地域の文化**：その土地ならではの特色
- **継承への想い**：次世代への技術継承

## 成功する伝統工芸品の特徴

### 1. 実用性と美しさの両立

**機能美の追求**
- **使いやすさ**：日常生活での実用性
- **耐久性**：長期間使用できる品質
- **メンテナンス性**：手入れ方法の明確さ

**成功事例分析**

| 商品 | 実用性 | 美しさ | 達成率 |
|------|--------|--------|--------|
| Hinokuni Urushi Knife | 切れ味・耐久性 | 漆の美しさ | 820% |
| 茶和花 茶香炉 | アロマ効果 | 和の佇まい | 273% |

### 2. 現代的なアレンジ

**伝統と革新の融合**
- **現代のライフスタイルに適応**
- **海外の住環境への配慮**
- **使用方法の簡素化**

**アレンジの例**
- **サイズの最適化**：海外の住宅事情に合わせた小型化
- **メンテナンスの簡素化**：特別な道具を必要としない手入れ方法
- **多機能化**：一つで複数の用途に対応

### 3. 品質の証明

**信頼性の担保**
- **認証・受賞歴**：公的な品質認証
- **メディア掲載**：権威ある媒体での紹介
- **使用者の声**：実際の使用体験談

## 海外市場での伝統工芸品トレンド

### 1. サステナビリティへの関心

**環境意識の高まり**
- **長期使用**：使い捨てではない価値
- **自然素材**：化学物質を使わない製法
- **地域経済**：職人の生活を支える意義

**茶和花の成功要因**
- 未利用資源の活用
- 化学香料を使わない自然な香り
- 伝統産業の継承支援

### 2. ミニマリズムの浸透

**シンプルライフへの憧れ**
- **機能的なデザイン**：無駄のない美しさ
- **質の高い少数所有**：量より質の価値観
- **精神的な豊かさ**：物質的豊かさを超えた価値

### 3. 体験価値の重視

**モノからコトへ**
- **使用体験**：商品を使う喜び
- **学習体験**：伝統文化への理解
- **共有体験**：SNSでのシェア価値

## 成功のための戦略

### 1. ストーリーの構築

**効果的な物語の要素**
- **職人の人生**：技術習得への道のり
- **伝統の継承**：先代から受け継いだ技術
- **現代への適応**：時代に合わせた進化
- **未来への想い**：次世代への継承願望

### 2. 視覚的な魅力の最大化

**動画・写真の重要性**
- **製作過程**：職人の技術を見せる
- **使用シーン**：日常での活用方法
- **経年変化**：時間と共に変わる美しさ
- **文化的背景**：日本の風景や文化

### 3. 教育的コンテンツ

**文化的理解の促進**
- **歴史の説明**：伝統工芸の背景
- **技術の解説**：製作方法の紹介
- **使用方法**：正しい使い方の指導
- **手入れ方法**：長く使うためのケア

## 課題と対策

### 1. 価格の高さ

**課題**
- 手作りによる高コスト
- 海外配送費の負担
- 関税・税金の上乗せ

**対策**
- **価値の明確化**：なぜ高いのかの説明
- **分割払い**：支払い方法の多様化
- **限定性の訴求**：希少価値の強調

### 2. 文化的理解の壁

**課題**
- 使用方法の不明確さ
- 文化的背景の理解不足
- メンテナンス方法の複雑さ

**対策**
- **詳細な説明動画**：使用方法の視覚化
- **文化的コンテキスト**：背景の丁寧な説明
- **サポート体制**：アフターケアの充実

### 3. 競合との差別化

**課題**
- 類似商品の存在
- 模倣品の出現
- 価格競争の激化

**対策**
- **独自性の強調**：他にはない特徴
- **品質の証明**：認証や受賞歴
- **ブランドストーリー**：真正性の訴求

## RE-IDEAの伝統工芸品支援実績

### 成功プロジェクト
1. **隈部刃物製作所**：820%達成
2. **茶和花**：273%達成
3. **その他多数**：平均達成率400%以上

### 支援内容
- **市場調査**：海外での需要分析
- **ストーリー構築**：魅力的な物語の作成
- **コンテンツ制作**：動画・写真の撮影
- **文化的ローカライズ**：現地文化への適応
- **運営サポート**：プロジェクト期間中の支援

## まとめ

日本の伝統工芸品が海外で愛される理由は、単なる商品の機能性を超えた**文化的価値**と**物語性**にあります。RE-IDEAでは、これらの価値を最大限に引き出し、海外の支援者に届ける支援を行っています。

**あなたの伝統工芸品**も、適切な戦略とサポートがあれば、海外で大きな成功を収める可能性があります。まずは無料相談で、その可能性を一緒に探ってみませんか？`,
    category: '事例紹介',
    author: 'RE-IDEA編集部',
    published_date: '2024-11-25',
    read_time: '18分',
    image_url: 'MERIT3.png',
    tags: ['伝統工芸', '成功事例', '文化'],
    is_published: true,
    is_featured: false,
    display_order: 5,
    created_at: '2024-11-25T00:00:00Z',
    updated_at: '2024-11-25T00:00:00Z'
  }
];
// プロジェクト関連の関数
export const projectsApi = {
  // 全プロジェクト取得（表示順）
  async getAll(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('is_visible', true)
      .order('display_order', { ascending: true })
    
    if (error) throw error
    return data || []
  },

  // プロジェクト作成
  async create(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<Project> {
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // プロジェクト更新
  async update(id: string, updates: Partial<Project>): Promise<Project> {
    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // プロジェクト削除
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// コラム関連の関数
export const columnsApi = {
  // 全コラム取得（公開済み、表示順）
  async getAll(): Promise<Column[]> {
    // 開発環境ではモックデータを返す
    if (process.env.NODE_ENV === 'development') {
      return mockColumns
    }
    
    try {
      const { data, error } = await supabase
        .from('columns')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true })
      
      if (error) throw error
      return data || mockColumns
    } catch (error) {
      console.warn('Supabase columns fetch failed, using mock data:', error)
      return mockColumns
    }
  },

  // 注目記事取得
  async getFeatured(): Promise<Column | null> {
    // 開発環境ではモックデータを返す
    if (process.env.NODE_ENV === 'development') {
      return mockColumns.find(col => col.is_featured) || mockColumns[0]
    }
    
    try {
      const { data, error } = await supabase
        .from('columns')
        .select('*')
        .eq('is_published', true)
        .eq('is_featured', true)
        .order('display_order', { ascending: true })
        .limit(1)
        .single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data || mockColumns.find(col => col.is_featured) || mockColumns[0]
    } catch (error) {
      console.warn('Supabase featured column fetch failed, using mock data:', error)
      return mockColumns.find(col => col.is_featured) || mockColumns[0]
    }
  },

  // カテゴリ別取得
  async getByCategory(category: string): Promise<Column[]> {
    // 開発環境ではモックデータを返す
    if (process.env.NODE_ENV === 'development') {
      return mockColumns.filter(col => col.category === category)
    }
    
    try {
      const { data, error } = await supabase
        .from('columns')
        .select('*')
        .eq('is_published', true)
        .eq('category', category)
        .order('display_order', { ascending: true })
      
      if (error) throw error
      return data || mockColumns.filter(col => col.category === category)
    } catch (error) {
      console.warn('Supabase category columns fetch failed, using mock data:', error)
      return mockColumns.filter(col => col.category === category)
    }
  },

  // コラム作成
  async create(column: Omit<Column, 'id' | 'created_at' | 'updated_at'>): Promise<Column> {
    const { data, error } = await supabase
      .from('columns')
      .insert([column])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // コラム更新
  async update(id: string, updates: Partial<Column>): Promise<Column> {
    const { data, error } = await supabase
      .from('columns')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // コラム削除
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('columns')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// お知らせ関連の関数
export const newsApi = {
  // 全お知らせ取得（表示順）
  async getAll(): Promise<News[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('is_visible', true)
      .order('display_order', { ascending: true })
    
    if (error) throw error
    return data || []
  },

  // 最新のお知らせ取得（件数指定）
  async getLatest(limit: number = 5): Promise<News[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('is_visible', true)
      .order('start_date', { ascending: false })
      .limit(limit)
    
    if (error) throw error
    return data || []
  },

  // カテゴリ別取得
  async getByCategory(category: string): Promise<News[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('is_visible', true)
      .eq('category', category)
      .order('start_date', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // お知らせ作成
  async create(news: Omit<News, 'id' | 'created_at' | 'updated_at'>): Promise<News> {
    const { data, error } = await supabase
      .from('news')
      .insert([news])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // お知らせ更新
  async update(id: string, updates: Partial<News>): Promise<News> {
    const { data, error } = await supabase
      .from('news')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // お知らせ削除
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}