"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Correct import if ArrowRight is needed

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white">
            {/* Background Image: Evening Banquet */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-[url('/images/banquet/banquet.png')] bg-cover bg-center"
                    aria-hidden="true"
                ></div>
                {/* Luxury Dark Overlay: Darker at bottom for text contrast */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center justify-center h-full">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Tagline / Label */}
                    <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-black/40 border border-yellow-500/30 text-yellow-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-8 shadow-2xl backdrop-blur-md animate-fade-in-up">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
                        Vision & Hope Fundraising Banquet
                    </span>

                    {/* Headline (H1) */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight text-white drop-shadow-xl">
                        Building a Legacy for <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 italic">Generations to Come</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-2xl md:leading-relaxed text-yellow-50/90 max-w-3xl mx-auto mb-12 font-light drop-shadow-md">
                        Join us for an evening of music, vision, and purpose at the historic <span className="text-yellow-400 font-semibold">Château Élan</span> as we lay the foundation for the future of Auburn, Georgia.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
                        <Link
                            href="#vision"
                            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2"
                        >
                            Discover the Vision
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#pledge"
                            className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white backdrop-blur-sm rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 hover:border-white/50"
                        >
                            Donate &bull; Sponsor &bull; Participate
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity z-10">
                <Link href="#vision" aria-label="Scroll down to learn more">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
