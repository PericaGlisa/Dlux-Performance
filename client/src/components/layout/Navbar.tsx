import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-2xl border-b border-white/5 py-2 shadow-2xl" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <a className="group cursor-pointer">
              <div className="text-2xl md:text-3xl font-heading font-bold tracking-tighter text-white">
                D-LUX
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent group-hover:from-accent group-hover:to-primary transition-all duration-300">
                  PERFORMANCE
                </span>
              </div>
            </a>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { label: "MALI SERVIS", id: "mali-servis" },
            { label: "DELOVI", id: "delovi" },
            { label: "LOKACIJA", id: "lokacija" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button 
              onClick={() => scrollToSection("zakazivanje")}
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold uppercase tracking-wider py-3 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Calendar className="mr-2 h-4 w-4" /> Zakaži Odmah
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          className="md:hidden text-white z-10"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-white/5 p-6 flex flex-col gap-6"
          >
            {[
              { label: "MALI SERVIS", id: "mali-servis" },
              { label: "DELOVI", id: "delovi" },
              { label: "LOKACIJA", id: "lokacija" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-lg font-semibold text-gray-300 hover:text-white text-left cursor-pointer transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("zakazivanje")}
              className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-wider py-3"
            >
              <Calendar className="mr-2 h-4 w-4" /> Zakaži Online
            </Button>
            <Button 
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary/10 font-bold uppercase tracking-wider cursor-pointer"
              onClick={() => window.open("tel:+38160000000")}
            >
              <Phone className="mr-2 h-4 w-4" /> Pozovi Odmah
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
