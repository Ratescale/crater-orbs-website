# Crater Orbs ウェブサイト

未来を切り拓く、プロダクト開発カンパニーのコーポレートサイト

## 🚀 プロジェクト概要

Crater Orbsは革新的なAI・Web技術を活用したプロダクト開発を行う企業のコーポレートサイトです。vastspace.com風のダークテーマと宇宙感のあるデザインで、未来的でプロフェッショナルな印象を与えます。

### ✨ 主な機能

- **アニメーション豊富なヒーローセクション** - Framer Motionによる滑らかなアニメーション
- **動的ニュース機能** - Markdownファイルから記事を自動読み込み
- **お問い合わせフォーム** - メール送信機能付き
- **レスポンシブデザイン** - PC・タブレット・スマートフォン対応
- **SEO最適化** - メタデータ、構造化データ、サイトマップ対応

## 🛠 技術スタック

- **Next.js 15.4.3** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS 3.x**
- **Framer Motion** (アニメーション)
- **Gray Matter** + **Remark** (Markdown処理)
- **Nodemailer** (メール送信)

## 📋 前提条件

- Node.js 20.x以上
- npm または yarn

## 🚀 ローカル環境でのセットアップ

### 1. リポジトリのクローン・ファイルの配置

プロジェクトファイルを任意のディレクトリに配置してください。

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスしてサイトを確認できます。

### 4. 本番ビルドの確認

```bash
# ビルド実行
npm run build

# 本番サーバー起動
npm start
```

## 📁 プロジェクト構造

```
crater-orbs-website/
├── app/                    # Next.js App Router
│   ├── api/
│   │   └── contact/        # お問い合わせAPI
│   ├── globals.css         # グローバルスタイル
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx           # メインページ
│   └── sitemap.ts         # サイトマップ生成
├── components/             # Reactコンポーネント
│   ├── Hero.tsx           # ヒーローセクション
│   ├── ProductIntro.tsx   # プロダクト紹介
│   ├── News.tsx           # ニュースセクション
│   ├── ContactForm.tsx    # お問い合わせフォーム
│   ├── Footer.tsx         # フッター
│   └── StructuredData.tsx # 構造化データ
├── lib/
│   └── posts.ts           # 記事処理ユーティリティ
├── posts/                 # Markdown記事ファイル
│   ├── ai-development-trends-2025.md
│   ├── web-development-best-practices.md
│   └── company-update-2025.md
├── public/                # 静的ファイル
│   └── robots.txt
└── package.json
```

## ✏️ コンテンツの編集方法

### ニュース記事の追加・編集

1. `posts/` ディレクトリに新しいMarkdownファイルを作成
2. ファイルの先頭にメタデータを記述：

```markdown
---
title: '記事のタイトル'
date: '2025-01-23'
author: '著者名'
excerpt: '記事の要約文'
tags: ['タグ1', 'タグ2', 'タグ3']
---

記事の本文をここに書きます。
```

### 企業情報の変更

- `components/Hero.tsx` - メインキャッチコピー
- `components/ProductIntro.tsx` - サービス特長
- `components/Footer.tsx` - 企業情報・リンク
- `app/layout.tsx` - SEOメタデータ

### スタイルのカスタマイズ

- `app/globals.css` - グローバルスタイル
- 各コンポーネントファイル内のTailwind CSSクラス

## 📧 メール送信機能の設定

お問い合わせフォームからのメール送信を有効にするには、環境変数を設定してください。

### 1. 環境変数ファイルの作成

プロジェクトルートに `.env.local` ファイルを作成：

```bash
# Gmail SMTPの例
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=contact@crater-orbs.com
```

### 2. Gmail App Passwordの取得

1. Googleアカウントの2段階認証を有効化
2. [App Passwords](https://myaccount.google.com/apppasswords) でアプリパスワードを生成
3. 生成されたパスワードを `SMTP_PASS` に設定

## 🎨 デザインのカスタマイズ

### カラーパレット

プロジェクトでは以下のカラーパレットを使用しています：

- **プライマリ**: Indigo (indigo-600, indigo-700)
- **セカンダリ**: Purple (purple-900, purple-300)
- **アクセント**: Pink (pink-300)
- **背景**: Black, Dark Blue (indigo-900, #18182f, #23234a)

### アニメーション

Framer Motionを使用したアニメーション：

- **フェードイン**: 要素の段階的表示
- **スライドアップ**: 下から上への移動
- **ホバーエフェクト**: マウスオーバー時の拡大・移動
- **背景パーティクル**: 動的な背景要素

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm start

# TypeScript型チェック
npm run type-check

# ESLintチェック
npm run lint

# ESLint自動修正
npm run lint:fix
```

## 🚀 デプロイ方法

### Vercelへのデプロイ（推奨）

1. [Vercel](https://vercel.com) にアカウント作成
2. GitHubリポジトリと連携
3. 環境変数を設定
4. 自動デプロイ開始

### Netlifyへのデプロイ

1. [Netlify](https://netlify.com) にアカウント作成
2. `npm run build` でビルド
3. `out/` ディレクトリをデプロイ

### 手動デプロイ

```bash
# 静的ファイル生成
npm run build
npm run export

# 生成されたファイルをサーバーにアップロード
```

## 🐛 トラブルシューティング

### よくある問題と解決方法

**Q: 開発サーバーが起動しない**
```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
```

**Q: ビルドエラーが発生する**
```bash
# TypeScript型チェック
npm run type-check

# ESLintチェック
npm run lint
```

**Q: アニメーションが動作しない**
- ブラウザがFramer Motionをサポートしているか確認
- `"use client"` ディレクティブが追加されているか確認

**Q: メール送信が失敗する**
- 環境変数が正しく設定されているか確認
- SMTPサーバーの認証情報が正しいか確認

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 コントリビューション

プロジェクトへの貢献を歓迎します！

1. フォークを作成
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📞 サポート

質問や問題がある場合は、以下の方法でお問い合わせください：

- Issues: GitHubのIssuesページ
- Email: support@crater-orbs.com

---

**Crater Orbs** - 未来を切り拓く、プロダクト開発カンパニー

