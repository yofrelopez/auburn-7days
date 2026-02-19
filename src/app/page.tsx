import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";


export default function Home() {
  return (
    <>
      <Hero />

      <Vision />

      {/* Placeholder for subsequent sections */}
      <section id="event-details" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sda-blue-900 mb-6">Event Details</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              (Section 3: Special Guest & Details coming next...)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
