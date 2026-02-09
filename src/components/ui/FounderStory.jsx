"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeUp } from "./ScrollAnimations";

export const FounderStory = () => {
    return (
        <section className="container mx-auto px-6 mb-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 group">
                        <Image
                            src="/images/Sohaib_Codeit.jpeg" // Placeholder Professional Image
                            alt="Shoaib Mustaque - Founder of Altix Codeit"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-60" />

                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                </motion.div>

                {/* Text Content */}
                <div className="order-1 lg:order-2">
                    <FadeUp>
                        <h4 className="text-primary font-mono text-sm mb-4 tracking-wider uppercase flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            The Founder's Story
                        </h4>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Building the bridge between <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">vision and execution.</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                            <p>
                                <span className="text-white font-medium">Shoaib Mustaque</span> didn't start Altix Codeit to build another development agency.
                                As an IIT graduate with years of engineering experience, he watched too many brilliant business ideas collapse—not because they lacked potential, but because they lacked execution.
                            </p>
                            <p>
                                Founders were stuck with delayed timelines, bloated budgets, and tech teams that didn't understand urgency.
                                The problem wasn't just bad code. <span className="text-white italic">It was broken partnerships.</span>
                            </p>
                            <p>
                                That's why <span className="text-white font-medium">Altix Codeit</span> was founded in 2025.
                            </p>
                            <p>
                                Shoaib built this company on a simple belief: technology should accelerate your business, not hold it back.
                                Every line of code should serve a purpose. Every feature should drive results. Every partnership should feel like having a co-founder in your corner.
                            </p>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm my-8">
                                <p className="text-primary/90 italic">
                                    "At Altix Codeit, we don't just deliver projects—we deliver outcomes. We combine IIT-level engineering rigor with a founder's mindset: fast, focused, and obsessed with execution."
                                </p>
                            </div>
                            <p>
                                Because when you're building something that matters, you need a partner who treats your vision like their own.
                            </p>
                            <p className="font-medium text-white pt-2">
                                That's the Altix Codeit difference. <br />
                                <span className="text-primary">Engineering excellence. Founder empathy. Relentless execution.</span>
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
};
