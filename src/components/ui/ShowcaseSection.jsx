"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Smartphone, Zap, Layout, Bot } from "lucide-react";

export function ShowcaseSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // 3D Tilt Effect Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left - width / 2);
        mouseY.set(clientY - top - height / 2);
    }

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 150, damping: 20 });

    return (
        <section
            id="engineering-showcase"
            ref={containerRef}
            className="relative min-h-[100vh] bg-[#0B0F10] overflow-hidden flex items-center justify-center py-20 px-6"
        >
            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, #333 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#66fcf1]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />

            <motion.div
                className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-16 items-center"
                style={{ opacity }}
            >
                {/* Text Content */}
                <motion.div
                    style={{ y }}
                    className="space-y-8 max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                            Engineering <br />
                            <span className="relative inline-block">
                                <span className="absolute -inset-1 bg-[#66fcf1]/20 blur-xl rounded-lg"></span>
                                <span className="relative text-[#66fcf1]">Apps</span>
                            </span>
                            {" "}&{" "}
                            <span className="text-[#66fcf1]">
                                Web Experiences
                            </span>
                            <br /> That Scale.
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-gray-400 leading-relaxed font-light"
                    >
                        We design and build high-performance web platforms and mobile apps for startups and growing businesses.
                    </motion.p>

                    {/* Modern Feature List */}
                    <div className="grid sm:grid-cols-2 gap-6 pt-6">
                        {[
                            { title: "Web & App Development", icon: Smartphone },
                            { title: "Scalable Architecture", icon: Zap },
                            { title: "Performance-Driven UI", icon: Layout },
                            { title: "AI-Ready Systems", icon: Bot }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (i * 0.1), type: "spring" }}
                                className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors cursor-default group"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#66fcf1]/10 flex items-center justify-center text-[#66fcf1] group-hover:scale-110 transition-transform">
                                    <item.icon size={20} />
                                </div>
                                <span className="text-gray-200 font-medium">{item.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 3D Video Container */}
                <div
                    className="relative perspective-1000"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                        mouseX.set(0);
                        mouseY.set(0);
                    }}
                >
                    <motion.div
                        style={{ rotateX, rotateY }}
                        className="relative z-10 transform-style-3d group"
                    >
                        {/* Glass Container */}
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-[#66fcf1]/10">
                            {/* Video */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                            >
                                <source src="/images/v.mp4" type="video/mp4" />
                            </video>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F10]/80 via-transparent to-transparent pointer-events-none" />

                            {/* Floating Play Button/Badge */}
                            <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-bounce-slow">
                                <div className="w-4 h-4 bg-[#66fcf1] rounded-full shadow-[0_0_15px_#66fcf1]" />
                            </div>
                        </div>

                        {/* Back Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#66fcf1] to-blue-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
}
