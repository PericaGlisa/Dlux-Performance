import { motion } from "framer-motion";
import { Package, Truck, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import textureImage from "@assets/generated_images/premium_luxury_automotive_texture.png";

export function Parts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="delovi" className="py-32 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <img src={textureImage} alt="Texture" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            className="flex-1 order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 p-8 rounded-2xl border border-white/5 hover:border-primary/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                <Package className="text-primary w-10 h-10 mb-4" />
                <h4 className="font-bold text-white mb-2 text-lg">Originalni Delovi</h4>
                <p className="text-sm text-gray-400">Direktno od proizvođača za sve marke.</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 p-8 rounded-2xl border border-white/5 hover:border-accent/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                <Truck className="text-accent w-10 h-10 mb-4" />
                <h4 className="font-bold text-white mb-2 text-lg">Dostupno Odmah</h4>
                <p className="text-sm text-gray-400">Veliki lager delova na stanju.</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="col-span-2 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent p-8 rounded-2xl border border-primary/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-white w-10 h-10 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Garancija Kvaliteta</h4>
                    <p className="text-sm text-gray-300">Svi delovi dolaze sa pisanom garancijom proizvođača i našom porošnjom.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-white/5 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm">
              <Zap size={16} className="text-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Kompletan Lager</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight tracking-tight">
              Svi Delovi na
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Jednom Mestu
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
              Štedimo vaše dragoceno vreme. Ne morate da jurite delove po gradu. 
              Kompletan servis - od dijagnostike, preko nabavke delova, do profesionalne ugradnje.
            </p>

            <ul className="space-y-4 mb-12 text-gray-300 text-base font-light">
              {[
                "Filteri, ulja i tečnosti",
                "Kočioni sistemi i brtvljenja",
                "Delovi suspenZije i vešanja",
                "Akumulatori i električni sistemi",
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="outline" 
                className="border-white/30 hover:bg-white/10 text-white font-bold uppercase rounded-xl py-3 px-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                onClick={() => window.open("tel:+38160000000")}
              >
                Proveri Dostupnost Dela
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
