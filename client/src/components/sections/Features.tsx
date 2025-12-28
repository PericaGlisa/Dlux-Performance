import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Timer, Award, Zap, ThumbsUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const features = [
  {
    icon: Timer,
    title: "Preciznost",
    description: "Svaki detalj se računa. Cenimo vreme, rad obavljamo sa svesnom preciznošću.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/10"
  },
  {
    icon: Award,
    title: "Motul Ekskluzivnost",
    description: "Kao Motul partner garantujemo autentičnost svakog litra ulja.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/10"
  },
  {
    icon: Zap,
    title: "Ekspertiza",
    description: "Duboka znanja o svim tipovima vozila, od klasičnih do high-performance mašina.",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/20 to-orange-500/10"
  },
  {
    icon: ThumbsUp,
    title: "Transparentnost",
    description: "Nema iznenađenja. Sve dogovaramo pre početka rada, bez skrivenih troškova.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/10"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
  },
};

// 3D Card component with tilt effect optimized for performance
function Card3D({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: "preserve-3d",
        willChange: isMobile ? "auto" : "transform"
      }}
      className={className}
    >
      <div style={{ transform: isMobile ? "none" : "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export function Features() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Premium animated background decoration - Simplified for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px]"
          animate={isMobile ? {} : {
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {!isMobile && (
          <motion.div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px]"
            animate={{
              scale: [1.1, 1, 1.1],
              y: [0, -20, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-fluid-h2 font-heading font-bold text-white mb-6 tracking-tight">
            Zašto Izabrati
            <br />
            <span className="gradient-text-animated">
              D-LUX Performance
            </span>
          </h2>
          <p className="text-xl text-gray-300/80 font-light leading-relaxed">
            Mi nismo samo servis, mi smo standard. Ne učestvujemo u trci za najnižu cenu, jer beskompromisno biramo kvalitet. Verujemo u dugovečnost, pouzdanost i pedantnost koja se vidi u svakom detalju.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group perspective-1000"
            >
              <Card3D>
                <div className={`relative bg-gradient-to-br ${feature.bgGradient} p-6 md:p-8 rounded-2xl border border-white/5 h-full overflow-hidden transition-all duration-500 group-hover:border-white/20`}>
                  {/* Glow effect on hover - Optimized */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl pointer-events-none`} />

                  <div className="relative z-10">
                    {/* Animated icon container */}
                    <motion.div
                      className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg relative overflow-hidden`}
                      whileHover={isMobile ? {} : { scale: 1.05, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <feature.icon className="text-white w-7 h-7 md:w-8 md:h-8 relative z-10 icon-glow" />
                    </motion.div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-heading group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300/80 text-sm leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

