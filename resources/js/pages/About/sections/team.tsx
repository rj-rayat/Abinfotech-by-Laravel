import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const teamData = [
  { id: 1, name: "Abdullah Al Mamun", role: "Founder & Chairman", image: "/1762817907bappyalmamun.jpg" },
  { id: 2, name: "Rayat Ahmed", role: "MERN Stack Developer", image: "/team/2.jpg" },
  { id: 3, name: "Sarah Jenkins", role: "UI/UX Designer", image: "/team/3.jpg" },
  { id: 4, name: "John Doe", role: "App Developer", image: "/team/4.jpg" },
  { id: 5, name: "Jane Smith", role: "SEO Specialist", image: "/team/5.jpg" },
  { id: 6, name: "Mike Ross", role: "Marketing Head", image: "/team/6.jpg" },
  { id: 7, name: "Harvey Specter", role: "Legal Consultant", image: "/team/7.jpg" },
  // আরও ডাটা যোগ করতে পারেন...
];

export default function TeamSection() {
  const [displayLimit, setDisplayLimit] = useState(6);
  const showMore = () => setDisplayLimit(prev => prev + 3);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary font-koulen tracking-tight">
              Professional <span className="text-indigo-600">Team.</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-md">
              Meet the visionaries and experts behind AB Infotech LTD who turn complex ideas into digital reality.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {teamData.slice(0, displayLimit).map((member, index) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group h-[450px] rounded-[2.5rem] overflow-hidden bg-slate-200"
              >
                {/* Background Image */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Glassmorphism Overlay */}
                <div className="absolute inset-x-4 bottom-4 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                  
                  {/* Social Icons (Floating on Hover) */}
                  <div className="flex gap-3 mb-6 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                      <a key={i} href="#" className="p-2.5 bg-white/20 hover:bg-white text-white hover:text-indigo-600 rounded-xl transition-colors">
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-indigo-200 font-medium text-sm uppercase tracking-wider">{member.role}</p>
                </div>

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / Pagination Area */}
        {displayLimit < teamData.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-2">
              {[...Array(Math.ceil(teamData.length / 6))].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-200'}`} 
                />
              ))}
            </div>

            <button 
              onClick={showMore}
              className="group flex items-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 transition-all active:scale-95"
            >
              View More Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}