"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  // 現在のページのURLを取得(next.js app routerのURLを取得する方法)
  const pathname = usePathname();
  return (
    <header className="w-full z-10 top-0 sm:h-16 items-center justify-between bg-white flex shadow p-2">
      <Link href="/">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-zen-maru-gothic">
          Thought of Oceans
        </h1>
      </Link>
      <nav>
        <ul className="flex flex-col sm:flex-row sm:gap-8 [&_li]:underline [&_li:hover]:text-blue-600 [&_li:hover]:list-['＞']">
          <li className={classNames({ "list-['＞']": pathname === "/" })}>
            <Link href="/" className="">
              ホーム
            </Link>
          </li>
          <li className={classNames({ "list-['＞']": pathname === "/about" })}>
            <Link href="/about">私たちについて</Link>
          </li>
          <li
            className={classNames({
              "list-['＞']": pathname === "/kaguya",
            })}
          >
            <Link href="/kaguya">竹歯ブラシ</Link>
          </li>
          <li className={classNames({ "list-['＞']": pathname === "/jute" })}>
            <Link href="/jute">ジュート</Link>
          </li>
          <li
            className={classNames(
              { "list-['＞']": pathname === "/contact" },
              "sm:mr-4"
            )}
          >
            <Link href="/contact">連絡先</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
