import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import { Header } from "@/ui/Header";
import "./globals.css";
import { Footer } from "@/ui/Footer";

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
    "日本人のために設計された竹歯ブラシ-KAGUYAの公式サイト。竹歯ブラシブランドThought of Oceanから高品質な歯ブラシを全国どこでもお届けします。",
  icons: "/favicon.ico",
  keywords: ["竹歯ブラシ", "KAGUYA", "Thought of Ocean"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${ZenMaruGothic.variable} min-h-dvh`}>
        <Header />
        <main className="pt-32 md:pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
