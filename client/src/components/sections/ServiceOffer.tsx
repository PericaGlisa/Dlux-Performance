import { motion } from "framer-motion";
import { Check, Droplets, Wrench, Filter } from "lucide-react";
import oilImage from "@assets/generated_images/bottle_of_premium_motor_oil_pouring.png";
import { Button } from "@/components/ui/button";

export function ServiceOffer() {
  return (
    <section id="mali-servis" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase">
              Mali servis <span className="text-primary">bez kompromisa</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Redovan mali servis je ključ dugovečnosti vašeg automobila. U D-LUX Performance servisu ne radimo stvari polovično. 
              Koristimo isključivo premium delove i ulja kako bi vaš motor radio kao sat.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                  <Droplets size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Motul Premium Ulja</h3>
                  <p className="text-gray-400">Vrhunska sintetička ulja koja pružaju maksimalnu zaštitu i performanse motoru.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                  <Filter size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Zamena Svih Filtera</h3>
                  <p className="text-gray-400">Filter ulja, vazduha, goriva i kabine - koristimo samo proverene brendove.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                  <Wrench size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Kompletan Pregled</h3>
                  <p className="text-gray-400">Besplatan vizuelni pregled kočnica, trapa i tečnosti uz svaki mali servis.</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider"
              onClick={() => document.getElementById("zakazivanje")?.scrollIntoView({ behavior: "smooth" })}
            >
              Zakaži Termin
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={oilImage} 
                alt="Motul Oil Pouring" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-full p-2">
                      <Check className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider">Ovlašćeni partner</p>
                      <p className="text-white font-bold text-xl">Motul Quality Center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
