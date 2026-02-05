"use client";

import { motion } from "framer-motion";
import { Lightbulb, FileText, MonitorPlay, Share2, TrendingUp, BarChart, ArrowRight, BrainCircuit } from "lucide-react";

const steps = [
    {
        icon: Lightbulb,
        title: "Client Vision",
        subtitle: "Understanding Goals",
        color: "text-white",
        border: "border-white/20",
        glow: "shadow-white/5",
    },
    {
        icon: BrainCircuit,
        title: "Idea & Brand",
        subtitle: "Understanding",
        color: "text-green-400",
        border: "border-green-500/50",
        glow: "shadow-green-500/20",
    },
    {
        icon: FileText,
        title: "Content Strategy",
        subtitle: "& Planning",
        color: "text-cyan-400",
        border: "border-cyan-500/50",
        glow: "shadow-cyan-500/20",
    },
    {
        icon: MonitorPlay,
        title: "Content Creation",
        subtitle: "& Video Editing",
        color: "text-purple-400",
        border: "border-purple-500/50",
        glow: "shadow-purple-500/20",
    },
    {
        icon: Share2,
        title: "Posting &",
        subtitle: "Distribution",
        color: "text-blue-400",
        border: "border-blue-500/50",
        glow: "shadow-blue-500/20",
    },
    {
        icon: TrendingUp,
        title: "Growth &",
        subtitle: "Optimization",
        color: "text-pink-400",
        border: "border-pink-500/50",
        glow: "shadow-pink-500/20",
    },
    {
        icon: BarChart,
        title: "Analytics",
        subtitle: "Performance",
        color: "text-white",
        border: "border-white/20",
        glow: "shadow-white/5",
    },
];

export const SocialMediaFlow = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <h4 className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-4">Visual Flow</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Social Media Growth <br />
                        <span className="text-white">& Content Execution</span>
                    </h2>
                </div>

                {/* Process Flow */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-y-1/2 z-0 opacity-30" />

                    <div
                        className="flex flex-col lg:flex-row gap-8 lg:justify-between items-center relative z-10 overflow-x-auto pb-12 lg:pb-0 px-12 md:px-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] cursor-grab active:cursor-grabbing"
                        style={{
                            maskImage: "linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)",
                            WebkitMaskImage: "linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)"
                        }}
                    >
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col lg:flex-row items-center shrink-0">

                                {/* Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className={`w-40 h-40 md:w-44 md:h-44 rounded-3xl ${step.border} border bg-[#0A0A0A] flex flex-col items-center justify-center text-center p-4 relative group hover:-translate-y-2 transition-transform duration-300 shadow-xl ${step.glow} select-none`}
                                >
                                    <div className={`mb-3 ${step.color}`}>
                                        <step.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className={`text-sm font-bold ${step.color} leading-tight`}>
                                        {step.title}
                                    </h3>
                                    {step.subtitle && (
                                        <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wide">
                                            {step.subtitle}
                                        </p>
                                    )}

                                    {/* Glow Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none`} />
                                </motion.div>

                                {/* Arrow (except last item) */}
                                {index < steps.length - 1 && (
                                    <div className="my-4 lg:my-0 lg:mx-4 text-gray-600 shrink-0">
                                        <ArrowRight className="rotate-90 lg:rotate-0 w-6 h-6 opacity-30" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Final Outcome Label */}
                    <div className="text-center mt-12">
                        <span className="text-xl font-bold text-white tracking-widest uppercase">Final Outcome</span>
                    </div>

                </div>
            </div>
        </section>
    );
};
