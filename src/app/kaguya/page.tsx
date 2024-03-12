import { Buy } from "@/ui/Buy";
import Image from "next/image";
const price = 300;

export default function Kaguya() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-6xl font-zen-maru-gothic font-bold my-4">
        KAGUYA
      </h1>
      <p className="text-center text-4xl text-gray-600">
        日本人のために開発した竹歯ブラシ
      </p>

      <div className="flex flex-col md:flex-row mt-6">
        <div className="w-full flex justify-center items-center">
          <Image
            src="/kaguyaSlides/simple_brush.jpg"
            alt="KAGUYA"
            width={300}
            height={400}
            className="w-2/3"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full my-2">
          <h2 className="text-3xl text-center leading-10 text-gray-600 font-mono my-2">
            高品質な <br /> 竹歯ブラシ
          </h2>
          <p className="text-center text-xl text-gray-500 whitespace-pre-wrap m-4">
            十分な強度としなやかさをもった竹歯ブラシを作るには、
            ひとつの歯ブラシに3年以上の乾燥と徹底した研磨が必要です。
            私たちは、お客様が安心してご使用できるように、全ての歯ブラシを研磨・検品を行っています。
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row mt-6">
        <div className="flex flex-col items-center justify-center w-full my-2">
          <h2 className="text-3xl text-center leading-10 text-gray-600 font-mono my-2">
            優しい <br /> タッチ
          </h2>
          <p className="text-center text-xl text-gray-500 whitespace-pre-wrap m-4">
            日本人のためにデザインされた、ちょうどいい大きさで心地よい磨き心地。
            徹底的な品質管理、特殊な加工によりなめらかな肌触りを実現。
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            src="/kaguyaImages/onPowder.jpg"
            alt="KAGUYA"
            width={300}
            height={200}
            className="w-2/3"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-6">
        <div className="w-full flex justify-center items-center">
          <Image
            src="/kaguyaImages/LyingOnTowel.jpg"
            alt="KAGUYA"
            width={300}
            height={400}
            className="w-2/3"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full my-2">
          <h2 className="text-3xl text-center leading-10 text-gray-600 font-mono my-2">
            サスティナブル <br /> デザイン
          </h2>
          <p className="text-center text-xl text-gray-500 whitespace-pre-wrap m-4">
            プラスチックの使用を90%以上削減。これにより、焼却時に発生する有害物質を大幅に削減可能。
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row mt-6">
        <div className="flex flex-col items-center justify-center w-full my-2">
          <h2 className="text-3xl text-center leading-10 text-gray-600 font-mono my-2">
            独自の <br /> サイクルシステム
          </h2>
          <p className="text-center text-xl text-gray-500 whitespace-pre-wrap m-4">
            弊社ではホテル様から使用済みの竹商品を買い取り、それらは竹炭商品として生まれ変わります。
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            src="/kaguyaImages/Cycle-image.png"
            alt="KAGUYA"
            width={300}
            height={400}
            className="w-2/3"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-6">
        <div className="w-full flex justify-center items-center">
          <Image
            src="/kaguyaImages/amenity.jpg"
            alt="KAGUYA"
            width={600}
            height={800}
            className="w-2/3"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full my-2">
          <h2 className="text-3xl text-center leading-10 text-gray-600 font-mono my-2">
            ホテル向けの <br /> アメニティ
          </h2>
          <p className="text-center text-xl text-gray-500 whitespace-pre-wrap m-4">
            弊社ではホテル様向けに多数のアメニティをご用意しています。ご注文は
            <span>
              <a className=" underline text-blue-600" href="/contact">
                ご連絡
              </a>
            </span>
            からご相談ください。
          </p>
        </div>
      </div>

      <Buy brushPrice={price} product="kaguya" />
    </div>
  );
}
