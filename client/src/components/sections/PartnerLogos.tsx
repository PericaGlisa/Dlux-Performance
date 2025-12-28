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
    // Double the partners for seamless loop
    const doubledPartners = [...partners, ...partners];

    return (
        <section className="py-12 bg-background/50 relative overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

            <motion.div
                className="flex gap-16 whitespace-nowrap"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear",
                    },
                }}
            >
                {doubledPartners.map((partner, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-default group"
                    >
                        <div
                            className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125"
                            style={{ backgroundColor: partner.color }}
                        />
                        <span className="text-lg font-heading font-bold tracking-wide uppercase">
                            {partner.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
