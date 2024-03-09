"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export const Header = () => {
  // 現在のページのURLを取得(next.js app routerのURLを取得する方法)
  const pathname = usePathname();
  return (
    <header className="w-full z-10 sticky top-0 sm:h-16 items-center justify-between bg-white flex shadow p-2">
      <a href="/">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-zen-maru-gothic">
          Thought of Oceans
        </h1>
      </a>
      <nav>
        <ul className="flex flex-col sm:flex-row sm:gap-8 [&_li]:underline [&_li:hover]:text-blue-600 [&_li:hover]:list-['＞']">
          <li className={classNames({ "list-['＞']": pathname === "/" })}>
            <a href="/" className="">
              ホーム
            </a>
          </li>
          <li className={classNames({ "list-['＞']": pathname === "/about" })}>
            <a href="/about">私たちについて</a>
          </li>
          <li
            className={classNames({
              "list-['＞']": pathname === "/kaguya",
            })}
          >
            <a href="/kaguya">竹歯ブラシ</a>
          </li>
          <li className={classNames({ "list-['＞']": pathname === "/jute" })}>
            <a href="/jute">ジュート</a>
          </li>
          <li
            className={classNames(
              { "list-['＞']": pathname === "/contact" },
              "sm:mr-4"
            )}
          >
            <a href="/contact">連絡先</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
