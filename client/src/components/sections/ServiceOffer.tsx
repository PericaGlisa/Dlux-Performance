import { motion } from "framer-motion";
import { Check, Droplets, Wrench, Filter, Crown } from "lucide-react";
import oilImage from "@assets/generated_images/premium_motul_oil_product_hero_shot.png";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export function ServiceOffer() {
  return (
    <section id="mali-servis" className="py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative premium elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(135deg,rgba(200,100%,50%,0.05)_0%,transparent_50%)]" />
      <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-white/5 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm">
              <Crown size={16} className="text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Premium Service</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight tracking-tight">
              Mali Servis
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Bez Kompromisa
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
              Redovan mali servis je osnova dugovečnosti. Mi ne radiš stvari polovično. 
              Koristimo isključivo premium delove i Motul ulja kako bi vaš motor radio sa 
              preciznosti koja dostoji finom mehaničarskom zanatu.
            </p>

            <motion.div className="space-y-6 mb-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {[
                { icon: Droplets, title: "Motul Premium Ulja", desc: "Vrhunska sintetička ulja koja pružaju maksimalnu zaštitu i performanse." },
                { icon: Filter, title: "Zamena Svih Filtera", desc: "Filter ulja, vazduha, goriva i kabine - samo provereni brendovi." },
                { icon: Wrench, title: "Kompletan Pregled", desc: "Besplatan vizuelni pregled kočnica, trapa i tečnosti uz svaki servis." },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-start gap-5 group">
                  <div className="bg-gradient-to-br from-primary/30 to-accent/20 p-4 rounded-xl text-primary group-hover:from-primary/50 group-hover:to-accent/30 transition-all duration-300 shadow-lg">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 font-bold uppercase tracking-wider py-3 px-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => document.getElementById("zakazivanje")?.scrollIntoView({ behavior: "smooth" })}
              >
                Zakaži Termin
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl rounded-3xl group-hover:blur-2xl transition-all duration-500" />
            
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-primary/50 transition-all duration-300">
              <motion.img 
                src={oilImage} 
                alt="Motul Oil Premium" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <motion.div 
                className="absolute bottom-8 left-8 right-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="bg-black/70 backdrop-blur-2xl p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-primary to-accent rounded-full p-3 shadow-lg">
                      <Check className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Ovlašćeni Partner</p>
                      <p className="text-white font-heading font-bold text-2xl">Motul Quality Center</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
