import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top CTA Section */}
        <div className="flex flex-wrap items-center justify-between mb-20 pb-12 border-b border-white/5 gap-8">
          <h2 className="text-3xl md:text-5xl font-black text-white font-koulen tracking-tight">
            Are you looking for <span className="text-indigo-500">Digital Design?</span>
          </h2>
          <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-500/20 transform hover:-translate-y-1">
            Contact Now
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Side: Purple Action Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-16 relative overflow-hidden h-full min-h-[400px] flex flex-col justify-center">
              {/* Topographic Background Pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]"></div>

              <span className="text-indigo-200 font-bold uppercase tracking-widest text-sm mb-4 block">Ready to do this</span>
              <h3 className="text-5xl md:text-7xl font-black text-white mb-10 leading-none">
                Let's get <br /> to work
              </h3>

              <button className="w-fit px-8 py-4 border-2 border-white/30 hover:border-white text-white font-bold rounded-xl flex items-center gap-3 transition-all group/btn">
                Contact us <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Side: Links & Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  Quick Links
                  <div className="h-[2px] w-8 bg-indigo-600"></div>
                </h4>
                <ul className="space-y-4">
                  {['GDPR', 'Terms and conditions', 'Privacy Policy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors font-medium">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  Say Hello
                  <div className="h-[2px] w-8 bg-indigo-600"></div>
                </h4>
                <a href="mailto:info@abinfotech.com.bd" className="text-slate-400 hover:text-white transition-colors flex items-center gap-3 mb-8 font-medium">
                  <Mail size={18} className="text-indigo-500" />
                  info@abinfotech.com.bd
                </a>

                {/* Social Icons */}
                <div className="flex gap-4">
                  {[Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-12 border-t border-white/5 text-slate-500 text-sm">
              <p>© 2026. All rights reserved by <span className="text-white font-bold">AB Infotech LTD</span>. We are tracking any intention of piracy.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blur background */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </footer>
  );
}
