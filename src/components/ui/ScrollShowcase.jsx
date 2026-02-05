"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const ScrollShowcase = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Track scroll progress within this tall section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- Animation Sequence ---
    // 1. Zoom Out Phase (0% - 35% scroll)
    const deviceScale = useTransform(
        scrollYProgress,
        [0, 0.3],
        isMobile ? [1.1, 1] : [3, 1]
    );

    // 2. Slide Right Phase (35% - 70% scroll)
    // Mobile: Stay centered (0%). Desktop: Move right (35%).
    const deviceX = useTransform(
        scrollYProgress,
        [0.35, 0.7],
        isMobile ? ["0%", "0%"] : ["0%", "35%"]
    );

    // 3. Text Reveal Phase
    const textOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.45, 0.7], [30, 0]);


    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.play().catch(() => { });
    }, []);

    return (
        <section ref={containerRef} className="h-[350vh] bg-[#0B0F10] relative">

            {/* Sticky Viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-1000">

                {/* Background Ambience */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F10] via-[#111] to-[#0B0F10] z-0" />

                <div className="container mx-auto px-6 relative h-full flex flex-col md:flex-row items-center justify-center z-10">

                    {/* Text Content (Left) */}
                    <motion.div
                        style={{ opacity: textOpacity, y: textY }}
                        className="relative md:absolute z-30 max-w-lg pointer-events-none text-center px-6 mb-8 md:mb-0 md:top-1/2 md:left-16 md:right-auto md:text-left md:px-0 md:-translate-y-1/2"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Pixel Perfect <br />
                            <span className="text-primary">Engineering</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed text-shadow-sm">
                            Every pixel is crafted with precision. Our engineering standards ensure your application looks and feels premium across all devices.
                        </p>
                    </motion.div>

                    {/* Device Wrapper */}
                    <motion.div
                        style={{ x: deviceX, scale: deviceScale }}
                        className="relative w-full max-w-[900px] z-20 origin-center"
                    >
                        {/* Device Frame + Video Group */}
                        <div className="relative aspect-[16/10] w-full">

                            {/* 
                                LAYER ORDER:
                                1. VIDEO (Bottom)
                                2. DEVICE FRAME (Top) - Assumes frame has transparent screen
                            */}

                            {/* Video Screen */}
                            {/* 
                                Adjusted dimensions to prevent leak.
                                Reduced height from 89% to 84% to avoid bottom overlap.
                                Top: 4% seemed slightly high, 5% is standard.
                            */}
                            <div className="absolute top-[5%] left-[11.5%] w-[77%] h-[60%] z-0 overflow-hidden bg-black/50">
                                <video
                                    ref={videoRef}
                                    src="/vedio2.mp4"
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Device Frame Image */}
                            <div className="relative z-10 pointer-events-none">
                                <Image
                                    src="/mac.png"
                                    alt="Device Frame"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto drop-shadow-2xl"
                                    priority
                                />
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
