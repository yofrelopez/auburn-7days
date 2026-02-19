"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Correct import if ArrowRight is needed

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-sda-blue-900">
                {/* Custom background image provided by user */}
                <div
                    className="absolute inset-0 bg-[url('/backgrounds/hero-bg.png')] bg-cover bg-center opacity-40 mix-blend-overlay"
                    aria-hidden="true"
                ></div>
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-sda-blue-950/90 via-sda-blue-900/60 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="container relative z-10 px-4 md:px-6 text-center text-white max-w-5xl mx-auto flex flex-col items-center justify-center h-full">

                {/* Tagline / Label - "VISION & HOPE FUNDRAISING BANQUET" (Small caps) */}
                <span className="inline-block py-1.5 px-4 rounded-full bg-sda-gold/20 border border-sda-gold/50 text-sda-gold-200 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm animate-fade-in-up">
                    Vision & Hope Fundraising Banquet
                </span>

                {/* Headline (H1) - "Building a Legacy for Generations to Come" */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-xl">
                    Building a Legacy for <br className="hidden md:block" />
                    <span className="text-sda-gold italic">Generations to Come</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl md:leading-relaxed text-blue-100 max-w-3xl mx-auto mb-10 font-light opacity-90 drop-shadow-md">
                    Join us for an elegant evening of music, inspiration, and purpose at the historic <strong>Château Élan</strong> as we lay the foundation for the future of Auburn, Georgia.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
                    <Link
                        href="#rsvp"
                        className="w-full sm:w-auto px-8 py-4 bg-sda-gold hover:bg-sda-gold-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-sda-gold/20 flex items-center justify-center gap-2"
                    >
                        Confirm Attendance
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="#donate"
                        className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full font-bold text-lg backdrop-blur-md transition-all flex items-center justify-center gap-2 hover:border-white/50"
                    >
                        Invest in the Legacy
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <Link href="#vision" aria-label="Scroll down to learn more">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-white/60 rounded-full"></div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
