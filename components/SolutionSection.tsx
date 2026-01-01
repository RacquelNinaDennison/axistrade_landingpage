'use client';
import { Search, FileCheck, BarChart3, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Search,
    title: "Supplier Onboarding",
    description: "Supplier registers once → uploads CIPC, SARS, banking & license docs. Verified through AI-assisted checks "
  },
  {
    icon: FileCheck,
    title: "ERP Attestation",
    description: "Axistrade auto-validation of production history, stock levels & dispatch records."
  },
  {
    icon: BarChart3,
    title: "Trust Passport Generation",
    description: "Verified dossier issued. Counterparty receives unique Axistrade ID & Trust Score."
  },
  {
    icon: ShoppingCart,
    title: "Trade Execution ",
    description: "Buyer views pre-vetted suppliers only. Banks access Axistrade data for instant LC/financing approval"
  }
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-8 relative bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[#075073]/10 border border-[#075073]/20 rounded-full text-sm text-[#075073] mb-4">
            Axistrade vetting timeline
          </div>
          <h2 className="text-black mb-4">From 8 weeks of uncertainty to 8 days of verified confidence.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Axistrade transforms mining trade from paper-heavy trust gaps to digital, bank-grade certainty through
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E97A02]/0 via-[#075073]/30 to-[#E97A02]/0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="h-80 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-14 bg-gradient-to-br from-[#075073] to-[#075073]/80 rounded-xl flex items-center justify-center mb-4 relative z-10">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-[#E97A02] mb-2">Step {index + 1}</div>
                  <h3 className="text-black mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}