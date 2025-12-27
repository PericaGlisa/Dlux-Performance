import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marko J.",
    car: "Audi A6",
    text: "Brzo, profesionalno i korektno. Mali servis završen za 45 minuta kako je i dogovoreno. Sve preporuke za momke!",
    rating: 5
  },
  {
    name: "Nikola S.",
    car: "BMW 320d",
    text: "Konačno servis u Batajnici gde ne moram da brinem da li su delovi originalni. Motul ulje je napravilo razliku u radu motora.",
    rating: 5
  },
  {
    name: "Ivana P.",
    car: "VW Golf 7",
    text: "Prijatno iznenađena uslugom. Sve mi je lepo objašnjeno, cena je bila ista kao što su rekli preko telefona.",
    rating: 5
  },
  {
    name: "Dejan M.",
    car: "Škoda Octavia",
    text: "Vrhunska usluga. Zakazao sam online, termin me je čekao, auto pregledan detaljno. Svaka čast.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-card border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center uppercase">
          Šta kažu <span className="text-primary">klijenti</span>
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card className="bg-background border-white/10 h-full">
                    <CardContent className="flex flex-col p-6 h-full justify-between">
                      <div className="mb-4">
                        <div className="flex gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-gray-300 italic">"{testimonial.text}"</p>
                      </div>
                      <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm">{testimonial.name}</p>
                          <p className="text-xs text-gray-500">{testimonial.car}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-[-40px] bg-secondary hover:bg-primary border-none text-white" />
            <CarouselNext className="right-[-40px] bg-secondary hover:bg-primary border-none text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
