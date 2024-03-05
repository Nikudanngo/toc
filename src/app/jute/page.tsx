import { Buy } from "@/ui/Buy";
import Image from "next/image";

export default function Jute() {
  const features = [
    {
      title: "耐久性",
      content:
        "コーヒー麻は耐久性に優れています。そのため、海中でも長期間使用することができます。",
    },
    {
      title: "環境に優しい",
      content: "コーヒー麻は天然素材であり、海洋生物にも安全です。",
    },
    {
      title: "再利用可能",
      content:
        "コーヒー麻は再利用可能な素材です。使用後はリサイクルすることができます。",
    },
    {
      title: "海洋分解性",
      content:
        "コーヒー麻は海洋分解性があります。海中に放置しても自然に分解されます。",
    },
    {
      title: "生産性",
      content:
        "2022年度の日本国内のコーヒー豆の輸入時に使用される麻袋は約600万袋(※1)、その大半が廃棄処分されています",
    },
    {
      title: "デザイン",
      content:
        "コーヒー麻はデザイン性に優れています。そのため、商品ごとに個性のあるデザインが生まれます。",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative w-full">
        <Image
          src="/slides/slide4.jpeg"
          className="w-full"
          alt="sea"
          width={800}
          height={600}
        />
        <p className="absolute top-2 left-0 text-center text-6xl font-zen-maru-gothic font-bold my-4 text-white drop-shadow-2xl">
          コーヒーの旅路は終わらない。
        </p>
        <p className="absolute top-20 right-0 text-center text-6xl font-zen-maru-gothic font-bold my-4 text-white drop-shadow-2xl">
          麻袋は新たな舞台で、磯焼けの守護者に。
        </p>
      </div>
      <div className="grid grid-flow-row md:grid-cols-2 mt-6 mx-2">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-2 w-full">
            <Image
              src="/jute/seaweed.jpg"
              alt="seaweed"
              className="h-full"
              width={300}
              height={300}
            />
            <Image
              src="/jute/moba.jpg"
              className="h-full"
              alt="moba"
              width={300}
              height={300}
            />
          </div>
          <p className="text-xs text-center whitespace-pre-line">
            出典:農林水産省Webサイト (https://www.jfa.maff.go.jp/)
          </p>
          <p className="text-xs text-center whitespace-pre-line">
            画像生成:Stable Diffusion (https://stablediffusionweb.com)
          </p>
        </div>
        <div className="text-center mx-4">
          <h2 className="text-3xl my-4 font-bold">コーヒー豆の袋が海を救う</h2>
          <p>
            日本の海域では年々海藻が減少しています。これは深刻な問題として水産省でも挙げられています。
            この課題に対処するため、全国で様々な手法で藻場の回復を試みています。
            我々もその一環として、コーヒー豆の麻袋を活用した藻場の基盤構築プロジェクトに着手しています。
            これにより、地元の資源を再活用し、海藻の増加に貢献することを目指しています。
          </p>
        </div>
      </div>
      <div className="my-8 mx-4">
        <h2 className="text-center text-3xl my-4 font-bold">
          コーヒー麻の特徴
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
      <Buy brushPrice={300} />
    </div>
  );
}
