import { motion } from "framer-motion";
import { Timer, Award, Zap, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Brzina i Efikasnost",
    description: "Cenimo vaše vreme. Zakazani termini se poštuju, a servis obavljamo efikasno bez nepotrebnog čekanja."
  },
  {
    icon: Award,
    title: "Motul Kvalitet",
    description: "Kao ovlašćeni partner, garantujemo originalnost i kvalitet svih ulja i tečnosti koje sipamo u vaše vozilo."
  },
  {
    icon: Zap,
    title: "Stručnost",
    description: "Naš tim poznaje sve tipove vozila, od gradskih automobila do high-performance mašina."
  },
  {
    icon: ThumbsUp,
    title: "Transparentnost",
    description: "Nema skrivenih troškova. Sve radove i delove dogovaramo sa vama pre početka rada."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase">
            Zašto izabrati <span className="text-primary">D-LUX?</span>
          </h2>
          <p className="text-gray-400">
            Nismo samo još jedan servis u nizu. Fokusirani smo na kvalitet, brzinu i zadovoljstvo klijenata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
