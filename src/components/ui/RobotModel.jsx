"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF, Float, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function Model() {
    const { scene } = useGLTF("/humoid robo.glb");

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    color: "#0B0F10",
                    metalness: 0.9,
                    roughness: 0.1,
                });
            }
        });
    }, [scene]);

    return <primitive object={scene} scale={1.5} position={[0, -3.5, 0]} />;
}

export default function RobotModel() {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[-4, 4, 4]} intensity={2} />
                <directionalLight position={[4, 0, 4]} intensity={0.5} />
                <spotLight
                    position={[0, 4, -4]}
                    angle={0.5}
                    penumbra={1}
                    intensity={2}
                    castShadow
                />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Model />
                </Float>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                <Environment preset="studio" />
            </Canvas>
        </div>
    );
}

useGLTF.preload("/humoid robo.glb");
