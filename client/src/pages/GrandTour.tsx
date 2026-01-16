import Layout from "@/components/Layout";
import SolarSystem from "@/components/SolarSystem";
import { motion } from "framer-motion";
import { Info, Maximize2 } from "lucide-react";

export default function GrandTour() {
  return (
    <Layout>
      <div className="absolute inset-0 w-full h-full bg-black">
        <SolarSystem />
      </div>

      {/* Floating UI Elements on top of 3D Canvas */}
      <div className="absolute right-4 top-24 w-64 glass-panel rounded-xl p-4 hidden md:block">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-display text-primary text-sm">TARGET LOCK</h3>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
        
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Selected Body</div>
            <div className="text-xl font-bold font-display">EARTH</div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 bg-white/5 rounded">
              <div className="text-muted-foreground">MASS</div>
              <div>5.97 x 10^24</div>
            </div>
            <div className="p-2 bg-white/5 rounded">
              <div className="text-muted-foreground">GRAVITY</div>
              <div>9.807 m/s²</div>
            </div>
            <div className="p-2 bg-white/5 rounded">
              <div className="text-muted-foreground">TEMP</div>
              <div>15°C (Avg)</div>
            </div>
            <div className="p-2 bg-white/5 rounded">
              <div className="text-muted-foreground">MOONS</div>
              <div>1</div>
            </div>
          </div>
          
          <button className="w-full py-2 bg-primary/20 hover:bg-primary/30 text-primary text-xs font-bold rounded uppercase tracking-wider transition-colors border border-primary/50">
            Analysis Mode
          </button>
        </div>
      </div>

      <div className="absolute left-4 bottom-24 glass-panel p-2 rounded-lg flex flex-col gap-2">
         <button className="p-2 hover:bg-white/10 rounded transition-colors text-primary">
            <Maximize2 className="w-5 h-5" />
         </button>
         <button className="p-2 hover:bg-white/10 rounded transition-colors text-primary">
            <Info className="w-5 h-5" />
         </button>
      </div>
    </Layout>
  );
}