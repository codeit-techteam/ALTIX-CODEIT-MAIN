"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MessageSquare, Lightbulb, FileText, Code } from "lucide-react";
import { FadeUp } from "./ScrollAnimations";

const steps = [
    {
        icon: MessageSquare,
        title: "Consultation",
        description: "Every project begins with a one-on-one meeting with our IIT consultant who understands your goals and product vision.",
    },
    {
        icon: Lightbulb,
        title: "Strategy",
        description: "Our experts brainstorm ideas and craft a smart, scalable strategy, identifying the best features and technology for your product.",
    },
    {
        icon: FileText,
        title: "Scope of Work",
        description: "We provide a clear roadmap outlining deliverables, timelines, and milestones ensuring full transparency.",
    },
    {
        icon: Code,
        title: "Development",
        description: "Our team designs, develops, and iterates using agile practices, keeping you updated throughout the process.",
    },
];

export const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 70%", "end 50%"],
    });

    // COMPRESSION FIX: Ensure animation finishes well before the scroll end (at 90% progress)
    const adjustedProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    const scaleLine = useSpring(adjustedProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative py-32 bg-[#0b0c10] overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <FadeUp>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-24 text-center tracking-tight">How We Work</h2>
                </FadeUp>

                <div className="relative">
                    {/* Desktop Timeline Line */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-white/5 rounded-full">
                        <motion.div
                            style={{ scaleX: scaleLine, transformOrigin: "left" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50 shadow-[0_0_20px_rgba(16,185,129,0.5)] rounded-full"
                        />
                    </div>

                    {/* Mobile Timeline Line */}
                    <div className="md:hidden absolute top-0 bottom-0 left-8 w-1 bg-white/5 rounded-full">
                        <motion.div
                            style={{ scaleY: scaleLine, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/50 via-primary to-primary/50 shadow-[0_0_20px_rgba(16,185,129,0.5)] rounded-full"
                        />
                    </div>

                    <div className="grid md:grid-cols-4 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <TimelineNode
                                key={index}
                                step={step}
                                index={index}
                                total={steps.length}
                                progress={adjustedProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineNode = ({ step, index, total, progress }) => {
    // Determine the scroll range where this node becomes active
    const rangeStart = index * (1 / total); // e.g., 0, 0.25, 0.5, 0.75
    const rangeEnd = rangeStart + (1 / total); // Full step duration

    // Map scroll progress to animations
    const opacity = useTransform(progress, [rangeStart, rangeEnd], [0.2, 1]);
    const scale = useTransform(progress, [rangeStart, rangeEnd], [0.8, 1]);
    const y = useTransform(progress, [rangeStart, rangeEnd], [20, 0]);
    const glowOpacity = useTransform(progress, [rangeStart, rangeEnd], [0, 1]);

    return (
        <div className="relative pl-24 md:pl-0 md:pt-24 group">
            {/* Node Point */}
            <div className="absolute left-8 md:left-1/2 top-0 md:top-12 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                    style={{ scale, opacity }}
                    className="w-4 h-4 md:w-6 md:h-6 bg-[#0b0c10] border-2 border-primary rounded-full relative"
                >
                    <motion.div
                        style={{ opacity: glowOpacity }}
                        className="absolute inset-0 bg-primary/40 rounded-full animate-ping"
                    />
                    <motion.div
                        style={{ opacity: glowOpacity }}
                        className="absolute inset-0 bg-primary/20 rounded-full blur-md"
                    />
                </motion.div>
            </div>

            {/* Content Card */}
            <motion.div
                style={{ opacity, y, scale }}
                className="p-8 rounded-[2rem] border border-white/10 bg-[#0A0A0A] hover:bg-[#111] transition-all duration-300 relative group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-10px_rgba(102,252,241,0.15)]"
            >
                {/* Glow Border Effect */}
                <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />

                <div className="w-14 h-14 bg-[#151515] border border-white/5 rounded-2xl flex items-center justify-center text-gray-300 mb-6 group-hover:scale-110 group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <step.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {step.description}
                </p>
            </motion.div>
        </div>
    );
};
