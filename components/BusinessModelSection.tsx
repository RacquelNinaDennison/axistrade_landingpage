'use client';
import { Percent, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const businessModels = [
  {
    icon: Briefcase,
    title: "Buyer subscription",
    price: "$499–$2,499/mo",
    description: "Tiered plans based on user seats and RFQ volume",
    features: [
      "Unlimited RFQ submissions",
      "Quote comparison tools",
      "Compliance doc access",
      "Priority support"
    ]
  },
  {
    icon: Award,
    title: "Supplier subscription",
    price: "$299–$999/mo",
    description: "Listing fees + featured placement options",
    features: [
      "Profile & catalog listing",
      "RFQ access & notifications",
      "Lead management dashboard",
      "Analytics & insights"
    ]
  },
  {
    icon: Percent,
    title: "Transaction take-rate",
    price: "1.5–3%",
    description: "Optional commission on completed orders (Phase 3)",
    features: [
      "Payment processing",
      "Escrow & fraud protection",
      "Logistics coordination",
      "Dispute resolution"
    ],
    badge: "Future"
  }
];

export function BusinessModelSection() {
  return (
    <section className="py-20 px-8 relative bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[#075073]/10 border border-[#075073]/20 rounded-full text-sm text-[#075073] mb-4">
            Business Model
          </div>
          <h2 className="text-black mb-4">Multiple revenue streams.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Diversified monetization from transaction fees to premium services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessModels.map((model, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#075073]/30 transition-all relative shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {model.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#E97A02]/20 border border-[#E97A02]/30 rounded-full text-xs text-[#E97A02]">
                  {model.badge}
                </div>
              )}
              <div className="w-14 h-14 bg-[#075073]/10 rounded-xl flex items-center justify-center mb-6">
                <model.icon className="w-7 h-7 text-[#075073]" />
              </div>
              <h3 className="text-black mb-3">{model.title}</h3>
              <p className="text-gray-600 mb-4">{model.description}</p>
              <div className="text-2xl text-black mb-1">{model.price}</div>
              <div className="text-sm text-gray-500">{model.features.join(', ')}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}