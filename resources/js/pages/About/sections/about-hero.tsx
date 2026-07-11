import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Award, Zap } from 'lucide-react';

interface AboutHeroData {
  badge: string;
  title: string;
  description: string;
  btn_text: string;
  btn_link: string;
  main_image: string | null;
  logo_image: string | null;
  counter_number: string;
  counter_text: string;
  stat_text: string;
}

interface Props {
  data: AboutHeroData | null;
}

export default function AboutHero({ data }: Props) {
 
  const badge = data?.badge || "We Are AB Infotech LTD";
  const title = data?.title || "Our Journey of Innovation.";
  const description = data?.description || "We are a team of passionate creators and digital visionaries. Starting from a core belief in exceptional digital craftsmanship, we have evolved into a full-service agency, delivering impactful solutions for clients worldwide.";
  const btnText = data?.btn_text || "Get to know us";
  const btnLink = data?.btn_link || "#";
  const counterNum = data?.counter_number || "";
  const counterText = data?.counter_text || "Years of\nCrafting Digital\nSuccess";
  const statText = data?.stat_text || "Over 250+ projects successfully delivered";


  const mainImageSrc = data?.main_image ? `/storage/${data.main_image}` : "/team2.jpg";
  const logoImageSrc = data?.logo_image ? `/storage/${data.logo_image}` : "/ab.png";

  return (
    <section className="relative pt-16 pb-24 bg-background text-foreground overflow-hidden selection:bg-indigo-500/30">

     
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-card/60 dark:bg-white/[0.03] border border-border/80 dark:border-white/[0.06] text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm backdrop-blur-md"
            >
              <Award className="w-4 h-4 text-indigo-500" />
              <span>{badge}</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-black font-blinker tracking-tight text-foreground mb-6 leading-none uppercase"
            >
              {title}
            </motion.h1>

            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-medium"
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href={btnLink}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 px-10 py-5 rounded-3xl bg-indigo-600 dark:bg-indigo-500 text-white font-bold text-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-600/10 hover:shadow-indigo-500/20 group hover:-translate-y-1 active:scale-95"
            >
              {btnText}
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-6 relative flex flex-col gap-10 w-full">

            {/* Top Large Card with Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[3rem] bg-card/40 dark:bg-white/[0.01] p-6 border border-border dark:border-white/[0.05] shadow-2xl shadow-slate-200/40 dark:shadow-black/50 group overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] relative z-10">
                <img
                  src={mainImageSrc}
                  alt="Team Collaborating"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* 'AB' Logo Box */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-950 dark:bg-zinc-950 rounded-[2.5rem] p-7 flex items-center justify-center border-4 border-background dark:border-zinc-900 shadow-2xl shadow-black/80">
                  <img src={logoImageSrc} alt="AB Logo" className="w-full object-contain" />
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
                  {counterNum}
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] leading-relaxed whitespace-pre-line">
                  {counterText}
                </div>
              </div>
              
              <div className="h-[1px] w-full md:w-[1px] md:h-12 bg-border dark:bg-white/10 flex-none" />
              
              <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                  <Zap className="w-5 h-5 flex-none animate-pulse" />
                </div>
                <span>{statText}</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}