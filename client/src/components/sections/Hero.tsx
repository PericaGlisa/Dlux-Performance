import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Gauge, Sparkles } from "lucide-react";
import heroBg from "@assets/generated_images/dark_industrial_auto_mechanic_workshop_background.png";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
  },
};

// Floating particle component
function FloatingParticle({ delay, size, left, duration }: { delay: number; size: number; left: string; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-primary/30 to-accent/20"
      style={{ width: size, height: size, left }}
      initial={{ bottom: "-10%", opacity: 0 }}
      animate={{
        bottom: "110%",
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToBooking = () => {
    document.getElementById("zakazivanje")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <img
          src={heroBg}
          alt="D-LUX Performance Workshop"
          className="w-full h-full object-cover scale-110 opacity-70"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Animated background elements with glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 z-[1] noise-overlay pointer-events-none" />

      <motion.div
        className="container relative z-10 px-4 md:px-8 pt-20"
        style={{ y: textY, opacity, willChange: "transform, opacity" }}
      >
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Premium badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 glass-premium px-5 py-2.5 rounded-full mb-8 shimmer-premium"
          >
            <Sparkles size={16} className="text-primary icon-glow animate-pulse" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/90">Luxury Auto Care</span>
          </motion.div>

          {/* Main heading with animated gradient */}
          <motion.h1
            variants={itemVariants}
            className="text-fluid-h1 font-heading font-bold text-white mb-8 tracking-tight"
          >
            Vaš Auto
            <br />
            <span className="gradient-text-animated">
              U Punoj Snazi
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-fluid-p text-gray-200/90 mb-10 md:mb-14 max-w-2xl font-light leading-relaxed"
          >
            Ekskluzivni servis sa <span className="font-semibold text-primary">Motul premium</span> uljima.
            <br />
            Gde se preciznost susreće sa luksuzom.
          </motion.p>

          {/* CTA Buttons with premium effects */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mb-24">
            <motion.div
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-primary to-accent hover:shadow-2xl text-white text-base px-8 py-5 uppercase font-bold tracking-wider h-auto rounded-xl shadow-xl transition-all duration-300 glow-pulse magnetic-btn"
                onClick={scrollToBooking}
              >
                Zakaži Mali Servis <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="glass-premium border-white/20 hover:border-white/40 text-white text-base px-8 py-5 uppercase font-bold tracking-wider h-auto rounded-xl shadow-xl transition-all duration-300 shimmer-premium"
                onClick={() => document.getElementById("mali-servis")?.scrollIntoView({ behavior: "smooth" })}
              >
                Saznaj Više
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-3 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity }}
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Skroluj</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2 glass-premium">
          <motion.div
            className="w-1.5 h-2.5 bg-gradient-to-b from-primary to-accent rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
