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
            className="text-center text-xl text-gray-600 underline"
          >
            BAMBOO TOOTHBRUSH
          </a>
        </div>
        <div className="mx-32">
          <CardSwipe
            texts={[
              "KAGUYA",
              "豊富なカラーバリエーション",
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
        <div className="mx-32">
          <CardSwipe
            texts={[
              "帽子",
              "コースター",
              "キッチンスポンジ",
              "麻袋",
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
            className="text-center text-xl text-gray-600 underline"
          >
            COFFEE JUTE UP-CYCLE
          </a>
        </div>
      </div>
    </div>
  );
}
