"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FadeUp } from "./ScrollAnimations";

const journeyData = [
    {
        year: "2021",
        title: "Inception",
        description: "Founded in a dorm room at IIT. The vision was simple: stop writing spaghetti code and start engineering robust systems.",
        align: "right",
    },
    {
        year: "2022",
        title: "First Enterprise Win",
        description: "Secured our first Fortune 500 contract. Delivered a microservices architecture that reduced their server costs by 40%.",
        align: "left",
    },
    {
        year: "2023",
        title: "Global Expansion",
        description: "Expanded operations to the US and UK. Launched the 'Codeit Accelerator' for early-stage VC startups.",
        align: "right",
    },
];

export const Journey = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative py-32 bg-[#0b0c10] overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <FadeUp>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-24 tracking-tight">Our Journey</h2>
                </FadeUp>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full -translate-x-1/2">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/50 via-primary to-primary/50 shadow-[0_0_20px_rgba(16,185,129,0.5)] rounded-full"
                        />
                    </div>

                    <div className="space-y-24 md:space-y-32">
                        {journeyData.map((item, index) => (
                            <JourneyItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const JourneyItem = ({ item, index }) => {
    const isLeft = index % 2 !== 0; // 2021 (0) -> right, 2022 (1) -> left, 2023 (2) -> right (Original request: 2021 Inception (Right), 2022 Win (Left))
    // Wait, typically timelines alternate. Request says:
    // 2021: Text block on right. (So node is center, text right)
    // 2022: Text block on left.
    // 2023: Text block on right.
    // My isLeft logic: index 0 (even) -> Right aligned text?
    // Let's rely on standard logic: Even index = Text Right, Odd index = Text Left?

    // Actually, visually:
    // Line in middle.
    // Node in middle.
    // Text on one side, Year on other side? Or Year above text?
    // Request says: "Year displayed inside a glowing pill... Text block appears on the right/left"
    // Let's assume Year and Title/Desc are on the same side for clarity, or alternating.
    // Let's strictly follow: "Text block appears on the right side" for 2021.

    const textOnRight = index % 2 === 0;

    return (
        <div className={`relative flex items-center gap-8 md:gap-16 ${textOnRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* Mobile Layout: Everything aligns left largely, but we keep the timeline on left */}
            {/* Desktop Layout: Flexible row */}

            {/* Empty Space for alignment on Desktop */}
            <div className="hidden md:block flex-1" />

            {/* Central Node */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-[#0b0c10] border-4 border-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(102,252,241,0.5)]"
            >
                <div className="w-2 h-2 md:w-4 md:h-4 bg-white rounded-full" />
            </motion.div>

            {/* Content Side */}
            <div className="flex-1 pl-16 md:pl-0 text-left">
                <motion.div
                    initial={{ opacity: 0, x: textOnRight ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={`flex flex-col ${textOnRight ? 'md:items-start' : 'md:items-end'} items-start`}>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4 border border-primary/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                        >
                            {item.year}
                        </motion.span>

                        <div className={`p-8 rounded-[2rem] border border-white/10 bg-[#0A0A0A] hover:bg-[#111] transition-all duration-500 relative ${textOnRight ? 'text-left' : 'md:text-right text-left'} group hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(102,252,241,0.15)]`}>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-gray-400 text-base leading-relaxed max-w-lg group-hover:text-gray-300">{item.description}</p>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};
