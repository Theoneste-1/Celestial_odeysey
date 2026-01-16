import { Link, useLocation } from "wouter";
import { Orbit, Search, Library, User, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { icon: Orbit, label: "Orrery", path: "/tour" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: Library, label: "Library", path: "/library" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      {/* Top HUD Area - Contextual Data */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="glass-panel px-4 py-2 rounded-lg pointer-events-auto">
            <h1 className="font-display text-primary text-xl tracking-wider">CELESTIAL ODYSSEY</h1>
            <div className="text-xs text-muted-foreground font-mono">SOLAR SYSTEM VIEW // LIVE</div>
          </div>
          
          <div className="glass-panel px-4 py-2 rounded-lg text-right font-mono text-xs pointer-events-auto hidden md:block">
            <div className="text-primary">T: 14:02:55 UTC</div>
            <div className="text-muted-foreground">LAT: 34.0522° N</div>
            <div className="text-muted-foreground">LON: 118.2437° W</div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative z-0">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
        <div className="max-w-md mx-auto glass-panel rounded-full px-6 py-4 flex justify-between items-center pointer-events-auto border-neon">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <button 
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 transition-all duration-300",
                    isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon className={cn("w-6 h-6", isActive && "drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]")} />
                  <span className="text-[10px] uppercase tracking-widest font-display hidden md:block">{item.label}</span>
                </button>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}