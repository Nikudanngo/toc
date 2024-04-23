"use client";

import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  ExpressCheckoutElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import clsx from "clsx";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState<string | null>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (paymentIntent) {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/complete?email=${email}`,
        receipt_email: email,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "accordion",
  };
  const disabled = isLoading || !stripe || !elements;
  const handleConfirmExpressCheckout = (event: any) => {
    event.confirm();
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        onChange={(e) => {
          setEmail(e.value.email);
        }}
      />
      <ExpressCheckoutElement onConfirm={handleConfirmExpressCheckout} />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <div className="flex my-4 justify-center items-center gap-4">
        <a href="/order">
          <button
            type="button"
            className="border p-2 rounded-md w-28"
            onClick={() => {}}
          >
            戻る
          </button>
        </a>
        <button
          type="submit"
          className={clsx("bg-gray-400 w-28 text-white p-2 rounded-md", {
            "!bg-blue-600": !disabled,
          })}
          disabled={disabled}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "購入する"
            )}
          </span>
        </button>
      </div>
      {message && <div className="text-red-500">{message}</div>}
    </form>
  );
}
