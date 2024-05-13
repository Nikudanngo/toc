export default function Complete() {
  // const payment_intent = searchParams.get("payment_intent");
  // const payment_intent_client_secret = searchParams.get(
  //   "payment_intent_client_secret"
  // );
  // const redirect_status = searchParams.get("redirect_status");

  return (
    <div className="max-w-7xl mx-auto m-4 text-center">
      <h1 className="text-2xl mb-4 font-bold">決済が完了しました。</h1>
      <p className="text-xl mb-2">ご購入いただきありがとうございました。</p>
      <p className="text-base mb-2">
        登録いただいたメールアドレスへ領収書をお送りしましたのでご確認ください。
      </p>
      <p className="mb-2">
        お問い合わせは
        <span>
          <button className="text-blue-600 underline">連絡先</button>
        </span>
        にて記載しておりますので、お気軽にお問い合わせください。
      </p>
    </div>
  );
}
