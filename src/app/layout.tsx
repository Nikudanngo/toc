import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import { Header } from "@/ui/Header";
import "./globals.css";
import { Footer } from "@/ui/Footer";
import { Analytics } from "@vercel/analytics/react";

// https://zenn.dev/hayato94087/articles/f6557abbd6d079
// を参考にGoogle Fontsを使う
const ZenMaruGothic = Zen_Maru_Gothic({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-zen-maru-gothic",
});

export const metadata: Metadata = {
  title: "Thought of Ocean",
  description:
    "竹歯ブラシ-KAGUYAの公式サイト。竹歯ブラシブランドThought of Oceanから高品質な歯ブラシを全国どこでもお届けします。",
  icons: "/favicon.ico",
  keywords: [
    "竹歯ブラシ",
    "KAGUYA",
    "Thought of Ocean",
    "歯ブラシ",
    "竹製品",
    "海洋環境",
    "SDGs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${ZenMaruGothic.variable} min-h-dvh overflow-x-hidden`}>
        <Header />
        <main className="">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
