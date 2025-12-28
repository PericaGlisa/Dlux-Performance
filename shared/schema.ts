import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Ime mora imati bar 2 karaktera." }),
  phone: z.string().min(6, { message: "Unesite ispravan broj telefona." }),
  vehicle: z.string().min(2, { message: "Unesite marku i model vozila." }),
  serviceType: z.string().min(1, { message: "Izaberite tip usluge." }),
  date: z.string().optional(),
  time: z.string().optional(),
  message: z.string().optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
