import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Timer, Award, Zap, ThumbsUp } from "lucide-react";
import { useRef } from "react";

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
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] }
  },
};

// 3D Card component with tilt effect
function Card3D({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
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
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Premium animated background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
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
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group perspective-1000"
            >
              <Card3D>
                <div className={`relative bg-gradient-to-br ${feature.bgGradient} p-8 rounded-2xl border border-white/5 h-full overflow-hidden transition-all duration-500 group-hover:border-white/20`}>
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 shimmer-premium opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Animated icon container */}
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg relative overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-0 shimmer-premium" />
                      <feature.icon className="text-white w-8 h-8 relative z-10 icon-glow" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
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

