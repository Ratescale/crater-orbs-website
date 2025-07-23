import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-[#23234a] via-[#18182f] to-black">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
          お問い合わせ
        </h2>
        <form className="space-y-6 bg-[#23234a]/80 p-10 rounded-2xl shadow-lg border border-indigo-900/40">
          <div>
            <label className="block mb-2 text-indigo-100 font-semibold">お名前</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-indigo-900/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" required />
          </div>
          <div>
            <label className="block mb-2 text-indigo-100 font-semibold">メールアドレス</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-indigo-900/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" required />
          </div>
          <div>
            <label className="block mb-2 text-indigo-100 font-semibold">お問い合わせ内容</label>
            <textarea className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-indigo-900/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" rows={5} required />
          </div>
          <button type="submit" className="w-full py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg shadow-lg transition duration-200">
            送信
          </button>
        </form>
      </div>
    </section>
  );
} 