import { motion } from "framer-motion";
import { Car, Package, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import carImage from "@assets/generated_images/premium_workshop_v2.png";
import partsImage from "@assets/generated_images/dark_industrial_auto_mechanic_workshop_background.png";
import oilImage from "@assets/generated_images/bottle_of_premium_motor_oil_pouring.png";

const banners = [
  {
    title: "Prodaja Automobila",
    description: "Vaš sledeći ljubimac vas čeka. Proverena vozila sa garancijom i kompletnom istorijom.",
    image: carImage,
    icon: Car,
    cta: "Pogledaj Ponudu",
    id: "prodaja-automobila"
  },
  {
    title: "Prodaja Delova",
    description: "Samo original i provereni kvalitet. Kompletan lager delova za sve premium brendove.",
    image: partsImage,
    icon: Package,
    cta: "Svi Delovi",
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
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {banners.map((banner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
              onClick={() => scrollToSection(banner.id)}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-6">
                  <div className="bg-primary/20 backdrop-blur-md p-3 rounded-2xl w-fit mb-4 border border-white/10 group-hover:bg-primary/40 transition-colors duration-300">
                    <banner.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {banner.title}
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {banner.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-white group-hover:text-primary transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="font-bold uppercase tracking-wider text-xs">
                      {banner.cta}
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  {/* Subtle glass effect highlight */}
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:border-primary/50 transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
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
