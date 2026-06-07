'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Golden dust particle field
const ParticleField = () => {
  const pointsRef = useRef();
  const { pointer } = useThree();

  // Create random coordinates for 120 particles
  const [positions] = useMemo(() => {
    const count = 120;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;     // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4; // Z
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      // Drifts particles slowly
      const time = state.clock.getElapsedTime();
      pointsRef.current.rotation.y = time * 0.02;
      
      // Sway based on mouse coordinates
      const targetX = pointer.x * 0.2;
      const targetY = pointer.y * 0.2;
      pointsRef.current.rotation.x += (targetY - pointsRef.current.rotation.x) * 0.05;
      pointsRef.current.rotation.y += (targetX - pointsRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={pointsRef}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

// Refractive amber jaggery droplet
const LiquidDroplet = () => {
  const meshRef = useRef();
  const { pointer } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Hover floating rotation
      meshRef.current.rotation.y = time * 0.15;
      meshRef.current.rotation.x = Math.sin(time * 0.4) * 0.2;

      // Mouse parallax follow
      const targetX = 0.8 + pointer.x * 0.6;
      const targetY = 0.2 + pointer.y * 0.4;
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.06;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.06;

      // Deform sphere scale to mimic fluid surface tension
      const scaleY = 1.0 + Math.sin(time * 1.8) * 0.05;
      const scaleX = 1.0 - Math.sin(time * 1.8) * 0.025;
      meshRef.current.scale.set(scaleX * 1.1, scaleY * 1.1, scaleX * 1.1);
    }
  });

  return (
    <mesh ref={meshRef} position={[0.8, 0.2, -0.5]}>
      <sphereGeometry args={[0.7, 64, 64]} />
      <meshPhysicalMaterial
        color="#D4AF37"
        roughness={0.08}
        metalness={0.05}
        transmission={0.88}
        thickness={1.2}
        clearcoat={0.5}
        clearcoatRoughness={0.1}
        ior={1.48}
        emissive="#800020"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
};

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1.8} color="#FAF9F6" />
        <directionalLight position={[-3, -3, -1]} intensity={0.6} color="#D4AF37" />
        <pointLight position={[0, 0, 1.5]} intensity={0.9} color="#800020" />

        <ParticleField />
        <LiquidDroplet />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
