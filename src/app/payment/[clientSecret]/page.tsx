"use client";

import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";
import { Elements, LinkAuthenticationElement } from "@stripe/react-stripe-js";

import CheckoutForm from "@/ui/CheckoutForm";
import AddressForm from "@/ui/AddressForm";
import { useParams } from "next/navigation";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);
export default function App() {
  const params = useParams<{ clientSecret: string }>();

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret: params.clientSecret,
    appearance,
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {params.clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <AddressForm />
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
