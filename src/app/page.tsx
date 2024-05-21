import { Buy } from "@/ui/Buy";
import { CardSwipe } from "@/ui/CardSwipe";
import Slide from "@/ui/Slides";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Slide />
      <div className="flex flex-col md:flex-row mt-6">
        <div className="flex flex-col items-center justify-center w-full my-4">
          <h1 className="text-3xl text-center">
            竹歯ブラシブランド <br /> KAGUYA
          </h1>
          <a
            href="kaguya"
            className="p-4 text-center text-xl text-gray-600 underline z-10"
          >
            <p className="mb-4">BAMBOO TOOTHBRUSH</p>
            <p>詳しく見る</p>
          </a>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <CardSwipe
            texts={[
              "KAGUYA",
              "カラーバリエーション",
              "カミソリ",
              "竹櫛",
              "ホテルセット",
            ]}
            image={[
              "/kaguyaSlides/simple_brush.jpg",
              "/kaguyaSlides/color_variation_brush.jpeg",
              "/kaguyaSlides/razor.jpg",
              "/kaguyaSlides/comb.jpeg",
              "/kaguyaSlides/triple_shot.jpeg",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row mt-6">
        <div className="w-full">
          <CardSwipe
            texts={[
              "帽子",
              "コースター",
              "キッチンスポンジ",
              "コーヒー豆用の麻袋",
              "苗ポット",
            ]}
            image={[
              "/juteSlides/cap.jpg",
              "/juteSlides/coaster.jpg",
              "/juteSlides/kitchen_sponge.jpg",
              "/juteSlides/sack.png",
              "/juteSlides/seedling_pot.jpg",
            ]}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full my-4">
          <h1 className="text-3xl text-center">
            コーヒージュートで <br /> アップサイクル
          </h1>
          <a
            href="jute"
            className="p-4 text-center text-xl text-gray-600 underline z-10"
          >
            <p className="mb-4">COFFEE JUTE UP-CYCLE</p>
            <p>詳しく見る</p>
          </a>
        </div>
      </div>
      <Buy product="all" brushPrice={300} jutePrice="準備中" />
    </div>
  );
}
