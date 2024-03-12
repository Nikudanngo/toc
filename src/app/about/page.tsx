import { CompanyOverview } from "@/ui/CompanyOverview";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mx-3">
        <h1 className="text-5xl mt-6">オールサム有限会社</h1>
        <h2 className="text-3xl mt-6">Thought of Oceansとは</h2>
        <div className="mt-2 text-xl whitespace-pre-line">
          Thought of Oceansは
          海の環境保全や海洋資源の保護を目的として自分達に何かできないか考えてみようという思いから誕生したブランドです。
          大量に海に流れ込んでいる海洋プラスチックごみを減らすことや魚などの海洋資源を守ることがコンセプトです。
          <br />
          INCN（国際自然保護連合）によると、毎年1,200万トンのプラスチックが海に流れ込んでいると言われています。
          (「
          <span>
            <a
              className="underline text-blue-600"
              href="https://portals.iucn.org/library/node/48957"
            >
              The marine plastic footprint
            </a>
          </span>
          」)
          私たちはこのブランドを通じ、生分解されやすいプラスチック代替商品を社会や消費者へ提供することで、
          地球環境への貢献と海洋環境の保護を目指しております。
        </div>
        <h2 className="text-3xl mt-6">会社概要</h2>
        <CompanyOverview />
      </div>
    </div>
  );
}
