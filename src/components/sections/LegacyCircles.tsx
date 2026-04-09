"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus, Info } from "lucide-react";

export default function LegacyCircles() {
    const [expandedTier, setExpandedTier] = useState<number | null>(null);

    const tiers = [
        {
            title: "Legacy Founder",
            amount: "$100,000+",
            commitment: "One-time gift or up to 24-month pledge",
            description: "As a Legacy Founder, your extraordinary generosity serves as the bedrock of the Vision & Hope project.",
            impact: "Provides essential capital for foundational structural development and site preparation, ensuring the project's long-term viability from the ground up.",
            recognition: "Prominent and permanent recognition within the facility's most significant areas, including dedicated spaces named in honor of your legacy.",
            benefits: "Premier recognition during the Dinner Gala, exclusive VIP Experience, and priority naming opportunities for key areas of the community center.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            title: "Cornerstone Legacy Partner",
            amount: "$50,000+",
            description: "Help lay the foundation that will serve families and individuals for generations to come.",
            impact: "Supports critical building infrastructure and core structural elements required to bring the community center to life.",
            recognition: "Distinguished recognition on the main Legacy Wall and within the main entry hall of our future center.",
            benefits: "Special recognition during the event program, invitations to exclusive milestone briefings, and name featured on a primary architectural element.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Visionary Pillar",
            amount: "$25,000+",
            featured: true,
            description: "Your support provides the strength and stability required to uphold our shared mission.",
            impact: "Funds essential interior spaces and community-focused areas that will host programs for youth, seniors, and families.",
            recognition: "Formal recognition on the Legacy Wall and a dedicated plaque within one of the primary community mission rooms.",
            benefits: "VIP seating at the Dinner Gala and recognition as a key supporter of the facility's mission-driven spaces.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Heritage Builder",
            amount: "$10,000+",
            description: "Build a legacy that will endure and bless the Auburn community for years to come.",
            impact: "Contributes to specialized equipment and resources needed for our outreach and educational programs.",
            recognition: "Official recognition on the Legacy Wall and certificate of appreciation as a Heritage Builder.",
            benefits: "Invitation to a private pre-construction site walkthrough and recognition on the donors' roll.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            title: "Double Legacy Brick",
            amount: "$5,000",
            description: "Pathway of Faith Partner. Leave a permanent mark on the road to our future.",
            details: "Recognition with TWO engraved bricks or stones placed in the permanent 'Pathway of Faith' at the new facility.",
            impact: "Funds the landscaping and outdoor welcome areas that will serve as the first point of contact for our neighbors.",
            benefits: "Digital recognition on our website and social media throughout the campaign.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            )
        },
        {
            title: "Single Legacy Brick",
            amount: "$2,500",
            description: "Leave a Step of Faith. Every stone contributes to the path we walk together.",
            details: "Recognition with ONE engraved brick or stone placed in the permanent 'Pathway of Faith' at the new facility.",
            impact: "Contributes to the beautification of our community spaces and entryways.",
            benefits: "Name listed in the 2026 Vision & Hope campaign commemorative program.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
                </svg>
            )
        },
        {
            title: "Community Partner",
            amount: "$1,000+",
            description: "Be part of something greater. Your partnership makes our mission possible.",
            impact: "Supports the operational launch and initial community programs of the new center.",
            recognition: "Recognition as a Community Partner in our digital campaign roll.",
            benefits: "The knowledge that you are helping build a home for hope in your neighborhood.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Dinner Gala Seat",
            amount: "$500",
            subtitle: "Suggested donation per guest",
            description: "Vision & Hope Dinner Gala Admission. Experience an evening of inspiration and purpose.",
            impact: "While a suggested contribution of $500 per guest helps move the vision forward, we welcome all who desire to be part of this special evening.",
            benefits: "Full admission to the Dinner Gala, including fine dining, live music, and the unveiling of the vision.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        }
    ];

    const toggleTier = (index: number) => {
        setExpandedTier(expandedTier === index ? null : index);
    };

    return (
        <section id="legacy-circles" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full -mr-48 -mt-48 pointer-events-none blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full -ml-48 -mb-48 pointer-events-none blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto mb-20 text-center animate-fade-in-up">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 inline-block text-sm">Commitment Levels</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-primary">
                        Legacy Circles
                    </h2>
                    <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed border-l-2 border-secondary/30 pl-6 italic">
                        \"God loves a cheerful giver.\"
                        <span className="text-xs uppercase tracking-widest opacity-60 mt-3 block not-italic">— 2 Corinthians 9:7</span>
                    </p>

                    <div className="mt-12 text-lg md:text-xl text-primary font-medium leading-relaxed max-w-3xl mx-auto px-8 py-10 rounded-[2.5rem] bg-white shadow-xl shadow-brand-green/5 border border-brand-gray/20">
                        <span className="block text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4">The Mission</span>
                        Our <span className="text-brand-green font-bold">Vision & Hope Dinner Gala</span> aims to raise <span className="font-bold text-secondary text-2xl px-1">$400,000</span> to break ground for our future Church & Community Center in Auburn.
                    </div>
                </div>

                {/* Interactive Tiers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 items-start">
                    {tiers.map((tier, index) => {
                        const isExpanded = expandedTier === index;
                        return (
                            <motion.div
                                key={index}
                                layout
                                className={`
                                    relative flex flex-col rounded-[2rem] transition-all duration-500
                                    bg-white overflow-hidden
                                    ${tier.featured
                                        ? 'shadow-2xl ring-2 ring-secondary/20 z-10'
                                        : 'shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300 transition-all'
                                    }
                                `}
                            >
                                {/* Header / Card Top */}
                                <div 
                                    className="p-8 cursor-pointer group"
                                    onClick={() => toggleTier(index)}
                                >
                                    <div className="flex items-start justify-between mb-8">
                                        <div className={`
                                            w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300
                                            ${tier.featured ? 'bg-secondary/10 text-secondary' : 'bg-slate-50 text-brand-green group-hover:bg-brand-green group-hover:text-white'}
                                        `}>
                                            {tier.icon}
                                        </div>
                                        <div className={`
                                            w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300
                                            ${isExpanded ? 'bg-secondary border-secondary text-white rotate-180' : 'bg-white text-slate-400 group-hover:border-secondary group-hover:text-secondary'}
                                        `}>
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                                        {tier.title}
                                    </h3>

                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-3xl font-bold text-secondary">{tier.amount}</span>
                                        {tier.subtitle && <span className="text-xs text-muted-foreground font-semibold uppercase">{tier.subtitle}</span>}
                                    </div>

                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        {tier.description}
                                    </p>
                                    
                                    {!isExpanded && (
                                        <button className="mt-8 text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Learn More <Info className="w-3.5 h-3.5" />
                                        </button>
                                    )}
                                </div>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="border-t border-slate-100"
                                        >
                                            <div className="p-8 space-y-8 bg-slate-50/50">
                                                {tier.commitment && (
                                                    <div>
                                                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">Commitment</span>
                                                        <p className="text-sm font-semibold text-primary">{tier.commitment}</p>
                                                    </div>
                                                )}

                                                {tier.details && (
                                                     <div>
                                                     <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">Details</span>
                                                     <p className="text-sm text-slate-700 leading-relaxed font-medium">{tier.details}</p>
                                                 </div>
                                                )}

                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">Impact</span>
                                                    <p className="text-sm text-slate-700 leading-relaxed">{tier.impact}</p>
                                                </div>

                                                {tier.recognition && (
                                                    <div>
                                                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">Recognition</span>
                                                        <p className="text-sm text-slate-700 leading-relaxed">{tier.recognition}</p>
                                                    </div>
                                                )}

                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">Partner Benefits</span>
                                                    <p className="text-sm text-slate-700 leading-relaxed">{tier.benefits}</p>
                                                </div>

                                                {/* Flexible Giving Note */}
                                                <div className="pt-4 mt-8 border-t border-slate-200">
                                                    <p className="text-[11px] italic text-muted-foreground text-center">
                                                        Contributions may be made in full or through flexible payment options (multiple payments available).
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action Container */}
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <div className="p-1 w-24 h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent mx-auto"></div>
                    
                    <div>
                        <a
                            href="#rsvp"
                            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-300 bg-brand-green rounded-full shadow-2xl shadow-brand-green/20 hover:bg-brand-green/90 hover:-translate-y-1 hover:shadow-brand-green/30"
                        >
                            Make Your Legacy Commitment
                        </a>
                        <p className="text-muted-foreground/60 text-[10px] sm:text-xs mt-8 font-bold uppercase tracking-[0.3em]">
                            Founding partner of the Vision & Hope Center
                        </p>
                    </div>

                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-medium opacity-80 decoration-secondary/30 decoration-dotted underline underline-offset-8">
                        Auburn Seventh-day Adventist Church is a registered 501(c)(3) nonprofit organization. 
                        Your generous contributions are tax-deductible as permitted by law.
                    </p>
                </div>

            </div>
        </section>
    );
}
