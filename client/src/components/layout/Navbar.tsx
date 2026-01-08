import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Calendar, MapPin, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
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
      const offset = 80; // Header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { label: "Prodaja Automobila", id: "prodaja-automobila", icon: ChevronRight },
    { label: "Mali Servis", id: "mali-servis", icon: ChevronRight },
    { label: "Delovi", id: "delovi", icon: ChevronRight },
    { label: "Lokacija", id: "lokacija", icon: MapPin },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b",
          scrolled || isOpen
            ? "bg-background/90 backdrop-blur-xl border-white/5 py-3 shadow-lg supports-[backdrop-filter]:bg-background/60"
            : "bg-transparent border-transparent py-4 md:py-6"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="relative z-[60] group cursor-pointer" onClick={() => setIsOpen(false)}>
            <div className="text-xl md:text-2xl font-heading font-bold tracking-tighter text-white leading-none">
              D-LUX
              <span className="block text-xs md:text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-medium tracking-[0.3em] group-hover:tracking-[0.4em] transition-all duration-500">
                PERFORMANCE
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-bold tracking-[0.15em] text-gray-300 hover:text-white transition-colors relative group uppercase"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("zakazivanje")}
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar className="mr-2 h-4 w-4" /> Zakaži
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-[100] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: scrolled ? "#ffffff" : "#ffffff" }}
              className="w-8 h-0.5 bg-white rounded-full block transition-transform origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: scrolled ? "#dc2626" : "#dc2626" }}
              className="w-5 h-0.5 bg-primary rounded-full block transition-opacity self-end"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: scrolled ? "#ffffff" : "#ffffff" }}
              className="w-8 h-0.5 bg-white rounded-full block transition-transform origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-sm lg:hidden pt-24 px-6 pb-8 flex flex-col overflow-y-auto will-change-[opacity]"
          >
            <div className="flex flex-col gap-2 mb-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 active:bg-white/10 active:scale-[0.98] transition-all group text-left will-change-[transform,opacity]"
                >
                  <span className="text-lg font-heading font-bold text-gray-200 group-hover:text-white">
                    {item.label}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-auto grid gap-3"
            >
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 h-12 bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-xl"
                  onClick={() => window.open("tel:+381605553848")}
                >
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  Pozovi
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12 bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-xl"
                  onClick={() => scrollToSection("lokacija")}
                >
                  <MapPin className="mr-2 h-4 w-4 text-accent" />
                  Mapa
                </Button>
              </div>
              
              <Button
                className="w-full h-14 bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-primary/20"
                onClick={() => scrollToSection("zakazivanje")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Zakaži Odmah
              </Button>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500 font-medium">
                <Clock className="w-3 h-3" />
                <span>Pon - Sub: 09:00 - 17:00</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
