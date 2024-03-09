export const CompanyOverview = () => {
  return (
    <table className="table-auto w-full m-2 border border-slate-400 [&_td]:border [&_td]:border-slate-200 text-xl">
      <tbody>
        <tr>
          <td className="font-bold">会社名</td>
          <td>オールサム有限会社</td>
        </tr>
        <tr>
          <td className="font-bold">設立</td>
          <td>2000年 4月</td>
        </tr>
        <tr>
          <td className="font-bold">資本金</td>
          <td>300万円</td>
        </tr>
        <tr>
          <td className="font-bold">代表者</td>
          <td>代表取締役社長 遠藤 利明</td>
        </tr>
        <tr>
          <td className="font-bold">従業員数</td>
          <td>10名(2023年 3月末時点 パート・アルバイトを含む)</td>
        </tr>
        <tr>
          <td className="font-bold">所在地(本店)</td>
          <td>奈奈良県生駒市東菜畑1丁目178-109</td>
        </tr>
        <tr>
          <td className="font-bold">所在地(大阪事務所)</td>
          <td>大阪市中央区農人橋2-1-35 松屋ビル</td>
        </tr>
        <tr>
          <td className="font-bold">事業内容</td>
          <td>
            家庭用雑貨品輸入および国内販売
            <br />
            クリーンルーム用および電子部品組み立て手袋、用品等の輸出入および販売
            <br />
            繊維資材の輸出入および販売
            <br />
            ペット用品の輸入および国内販売
            <br />
            事務機器用部品の製造販売
            <br />
            竹歯ブラシの製造販売
          </td>
        </tr>
        <tr>
          <td className="font-bold">取引銀行</td>
          <td>三井住友銀行 生駒支店</td>
        </tr>
      </tbody>
    </table>
  );
};
