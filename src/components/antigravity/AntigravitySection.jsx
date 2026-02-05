"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { RobotScrollCanvas } from "./RobotScrollCanvas";
import { RobotTextOverlays } from "./RobotTextOverlays";
import { robotData } from "@/data/robot";

export function AntigravitySection() {
    const containerRef = useRef(null);

    // Track scroll progress relative to this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[500vh] bg-[#050505]">
            {/* 
         Inside this 500vh container:
         1. The Canvas is sticky, so it stays fixed relative to viewport while we scroll correct 500vh.
         2. The TextOverlays use the passed scrollYProgress (0 to 1) to animate.
      */}
            <RobotScrollCanvas data={robotData} scrollYProgress={scrollYProgress} />
            <RobotTextOverlays sections={robotData.sections} scrollYProgress={scrollYProgress} />
        </section>
    );
}
