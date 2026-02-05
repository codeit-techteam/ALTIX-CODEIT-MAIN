"use client";

import { motion } from "framer-motion";

const clients = [
    { name: "Biogetica", color: "#ffffff" },
    { name: "Desiacres", color: "#e3a008" }, // Gold-ish
    { name: "Leisurebites", color: "#ff5722" }, // Orange
    { name: "Hibaah", color: "#e91e63" }, // Pink
    { name: "JiJi Cupid", color: "#9c27b0" }, // Purple
    { name: "Cruze", color: "#2196f3" }, // Blue
    { name: "Gaadigo", color: "#4caf50" }, // Green
    { name: "Dietpulse", color: "#ffeb3b" }, // Yellow
    { name: "Beautify", color: "#795548" }, // Brown
    { name: "India Floats", color: "#00bcd4" }, // Cyan
];

// Duplicate list for seamless loop
const marqueeClients = [...clients, ...clients, ...clients];

export function ClientsSection() {
    return (
        <section className="py-20 bg-[#020202] overflow-hidden relative">
            <div className="container mx-auto px-6 text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white/80">
                    Trusted by <span className="text-white">20+ Innovative Startups</span>
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="relative flex w-full overflow-hidden mask-linear-fade">
                {/* Left/Right Fade Masks */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020202] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020202] to-transparent z-10" />

                <motion.div
                    className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Adjust speed
                    }}
                >
                    {marqueeClients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer"
                        >
                            {/* Fallback "Logo" as stylized text */}
                            <span
                                className="text-2xl md:text-4xl font-black tracking-tight"
                                style={{ color: client.color }} // Shows color on hover (handled by grayscale logic) or always if we remove grayscale
                            >
                                {client.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
