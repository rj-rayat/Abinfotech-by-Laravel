import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Linkedin, Github, Globe, ArrowRight, Briefcase } from 'lucide-react';


interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string | null;
  experience_year: number | string;
  facebook_link?: string;
  linkedin_link?: string;
  github_link?: string;
  portfolio_link?: string;
}

interface Props {
  members: TeamMember[] | null;
}

export default function TeamSection({ members }: Props) {
  const teamData = members || [];
  
  const [displayLimit, setDisplayLimit] = useState(6);
  const showMore = () => setDisplayLimit(prev => prev + 3);

  const totalPages = Math.ceil(teamData.length / 3);
  const currentActiveDot = Math.floor((displayLimit - 1) / 3);

  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/[0.03] dark:bg-indigo-500/[0.01] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/[0.03] dark:bg-purple-500/[0.01] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-indigo-600 dark:bg-indigo-500"></div>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Expert Minds</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black font-blinker tracking-tight uppercase leading-none">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Team.</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl font-medium leading-relaxed">
              Meet the visionaries and experts behind AB Infotech LTD who turn complex ideas into digital reality.
            </p>
          </motion.div>
        </div>

        {/* Premium Team Grid */}
{/* Premium Team Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <AnimatePresence mode="popLayout">
  {teamData.slice(0, displayLimit).map((member) => {
    const imageSrc = member.image && member.image.trim() !== ""
      ? `/storage/${member.image.replace(/^\//, '')}`
      : "/images/team-placeholder.jpg";

    return (
      <motion.div
        key={member.id}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative h-[480px] w-full rounded-[2rem] overflow-hidden bg-zinc-950 group cursor-pointer"
      >
        {/* Background Image - Hover এ হালকা জুম হবে */}
        <img
          src={imageSrc}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay - হোভারে আরেকটু ডার্ক হবে যাতে টেক্সট ক্লিয়ার বোঝা যায় */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Experience Badge - সবসময় উপরে ডানদিকে থাকবে */}
        {member.experience_year && (
          <div className="absolute top-5 right-5 z-20 px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-1.5 text-white text-[10px] font-bold uppercase tracking-wider">
            <Briefcase size={12} className="text-indigo-400" />
            {member.experience_year}+ Yrs
          </div>
        )}

        {/* Content Wrapper - নিচে লুকানো থাকবে, হোভার করলে স্লাইড করে উপরে উঠবে */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end translate-y-[76px] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          
          {/* Name & Designation */}
          <div className="mb-4">
            <h3 className="text-2xl font-black text-white">{member.name}</h3>
            <p className="text-indigo-400 font-bold text-xs uppercase tracking-widest mt-1">
              {member.role}
            </p>
          </div>

          {/* Social Icons & Portfolio Button - হোভারে ফেড ইন হবে */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
            
            <div className="flex gap-2">
              {/* ডেটা না থাকলেও যেন ডিজাইন দেখা যায়, তাই কন্ডিশন সরিয়েছি */}
              <a href={member.facebook_link || '#'} target="_blank" rel="noreferrer" className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-indigo-600 transition-colors text-white shadow-lg">
                <Facebook size={18} />
              </a>
              <a href={member.linkedin_link || '#'} target="_blank" rel="noreferrer" className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-indigo-600 transition-colors text-white shadow-lg">
                <Linkedin size={18} />
              </a>
              <a href={member.github_link || '#'} target="_blank" rel="noreferrer" className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-indigo-600 transition-colors text-white shadow-lg">
                <Github size={18} />
              </a>
            </div>

            <a 
              href={member.portfolio_link || '#'} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg"
            >
              <Globe size={14} /> Portfolio
            </a>
          </div>
        </div>
      </motion.div>
    );
  })}
</AnimatePresence>
</div>

        {/* View More / Pagination Area */}
        {displayLimit < teamData.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-2.5">
              {[...Array(totalPages)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === currentActiveDot 
                      ? 'w-10 bg-indigo-600 dark:bg-indigo-500' 
                      : 'w-2 bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={showMore}
              className="group flex items-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/10 dark:shadow-none hover:shadow-indigo-500/20 transition-all hover:-translate-y-1 active:scale-95"
            >
              View More Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}