import classNames from "classnames";
import Image from "next/image";

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
              天然の竹を使用した歯ブラシです。日本人のために設計されたノズルとグリップで、快適な身が着心地を実現しました。
            </p>
            <div className="flex gap-4 my-4">
              <button className="bg-blue-600 text-white p-2 rounded-md">
                <a href="https://buy.stripe.com/00gcPd0Eu2FjbiofYY">購入</a>
              </button>
              <button className="bg-blue-600 text-white p-2 rounded-md">
                <a href="https://amzn.asia/d/fAz6UDs">Amazonで購入</a>
              </button>
              <button className="bg-blue-600 text-white p-2 rounded-md">
                <a href="https://goooods.com/brands/4307535b-8d7a-46f6-a96b-b1a74dbadd97">
                  goooodsで購入
                </a>
              </button>
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
