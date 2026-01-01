'use client';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const team = [
  {
    name: "Tommy Jones Bompeti",
    role: "Co-founder ",
    bio:"Commodity trading Experience. Sales & Marketing",
    mail: "tommybompeti@gmail.com"
  },
  {
    name: "David Luboya-Mushila",
    role: "Co-founder ",
    bio:"Product Manager, Data Scientist & Former Founder",
    mail: "davidluboya@axistrade.africa"
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 px-8 relative bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[#E97A02]/10 border border-[#E97A02]/20 rounded-full text-sm text-[#E97A02] mb-4">
            Team
          </div>
          <h2 className="text-black mb-4">Domain experts + builders.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deep mining industry knowledge combined with product and technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-[#E97A02]/30 transition-all group shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div>
                <span className="text-2xl text-gray-700">{member.initials}</span>
              </div>
              <h3 className="text-black mb-2">{member.name}</h3>
              <p className="text-sm text-[#E97A02] mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#075073] hover:text-[#E97A02] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}