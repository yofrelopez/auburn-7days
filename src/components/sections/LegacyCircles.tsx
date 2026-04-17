"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus, Info, ShieldCheck } from "lucide-react";
import LegacyCommitmentModal from "./LegacyCommitmentModal";

export default function LegacyCircles() {
    const [expandedTier, setExpandedTier] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalInitialTier, setModalInitialTier] = useState<string | undefined>();
    const [modalInitialAmount, setModalInitialAmount] = useState<number | undefined>();

    const openModal = (title?: string, amount?: number) => {
        setModalInitialTier(title);
        setModalInitialAmount(amount);
        setIsModalOpen(true);
    };

    type LegacyTier = {
        title: string;
        amount: string;
        subtitle?: string;
        featured?: boolean;
        description: string;
        impact?: string | string[];
        impactLabel?: string;
        details?: string | string[];
        detailsLabel?: string;
        recognition?: string | string[];
        benefits?: string | string[];
        benefitsLabel?: string;
        commitment?: string;
        cta?: string;
        footer?: string;
        icon: React.ReactNode;
    };

    const tiers: LegacyTier[] = [
        {
            title: "Legacy Founder",
            amount: "$100,000+",
            description: "Define a Legacy That Will Endure for Generations. As a Legacy Founder, your extraordinary generosity helps shape not just a building, but a lasting impact on the community. Your contribution represents a transformational investment in faith, families, and future generations.",
            impact: "Major contribution toward the development of the Community & Worship Center. Helps accelerate full Phase 1 completion. Supports long-term programs for children, families, and outreach.",
            recognition: "Legacy Naming Opportunity: Opportunity for named dedication of a significant space within the facility. May include areas such as: Family or community rooms; Children’s learning or activity spaces; Meeting or multipurpose areas. Permanent recognition aligned with your legacy or in honor of a loved one.",
            benefits: "Distinguished recognition as a Legacy Founder. Prominent acknowledgment at the Gala and across key materials. VIP experience and reserved seating.",
            commitment: "✨ By Invitation. Legacy naming opportunities are thoughtfully curated and aligned with the vision of the project.",
            cta: "Connect With Us About Legacy Opportunities",
            footer: "A legacy gift today becomes a lasting impact for generations to come.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            title: "Cornerstone Legacy Partner",
            amount: "$50,000+",
            description: "Help Lay the Foundation That Will Serve Generations. As a Cornerstone Legacy Partner, your leadership gift plays a vital role in establishing the foundation of the future Community & Worship Center. Your contribution helps turn vision into reality at a pivotal moment.",
            impact: "Foundational support for Phase 1 construction. Direct contribution to key areas such as the Auditorium and core facilities. Helps secure and accelerate the $400,000 Break Ground milestone. Strengthens long-term community and family-focused programs.",
            recognition: "Legacy Recognition: Opportunity for prominent and permanent recognition within the facility. Consideration for dedicated areas or features aligned with your legacy. Recognized as a Cornerstone Legacy Partner.",
            benefits: "Premier recognition during the Gala program. Name featured on website and printed materials. Priority seating and VIP experience at the Gala.",
            commitment: "✨ By Invitation. Leadership-level recognition opportunities are thoughtfully curated and aligned with the overall vision of the project.",
            cta: "Become a Cornerstone Partner",
            footer: "Together, we are laying a foundation that will impact generations.",
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
            description: "Support What Will Stand for Generations. As a Visionary Pillar, your generous leadership helps raise the structure of a space designed to serve families, empower youth, and strengthen the community for years to come.",
            impact: "Supports major structural and program areas within the Community & Worship Center. Helps accelerate construction and expand community impact. Strengthens long-term initiatives for families, youth, and outreach.",
            recognition: "Legacy Recognition: Opportunity for recognition associated with select elements of the sanctuary or main gathering spaces, such as: Windows or architectural features; Interior design elements within shared spaces. Enhanced and visible placement within the Pathway of Faith, reflecting your leadership contribution.",
            benefits: "Recognition in the Gala program booklet. Name featured on website and donor listings. Preferred seating and enhanced Gala experience.",
            commitment: "✨ Expanded Legacy Opportunity. This level allows for more prominent and meaningful recognition, thoughtfully integrated into significant areas of the space.",
            cta: "Become a Visionary Pillar",
            footer: "Your vision today helps shape a legacy for generations.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Heritage Builder",
            amount: "$10,000+",
            description: "Build a Legacy That Will Endure. As a Heritage Builder, your generous contribution helps transform vision into reality — laying the groundwork for a space where faith, families, and community will flourish for generations.",
            impact: "Supports the development of key areas within the Community & Worship Center. Helps advance construction and accelerate project timelines. Strengthens programs for children, youth, and families.",
            recognition: "Legacy Recognition: Name included in a dedicated donor recognition area within the facility. Enhanced placement within the Pathway of Faith. Opportunity for recognition associated with select elements of the campus, such as: Benches or seating areas; Outdoor or gathering spaces; Designated sections within community-use areas.",
            benefits: "Recognition in the Gala program booklet. Name featured on website and donor listings. Preferred seating at the Gala.",
            commitment: "✨ Growing Legacy Opportunity. Recognition at this level becomes more visible and thoughtfully integrated within the experience of the space.",
            cta: "Become a Heritage Builder",
            footer: "Your legacy today helps shape the future of our community.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            title: "Double Legacy Brick",
            amount: "$5,000",
            description: "Pathway of Faith Partner. Leave a Step of Faith That Will Last for Generations. Honor your faith, your family, or the memory of a loved one through a lasting tribute within the future Community & Worship Center.",
            impact: "Contributes directly to the development of the facility. Helps advance the $400,000 Break Ground milestone.",
            benefits: "Engraved brick or stone in the Pathway of Faith. Option to include: Family name; Personal message; In memory or in honor of a loved one. Recognition in donor listing.",
            commitment: "✨ Expanded Legacy Option. Those who choose a Double Legacy Brick may include: Additional engraved space; A second dedication (family member, loved one, etc.); Enhanced presence within the Pathway.",
            cta: "Reserve Your Legacy Brick",
            footer: "Your step of faith today becomes a path for future generations.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            )
        },
        {
            title: "Single Legacy Brick",
            amount: "$2,500",
            description: "Pathway of Faith Partner. Leave a Step of Faith That Will Last for Generations. Honor your faith, your family, or the memory of a loved one through a lasting tribute within the future Community & Worship Center.",
            impact: "Contributes directly to the development of the facility. Helps advance the $400,000 Break Ground milestone.",
            benefits: "Engraved brick or stone in the Pathway of Faith. Option to include: Family name; Personal message; In memory or in honor of a loved one. Recognition in donor listing.",
            cta: "Reserve Your Legacy Brick",
            footer: "Your step of faith today becomes a path for future generations.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
                </svg>
            )
        },
        {
            title: "Community Partner",
            amount: "$1,000+",
            description: "Be Part of Something Greater. Every gift matters. As a Community Partner, you join a growing community committed to building a future that will serve families, children, and generations to come.",
            impact: "Contributes toward the development of the Community & Worship Center. Helps advance the $400,000 Break Ground milestone. Supports programs that serve families, youth, and the broader community.",
            recognition: "Name included in the Community Partner donor listing. Recognition on the event website and printed materials. Acknowledgment during the Gala program.",
            benefits: "Recognition in the Gala program booklet. Legacy Contributor Certificate.",
            cta: "Become a Community Partner",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Support the Gala",
            amount: "$500",
            description: "Support a Vision That Will Last for Generations. Your contribution helps make the Vision & Hope Dinner Gala possible and directly impacts the building of the new Community & Worship Center, whether you join us in person or in spirit.",
            impact: [
                "The Vision & Hope Gala experience",
                "Community impact and future development",
                "A night of inspiration, music, and purpose",
                "The building of the new Community & prayer Center"
            ],
            impactLabel: "As a Sponsor, You Help Make Possible",
            details: [
                "Participation in the Vision & Hope Gala (in person or in support)",
                "An elegant dinner experience (for attending guests)",
                "Live musical presentation (special guest artist)",
                "Reserved seating (for attending guests)",
                "A thoughtfully curated Welcome Gift",
                "A powerful presentation of the vision for the future Community & Worship Center"
            ],
            detailsLabel: "Your Sponsorship Includes",
            benefits: [
                "A space dedicated to faith, family, and community",
                "Programs that impact youth and families",
                "The development of the new Community & Worship Center",
                "A lasting legacy for future generations"
            ],
            benefitsLabel: "Your Support Helps Provide",
            cta: "Support the Gala",
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
                                            <div className="p-8 space-y-6 bg-slate-50/50">

                                                {tier.details && (
                                                    <div>
                                                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">{tier.detailsLabel || "What's Included"}</span>
                                                        {Array.isArray(tier.details) ? (
                                                            <ul className="space-y-1.5">
                                                                {tier.details.map((item, i) => (
                                                                    <li key={i} className="text-sm text-slate-700 font-medium flex items-start gap-2">
                                                                        <span className="text-secondary mt-1 text-[8px]">●</span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-sm text-slate-700 leading-relaxed font-medium">{tier.details}</p>
                                                        )}
                                                    </div>
                                                )}

                                                {tier.impact && (
                                                    <div>
                                                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">{tier.impactLabel || "Impact"}</span>
                                                        {Array.isArray(tier.impact) ? (
                                                            <ul className="space-y-1.5">
                                                                {tier.impact.map((item, i) => (
                                                                    <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                                                                        <span className="text-secondary/60 mt-1 text-[8px]">●</span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-sm text-slate-700 leading-relaxed">{tier.impact}</p>
                                                        )}
                                                    </div>
                                                )}

                                                {tier.recognition && (
                                                    <div>
                                                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">Recognition</span>
                                                        {Array.isArray(tier.recognition) ? (
                                                            <ul className="space-y-1.5">
                                                                {tier.recognition.map((item, i) => (
                                                                    <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                                                                        <span className="text-secondary/60 mt-1 text-[8px]">●</span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-sm text-slate-700 leading-relaxed">{tier.recognition}</p>
                                                        )}
                                                    </div>
                                                )}

                                                {tier.benefits && (
                                                    <div>
                                                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">{tier.benefitsLabel || "Partner Benefits"}</span>
                                                        {Array.isArray(tier.benefits) ? (
                                                            <ul className="space-y-1.5">
                                                                {tier.benefits.map((item, i) => (
                                                                    <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                                                                        <span className="text-secondary/60 mt-1 text-[8px]">●</span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-sm text-slate-700 leading-relaxed">{tier.benefits}</p>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Special note: By Invitation / Expanded Legacy / Growing Legacy */}
                                                {tier.commitment && (
                                                    <div className="bg-secondary/5 border border-secondary/15 rounded-xl p-4">
                                                        <p className="text-sm text-slate-600 leading-relaxed italic">{tier.commitment}</p>
                                                    </div>
                                                )}

                                                {/* Per-tier CTA */}
                                                {tier.cta && (
                                                    <button
                                                        onClick={() => openModal(tier.title)}
                                                        className="block w-full text-center py-3 px-6 rounded-xl bg-brand-green text-white text-sm font-bold hover:bg-brand-green/90 transition-colors duration-200"
                                                    >
                                                        {tier.cta}
                                                    </button>
                                                )}

                                                {/* Per-tier footer tagline */}
                                                {tier.footer && (
                                                    <p className="text-[11px] text-center text-muted-foreground italic">{tier.footer}</p>
                                                )}

                                                {/* Flexible Giving Note */}
                                                <div className="pt-4 border-t border-slate-200">
                                                    <p className="text-[11px] italic text-muted-foreground text-center">
                                                        ✨ <strong>Flexible Giving</strong> — Contributions may be made in full or through flexible payment options (multiple payments available).
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
                        <button
                            onClick={() => openModal()}
                            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-300 bg-brand-green rounded-full shadow-2xl shadow-brand-green/20 hover:bg-brand-green/90 hover:-translate-y-1 hover:shadow-brand-green/30"
                        >
                            Make Your Legacy Commitment
                        </button>
                        <p className="text-muted-foreground/60 text-[10px] sm:text-xs mt-8 font-bold uppercase tracking-[0.3em]">
                            Founding partner of the Vision & Hope Center
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto bg-brand-green/5 border border-brand-green/10 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden group">
                        {/* Decorative glow */}
                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150 pointer-events-none"></div>
                        
                        <div className="flex flex-col items-center justify-center gap-3 relative z-10">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="text-brand-gold w-5 h-5" strokeWidth={2.5} />
                                <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs text-brand-green">100% Tax-Deductible Contribution</span>
                            </div>
                            <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed max-w-lg">
                                Auburn Seventh-day Adventist Church is a registered <strong>501(c)(3) nonprofit organization</strong>.<br className="hidden md:block" />
                                Your generous contributions are tax-deductible as permitted by law.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <LegacyCommitmentModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialTierTitle={modalInitialTier}
                initialAmount={modalInitialAmount}
            />
        </section>
    );
}
