import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Gauge } from "lucide-react";
import heroBg from "@assets/generated_images/dark_industrial_auto_mechanic_workshop_background.png";

export function Hero() {
  const scrollToBooking = () => {
    document.getElementById("zakazivanje")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="D-LUX Performance Workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/20 mb-6 backdrop-blur-sm">
              <Gauge size={16} />
              <span className="text-sm font-bold tracking-wider uppercase">Premium Auto Servis</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6 italic uppercase">
              Vaš auto <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">u punoj snazi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-light">
              Specijalizovan mali servis uz upotrebu premium <span className="text-primary font-bold">Motul</span> ulja. 
              Brzo, lako i efikasno održavanje za sve tipove vozila.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 uppercase font-bold tracking-wider h-auto"
                onClick={scrollToBooking}
              >
                Zakaži Mali Servis <ChevronRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6 uppercase font-bold tracking-wider h-auto backdrop-blur-sm"
                onClick={() => document.getElementById("mali-servis")?.scrollIntoView({ behavior: "smooth" })}
              >
                Saznaj Više
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
