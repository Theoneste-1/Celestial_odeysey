import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from "three";
import { useLocation } from "wouter";

function Sun() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial 
        emissive="#ffcc00"
        emissiveIntensity={2}
        color="#ffaa00"
      />
      <pointLight distance={100} intensity={2} color="white" />
    </mesh>
  );
}

function Planet({ position, size, color, name, speed, orbitRadius }: { position: [number, number, number], size: number, color: string, name: string, speed: number, orbitRadius: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [, setLocation] = useLocation();
  
  // Basic orbit logic
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime() * speed;
      meshRef.current.position.x = Math.cos(t) * orbitRadius;
      meshRef.current.position.z = Math.sin(t) * orbitRadius;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
        {/* Orbit Path */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[orbitRadius - 0.02, orbitRadius + 0.02, 64]} />
            <meshBasicMaterial color="#ffffff" opacity={0.1} transparent side={THREE.DoubleSide} />
        </mesh>
        
        <mesh 
            ref={meshRef} 
            position={position}
            onPointerOver={() => {
                document.body.style.cursor = 'pointer';
                setHover(true);
            }}
            onPointerOut={() => {
                document.body.style.cursor = 'auto';
                setHover(false);
            }}
            onClick={() => setLocation(`/planet/${name.toLowerCase()}`)}
        >
            <sphereGeometry args={[size, 32, 32]} />
            <meshStandardMaterial color={color} roughness={0.7} metalness={0.2} />
            
            {hovered && (
            <Html distanceFactor={15}>
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded border border-cyan-500 font-mono pointer-events-none whitespace-nowrap">
                {name} <span className="text-cyan-400">►</span>
                </div>
            </Html>
            )}
        </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Sun />
      
      {/* Mercury */}
      <Planet position={[4, 0, 0]} size={0.4} color="#A5A5A5" name="Mercury" speed={0.8} orbitRadius={4} />
      
      {/* Venus */}
      <Planet position={[6, 0, 0]} size={0.7} color="#E3BB76" name="Venus" speed={0.6} orbitRadius={6} />
      
      {/* Earth */}
      <Planet position={[8, 0, 0]} size={0.7} color="#22A6B3" name="Earth" speed={0.4} orbitRadius={8} />
      
      {/* Mars */}
      <Planet position={[11, 0, 0]} size={0.5} color="#D35400" name="Mars" speed={0.3} orbitRadius={11} />
      
      {/* Jupiter */}
      <Planet position={[16, 0, 0]} size={1.8} color="#D4A373" name="Jupiter" speed={0.15} orbitRadius={16} />

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} minDistance={5} maxDistance={50} />
    </>
  );
}

export default function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
      <Scene />
    </Canvas>
  );
}