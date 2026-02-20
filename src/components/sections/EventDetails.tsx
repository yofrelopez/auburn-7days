import Link from 'next/link';

import Image from 'next/image';
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function EventDetails() {
    return (
        <section id="event-details" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase mb-4 inline-block">The Event</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                        An Evening of Vision & Hope
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Join us for a meaningful evening of fellowship, music, and purpose as we unveil the next chapter of what God is building in our community.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Details Column */}
                    <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-border">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-8 border-b border-border pb-4">
                            Fundraising Banquet Details
                        </h3>

                        <div className="space-y-8">
                            {/* Date & Time */}
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-1">Thursday, April 30th, 2026</h4>
                                    <p className="text-muted-foreground">Reception begins at 6:00 PM</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-1">Château Élan Winery & Resort</h4>
                                    <p className="text-muted-foreground">100 Rue Charlemagne Dr, Braselton, GA 30517</p>
                                    <a href="https://goo.gl/maps/placeholder" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80 text-sm font-semibold mt-2 inline-flex items-center">
                                        View Map & Directions
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Note */}
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-muted-foreground italic text-sm">
                                        To maintain the atmosphere of the evening, this event is reserved for adults only.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a href="#rsvp" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center">
                                Confirm Your Attendance
                            </a>
                        </div>
                    </div>

                    {/* Map/Image Column */}
                    <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-sm relative border border-slate-200 bg-slate-50">
                        <ImagePlaceholder text="Interactive Map or Venue Photo" className="w-full h-full absolute inset-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
