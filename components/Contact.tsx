
'use client';
import { Send, Mail, Linkedin, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-8 relative bg-[#0a0a0a]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E97A02]/10 via-transparent to-[#075073]/10 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[#E97A02]/10 border border-[#E97A02]/20 rounded-full text-sm text-[#E97A02] mb-4">
            Get in Touch
          </div>
          <h2 className="text-white mb-4">Let's build the future of mining procurement.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in investing, partnering, or joining our early access program? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E97A02]/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E97A02]/50 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company & Role Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm text-gray-300 mb-2">
                    Company / Fund *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E97A02]/50 transition-colors"
                    placeholder="Acme Ventures"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm text-gray-300 mb-2">
                    Your Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E97A02]/50 transition-colors"
                    placeholder="Partner, Managing Director, etc."
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiry-type" className="block text-sm text-gray-300 mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiry-type"
                  name="inquiry-type"
                  required
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E97A02]/50 transition-colors"
                >
                  <option value="">Select an option...</option>
                  <option value="investor">Investment Opportunity</option>
                  <option value="partner">Partnership / Integration</option>
                  <option value="buyer">Early Access (Buyer)</option>
                  <option value="supplier">Early Access (Supplier)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E97A02]/50 transition-colors resize-none"
                  placeholder="Tell us about your interest in AxisTrade..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#E97A02] hover:bg-[#E97A02]/90 text-white px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                We'll respond within 24 hours during business days.
              </p>
            </form>
          </motion.div>

          {/* Contact Info & Quick Links */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Direct Contact */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#151515] border border-white/10 rounded-2xl p-8">
              <h3 className="text-white mb-6">Direct Contact</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:investors@axistrade.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#E97A02] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#E97A02]/10 rounded-xl flex items-center justify-center group-hover:bg-[#E97A02]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#E97A02]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div>info@axistrade.com</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/axistrade-africa-415078389/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#075073] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#075073]/10 rounded-xl flex items-center justify-center group-hover:bg-[#075073]/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-[#075073]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LinkedIn</div>
                    <div>linkedin.com/company/axistrade</div>
                  </div>
                </a>

             
              </div>
            </div>

    

            {/* Response Time */}
            <div className="bg-gradient-to-br from-[#E97A02]/10 to-[#075073]/10 border border-[#E97A02]/20 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#E97A02] rounded-full mt-1.5 animate-pulse"></div>
                <div>
                  <p className="text-white mb-1">We're actively fundraising!</p>
                  <p className="text-sm text-gray-400">
                    Currently in conversations with seed-stage VCs and angels. Typical response time: 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
