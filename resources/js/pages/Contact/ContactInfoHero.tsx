import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from '@inertiajs/react';

const contactDetails = [
  {
    id: 1,
    title: "Call us today",
    icon: PhoneCall,
    description: "Our team is available for direct sync and quick technical consulting.",
    lines: [
      { label: "PS", value: "+8801978224636" },
      { label: "HO", value: "+8801737515185" }
    ],
    gradient: "from-blue-600 to-indigo-600",
    action: "tel:+8801978224636"
  },
  {
    id: 2,
    title: "Our emails",
    icon: Mail,
    description: "Drop us a line anytime, we typically respond within 2-4 business hours.",
    lines: [
      { label: "General", value: "info@abinfotech.com.bd" },
      { label: "Support", value: "admin@abinfotech.com.bd" }
    ],
    gradient: "from-indigo-600 to-purple-600",
    action: "mailto:info@abinfotech.com.bd"
  },
  {
    id: 3,
    title: "Our address",
    icon: MapPin,
    description: "Visit our software infrastructure development cell for corporate clean discussions.",
    lines: [
      { label: "Office", value: "726/12, Adabor 10" },
      { label: "City", value: "Dhaka 1217, Bangladesh" }
    ],
    gradient: "from-purple-600 to-pink-600",
    action: "https://maps.google.com"
  }
];

export default function ContactInfoHero() {
  return (
    <section className="bg-background  pb-24 relative overflow-hidden selection:bg-indigo-500/30">
      
      {/* 1. Header & Breadcrumb (Asymmetric Alignment) */}
      <div className="relative py-20 bg-background overflow-hidden mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        
        {/* Decorative Grid Dots */}
        <div className="absolute top-8 right-12 w-40 h-20 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] hidden md:block opacity-70" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 block mb-3">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-black text-primary font-koulen tracking-tight mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Us.</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-400">
            <Link href="/">
                                Home
            </Link>  
            <span>•</span>
            <span className="text-slate-600">Contact us</span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Info Bento Grid */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {contactDetails.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.a
                href={info.action}
                target={info.id === 3 ? "_blank" : "_self"}
                rel="noopener noreferrer"
                key={info.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/20 flex flex-col justify-between hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100/40 transition-all duration-500 relative overflow-hidden"
              >
                {/* Top Subtle Background Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[5rem] -z-10 group-hover:bg-indigo-50/50 transition-colors duration-500" />

                <div>
                  {/* Modern Animated Icon Box */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-lg shadow-indigo-500/10 mb-8 relative group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent size={26} className="stroke-[2]" />
                  </div>

                  {/* Content Headings */}
                  <h3 className="text-2xl font-black text-slate-950 mb-3">{info.title}</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">{info.description}</p>
                  
                  {/* Lines Display (Cleaner Layout) */}
                  <div className="space-y-4 pt-6 border-t border-slate-50">
                    {info.lines.map((line, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-0.5">{line.label}</span>
                        <span className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{line.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Bottom Trigger Button */}
                <div className="mt-10 pt-4 flex items-center justify-between text-slate-400 group-hover:text-indigo-600 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-wider">Connect Now</span>
                  <div className="w-10 h-10 bg-slate-50 text-slate-900 group-hover:bg-indigo-600 group-hover:text-white rounded-xl flex items-center justify-center transition-all group-hover:translate-x-1">
                    <ArrowRight size={16} className="stroke-[2.5]" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* 3. Operational Timeline Banner (Bonus Touch) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-950 text-white rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-indigo-400">
              <Clock size={22} />
            </div>
            <div>
              <h4 className="text-lg font-bold">Standard Operation Windows</h4>
              <p className="text-slate-400 text-sm mt-0.5 font-medium">Our engineers and managers respond to query lines within optimized schedules.</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-sm font-black tracking-wider uppercase text-indigo-300 flex-none text-center">
            Sat - Thu: 9:00 AM - 6:00 PM
          </div>
        </motion.div>
      </div>

    </section>
  );
}