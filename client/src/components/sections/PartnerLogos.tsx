import { motion } from "framer-motion";

const partners = [
    { name: "Motul", color: "#E30613" },
    { name: "Bosch", color: "#E20015" },
    { name: "Mann-Filter", color: "#FFD700" },
    { name: "Continental", color: "#FFA500" },
    { name: "Brembo", color: "#FF0000" },
    { name: "NGK", color: "#00A651" },
    { name: "Bilstein", color: "#FFD700" },
    { name: "SKF", color: "#005DAA" },
];

export function PartnerLogos() {
    // Triple the partners for even smoother seamless loop on large screens
    const tripledPartners = [...partners, ...partners, ...partners];

    return (
        <section className="py-8 bg-[#030303] relative overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303] z-10 pointer-events-none" />

            <motion.div
                className="flex gap-20 whitespace-nowrap"
                animate={{
                    x: ["0%", "-33.33%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 15,
                        ease: "linear",
                    },
                }}
            >
                {tripledPartners.map((partner, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 text-gray-500 hover:text-white transition-colors duration-300 cursor-default group py-2"
                    >
                        <div
                            className="w-2.5 h-2.5 rounded-full transition-all duration-300 group-hover:scale-125 opacity-70 group-hover:opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                            style={{ backgroundColor: partner.color }}
                        />
                        <span className="text-xl font-heading font-bold tracking-widest uppercase italic">
                            {partner.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
