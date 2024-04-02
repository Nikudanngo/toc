"use client";

import { useState } from "react";
import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "@/ui/CheckoutForm";
import AddressForm from "@/ui/AddressForm";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51KDPLeLfq32jdgt5EDDHEal72TrTI45HokpWQuPvLiXgewKvI38GwnH8etWEo3gZH8Lp51G4S2QUeBtsPiUuXIf300l6fhhJuX"
);

export default function App() {
  const [clientSecret, setClientSecret] = useState<string>();

  if (!clientSecret) {
    console.log("fetching");
    fetch("/api/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({
        items: [
          { id: "xl-tshirt", amount: 100 },
          { id: "xxl-tshirt", amount: 800 },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });

    return <div>Loading...</div>; // clientSecretが取得されるまでローディングを表示
  }

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <div className="m-4">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <AddressForm />
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
