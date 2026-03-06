"use client";

import Image from "next/image";
import { Building2, Heart, MapPin, Sparkles, ArrowRight } from "lucide-react";

export default function Vision() {
    return (
        <section id="vision" className="py-24 bg-white text-primary">
            <div className="container mx-auto px-4 md:px-6">

                {/* Our Story / Context */}
                <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in-up">
                    <span className="text-secondary font-bold tracking-widest uppercase mb-4 inline-block">The Vision</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">
                        Where Vision Becomes Reality
                    </h2>
                    <p className="text-lg md:text-xl text-primary/80 leading-relaxed mb-6">
                        For over 33 years, our church has faithfully served the city of Auburn from the same corner.
                        Today, that very location is becoming part of a new downtown development designed to bring
                        vibrant community life to the heart of the city.
                    </p>
                    <p className="text-lg md:text-xl text-primary/80 leading-relaxed font-medium">
                        As this transformation moves forward, we are making a prayerful and strategic transition.
                        We have secured a new parcel of land just one block away — a place where we will build a
                        new church and continue serving the community for generations to come.
                    </p>
                </div>

                {/* Why This Matters - Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
                    {/* For the City */}
                    <div className="bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <div className="h-64 overflow-hidden relative">
                            {/* Image: Diverse group of people laughing/talking outdoors */}
                            <div className="absolute inset-0 bg-[url('/images/ciudad.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            <div className="absolute bottom-[-20px] left-8 w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center shadow-lg z-10">
                                <Building2 className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="pt-10 p-8">
                            <h3 className="text-2xl font-serif font-bold mb-4 text-primary">For the City</h3>
                            <p className="text-gray-600 leading-relaxed">
                                This moment represents a unique opportunity to add to the city, not take from it.
                                Our move allows the redevelopment of our current corner to advance Auburn’s vision for growth.
                            </p>
                        </div>
                    </div>

                    {/* For the Ministry */}
                    <div className="bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <div className="h-64 overflow-hidden relative">
                            {/* Image: Diverse group sitting together, smiling, community feel */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            <div className="absolute bottom-[-20px] left-8 w-16 h-16 bg-secondary/20 text-secondary rounded-full flex items-center justify-center shadow-lg z-10 backdrop-blur-sm bg-white/10 border border-white/20">
                                <Heart className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="pt-10 p-8">
                            <h3 className="text-2xl font-serif font-bold mb-4 text-primary">For the Ministry</h3>
                            <p className="text-gray-600 leading-relaxed">
                                A new facility will expand our outreach, community programs, and service impact in ways
                                our current building no longer allows.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Map Context Section */}
                <div className="max-w-7xl mx-auto bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 mb-24">
                    <div className="grid lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="p-10 md:p-16 flex flex-col justify-center">
                            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-primary leading-tight">
                                Just One Block Away
                            </h3>
                            <p className="text-lg text-primary/80 leading-relaxed mb-8">
                                We are not leaving our community; we are planting deeper roots. The new location is strategically positioned right next to the Downtown Expansion Area, ensuring we remain in the heart of Auburn's growth.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Downtown Expansion Area</h4>
                                        <p className="text-sm text-gray-600">Our current location is part of the city's visionary redevelopment plan.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-1">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Future Church & Community Center</h4>
                                        <p className="text-sm text-gray-600">A dedicated, expanded campus to serve our growing congregation and city.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[400px] lg:h-full min-h-[500px] w-full bg-slate-200">
                            <Image
                                src="/images/map/map.jpg"
                                alt="Map showing the future church location relative to the downtown expansion area"
                                fill
                                className="object-cover object-center"
                                quality={90}
                            />
                            {/* Decorative overlay to make the image blend better with the clean design */}
                            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                {/* Visual Strategy / 3D Renders */}
                <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800">
                    <div className="grid lg:grid-cols-5">

                        {/* Text Content - Spans 2 cols */}
                        <div className="lg:col-span-2 p-10 md:p-16 flex flex-col justify-center bg-primary text-white relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Building2 className="w-64 h-64 text-white transform translate-x-1/4 -translate-y-1/4" />
                            </div>

                            <div className="relative z-10">
                                <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/20 text-secondary font-bold tracking-wider uppercase mb-6 border border-secondary/30 text-xs">
                                    The Future Design
                                </span>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">A Glimpse Into <br />Tomorrow</h3>
                                <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed font-light">
                                    We have secured a new parcel of land just one block away. Here is a faithful architectural rendering of what our new spiritual home will look like—a beacon of hope designed to serve our community for the next century.
                                </p>
                                <div className="flex items-center gap-4 text-white/90 font-medium bg-white/5 inline-flex p-4 rounded-2xl border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <span>Architectural Renderings</span>
                                </div>
                            </div>
                        </div>

                        {/* Gallery - Auto-Scrolling Carousel over the 8 Renders */}
                        <div className="lg:col-span-3 bg-slate-100 relative h-[400px] lg:h-auto overflow-hidden group/carousel">
                            <div className="absolute inset-0 p-2 flex gap-2 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                                {[
                                    { src: "/images/galeria/01.png", alt: "Aerial view of worship center" },
                                    { src: "/images/galeria/02.png", alt: "Aerial view of multi-purpose area" },
                                    { src: "/images/galeria/03.png", alt: "Side view of worship center" },
                                    { src: "/images/galeria/04.png", alt: "View of entrance to soccer field" },
                                    { src: "/images/galeria/05.png", alt: "Interior sanctuary view" },
                                    { src: "/images/galeria/06.png", alt: "Fellowship hall view" },
                                    { src: "/images/galeria/07.png", alt: "Lobby and reception area" },
                                    { src: "/images/galeria/08.png", alt: "Elevated architectural render" },
                                ].map((img, index) => (
                                    <div key={index} className="relative min-w-[85%] sm:min-w-[45%] h-full rounded-2xl overflow-hidden snap-center shrink-0 group">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 50vw"
                                            quality={90}
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-white font-medium text-sm tracking-wide">{img.alt}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative hint for scrolling */}
                            <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white/90 text-xs font-semibold tracking-wider flex items-center gap-2 pointer-events-none opacity-80 z-20">
                                <span>Swipe to view all</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
