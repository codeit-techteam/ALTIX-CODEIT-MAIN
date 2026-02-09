"use client";

import Spline from '@splinetool/react-spline/next';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import RobotModel from "./RobotModel";
import { HeroBackground } from "./HeroBackground";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-[#0b0c10]">
            <HeroBackground />

            {/* Animated Background Gradients */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 left-0 md:left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[100px] md:blur-[128px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-0 right-0 md:right-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent/20 rounded-full blur-[100px] md:blur-[128px] pointer-events-none"
            />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 h-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-20 flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-primary text-xs md:text-sm font-bold tracking-wider uppercase mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Altix Codeit: Innovation at Scale
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
                        Leading <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66fcf1] via-white to-[#45a29e] animate-gradient bg-300%">
                            App Development
                        </span> <br />
                        <span className="text-white">Company</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
                        We are a full-service <strong className="text-white font-semibold">Social Media Agency</strong> and Engineering Powerhouse. We craft premium websites, mobile apps, and GTM strategies to launch & scale your business.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button
                            variant="glow"
                            size="lg"
                            className="w-full sm:w-auto text-lg px-8 py-6 rounded-full"
                            onClick={() => window.open('https://calendly.com/shoaibmustaque10/appointment', '_blank')}
                        >
                            Book a Strategy Call
                        </Button>
                        <Button
                            variant="glass"
                            size="lg"
                            className="w-full sm:w-auto text-lg px-8 py-6 rounded-full border-white/10 hover:bg-white/5"
                            onClick={() => document.getElementById("engineering-showcase")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            View Our Work
                        </Button>
                    </div>
                </motion.div>

                {/* Spline 3D Scene */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-[400px] md:h-[600px] lg:h-[800px] w-full relative z-10 flex items-center justify-center order-first lg:order-last -mt-10 lg:mt-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent z-10 lg:hidden" />
                    <RobotModel />
                </motion.div>
            </div>
        </section>
    );
};
