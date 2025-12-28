import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServiceOffer } from "@/components/sections/ServiceOffer";
import { Features } from "@/components/sections/Features";
import { Parts } from "@/components/sections/Parts";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingSection } from "@/components/sections/BookingSection";
import { Stats } from "@/components/sections/Stats";
import { PartnerLogos } from "@/components/sections/PartnerLogos";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PartnerLogos />
        <ServiceOffer />
        <Features />
        <Stats />
        <Parts />
        <Testimonials />
        <BookingSection />
        <section id="lokacija">
          {/* Location is integrated in booking and footer, this ID serves for navigation scroll anchor */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

