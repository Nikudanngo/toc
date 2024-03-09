import { CompanyOverview } from "@/ui/CompanyOverview";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mx-3">
        <h1 className="text-5xl mt-6">オールサム有限会社</h1>
        <h2 className="text-3xl mt-6">Thought of Oceansとは</h2>
        <div className="mt-2 text-xl whitespace-pre-line">
          Thought of Oceansは
          海の環境保全や海洋資源の保護を目的に自分達が何かできないかという思いから誕生したブランドです。
          まずは大量に海に流れ込んでいる海洋プラスチックゴミを減らすことや魚などの海洋資源を守る為にできることをやってみることがコンセプトです。
          <br />
          IUCN(国際自然保護連合)によると、毎年1200万トンのプラスチックが海に流れていると言われています。
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
          私たちは竹歯ブラシをホテルや消費者の皆様へ提供することで、地球への貢献と、海洋環境を保護する一環となることを目指しています。
          また、KAGUYAブランドの竹歯ブラシは、環境への配慮と共に高品質な製品を提供し、
          ユーザーが快適な生活を送る手助けとなることを目指しています。
        </div>
        <h2 className="text-3xl mt-6">会社概要</h2>
        <CompanyOverview />
      </div>
    </div>
  );
}
