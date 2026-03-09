"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    User,
    Briefcase,
    Ticket,
    Users,
    Home,
    Utensils,
    Baby,
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    Heart,
    Star
} from "lucide-react";

type Step = 1 | 2 | 3 | 4;

export default function RSVP() {
    const [step, setStep] = useState<Step>(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        intention: "attend" as "attend" | "pledge" | "both",
        regType: "personal" as "personal" | "business",
        businessName: "",
        participation: "individual" as "individual" | "table" | "other",
        amount: "500",
        numGuests: 1,
        guestNames: "",
        stayOvernight: "" as "yes" | "no" | "",
        dietary: "",
        childCare: "no" as "no" | "yes",
        numChildren: 1,
        agesChildren: "",
        childNeeds: "",
        pledgeAmount: "50000",
        pledgeFrequency: "one-time",
        pledgeTimeframe: "30"
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    const validateStep = (currentStep: Step) => {
        const newErrors: string[] = [];
        if (currentStep === 1) {
            if (!formData.firstName) newErrors.push("First name is required");
            if (!formData.lastName) newErrors.push("Last name is required");
            if (!formData.email || !formData.email.includes("@")) newErrors.push("Valid email is required");
            if (!formData.phone) newErrors.push("Phone number is required");
        }
        if (currentStep === 2) {
            if (formData.regType === "business" && !formData.businessName) newErrors.push("Business name is required for corporate registration");
            if (formData.intention !== "pledge" && (!formData.amount || parseInt(formData.amount) <= 0)) newErrors.push("A contribution amount is required");
        }
        if (currentStep === 3) {
            if (formData.intention !== "pledge" && formData.numGuests < 1) newErrors.push("Number of guests must be at least 1");
            if (formData.intention !== "attend" && formData.pledgeAmount === "other" && (!formData.amount || parseInt(formData.amount) <= 0)) newErrors.push("Please specify a custom pledge amount");
        }

        setErrors(newErrors);
        return newErrors.length === 0;
    };

    const updateFormData = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear errors when user types
        if (errors.length > 0) setErrors([]);
    };

    const nextStep = () => {
        if (validateStep(step)) {
            setStep(prev => (prev < 4 ? (prev + 1) as Step : prev));
        }
    };
    const prevStep = () => {
        setErrors([]);
        setStep(prev => (prev > 1 ? (prev - 1) as Step : prev));
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async () => {
        if (!validateStep(4)) return;

        setIsSubmitting(true);
        setSubmitError(null);

        const formDataToSend = new FormData();

        // Append all our React state to the FormData
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value.toString());
        });

        // Web3Forms specific fields
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
        formDataToSend.append("access_key", accessKey);
        formDataToSend.append("subject", `New RSVP: ${formData.firstName} ${formData.lastName}`);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                setTimeout(() => {
                    const el = document.getElementById("legacy-circles");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 2000);
            } else {
                console.error("Web3Forms Error:", data);
                setSubmitError(data.message || "Failed to submit RSVP. Please try again.");
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setSubmitError("Failed to connect to the submission server. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const steps = [
        { id: 1, title: "Identity", icon: User },
        { id: 2, title: "Engagement", icon: Ticket },
        { id: 3, title: formData.intention === "pledge" ? "Faith Promise" : "Hospitality", icon: formData.intention === "pledge" ? Heart : Home },
        { id: 4, title: "Commitment", icon: CheckCircle2 },
    ];

    return (
        <section id="rsvp" className="relative py-24 overflow-hidden bg-brand-light/20">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-gold font-bold tracking-[0.3em] uppercase mb-4 inline-block text-xs"
                    >
                        Foundation Gala 2026
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-brand-green mb-6"
                    >
                        The Vision Engagement
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Progress Sidebar */}
                    <div className="lg:col-span-3 space-y-4">
                        {/* Mobile Step Indicator */}
                        <div className="lg:hidden flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-brand-green text-white flex items-center justify-center shrink-0">
                                    {steps.find(s => s.id === step)?.icon &&
                                        (() => {
                                            const Icon = steps.find(s => s.id === step)!.icon;
                                            return <Icon size={16} />;
                                        })()
                                    }
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-brand-gold leading-none mb-1">Step 0{step}</p>
                                    <p className="font-serif font-bold text-brand-green leading-none">{steps.find(s => s.id === step)?.title}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`h-1 rounded-full transition-all duration-500 ${step === i ? "w-6 bg-brand-gold" : "w-1.5 bg-brand-gray/20"}`} />
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:block space-y-2">
                            {steps.map((s) => (
                                <div
                                    key={s.id}
                                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 ${step === s.id ? "bg-white shadow-lg border border-brand-gray/10" : "opacity-40"}`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${step === s.id ? "bg-brand-green text-white" : "bg-brand-gray/20 text-brand-green"}`}>
                                        <s.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">Step 0{s.id}</p>
                                        <p className="font-serif font-bold text-brand-green">{s.title}</p>
                                    </div>
                                    {step > s.id && (
                                        <CheckCircle2 size={16} className="ml-auto text-brand-gold" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Summary Card (Bento Style) */}
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-sm hidden lg:block">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-green/60 mb-6 flex items-center gap-2">
                                <Star size={12} className="text-brand-gold" />
                                Your Engagement
                            </h4>
                            <div className="space-y-4">
                                {formData.firstName && (
                                    <div className="animate-in fade-in slide-in-from-left-2 transition-all">
                                        <p className="text-[10px] text-slate-400 uppercase font-bold">Attendee</p>
                                        <p className="text-sm font-bold text-brand-green">{formData.firstName} {formData.lastName}</p>
                                    </div>
                                )}
                                {formData.participation && step > 1 && (
                                    <div className="animate-in fade-in slide-in-from-left-2 transition-all">
                                        <p className="text-[10px] text-slate-400 uppercase font-bold">Level</p>
                                        <p className="text-sm font-bold text-brand-green">
                                            {formData.participation === "table" ? "Full Table Sponsor" : formData.participation === "other" ? "Custom Contribution" : "Suggested Contribution"}
                                        </p>
                                    </div>
                                )}
                                {formData.numGuests > 1 && step > 2 && (
                                    <div className="animate-in fade-in slide-in-from-left-2 transition-all">
                                        <p className="text-[10px] text-slate-400 uppercase font-bold">Group size</p>
                                        <p className="text-sm font-bold text-brand-green">{formData.numGuests} People</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-9 bg-white/60 backdrop-blur-2xl border border-white p-5 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative min-h-[500px] md:min-h-[600px] flex flex-col justify-center">

                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success-state"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mb-8">
                                        <CheckCircle2 size={48} className="text-brand-green" />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-4">Registration Secured</h2>
                                    <p className="text-brand-gold font-bold mb-6 uppercase tracking-widest text-sm">Welcome to the Legacy, {formData.firstName}</p>
                                    <p className="text-slate-500 max-w-md mx-auto mb-8 text-base leading-relaxed">
                                        Your presence has been formally registered for the 2026 Vision Gala.
                                        A formal digital invitation packet will be dispatched to <span className="font-bold">{formData.email}</span>.
                                    </p>

                                    <button
                                        onClick={() => {
                                            const el = document.getElementById("legacy-circles");
                                            if (el) el.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="bg-brand-gold text-brand-green font-bold px-8 py-3 rounded-xl shadow-lg shadow-brand-gold/20 hover:opacity-90 transition-all mb-6 uppercase tracking-widest text-sm"
                                    >
                                        Explore Legacy Circles
                                    </button>

                                    <button
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setStep(1);
                                            setFormData({
                                                firstName: "",
                                                lastName: "",
                                                email: "",
                                                phone: "",
                                                intention: "attend",
                                                regType: "personal",
                                                businessName: "",
                                                participation: "individual",
                                                amount: "500",
                                                numGuests: 1,
                                                guestNames: "",
                                                stayOvernight: "",
                                                dietary: "",
                                                childCare: "no",
                                                numChildren: 1,
                                                agesChildren: "",
                                                childNeeds: "",
                                                pledgeAmount: "50000",
                                                pledgeFrequency: "one-time",
                                                pledgeTimeframe: "30"
                                            });
                                        }}
                                        className="text-sm font-bold text-brand-green hover:text-brand-gold transition-colors underline underline-offset-4 decoration-2"
                                    >
                                        Register Another Guest
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="flex-1 flex flex-col"
                                >
                                    {/* (Rest of the form steps 1 to 4 render exactly the same here - just nested) */}
                                    {step === 1 && (
                                        <div className="space-y-8 md:space-y-10">
                                            {/* Honeypot Spam Protection */}
                                            <input
                                                type="checkbox"
                                                name="botcheck"
                                                className="hidden"
                                                style={{ display: 'none' }}
                                                onChange={(e) => updateFormData("botcheck", e.target.checked)}
                                            />
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-green mb-2">Let's start with your identity</h3>
                                                <p className="text-sm md:text-base text-slate-500">We want to ensure your welcome is personal and meaningful.</p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                                {[
                                                    { id: "firstName", label: "First Name", type: "text", placeholder: "E.g. Michael" },
                                                    { id: "lastName", label: "Last Name", type: "text", placeholder: "E.g. Scott" },
                                                    { id: "email", label: "Digital Address", type: "email", placeholder: "michael@dundermifflin.com" },
                                                    { id: "phone", label: "Phone Line", type: "tel", placeholder: "(555) 000-0000" }
                                                ].map((f) => (
                                                    <div key={f.id} className="group space-y-2">
                                                        <label className="text-[10px] md:text-xs font-bold text-brand-green/60 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-brand-gold">{f.label}</label>
                                                        <input
                                                            type={f.type}
                                                            value={(formData as any)[f.id]}
                                                            onChange={(e) => updateFormData(f.id, e.target.value)}
                                                            className="w-full bg-white/80 border border-brand-gray/20 p-4 md:p-5 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all shadow-sm focus:shadow-md placeholder:text-slate-300 text-sm md:text-base"
                                                            placeholder={f.placeholder}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div className="space-y-8 md:space-y-10">
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-green mb-2">Your Path of Impact</h3>
                                                <p className="text-sm md:text-base text-slate-500">How would you like to partner with our vision?</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                                                {[
                                                    { id: "attend", title: "Attend Gala", desc: "Join us at the event", icon: Ticket },
                                                    { id: "pledge", title: "Make a Pledge", desc: "Faith promise contribution", icon: Heart },
                                                    { id: "both", title: "Both", desc: "Attend & make a pledge", icon: Star }
                                                ].map((t) => (
                                                    <button
                                                        key={t.id}
                                                        onClick={() => updateFormData("intention", t.id as any)}
                                                        className={`p-4 md:p-6 rounded-2xl border-2 text-left transition-all duration-300 relative overflow-hidden ${formData.intention === t.id ? "border-brand-green bg-brand-green/5 ring-1 ring-brand-green" : "border-brand-gray/10 bg-white"}`}
                                                    >
                                                        <t.icon className={`mb-3 transition-colors ${formData.intention === t.id ? "text-brand-gold" : "text-brand-green/20"}`} size={24} />
                                                        <p className={`font-bold text-sm md:text-base mb-1 ${formData.intention === t.id ? "text-brand-green" : "text-slate-700"}`}>{t.title}</p>
                                                        <p className="text-[10px] md:text-xs text-slate-400">{t.desc}</p>
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4 border-t border-brand-gray/10">
                                                {[
                                                    { id: "personal", title: "Personal", desc: "Individual registration", icon: User },
                                                    { id: "business", title: "Corporate", desc: "Representing an organization", icon: Briefcase }
                                                ].map((t) => (
                                                    <button
                                                        key={t.id}
                                                        onClick={() => updateFormData("regType", t.id)}
                                                        className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 text-left transition-all duration-500 group relative overflow-hidden ${formData.regType === t.id ? "border-brand-green bg-brand-green/5 ring-1 ring-brand-green" : "border-brand-gray/10 bg-white"}`}
                                                    >
                                                        <t.icon className={`mb-3 md:mb-4 transition-colors ${formData.regType === t.id ? "text-brand-gold" : "text-brand-green/20"}`} size={28} />
                                                        <p className={`font-bold text-lg md:text-xl mb-1 ${formData.regType === t.id ? "text-brand-green" : "text-slate-700"}`}>{t.title}</p>
                                                        <p className="text-[10px] md:text-xs text-slate-400">{t.desc}</p>
                                                        {formData.regType === t.id && (
                                                            <motion.div layoutId="selection" className="absolute top-4 right-4 text-brand-gold">
                                                                <CheckCircle2 size={20} className="md:w-6 md:h-6" />
                                                            </motion.div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>

                                            {formData.regType === "business" && (
                                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2">
                                                    <label className="text-xs font-bold text-brand-green/60 uppercase tracking-widest ml-1">Business/Organization Name</label>
                                                    <input
                                                        type="text"
                                                        value={formData.businessName}
                                                        onChange={(e) => updateFormData("businessName", e.target.value)}
                                                        className="w-full bg-white/80 border border-brand-gray/20 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-brand-gold transition-all"
                                                        placeholder="Enter name"
                                                    />
                                                </motion.div>
                                            )}

                                            {formData.intention !== "pledge" && (
                                                <div className="space-y-4 pt-4 border-t border-brand-gray/10">
                                                    <p className="text-xs font-bold text-brand-green/60 uppercase tracking-widest ml-1">Gala Participation Level</p>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                                                        <button
                                                            onClick={() => {
                                                                updateFormData("participation", "individual");
                                                                updateFormData("amount", "500");
                                                            }}
                                                            className={`p-4 md:p-6 rounded-2xl border-2 text-left transition-all ${formData.participation === "individual" ? "border-brand-green bg-brand-green/5 ring-1 ring-brand-green" : "border-brand-gray/10"}`}
                                                        >
                                                            <p className="font-bold text-brand-green text-sm md:text-base">Suggested Min. Contribution</p>
                                                            <p className="text-[10px] md:text-xs text-slate-500 mt-1"><span className="font-bold text-brand-green">$500</span> per seat</p>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                updateFormData("participation", "table");
                                                                updateFormData("amount", "4000");
                                                            }}
                                                            className={`p-4 md:p-6 rounded-2xl border-2 text-left transition-all ${formData.participation === "table" ? "border-brand-green bg-brand-green/5 ring-1 ring-brand-green" : "border-brand-gray/10"}`}
                                                        >
                                                            <p className="font-bold text-brand-green text-sm md:text-base">Full Table Sponsor</p>
                                                            <p className="text-[10px] md:text-xs text-brand-gold font-bold mt-1">Recommended • 8 guests</p>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                updateFormData("participation", "other");
                                                                updateFormData("amount", "");
                                                            }}
                                                            className={`p-4 md:p-6 rounded-2xl border-2 text-left transition-all ${formData.participation === "other" ? "border-brand-green bg-brand-green/5 ring-1 ring-brand-green" : "border-brand-gray/10"}`}
                                                        >
                                                            <p className="font-bold text-brand-green text-sm md:text-base">Other Amount</p>
                                                            <p className="text-[10px] md:text-xs text-slate-500 mt-1">Custom initial contribution</p>
                                                        </button>
                                                    </div>
                                                    <div className="relative group mt-4">
                                                        <label className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-green/50 font-bold">$</label>
                                                        <input
                                                            type="number"
                                                            value={formData.amount}
                                                            onChange={(e) => updateFormData("amount", e.target.value)}
                                                            readOnly={formData.participation !== "other"}
                                                            className={`w-full pl-12 pr-6 py-5 rounded-2xl bg-brand-gray/5 border-2 outline-none transition-all font-serif font-bold text-2xl text-brand-green/70 ${formData.participation === "other" ? "border-brand-gray/20 focus:border-brand-gold focus:bg-white bg-white/50" : "border-transparent cursor-not-allowed"}`}
                                                            placeholder={formData.participation === "other" ? "Enter custom amount" : "Contribution amount"}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <div className="space-y-8 md:space-y-10">
                                            {formData.intention !== "pledge" && (
                                                <>
                                                    <div>
                                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-green mb-2">Hospitality Details</h3>
                                                        <p className="text-sm md:text-base text-slate-500">Help us ensure your comfort and the safety of your family at the Gala.</p>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                                        <div className="space-y-4">
                                                            <label className="text-[10px] md:text-xs font-bold text-brand-green/60 uppercase tracking-widest ml-1 flex items-center gap-2">
                                                                <Users size={14} /> Total Guests
                                                            </label>
                                                            <div className="flex flex-wrap items-center gap-2 md:gap-3">
                                                                {[1, 2, 4, 8].map(n => (
                                                                    <button
                                                                        key={n}
                                                                        onClick={() => {
                                                                            updateFormData("numGuests", n);
                                                                            if (formData.participation !== "other") {
                                                                                updateFormData("amount", (n * 500).toString());
                                                                            }
                                                                        }}
                                                                        className={`flex flex-col items-center justify-center min-w-[3.5rem] h-[3.5rem] px-2 md:min-w-[4rem] md:h-[4rem] rounded-lg md:rounded-xl border-2 transition-all ${formData.numGuests === n ? "border-brand-gold bg-brand-gold/10 text-brand-green shadow-sm" : "border-brand-gray/10 text-slate-500 hover:border-brand-gray/30 bg-white"}`}
                                                                    >
                                                                        <span className="font-bold text-base md:text-lg leading-none mb-1 text-center">{n}</span>
                                                                        <span className={`text-[9px] md:text-[10px] font-medium leading-none text-center ${formData.numGuests === n ? "text-brand-green/80" : "text-slate-400"}`}>
                                                                            ${(n * 500).toLocaleString()}
                                                                        </span>
                                                                    </button>
                                                                ))}
                                                                <div className={`relative flex flex-col items-center justify-center min-w-[3.5rem] h-[3.5rem] md:min-w-[4rem] md:h-[4rem] rounded-lg md:rounded-xl border-2 transition-all overflow-hidden bg-white ${![1, 2, 4, 8].includes(formData.numGuests) && formData.numGuests > 0 ? "border-brand-gold ring-1 ring-brand-gold shadow-sm" : "border-brand-gray/20 focus-within:border-brand-gold focus-within:ring-1 focus-within:ring-brand-gold"}`}>
                                                                    <input
                                                                        type="number"
                                                                        min="1"
                                                                        className="absolute inset-0 w-full h-full text-center font-bold text-base md:text-lg outline-none bg-transparent pb-3.5 md:pb-4 text-brand-green"
                                                                        value={formData.numGuests || ''}
                                                                        onChange={(e) => {
                                                                            const val = parseInt(e.target.value) || 0;
                                                                            updateFormData("numGuests", val);
                                                                            if (formData.participation !== "other") {
                                                                                updateFormData("amount", (val * 500).toString());
                                                                            }
                                                                        }}
                                                                    />
                                                                    <span className={`absolute bottom-1.5 md:bottom-2 text-[9px] md:text-[10px] font-medium pointer-events-none text-center w-full px-1 overflow-hidden text-ellipsis ${![1, 2, 4, 8].includes(formData.numGuests) && formData.numGuests > 0 ? "text-brand-green/80" : "text-slate-400"}`}>
                                                                        ${((formData.numGuests || 0) * 500).toLocaleString()}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="space-y-4">
                                                            <label className="text-[10px] md:text-xs font-bold text-brand-green/60 uppercase tracking-widest ml-1 flex items-center gap-2">
                                                                <Utensils size={14} /> Dietary Specifics
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={formData.dietary}
                                                                onChange={(e) => updateFormData("dietary", e.target.value)}
                                                                className="w-full bg-white/80 border border-brand-gray/20 p-3 md:p-4 rounded-lg md:rounded-xl outline-none text-sm"
                                                                placeholder="Allergies / Restrictions"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="bg-brand-light/50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-brand-gray/10 space-y-6">
                                                        <div className="flex items-start gap-3 md:gap-4">
                                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                                                                <Baby size={20} className="md:w-6 md:h-6" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <p className="font-bold text-brand-green mb-0.5 uppercase text-xs md:text-sm">Complimentary Child Care</p>
                                                                <p className="text-[10px] md:text-xs text-slate-500 leading-tight">On-site professional service for the duration.</p>
                                                            </div>
                                                            <div className="shrink-0">
                                                                <button
                                                                    onClick={() => updateFormData("childCare", formData.childCare === "yes" ? "no" : "yes")}
                                                                    className={`w-12 md:w-14 h-6 md:h-8 rounded-full p-1 transition-colors duration-300 flex ${formData.childCare === "yes" ? "bg-brand-green justify-end" : "bg-brand-gray/30 justify-start"}`}
                                                                >
                                                                    <motion.div layout className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full shadow-md" />
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {formData.childCare === "yes" && (
                                                            <motion.div
                                                                initial={{ opacity: 0, scale: 0.95 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pt-4 border-t border-brand-gray/10"
                                                            >
                                                                <div className="space-y-1.5">
                                                                    <p className="text-[10px] font-bold text-brand-green/60 uppercase">Quantity</p>
                                                                    <input type="number" className="w-full p-2.5 rounded-lg border border-brand-gray/20 text-sm" placeholder="1" />
                                                                </div>
                                                                <div className="space-y-1.5 col-span-2 md:col-span-2">
                                                                    <p className="text-[10px] font-bold text-brand-green/60 uppercase">Ages (e.g. 4, 7)</p>
                                                                    <input type="text" className="w-full p-2.5 rounded-lg border border-brand-gray/20 text-sm" placeholder="Enter ages" />
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                </>
                                            )}

                                            {formData.intention !== "attend" && (
                                                <div className={`space-y-8 ${formData.intention === "both" ? "pt-10 border-t-2 border-brand-gray/10" : ""}`}>
                                                    <div>
                                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-green mb-2">Faith Promise Details</h3>
                                                        <p className="text-sm md:text-base text-slate-500">Plant a seed today for a lasting legacy tomorrow.</p>
                                                    </div>

                                                    <div className="space-y-4">
                                                        <label className="text-xs font-bold text-brand-green/60 uppercase tracking-widest ml-1">Total Pledge Amount</label>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                            {[
                                                                { label: "Cornerstone Legacy Partner", amount: "50000" },
                                                                { label: "Visionary Pillar", amount: "25000" },
                                                                { label: "Heritage Builder", amount: "10000" },
                                                                { label: "Faith Supporter", amount: "5000" },
                                                                { label: "Community Partner", amount: "1000" },
                                                                { label: "Other Amount", amount: "other" }
                                                            ].map((tier) => (
                                                                <button
                                                                    key={tier.amount}
                                                                    onClick={() => updateFormData("pledgeAmount", tier.amount)}
                                                                    className={`p-4 rounded-xl border-2 text-left transition-all ${formData.pledgeAmount === tier.amount ? "border-brand-gold bg-brand-gold/10 ring-1 ring-brand-gold" : "border-brand-gray/10 hover:border-brand-gray/30 bg-white"}`}
                                                                >
                                                                    <p className="font-bold text-brand-green text-sm">{tier.amount === "other" ? "Custom Amount" : `$${parseInt(tier.amount).toLocaleString()}`}</p>
                                                                    <p className="text-[10px] text-slate-500 mt-0.5">{tier.label}</p>
                                                                </button>
                                                            ))}
                                                        </div>

                                                        {formData.pledgeAmount === "other" && (
                                                            <div className="relative group mt-4">
                                                                <label className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-green/50 font-bold">$</label>
                                                                <input
                                                                    type="number"
                                                                    value={formData.amount}
                                                                    onChange={(e) => updateFormData("amount", e.target.value)}
                                                                    className="w-full pl-12 pr-6 py-4 rounded-xl border-2 border-brand-gold/50 focus:border-brand-gold outline-none transition-all font-serif font-bold text-xl text-brand-green"
                                                                    placeholder="Enter custom pledge amount"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="space-y-3">
                                                            <label className="text-xs font-bold text-brand-green/60 uppercase tracking-widest ml-1">Remaining Balance Timeframe</label>
                                                            <select
                                                                value={formData.pledgeTimeframe}
                                                                onChange={(e) => updateFormData("pledgeTimeframe", e.target.value)}
                                                                className="w-full p-4 rounded-xl bg-white border border-brand-gray/20 outline-none focus:ring-2 focus:ring-brand-gold text-sm text-brand-green font-medium"
                                                            >
                                                                <option value="30">30 Days</option>
                                                                <option value="90">90 Days</option>
                                                                <option value="date">By Specific Date</option>
                                                            </select>
                                                        </div>
                                                        <div className="space-y-3">
                                                            <label className="text-xs font-bold text-brand-green/60 uppercase tracking-widest ml-1">Giving Frequency</label>
                                                            <div className="flex gap-4">
                                                                {["one-time", "monthly", "quarterly"].map((freq) => (
                                                                    <label key={freq} className="flex items-center gap-2 cursor-pointer">
                                                                        <input
                                                                            type="radio"
                                                                            name="pledgeFrequency"
                                                                            value={freq}
                                                                            checked={formData.pledgeFrequency === freq}
                                                                            onChange={(e) => updateFormData("pledgeFrequency", e.target.value)}
                                                                            className="w-4 h-4 text-brand-gold focus:ring-brand-gold"
                                                                        />
                                                                        <span className="text-sm text-brand-green capitalize">{freq.replace("-", " ")}</span>
                                                                    </label>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {step === 4 && (
                                        <div className="space-y-10">
                                            <div className="text-center">
                                                <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <Heart className="text-brand-gold fill-brand-gold" size={40} />
                                                </div>
                                                <h3 className="text-3xl font-serif font-bold text-brand-green mb-2">Ready to Make an Impact?</h3>
                                                <p className="text-slate-500">Please review your selections and confirm your commitment to the legacy.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-brand-light/30 p-4 rounded-2xl flex justify-between items-center group hover:bg-white hover:shadow-lg transition-all duration-300">
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Role</span>
                                                    <span className="font-bold text-brand-green">{formData.regType === "personal" ? "Private Guest" : "Corporate Partner"}</span>
                                                </div>
                                                <div className="bg-brand-light/30 p-4 rounded-2xl flex justify-between items-center group hover:bg-white hover:shadow-lg transition-all duration-300">
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Intention</span>
                                                    <span className="font-bold text-brand-green capitalize">{formData.intention.replace("both", "Attend & Pledge")}</span>
                                                </div>

                                                {formData.intention !== "pledge" && (
                                                    <div className="bg-brand-light/30 p-4 rounded-2xl flex justify-between items-center group hover:bg-white hover:shadow-lg transition-all duration-300 md:col-span-2">
                                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gala Group</span>
                                                        <span className="font-bold text-brand-green">{formData.numGuests} People ({formData.participation === "table" ? "Table Sponsorship" : "Standard"})</span>
                                                    </div>
                                                )}

                                                {formData.intention !== "attend" && (
                                                    <div className="bg-brand-light/30 p-4 rounded-2xl flex justify-between items-center group hover:bg-white hover:shadow-lg transition-all duration-300 md:col-span-2">
                                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Faith Promise</span>
                                                        <span className="font-bold text-brand-gold">${formData.pledgeAmount === "other" ? formData.amount : parseInt(formData.pledgeAmount).toLocaleString()} • {formData.pledgeFrequency.replace("-", " ")}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <p className="text-xs text-center text-slate-400 italic px-8">
                                                By submitting, you are confirming your {formData.intention !== "pledge" ? "attendance and commitment" : "faith promise"} to our vision.
                                                {formData.intention !== "pledge" && " Our hospitality team will contact you shortly with formal details and invitation materials."}
                                            </p>
                                        </div>
                                    )}

                                    {/* Error Messages (moved inside the normal form view) */}
                                    <AnimatePresence>
                                        {errors.length > 0 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="mt-6 p-4 bg-red-50 border border-red-100 rounded-2xl"
                                            >
                                                {errors.map((err, i) => (
                                                    <p key={i} className="text-xs text-red-600 font-bold flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                                                        {err}
                                                    </p>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Navigation Footer */}
                                    <div className="mt-auto pt-8 border-t border-brand-gray/10 flex items-center justify-between">
                                        <button
                                            onClick={prevStep}
                                            className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all ${step === 1 ? "opacity-0 pointer-events-none" : "hover:bg-brand-gray/10 text-slate-500"}`}
                                        >
                                            <ChevronLeft size={18} /> Previous
                                        </button>

                                        <div className="flex items-center gap-1.5 lg:hidden">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${step === i ? "w-6 bg-brand-gold" : "w-1.5 bg-brand-gray/30"}`} />
                                            ))}
                                        </div>

                                        <button
                                            onClick={step === 4 ? handleSubmit : nextStep}
                                            disabled={isSubmitting}
                                            className={`group flex items-center gap-3 bg-brand-green text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-brand-green/20 ${isSubmitting ? "opacity-70 cursor-wait" : "hover:bg-brand-green/90 hover:translate-x-1 active:scale-95"}`}
                                        >
                                            {isSubmitting ? "Processing..." : step === 4 ? "Submit Presence" : "Continue"}
                                            {!isSubmitting && step < 4 && <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />}
                                        </button>
                                    </div>

                                    {submitError && (
                                        <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-2xl text-center">
                                            <p className="text-xs text-red-600 font-bold">{submitError}</p>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
