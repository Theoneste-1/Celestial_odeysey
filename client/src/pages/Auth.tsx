import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Github, Globe, Mail } from "lucide-react";
import bgImage from "@assets/generated_images/deep_space_nebula_background.png";

export default function Auth() {
  const [, setLocation] = useLocation();

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-background/60 z-0" /> {/* Dark overlay */}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 w-full max-w-md p-8 glass-panel rounded-2xl mx-4"
      >
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl text-white mb-2">IDENTIFICATION</h2>
          <p className="text-muted-foreground text-sm font-mono">ACCESS REQUIRED FOR ORBITAL ENTRY</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => setLocation("/tour")}
            className="w-full glass-button p-4 rounded-xl flex items-center justify-center gap-3 text-white font-sans hover:bg-white/10"
          >
            <Globe className="w-5 h-5" />
            Continue with Google
          </button>
          
          <button 
            onClick={() => setLocation("/tour")}
            className="w-full glass-button p-4 rounded-xl flex items-center justify-center gap-3 text-white font-sans hover:bg-white/10"
          >
            <Github className="w-5 h-5" />
            Continue with GitHub
          </button>
          
          <button 
            onClick={() => setLocation("/tour")}
            className="w-full glass-button p-4 rounded-xl flex items-center justify-center gap-3 text-white font-sans hover:bg-white/10"
          >
            <Mail className="w-5 h-5" />
            Continue with Email
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            BY PROCEEDING, YOU ACKNOWLEDGE THE RISK OF
            <br />
            INTERSTELLAR TRAVEL PROTOCOLS.
          </p>
        </div>
      </motion.div>
    </div>
  );
}