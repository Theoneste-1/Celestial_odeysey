import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Splash() {
  const [, setLocation] = useLocation();

  return (
    <div className="h-screen w-full bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 text-center"
      >
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-6"
        >
          <div className="w-24 h-24 mx-auto rounded-full border-2 border-primary/50 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
            <div className="w-16 h-16 bg-primary/20 rounded-full backdrop-blur-md" />
          </div>
        </motion.div>

        <h1 className="font-display text-4xl md:text-6xl text-foreground tracking-[0.2em] mb-4 text-neon">
          CELESTIAL
          <br />
          <span className="text-primary font-bold">ODYSSEY</span>
        </h1>
        
        <p className="text-muted-foreground font-mono tracking-widest text-sm md:text-base mb-12">
          EXPLORE THE UNKNOWN
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLocation("/auth")}
          className="group glass-button px-8 py-3 rounded-full flex items-center gap-2 mx-auto text-primary font-display tracking-wider border-neon"
        >
          INITIATE LAUNCH SEQUENCE
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  );
}