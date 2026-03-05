import Image from 'next/image';
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SiteVisitModal from "./SiteVisitModal";

export default function SiteVisits() {
    return (
        <section id="site-visits" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-primary/5">
                {/* Professional blank space / subtle pattern */}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Content Left */}
                    <div className="text-left w-full max-w-xl">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 text-secondary font-bold tracking-wider uppercase mb-6 border border-secondary/20">
                            Site Visits
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                            Walk the Land <br />With Us
                        </h2>

                        <p className="text-xl md:text-2xl font-light opacity-90 mb-6 text-secondary">
                            Future Location Tours
                        </p>

                        <p className="text-lg leading-relaxed mb-10 text-primary-foreground/80 font-light">
                            For those who wish to see the vision firsthand, we are offering guided visits to the future site of the new Church & Community Center. These visits are an opportunity to walk the grounds, pray over the land, and understand the scope of the project.
                        </p>

                        <div className="inline-block bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-1">Schedule Your Tour</h4>
                                    <p className="text-sm font-light opacity-80">
                                        * Tours are scheduled by request and coordinated in advance.
                                    </p>
                                </div>
                                <div className="shrink-0 w-full sm:w-auto">
                                    <SiteVisitModal />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Right - Staggered Masonry Layout */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6 mt-12 lg:mt-0">
                        {/* Column 1 */}
                        <div className="space-y-4 md:space-y-6">
                            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl group">
                                <Image
                                    src="/images/terreno/01.jpeg"
                                    alt="Future church land - Woods"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-2xl group">
                                <Image
                                    src="/images/terreno/03.jpeg"
                                    alt="Future church land - Aerial view"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>

                        {/* Column 2 - Staggered down */}
                        <div className="space-y-4 md:space-y-6 transform translate-y-8 md:translate-y-16">
                            <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-2xl group">
                                <Image
                                    src="/images/terreno/02.jpeg"
                                    alt="Future church land - Nature"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl group">
                                <Image
                                    src="/images/terreno/04.jpeg"
                                    alt="Future church land - Trees"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
