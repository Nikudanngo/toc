import { Buy } from "@/ui/Buy";
import Image from "next/image";

export default function Jute() {
  const features = [
    {
      title: "耐久性",
      content:
        "麻は水に濡れても耐久性があり、消防ホースの材料として使用されていました。水中でも耐久性に優れて、最終的に自然に分解されます。",
    },
    {
      title: "環境に優しい",
      content:
        "麻はカーボンニュートラル素材として知られており、燃やしても有害なガスは発生せず、環境にやさしい素材です。",
    },
    {
      title: "海洋分解性",
      content: "麻は海洋分解性があります。海中に放置しても自然に分解されます。",
    },
    {
      title: "再利用可能",
      content:
        "コーヒー豆用の麻袋は再利用可能な素材です。使用後はリサイクルすることができます。",
    },
    {
      title: "可能性",
      content:
        "2022年度の日本国内のコーヒー豆の輸入時に使用される麻袋は約600万袋(※1)、その大半が廃棄処分されています",
    },
    {
      title: "デザイン",
      content:
        "コーヒー豆用の麻袋はデザイン性に優れています。そのため、商品ごとに個性のあるデザインが生まれます。",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative w-full">
        <Image
          src="/slides/slide4.jpeg"
          className="w-full"
          alt="sea"
          width={1920 * 0.2}
          height={1038 * 0.2}
        />
        <p className="absolute top-2 left-0 text-center text-lg sm:text-2xl md:text-4xl lg:text-6xl font-zen-maru-gothic font-bold my-4 text-white drop-shadow-2xl">
          コーヒーの旅路は終わらない。
        </p>
        <p className="absolute top-20 right-0 text-center text-lg sm:text-xl md:text-4xl lg:text-6xl font-zen-maru-gothic font-bold my-4 text-white drop-shadow-2xl">
          麻袋は新たな舞台で、海を守る。
        </p>
      </div>
      <div className="grid grid-flow-row md:grid-cols-2 mt-6 mx-2">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-2 w-full">
            <Image
              src="/jute/seaweed.jpg"
              alt="seaweed"
              className="h-full w-full"
              width={100}
              height={100}
            />
            <Image
              src="/jute/moba.jpg"
              className="h-full w-full"
              alt="moba"
              width={100}
              height={100}
            />
          </div>
          <p className="text-xs text-center break-all">
            出典:農林水産省Webサイト
            <span>
              (
              <a
                className=" text-blue-600"
                href="https://www.jfa.maff.go.jp/j/kikaku/tamenteki/kaisetu/moba/moba_genjou"
              >
                https://www.jfa.maff.go.jp/j/kikaku/tamenteki/kaisetu/moba/moba_genjou
              </a>
              )
            </span>
          </p>
          <p className="text-xs text-center whitespace-pre-line break-all">
            画像生成:Stable Diffusion
            <span>
              (
              <a
                className=" text-blue-600"
                href="https://stablediffusionweb.com"
              >
                https://stablediffusionweb.com
              </a>
              )
            </span>
          </p>
        </div>
        <div className="text-center mx-4">
          <h2 className="text-3xl my-4 font-bold">コーヒー豆の袋が海を救う</h2>
          <p>
            日本の海域では年々磯焼けが深刻化しています。これは深刻な問題として水産庁でも挙げられています。
            この課題に対処するため、全国様々な手法で藻場の回復を試みています。
            我々もその一環として、コーヒー豆用の麻袋を活用した藻場の再生プロジェクトに着手しています。
            これにより、資源を再活用し、海藻および水産資源の増加に貢献することを目指しています。
          </p>
        </div>
      </div>
      <div className="my-8 mx-4">
        <h2 className="text-center text-3xl my-4 font-bold">
          コーヒー豆用の麻袋の特徴
        </h2>
        <div>
          <ul className="grid gap-4 grid-flow-row sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, index) => (
              <li key={index} className="list-decimal text-2xl ml-4">
                <h3>{feature.title}</h3>
                <p className="text-lg">{feature.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-8 mx-4">
        <p className="text-xl">補足</p>
        <ul className="text-gray-600">
          <li>
            ※1.　全日本コーヒー協会「日本のコーヒーの輸入量の推移」https://coffee.ajca.or.jp/data/statistics/
            (2023.3.28 更新)より、麻袋一枚あたりの重量を65kgとして算出。
          </li>
        </ul>
      </div>
      <Buy jutePrice="準備中" product="jute" />
    </div>
  );
}
