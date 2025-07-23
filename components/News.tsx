import React from "react";

export interface NewsProps {
  posts: Array<{
    id: string;
    title: string;
    date: string;
    excerpt: string;
    author: string;
    tags: string[];
  }>;
}

export default function News({ posts }: NewsProps) {
  return (
    <section id="news" className="relative py-20 bg-gradient-to-b from-black via-[#18182f] to-[#23234a]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
          ニュース
        </h2>
        <div className="flex flex-col items-center gap-8">
          {posts.length === 0 ? (
            <div className="w-full bg-[#23234a]/80 rounded-2xl p-8 shadow-lg border border-indigo-900/40 text-center">
              <div className="text-gray-400 text-lg mb-2">最新のお知らせは現在準備中です。</div>
              <div className="text-xs text-gray-600">Coming soon...</div>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="w-full bg-[#23234a]/80 rounded-2xl p-8 shadow-lg border border-indigo-900/40">
                <div className="text-indigo-200 text-sm mb-2">{post.date} | {post.author}</div>
                <div className="text-xl font-bold mb-2 text-indigo-100">{post.title}</div>
                <div className="text-gray-300 mb-2">{post.excerpt}</div>
                <div className="text-xs text-gray-400">タグ: {post.tags.join(', ')}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
} 