import { motion } from "framer-motion";
import { Timer, Award, Zap, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Preciznost",
    description: "Svaki detalj računa. Cenimo vreme, rad obavljamo sa svesnom preciznošću.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Award,
    title: "Motul Ekskluzivnost",
    description: "Kao zvanični partner garantujemo autentičnost svakog litera ulja.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Zap,
    title: "Ekspertiza",
    description: "Duboka znanja o svim tipovima vozila, od klasičnih do high-performance mašina.",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: ThumbsUp,
    title: "Transparentnost",
    description: "Nema iznenađenja. Sve dogovaramo prije rada, bez skrivenih troškova.",
    color: "from-green-500/20 to-emerald-500/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Features() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Premium background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 -left-1/3 w-2/3 h-2/3 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight leading-tight">
            Zašto Izabrati
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              D-LUX Performance
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-light">
            Nismo samo servis. Nismo trka prema dnu cene. Zakladamo se na stalnost, kvalitet i 
            nedostižnu pažnju prema detaljima.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${feature.color} p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm h-full`}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/50 group-hover:to-accent/30 transition-all duration-300 shadow-lg">
                  <feature.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-heading">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
