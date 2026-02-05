"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BookingCTA() {
    return (
        <section className="py-32 relative overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Contact Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 backdrop-blur-sm shadow-sm">
                        Contact
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Ready to <span className="text-primary">Transform Your Vision?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 mb-12"
                >
                    Schedule a consultation with our experts
                </motion.p>

                {/* Button & Arrow Container */}
                <div className="relative">
                    {/* Dashed Arrow SVG (Decorative) */}
                    <motion.div
                        initial={{ opacity: 0, pathLength: 0 }}
                        whileInView={{ opacity: 1, pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute -top-12 -right-32 hidden md:block w-32 h-32 pointer-events-none"
                    >
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 10 C 100 10, 80 80, 20 80"
                                stroke="#22c55e"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                fill="none"
                                markerEnd="url(#arrowhead)"
                            />
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
                                </marker>
                            </defs>
                        </svg>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link href="https://calendly.com/shoaibmustaque10/appointment" target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#009b50] hover:bg-[#007a3d] text-white text-lg font-semibold py-4 px-10 rounded-full shadow-lg shadow-green-900/20 transition-all duration-300">
                                Book a 30-min call
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 text-sm"
                >
                    It's 100% <span className="text-[#009b50] font-medium">free</span>
                </motion.p>

            </div>
        </section>
    );
}
