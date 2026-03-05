"use client";

import React, { useState } from "react";

interface Web3FormProps {
    children: React.ReactNode;
    successMessage?: string;
    errorMessage?: string;
    className?: string;
}

export default function Web3Form({
    children,
    successMessage = "Thank you! Your request has been successfully submitted.",
    errorMessage = "Oops! Something went wrong. Please try again later.",
    className = ""
}: Web3FormProps) {
    const [result, setResult] = useState<string>("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("loading");

        const form = event.currentTarget;
        const formData = new FormData(form);

        // Append the access key. This relies on NEXT_PUBLIC_WEB3FORMS_KEY being set in .env.local
        // For development/testing, if the env variable is missing, the API will return an error.
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult(successMessage);
                setStatus("success");
                form.reset();
            } else {
                console.error("Web3Forms Error:", data);
                setResult(data.message || errorMessage);
                setStatus("error");
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setResult(errorMessage);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className={`p-6 text-center bg-green-50 rounded-2xl border border-green-100 ${className}`}>
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h4 className="text-lg font-bold text-green-900 mb-2">Success!</h4>
                <p className="text-green-700">{result}</p>
            </div>
        );
    }

    // Determine if the form is currently submitting to pass down to children (like SubmitButton) if needed.
    // In React 18/19 we could use Context or cloneElement, but simplest is relying on the SubmitButton 
    // to potentially just be standard or users passing loading state. 
    // To keep our elegant API <Web3Form><SubmitButton/></Web3Form> we will inject the isSubmitting prop
    // into the children using React.Children.map

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            // Check if the child is our SubmitButton (or any component that accepts isSubmitting)
            // A bit hacky to check name, better to just pass it if it accepts it in TS, 
            // but we can safely pass it as a prop.
            if (typeof child.type !== 'string' && (child.type as any).name === 'SubmitButton') {
                return React.cloneElement(child as React.ReactElement<any>, { isSubmitting: status === "loading" });
            }
        }
        return child;
    });

    return (
        <form onSubmit={onSubmit} className={className}>
            {/* Honeypot Spam Protection - Bots will fill this, humans won't see it */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            {childrenWithProps}

            {status === "error" && (
                <div className="mt-4 p-4 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                    {result}
                </div>
            )}
        </form>
    );
}
