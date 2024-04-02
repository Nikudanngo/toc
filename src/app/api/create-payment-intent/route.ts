import { NextRequest, NextResponse } from "next/server";

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

interface Item {
  amount: number;
  id: string;
}

interface requestBody {
  items: Item[];
}

const calculateTax = async (items: Item[], currency: string) => {
  const taxCalculation = await stripe.tax.calculations.create({
    currency,
    customer_details: {
      address: {
        line1: "920 5th Ave",
        city: "Seattle",
        state: "WA",
        postal_code: "98104",
        country: "JP",
      },
      address_source: "shipping",
    },
    line_items: items.map((item) => buildLineItem(item)),
  });

  return taxCalculation;
};

const buildLineItem = (item: Item) => {
  return {
    amount: item.amount, // Amount in cents
    reference: item.id, // Unique reference for the item in the scope of the calculation
  };
};

// Securely calculate the order amount, including tax
const calculateOrderAmount = (items: Item[], taxCalculation: { tax_amount_exclusive: number; }) => {
  const orderAmount = items.reduce((acc, item) => acc + item.amount, 0) + taxCalculation.tax_amount_exclusive;
  return orderAmount;
};

const sumAmount = (items: Item[]) => {
  return items.reduce((acc, item) => acc + item.amount, 0);
};

export function GET(request: NextRequest): NextResponse {
  // GET /api/users リクエストの処理
  console.log("GET /api/test リクエストの処理");
  return NextResponse.json({ message: "Hello" });
}
export async function POST(request: Request) {
  console.log(request.body);
  const { items } = await request.json() as requestBody;
  const taxCalculation = await calculateTax(items, "jpy");
  const amount = sumAmount(items);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "jpy",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      tax_calculation: taxCalculation.id
    },
  });

  return Response.json({
    clientSecret: paymentIntent.client_secret,
  });

  // Invoke this method in your webhook handler when `payment_intent.succeeded` webhook is received
  const handlePaymentIntentSucceeded = async (paymentIntent: { metadata: { [x: string]: any; }; }) => {
    // Create a Tax Transaction for the successful payment
    stripe.tax.transactions.createFromCalculation({
      calculation: paymentIntent.metadata['tax_calculation'],
      reference: 'myOrder_123', // Replace with a unique reference from your checkout/order system
    });
  };
};
