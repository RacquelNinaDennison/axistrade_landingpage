'use client';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const comparison = {
  features: [
    { name: "Mining-specific catalog", axisTrade: true, traditional: false, generalMarketplace: false },
    { name: "Verified suppliers", axisTrade: true, traditional: false, generalMarketplace: false },
    { name: "Compliance documentation", axisTrade: true, traditional: false, generalMarketplace: false },
    { name: "RFQ workflow", axisTrade: true, traditional: false, generalMarketplace: false },
    { name: "Quote comparison", axisTrade: true, traditional: false, generalMarketplace: false },
    { name: "Industry expertise", axisTrade: true, traditional: false, generalMarketplace: false }
  ]
};

export function DifferentiationSection() {
  return (
    <section id="why-now" className="py-20 px-8 relative bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[#E97A02]/10 border border-[#E97A02]/20 rounded-full text-sm text-[#E97A02] mb-4">
            Differentiation
          </div>
          <h2 className="text-black mb-4">Why AxisTrade wins.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built specifically for mining—not adapted from general B2B marketplaces.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white border border-gray-200 rounded-2xl p-8 overflow-x-auto shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 text-gray-600 font-normal">Feature</th>
                <th className="text-center py-4 px-4">
                  <div className="text-black">AxisTrade</div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="text-gray-600">Traditional Procurement</div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="text-gray-600">General Marketplaces</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">{feature.name}</td>
                  <td className="text-center py-4 px-4">
                    {feature.axisTrade ? (
                      <Check className="w-5 h-5 text-[#E97A02] mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.traditional ? (
                      <Check className="w-5 h-5 text-gray-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.generalMarketplace ? (
                      <Check className="w-5 h-5 text-gray-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}