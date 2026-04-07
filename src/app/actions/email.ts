'use server';

import { Resend } from 'resend';
import { render } from '@react-email/components';
import RSVPConfirmationEmail from '@/components/emails/RSVPConfirmation';
import AdminRegistrationAlert from '@/components/emails/AdminRegistrationAlert';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendRSVPEmailParams {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    intention: string;
    regType: string;
    businessName?: string;
    participation?: string;
    amount?: string;
    numGuests?: number;
    guestNames?: string;
    stayOvernight?: string;
    dietary?: string;
    childCare?: string;
    numChildren?: number;
    agesChildren?: string;
    childNeeds?: string;
    pledgeAmount?: string;
    pledgeFrequency?: string;
    pledgeTimeframe?: string;
}

export async function sendRSVPConfirmation(params: Partial<SendRSVPEmailParams> & { firstName: string, email: string }) {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not defined');
        return { success: false, error: 'Missing API Key' };
    }

    try {
        const html = await render(
            React.createElement(RSVPConfirmationEmail, {
                firstName: params.firstName,
                lastName: params.lastName,
                intention: params.intention || 'attend',
                regType: params.regType || 'personal',
                amount: params.amount,
                numGuests: params.numGuests,
                dietary: params.dietary,
                childCare: params.childCare,
                numChildren: params.numChildren,
                agesChildren: params.agesChildren,
            })
        );

        const { data, error } = await resend.emails.send({
            from: 'Auburn Vision Gala <noreply@gala.auburnsda.org>',
            to: [params.email],
            replyTo: 'community@auburnsda.org',
            subject: 'Confirmation: 2026 Vision Gala Registration',
            html: html,
        });

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

export async function sendAdminRegistrationAlert(params: SendRSVPEmailParams) {
    if (!process.env.RESEND_API_KEY) {
        return { success: false, error: 'Missing API Key' };
    }

    const adminEmails = [
        'community@auburnsda.org',
        'yofrelopez.s@gmail.com',
        'btwesley@hotmail.com',
        'jamnethwesley@yahoo.com'
    ];

    try {
        const html = await render(
            React.createElement(AdminRegistrationAlert, { ...params })
        );

        const { data, error } = await resend.emails.send({
            from: 'Gala System <noreply@gala.auburnsda.org>',
            to: adminEmails,
            replyTo: 'community@auburnsda.org',
            subject: `NEW REGISTRATION: ${params.firstName} ${params.lastName}`,
            html: html,
        });

        if (error) {
            console.error('Admin Email Error:', error);
            return { success: false, error };
        }

        return { success: true, data };
    } catch (error) {
        console.error('Internal Admin Email Error:', error);
        return { success: false, error };
    }
}
