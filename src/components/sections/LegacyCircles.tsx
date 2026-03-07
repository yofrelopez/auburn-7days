export default function LegacyCircles() {
    const tiers = [
        {
            title: "Cornerstone Legacy Partner",
            amount: "$50,000",
            description: "For those led to provide a primary foundation for the project.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            title: "Visionary Pillar",
            amount: "$25,000",
            description: "Strength and stability to uphold our mission.",
            featured: true,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Heritage Builder",
            amount: "$10,000",
            description: "Building the walls of our future community.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            title: "Faith Supporter",
            amount: "$5,000",
            description: "Faithful support that helps us move forward.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            title: "Community Partner",
            amount: "$1,000",
            description: "Partnering together to reach our city.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Entry Contribution",
            amount: "$500",
            subtitle: "/ per chair",
            description: "Every gift matters. Help us check off each seat.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        }
    ];

    return (
        <section id="legacy-circles" className="py-24 bg-slate-50 text-center">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <span className="text-secondary font-bold tracking-widest uppercase mb-4 inline-block text-sm border-b border-secondary pb-1">Support the Vision</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">
                        Legacy Circles
                    </h2>
                    <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                        <span className="font-serif italic text-xl text-primary/80">"God loves a cheerful giver."</span>
                        <br />
                        <span className="text-sm uppercase tracking-wide opacity-60 mt-2 block">— 2 Corinthians 9:7</span>
                    </p>

                    <div className="mt-10 text-lg md:text-xl text-primary font-medium leading-relaxed max-w-3xl mx-auto px-6 md:px-8 bg-secondary/5 border border-secondary/10 py-6 md:py-8 rounded-3xl shadow-sm">
                        <span className="block text-secondary font-bold uppercase tracking-widest text-sm mb-3">Our Goal</span>
                        This Vision & Hope Fundraiser Gala aims to raise <span className="font-bold text-secondary text-2xl px-1">$400,000</span> to help <span className="font-bold text-secondary">break ground</span> for the future Vision & Hope Church & Community Center in Auburn.
                    </div>
                </div>

                {/* Giving Levels Grid - Premium Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 text-left">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`
                                relative p-8 rounded-2xl transition-all duration-500 group
                                bg-white flex flex-col
                                ${tier.featured
                                    ? 'shadow-2xl ring-1 ring-secondary/20 scale-105 z-10'
                                    : 'shadow-lg hover:shadow-2xl hover:-translate-y-1'
                                }
                            `}
                        >
                            {/* Decorative Top Border */}
                            <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl transition-colors duration-300 ${tier.featured ? 'bg-secondary' : 'bg-primary/10 group-hover:bg-primary'}`}></div>

                            {tier.featured && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                    Most Impactful
                                </div>
                            )}

                            <div className="flex items-start justify-between mb-6">
                                <div className={`
                                    w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-inner
                                    ${tier.featured ? 'bg-secondary/10 text-secondary' : 'bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white'}
                                `}>
                                    {tier.icon}
                                </div>
                                {tier.featured && <div className="text-secondary opacity-20"><svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg></div>}
                            </div>

                            <h3 className="text-xl font-serif font-bold text-primary mb-2">
                                {tier.title}
                            </h3>

                            <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                                <span className="text-3xl font-bold text-primary">{tier.amount}</span>
                                {tier.subtitle && <span className="text-sm text-muted-foreground font-medium">{tier.subtitle}</span>}
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                {tier.description}
                            </p>

                            {/* Subtle CTA arrow */}
                            <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contribution Information */}
                <div className="max-w-3xl mx-auto mb-16 text-left space-y-8 bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
                    <div>
                        <h4 className="text-xl font-serif font-bold text-primary mb-3">Flexible Giving</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            You may make your donation in full or through convenient installments.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-serif font-bold text-primary mb-3">Contribution Information</h4>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                            <p>
                                Contributions may be made in full or fulfilled over time through installments.
                            </p>
                            <p>
                                Auburn Seventh-day Adventist Church is a registered 501(c)(3) nonprofit organization, and donations are tax-deductible to the extent permitted by law.
                            </p>
                            <p>
                                An official receipt will be provided for your records.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action & Note */}
                <div className="max-w-2xl mx-auto">
                    <a
                        href="#pledge"
                        className="inline-flex items-center justify-center px-10 py-5 text-base font-bold text-white transition-all duration-300 bg-primary rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1"
                    >
                        Make a Legacy Pledge
                    </a>
                    <p className="text-muted-foreground/60 text-sm mt-6 font-medium uppercase tracking-wide">
                        Join us in building the future
                    </p>
                </div>

            </div>
        </section>
    );
}
