import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
type product = "kaguya" | "jute" | "all";

export const Buy = ({
  brushPrice,
  jutePrice,
  product,
}: {
  brushPrice?: number | string;
  jutePrice?: number | string;
  product: product;
}) => {
  return (
    <div className="my-8 mx-4">
      <h2 className="text-3xl font-medium my-4 border-b-2 border-gray-400">
        ご購入はこちら
      </h2>
      <div
        className={classNames("grid gap-4 justify-center items-start", {
          "md:grid-cols-2": product === "all",
        })}
      >
        {product === "kaguya" || product === "all" ? (
          <div className="max-w-xl rounded-2xl border p-2">
            <Image
              src="/kaguyaImages/onPowder.jpg"
              alt="KAGUYA"
              width={500}
              height={300}
              className="w-full rounded-md"
            />
            <h3 className="text-3xl my-2">竹歯ブラシ-KAGUYA-</h3>
            <p className="text-end text-xl">¥{brushPrice}/本</p>
            <p className="text-base text-gray-500 whitespace-pre-wrap">
              KAGUYA歯ブラシは、3年以上乾燥させた天然竹を使用し、特別に設計されたノズルとグリップで快適な磨き心地を実現した高品質な歯ブラシです。
            </p>
            <div className="flex gap-4 my-4">
              <Link
                className="bg-blue-600 text-white p-2 rounded-md"
                href="order"
              >
                購入
              </Link>
              <Link
                className="bg-blue-600 text-white p-2 rounded-md"
                href="https://amzn.asia/d/fAz6UDs"
              >
                Amazon
              </Link>
              <Link
                className="bg-blue-600 text-white p-2 rounded-md"
                href="https://goooods.com/brands/4307535b-8d7a-46f6-a96b-b1a74dbadd97"
              >
                goooods
              </Link>
            </div>
          </div>
        ) : null}
        {product === "jute" || product === "all" ? (
          <div className="max-w-xl rounded-2xl border p-2">
            <Image
              src="/jute/items.jpg"
              alt="KAGUYA"
              width={500}
              height={300}
              className="w-full rounded-md"
            />
            <h3 className="text-3xl my-2">ジュートアップサイクル</h3>
            <p className="text-end text-xl">{jutePrice}</p>
            <p className="text-base text-gray-500 whitespace-pre-wrap">
              この商品は現在準備中です。しばらくお待ちください。
            </p>
            <div className="flex gap-4 my-4">
              <button
                className="text-white p-2 rounded-md bg-slate-400"
                disabled
              >
                購入
              </button>
              <button
                className="bg-slate-400 text-white p-2 rounded-md"
                disabled
              >
                Amazonで購入
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
