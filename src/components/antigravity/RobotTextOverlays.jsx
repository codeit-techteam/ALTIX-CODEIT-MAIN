"use client";

import { motion, useTransform } from "framer-motion";

export function RobotTextOverlays({ sections, scrollYProgress }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10 p-6 pt-24">
            {sections.map((section, i) => (
                <OverlayItem
                    key={i}
                    section={section}
                    scrollYProgress={scrollYProgress}
                />
            ))}
        </div>
    );
}

function OverlayItem({ section, scrollYProgress }) {
    const startTime = section.range[0];
    const endTime = section.range[1];
    const center = (startTime + endTime) / 2;

    // Duration of the "hold" phase in the middle
    const holdDuration = (endTime - startTime) * 0.2;
    const entryEnd = center - holdDuration / 2;
    const exitStart = center + holdDuration / 2;

    // --- Opacity ---
    // 0 -> 1 (entry) -> 1 (hold) -> 0 (exit)
    const opacity = useTransform(
        scrollYProgress,
        [startTime, entryEnd, exitStart, endTime],
        [0, 1, 1, 0]
    );

    // --- Y Axis ---
    // 40px (entry) -> 0px (hold) -> -30px (exit)
    const y = useTransform(
        scrollYProgress,
        [startTime, entryEnd, exitStart, endTime],
        [40, 0, 0, -30]
    );

    // --- Scale ---
    // 0.96 (entry) -> 1 (hold) -> 1 (exit)
    const scale = useTransform(
        scrollYProgress,
        [startTime, entryEnd],
        [0.96, 1]
    );

    return (
        <motion.div
            className="absolute text-center max-w-5xl w-full flex flex-col items-center gap-6 px-4"
            style={{ opacity, y, scale }}
        >
            {/* Subtle Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] -z-10 pointer-events-none">
                <div className="w-full h-full bg-[#6AE3FF]/10 rounded-full blur-[100px]" />
            </div>

            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-tight">
                {section.title.split(" ").map((word, i) => {
                    // Check if the word should be accented (simple heuristic or manual check)
                    const isAccent = word.toLowerCase().includes("tech") ||
                        word.toLowerCase().includes("ai") ||
                        word.toLowerCase().includes("future") ||
                        word.toLowerCase().includes("codeit");

                    return isAccent ? (
                        <span key={i} className="text-[#6AE3FF] drop-shadow-[0_0_15px_rgba(106,227,255,0.3)] mx-2">
                            {word}
                        </span>
                    ) : (
                        <span key={i} className="mx-2">{word}</span>
                    );
                })}
            </h1>

            <p className="text-lg md:text-2xl text-gray-400 font-medium tracking-wide max-w-2xl">
                {section.subtitle}
            </p>
        </motion.div>
    );
}
