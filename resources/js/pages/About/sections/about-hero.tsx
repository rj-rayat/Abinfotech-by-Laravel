import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Award, Zap } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative pt-10 pb-24 bg-background overflow-hidden selection:bg-indigo-500/30">

      {/* Background Subtle Gradient Blobs for modern look */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-100 rounded-full blur-[150px] opacity-70" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-[150px] opacity-70" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-700 text-sm mb-8 shadow-inner shadow-black/5 backdrop-blur-md"
            >
              <Award className="w-4 h-4 text-indigo-600" />
              <span>We Are AB Infotech LTD</span>
            </motion.div>

            {/* Main Title - with Gradient Highlight */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-black font-koulen text-primary mb-6 leading-tight "
            >
              Our Journey of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Innovation.</span>
            </motion.h1>

            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10"
            >
              We are a team of passionate creators and digital visionaries. Starting from a core belief in exceptional digital craftsmanship, we have evolved into a full-service agency, delivering impactful solutions for clients worldwide. Our focus is on blending creative strategy with cutting-edge technology.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 px-10 py-5 rounded-3xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/20 group hover:-translate-y-1"
            >
              Get to know us
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right Visual Column (Overlap Design) */}
          <div className="lg:col-span-6 relative flex flex-col gap-10">

            {/* Top Large Card with Main Image & Floating Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[3rem] bg-white p-6 border border-white shadow-2xl shadow-indigo-200/40 group overflow-hidden"
            >
              {/* Topographic Pattern Overlay (Subtle) */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]"></div>

              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] relative">
                <img
                  src="/team2.jpg"
                  alt="Team Collaborating"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Neon-Style Floating 'AB' Logo Box */}
                <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-slate-950 rounded-[2.5rem] p-7 flex items-center justify-center border-4 border-white shadow-xl">
                  <img src="/ab.png" alt="AB Logo Neon" className="w-full object-contain" />
                </div>
              </div>
            </motion.div>

            {/* Bottom Smaller Card (Bento Grid Style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="bg-background rounded-3xl p-8 border border-white shadow-xl shadow-slate-100 gap-6 flex flex-col md:flex-row md:items-center hover:shadow-indigo-200/30 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl font-extrabold font-koulen tracking-tighter shadow-inner shadow-black/10">
                  5
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-tight">
                  Years of<br />Crafting Digital<br />Success
                </div>
              </div>
              <div className="h-[1px] w-full md:w-[1px] md:h-12 bg-slate-100 flex-none" />
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <Zap className="w-5 h-5 text-indigo-500 flex-none" />
                <span>Over 250+ projects successfully delivered</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
