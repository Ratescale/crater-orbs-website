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