"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export const Header = () => {
  // 現在のページのURLを取得(next.js app routerのURLを取得する方法)
  const pathname = usePathname();
  return (
    <header className="fixed items-center justify-between p-4 z-10 bg-white flex w-full">
      <a href="/">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-zen-maru-gothic">
          Thought of Oceans
        </h1>
      </a>
      <nav>
        <ul className="flex flex-col sm:flex-row sm:gap-4 [&_li]:underline [&_li:hover]:text-blue-400">
          <li className={classNames(pathname === "/" ? "ml-4" : "mr-4")}>
            <a href="/">ホーム</a>
          </li>
          <li>
            <a
              href="/about"
              className={classNames(pathname === "/about" ? "ml-4" : "mr-4")}
            >
              私たちについて
            </a>
          </li>
          <li>
            <a
              href="/product"
              className={classNames(pathname === "/product" ? "ml-4" : "mr-4")}
            >
              プロダクト
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={classNames(pathname === "/contact" ? "ml-4" : "mr-4")}
            >
              連絡先
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
