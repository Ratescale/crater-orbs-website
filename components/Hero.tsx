import React from "react";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 py-24 text-center overflow-hidden bg-gradient-to-b from-[#0a0a23] via-[#18182f] to-black"
    >
      {/* グラデーションのオーバーレイ */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-tr from-indigo-900/60 via-purple-900/40 to-transparent" />
      <h1 className="relative z-10 text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
        Crater Orbs
      </h1>
      <p className="relative z-10 text-lg md:text-2xl text-gray-300 max-w-2xl mb-10 font-medium">
        未来を切り拓く、プロダクト開発カンパニー。<br />
        革新的なアイデアとテクノロジーで、あなたのビジネスを加速します。
      </p>
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center mt-4">
        <a
          href="#contact"
          className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg shadow-lg transition duration-200"
        >
          お問い合わせ
        </a>
        <a
          href="#news"
          className="px-8 py-4 rounded-full border border-indigo-400 text-indigo-200 hover:bg-indigo-900/30 font-bold text-lg transition duration-200"
        >
          最新ニュースを見る
        </a>
      </div>
      {/* 背景の星や装飾（シンプルな例） */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-30" style={{position:'absolute',top:0,left:0}}>
          <circle cx="20%" cy="30%" r="2" fill="#fff" />
          <circle cx="80%" cy="60%" r="1.5" fill="#fff" />
          <circle cx="60%" cy="20%" r="1" fill="#fff" />
          <circle cx="40%" cy="80%" r="1.2" fill="#fff" />
        </svg>
      </div>
    </section>
  );
} 