import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function SpecialGuest() {
    return (
        <section id="special-guest" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Column */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 bg-brand-gray/10">
                            <Image
                                src="/images/guy.webp"
                                alt="Guy Penrod"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <span className="inline-block py-2 px-4 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-wider uppercase mb-6">
                            Special Guest
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-brand-green mb-6 leading-tight">
                            A Night of Worship <br />
                            <span className="text-brand-gold">& Inspiration</span>
                        </h2>

                        <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
                            Experience the powerful voice of internationally acclaimed artist
                        </p>

                        <div className="relative inline-block">
                            <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-green tracking-tight">
                                Guy Penrod
                            </h3>
                            <div className="h-1.5 w-24 bg-brand-gold mt-6 mx-auto md:mx-0 rounded-full"></div>
                        </div>

                        <p className="mt-10 text-slate-500 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
                            Known for his powerful vocals and heartfelt worship, Guy Penrod brings a message of hope and faith that resonates with audiences worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
