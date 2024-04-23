"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Email = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  return (
    <p className="text-center font-bold bg-gray-900/20 rounded-md p-2">
      {email}
    </p>
  );
};

export default function Complete() {
  // const payment_intent = searchParams.get("payment_intent");
  // const payment_intent_client_secret = searchParams.get(
  //   "payment_intent_client_secret"
  // );
  // const redirect_status = searchParams.get("redirect_status");

  return (
    <div className="max-w-7xl mx-auto">
      <div className="m-4">
        <h1 className="text-2xl">決済が完了しました。</h1>
        <p>以下のメールアドレスへ領収書をお送りしましたのでご確認ください。</p>
        <Suspense fallback={<div>Loading...</div>}>
          <Email />
        </Suspense>
      </div>
    </div>
  );
}
