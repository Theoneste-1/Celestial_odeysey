import Layout from "@/components/Layout";
import { User, Settings, Award, MapPin } from "lucide-react";

export default function Profile() {
  return (
    <Layout>
      <div className="pt-24 px-4 md:px-8 max-w-4xl mx-auto space-y-6">
        
        <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 border-neon">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold font-display text-white">
                JD
            </div>
            <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl font-display text-white">JOHN DOE</h2>
                <p className="text-muted-foreground font-mono text-sm">CADET LEVEL 1 • ID: 884-21-X</p>
                <div className="mt-4 flex gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/50">
                        PRO MEMBER
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-muted-foreground text-xs font-bold border border-white/10">
                        EARTH ORIGIN
                    </span>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-xl space-y-4">
                <div className="flex items-center gap-3 text-primary mb-2">
                    <Award className="w-5 h-5" />
                    <h3 className="font-display">ACHIEVEMENTS</h3>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                            ★
                        </div>
                        <div>
                            <div className="text-sm font-bold">First Launch</div>
                            <div className="text-xs text-muted-foreground">Logged in for the first time</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                         <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                            ●
                        </div>
                        <div>
                            <div className="text-sm font-bold">Orbital Viewer</div>
                            <div className="text-xs text-muted-foreground">Visited 3 planets</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-panel p-6 rounded-xl space-y-4">
                <div className="flex items-center gap-3 text-primary mb-2">
                    <MapPin className="w-5 h-5" />
                    <h3 className="font-display">SAVED LOCATIONS</h3>
                </div>
                <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-white/5 border-l-2 border-primary">
                        <div className="text-sm font-bold">Olympus Mons</div>
                        <div className="text-xs text-muted-foreground">Mars • 18.65° N, 226.2° E</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border-l-2 border-secondary">
                        <div className="text-sm font-bold">Great Red Spot</div>
                        <div className="text-xs text-muted-foreground">Jupiter • 22° S</div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </Layout>
  );
}