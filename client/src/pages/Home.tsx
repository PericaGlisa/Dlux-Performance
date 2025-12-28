import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Suspense, lazy } from "react";

// Lazy load sections below the fold
const ServiceOffer = lazy(() => import("@/components/sections/ServiceOffer").then(m => ({ default: m.ServiceOffer })));
const Features = lazy(() => import("@/components/sections/Features").then(m => ({ default: m.Features })));
const Stats = lazy(() => import("@/components/sections/Stats").then(m => ({ default: m.Stats })));
const Parts = lazy(() => import("@/components/sections/Parts").then(m => ({ default: m.Parts })));
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const BookingSection = lazy(() => import("@/components/sections/BookingSection").then(m => ({ default: m.BookingSection })));

// Loading placeholder for lazy sections with reserved space to prevent layout shift
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center bg-background/50">
    <div className="w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PartnerLogos />
        
        <Suspense fallback={<SectionLoader />}>
          <ServiceOffer />
          <Features />
          <Stats />
          <Parts />
          <Testimonials />
          <BookingSection />
        </Suspense>

        <section id="lokacija">
          {/* Location is integrated in booking and footer, this ID serves for navigation scroll anchor */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

