"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const AboutCTA = () => {
    return (
        <section className="container mx-auto px-6 mb-32 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-[900px] mx-auto"
            >
                <div className="relative rounded-[3rem] p-12 md:p-24 overflow-hidden group">
                    {/* Glassmorphism Background layer */}
                    <div className="absolute inset-0 bg-[#0b0c10]/80 backdrop-blur-xl border border-primary/20 rounded-[3rem] shadow-[0_0_50px_-10px_rgba(102,252,241,0.1)] transition-all duration-500 group-hover:shadow-[0_0_80px_-10px_rgba(102,252,241,0.2)]" />

                    {/* Ambient Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
                        >
                            Ready to engineer <br /> something great?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed"
                        >
                            We take on a limited number of clients per quarter to ensure deep focus. Let's see if we're a match.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-col items-center gap-6"
                        >
                            <Button
                                variant="glow"
                                size="lg"
                                className="text-lg px-12 py-6 h-auto rounded-full shadow-[0_10px_30px_-10px_rgba(102,252,241,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(102,252,241,0.6)] transition-all duration-300 transform hover:-translate-y-1"
                                onClick={() => window.open('https://calendly.com/shoaibmustaque10/appointment', '_blank')}
                            >
                                Book a Strategy Call
                            </Button>

                            <div className="flex gap-8 text-sm text-gray-400">
                                <a href="/services" className="hover:text-[#66fcf1] transition-colors border-b border-transparent hover:border-[#66fcf1]">Explore Services</a>
                                <a href="/blogs" className="hover:text-[#66fcf1] transition-colors border-b border-transparent hover:border-[#66fcf1]">Read Engineering Blog</a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
