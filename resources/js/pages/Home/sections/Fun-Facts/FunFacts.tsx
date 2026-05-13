import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Coffee, Lightbulb, CheckCircle } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';


const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16); 

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const stats = [
  { label: "Happy Customers", value: 308, icon: <Users className="w-8 h-8" />, color: "from-blue-500 to-cyan-400" },
  { label: "Cups of Coffee", value: 9, icon: <Coffee className="w-8 h-8" />, color: "from-orange-500 to-yellow-400" },
  { label: "Innovations", value: 957, icon: <Lightbulb className="w-8 h-8" />, color: "from-purple-600 to-pink-500" },
  { label: "Great Projects", value: 624, icon: <CheckCircle className="w-8 h-8" />, color: "from-emerald-500 to-teal-400" }
];

export default function FunFacts() {
  return (
    <section className="relative py-24 overflow-hidden bg-primary-foreground">
      {/* Background Glows for modern look */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-koulen text-secondary tracking-wider mb-4"
          >
            Fun Facts
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Over the years we have done many things that we are proud of.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 transition-all shadow-2xl" />
              
              <div className="relative p-8 flex flex-col items-center">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg shadow-black/20`}>
                  {React.cloneElement(stat.icon as React.ReactElement<any>, { className: "text-white w-8 h-8" })}
                </div>
                
                <h3 className="text-5xl md:text-6xl font-koulen text-primary mb-2 tracking-tighter">
                  <Counter value={stat.value} />+
                </h3>
                
                <p className="text-gray-400 font-medium text-center uppercase tracking-widest text-xs">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}