"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const StarField = () => {
    const mesh = useRef();
    const count = 5000;

    // Generate random star positions
    const { positions, originalPositions } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const originalPositions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            originalPositions[i * 3] = x;
            originalPositions[i * 3 + 1] = y;
            originalPositions[i * 3 + 2] = z;
        }
        return { positions, originalPositions };
    }, []);

    useFrame((state) => {
        if (!mesh.current) return;

        const time = state.clock.getElapsedTime();
        const { pointer } = state;

        // Gentle rotation
        mesh.current.rotation.y = time * 0.05;
        mesh.current.rotation.x = time * 0.01;

        // Subtle Parallax based on mouse
        // We aren't updating every buffer position for perf, just the container rotation/position could work,
        // but for individual star feeling, simple rotation is usually best for "space".

        // Let's add slight mouse tilt
        mesh.current.rotation.x += pointer.y * 0.05;
        mesh.current.rotation.y += pointer.x * 0.05;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#ffffff"
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
                fog={false}
            />
        </points>
    );
};

export const HeroBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                dpr={[1, 2]}
                gl={{ antialias: false, alpha: true }}
                className="bg-transparent"
            >
                <StarField />
            </Canvas>
        </div>
    );
};
