"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, TrendingUp, Award, Zap } from "lucide-react";

export const TechAdvantage = () => {
    return (
        <section className="container mx-auto px-6 mb-32 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative rounded-[3rem] overflow-hidden bg-[#0b0c10] border border-white/5"
            >
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-40 pointer-events-none" />

                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className="relative h-[500px] lg:h-auto min-h-[600px] group overflow-hidden">
                        <Image
                            src="/images/IIT_Backed.jpeg"
                            alt="Engineering Team at Work"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />

                    </div>

                    {/* Content Side */}
                    <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center relative bg-white/[0.02] backdrop-blur-sm">
                        <div className="absolute left-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                    <AwardsIcon size={16} />
                                </span>
                                <span className="text-primary font-bold tracking-wider uppercase text-sm">The Engineering Advantage</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                From 0 to 1, <span className="text-[#66fcf1]">Repeatedly.</span>
                            </h2>

                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light mb-12">
                                <p>
                                    Altix Codeit wasn't started by career consultants. It was forged by engineers who have been in the trenches. Our leadership hails from <strong className="text-white font-medium">top-tier technology institutions</strong>, bringing a level of mathematical rigor and engineering discipline that is rare in the agency world.
                                </p>
                                <p>
                                    Before Altix, we built and exited our own startups. We know the pressure of a burn rate, the anxiety of a product launch, and the thrill of the first 10,000 users.
                                </p>
                            </div>

                            {/* Stats Grid Removed */}

                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

const AwardsIcon = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
);
