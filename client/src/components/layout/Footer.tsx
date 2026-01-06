import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-card to-background border-t border-white/5 pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Brand Info */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-heading font-bold text-white mb-6 tracking-tight">
              D-LUX
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                PERFORMANCE
              </span>
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed font-light max-w-sm lg:max-w-xs">
              Specijalizovani servis za sve tipove vozila.
              Prodavac Motul ulja sa više od dve decenije iskustva.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="bg-gradient-to-br from-primary/30 to-accent/20 p-3 rounded-full text-white hover:from-primary/60 hover:to-accent/40 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-heading font-bold text-white mb-8 uppercase tracking-wider">Kontakt</h4>
            <div className="space-y-6">
              <motion.div className="flex items-start gap-4 group cursor-pointer" whileHover={{ x: 5 }}>
                <MapPin className="text-primary mt-1 shrink-0 group-hover:text-accent transition-colors" size={20} />
                <div>
                  <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-1">Lokacija</p>
                  <span className="text-gray-300 font-light">
                    Dragutina Đorđevića 22, Šangaj<br />
                    11273 Batajnica
                  </span>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4 group cursor-pointer" whileHover={{ x: 5 }}>
                <Phone className="text-primary shrink-0 group-hover:text-accent transition-colors" size={20} />
                <div>
                  <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-1">Pozovi</p>
                  <a href="tel:+38160000000" className="text-gray-300 font-light hover:text-primary transition-colors">+381 60 000 0000</a>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4 group cursor-pointer" whileHover={{ x: 5 }}>
                <Mail className="text-primary shrink-0 group-hover:text-accent transition-colors" size={20} />
                <div>
                  <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-1">Email</p>
                  <a href="mailto:info@dlux-performance.com" className="text-gray-300 font-light hover:text-primary transition-colors">info@dlux-performance.com</a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-heading font-bold text-white mb-8 uppercase tracking-wider flex items-center gap-2">
              <Clock size={20} className="text-primary" />
              Radno Vreme
            </h4>
            <div className="space-y-3">
              {[
                { day: "Ponedeljak - Petak", hours: "08:00 - 18:00", isOpen: true },
                { day: "Subota", hours: "09:00 - 15:00", isOpen: true },
                { day: "Nedelja", hours: "Zatvoreno", isOpen: false },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex flex-wrap justify-between items-center p-4 rounded-xl transition-all gap-2 ${item.day === "Nedelja"
                    ? "bg-primary/10 border border-primary/20"
                    : "bg-white/5 border border-white/10"
                    }`}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <span className="text-gray-300 font-medium text-sm">{item.day}</span>
                  <span className={`font-bold text-xs sm:text-sm px-3 py-1 rounded-full whitespace-nowrap ${item.day === "Nedelja"
                    ? "text-primary bg-primary/10"
                    : "text-gray-400 bg-white/5"
                    }`}>
                    {item.hours}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} D-LUX Performance. Sva prava zadržana.
          </p>
          <motion.button
            className="flex items-center gap-3 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 hover:border-primary/50 transition-all duration-300 font-bold text-xs uppercase tracking-[0.2em] cursor-pointer group shadow-lg hover:shadow-primary/20"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Nazad na vrh
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={16} className="-rotate-90 group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
