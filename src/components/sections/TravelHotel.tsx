import Image from 'next/image';
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function TravelHotel() {
    return (
        <section id="travel-hotel" className="py-24 bg-brand-light/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

                {/* Accommodations */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold tracking-[0.2em] uppercase mb-4 inline-block text-sm">The Château Experience</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">
                            Accommodations & Stay
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            For our guests traveling from out of town, we have secured a special rate at the resort, allowing you to enjoy a time of rest and reflection during your visit.
                        </p>
                    </div>

                    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-brand-gray/20 flex flex-col lg:flex-row min-h-[500px]">
                        <div className="lg:w-1/2 relative bg-brand-light">
                            <Image
                                src="/images/resort.avif"
                                alt="Château Élan Resort View"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white">
                            <h3 className="text-3xl font-serif font-bold text-brand-green mb-6">Château Élan Winery & Resort</h3>
                            <div className="inline-flex flex-col bg-brand-light/50 rounded-2xl px-8 py-6 mb-8 border border-brand-gray/10 self-start">
                                <span className="text-xs font-bold text-brand-green/60 uppercase tracking-widest mb-1">Exclusive Guest Rate</span>
                                <div className="text-4xl font-bold text-brand-gold">$229 <span className="text-base font-medium text-slate-400">/ Night</span></div>
                            </div>
                            <p className="text-slate-500 italic mb-10 text-sm">
                                (Includes all taxes, resort fees, and self-parking)
                            </p>
                            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                                Whether you are local or visiting from afar, we invite you to enjoy the beauty of God’s creation on these grounds.
                            </p>
                            <a href="https://www.chateauelan.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-brand-green hover:text-brand-gold transition-colors text-lg group">
                                Book Your Room
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Explore the Region */}
                <div className="relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-gray/30 to-transparent mb-24"></div>

                    <div className="text-center pt-24 mb-16">
                        <span className="text-brand-gold font-bold tracking-[0.2em] uppercase mb-4 inline-block text-sm">Explore the Region</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">
                            Enjoy Your Time in Georgia
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            We warmly invite our guests to extend their stay and explore the beauty of our region. Experience the charm of a Georgia spring while partnering with a mission that will last for generations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Helen */}
                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-md border border-brand-gray/10 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src="/images/alpine.jpg"
                                    alt="Alpine Helen, GA"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-8">
                                <div className="text-brand-gold font-bold text-xs tracking-widest uppercase mb-3">Scenic Destination</div>
                                <h4 className="text-2xl font-serif font-bold text-brand-green mb-3">Alpine Charm</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Experience the magic of <strong>Helen, GA</strong>, a charming Bavarian-style village nestled in the heart of the Blue Ridge Mountains.
                                </p>
                            </div>
                        </div>

                        {/* Nature */}
                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-md border border-brand-gray/10 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src="/images/falls.jpg"
                                    alt="Amicalola Falls"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-8">
                                <div className="text-brand-gold font-bold text-xs tracking-widest uppercase mb-3">Natural Wonder</div>
                                <h4 className="text-2xl font-serif font-bold text-brand-green mb-3">Breathtaking Falls</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Witness the majesty of <strong>Amicalola Falls</strong>, the tallest cascading waterfall in Georgia, offering awe-inspiring views.
                                </p>
                            </div>
                        </div>

                        {/* Historic */}
                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-md border border-brand-gray/10 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src="/images/stone.jpg"
                                    alt="Stone Mountain Park"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-8">
                                <div className="text-brand-gold font-bold text-xs tracking-widest uppercase mb-3">Historic Landmark</div>
                                <h4 className="text-2xl font-serif font-bold text-brand-green mb-3">Stone Mountain</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Explore the iconic <strong>Stone Mountain Park</strong>, home to the world's largest granite outcropping and stunning panoramic views.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
