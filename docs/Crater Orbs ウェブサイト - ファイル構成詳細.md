# Crater Orbs ウェブサイト - ファイル構成詳細

## 📁 作成されたファイル一覧

### ルートディレクトリ
```
crater-orbs-website/
├── package.json                    # 依存関係とスクリプト定義
├── package-lock.json              # 依存関係のロックファイル
├── next.config.ts                 # Next.js設定
├── tailwind.config.ts             # Tailwind CSS設定
├── postcss.config.mjs             # PostCSS設定
├── tsconfig.json                  # TypeScript設定
├── eslint.config.mjs              # ESLint設定
├── README.md                      # プロジェクト説明・使用方法
├── PROJECT_DOCUMENTATION.md      # 詳細なプロジェクト資料
└── FILE_STRUCTURE.md             # このファイル
```

### app/ ディレクトリ（Next.js App Router）
```
app/
├── layout.tsx                     # ルートレイアウト・SEO設定
├── page.tsx                       # メインページ
├── globals.css                    # グローバルスタイル
├── sitemap.ts                     # サイトマップ生成
└── api/
    └── contact/
        └── route.ts               # お問い合わせAPI
```

### components/ ディレクトリ
```
components/
├── Hero.tsx                       # ヒーローセクション
├── ProductIntro.tsx              # プロダクト紹介セクション
├── News.tsx                      # ニュースセクション
├── ContactForm.tsx               # お問い合わせフォーム
├── Footer.tsx                    # フッターセクション
└── StructuredData.tsx            # 構造化データ（SEO）
```

### lib/ ディレクトリ
```
lib/
└── posts.ts                      # Markdown記事処理ユーティリティ
```

### posts/ ディレクトリ
```
posts/
├── ai-development-trends-2025.md        # AI開発トレンド記事
├── web-development-best-practices.md    # Web開発記事
└── company-update-2025.md              # 会社更新記事
```

### public/ ディレクトリ
```
public/
└── robots.txt                    # 検索エンジン向け設定
```

## 📄 各ファイルの詳細説明

### 設定ファイル

#### `package.json`
- プロジェクトの依存関係とスクリプトを定義
- Next.js、React、TypeScript、Tailwind CSS、Framer Motionなどを含む
- 開発・ビルド・起動用のnpmスクリプトを定義

#### `tailwind.config.ts`
- Tailwind CSSの設定
- カスタムカラー、フォント、アニメーション設定
- コンテンツパスの指定

#### `tsconfig.json`
- TypeScriptコンパイラの設定
- パスエイリアス、型チェックオプションを定義

### アプリケーションファイル

#### `app/layout.tsx`
- ルートレイアウトコンポーネント
- SEOメタデータ（title、description、OGP、Twitter Card）
- Google Fontsの設定（Inter、Space Grotesk）
- viewport設定

#### `app/page.tsx`
- メインページコンポーネント
- 各セクションコンポーネントを組み合わせ
- 構造化データの読み込み

#### `app/globals.css`
- グローバルスタイル定義
- Tailwind CSSのベーススタイル
- カスタムCSS変数とアニメーション

#### `app/sitemap.ts`
- 動的サイトマップ生成
- SEO向上のための検索エンジン対応

#### `app/api/contact/route.ts`
- お問い合わせフォーム用API
- メール送信機能（Nodemailer使用）
- CORS対応

### コンポーネントファイル

#### `components/Hero.tsx`
- ヒーローセクションコンポーネント
- Framer Motionアニメーション
- 背景パーティクルエフェクト
- レスポンシブデザイン

#### `components/ProductIntro.tsx`
- プロダクト紹介セクション
- 3つの特長をカード形式で表示
- ホバーアニメーション
- スクロール連動アニメーション

#### `components/News.tsx`
- ニュースセクションコンポーネント
- Markdownファイルから動的に記事を読み込み
- 記事カードのアニメーション
- タグ表示機能

#### `components/ContactForm.tsx`
- お問い合わせフォームコンポーネント
- フォームバリデーション
- API連携によるメール送信
- 送信状態の管理

#### `components/Footer.tsx`
- フッターコンポーネント
- 企業情報とリンク
- ソーシャルメディアリンク
- レスポンシブレイアウト

#### `components/StructuredData.tsx`
- 構造化データ（JSON-LD）コンポーネント
- SEO向上のための組織情報
- サービス情報の構造化

### ユーティリティファイル

#### `lib/posts.ts`
- Markdown記事処理ユーティリティ
- Gray Matterによるメタデータ解析
- Remarkによる本文処理
- 記事データの型定義

### コンテンツファイル

#### `posts/*.md`
- Markdownフォーマットの記事ファイル
- フロントマター（メタデータ）
- 記事本文

### 静的ファイル

#### `public/robots.txt`
- 検索エンジンクローラー向け設定
- サイトマップの場所を指定

## 🔧 主要な技術的特徴

### アニメーション実装
- **Framer Motion**: 滑らかなアニメーション
- **スクロール連動**: useInViewフックによる表示時アニメーション
- **パーティクルエフェクト**: 背景の動的要素

### レスポンシブデザイン
- **Tailwind CSS**: ユーティリティファーストアプローチ
- **ブレークポイント**: sm、md、lgでの適切な表示
- **フレキシブルレイアウト**: Flexbox、Gridの活用

### SEO最適化
- **メタデータ**: 適切なtitle、description設定
- **構造化データ**: JSON-LDによる組織・サービス情報
- **サイトマップ**: 動的生成による検索エンジン対応
- **OGP**: ソーシャルメディア共有対応

### TypeScript活用
- **型安全性**: 厳密な型定義
- **インターフェース**: プロップスとデータ構造の明確化
- **Variants型**: Framer Motionアニメーションの型安全性

### パフォーマンス最適化
- **Next.js App Router**: 最新のルーティングシステム
- **コード分割**: 動的インポートによる最適化
- **静的生成**: ビルド時の最適化

## 🚀 カスタマイズポイント

### デザイン変更
- `tailwind.config.ts`: カラーパレット、フォント設定
- `app/globals.css`: グローバルスタイル
- 各コンポーネント: Tailwind CSSクラスの調整

### コンテンツ更新
- `posts/`: 新しい記事の追加
- `components/`: セクション内容の変更
- `app/layout.tsx`: SEOメタデータの更新

### 機能拡張
- 新しいコンポーネントの追加
- API Routesの拡張
- 外部サービス連携

---

このファイル構成により、保守性が高く、拡張可能なモダンなウェブサイトが構築されています。

