# Crater Orbs ウェブサイト プロジェクト資料

## プロジェクト情報

| 項目 | 内容 |
|------|------|
| **プロジェクト名** | Crater Orbs Corporate Website |
| **説明** | 未来を切り拓くプロダクト開発カンパニーのコーポレートサイト |
| **バージョン** | v1.0.0 |
| **開発期間** | 2025年1月 |
| **ターゲット** | 企業・個人事業主・スタートアップ |
| **デザインコンセプト** | vastspace.com風のダークテーマ、宇宙・未来感のあるデザイン |

### プロジェクト概要

Crater Orbsは革新的なプロダクト開発を行う企業のコーポレートサイトです。AI・Web技術を活用した最先端のソリューションを提供し、クライアントのビジネス成長を支援することを目的としています。

## 技術スタック

### フロントエンド
- **Next.js 15.4.3** - React フレームワーク（App Router使用）
- **React 18** - UIライブラリ
- **TypeScript** - 型安全なJavaScript
- **Tailwind CSS 3.x** - ユーティリティファーストCSSフレームワーク
- **Framer Motion** - アニメーションライブラリ

### バックエンド・API
- **Next.js API Routes** - サーバーレス関数
- **Nodemailer** - メール送信機能

### 開発ツール
- **ESLint** - コード品質チェック
- **PostCSS** - CSS処理
- **Autoprefixer** - ベンダープレフィックス自動追加

### コンテンツ管理
- **Gray Matter** - Markdownメタデータ解析
- **Remark** - Markdown処理
- **Remark HTML** - Markdown to HTML変換

## コーディング規約

### ファイル・ディレクトリ構造
```
crater-orbs-website/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   └── contact/       # お問い合わせAPI
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx          # メインページ
│   └── sitemap.ts        # サイトマップ生成
├── components/            # Reactコンポーネント
│   ├── Hero.tsx          # ヒーローセクション
│   ├── ProductIntro.tsx  # プロダクト紹介
│   ├── News.tsx          # ニュースセクション
│   ├── ContactForm.tsx   # お問い合わせフォーム
│   ├── Footer.tsx        # フッター
│   └── StructuredData.tsx # 構造化データ
├── lib/                  # ユーティリティ関数
│   └── posts.ts          # 記事処理
├── posts/                # Markdown記事
├── public/               # 静的ファイル
└── package.json          # 依存関係
```

### 命名規則
- **コンポーネント**: PascalCase（例: `Hero.tsx`, `ContactForm.tsx`）
- **関数・変数**: camelCase（例: `getSortedPostsData`, `windowSize`）
- **定数**: UPPER_SNAKE_CASE（例: `API_ENDPOINT`）
- **CSS クラス**: Tailwind CSS ユーティリティクラス使用

### TypeScript規約
- 明示的な型定義を使用
- `Variants`型をFramer Motionで明示的に指定
- インターフェースは`interface`キーワードを使用
- 型エイリアスは`type`キーワードを使用

### React規約
- 関数コンポーネントを使用
- Hooksは適切に使用（`useState`, `useEffect`, `useRef`など）
- `"use client"`ディレクティブをクライアントコンポーネントで使用
- プロップスの型定義を明確に行う

## 開発プロセス

### 開発環境セットアップ
1. Node.js 20.x以上をインストール
2. プロジェクトの依存関係をインストール: `npm install`
3. 開発サーバー起動: `npm run dev`
4. ブラウザで `http://localhost:3000` にアクセス

### ビルドプロセス
1. 本番ビルド: `npm run build`
2. 本番サーバー起動: `npm start`
3. 静的エクスポート（必要に応じて）: `npm run export`

### テスト要件
- TypeScript型チェック: `npm run type-check`
- ESLintチェック: `npm run lint`
- 手動テスト: 各ブラウザでの表示確認

### パフォーマンス最適化ガイドライン
- **画像最適化**: Next.js Image コンポーネント使用
- **コード分割**: 動的インポートの活用
- **SSR/SSG**: 適切な描画戦略の選択
- **バンドルサイズ**: 不要な依存関係の削除
- **キャッシュ戦略**: 適切なキャッシュヘッダー設定

### SEO最適化
- メタデータの適切な設定
- 構造化データ（JSON-LD）の実装
- サイトマップの自動生成
- robots.txtの設定
- OGP・Twitter Cardの設定

## エラー処理とドキュメント

### エラー処理メカニズム
1. **TypeScriptエラー**: 開発時に型エラーを検出
2. **ランタイムエラー**: try-catch文での適切な例外処理
3. **APIエラー**: HTTPステータスコードによる適切なエラーレスポンス
4. **フォームエラー**: ユーザーフレンドリーなエラーメッセージ表示

### ログ出力
- 開発環境: `console.log`, `console.error`使用
- 本番環境: 適切なログレベルでの出力

### ドキュメント作成規則
- **README.md**: プロジェクト概要と基本的な使用方法
- **API仕様**: API Routesの仕様をコメントで記載
- **コンポーネント**: プロップスと使用例をコメントで記載
- **型定義**: 複雑な型にはコメントで説明を追加

### コードコメント規則
```typescript
/**
 * 記事データを取得してソートする関数
 * @returns {PostData[]} ソート済みの記事データ配列
 */
export function getSortedPostsData(): PostData[] {
  // 実装...
}
```

## 機能仕様

### 実装済み機能
1. **ヒーローセクション**: アニメーション付きメインビジュアル
2. **プロダクト紹介**: 3つの特長をカード形式で表示
3. **ニュースセクション**: Markdownファイルから動的に記事を読み込み
4. **お問い合わせフォーム**: メール送信機能付き
5. **フッター**: 企業情報とリンク
6. **アニメーション**: Framer Motionによる滑らかなアニメーション
7. **レスポンシブデザイン**: モバイル・タブレット対応
8. **SEO対応**: メタデータ、構造化データ、サイトマップ

### 今後の拡張可能性
- 多言語対応（i18n）
- CMS連携
- ブログ機能の拡充
- 管理画面の追加
- パフォーマンス分析ツールの統合

## デプロイメント

### 推奨デプロイ先
1. **Vercel** - Next.jsに最適化されたプラットフォーム
2. **Netlify** - 静的サイトホスティング
3. **AWS Amplify** - AWSのフルスタックプラットフォーム

### 環境変数
```bash
# メール送信設定（本番環境で設定）
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### デプロイ前チェックリスト
- [ ] 本番ビルドが成功すること
- [ ] 全ページが正常に表示されること
- [ ] フォーム送信が正常に動作すること
- [ ] モバイル表示が適切であること
- [ ] SEOメタデータが正しく設定されていること
- [ ] パフォーマンススコアが良好であること

## 保守・運用

### 定期メンテナンス
- 依存関係の更新（月次）
- セキュリティアップデート（随時）
- パフォーマンス監視（週次）
- コンテンツ更新（随時）

### 監視項目
- サイトの可用性
- ページ読み込み速度
- エラー率
- フォーム送信成功率

---

**作成日**: 2025年1月23日  
**最終更新**: 2025年1月23日  
**作成者**: Manus AI Agent

