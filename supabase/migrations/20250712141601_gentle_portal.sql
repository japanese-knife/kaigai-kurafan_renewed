/*
  # お知らせテーブル作成

  1. 新しいテーブル
    - `news` - お知らせ情報を管理
  
  2. セキュリティ
    - RLSを有効化
    - 管理者用のポリシーを設定
    - 一般ユーザー用の閲覧ポリシーを設定
*/

-- お知らせテーブル
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL DEFAULT 'お知らせ',
  author text DEFAULT 'RE-IDEA',
  start_date date DEFAULT CURRENT_DATE,
  is_visible boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- RLSを有効化
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- 管理者用ポリシー（認証されたユーザーは全操作可能）
CREATE POLICY "Authenticated users can manage news"
  ON news
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 一般ユーザー用ポリシー（公開されているもののみ閲覧可能）
CREATE POLICY "Anyone can view visible news"
  ON news
  FOR SELECT
  TO anon
  USING (is_visible = true);

-- 更新時刻の自動更新トリガー
CREATE TRIGGER update_news_updated_at
  BEFORE UPDATE ON news
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- サンプルデータの挿入
INSERT INTO news (title, description, category, start_date, display_order) VALUES
('海外クラウドファンディング市場の最新動向', '2024年の海外クラウドファンディング市場は前年比15%成長を記録し、特に日本の伝統工芸品への注目が高まっています。', '市場動向', '2024-12-15', 1),
('成功するプロジェクトの特徴とは', 'クラウドファンディングで成功を収めるプロジェクトには共通の特徴があります。ストーリーテリングの重要性について解説します。', 'ノウハウ', '2024-12-10', 2),
('新サービス「スタンダードプラン」開始のお知らせ', 'より充実したサポートを提供する新プラン「スタンダードプラン」の提供を開始いたします。', 'お知らせ', '2024-12-05', 3);