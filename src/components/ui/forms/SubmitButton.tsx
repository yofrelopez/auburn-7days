"use client";

import React from 'react';
import { Loader2 } from "lucide-react";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isSubmitting: boolean;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

export default function SubmitButton({
    isSubmitting,
    children,
    icon,
    className = "",
    ...props
}: SubmitButtonProps) {
    return (
        <button
            type="submit"
            disabled={isSubmitting || props.disabled}
            className={`w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:bg-primary/90 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:-translate-y-0 ${!isSubmitting && !props.disabled ? 'hover:-translate-y-0.5' : ''} ${className}`}
            {...props}
        >
            {isSubmitting ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                </>
            ) : (
                <>
                    <span>{children}</span>
                    {icon}
                </>
            )}
        </button>
    );
}
