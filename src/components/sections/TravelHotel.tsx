import Image from 'next/image';
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function TravelHotel() {
    return (
        <section id="travel-hotel" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">

                {/* Accommodations */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase mb-4 inline-block">The Château Experience</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Accommodations & Stay
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            For our guests traveling from out of town, we have secured a special rate at the resort, allowing you to enjoy a time of rest and reflection during your visit.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-border flex flex-col md:flex-row">
                        <div className="md:w-1/2 min-h-[300px] relative bg-slate-50 border-r border-slate-100">
                            <ImagePlaceholder text="Château Élan Resort View" className="w-full h-full absolute inset-0 border-none rounded-none" />
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Château Élan Winery & Resort</h3>
                            <div className="inline-block bg-primary/5 rounded-lg px-4 py-2 mb-6 border border-primary/10">
                                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Guest Rate</span>
                                <div className="text-3xl font-bold text-secondary">$229 <span className="text-lg font-medium text-muted-foreground">/ Night</span></div>
                            </div>
                            <p className="text-muted-foreground italic mb-8">
                                (Includes all taxes, resort fees, and self-parking)
                            </p>
                            <p className="text-primary/80 mb-8">
                                Whether you are local or visiting from afar, we invite you to enjoy the beauty of God’s creation on these grounds.
                            </p>
                            <a href="https://www.chateauelan.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors">
                                Book Your Room
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Explore the Region */}
                <div>
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase mb-4 inline-block">Explore the Region</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Enjoy Your Time in Georgia
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            We warmly invite our guests to extend their stay and explore the beauty of our region. Experience the charm of a Georgia spring while partnering with a mission that will last for generations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Helen */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-all">
                            <div className="h-48 bg-slate-50 relative border-b border-slate-100">
                                <ImagePlaceholder text="Helen, GA" className="w-full h-full absolute inset-0 border-none rounded-none" />
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-primary mb-2">Alpine Charm</h4>
                                <p className="text-muted-foreground">
                                    Visit <strong>Helen, GA</strong>, a Bavarian-style village nestled in the Blue Ridge Mountains.
                                </p>
                            </div>
                        </div>

                        {/* Nature */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-all">
                            <div className="h-48 bg-slate-50 relative border-b border-slate-100">
                                <ImagePlaceholder text="Nature / Falls" className="w-full h-full absolute inset-0 border-none rounded-none" />
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-primary mb-2">Natural Wonders</h4>
                                <p className="text-muted-foreground">
                                    Explore <strong>Amicalola Falls</strong> or the breathtaking views at <strong>Tallulah Gorge</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Historic */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-all">
                            <div className="h-48 bg-slate-50 relative border-b border-slate-100">
                                <ImagePlaceholder text="Stone Mountain Park" className="w-full h-full absolute inset-0 border-none rounded-none" />
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-primary mb-2">Historic & Scenic</h4>
                                <p className="text-muted-foreground">
                                    Tour the historic town of <strong>Dahlonega</strong> or visit <strong>Stone Mountain</strong>, one of Georgia’s most iconic destinations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
