import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, MapPin, Calendar as CalendarIcon, Loader2, CheckCircle2 } from "lucide-react";
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
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Zahtev poslat!",
        description: "Kontaktiraćemo vas uskoro radi potvrde termina.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="zakazivanje" className="py-32 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -right-1/3 w-2/3 h-2/3 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight tracking-tight">
              Zakažite
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Brzo i Lako
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
              Popunite formu i naš tim će vas kontaktirati odmah. 
              Bez čekanja, bez komplikacija, samo profesionalizam.
            </p>

            <div className="space-y-10">
              <motion.div 
                className="flex items-start gap-6 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-primary/30 to-accent/20 p-5 rounded-xl border border-primary/30 group-hover:border-primary/60 transition-all group-hover:shadow-xl">
                  <Phone className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">Pozovite Nas Direktno</h3>
                  <p className="text-gray-400 mb-3 font-light">Preferirate razgovor? Dostupni smo odmah.</p>
                  <a 
                    href="tel:+38160000000" 
                    className="text-3xl font-heading font-bold text-white hover:text-primary transition-colors duration-300 inline-block"
                  >
                    +381 60 000 0000
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-accent/30 to-primary/20 p-5 rounded-xl border border-accent/30 group-hover:border-accent/60 transition-all group-hover:shadow-xl">
                  <MapPin className="text-accent w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">Lokacija Servisa</h3>
                  <p className="text-gray-300 mb-4 font-light">
                    Batajnički drum 1<br />
                    11273 Batajnica, Beograd
                  </p>
                  <div className="w-full h-56 bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg hover:shadow-2xl">
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
              </motion.div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-card to-card/50 p-12 rounded-3xl border border-white/10 shadow-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <CalendarIcon className="text-primary w-8 h-8" />
              <h3 className="text-3xl font-bold text-white font-heading">Online Zakazivanje</h3>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300 font-semibold">Vaše Ime</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Petar Petrović" 
                          {...field} 
                          className="bg-black/40 border-white/15 text-white h-12 rounded-xl placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 transition-all" 
                        />
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
                      <FormLabel className="text-gray-300 font-semibold">Broj Telefona</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="060 123 4567" 
                          {...field} 
                          className="bg-black/40 border-white/15 text-white h-12 rounded-xl placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 transition-all" 
                        />
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
                      <FormLabel className="text-gray-300 font-semibold">Marka i Model Vozila</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="npr. Audi A4 2.0 TDI" 
                          {...field} 
                          className="bg-black/40 border-white/15 text-white h-12 rounded-xl placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 transition-all" 
                        />
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
                      <FormLabel className="text-gray-300 font-semibold">Tip Usluge</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/40 border-white/15 text-white h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20 transition-all">
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

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-2xl text-white font-bold h-13 text-lg uppercase tracking-wider rounded-xl shadow-lg transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Slanje...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" /> Pošalji Zahtev
                      </>
                    )}
                  </Button>
                </motion.div>
                
                <p className="text-xs text-center text-gray-500 mt-6 font-light">
                  Klikom na dugme saglasni ste da nas kontaktira povodom zakazivanja servisa.
                </p>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
