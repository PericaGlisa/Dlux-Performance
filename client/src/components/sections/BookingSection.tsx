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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { srLatn } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

import { contactFormSchema } from "@shared/schema";

export function BookingSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      vehicle: "",
      serviceType: "mali-servis",
      date: undefined,
      time: undefined,
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);
    try {
      // Formiranje teksta za email
      const serviceLabels: Record<string, string> = {
        "mali-servis": "Mali Servis",
        "veliki-servis": "Veliki Servis",
        "dijagnostika": "Kompjuterska Dijagnostika",
        "kocnice": "Servis Kočnica",
        "trap": "Pregled Trapa",
        "delovi": "Upit za delove / Porudžbina",
        "ostalo": "Ostalo"
      };

      const subject = encodeURIComponent(`Zakazivanje: ${serviceLabels[values.serviceType] || values.serviceType} - ${values.name}`);
      
      let bodyText = `Ime: ${values.name}\n`;
      bodyText += `Telefon: ${values.phone}\n`;
      bodyText += `Vozilo: ${values.vehicle}\n`;
      bodyText += `Usluga: ${serviceLabels[values.serviceType] || values.serviceType}\n`;
      
      if (values.date) {
        bodyText += `Datum: ${format(new Date(values.date), "PPP", { locale: srLatn })}\n`;
      }
      if (values.time) {
        bodyText += `Vreme: ${values.time}\n`;
      }
      if (values.message) {
        bodyText += `\nNapomena:\n${values.message}\n`;
      }

      const mailtoUrl = `mailto:info@dlux-performance.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
      
      // Otvaranje mail klijenta
      window.location.href = mailtoUrl;

      toast({
        title: "Mail klijent otvoren!",
        description: "Vaša poruka je pripremljena u vašem email programu.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Greška",
        description: "Došlo je do greške prilikom pripreme poruke.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="zakazivanje" className="py-32 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -right-1/3 w-2/3 h-2/3 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-fluid-h2 font-heading font-bold text-white mb-8 tracking-tight">
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
                    Dragutina Đorđevića 22, Šangaj<br />
                    11273 Batajnica
                  </p>
                  <div className="relative w-full h-56 bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg hover:shadow-2xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.9642533215!2d20.2703816!3d44.9036111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a5e3a4e9b9c9f%3A0x8e8e8e8e8e8e8e8e!2sBatajni%C4%8Dki%20drum%201%2C%20Beograd!5e0!3m2!1ssr!2srs!4v1703714000000!5m2!1ssr!2srs"
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
            className="bg-gradient-to-br from-card to-card/50 p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-2xl"
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
                          <SelectItem value="delovi">Upit za delove / Porudžbina</SelectItem>
                          <SelectItem value="ostalo">Ostalo</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-gray-300 font-semibold">Željeni Datum (Opciono)</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "h-12 w-full pl-3 text-left font-normal bg-black/40 border-white/15 text-white hover:bg-white/5 hover:text-white rounded-xl focus:border-primary/50 focus:ring-primary/20 transition-all",
                                  !field.value && "text-gray-600"
                                )}
                              >
                                {field.value ? (
                                  format(new Date(field.value), "PPP", { locale: srLatn })
                                ) : (
                                  <span>Izaberite datum</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-[calc(100vw-6rem)] sm:w-[240px] p-0 bg-card border-white/10 text-white" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value ? new Date(field.value) : undefined}
                              onSelect={(date) => field.onChange(date ? date.toISOString() : undefined)}
                              disabled={(date) =>
                                date < new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                              className="bg-card text-white pointer-events-auto w-full p-1 [--cell-size:1.6rem] sm:[--cell-size:1.75rem]"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-semibold">Vreme (Opciono)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/40 border-white/15 text-white h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20 transition-all">
                              <SelectValue placeholder="Izaberite vreme" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-white/10 text-white max-h-[200px]">
                            {Array.from({ length: 21 }).map((_, i) => {
                              const hour = 8 + Math.floor(i / 2);
                              const minute = i % 2 === 0 ? "00" : "30";
                              const time = `${hour.toString().padStart(2, "0")}:${minute}`;
                              return (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300 font-semibold">Dodatna napomena / Poruka (Opciono)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Navedite detalje, simptome vozila ili specifične delove koje tražite..."
                          {...field}
                          className="bg-black/40 border-white/15 text-white min-h-[100px] rounded-xl placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 transition-all resize-none"
                        />
                      </FormControl>
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
                  Klikom na dugme saglasni ste da nas kontaktirate povodom zakazivanja servisa.
                </p>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
