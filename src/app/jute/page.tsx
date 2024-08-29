import { Buy } from "@/ui/Buy";
import Image from "next/image";
import Link from "next/link";

export default function Jute() {
  const features = [
    {
      title: "耐久性",
      content:
        "麻は水に濡れても丈夫であり、消防ホースの材料として使用されていました。",
    },
    {
      title: "環境に優しい",
      content:
        "麻は成長する過程で二酸化炭素を大量に吸収するカーボンニュートラル素材として知られています。この麻をより多く活用することで大気中の二酸化炭素を減らすことが期待できます",
    },
    {
      title: "海洋生分解性",
      content:
        "麻は土中でも海洋でも分解される素材です。海中に放置しても自然に分解されます。",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative w-full">
        <Image
          src="/slides/slide4.jpeg"
          className="w-full"
          alt="sea"
          width={1920 * 0.6}
          height={1038 * 0.6}
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
              width={500}
              height={500}
            />
            <Image
              src="/jute/moba.jpg"
              className="h-full w-full"
              alt="moba"
              width={500}
              height={500}
            />
          </div>
          <p className="text-xs text-center break-all">
            出典:農林水産省Webサイト
            <span>
              (
              <Link
                className=" text-blue-600"
                href="https://www.jfa.maff.go.jp/j/kikaku/tamenteki/kaisetu/moba/moba_genjou"
              >
                https://www.jfa.maff.go.jp/j/kikaku/tamenteki/kaisetu/moba/moba_genjou
              </Link>
              )
            </span>
          </p>
          <p className="text-xs text-center whitespace-pre-line break-all">
            画像生成:Stable Diffusion
            <span>
              (
              <Link
                className=" text-blue-600"
                href="https://stablediffusionweb.com"
              >
                https://stablediffusionweb.com
              </Link>
              )
            </span>
          </p>
        </div>
        <div className="text-center mx-4">
          <h2 className="text-3xl my-4 font-bold">コーヒー豆の袋が海を救う</h2>
          <p>
            2021年度の日本国内で使用されるコーヒー豆の麻袋は年間約600万袋(※1)もありますが、残念ながらその多くが廃棄処分となっています。
            日本の海域では磯焼けが深刻な問題となり、水産庁でも注視されています。
            この状況に対処すべく、全国各地で藻場の回復を目指す試みが行われています。
            弊社もその一環として、コーヒー豆用の麻袋を再活用した藻場の再生プロジェクトを立ち上げました。
            この取り組みにより、資源の再活用を実現し、海藻および水産資源の増加に貢献することを目指しています。
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
      <div className="mt-6 mx-2">
        <h2 className="text-center text-3xl my-4 font-bold">製品イメージ</h2>
        <div className="grid grid-flow-row gap-4 md:grid-flow-col ">
          <Image
            src="/jute/jute_planter.jpeg"
            alt="planter"
            className="mx-auto rounded-xl shadow-xl"
            width={400}
            height={400}
          />
          <div>
            <h3 className="text-2xl font-bold">プランター</h3>
            <p className="mx-4">
              コーヒー豆用の麻袋を再利用して作られたプランターです。
              <br />
              ナチュラルな温かみのあるデザインで、どんな環境にも調和します。
            </p>
          </div>
        </div>
      </div>
      <Buy jutePrice="準備中" product="jute" />
      <div className="my-8 mx-4">
        <p className="text-xl">補足</p>
        <ul className="text-gray-600">
          <li>
            ※1.　全日本コーヒー協会「日本のコーヒーの輸入量の推移」https://coffee.ajca.or.jp/data/statistics/
            (2023.3.28 更新)より、麻袋一枚あたりの重量を65kgとして算出。
          </li>
        </ul>
      </div>
    </div>
  );
}
