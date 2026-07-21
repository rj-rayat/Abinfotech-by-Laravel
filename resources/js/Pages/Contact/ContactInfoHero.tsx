import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from '@inertiajs/react';



interface ContactData {
  phone:string,
  hotline:string,
  general_email:string,
  support_email:string,
  office_address:string,
  city_address:string,
}

interface Props {
  data:ContactData | null
}

export default function ContactInfoHero({data}:Props) {

  const contactDetails = [
  {
    id: 1,
    title: "Call us today",
    icon: PhoneCall,
    description: "Our team is available for direct sync and quick technical consulting.",
    lines: [
      { label: "PS", value: data?.phone },
      { label: "HO", value: data?.hotline}
    ],
    gradient: "from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500",
    action: "tel:+8801978224636"
  },
  {
    id: 2,
    title: "Our emails",
    icon: Mail,
    description: "Drop us a line anytime, we typically respond within 2-4 business hours.",
    lines: [
      { label: "General", value: data?.general_email },
      { label: "Support", value: data?.support_email }
    ],
    gradient: "from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500",
    action: "mailto:info@abinfotech.com.bd"
  },
  {
    id: 3,
    title: "Our address",
    icon: MapPin,
    description: "Visit our software infrastructure development cell for corporate clean discussions.",
    lines: [
      { label: "Office", value: data?.office_address},
      { label: "City", value: data?.city_address}
    ],
    gradient: "from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500",
    action: "https://maps.google.com"
  }
];
  return (
    <section className="bg-background text-foreground pb-24 relative overflow-hidden selection:bg-indigo-500/30">

      {/* ================= 1. HEADER & BREADCRUMB ================= */}
      <div className="relative py-24 bg-background overflow-hidden mb-12 border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

        <div className="absolute top-12 right-12 w-40 h-20 bg-[radial-gradient(var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px] hidden md:block opacity-70" />
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 block mb-3">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-black text-foreground font-blinker tracking-tight mb-4 uppercase">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Us.</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground">
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Home
            </Link>
            <span>•</span>
            <span className="text-foreground/80">Contact us</span>
          </div>
        </div>
      </div>

      {/* ================= 2. INTERACTIVE INFO BENTO GRID ================= */}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                className="group bg-card/40 dark:bg-white/[0.01] rounded-[2.5rem] p-10 border border-border/80 dark:border-white/[0.04] shadow-xl shadow-slate-200/20 dark:shadow-black/40 flex flex-col justify-between hover:border-indigo-500/50 dark:hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-black/60 transition-all duration-500 relative overflow-hidden backdrop-blur-md"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-muted/30 dark:bg-white/[0.01] rounded-bl-[5rem] -z-10 group-hover:bg-indigo-500/5 dark:group-hover:bg-indigo-500/[0.02] transition-colors duration-500" />

                <div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 mb-8 relative group-hover:scale-105 transition-transform duration-500`}>
                    <IconComponent size={24} className="stroke-[2]" />
                  </div>

                  <h3 className="text-2xl font-bold font-blinker tracking-tight text-foreground mb-3 uppercase">{info.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-8">{info.description}</p>

                  <div className="space-y-4 pt-6 border-t border-border/60">
                    {info.lines.map((line, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground/70 mb-0.5">{line.label}</span>
                        <span className="text-base font-bold text-foreground/90 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{line.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-4 flex items-center justify-between text-muted-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-wider">Connect Now</span>
                  <div className="w-10 h-10 bg-muted dark:bg-white/[0.03] border border-border dark:border-white/[0.05] text-foreground group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white rounded-xl flex items-center justify-center transition-all group-hover:translate-x-1 shadow-sm">
                    <ArrowRight size={16} className="stroke-[2.5]" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* ================= 3. OPERATIONAL TIMELINE BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-card dark:bg-white/[0.01] text-foreground rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-border dark:border-white/[0.05] shadow-xl shadow-slate-200/10 dark:shadow-black/50 relative overflow-hidden backdrop-blur-md"
        >
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-none">
              <Clock size={22} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-blinker tracking-tight uppercase">Standard Operation Windows</h4>
              <p className="text-muted-foreground text-sm mt-0.5 font-medium">Our engineers and managers respond to query lines within optimized schedules.</p>
            </div>
          </div>
          
          <div className="bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 px-6 py-3 rounded-xl text-xs md:text-sm font-black tracking-wider uppercase text-indigo-600 dark:text-indigo-400 flex-none text-center">
            Sat - Thu: 9:00 AM - 6:00 PM
          </div>
        </motion.div>
      </div>

    </section>
  );
}