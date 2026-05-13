import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ab from "../../../../../../public/ab.png"
import team from "../../../../../../public/team.png"

export default function AboutAgency() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Creative Image Stack */}
          <div className="relative group">
            {/* Main Office Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src={team} 
                alt="Our Team" 
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Logo/Identity Box - Floating */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -right-8 -bottom-8 z-20 w-64 h-64 bg-slate-950 rounded-3xl p-8 flex items-center justify-center shadow-2xl border-4 border-white"
            >
              <img src={ab} alt="AB Infotech" className="w-full object-contain" />
            </motion.div>

            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -left-10 bottom-12 z-30 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-4">
                <span className="text-6xl font-black font-koulen text-slate-900 leading-none">5</span>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-tighter leading-tight">
                  Years of<br />Experience
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-indigo-600"></div>
                <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm">About Agency</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-primary mb-8 leading-[1.1] tracking-tight font-koulen">
                Unlimited Skills for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Super Projects.
                </span>
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you need a new logo, website, video, marketing campaign, or ebook created for your business, the key to making the project a success starts with having a well-thought-out creative brief. No coding skills required to create unique sites. Customize your site in real-time and see the results instantly.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Creative Design', 'Quick Delivery', '24/7 Support', 'Expert Team'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-indigo-600 w-5 h-5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-10 py-7 text-lg font-bold shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1">
                Get The Offer <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}