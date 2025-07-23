# 🚀 Crater Orbs ウェブサイト - 完全デプロイメントガイド

## 📋 このガイドについて

このガイドでは、提供されたファイルを使用して、GitHubリポジトリの作成からホスティング、独自ドメイン設定まで、すべてのステップを詳細に説明します。

## 🎯 最終目標

- ✅ GitHubリポジトリの作成
- ✅ ファイルの正しいアップロード
- ✅ GitHub Pages または Vercel でのデプロイ
- ✅ 独自ドメインの設定
- ✅ 記事管理システムの運用

## 📁 提供ファイル一覧

以下のファイルが提供されています：

```
crater-orbs-website/
├── app/
│   ├── api/contact/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── News.tsx
│   ├── ProductIntro.tsx
│   └── StructuredData.tsx
├── lib/
│   └── posts.ts
├── posts/
│   ├── ai-development-trends-2025.md
│   ├── company-update-2025.md
│   └── web-development-best-practices.md
├── public/
│   ├── .nojekyll
│   └── robots.txt
├── scripts/
│   └── create-post.js
├── .github/workflows/
│   └── deploy.yml
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── README.md
```

---



# 📂 STEP 1: GitHubリポジトリの作成

## 1.1 GitHubアカウントの準備

### 前提条件
- GitHubアカウントを持っている
- ブラウザでGitHubにログインしている

### GitHubアカウントがない場合
1. [GitHub.com](https://github.com) にアクセス
2. 「Sign up」をクリック
3. メールアドレス、パスワード、ユーザー名を入力
4. アカウント認証を完了

## 1.2 新しいリポジトリの作成

### 手順
1. **GitHubにログイン**
   - [GitHub.com](https://github.com) にアクセス
   - 右上の「Sign in」からログイン

2. **新しいリポジトリを作成**
   - 右上の「+」アイコンをクリック
   - 「New repository」を選択

3. **リポジトリ設定**
   ```
   Repository name: crater-orbs-website
   Description: 未来を切り拓く、プロダクト開発カンパニーのコーポレートサイト
   Visibility: Public（GitHub Pagesを無料で使用するため）
   
   ✅ Add a README file（チェックを入れる）
   ✅ Add .gitignore（Node を選択）
   ❌ Choose a license（今回は選択しない）
   ```

4. **リポジトリを作成**
   - 「Create repository」をクリック

### 作成完了の確認
- リポジトリページが表示される
- URL: `https://github.com/[ユーザー名]/crater-orbs-website`

## 1.3 リポジトリのクローン（ローカル作業の場合）

### Git がインストールされている場合
```bash
# リポジトリをクローン
git clone https://github.com/[ユーザー名]/crater-orbs-website.git

# ディレクトリに移動
cd crater-orbs-website

# 現在の状況を確認
ls -la
```

### Git がインストールされていない場合
- [Git公式サイト](https://git-scm.com/) からダウンロード・インストール
- または GitHub Desktop を使用

---


# 📤 STEP 2: ファイルのアップロード

## 2.1 ファイルアップロード方法の選択

### 方法A: GitHub Web インターフェース（推奨・簡単）
- ブラウザだけで完結
- Git の知識不要
- ファイルを一つずつアップロード

### 方法B: Git コマンドライン（上級者向け）
- 一括アップロード可能
- Git の基本知識が必要

## 2.2 方法A: GitHub Web インターフェースでのアップロード

### 2.2.1 基本ファイルのアップロード

1. **package.json のアップロード**
   - リポジトリページで「Add file」→「Create new file」
   - ファイル名: `package.json`
   - 内容をコピー&ペースト：
   ```json
   {
     "name": "crater-orbs-website",
     "version": "0.1.0",
     "private": true,
     "scripts": {
       "dev": "next dev --turbopack",
       "build": "next build",
       "start": "next start",
       "lint": "next lint",
       "export": "next build && next export",
       "deploy:github": "npm run build && touch out/.nojekyll && echo 'crater-orbs.com' > out/CNAME"
     },
     "dependencies": {
       "framer-motion": "^11.15.0",
       "gray-matter": "^4.0.3",
       "next": "15.4.3",
       "nodemailer": "^6.9.17",
       "react": "^18.3.1",
       "react-dom": "^18.3.1",
       "remark": "^15.0.1",
       "remark-html": "^16.0.1"
     },
     "devDependencies": {
       "@types/node": "^20.17.10",
       "@types/nodemailer": "^6.4.19",
       "@types/react": "^18.3.17",
       "@types/react-dom": "^18.3.5",
       "autoprefixer": "^10.4.20",
       "eslint": "^8.57.1",
       "eslint-config-next": "15.4.3",
       "postcss": "^8.5.1",
       "tailwindcss": "^3.4.17",
       "typescript": "^5.7.2"
     }
   }
   ```
   - 「Commit new file」をクリック

2. **next.config.ts のアップロード**
   - 「Add file」→「Create new file」
   - ファイル名: `next.config.ts`
   - 内容：
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     // GitHub Pages用の設定
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
     // GitHub Pagesのサブパス対応（リポジトリ名がサブパスになる場合）
     basePath: process.env.NODE_ENV === 'production' ? '/crater-orbs-website' : '',
     assetPrefix: process.env.NODE_ENV === 'production' ? '/crater-orbs-website/' : '',
   };

   export default nextConfig;
   ```

3. **tailwind.config.ts のアップロード**
   - ファイル名: `tailwind.config.ts`
   - 内容：
   ```typescript
   import type { Config } from "tailwindcss";

   export default {
     content: [
       "./pages/**/*.{js,ts,jsx,tsx,mdx}",
       "./components/**/*.{js,ts,jsx,tsx,mdx}",
       "./app/**/*.{js,ts,jsx,tsx,mdx}",
     ],
     theme: {
       extend: {
         colors: {
           background: "var(--background)",
           foreground: "var(--foreground)",
         },
       },
     },
     plugins: [],
   } satisfies Config;
   ```

4. **tsconfig.json のアップロード**
   - ファイル名: `tsconfig.json`
   - 内容：
   ```json
   {
     "compilerOptions": {
       "target": "ES2017",
       "lib": ["dom", "dom.iterable", "es6"],
       "allowJs": true,
       "skipLibCheck": true,
       "strict": true,
       "noEmit": true,
       "esModuleInterop": true,
       "module": "esnext",
       "moduleResolution": "bundler",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "jsx": "preserve",
       "incremental": true,
       "plugins": [
         {
           "name": "next"
         }
       ],
       "paths": {
         "@/*": ["./*"]
       }
     },
     "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
     "exclude": ["node_modules"]
   }
   ```

5. **postcss.config.mjs のアップロード**
   - ファイル名: `postcss.config.mjs`
   - 内容：
   ```javascript
   /** @type {import('postcss-load-config').Config} */
   const config = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   };

   export default config;
   ```

### 2.2.2 ディレクトリ構造の作成

GitHub Web インターフェースでディレクトリを作成する方法：

1. **app ディレクトリの作成**
   - 「Add file」→「Create new file」
   - ファイル名: `app/layout.tsx`（スラッシュでディレクトリが作成される）

2. **components ディレクトリの作成**
   - ファイル名: `components/Hero.tsx`

3. **lib ディレクトリの作成**
   - ファイル名: `lib/posts.ts`

4. **posts ディレクトリの作成**
   - ファイル名: `posts/ai-development-trends-2025.md`

5. **public ディレクトリの作成**
   - ファイル名: `public/robots.txt`

6. **scripts ディレクトリの作成**
   - ファイル名: `scripts/create-post.js`

7. **.github/workflows ディレクトリの作成**
   - ファイル名: `.github/workflows/deploy.yml`

---


### 2.2.3 app ディレクトリのファイル

1. **app/layout.tsx**
   ```typescript
   import type { Metadata } from "next";
   import { Inter, Space_Grotesk } from "next/font/google";
   import "./globals.css";
   import StructuredData from "../components/StructuredData";

   const inter = Inter({ subsets: ["latin"] });
   const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

   export const metadata: Metadata = {
     title: "Crater Orbs - 未来を切り拓く、プロダクト開発カンパニー",
     description: "革新的なAI・Web技術で課題を解決し、未来を創造するプロダクト開発カンパニー。UI/UXデザインから運用まで一貫してサポートします。",
     keywords: ["AI", "Web開発", "プロダクト開発", "UI/UX", "Next.js", "React"],
     authors: [{ name: "Crater Orbs" }],
     creator: "Crater Orbs",
     publisher: "Crater Orbs",
     robots: "index, follow",
     openGraph: {
       type: "website",
       locale: "ja_JP",
       url: "https://crater-orbs.com",
       title: "Crater Orbs - 未来を切り拓く、プロダクト開発カンパニー",
       description: "革新的なAI・Web技術で課題を解決し、未来を創造するプロダクト開発カンパニー",
       siteName: "Crater Orbs",
     },
     twitter: {
       card: "summary_large_image",
       title: "Crater Orbs - 未来を切り拓く、プロダクト開発カンパニー",
       description: "革新的なAI・Web技術で課題を解決し、未来を創造するプロダクト開発カンパニー",
       creator: "@crater_orbs",
     },
     viewport: "width=device-width, initial-scale=1",
   };

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <html lang="ja">
         <body className={`${inter.className} ${spaceGrotesk.className}`}>
           <StructuredData />
           {children}
         </body>
       </html>
     );
   }
   ```

2. **app/page.tsx**
   ```typescript
   import Hero from "../components/Hero";
   import ProductIntro from "../components/ProductIntro";
   import News from "../components/News";
   import ContactForm from "../components/ContactForm";
   import Footer from "../components/Footer";
   import { getSortedPostsData } from "../lib/posts";

   export default function Home() {
     const allPostsData = getSortedPostsData();

     return (
       <main className="min-h-screen">
         <Hero />
         <ProductIntro />
         <News posts={allPostsData} />
         <ContactForm />
         <Footer />
       </main>
     );
   }
   ```

3. **app/globals.css**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   :root {
     --background: #0a0a0a;
     --foreground: #ededed;
   }

   @media (prefers-color-scheme: dark) {
     :root {
       --background: #0a0a0a;
       --foreground: #ededed;
     }
   }

   body {
     color: var(--foreground);
     background: var(--background);
     font-family: Arial, Helvetica, sans-serif;
   }

   @layer utilities {
     .text-balance {
       text-wrap: balance;
     }
   }

   /* カスタムスクロールバー */
   ::-webkit-scrollbar {
     width: 8px;
   }

   ::-webkit-scrollbar-track {
     background: #1a1a1a;
   }

   ::-webkit-scrollbar-thumb {
     background: #4f46e5;
     border-radius: 4px;
   }

   ::-webkit-scrollbar-thumb:hover {
     background: #6366f1;
   }

   /* アニメーション */
   @keyframes fadeInUp {
     from {
       opacity: 0;
       transform: translateY(30px);
     }
     to {
       opacity: 1;
       transform: translateY(0);
     }
   }

   .animate-fadeInUp {
     animation: fadeInUp 0.6s ease-out;
   }

   /* グラデーション背景 */
   .gradient-bg {
     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   }

   /* ガラス効果 */
   .glass-effect {
     background: rgba(255, 255, 255, 0.1);
     backdrop-filter: blur(10px);
     border: 1px solid rgba(255, 255, 255, 0.2);
   }
   ```

4. **app/sitemap.ts**
   ```typescript
   import { MetadataRoute } from 'next'

   export const dynamic = 'force-static'

   export default function sitemap(): MetadataRoute.Sitemap {
     const baseUrl = process.env.NODE_ENV === 'production' 
       ? 'https://crater-orbs.com' 
       : 'http://localhost:3000'

     return [
       {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 1,
       },
       {
         url: `${baseUrl}/#news`,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.8,
       },
       {
         url: `${baseUrl}/#contact`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.6,
       },
     ]
   }
   ```

5. **app/api/contact/route.ts**
   ```typescript
   import { NextRequest, NextResponse } from 'next/server';
   import nodemailer from 'nodemailer';

   export async function POST(request: NextRequest) {
     try {
       const { name, email, message } = await request.json();

       // 入力値の検証
       if (!name || !email || !message) {
         return NextResponse.json(
           { error: 'すべてのフィールドを入力してください。' },
           { status: 400 }
         );
       }

       // メール設定（環境変数から取得）
       const transporter = nodemailer.createTransporter({
         host: process.env.SMTP_HOST,
         port: parseInt(process.env.SMTP_PORT || '587'),
         secure: false,
         auth: {
           user: process.env.SMTP_USER,
           pass: process.env.SMTP_PASS,
         },
       });

       // メール送信
       await transporter.sendMail({
         from: process.env.SMTP_FROM,
         to: process.env.SMTP_TO,
         subject: `お問い合わせ: ${name}様より`,
         text: `
   名前: ${name}
   メールアドレス: ${email}
   お問い合わせ内容:
   ${message}
         `,
         html: `
           <h2>お問い合わせフォームからのメッセージ</h2>
           <p><strong>名前:</strong> ${name}</p>
           <p><strong>メールアドレス:</strong> ${email}</p>
           <p><strong>お問い合わせ内容:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>
         `,
       });

       return NextResponse.json(
         { message: 'お問い合わせを受け付けました。ありがとうございます。' },
         { status: 200 }
       );

     } catch (error) {
       console.error('メール送信エラー:', error);
       return NextResponse.json(
         { error: 'メール送信に失敗しました。しばらく後でお試しください。' },
         { status: 500 }
       );
     }
   }
   ```

---


# 🚀 STEP 3: GitHub Pages でのデプロイ

## 3.1 GitHub Pages とは

GitHub Pages は GitHub が提供する無料の静的サイトホスティングサービスです。

### メリット
- ✅ 完全無料
- ✅ 独自ドメイン対応
- ✅ HTTPS 自動対応
- ✅ GitHub Actions による自動デプロイ

### デメリット
- ❌ 静的サイトのみ（API Routes 使用不可）
- ❌ サーバーサイド処理不可

## 3.2 GitHub Actions の設定

### 3.2.1 ワークフローファイルの作成

1. **deploy.yml の作成**
   - ファイル名: `.github/workflows/deploy.yml`
   - 内容：
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
           
         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           env:
             NODE_ENV: production
             
         - name: Setup Pages
           uses: actions/configure-pages@v4
           
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./out

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

### 3.2.2 必要なファイルの追加

1. **public/.nojekyll の作成**
   - ファイル名: `public/.nojekyll`
   - 内容: 空ファイル（Jekyll処理を無効化）

2. **public/robots.txt の作成**
   - ファイル名: `public/robots.txt`
   - 内容：
   ```
   User-agent: *
   Allow: /

   Sitemap: https://crater-orbs.com/sitemap.xml
   ```

## 3.3 GitHub Pages の有効化

### 3.3.1 リポジトリ設定

1. **Settings ページにアクセス**
   - GitHubリポジトリページで「Settings」タブをクリック

2. **Pages 設定を開く**
   - 左サイドバーの「Pages」をクリック

3. **Source の設定**
   - Source: 「GitHub Actions」を選択
   - 「Save」をクリック

### 3.3.2 初回デプロイの実行

1. **Actions の確認**
   - リポジトリの「Actions」タブをクリック
   - 「Deploy to GitHub Pages」ワークフローが実行されることを確認

2. **デプロイ状況の監視**
   - ワークフローをクリックして詳細を確認
   - 緑色のチェックマークが表示されれば成功

3. **サイトの確認**
   - デプロイ完了後、以下のURLでアクセス可能：
   - `https://[ユーザー名].github.io/crater-orbs-website`

## 3.4 トラブルシューティング

### よくあるエラーと解決方法

#### ビルドエラー
```
Error: Failed to compile
```
**解決方法:**
- TypeScript エラーを確認
- 依存関係の不足を確認
- `package.json` の内容を再確認

#### デプロイエラー
```
Error: No such file or directory: ./out
```
**解決方法:**
- `next.config.ts` で `output: 'export'` が設定されているか確認
- ビルドが正常に完了しているか確認

#### 404 エラー
```
404 - File not found
```
**解決方法:**
- `basePath` と `assetPrefix` の設定を確認
- `.nojekyll` ファイルが存在するか確認

### デバッグ方法

1. **ローカルでのビルド確認**
   ```bash
   npm install
   npm run build
   ```

2. **Actions ログの確認**
   - GitHub の Actions タブでエラーログを確認

3. **設定ファイルの再確認**
   - `next.config.ts`
   - `package.json`
   - `.github/workflows/deploy.yml`

---


# ⚡ STEP 4: Vercel でのデプロイ（推奨）

## 4.1 Vercel とは

Vercel は Next.js を開発した会社が提供するホスティングサービスです。

### メリット
- ✅ Next.js に最適化
- ✅ API Routes 対応
- ✅ 高速デプロイ（1-3分）
- ✅ 独自ドメイン対応
- ✅ 自動HTTPS
- ✅ 無料プランあり

### デメリット
- ❌ 無料プランには制限あり
- ❌ 商用利用時は有料プランが必要

## 4.2 Vercel アカウントの作成

### 4.2.1 アカウント登録

1. **Vercel にアクセス**
   - [vercel.com](https://vercel.com) にアクセス

2. **GitHub でサインアップ**
   - 「Sign up」をクリック
   - 「Continue with GitHub」を選択
   - GitHub アカウントでログイン
   - Vercel の権限を承認

3. **チーム設定**
   - 個人利用の場合は「Skip」
   - チーム名は後で変更可能

## 4.3 プロジェクトのデプロイ

### 4.3.1 リポジトリの接続

1. **新しいプロジェクトを作成**
   - Vercel Dashboard で「New Project」をクリック

2. **GitHub リポジトリを選択**
   - 「Import Git Repository」セクションで
   - `crater-orbs-website` リポジトリを探す
   - 「Import」をクリック

3. **プロジェクト設定**
   ```
   Project Name: crater-orbs-website
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: out
   Install Command: npm install
   ```

### 4.3.2 環境変数の設定（メール機能用）

1. **Environment Variables を開く**
   - プロジェクト設定で「Environment Variables」タブ

2. **メール設定の追加**
   ```
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = your-email@gmail.com
   SMTP_PASS = your-app-password
   SMTP_FROM = your-email@gmail.com
   SMTP_TO = contact@crater-orbs.com
   ```

   **Gmail の場合のアプリパスワード取得方法:**
   1. Google アカウント設定にアクセス
   2. 「セキュリティ」→「2段階認証プロセス」
   3. 「アプリパスワード」を生成
   4. 生成されたパスワードを `SMTP_PASS` に設定

### 4.3.3 デプロイの実行

1. **Deploy をクリック**
   - 設定完了後、「Deploy」ボタンをクリック

2. **デプロイ状況の確認**
   - ビルドログが表示される
   - 通常 1-3分で完了

3. **デプロイ完了の確認**
   - 緑色の「Success」が表示される
   - 自動生成されたURLが表示される
   - 例: `https://crater-orbs-website-abc123.vercel.app`

## 4.4 Vercel 用設定ファイル

### 4.4.1 vercel.json の作成

Vercel 固有の設定を行うファイルを作成：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs",
  "functions": {
    "app/api/contact/route.ts": {
      "maxDuration": 10
    }
  },
  "env": {
    "SMTP_HOST": "@smtp_host",
    "SMTP_PORT": "@smtp_port", 
    "SMTP_USER": "@smtp_user",
    "SMTP_PASS": "@smtp_pass",
    "SMTP_FROM": "@smtp_from",
    "SMTP_TO": "@smtp_to"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options", 
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 4.4.2 next.config.vercel.ts の作成

Vercel 専用の Next.js 設定：

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel用の設定（静的エクスポートなし）
  images: {
    domains: ['crater-orbs.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // API Routesを有効にする
  experimental: {
    serverActions: {
      allowedOrigins: ['crater-orbs.com', 'www.crater-orbs.com']
    }
  },
  // セキュリティヘッダー
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

## 4.5 自動デプロイの設定

### 4.5.1 Git 連携

Vercel は自動的に以下の動作を行います：

1. **main ブランチへのプッシュ**
   - 自動的に本番環境にデプロイ

2. **プルリクエストの作成**
   - プレビュー環境を自動作成

3. **ブランチへのプッシュ**
   - 開発環境として自動デプロイ

### 4.5.2 デプロイ設定の調整

1. **Settings → Git**
   - Production Branch: `main`
   - Auto-deploy: `Enabled`

2. **Settings → Functions**
   - Region: `Tokyo (hnd1)` （日本の場合）

## 4.6 トラブルシューティング

### よくあるエラーと解決方法

#### ビルドエラー
```
Error: Command "npm run build" exited with 1
```
**解決方法:**
- ローカルで `npm run build` を実行して確認
- 依存関係の問題を解決
- TypeScript エラーを修正

#### 環境変数エラー
```
Error: SMTP configuration missing
```
**解決方法:**
- Environment Variables が正しく設定されているか確認
- 変数名のスペルミスがないか確認

#### メール送信エラー
```
Error: Invalid login
```
**解決方法:**
- Gmail のアプリパスワードを確認
- 2段階認証が有効になっているか確認

### デバッグ方法

1. **Function Logs の確認**
   - Vercel Dashboard → Functions → Logs

2. **ローカル開発環境での確認**
   ```bash
   npm run dev
   ```

3. **Vercel CLI の使用**
   ```bash
   npm i -g vercel
   vercel dev
   ```

---


# 🌐 STEP 5: 独自ドメインの設定

## 5.1 ドメインの取得

### 5.1.1 ドメインレジストラの選択

**推奨ドメインレジストラ:**
- **お名前.com** - 日本語サポート、豊富な拡張子
- **ムームードメイン** - 初心者向け、わかりやすい管理画面
- **Cloudflare** - 高速DNS、セキュリティ機能
- **Google Domains** - シンプル、Google サービス連携

### 5.1.2 ドメイン名の決定

**crater-orbs.com の例:**
```
crater-orbs.com        # メインドメイン
www.crater-orbs.com    # www サブドメイン
```

**ドメイン選択のポイント:**
- 覚えやすい
- 短い
- 会社名・サービス名と関連
- .com, .jp, .co.jp などの信頼性の高い拡張子

## 5.2 GitHub Pages での独自ドメイン設定

### 5.2.1 DNS 設定（ドメインレジストラ側）

#### A レコードの設定
メインドメイン（crater-orbs.com）用：

```
Type: A
Name: @ (または空欄)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (または空欄)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (または空欄)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (または空欄)
Value: 185.199.111.153
TTL: 3600
```

#### CNAME レコードの設定
www サブドメイン用：

```
Type: CNAME
Name: www
Value: [ユーザー名].github.io
TTL: 3600
```

### 5.2.2 GitHub Pages 設定

1. **リポジトリ設定にアクセス**
   - GitHub リポジトリの「Settings」タブ
   - 左サイドバーの「Pages」をクリック

2. **Custom domain の設定**
   - 「Custom domain」欄に `crater-orbs.com` を入力
   - 「Save」をクリック

3. **HTTPS の有効化**
   - 「Enforce HTTPS」にチェックを入れる
   - DNS 伝播後（24-48時間）に有効になる

4. **CNAME ファイルの確認**
   - 自動的に `public/CNAME` ファイルが作成される
   - 内容: `crater-orbs.com`

## 5.3 Vercel での独自ドメイン設定

### 5.3.1 Vercel Dashboard での設定

1. **プロジェクト設定にアクセス**
   - Vercel Dashboard でプロジェクトを選択
   - 「Settings」タブをクリック

2. **Domains の追加**
   - 「Domains」セクションを開く
   - 「Add Domain」をクリック
   - `crater-orbs.com` を入力
   - 「Add」をクリック

3. **DNS 設定指示の確認**
   - Vercel が表示する DNS 設定指示をメモ

### 5.3.2 DNS 設定（ドメインレジストラ側）

#### A レコードの設定
```
Type: A
Name: @ (または空欄)
Value: 76.76.19.61
TTL: 3600
```

#### CNAME レコードの設定
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### 5.3.3 SSL 証明書の確認

1. **自動発行の確認**
   - Vercel は自動的に SSL 証明書を発行
   - 通常 5-10分で完了

2. **設定完了の確認**
   - Domains セクションで緑色のチェックマークを確認
   - `https://crater-orbs.com` でアクセス可能

## 5.4 主要ドメインレジストラでの設定方法

### 5.4.1 お名前.com での設定

1. **管理画面にログイン**
   - [お名前.com Navi](https://www.onamae.com/navi/) にアクセス

2. **DNS 設定画面を開く**
   - 「DNS」→「DNS設定/転送設定」
   - 対象ドメインを選択
   - 「DNS設定」をクリック

3. **レコードの追加**
   - 「DNSレコード設定を利用する」を選択
   - A レコード・CNAME レコードを追加
   - 「確認画面へ進む」→「設定する」

### 5.4.2 ムームードメイン での設定

1. **コントロールパネルにログイン**
   - [ムームードメイン](https://muumuu-domain.com/domain/control/) にアクセス

2. **DNS 設定を開く**
   - 「ドメイン管理」→「ドメイン操作」
   - 「ムームーDNS」をクリック

3. **カスタム設定**
   - 対象ドメインの「変更」をクリック
   - 「カスタム設定」を選択
   - A レコード・CNAME レコードを追加

### 5.4.3 Cloudflare での設定

1. **Cloudflare にドメインを追加**
   - [Cloudflare Dashboard](https://dash.cloudflare.com/) にログイン
   - 「Add a Site」でドメインを追加

2. **DNS レコードの設定**
   - 「DNS」タブをクリック
   - 「Add record」で A レコード・CNAME レコードを追加

3. **プロキシ設定**
   - オレンジ雲マークをクリックしてグレーに変更
   - 「DNS only」モードに設定

4. **ネームサーバーの変更**
   - Cloudflare が指定するネームサーバーに変更
   - ドメインレジストラで設定

## 5.5 DNS 伝播の確認

### 5.5.1 確認ツール

**オンラインツール:**
- [DNS Checker](https://dnschecker.org/)
- [What's My DNS](https://www.whatsmydns.net/)
- [DNS Propagation Checker](https://www.whatsmydns.net/)

### 5.5.2 コマンドラインでの確認

```bash
# A レコードの確認
dig crater-orbs.com

# CNAME レコードの確認
dig www.crater-orbs.com

# 特定の DNS サーバーでの確認
dig @8.8.8.8 crater-orbs.com
```

### 5.5.3 伝播時間

- **通常**: 1-6時間
- **最大**: 24-48時間
- **Cloudflare**: 数分〜1時間

## 5.6 メール設定（オプション）

### 5.6.1 Google Workspace

1. **アカウント作成**
   - [Google Workspace](https://workspace.google.com/) でアカウント作成

2. **ドメイン確認**
   - TXT レコードでドメイン所有権を確認

3. **MX レコードの設定**
   ```
   Type: MX
   Name: @ (または空欄)
   Priority: 1
   Value: aspmx.l.google.com
   
   Type: MX
   Name: @ (または空欄)
   Priority: 5
   Value: alt1.aspmx.l.google.com
   
   Type: MX
   Name: @ (または空欄)
   Priority: 5
   Value: alt2.aspmx.l.google.com
   
   Type: MX
   Name: @ (または空欄)
   Priority: 10
   Value: alt3.aspmx.l.google.com
   
   Type: MX
   Name: @ (または空欄)
   Priority: 10
   Value: alt4.aspmx.l.google.com
   ```

### 5.6.2 Microsoft 365

1. **アカウント作成**
   - [Microsoft 365](https://www.microsoft.com/microsoft-365) でアカウント作成

2. **ドメイン追加**
   - 管理センターでドメインを追加

3. **MX レコードの設定**
   - Microsoft が指定する MX レコードを設定

## 5.7 トラブルシューティング

### よくある問題と解決方法

#### DNS_PROBE_FINISHED_NXDOMAIN エラー
**原因:** DNS 設定が正しくない、または伝播が完了していない

**解決方法:**
1. DNS 設定を再確認
2. 24-48時間待つ
3. ブラウザキャッシュをクリア

#### SSL 証明書エラー
**原因:** HTTPS 設定が完了していない

**解決方法:**
1. DNS 伝播完了を待つ
2. HTTPS 強制設定を確認
3. ブラウザキャッシュをクリア

#### www ありなしの統一
**解決方法:**
1. メインドメインを決定（crater-orbs.com）
2. リダイレクト設定を追加
3. 内部リンクを統一

### 設定確認チェックリスト

- [ ] ドメインを取得済み
- [ ] A レコード設定完了
- [ ] CNAME レコード設定完了
- [ ] GitHub Pages または Vercel でドメイン追加
- [ ] HTTPS 強制設定を有効化
- [ ] DNS 伝播完了
- [ ] サイトが正常に表示される
- [ ] SSL 証明書が有効
- [ ] メール設定（必要に応じて）

---


# 📝 STEP 6: 記事管理とメンテナンス

## 6.1 記事管理システムの概要

### 6.1.1 システム構成

Crater Orbs ウェブサイトでは、Markdown ベースの記事管理システムを採用しています。

**特徴:**
- ✅ Markdown 形式で記事作成
- ✅ GitHub で記事管理
- ✅ 自動デプロイ
- ✅ 技術知識不要

**ファイル構成:**
```
posts/
├── ai-development-trends-2025.md
├── web-development-best-practices.md
├── company-update-2025.md
└── [新しい記事].md
```

### 6.1.2 記事ファイルの形式

各記事は以下の構造で作成します：

```markdown
---
title: '記事のタイトル'
date: '2025-01-23'
author: '著者名'
excerpt: '記事の要約文（150文字程度）'
tags: ['タグ1', 'タグ2', 'タグ3']
---

# 記事のタイトル

記事の本文をここに書きます。

## 見出し2

段落の内容...

### 見出し3

- リスト項目1
- リスト項目2
- リスト項目3

**太字のテキスト**

*斜体のテキスト*

[リンクテキスト](https://example.com)
```

## 6.2 新しい記事の追加

### 6.2.1 GitHub Web インターフェースを使用（推奨）

1. **リポジトリにアクセス**
   - GitHub で `crater-orbs-website` リポジトリを開く

2. **posts フォルダを開く**
   - `posts/` フォルダをクリック

3. **新しいファイルを作成**
   - 「Add file」→「Create new file」をクリック

4. **ファイル名を入力**
   - 形式: `YYYY-MM-DD-article-title.md`
   - 例: `2025-01-23-new-product-launch.md`

5. **記事内容を入力**
   - 以下のテンプレートを使用：

   ```markdown
   ---
   title: '新プロダクトのローンチについて'
   date: '2025-01-23'
   author: 'Crater Orbs開発チーム'
   excerpt: '新しいプロダクトのローンチに関するお知らせです。革新的な機能と改善されたユーザー体験をお届けします。'
   tags: ['プロダクト', 'ローンチ', 'お知らせ']
   ---

   # 新プロダクトのローンチについて

   ## はじめに

   この度、Crater Orbs では新しいプロダクトをローンチいたします。

   ## 主な特徴

   ### 革新的な機能

   新プロダクトには以下の特徴があります：

   - 高速処理
   - 直感的なUI
   - 豊富なカスタマイズ機能

   ### 改善されたユーザー体験

   ユーザーの皆様からのフィードバックを基に、以下の改善を行いました：

   - レスポンス時間の短縮
   - エラー処理の改善
   - アクセシビリティの向上

   ## まとめ

   新プロダクトにより、より良いサービスを提供できるよう努めてまいります。

   ---

   **関連記事**
   - [プロダクト開発の裏側](リンク)
   - [ユーザーフィードバックの活用](リンク)
   ```

6. **記事をコミット**
   - 「Commit new file」をクリック
   - コミットメッセージ: `新しい記事を追加: [記事タイトル]`

### 6.2.2 記事作成スクリプトを使用

ローカル環境で記事作成スクリプトを使用する方法：

1. **スクリプトの実行**
   ```bash
   cd crater-orbs-website
   node scripts/create-post.js
   ```

2. **対話形式で入力**
   ```
   記事のタイトルを入力してください: 新プロダクトのローンチについて
   著者名を入力してください: Crater Orbs開発チーム
   記事の要約を入力してください: 新しいプロダクトのローンチに関するお知らせです
   タグを入力してください: プロダクト,ローンチ,お知らせ
   ```

3. **ファイルの確認と編集**
   - 生成されたファイルを確認
   - 内容を編集して完成

4. **Git でコミット**
   ```bash
   git add posts/2025-01-23-new-product-launch.md
   git commit -m "新しい記事を追加: 新プロダクトのローンチについて"
   git push origin main
   ```

## 6.3 記事の編集・更新

### 6.3.1 既存記事の編集

1. **記事ファイルを開く**
   - GitHub で該当する記事ファイルをクリック

2. **編集モードに切り替え**
   - 鉛筆アイコン（Edit this file）をクリック

3. **内容を編集**
   - 必要に応じて `date` フィールドを更新
   - 本文を修正

4. **変更をコミット**
   - 「Commit changes」をクリック
   - コミットメッセージ: `記事を更新: [記事タイトル]`

### 6.3.2 記事の削除

1. **記事ファイルを開く**
   - GitHub で該当する記事ファイルをクリック

2. **削除**
   - ゴミ箱アイコン（Delete this file）をクリック

3. **削除をコミット**
   - 「Commit changes」をクリック
   - コミットメッセージ: `記事を削除: [記事タイトル]`

## 6.4 記事作成のベストプラクティス

### 6.4.1 メタデータの設定

#### title（必須）
- 記事のタイトル
- SEO に影響するため、検索されやすいキーワードを含める
- 50文字以内が推奨

#### date（必須）
- 記事の公開日
- 形式：`YYYY-MM-DD`
- 例：`2025-01-23`

#### author（必須）
- 記事の著者名
- 例：`Crater Orbs開発チーム`、`代表取締役`

#### excerpt（必須）
- 記事の要約文
- ニュース一覧で表示される
- 150文字程度が適切

#### tags（必須）
- 記事のカテゴリやキーワード
- 配列形式で3-5個程度
- 例：`['AI', '機械学習', '技術トレンド']`

### 6.4.2 ファイル名の命名規則

- 英数字とハイフンのみ使用
- 日付を含める（推奨）
- 内容が分かりやすい名前
- 例：`2025-01-23-ai-trends.md`

### 6.4.3 本文の書き方

#### 見出し構造
```markdown
# 記事タイトル（H1）- メタデータのtitleと同じ

## 大見出し（H2）

### 中見出し（H3）

#### 小見出し（H4）
```

#### 段落とリスト
```markdown
段落は空行で区切ります。

- 箇条書きリスト
- 項目2
- 項目3

1. 番号付きリスト
2. 項目2
3. 項目3
```

#### 強調とリンク
```markdown
**重要なテキスト**

*強調したいテキスト*

[リンクテキスト](https://example.com)
```

## 6.5 自動デプロイの仕組み

### 6.5.1 GitHub Pages の場合

1. **記事の追加・更新**
   - `main` ブランチにプッシュ

2. **GitHub Actions の実行**
   - `.github/workflows/deploy.yml` が自動実行

3. **ビルドプロセス**
   - 依存関係のインストール
   - Next.js ビルド
   - 静的ファイル生成

4. **デプロイ**
   - GitHub Pages に自動デプロイ
   - 約2-5分で反映

### 6.5.2 Vercel の場合

1. **記事の追加・更新**
   - `main` ブランチにプッシュ

2. **Vercel の自動検知**
   - Git 連携により自動検知

3. **ビルドプロセス**
   - 依存関係のインストール
   - Next.js ビルド

4. **デプロイ**
   - Vercel に自動デプロイ
   - 約1-3分で反映

## 6.6 サイトのメンテナンス

### 6.6.1 定期的な更新

#### 依存関係の更新
```bash
# パッケージの更新確認
npm outdated

# 更新の実行
npm update

# セキュリティ脆弱性の修正
npm audit fix
```

#### Next.js のバージョンアップ
```bash
# 最新バージョンの確認
npm info next version

# アップデート
npm install next@latest react@latest react-dom@latest
```

### 6.6.2 パフォーマンス監視

#### Core Web Vitals の確認
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

#### アクセス解析
- Google Analytics 4
- Vercel Analytics

### 6.6.3 セキュリティ対策

#### 定期的なセキュリティチェック
```bash
# 脆弱性スキャン
npm audit

# 自動修正
npm audit fix
```

#### 環境変数の管理
- 本番環境では環境変数を適切に設定
- APIキーやパスワードをコードに含めない

## 6.7 トラブルシューティング

### 6.7.1 よくある問題

#### 記事が表示されない
**原因と解決方法:**
- メタデータの形式が正しいか確認
- ファイル名に日本語や特殊文字が含まれていないか確認
- `posts/` ディレクトリに配置されているか確認

#### 日付の形式エラー
**解決方法:**
- 日付は `YYYY-MM-DD` 形式で入力
- 例：`2025-01-23`

#### タグが表示されない
**解決方法:**
- タグは配列形式で記述：`['タグ1', 'タグ2']`
- シングルクォートまたはダブルクォートで囲む

#### 自動デプロイが失敗する
**解決方法:**
- GitHub Actions または Vercel のログを確認
- Markdown の構文エラーがないか確認
- メタデータの形式が正しいか確認

### 6.7.2 サポート

記事管理に関する質問や問題がある場合：

- **GitHub Issues**: リポジトリの Issues ページ
- **Email**: support@crater-orbs.com

---


# 🎯 STEP 7: 完了チェックリストとまとめ

## 7.1 デプロイ完了チェックリスト

### 7.1.1 基本設定

- [ ] **GitHubアカウント作成済み**
- [ ] **リポジトリ作成完了**
  - リポジトリ名: `crater-orbs-website`
  - 公開設定: Public
- [ ] **全ファイルアップロード完了**
  - app/ ディレクトリ
  - components/ ディレクトリ
  - lib/ ディレクトリ
  - posts/ ディレクトリ
  - public/ ディレクトリ
  - scripts/ ディレクトリ
  - .github/workflows/ ディレクトリ
  - 設定ファイル群

### 7.1.2 デプロイ設定

#### GitHub Pages の場合
- [ ] **GitHub Actions 設定完了**
  - `.github/workflows/deploy.yml` 配置済み
- [ ] **Pages 設定完了**
  - Source: GitHub Actions
  - Custom domain 設定（独自ドメイン使用時）
  - Enforce HTTPS 有効化
- [ ] **デプロイ成功確認**
  - Actions タブで緑色のチェックマーク
  - サイトが正常に表示される

#### Vercel の場合
- [ ] **Vercel アカウント作成済み**
- [ ] **プロジェクト接続完了**
  - GitHub リポジトリと連携
  - Framework Preset: Next.js
- [ ] **環境変数設定完了**（メール機能使用時）
  - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO
- [ ] **デプロイ成功確認**
  - Dashboard で緑色の Success 表示
  - サイトが正常に表示される

### 7.1.3 独自ドメイン設定（オプション）

- [ ] **ドメイン取得済み**
- [ ] **DNS 設定完了**
  - A レコード設定
  - CNAME レコード設定
- [ ] **ホスティングサービスでドメイン追加**
  - GitHub Pages または Vercel
- [ ] **HTTPS 有効化**
- [ ] **DNS 伝播完了**
  - 独自ドメインでアクセス可能
  - SSL 証明書有効

### 7.1.4 機能確認

- [ ] **サイト表示確認**
  - ヒーローセクション
  - プロダクト紹介セクション
  - ニュースセクション
  - お問い合わせフォーム
  - フッター
- [ ] **レスポンシブ確認**
  - PC表示
  - タブレット表示
  - スマートフォン表示
- [ ] **アニメーション確認**
  - スクロールアニメーション
  - ホバーエフェクト
- [ ] **記事表示確認**
  - 3つのサンプル記事が表示される
  - 記事の詳細が正しく表示される

## 7.2 運用開始後のタスク

### 7.2.1 記事管理

- [ ] **初回記事の作成**
  - 会社紹介記事
  - サービス紹介記事
  - お知らせ記事
- [ ] **記事更新スケジュール策定**
  - 月1回以上の更新推奨
  - 季節やイベントに合わせた記事
- [ ] **記事作成フローの確立**
  - 担当者の決定
  - 承認プロセスの設定

### 7.2.2 SEO対策

- [ ] **Google Search Console 登録**
  - サイトマップ送信
  - インデックス状況確認
- [ ] **Google Analytics 設定**
  - トラッキングコード設置
  - 目標設定
- [ ] **メタデータ最適化**
  - 各ページのタイトル・説明文
  - OGP画像の設定

### 7.2.3 メンテナンス

- [ ] **定期更新スケジュール**
  - 月1回の依存関係更新
  - 四半期ごとのセキュリティチェック
- [ ] **バックアップ体制**
  - GitHub リポジトリが自動バックアップ
  - 重要な変更前のブランチ作成
- [ ] **監視体制**
  - サイトの稼働監視
  - パフォーマンス監視

## 7.3 推奨される次のステップ

### 7.3.1 機能拡張

1. **ブログ詳細ページの追加**
   - 個別記事ページの作成
   - 関連記事の表示
   - コメント機能の追加

2. **検索機能の実装**
   - 記事検索
   - タグ別フィルタリング
   - カテゴリ分類

3. **多言語対応**
   - 英語版サイトの作成
   - 言語切り替え機能
   - 国際化対応

### 7.3.2 マーケティング機能

1. **ニュースレター機能**
   - メール配信システム
   - 購読者管理
   - 配信スケジュール

2. **ソーシャルメディア連携**
   - SNS シェアボタン
   - 自動投稿機能
   - ソーシャルログイン

3. **アナリティクス強化**
   - ヒートマップ分析
   - A/Bテスト機能
   - コンバージョン追跡

### 7.3.3 技術的改善

1. **パフォーマンス最適化**
   - 画像最適化
   - CDN 設定
   - キャッシュ戦略

2. **セキュリティ強化**
   - WAF 設定
   - DDoS 対策
   - セキュリティヘッダー追加

3. **開発環境改善**
   - CI/CD パイプライン強化
   - テスト自動化
   - コード品質管理

## 7.4 サポートとリソース

### 7.4.1 公式ドキュメント

- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)

### 7.4.2 コミュニティ

- **Next.js Discord**: [nextjs.org/discord](https://nextjs.org/discord)
- **GitHub Community**: [github.community](https://github.community)
- **Stack Overflow**: [stackoverflow.com](https://stackoverflow.com)

### 7.4.3 学習リソース

- **Next.js Learn**: [nextjs.org/learn](https://nextjs.org/learn)
- **React 公式チュートリアル**: [react.dev/learn](https://react.dev/learn)
- **Tailwind CSS プレイグラウンド**: [play.tailwindcss.com](https://play.tailwindcss.com)

## 7.5 最終確認

### 7.5.1 サイトの動作確認

以下のURLでサイトが正常に動作することを確認してください：

**GitHub Pages の場合:**
- `https://[ユーザー名].github.io/crater-orbs-website`

**Vercel の場合:**
- `https://crater-orbs-website-[ランダム文字列].vercel.app`

**独自ドメインの場合:**
- `https://crater-orbs.com`

### 7.5.2 機能テスト

1. **ページ表示テスト**
   - 全セクションが正常に表示される
   - アニメーションが動作する
   - レスポンシブデザインが機能する

2. **記事機能テスト**
   - 3つのサンプル記事が表示される
   - 記事の内容が正しく表示される
   - タグが正しく表示される

3. **お問い合わせフォームテスト**
   - フォームが正常に表示される
   - バリデーションが動作する
   - 送信処理が正常に動作する（Vercelの場合）

### 7.5.3 パフォーマンステスト

- **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)

目標スコア:
- Performance: 90以上
- Accessibility: 95以上
- Best Practices: 90以上
- SEO: 95以上

---

# 🎉 おめでとうございます！

Crater Orbs ウェブサイトのデプロイが完了しました！

このガイドに従って設定することで、以下が実現できました：

✅ **プロフェッショナルなウェブサイト**
- 美しいダークテーマデザイン
- 滑らかなアニメーション
- 完全レスポンシブ対応

✅ **効率的な記事管理システム**
- Markdown ベースの簡単な記事作成
- GitHub での記事管理
- 自動デプロイ

✅ **本格的なホスティング環境**
- 高速で安定したホスティング
- 独自ドメイン対応
- HTTPS 自動対応

✅ **継続的な運用体制**
- 自動デプロイ
- 簡単な記事更新
- 拡張可能な設計

これで、あなたの会社の素晴らしいウェブサイトが世界中からアクセス可能になりました。

継続的にコンテンツを更新し、ユーザーに価値を提供し続けてください！

**🚀 素晴らしいウェブサイトの完成です！**

---

## 📞 サポート

このガイドに関する質問や問題がある場合は、以下の方法でお問い合わせください：

- **GitHub Issues**: リポジトリの Issues ページ
- **Email**: support@crater-orbs.com

皆様の成功を心よりお祈りしております！

