import React from "react";

const features = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="#a5b4fc" strokeWidth="3" fill="#312e81" /><path d="M20 12v8l6 3" stroke="#a5b4fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "最先端のAI・Web技術",
    desc: "革新的なテクノロジーで課題を解決し、未来を創造します。",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="6" y="6" width="28" height="28" rx="8" fill="#312e81" stroke="#a5b4fc" strokeWidth="3"/><path d="M14 20h12" stroke="#a5b4fc" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
    title: "柔軟なチーム体制",
    desc: "スピーディかつ柔軟な開発サイクルでご要望に応えます。",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="16" ry="10" fill="#312e81" stroke="#a5b4fc" strokeWidth="3"/><path d="M12 20a8 8 0 0 0 16 0" stroke="#a5b4fc" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
    title: "ワンストップ対応",
    desc: "UI/UXデザインから運用まで一貫してサポートします。",
  },
];

export default function ProductIntro() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#18182f] via-[#23234a] to-black">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
          Crater Orbsの特長
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-[#23234a]/80 rounded-2xl p-8 shadow-lg border border-indigo-900/40 hover:scale-105 transition-transform duration-200"
            >
              <div className="mb-4">{f.icon}</div>
              <div className="text-xl font-bold mb-2 text-indigo-100 text-center">{f.title}</div>
              <div className="text-gray-300 text-center text-base">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 