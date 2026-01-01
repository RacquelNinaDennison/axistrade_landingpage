'use client';
import { CheckCircle2, Shield, Zap, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-8 relative overflow-hidden">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E97A02]/10 via-[#075073]/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#E97A02]/20 via-transparent to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#075073]/15 via-transparent to-transparent blur-3xl pointer-events-none"></div>
      
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-white mb-6">
              Source verified mining suppliers in minutes.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              RFQs, compliance checks, quote comparison, and ordering—built for mining procurement.
            </p>
            
            {/* Feature chips */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-[#151515] border border-white/10 rounded-full">
                <Shield className="w-4 h-4 text-[#E97A02]" />
                <span className="text-sm text-gray-300">Verified suppliers</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#151515] border border-white/10 rounded-full">
                <Zap className="w-4 h-4 text-[#E97A02]" />
                <span className="text-sm text-gray-300">Trust Passport Generation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#151515] border border-white/10 rounded-full">
                <FileCheck className="w-4 h-4 text-[#075073]" />
                <span className="text-sm text-gray-300">Compliance-ready docs</span>
              </div>
            </motion.div>

            {/* Proof strip */}
            <motion.div 
              className="flex items-center gap-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#E97A02] rounded-full"></div>
                <span className="text-gray-400">Projected 2,400+ products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#E97A02] rounded-full"></div>
                <span className="text-gray-400">Projected 180+ suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#075073] rounded-full"></div>
                <span className="text-gray-400">7-10 days compliance check</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Product UI Mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="bg-gradient-to-br from-[#fffffe] to-[#FEFFFF] rounded-2xl border border-[#E97A02]/2 p-6 shadow-2xl">
              {/* Search bar */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products, categories, suppliers…"
                    className="w-full bg-[#fffffe] border border-black/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E97A02]/50"
                    readOnly
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['PPE', 'Drilling', 'Conveyors', 'Spare Parts', 'Chemicals'].map((cat) => (
                  <span key={cat} className="px-3 py-1.5 bg-[#fffffe] border border-black/10 rounded-full text-xs text-gray-500">
                    {cat}
                  </span>
                ))}
              </div>


              <div className="space-y-3">
                <QuoteCard
                  supplier="MineSupply Co."
                  verified={true}
                  price="R2,450"
                  delivery="3-5 days"
                  rating={4.8}
                />
                <QuoteCard
                  supplier="Global Mining Parts"
                  verified={true}
                  price="R2,680"
                  delivery="7-10 days"
                  rating={4.6}
                />
                <QuoteCard
                  supplier="Industrial Dynamics"
                  verified={false}
                  price="$R,320"
                  delivery="14 days"
                  rating={4.2}
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-[#E97A02] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-[#E97A02]/30"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Product Vision
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuoteCard({ supplier, verified, price, delivery, rating }: {
  supplier: string;
  verified: boolean;
  price: string;
  delivery: string;
  rating: number;
}) {
  return (
    <div className="bg-[#fffffe] border border-black/10 rounded-lg p-4 hover:border-[#E97A02]/30 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-black">{supplier}</span>
          {verified && (
            <CheckCircle2 className="w-4 h-4 text-[#E97A02]" />
          )}
        </div>
        <span className="text-lg text-black font-semibold">{price}</span>
      </div>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>Delivery: {delivery}</span>
        <div className="flex items-center gap-1">
          <span className="text-[#E97A02]">★</span>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}