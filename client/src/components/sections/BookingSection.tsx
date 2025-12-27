import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, MapPin, Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Ime mora imati bar 2 karaktera." }),
  phone: z.string().min(6, { message: "Unesite ispravan broj telefona." }),
  vehicle: z.string().min(2, { message: "Unesite marku i model vozila." }),
  serviceType: z.string().min(1, { message: "Izaberite tip usluge." }),
});

export function BookingSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      vehicle: "",
      serviceType: "mali-servis",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Zahtev poslat!",
        description: "Kontaktiraćemo vas uskoro radi potvrde termina.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="zakazivanje" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase leading-tight">
              Zakažite termin <br />
              <span className="text-primary">Brzo i Lako</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Popunite formu i naš tim će vas kontaktirati u najkraćem roku da potvrdimo termin. 
              Bez čekanja na vezi, bez komplikacija.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-card p-4 rounded-full border border-white/10">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Pozovite nas</h3>
                  <p className="text-gray-400 mb-2">Preferirate razgovor? Dostupni smo odmah.</p>
                  <a href="tel:+38160000000" className="text-2xl font-heading font-bold text-white hover:text-primary transition-colors">
                    +381 60 000 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-card p-4 rounded-full border border-white/10">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Lokacija servisa</h3>
                  <p className="text-gray-400 mb-4">Batajnički drum 1, 11273 Batajnica</p>
                  <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.987654321!2d20.27!3d44.90!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU0JzAwLjAiTiAyMMKwMTYnMTIuMCJF!5e0!3m2!1sen!2srs!4v1600000000000!5m2!1sen!2srs" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <CalendarIcon className="text-primary" /> Online Zakazivanje
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Vaše Ime</FormLabel>
                      <FormControl>
                        <Input placeholder="Petar Petrović" {...field} className="bg-background border-white/10 text-white h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Broj Telefona</FormLabel>
                      <FormControl>
                        <Input placeholder="060 123 4567" {...field} className="bg-background border-white/10 text-white h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="vehicle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Marka i Model Vozila</FormLabel>
                      <FormControl>
                        <Input placeholder="npr. Audi A4 2.0 TDI" {...field} className="bg-background border-white/10 text-white h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Tip Usluge</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-white/10 text-white h-12">
                            <SelectValue placeholder="Izaberite uslugu" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-white/10 text-white">
                          <SelectItem value="mali-servis">Mali Servis (Ulje i Filteri)</SelectItem>
                          <SelectItem value="veliki-servis">Veliki Servis</SelectItem>
                          <SelectItem value="kocnice">Kočnice</SelectItem>
                          <SelectItem value="trap">Pregled Trapa</SelectItem>
                          <SelectItem value="ostalo">Ostalo</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 text-lg uppercase tracking-wider"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Slanje...
                    </>
                  ) : (
                    "Pošalji Zahtev"
                  )}
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  *Klikom na dugme saglasni ste da vas kontaktiramo povodom zakazivanja.
                </p>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
