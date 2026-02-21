"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Correct import if ArrowRight is needed

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-light">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {/* Custom background image provided by user */}
                <div
                    className="absolute inset-0 bg-[url('/backgrounds/hero-bg.png')] bg-cover bg-center opacity-10 grayscale mix-blend-multiply"
                    aria-hidden="true"
                ></div>
                {/* Subtle Gradient Overlay for depth and readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gray/10 to-brand-light"></div>
            </div>

            {/* Content Container */}
            <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center justify-center h-full">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Tagline / Label - "VISION & HOPE FUNDRAISING BANQUET" (Small caps) */}
                    <span className="inline-block py-2 px-6 rounded-full bg-white border border-brand-gold/20 text-brand-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-8 shadow-sm backdrop-blur-sm animate-fade-in-up">
                        Vision & Hope Fundraising Banquet
                    </span>

                    {/* Headline (H1) - "Building a Legacy for Generations to Come" */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight text-slate-900">
                        Building a Legacy for <br className="hidden md:block" />
                        <span className="text-brand-green italic bg-clip-text">Generations to Come</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl md:leading-relaxed text-slate-600 max-w-2xl mx-auto mb-12 font-medium opacity-90">
                        Join us for an evening of music, vision, and purpose at the historic <span className="text-brand-green font-bold">Château Élan</span> as we lay the foundation for the future of Auburn, Georgia.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
                        <Link
                            href="#rsvp"
                            className="w-full sm:w-auto px-10 py-4 bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-brand-gold/20 flex items-center justify-center gap-2"
                        >
                            Confirm Attendance
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#donate"
                            className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-brand-gray/5 border-2 border-brand-green text-brand-green rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                        >
                            Invest in the Legacy
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-40 hover:opacity-80 transition-opacity">
                <Link href="#vision" aria-label="Scroll down to learn more">
                    <div className="w-6 h-10 border-2 border-brand-green/30 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-brand-green/60 rounded-full"></div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
