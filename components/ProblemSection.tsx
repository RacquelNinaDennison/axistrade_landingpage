'use client';
import { AlertCircle, Clock, FileQuestion } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: AlertCircle,
    title: "Payment Security Breakdown:",
    description: " Buyers insist on Documentary Letters of Credit (DLCs) instead of escrow or advance payments, reflecting deep mistrust of African counterparties. Many Tier 1 banks refuse to confirm LCs issued by local African banks, labelling them high-risk."
  },
  {
    icon: FileQuestion,
    title: "Ad-hoc Verification",
    description: " Each deal requires manual vetting of “proof of product,” mining licenses, and past performance. This fragmented process leads to errors, delays, and fraud exposure."
  },
  {
    icon: Clock,
    title: "Deal-Killing Inflexibility",
    description: "Parties cannot agree on acceptable financial instruments or proof standards, even commercially sound deals collapse before reaching execution."
  }
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 px-8 relative bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[#E97A02]/10 border border-[#E97A02]/20 rounded-full text-sm text-[#E97A02] mb-4">
            The Problem
          </div>
          <h2 className="text-black mb-4">Mining procurement is broken.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Cross-border mining deals in Africa are repeatedly derailed by a lack of trust and transparency between buyers and sellers.
Every negotiation turns into an improvised due-diligence exercise — costly, slow, and risky.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#E97A02]/30 transition-all shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-[#E97A02]/10 rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-[#E97A02]" />
              </div>
              <h3 className="text-black mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}