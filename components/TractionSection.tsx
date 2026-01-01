'use client';
import { Users, Package, TrendingUp, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  {
    icon: Users,
    value: "12",
    label: "Buyer interviews",
    sublabel: "Pain validated"
  },
  {
    icon: Package,
    value: "200+",
    label: "SKUs mapped",
    sublabel: "Initial catalog"
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "Cost reduction",
    sublabel: "Estimated savings"
  },
  {
    icon: DollarSign,
    value: "$500k+",
    label: "Potential revenue",
    sublabel: "Annualized"
  }
];

export function TractionSection() {
  return (
    <section id="traction" className="py-20 px-8 relative bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[#075073]/10 border border-[#075073]/20 rounded-full text-sm text-[#075073] mb-4">
            Early Validation
          </div>
          <h2 className="text-white mb-4">Momentum is building.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real traction from mining buyers and suppliers validating demand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#151515] border border-white/10 rounded-2xl p-8 text-center hover:border-[#075073]/30 transition-all group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-[#075073]/10 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#075073]/20 transition-colors">
                <metric.icon className="w-7 h-7 text-[#075073]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-sm text-gray-300 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}