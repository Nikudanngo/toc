import { NextRequest, NextResponse } from "next/server";
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

type Item = FormData;
interface requestBody {
  items: Item[];
  amount: number;
  description: string;
}

export function GET(request: NextRequest): NextResponse {
  // GET /api/users リクエストの処理
  console.log("GET /api/test リクエストの処理");
  return NextResponse.json({ message: "Hello" });
}
export async function POST(request: Request) {
  console.log(request.body);
  const { items, amount, description } = await request.json() as requestBody;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "jpy",
    description: description,
    metadata: {
      items: JSON.stringify(items),
    },
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return Response.json({
    clientSecret: paymentIntent.client_secret,
  });

  // Invoke this method in your webhook handler when `payment_intent.succeeded` webhook is received
  // const handlePaymentIntentSucceeded = async (paymentIntent: { metadata: { [x: string]: any; }; }) => {
  //   // Create a Tax Transaction for the successful payment
  //   stripe.tax.transactions.createFromCalculation({
  //     calculation: paymentIntent.metadata['tax_calculation'],
  //     reference: 'myOrder_123', // Replace with a unique reference from your checkout/order system
  //   });
  // };
};
