import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Gauge, Sparkles } from "lucide-react";
import heroBg from "@assets/generated_images/ultra_luxury_automotive_workshop_interior.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function Hero() {
  const scrollToBooking = () => {
    document.getElementById("zakazivanje")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="D-LUX Performance Workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-sm" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 pt-20">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md text-primary px-4 py-2 rounded-full border border-primary/30 mb-8 hover:bg-white/10 transition-all">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase">Luxury Auto Care</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-heading font-bold text-white leading-tight mb-8 tracking-tight">
            Vaš Auto
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-pulse">
              U Punoj Snazi
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl font-light leading-relaxed">
            Ekskluzivni servis sa <span className="font-semibold text-primary">Motul premium</span> uljima. 
            <br />
            Gde se preciznost sretne sa luksuzom.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl text-white text-lg px-10 py-7 uppercase font-bold tracking-wider h-auto rounded-xl shadow-lg transition-all duration-300"
                onClick={scrollToBooking}
              >
                Zakaži Mali Servis <ChevronRight className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 hover:bg-white/10 text-white text-lg px-10 py-7 uppercase font-bold tracking-wider h-auto backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-white/50"
                onClick={() => document.getElementById("mali-servis")?.scrollIntoView({ behavior: "smooth" })}
              >
                Saznaj Više
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-xs uppercase font-semibold tracking-widest">Skroluj</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <motion.div 
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
