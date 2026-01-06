import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0
    }
  }
};

const linkVariants = {
  closed: { x: 0, opacity: 0 },
  open: { x: 0, opacity: 1, transition: { duration: 0 } }
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        isOpen
          ? "bg-[#030303] py-6 shadow-none"
          : scrolled
            ? "bg-background/80 backdrop-blur-lg md:backdrop-blur-2xl border-b border-white/5 py-3 shadow-2xl"
            : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="group cursor-pointer">
            <div className="text-2xl md:text-3xl font-heading font-bold tracking-tighter text-white">
              D-LUX
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent group-hover:from-accent group-hover:to-primary transition-all duration-500">
                PERFORMANCE
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-12">
          {[
            { label: "MALI SERVIS", id: "mali-servis" },
            { label: "DELOVI", id: "delovi" },
            { label: "LOKACIJA", id: "lokacija" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-bold tracking-[0.2em] text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => scrollToSection("zakazivanje")}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg text-white font-bold uppercase tracking-wider py-3 px-8 rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 glow-pulse"
            >
              <Calendar className="mr-2 h-4 w-4" /> Zakaži Odmah
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle - Premium Magnetic Lines */}
        <motion.button
          className="md:hidden relative w-12 h-12 flex flex-col items-center justify-center gap-[6px] text-white z-[60] glass-premium rounded-xl group"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.div
            className="w-6 h-0.5 bg-white rounded-full origin-center"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 8 },
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
          <motion.div
            className="w-4 h-0.5 bg-primary rounded-full origin-center group-hover:w-6 transition-all duration-200"
            variants={{
              closed: { opacity: 1, x: 2 },
              open: { opacity: 0, x: -20 },
            }}
            transition={{ duration: 0.1 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white rounded-full origin-center"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -8 },
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </motion.button>
      </div>

      {/* Modern Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
              className="fixed inset-0 bg-black z-[55] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#030303] border-l border-white/5 z-[58] md:hidden shadow-[10px_0_40px_rgba(0,0,0,0.8)] flex flex-col p-8 pt-32"
              style={{ willChange: "transform" }}
            >
              <div className="flex flex-col gap-8 flex-1">
                {[
                  { label: "MALI SERVIS", id: "mali-servis" },
                  { label: "DELOVI", id: "delovi" },
                  { label: "LOKACIJA", id: "lokacija" },
                  { label: "ZAKAZIVANJE", id: "zakazivanje" },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    variants={linkVariants}
                    onClick={() => scrollToSection(item.id)}
                    className="text-4xl font-heading font-bold text-gray-400 hover:text-white text-left transition-colors flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-primary" />
                  </motion.button>
                ))}
              </div>

              {/* Mobile Contact Quick Actions */}
              <motion.div
                variants={linkVariants}
                className="mt-auto space-y-4"
              >
                <p className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-4">Kontakt Centar</p>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="glass-premium border-white/10 text-white font-bold h-14"
                    onClick={() => window.open("tel:+38160000000")}
                  >
                    <Phone className="mr-2 h-4 w-4 text-primary" /> Pozovi
                  </Button>
                  <Button
                    variant="outline"
                    className="glass-premium border-white/10 text-white font-bold h-14"
                    onClick={() => scrollToSection("lokacija")}
                  >
                    <Menu className="mr-2 h-4 w-4 text-accent" /> Mapa
                  </Button>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-wider h-14"
                  onClick={() => scrollToSection("zakazivanje")}
                >
                  <Calendar className="mr-2 h-4 w-4" /> Zakaži Besplatno
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
