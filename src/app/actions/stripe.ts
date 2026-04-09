'use server';

import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

interface CheckoutData {
  amount: number;
  email: string;
  firstName: string;
  lastName: string;
}

export async function createCheckoutSession(data: CheckoutData) {
  const origin = (await headers()).get('origin') || process.env.NEXT_PUBLIC_URL || 'https://gala.auburnsda.org';

  if (!data.amount || data.amount <= 0) {
    throw new Error('Invalid donation amount.');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: '2026 Vision & Hope Support Gift',
              description: `Support Contribution for the Vision & Hope Project - ${data.firstName} ${data.lastName}`,
            },
            unit_amount: Math.round(data.amount * 100), // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: data.email, // Pre-fills the email in Stripe Checkout
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#rsvp`,
      metadata: {
        firstName: data.firstName,
        lastName: data.lastName,
        source: 'Dinner Gala Website RSVP',
      },
    });

    if (!session.url) {
      throw new Error('Failed to generate checkout session URL.');
    }

    // Since we are in a server action, returning the URL allows the 
    // client to handle the redirect safely.
    return { url: session.url };
  } catch (error: any) {
    console.error('Stripe Session Error:', error);
    throw new Error(error.message || 'Something went wrong with the payment session.');
  }
}
