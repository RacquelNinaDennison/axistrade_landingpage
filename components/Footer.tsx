'use client';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-12 px-8 relative border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo & Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-500">
              © 2026 AxisTrade. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <a href="#problem" className="hover:text-[#E97A02] transition-colors">Problem</a>
            <a href="#solution" className="hover:text-[#E97A02] transition-colors">Solution</a>
            <a href="#product" className="hover:text-[#E97A02] transition-colors">Roadmap</a>
            <a href="#team" className="hover:text-[#E97A02] transition-colors">Team</a>
            <a href="#contact" className="hover:text-[#E97A02] transition-colors">Contact</a>
          </div>

        </motion.div>
      </div>
    </footer>
  );
}