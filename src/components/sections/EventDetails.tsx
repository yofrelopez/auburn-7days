import Link from 'next/link';

import Image from 'next/image';
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function EventDetails() {
    return (
        <section id="event-details" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

                {/* Venue Hero Image */}
                <div className="relative w-full h-[350px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-16 md:mb-24 shadow-2xl border-4 border-white/50 relative z-20">
                    <Image
                        src="/images/vistas.jpeg"
                        alt="Château Élan Exterior"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-1000"
                        priority
                    />
                    {/* Subtle gradient overlay to make it look premium */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/30 to-transparent mix-blend-multiply"></div>
                </div>

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-brand-gold font-bold tracking-[0.2em] uppercase mb-4 inline-block text-sm">The Event</span>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-green mb-8">
                        An Evening of Vision & Hope
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium opacity-90">
                        Join us for a meaningful evening of fellowship, music, and purpose as we unveil the next chapter of what God is building in our community.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Details Column */}
                    <div className="bg-brand-light p-8 md:p-14 rounded-[2.5rem] border border-brand-gray/30 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>

                        <h3 className="text-3xl font-serif font-bold text-brand-green mb-10 border-b border-brand-gray/20 pb-6">
                            Fundraising Banquet Details
                        </h3>

                        <div className="space-y-10">
                            {/* Date & Time */}
                            <div className="flex items-start group">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-brand-gray/10 flex items-center justify-center text-brand-gold shrink-0 mr-6 transition-transform group-hover:scale-110">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-brand-green mb-1">Friday, May 8th, 2026</h4>
                                    <p className="text-slate-600">Reception begins at 5:00 PM</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start group">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-brand-gray/10 flex items-center justify-center text-brand-gold shrink-0 mr-6 transition-transform group-hover:scale-110">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-brand-green mb-1">Château Élan Winery & Resort</h4>
                                    <p className="text-slate-600">100 Rue Charlemagne Dr, Braselton, GA 30517</p>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Chateau+Elan+Winery+and+Resort+Braselton+GA" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-gold/80 text-sm font-bold mt-3 inline-flex items-center transition-colors">
                                        View Map & Directions
                                        <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Dress Code */}
                            <div className="flex items-start group">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-brand-gray/10 flex items-center justify-center text-brand-gold shrink-0 mr-6 transition-transform group-hover:scale-110">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-brand-green mb-1">Dress Code: <span className="font-normal text-slate-700">Elegant Cocktail Attire</span></h4>
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                        <span className="font-bold text-brand-gold">*Suggested Color Palette:</span> Ivory • Champagne • Beige • Soft Gray • White
                                        <br />
                                        <span className="italic text-slate-500">Black accents welcome.</span>
                                    </p>
                                </div>
                            </div>

                            {/* Childcare */}
                            <div className="flex items-start group">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-brand-gray/10 flex items-center justify-center text-brand-gold shrink-0 mr-6 transition-transform group-hover:scale-110">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        Complimentary childcare will be provided during the event.
                                    </p>
                                    <p className="text-brand-gold font-bold text-sm mt-1">
                                        Space is limited; advance registration is required to reserve a spot.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link href="#rsvp" className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white font-bold py-5 px-8 rounded-full shadow-xl shadow-brand-gold/20 transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02]">
                                Confirm Your Attendance
                            </Link>
                        </div>
                    </div>

                    {/* Venue Images Column */}
                    <div className="relative group flex flex-col gap-6 md:gap-8">
                        <div className="absolute -inset-4 bg-brand-gold/5 rounded-[3rem] transform rotate-2 group-hover:rotate-1 transition-transform duration-700 pointer-events-none"></div>

                        {/* Top Image */}
                        <div className="relative h-[300px] md:h-[400px] lg:h-[320px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/images/01.jpeg"
                                alt="Event Venue Detail 1"
                                fill
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                priority
                            />
                        </div>

                        {/* Bottom Image */}
                        <div className="relative h-[300px] md:h-[400px] lg:h-[320px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/images/02.jpeg"
                                alt="Event Venue Detail 2"
                                fill
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
