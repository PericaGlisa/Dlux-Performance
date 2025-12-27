import { motion } from "framer-motion";
import { Package, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Parts() {
  return (
    <section id="delovi" className="py-20 bg-secondary/20 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border border-white/5">
                <Package className="text-primary w-10 h-10 mb-4" />
                <h4 className="font-bold text-white mb-2">Originalni Delovi</h4>
                <p className="text-sm text-gray-400">Direktno od proizvođača za sve marke.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-white/5">
                <Truck className="text-accent w-10 h-10 mb-4" />
                <h4 className="font-bold text-white mb-2">Dostupno Odmah</h4>
                <p className="text-sm text-gray-400">Veliki lager delova na stanju.</p>
              </div>
              <div className="col-span-2 bg-gradient-to-r from-primary/20 to-transparent p-6 rounded-lg border border-primary/20">
                <ShieldCheck className="text-white w-10 h-10 mb-4" />
                <h4 className="font-bold text-white mb-2">Garancija Kvaliteta</h4>
                <p className="text-sm text-gray-300">Svi delovi dolaze sa pisanom garancijom proizvođača.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase">
              Svi delovi na <span className="text-primary">jednom mestu</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Štedimo vaše vreme. Ne morate da jurite delove po gradu. Kod nas dobijate kompletnu uslugu - od dijagnostike, preko nabavke delova, do ugradnje.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Filteri i ulja</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Kočioni sistemi</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Delovi trapa i vešanja</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Akumulatori i elektrika</li>
            </ul>
            <Button 
              variant="outline" 
              className="border-white/20 hover:bg-white/10 text-white font-bold uppercase"
              onClick={() => window.open("tel:+38160000000")}
            >
              Proveri dostupnost dela
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
