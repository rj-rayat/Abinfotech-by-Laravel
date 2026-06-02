import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Award, Zap } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative pt-16 pb-24 bg-background text-foreground overflow-hidden selection:bg-indigo-500/30">

      {/* 🌌 মডার্ন ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট গ্লো (লাইট ও ডার্ক দুই মুডেই জোশ লাগবে) */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Top Badge: গ্লাস মরফিজম লুক */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-card/60 dark:bg-white/[0.03] border border-border/80 dark:border-white/[0.06] text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm backdrop-blur-md"
            >
              <Award className="w-4 h-4 text-indigo-500" />
              <span>We Are AB Infotech LTD</span>
            </motion.div>

            {/* Main Title - Responsive & Gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-black font-blinker tracking-tight text-foreground mb-6 leading-none uppercase"
            >
              Our Journey of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
                Innovation.
              </span>
            </motion.h1>

            {/* Description Text - text-muted-foreground দিয়ে ফিক্সড */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-medium"
            >
              We are a team of passionate creators and digital visionaries. Starting from a core belief in exceptional digital craftsmanship, we have evolved into a full-service agency, delivering impactful solutions for clients worldwide. Our focus is on blending creative strategy with cutting-edge technology.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 px-10 py-5 rounded-3xl bg-indigo-600 dark:bg-indigo-500 text-white font-bold text-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-600/10 hover:shadow-indigo-500/20 group hover:-translate-y-1 active:scale-95"
            >
              Get to know us
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right Visual Column (Overlap Design ফিক্সড) */}
          <div className="lg:col-span-6 relative flex flex-col gap-10 w-full">

            {/* Top Large Card with Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[3rem] bg-card/40 dark:bg-white/[0.01] p-6 border border-border dark:border-white/[0.05] shadow-2xl shadow-slate-200/40 dark:shadow-black/50 group overflow-hidden backdrop-blur-xl"
            >
              {/* মডার্ন ডট গ্রিড ওভারলে প্যাটার্ন (ডার্ক মুডে সেই লেভেলের দেখাবে) */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] relative z-10">
                <img
                  src="/team2.jpg"
                  alt="Team Collaborating"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* 'AB' Logo Box: ডার্ক থিমে ফ্ল্যাট কালো না রেখে প্রিমিয়াম গ্লো দেওয়া হয়েছে */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-950 dark:bg-zinc-950 rounded-[2.5rem] p-7 flex items-center justify-center border-4 border-background dark:border-zinc-900 shadow-2xl shadow-black/80">
                  <img src="/ab.png" alt="AB Logo" className="w-full object-contain" />
                </div>
              </div>
            </motion.div>

            {/* Bottom Smaller Card (Bento Grid Style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="bg-card/60 dark:bg-white/[0.02] rounded-[2.5rem] p-8 border border-border dark:border-white/[0.05] shadow-xl shadow-slate-200/20 dark:shadow-black/30 gap-6 flex flex-col md:flex-row md:items-center backdrop-blur-xl transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl font-extrabold font-blinker tracking-tighter shadow-md shadow-indigo-500/20">
                  5
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] leading-relaxed">
                  Years of<br />Crafting Digital<br />Success
                </div>
              </div>
              
              {/* রেসপন্সিভ ডিভাইডার লাইন */}
              <div className="h-[1px] w-full md:w-[1px] md:h-12 bg-border dark:bg-white/10 flex-none" />
              
              <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                  <Zap className="w-5 h-5 flex-none animate-pulse" />
                </div>
                <span>Over 250+ projects successfully delivered</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}