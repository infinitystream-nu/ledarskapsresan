import { NextResponse, NextRequest } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const email = body.email

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID!,
        quantity: 1,
      },
    ],
    subscription_data: {
      trial_period_days: 7,
    },
    customer_email: email,
    metadata: {
      email: email,
    },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/?payment=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?payment=cancelled`,
  })

  return NextResponse.json({ url: session.url })
}