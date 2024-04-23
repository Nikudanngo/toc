"use client";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export default function Complete() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const payment_intent = searchParams.get("payment_intent");
  const payment_intent_client_secret = searchParams.get(
    "payment_intent_client_secret"
  );
  const redirect_status = searchParams.get("redirect_status");

  console.log(window.location.origin);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="m-4">
        <h1 className="text-2xl">決済が完了しました。</h1>
        <p>以下のメールアドレスへ領収書をお送りしましたのでご確認ください。</p>
        <p className="text-center">{email}</p>
      </div>
    </div>
  );
}
