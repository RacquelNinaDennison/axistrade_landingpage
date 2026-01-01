'use client';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav 
      className="absolute top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg px-8 py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
       <div className="flex items-center gap-2">
            <div className="w-15 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/axislogo.svg"
                alt="AxisTrade logo"
                className="w-20 h-20"
              />
            </div>
            <span className="text-xl font-bold">AxisTrade</span>
          </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#problem" className="text-gray-300 hover:text-[#E97A02] transition-colors">Problem</a>
          <a href="#solution" className="text-gray-300 hover:text-[#E97A02] transition-colors">Solution</a>
          <a href="#traction" className="text-gray-300 hover:text-[#E97A02] transition-colors">Traction</a>
          <a href="#product" className="text-gray-300 hover:text-[#E97A02] transition-colors">Roadmap</a>
          <a href="#team" className="text-gray-300 hover:text-[#E97A02] transition-colors">Team</a>
        </nav>

        <a 
          href="#contact" 
          className="bg-[#E97A02] hover:bg-[#E97A02]/90 text-white px-6 py-2.5 rounded-lg text-sm transition-colors"
        >
          Contact Us
        </a>
      </div>
    </motion.nav>
  );
}