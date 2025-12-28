import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Award, Clock, Wrench } from "lucide-react";

const stats = [
    { icon: Users, value: 2500, suffix: "+", label: "Zadovoljnih Klijenata" },
    { icon: Award, value: 10, suffix: "+", label: "Godina Iskustva" },
    { icon: Clock, value: 45, suffix: "min", label: "Prosečan Servis" },
    { icon: Wrench, value: 15000, suffix: "+", label: "Završenih Servisa" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
        const stepValue = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += stepValue;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export function Stats() {
    return (
        <section className="py-20 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="text-center group"
                        >
                            <motion.div
                                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-colors duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <stat.icon className="w-7 h-7 text-primary" />
                            </motion.div>
                            <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                                <CountUp value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
