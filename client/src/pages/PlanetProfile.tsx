import Layout from "@/components/Layout";
import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Layers, Thermometer, Weight, Wind } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function DetailedPlanet({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <mesh ref={meshRef} scale={[2.5, 2.5, 2.5]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
      </mesh>
      <OrbitControls autoRotate enableZoom={false} />
    </>
  );
}

const planetData: Record<string, any> = {
  mercury: { color: "#A5A5A5", description: "The smallest planet in the Solar System and the closest to the Sun.", temp: "167°C", gravity: "3.7 m/s²", composition: "70% Metallic, 30% Silicate" },
  venus: { color: "#E3BB76", description: "The second planet from the Sun. It has the densest atmosphere of the four terrestrial planets.", temp: "464°C", gravity: "8.87 m/s²", composition: "96% CO2, 3.5% N2" },
  earth: { color: "#22A6B3", description: "Our home planet. The only known celestial body to harbor life.", temp: "15°C", gravity: "9.8 m/s²", composition: "78% N2, 21% O2" },
  mars: { color: "#D35400", description: "The fourth planet from the Sun and the second-smallest planet in the Solar System.", temp: "-65°C", gravity: "3.71 m/s²", composition: "95% CO2, 2.6% N2" },
  jupiter: { color: "#D4A373", description: "The largest planet in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun.", temp: "-110°C", gravity: "24.79 m/s²", composition: "90% H2, 10% He" },
};

export default function PlanetProfile() {
  const [match, params] = useRoute("/planet/:name");
  const [, setLocation] = useLocation();
  const name = params?.name?.toLowerCase() || "earth";
  const data = planetData[name] || planetData["earth"];

  return (
    <Layout>
      <div className="h-full flex flex-col md:flex-row overflow-hidden relative pt-16 md:pt-0">
        
        {/* Back Button */}
        <button 
            onClick={() => setLocation("/tour")}
            className="absolute top-20 left-4 z-20 flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
        >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-display">Back to Orrery</span>
        </button>

        {/* 3D View (Left/Top) */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-screen bg-black/50 relative">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <Stars />
            <DetailedPlanet color={data.color} />
          </Canvas>
          <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
             <h1 className="font-display text-4xl md:text-6xl text-white tracking-[0.2em] uppercase text-neon drop-shadow-lg">{name}</h1>
          </div>
        </div>

        {/* Data View (Right/Bottom) */}
        <div className="w-full md:w-1/2 h-full overflow-y-auto p-8 space-y-8 bg-background/95 backdrop-blur-md border-t md:border-t-0 md:border-l border-white/10">
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">PLANETARY OVERVIEW</h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
                {data.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                    <Thermometer className="w-6 h-6" />
                </div>
                <div>
                    <div className="text-sm font-mono text-muted-foreground uppercase">Surface Temp</div>
                    <div className="text-2xl font-display">{data.temp}</div>
                </div>
            </div>

            <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <Weight className="w-6 h-6" />
                </div>
                <div>
                    <div className="text-sm font-mono text-muted-foreground uppercase">Gravity</div>
                    <div className="text-2xl font-display">{data.gravity}</div>
                </div>
            </div>

            <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <Wind className="w-6 h-6" />
                </div>
                <div>
                    <div className="text-sm font-mono text-muted-foreground uppercase">Atmosphere</div>
                    <div className="text-2xl font-display">{data.composition}</div>
                </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Missions
            </h2>
            <div className="space-y-2">
                <div className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex justify-between mb-1">
                        <span className="font-bold">Mariner 10</span>
                        <span className="text-xs text-muted-foreground font-mono">1973</span>
                    </div>
                    <div className="text-sm text-muted-foreground">First flyby mission.</div>
                </div>
                <div className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex justify-between mb-1">
                        <span className="font-bold">MESSENGER</span>
                        <span className="text-xs text-muted-foreground font-mono">2004</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Orbital mapping mission.</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}