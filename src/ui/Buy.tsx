import Image from "next/image";

export const Buy = ({ brushPrice }: { brushPrice: number }) => {
  return (
    <div className="my-8 mx-4">
      <h2 className="text-3xl font-medium my-4 border-b-2 border-gray-400">
        ご購入はこちら
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-center items-start">
        <div className="mx-auto max-w-xl">
          <Image
            src="/kaguyaImages/onPowder.jpg"
            alt="KAGUYA"
            width={600}
            height={400}
          />
          <h3 className="text-3xl my-2">竹歯ブラシ-KAGUYA-</h3>
          <p className="text-end text-xl">¥{brushPrice}/本</p>
          <p className="text-base text-gray-500 whitespace-pre-wrap">
            天然の竹を使用した歯ブラシです。日本人のために設計されたノズルとグリップで、快適な身が着心地を実現しました。
          </p>
          <div className="flex gap-4 my-4">
            <button className="bg-blue-400 text-white p-2 rounded-md">
              購入
            </button>
            <button className="bg-blue-400 text-white p-2 rounded-md">
              Amazonで購入
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-xl">
          <Image src="/jute/items.jpg" alt="KAGUYA" width={600} height={400} />
          <h3 className="text-3xl my-2">ジュートアップサイクル</h3>
          <p className="text-end text-xl">価格未定</p>
          <p className="text-base text-gray-500 whitespace-pre-wrap">
            この商品は現在準備中です。しばらくお待ちください。
          </p>
          <div className="flex gap-4 my-4">
            <button className="text-white p-2 rounded-md bg-slate-400" disabled>
              購入
            </button>
            <button className="bg-slate-400 text-white p-2 rounded-md" disabled>
              Amazonで購入
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
