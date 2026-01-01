'use client';
import { Rocket, Building2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const phases = [
  {
    icon: Rocket,
    phase: "Phase 1",
    timeline: "Q2 2026",
    title: "MVP: RFQ + Supplier Profiles",
    milestones: [
      "Supplier verification system",
      "Product catalog (500+ SKUs)",
      "RFQ submission workflow",
      "Quote comparison dashboard",
      "Basic messaging"
    ],
    status: "In development"
  },
  {
    icon: Building2,
    phase: "Phase 2",
    timeline: "Q3 2026",
    title: "Compliance + Approvals",
    milestones: [
      "Compliance document management",
      "Multi-party approval workflows",
      "Supplier certification tracking",
      "Audit trail & reporting",
      "Advanced search filters"
    ],
    status: "Planned"
  },
  {
    icon: Globe,
    phase: "Phase 3",
    timeline: "Q4 2026",
    title: "Ordering + Payments + Logistics",
    milestones: [
      "Purchase order generation",
      "Payment processing",
      "Logistics integration",
      "Delivery tracking",
      "Invoice reconciliation"
    ],
    status: "Planned"
  }
];

export function RoadmapSection() {
  return (
    <section id="product" className="py-20 px-8 relative bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[#E97A02]/10 border border-[#E97A02]/20 rounded-full text-sm text-[#E97A02] mb-4">
            Product Roadmap
          </div>
          <h2 className="text-black mb-4">Clear path to scale.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Phased rollout from MVP to category dominance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#E97A02]/30 transition-all shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="w-14 h-14 bg-[#E97A02]/10 rounded-xl flex items-center justify-center mb-6">
                <phase.icon className="w-7 h-7 text-[#E97A02]" />
              </div>
              <div className="text-sm text-[#E97A02] mb-3">{phase.timeline}</div>
              <h3 className="text-black mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.milestones.map((milestone, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#E97A02] rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{milestone}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}