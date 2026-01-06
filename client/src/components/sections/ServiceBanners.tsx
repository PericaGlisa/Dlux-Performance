import { motion } from "framer-motion";
import { Car, Package, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import carImage from "@assets/generated_images/premium_workshop_v2.png";
import partsImage from "@assets/generated_images/dark_industrial_auto_mechanic_workshop_background.png";
import oilImage from "@assets/generated_images/bottle_of_premium_motor_oil_pouring.png";

const banners = [
  {
    title: "Prodaja Automobila",
    description: "Vaš sledeći ljubimac vas čeka. Proverena vozila sa garancijom i kompletnom istorijom.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
    icon: Car,
    cta: "Pitaj za ponudu",
    id: "zakazivanje"
  },
  {
    title: "Prodaja Delova",
    description: "Samo original i provereni kvalitet. Kompletan lager delova za sve premium brendove.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200",
    icon: Package,
    cta: "Dostupnost delova",
    id: "delovi"
  },
  {
    title: "Mali Servis",
    description: "Vrhunska Motul ulja i pedantna ugradnja. Vaš automobil zaslužuje vrhunsku negu.",
    image: oilImage,
    icon: Wrench,
    cta: "Zakaži Servis",
    id: "mali-servis"
  }
];

export function ServiceBanners() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {banners.map((banner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "group relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden cursor-pointer isolation-isolate",
                "transform-gpu backface-hidden [mask-image:linear-gradient(white,white)]",
                index === 2 && "sm:col-span-2 lg:col-span-1" // Centering the 3rd item on tablet
              )}
              onClick={() => scrollToSection(banner.id)}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="mb-4 md:mb-6">
                  <div className="bg-primary/20 backdrop-blur-md p-2.5 md:p-3 rounded-2xl w-fit mb-3 md:mb-4 border border-white/10 group-hover:bg-primary/40 transition-colors duration-300">
                    <banner.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                    {banner.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed mb-4 md:mb-6 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0">
                    {banner.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-white group-hover:text-primary transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="font-bold uppercase tracking-wider text-[10px] md:text-xs">
                      {banner.cta}
                    </span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  {/* Subtle glass effect highlight */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:border-primary/50 transition-all duration-300">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
