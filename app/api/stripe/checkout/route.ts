import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY;

export async function POST(req: Request) {
  if (!stripeSecret) {
    return NextResponse.json(
      { ok: false, error: "STRIPE_SECRET_KEY no configurada." },
      { status: 500 }
    );
  }

  const form = await req.formData();
  const product = String(form.get("product") || "tokens");

  const price =
    product === "crm-pro"
      ? process.env.STRIPE_PRICE_CRM_PRO
      : process.env.STRIPE_PRICE_TOKENS_STARTER;

  if (!price) {
    return NextResponse.json(
      { ok: false, error: "Precio Stripe no configurado." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecret);

  const session = await stripe.checkout.sessions.create({
    mode: product === "crm-pro" ? "subscription" : "payment",
    line_items: [{ price, quantity: 1 }],
    success_url:
      process.env.STRIPE_SUCCESS_URL || "https://connekfly.com/gracias",
    cancel_url:
      process.env.STRIPE_CANCEL_URL || "https://connekfly.com",
    metadata: {
      ecosystem: "connekfly",
      product,
    },
  });

  return NextResponse.redirect(session.url || "/", { status: 303 });
}
