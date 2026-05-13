import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users, Coffee, Lightbulb, Target, Sparkles } from 'lucide-react';

// ১. অ্যাডভান্সড ফ্রেমার মোশন কাউন্টার (বাটার স্মুথ পারফরম্যান্স)
const Counter = ({ value, duration = 2.5 }: { value: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { 
        duration: duration, 
        ease: [0.16, 1, 0.3, 1] // Custom snappy ease-out curve
      });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const statsData = [
  { 
    label: "Happy Customers", 
    value: 308, 
    icon: Users, 
    color: "text-blue-400",
    bgGlow: "group-hover:shadow-blue-500/20"
  },
  { 
    label: "Cups of Coffee", 
    value: 9, 
    icon: Coffee, 
    color: "text-amber-400",
    bgGlow: "group-hover:shadow-amber-500/20"
  },
  { 
    label: "Innovations", 
    value: 957, 
    icon: Lightbulb, 
    color: "text-purple-400",
    bgGlow: "group-hover:shadow-purple-500/20"
  },
  { 
    label: "Great Projects", 
    value: 624, 
    icon: Target, 
    color: "text-emerald-400",
    bgGlow: "group-hover:shadow-emerald-500/20"
  }
];

export default function UltraModernFunFacts() {
  return (
    <section className="relative py-32 bg-background overflow-hidden selection:bg-sky-500/30">
     
      
      {/* Subtle Ambient Glows */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-secondary text-primary text-sm mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Proven Track Record</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black font-koulen text-primary mb-6"
          >
            Numbers that <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Matter.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            We don't just build software; we build success stories. Here is a glimpse of what we have achieved so far.
          </motion.p>
        </div>

        {/* Bento-Grid Style Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-3xl bg-white/[0.03] border shadow-lg border-white/[0.08] p-8 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden ${stat.bgGlow}`}
            >
              {/* Hover Spotlight Effect (CSS Only) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col justify-between h-full gap-8">
                {/* Icon Header */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${stat.color} group-hover:scale-110 transition-transform duration-500 ease-out`}>
                    <stat.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20" />
                </div>
                
                {/* Number & Label */}
                <div>
                  <h3 className="text-5xl md:text-6xl font-koulen text-primary mb-2 tracking-widest flex items-baseline gap-1 drop-shadow-2xl">
                    <Counter value={stat.value} />
                    <span className={`${stat.color} text-3xl font-sans font-bold`}>+</span>
                  </h3>
                  <p className="text-slate-400 font-medium uppercase tracking-[0.15em] text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}