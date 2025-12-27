import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-heading font-bold italic tracking-tighter text-white hover:opacity-90 transition-opacity cursor-pointer">
              D-LUX <span className="text-primary">PERFORMANCE</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("mali-servis")} className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer">
            MALI SERVIS
          </button>
          <button onClick={() => scrollToSection("delovi")} className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer">
            DELOVI
          </button>
          <button onClick={() => scrollToSection("lokacija")} className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer">
            LOKACIJA
          </button>
          <Button 
            onClick={() => scrollToSection("zakazivanje")}
            className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider cursor-pointer"
          >
            <Calendar className="mr-2 h-4 w-4" /> Zakaži Odmah
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <button onClick={() => scrollToSection("mali-servis")} className="text-lg font-medium text-gray-300 hover:text-white text-left p-2 cursor-pointer">
            MALI SERVIS
          </button>
          <button onClick={() => scrollToSection("delovi")} className="text-lg font-medium text-gray-300 hover:text-white text-left p-2 cursor-pointer">
            DELOVI
          </button>
          <button onClick={() => scrollToSection("lokacija")} className="text-lg font-medium text-gray-300 hover:text-white text-left p-2 cursor-pointer">
            LOKACIJA
          </button>
          <Button 
            onClick={() => scrollToSection("zakazivanje")}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider cursor-pointer"
          >
            <Calendar className="mr-2 h-4 w-4" /> Zakaži Online
          </Button>
          <Button 
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/10 font-bold uppercase tracking-wider cursor-pointer"
            onClick={() => window.open("tel:+38160000000")} // Placeholder number
          >
            <Phone className="mr-2 h-4 w-4" /> Pozovi Odmah
          </Button>
        </div>
      )}
    </nav>
  );
}
