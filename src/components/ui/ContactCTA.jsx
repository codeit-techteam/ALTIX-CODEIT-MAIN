"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const ContactCTA = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden flex items-center justify-center">
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Large Text */}
                <div className="flex-1">
                    <h2 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tight uppercase">
                        Let's Make <br />
                        Something <br />
                        Great!
                    </h2>
                </div>

                {/* Circular Button */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group cursor-pointer"
                >
                    <Link href="/contact" className="block relative">
                        <div className="w-48 h-48 md:w-56 md:h-56 bg-[#CCFF00] rounded-full flex flex-col items-center justify-center text-black font-bold text-xl md:text-2xl tracking-wider transition-transform duration-300 group-hover:rotate-12">
                            <span className="mb-1">CONTACT</span>
                            <span className="flex items-center gap-1">
                                US <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                            </span>
                        </div>
                    </Link>
                </motion.div>
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
};
