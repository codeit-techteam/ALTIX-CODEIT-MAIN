"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

export function RobotScrollCanvas({ data, scrollYProgress }) {
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        // preload frames
        for (let i = 1; i <= data.totalFrames; i++) {
            const img = new Image();
            // Since we know the files are in public/robo/, and data.folderPath is "/robo"
            // we need to make sure we construct the path correctly.
            // Assuming data.folderPath is "/robo" and files are 1.jpg, 2.jpg...
            // Note: The user provided code used `${data.folderPath}/${i}.jpg`
            // But also showed `ezgif-frame-001.jpg` in the output earlier!
            // Wait, the ls output showed `ezgif-frame-001.jpg`.
            // The user provided code assumed `${i}.jpg` (1.jpg, 2.jpg).
            // I NEED TO CHECK THE FILE NAMES AGAIN CAREFULLY.
            // The ls output was:
            // ezgif-frame-001.jpg
            // ezgif-frame-002.jpg
            // ...
            // So I must adjust the image loading logic to match the actual filenames.
            // "ezgif-frame-" + i.toString().padStart(3, '0') + ".jpg"

            const filename = `ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
            img.src = `${data.folderPath}/${filename}`;
            imagesRef.current.push(img);
        }

        const render = () => {
            // scrollYProgress is a MotionValue 0-1 from the parent
            const progress = scrollYProgress.get();

            // Clamp progress to 0-1 just in case
            const clampedProgress = Math.max(0, Math.min(1, progress));

            const frame = Math.min(
                data.totalFrames - 1,
                Math.floor(clampedProgress * data.totalFrames)
            );

            const img = imagesRef.current[frame];

            // Only clear and draw if we have an image
            if (img && img.complete && img.naturalHeight !== 0) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // "Cover" fit
                const scale = Math.max(
                    canvas.width / img.width,
                    canvas.height / img.height
                );

                const x = (canvas.width / 2) - (img.width * scale) / 2;
                const y = (canvas.height / 2) - (img.height * scale) / 2;

                ctx.drawImage(
                    img,
                    x,
                    y,
                    img.width * scale,
                    img.height * scale
                );
            }

            requestAnimationFrame(render);
        };

        const animationId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, [data, scrollYProgress]);

    return (
        <div className="sticky top-24 h-[calc(100vh-6rem)] w-full overflow-hidden bg-[#050505]">
            <canvas ref={canvasRef} className="w-full h-full object-cover" />
        </div>
    );
}
