import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marko J.",
    car: "Audi A6 3.0 TDI",
    text: "Nikada nisam video takav nivo profesionalizma. Brzo, precizno i apsolutno korektno. Mali servis završen za 45 minuta.",
    rating: 5
  },
  {
    name: "Nikola S.",
    car: "BMW 320d M-Sport",
    text: "Konačno mesto gde mogu biti 100% siguran da su delovi originalni. Motul ulje je napravilo vidljivu razliku u dinamici.",
    rating: 5
  },
  {
    name: "Ivana P.",
    car: "VW Golf 7 GTI",
    text: "Sve objašnjeno, sve transparentno. Cena tačno kako su rekli. Servis je premija. Preporučujem svim prijateljima.",
    rating: 5
  },
  {
    name: "Dejan M.",
    car: "Škoda Octavia RS",
    text: "Zakazao online, termin čuvan precizno. Auto pregledan detaljno. Ovo je servis kojem se mogu vratiti.",
    rating: 5
  },
  {
    name: "Jelena K.",
    car: "Mercedes-Benz C200",
    text: "Premijum usluga za premijum automobil. Njih mogu preporučiti bez oklevanja. Bravo momci!",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
            Šta Kažu
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Klijenti
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-light">
            Zadovoljstvo klijenta je naša jedina mjera. Čitajte ondje što kažu oni koji prate nas.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <Card className="bg-gradient-to-br from-card to-card/50 border-white/10 h-full hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <CardContent className="flex flex-col p-8 h-full justify-between">
                      <div className="mb-6">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1, duration: 0.3 }}
                            >
                              <Star size={16} className="fill-primary text-primary" />
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-gray-200 italic text-base leading-relaxed">
                          &quot;{testimonial.text}&quot;
                        </p>
                      </div>
                      <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                        <motion.div 
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-lg shadow-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          {testimonial.name.charAt(0)}
                        </motion.div>
                        <div>
                          <p className="font-bold text-white text-sm">{testimonial.name}</p>
                          <p className="text-xs text-gray-500">{testimonial.car}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative left-0 bottom-0 bg-gradient-to-r from-primary/30 to-accent/20 hover:from-primary/50 hover:to-accent/30 border-white/10 text-white rounded-full h-12 w-12 transition-all" />
            <CarouselNext className="relative right-0 bottom-0 bg-gradient-to-r from-primary/30 to-accent/20 hover:from-primary/50 hover:to-accent/30 border-white/10 text-white rounded-full h-12 w-12 transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
