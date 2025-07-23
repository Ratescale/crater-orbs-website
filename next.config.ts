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