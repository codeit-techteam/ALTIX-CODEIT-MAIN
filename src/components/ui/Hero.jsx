"use client";

import Spline from '@splinetool/react-spline/next';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import RobotModel from "./RobotModel";
import { HeroBackground } from "./HeroBackground";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-[#0b0c10]">
            <HeroBackground />
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-20"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                        Altix Codeit: Innovation at Scale
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                        Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">App Development Company</span> <br />
                        & Web Agency
                    </h1>
                    <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                        We are a full-service <strong>Social Media Agency</strong> and Engineering Powerhouse. We craft premium websites, mobile apps, and GTM strategies to launch & scale your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="glow" size="lg" onClick={() => console.log("Book")}>
                            Book a Strategy Call
                        </Button>
                        <Button variant="glass" size="lg">
                            View Our Work
                        </Button>
                    </div>
                </motion.div>

                {/* Spline 3D Scene */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-[600px] lg:h-[800px] w-full absolute lg:relative top-0 right-0 z-10 lg:translate-x-20 flex items-center justify-center"
                >
                    <RobotModel />

                </motion.div>
            </div>
        </section>
    );
};
