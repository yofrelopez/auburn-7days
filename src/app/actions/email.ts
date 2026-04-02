'use server';

import { Resend } from 'resend';
import { render } from '@react-email/components';
import RSVPConfirmationEmail from '@/components/emails/RSVPConfirmation';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendRSVPEmailParams {
    firstName: string;
    email: string;
    intention: string;
    regType: string;
    amount?: string;
    numGuests?: number;
}

export async function sendRSVPConfirmation(params: SendRSVPEmailParams) {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not defined');
        return { success: false, error: 'Missing API Key' };
    }

    try {
        // Render the email to an HTML string manually
        const html = await render(
            React.createElement(RSVPConfirmationEmail, {
                firstName: params.firstName,
                intention: params.intention,
                regType: params.regType,
                amount: params.amount,
                numGuests: params.numGuests,
            })
        );

        const { data, error } = await resend.emails.send({
            from: 'Auburn Vision Gala <noreply@gala.auburnsda.org>',
            to: [params.email],
            subject: 'Waitlist Secured: 2026 Vision Gala Confirmation',
            html: html, // Use the pre-rendered HTML
        });

        console.log('Resend Response:', { data, error });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, error };
        }

        return { success: true, data };
    } catch (error) {
        console.error('Internal Email Error:', error);
        return { success: false, error };
    }
}
