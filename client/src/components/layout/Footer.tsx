import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold italic tracking-tighter text-white mb-4">
              D-LUX <span className="text-primary">PERFORMANCE</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Specijalizovan servis za sve tipove vozila. Ovlašćeni prodavac Motul ulja. 
              Brzo, efikasno i profesionalno održavanje vašeg automobila.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-secondary p-2 rounded-full text-white hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-secondary p-2 rounded-full text-white hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="text-primary mt-1 shrink-0" />
                <span>
                  Batajnički drum 1<br />
                  11273 Batajnica, Beograd
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="text-primary shrink-0" />
                <a href="tel:+38160000000" className="hover:text-primary transition-colors">+381 60 000 0000</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-primary shrink-0" />
                <a href="mailto:info@dlux-performance.rs" className="hover:text-primary transition-colors">info@dlux-performance.rs</a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase">Radno Vreme</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-300 border-b border-white/10 pb-2">
                <span className="flex items-center gap-2"><Clock size={16} /> Ponedeljak - Petak</span>
                <span className="font-bold">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-gray-300 border-b border-white/10 pb-2">
                <span className="flex items-center gap-2"><Clock size={16} /> Subota</span>
                <span className="font-bold">09:00 - 15:00</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span className="flex items-center gap-2"><Clock size={16} /> Nedelja</span>
                <span>Zatvoreno</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} D-LUX Performance. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
