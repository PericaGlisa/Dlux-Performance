import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for page to load then animate out - Reduced duration for faster perceived performance
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10000] bg-background flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
                    }}
                >
                    {/* Background glow elements - Simplified for preloader performance */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"
                            animate={{
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="relative flex flex-col items-center gap-8">
                        {/* Logo */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.div
                                className="text-4xl md:text-5xl font-heading font-bold tracking-tighter text-white"
                                animate={{
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                D-LUX
                            </motion.div>
                            <motion.div
                                className="text-2xl md:text-3xl font-heading font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                PERFORMANCE
                            </motion.div>
                        </motion.div>

                        {/* Loading bar */}
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.8, ease: "easeInOut" }}
                            />
                        </div>

                        {/* Loading text */}
                        <motion.p
                            className="text-xs text-gray-500 uppercase tracking-[0.3em] font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Premium Auto Care
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
