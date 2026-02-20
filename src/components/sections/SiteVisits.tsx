import Image from 'next/image';
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function SiteVisits() {
    return (
        <section id="site-visits" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                </svg>
            </div> */}
            <div className="absolute inset-0 z-0 bg-primary/5">
                {/* Professional blank space / subtle pattern */}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary font-bold tracking-wider uppercase mb-6 border border-secondary/30">
                    Site Visits
                </span>

                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                    Walk the Land With Us
                </h2>

                <p className="text-xl md:text-2xl font-light opacity-90 mb-8 max-w-3xl mx-auto">
                    Future Location Tours
                </p>

                <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 text-primary-foreground/80">
                    For those who wish to see the vision firsthand, we are offering guided visits to the future site of the new temple. These visits are an opportunity to walk the grounds, pray over the land, and understand the scope of the project.
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-8 py-6 border border-white/20">
                    <p className="text-lg font-semibold italic">
                        * Tours are scheduled by request and coordinated in advance.
                    </p>
                </div>
            </div>
        </section>
    );
}
