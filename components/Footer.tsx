import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm">
      <div>© {new Date().getFullYear()} Crater Orbs. All rights reserved.</div>
      <div className="mt-2">運営：Crater Orbs株式会社</div>
    </footer>
  );
} 