"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Heart, Star, Loader2 } from "lucide-react";
import { createCheckoutSession } from "@/app/actions/stripe";
import { sendRSVPConfirmation, sendAdminRegistrationAlert } from "@/app/actions/email";
import Link from "next/link";

type LegacyTier = {
    title: string;
    amount: string;
    value: number;
};

const LEGACY_TIERS: LegacyTier[] = [
    { title: "Legacy Founder", amount: "$100,000+", value: 100000 },
    { title: "Cornerstone Legacy Partner", amount: "$50,000+", value: 50000 },
    { title: "Visionary Pillar", amount: "$25,000+", value: 25000 },
    { title: "Heritage Builder", amount: "$10,000+", value: 10000 },
    { title: "Double Legacy Brick", amount: "$5,000", value: 5000 },
    { title: "Single Legacy Brick", amount: "$2,500", value: 2500 },
    { title: "Community Partner", amount: "$1,000+", value: 1000 },
    { title: "Support the Gala", amount: "$500", value: 500 },
    { title: "Custom Legacy Gift", amount: "Custom", value: 0 }
];

interface LegacyCommitmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialTierTitle?: string;
    initialAmount?: number;
}

export default function LegacyCommitmentModal({ isOpen, onClose, initialTierTitle, initialAmount }: LegacyCommitmentModalProps) {
    const [step, setStep] = useState<1 | 2>(1);
    const [selectedTier, setSelectedTier] = useState<LegacyTier | null>(null);
    const [customAmount, setCustomAmount] = useState<string>("");
    const [showAllTiers, setShowAllTiers] = useState<boolean>(true);
    const [hasGuidedToPreference, setHasGuidedToPreference] = useState<boolean>(false);
    // Auto-select tier when modal opens with initial data
    useEffect(() => {
        if (isOpen) {
            if (initialTierTitle) {
                const tier = LEGACY_TIERS.find(t => t.title === initialTierTitle);
                if (tier) setSelectedTier(tier);
                else {
                    const customTier = LEGACY_TIERS[LEGACY_TIERS.length - 1]; // Custom
                    setSelectedTier(customTier);
                    setCustomAmount(initialAmount?.toString() || "");
                }
                setShowAllTiers(false); // Enable Smart View
            } else {
                setSelectedTier(null); // No pre-selection
                setShowAllTiers(true); // Show full grid
            }
            setStep(1);
            setIsSubmitted(false);
            setErrors([]);
            setHasGuidedToPreference(false);
        }
    }, [isOpen, initialTierTitle, initialAmount]);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        regType: "personal" as "personal" | "business",
        businessName: "",
        commitmentType: "immediate" as "immediate" | "installment" | "pledge",
        initialAmount: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    const activeAmount = selectedTier?.value === 0
        ? (parseInt(customAmount) || 0)
        : (selectedTier?.value || 0);

    const validateStep1 = () => {
        const newErrors: string[] = [];
        if (!selectedTier) newErrors.push("Please select a legacy tier.");
        if (selectedTier?.value === 0 && activeAmount <= 0) {
            newErrors.push("Please enter a valid gift amount.");
        }
        setErrors(newErrors);
        return newErrors.length === 0;
    };

    const validateStep2 = () => {
        const newErrors: string[] = [];
        if (!formData.firstName) newErrors.push("First name is required.");
        if (!formData.lastName) newErrors.push("Last name is required.");
        if (!formData.email || !formData.email.includes("@")) newErrors.push("Valid email is required.");
        if (!formData.phone) newErrors.push("Phone number is required.");
        if (formData.regType === "business" && !formData.businessName) newErrors.push("Business/Organization name is required.");
        setErrors(newErrors);
        return newErrors.length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) {
            const contentContainer = document.getElementById("legacy-modal-content");
            const prefSection = document.getElementById("fulfillment-preference-section");

            // First click on step 1: scroll to preference section if it exists and hasn't been "guided" yet
            if (!hasGuidedToPreference && contentContainer && prefSection) {
                prefSection.scrollIntoView({ behavior: "smooth", block: "start" });
                setHasGuidedToPreference(true);
                return; // Stop here to let the user see the options
            }

            // Normal progression to step 2
            setStep(2);
            if (contentContainer) contentContainer.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            // If validation fails, scroll to error area
            const contentContainer = document.getElementById("legacy-modal-content");
            if (contentContainer) contentContainer.scrollTo({ top: contentContainer.scrollHeight, behavior: "smooth" });
        }
    };

    const handleSubmit = async () => {
        if (!validateStep2()) return;

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const adminResult = await sendAdminRegistrationAlert({
                ...formData,
                intention: "pledge",
                participation: selectedTier?.title || "Custom Legacy Gift",
                amount: activeAmount.toString(),
                pledgeAmount: activeAmount.toString(), // To align with existing backend expectations
                numGuests: 0,
                childCare: "no"
            });

            if (adminResult.success) {
                // Fire off confirmation async
                sendRSVPConfirmation({
                    ...formData,
                    intention: "pledge",
                    amount: activeAmount.toString(),
                    pledgeAmount: activeAmount.toString(),
                    commitmentType: formData.commitmentType
                }).catch(err => console.error("Auto-email Error:", err));

                const donationAmount = formData.commitmentType === "installment"
                    ? parseInt(formData.initialAmount || "0")
                    : activeAmount;

                const shouldRedirectToStripe = donationAmount > 0 &&
                    (formData.commitmentType === "immediate" || formData.commitmentType === "installment");

                if (shouldRedirectToStripe) {
                    setIsRedirecting(true);
                    try {
                        const { url } = await createCheckoutSession({
                            amount: donationAmount,
                            email: formData.email,
                            firstName: formData.firstName,
                            lastName: formData.lastName
                        });
                        window.location.href = url;
                        return; // Done
                    } catch (error) {
                        console.error("Stripe Checkout Error:", error);
                        setSubmitError("We couldn't initialize secure card processing. Please try 'Faith Promise' instead.");
                        setIsRedirecting(false);
                        return;
                    }
                } else {
                    setIsSubmitted(true);
                }
            } else {
                setSubmitError("Failed to submit commitment. Please try again.");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setSubmitError("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && !isRedirecting) onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose, isRedirecting]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={!isRedirecting ? onClose : undefined}
                    className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 md:p-8 pb-4 border-b border-brand-gray/10 shrink-0">
                        <div>
                            <span className="text-secondary font-bold tracking-[0.2em] uppercase mb-1 inline-block text-[10px]">Legacy Campaign</span>
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-primary">Your Legacy Commitment</h2>
                        </div>
                        {!isRedirecting && !isSubmitted && (
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>

                    {/* Content Scrollable Area */}
                    <div id="legacy-modal-content" className="overflow-y-auto p-6 md:p-10 flex-1 scroll-smooth">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center text-center py-8">
                                <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={40} className="text-brand-green" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-green mb-3">Commitment Received</h3>
                                <p className="text-brand-gold font-bold mb-4 uppercase tracking-widest text-xs">Transforming Faith into Action</p>
                                <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                                    Thank you, {formData.firstName}. Your profound generosity will stand for generations. A formal acknowledgment packet will be dispatched to {formData.email}.
                                </p>

                                {formData.commitmentType === "pledge" && (
                                    <Link
                                        href="https://adventistgiving.org/donate/ANTFAU"
                                        target="_blank"
                                        className="bg-brand-green text-white font-bold px-8 py-3.5 rounded-xl shadow-xl shadow-brand-green/30 hover:bg-brand-green/90 transition-all mb-4 uppercase tracking-widest text-xs w-full sm:w-auto flex items-center justify-center gap-3"
                                    >
                                        <Heart size={16} className="fill-white" />
                                        Give Online via AdventistGiving
                                    </Link>
                                )}
                                <button onClick={onClose} className="text-xs font-bold text-slate-400 hover:text-brand-green uppercase tracking-widest underline underline-offset-4 mt-4">
                                    Return to Site
                                </button>
                            </div>
                        ) : (
                            <>
                                {step === 1 && (
                                    <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}>
                                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">1. Select Your Level of Impact</h3>

                                        {!showAllTiers && selectedTier ? (
                                            <div className="mb-8 group">
                                                <div className="p-5 md:p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-2xl relative transition-all">
                                                    <div className="absolute top-4 right-4 text-brand-gold">
                                                        <CheckCircle2 size={16} />
                                                    </div>
                                                    <p className="text-[9px] font-bold text-brand-gold uppercase tracking-widest mb-1 block">Level Selected</p>
                                                    <div className="md:flex md:items-center md:justify-between gap-4">
                                                        <div>
                                                            <p className="font-serif font-bold text-lg md:text-xl text-brand-green">{selectedTier.title}</p>
                                                            <p className="text-xs text-slate-500 font-medium mt-1">{selectedTier.amount !== "Custom" ? selectedTier.amount : ""}</p>
                                                        </div>
                                                        <button
                                                            onClick={() => setShowAllTiers(true)}
                                                            className="text-[10px] mt-4 md:mt-0 font-bold uppercase tracking-widest text-brand-green/60 hover:text-brand-green bg-white border border-brand-gray/10 px-4 py-2 rounded-lg transition-colors shadow-sm"
                                                        >
                                                            Change Level
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                                {LEGACY_TIERS.map((tier) => (
                                                    <button
                                                        key={tier.title}
                                                        onClick={() => setSelectedTier(tier)}
                                                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 relative ${selectedTier?.title === tier.title ? "border-brand-gold bg-brand-gold/5 shadow-md shadow-brand-gold/5" : "border-slate-100 hover:border-slate-200"}`}
                                                    >
                                                        <p className={`font-bold text-sm ${selectedTier?.title === tier.title ? "text-brand-green" : "text-slate-700"}`}>{tier.title}</p>
                                                        <p className="text-xs font-serif font-bold text-brand-gold mt-1">{tier.amount}</p>
                                                        
                                                        {selectedTier?.title === tier.title && (
                                                            <div className="absolute top-4 right-4 text-brand-gold">
                                                                <CheckCircle2 size={16} />
                                                            </div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {selectedTier?.value === 0 && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                                <label className="text-[10px] font-bold text-brand-green/60 uppercase tracking-widest mb-3 block">Custom Commitment Amount</label>
                                                <div className="relative group">
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold font-serif font-bold text-xl">$</div>
                                                    <input
                                                        type="number"
                                                        value={customAmount}
                                                        onChange={(e) => setCustomAmount(e.target.value)}
                                                        className="w-full bg-white border-2 border-slate-200 focus:border-brand-gold rounded-xl py-4 pl-10 pr-4 text-xl font-serif font-bold text-brand-green outline-none transition-all"
                                                        placeholder="0"
                                                    />
                                                </div>
                                            </motion.div>
                                        )}

                                        <h3 id="fulfillment-preference-section" className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 scroll-mt-6">Fulfillment Preference</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                                            {[
                                                { id: "pledge", title: "Faith Promise", desc: "Commit now, give later" },
                                                { id: "installment", title: "Initial Installment", desc: "Partial gift today" },
                                                { id: "immediate", title: "Give Today", desc: "Full gift today" },
                                            ].map(pref => (
                                                <button
                                                    key={pref.id}
                                                    onClick={() => setFormData({ ...formData, commitmentType: pref.id as any })}
                                                    className={`p-4 rounded-xl border-2 text-center transition-all ${formData.commitmentType === pref.id ? "border-brand-green bg-brand-green/5 text-brand-green" : "border-slate-100 hover:border-slate-200 text-slate-500"}`}
                                                >
                                                    <p className="font-bold text-[10px] uppercase tracking-widest mb-1">{pref.title}</p>
                                                    <p className="text-[9px] text-slate-400 leading-tight">{pref.desc}</p>
                                                </button>
                                            ))}
                                        </div>

                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="p-4 bg-brand-gold/5 border border-brand-gold/20 rounded-xl flex gap-4 items-start"
                                        >
                                            <div className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                                                <Heart size={14} className="text-brand-gold fill-brand-gold" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-brand-green uppercase tracking-wider mb-1">Fulfillment Note</p>
                                                <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                                                    Choosing <span className="text-brand-green font-bold">Faith Promise</span> allows you to formalize your intent today with the church office. 
                                                    For immediate impact, <span className="text-brand-green font-bold">Give Today</span> ensures your contribution is processed securely right now via Stripe.
                                                </p>
                                            </div>
                                        </motion.div>

                                        {formData.commitmentType === "installment" && (
                                            <div className="mt-4 p-4 bg-brand-green/5 rounded-xl border border-brand-green/10">
                                                <label className="text-[10px] font-bold text-brand-green/60 uppercase tracking-widest mb-2 block">Initial Amount to Pay Now</label>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gold font-serif font-bold">$</div>
                                                    <input
                                                        type="number"
                                                        value={formData.initialAmount}
                                                        onChange={(e) => setFormData({ ...formData, initialAmount: e.target.value })}
                                                        placeholder="0"
                                                        className="w-full bg-white border border-brand-green/20 rounded-lg py-2 pl-8 pr-3 text-lg font-serif outline-none focus:border-brand-gold transition-colors"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {errors.length > 0 && (
                                            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600">
                                                {errors[0]}
                                            </div>
                                        )}
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}>
                                        {/* Summary Bar */}
                                        <div className="mb-8 p-4 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1">Your Commitment</p>
                                                <p className="font-serif font-bold text-brand-green">{selectedTier?.title}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-serif font-bold text-xl text-brand-green flex items-baseline gap-1">
                                                    <span className="text-xs text-brand-gold">$</span>
                                                    {activeAmount.toLocaleString()}
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">2. Donor Identity</h3>

                                        <div className="flex gap-4 mb-6">
                                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                                                <input type="radio" checked={formData.regType === 'personal'} onChange={() => setFormData({ ...formData, regType: 'personal' })} className="accent-brand-gold" />
                                                <span className="font-medium text-slate-700">Personal</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                                                <input type="radio" checked={formData.regType === 'business'} onChange={() => setFormData({ ...formData, regType: 'business' })} className="accent-brand-gold" />
                                                <span className="font-medium text-slate-700">Organization</span>
                                            </label>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">First Name</label>
                                                <input type="text" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} className="w-full border-b-2 border-slate-200 bg-slate-50/50 py-3 px-4 rounded-t-xl outline-none focus:border-brand-gold focus:bg-white transition-all"/>
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Last Name</label>
                                                <input type="text" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} className="w-full border-b-2 border-slate-200 bg-slate-50/50 py-3 px-4 rounded-t-xl outline-none focus:border-brand-gold focus:bg-white transition-all"/>
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Email</label>
                                                <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full border-b-2 border-slate-200 bg-slate-50/50 py-3 px-4 rounded-t-xl outline-none focus:border-brand-gold focus:bg-white transition-all"/>
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Phone</label>
                                                <input type="text" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full border-b-2 border-slate-200 bg-slate-50/50 py-3 px-4 rounded-t-xl outline-none focus:border-brand-gold focus:bg-white transition-all"/>
                                            </div>
                                            {formData.regType === "business" && (
                                                <div className="sm:col-span-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Organization Name</label>
                                                    <input type="text" value={formData.businessName} onChange={e => setFormData({ ...formData, businessName: e.target.value })} className="w-full border-b-2 border-slate-200 bg-slate-50/50 py-3 px-4 rounded-t-xl outline-none focus:border-brand-gold focus:bg-white transition-all"/>
                                                </div>
                                            )}
                                        </div>

                                        {errors.length > 0 && (
                                            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600">
                                                {errors[0]}
                                            </div>
                                        )}
                                        {submitError && (
                                            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600">
                                                {submitError}
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Footer Actions */}
                    {!isSubmitted && (
                        <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
                            {step === 1 ? (
                                <div className="text-[10px] text-slate-400 hidden sm:block font-bold uppercase tracking-wider">Step 1 of 2</div>
                            ) : (
                                <button onClick={() => setStep(1)} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-brand-green transition-colors">
                                    ← Back
                                </button>
                            )}

                            <button
                                onClick={step === 1 ? handleNext : handleSubmit}
                                disabled={isSubmitting || isRedirecting}
                                className="ml-auto bg-brand-green text-white font-bold px-8 py-3 rounded-xl hover:bg-brand-green/90 transition-all uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg shadow-brand-green/20 disabled:opacity-70"
                            >
                                {isSubmitting || isRedirecting ? (
                                    <><Loader2 size={16} className="animate-spin" /> Processing...</>
                                ) : (
                                    <>{step === 1 ? "Next Step" : "Secure Commitment"} <Star size={14} className="fill-brand-gold text-brand-gold" /></>
                                )}
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

