"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PromoBanner() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-[#080808] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
                >
                    <div className="flex flex-col md:flex-row items-center">

                        {/* Content Left */}
                        <div className="w-full md:w-1/2 p-10 md:p-16 z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Want to build <span className="text-[#66fcf1]">scalable software</span> for your business?
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-md">
                                You can hire your own dedicated Codeit engineering team for your startup, enterprise, or new venture.
                            </p>

                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#66fcf1] hover:bg-[#5cdbd1] text-black font-semibold text-lg py-4 px-8 rounded-full inline-flex items-center gap-2 shadow-[0_0_20px_rgba(102,252,241,0.3)] transition-all"
                                >
                                    Contact Us
                                    <ArrowUpRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                        </div>

                        {/* Image Right */}
                        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
                            {/* Abstract Background Effect in Image Area */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] to-transparent z-10 md:w-24" />

                            <Image
                                src="/promo-banner-new.png"
                                alt="Codeit Engineer"
                                fill
                                className="object-cover object-center"
                            />

                            {/* Gradient Overlay for Text Readability on Mobile if needed, or visual style */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent md:hidden" />
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
