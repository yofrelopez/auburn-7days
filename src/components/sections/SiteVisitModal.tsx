"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Mail, Calendar, X } from "lucide-react";
import Web3Form from "@/components/ui/forms/Web3Form";
import FormInput from "@/components/ui/forms/FormInput";
import SubmitButton from "@/components/ui/forms/SubmitButton";

export default function SiteVisitModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // The modal UI is completely separated into a portal so it covers the whole screen
    // It uses a high-contrast elegant white card to pop out from the olive green background
    const modalContent = isOpen ? (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-neutral-900/60 backdrop-blur-md transition-opacity"
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Modal Panel - Clean White UI for maximum readability and contrast */}
            <div className="relative w-full max-w-md bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden transform transition-all border border-neutral-200">
                <div className="absolute top-4 right-4 z-20">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-neutral-400 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full p-2.5 transition-all"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-8 md:p-10 text-left relative">
                    <div className="mb-8 space-y-2 text-center">
                        <div className="mx-auto w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-5">
                            <Calendar className="w-7 h-7" />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-neutral-900 tracking-tight" id="modal-title">
                            Schedule a Visit
                        </h3>
                        <p className="text-sm font-medium text-neutral-500 max-w-[250px] mx-auto leading-relaxed">
                            Leave your details to coordinate a tour of the future temple site.
                        </p>
                    </div>

                    <Web3Form successMessage="We will contact you shortly to coordinate your visit!">
                        <input type="hidden" name="subject" value="New Site Visit Request" />
                        <div className="space-y-4">
                            <FormInput
                                label="Full Name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                required
                            />

                            <FormInput
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                required
                            />

                            <FormInput
                                label="Phone Number (Optional)"
                                name="phone"
                                type="tel"
                                placeholder="(555) 123-4567"
                            />

                            <div className="pt-2">
                                <SubmitButton isSubmitting={false} icon={<Mail className="w-4 h-4 ml-1" />}>
                                    Send Request
                                </SubmitButton>
                            </div>
                        </div>
                    </Web3Form>
                </div>
            </div>
        </div>
    ) : null;

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-primary px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:bg-neutral-50 hover:shadow-[0_8px_30px_rgb(255,255,255,0.12)] hover:-translate-y-0.5 whitespace-nowrap"
            >
                <Calendar className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span>Schedule Your Visit</span>
            </button>

            {/* Render the modal at the root level so it covers EVERYTHING */}
            {mounted ? createPortal(modalContent, document.body) : null}
        </>
    );
}
