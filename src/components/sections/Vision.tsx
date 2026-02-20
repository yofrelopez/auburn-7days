"use client";

import { Building2, Heart, MapPin } from "lucide-react";

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
                <div className="grid md:grid-cols-2 gap-12 mb-24 max-w-5xl mx-auto">
                    {/* For the City */}
                    <div className="bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <div className="h-64 overflow-hidden relative">
                            {/* Image: Diverse group of people laughing/talking outdoors */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
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

                {/* Visual Strategy / Map Placeholder */}
                <div className="max-w-6xl mx-auto bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                    <div className="grid md:grid-cols-2">
                        <div className="p-10 md:p-16 flex flex-col justify-center bg-primary text-white">
                            <h3 className="text-3xl font-serif font-bold mb-6">Where Vision Becomes Reality</h3>
                            <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
                                We have secured a new parcel of land just one block away. This strategic move aligns perfectly with the city's growth while keeping us in the heart of the community we love.
                            </p>
                            <div className="flex items-center gap-3 text-secondary font-semibold">
                                <MapPin className="w-5 h-5" />
                                <span>Just 1 Block Away</span>
                            </div>
                        </div>
                        <div className="relative h-80 md:h-auto bg-slate-300 flex items-center justify-center group overflow-hidden">
                            {/* Placeholder for Map Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-multiply"></div>
                            <div className="relative z-10 text-center p-6">
                                <span className="inline-block px-6 py-3 bg-white/90 backdrop-blur text-primary font-bold rounded-lg shadow-xl">
                                    Map Visualization Coming Soon
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
