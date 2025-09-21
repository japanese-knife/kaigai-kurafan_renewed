/*
  # CMS用テーブル作成

  1. 新しいテーブル
    - `projects` - トップページカルーセルのプロジェクト情報
    - `columns` - コラム記事情報
  
  2. セキュリティ
    - 各テーブルでRLSを有効化
    - 管理者用のポリシーを設定
*/

-- プロジェクトテーブル
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  is_open boolean DEFAULT true,
  is_ended boolean DEFAULT false,
  progress_percentage integer DEFAULT 0,
  thumbnail_url text NOT NULL,
  logo_url text,
  company_name text NOT NULL,
  is_visible boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- コラムテーブル
CREATE TABLE IF NOT EXISTS columns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  author text DEFAULT 'RE-IDEA',
  published_date date DEFAULT CURRENT_DATE,
  read_time text DEFAULT '5分',
  image_url text NOT NULL,
  tags text[] DEFAULT '{}',
  is_published boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- RLSを有効化
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE columns ENABLE ROW LEVEL SECURITY;

-- 管理者用ポリシー（認証されたユーザーは全操作可能）
CREATE POLICY "Authenticated users can manage projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage columns"
  ON columns
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 一般ユーザー用ポリシー（公開されているもののみ閲覧可能）
CREATE POLICY "Anyone can view visible projects"
  ON projects
  FOR SELECT
  TO anon
  USING (is_visible = true);

CREATE POLICY "Anyone can view published columns"
  ON columns
  FOR SELECT
  TO anon
  USING (is_published = true);

-- 更新時刻の自動更新関数
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- トリガーの設定
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_columns_updated_at
  BEFORE UPDATE ON columns
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- サンプルデータの挿入
INSERT INTO projects (title, description, location, start_date, end_date, is_open, is_ended, progress_percentage, thumbnail_url, logo_url, company_name, display_order) VALUES
('Hinokuni Urushi Knife - 日本の傑作', '隈部刃物は熊本郊外にある100年近い歴史を持つ刃物工房製作所様。資材高騰や後継者不足の課題を抱えながらも、伝統技術を守り、日本の皇室も認める、受け継がれた刀鍛冶の伝統技術を集約した包丁を世界へ。', '熊本県 下益城郡', '2024-05-31', '2025-05-31', true, false, 820, 'KNIFE.avif', 'samuraibrade.avif', '隈部刃物製作所', 1),
('茶和花 | 日本製の茶香炉', 'アートとサステナビリティを融合させたブランド「茶和花（CHAWAKA）」を展開。日本の未利用資源を活かした商品開発を通じて、持続可能なものづくりを推進。', '京都府 宇治市', '2024-02-09', '2025-02-09', true, false, 273, 'chakouro.avif', 'CHAKAWA.avif', '株式会社 TAJIRO', 2),
('FUJI-KO II: 腰痛緩和の究極の解決策', '骨格バランスを整え体の歪みを改善する整体で、施術とセルフケアを通じて健やかな体づくりをサポートする整骨院ベストバランス様。腰痛に悩む人々が、どこにいても簡単にセルフケアを行えるマッサージ器具を開発。', '千葉県 君津市', '2024-08-26', '2024-10-26', true, true, 1233, 'FUJIKO.avif', 'fuji-ko.jpg', '株式会社ベストバランス', 3);

INSERT INTO columns (title, excerpt, content, category, published_date, read_time, image_url, tags, is_featured, display_order) VALUES
('海外クラウドファンディング成功の5つのポイント', '海外クラウドファンディングで成功するために押さえておくべき重要なポイントを詳しく解説します。', '# 海外クラウドファンディング成功の5つのポイント

海外クラウドファンディングは、日本企業が海外市場に進出する最も効果的な手段の一つです。しかし、成功するためには戦略的なアプローチが必要です。RE-IDEAが数多くのプロジェクトを手がけてきた経験から、成功の鍵となる5つのポイントをご紹介します。

## 1. 徹底的な市場調査と競合分析

海外市場での成功は、まず市場を理解することから始まります。私たちは各プロジェクトで以下の調査を実施しています：

- **ターゲット市場の文化的背景の理解**
- **競合商品の価格帯と機能比較**
- **過去の成功事例の詳細分析**
- **季節性やトレンドの把握**

実際に、隈部刃物製作所様の「Hinokuni Urushi Knife」プロジェクトでは、海外の料理愛好家コミュニティの動向を詳細に分析し、日本の伝統技術への関心の高まりを捉えることで、目標の820%という驚異的な成果を達成しました。', 'クラウドファンディング', '2024-12-15', '5分', 'MERIT1.png', ARRAY['初心者向け', '基礎知識'], true, 1),
('KickstarterとIndiegogoの違いとは？', '主要な海外クラウドファンディングプラットフォームの特徴と、商品に最適なプラットフォームの選び方をご紹介。', '# KickstarterとIndiegogoの違いとは？プラットフォーム選択ガイド

海外クラウドファンディングを始める際、最初に直面するのがプラットフォーム選択です。RE-IDEAでは、これまで両プラットフォームで数多くのプロジェクトを成功させてきました。その経験から、それぞれの特徴と最適な選択方法をご説明します。

## Kickstarterの特徴

### メリット
- **高い知名度と信頼性**：世界最大のクラウドファンディングプラットフォーム
- **厳格な審査による品質保証**：支援者からの信頼が厚い
- **メディア注目度が高い**：成功プロジェクトはメディアに取り上げられやすい

### デメリット
- **審査が厳しい**：承認までに時間がかかる場合がある
- **手数料が高め**：成功時5% + 決済手数料3-5%', 'クラウドファンディング', '2024-12-10', '7分', 'SERVICE1.png', ARRAY['プラットフォーム', '比較'], false, 2);