import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Mobile App Development",
    desc: "Crafting intuitive and powerful iOS & Android applications tailored to your business needs.",
    color: "from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400"
  },
  {
    title: "Website Development Solution",
    desc: "Build scalable, fast, and SEO-friendly web applications using the latest tech stacks.",
    color: "from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-400"
  },
  {
    title: "Digital Marketing & SEO",
    desc: "Expand your digital footprint and dominate search results with our expert marketing strategies.",
    color: "from-orange-500 to-rose-500 dark:from-orange-400 dark:to-rose-400"
  },
  {
    title: "Custom Software Solution",
    desc: "Automate your workflows with bespoke software systems designed for maximum efficiency.",
    color: "from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400"
  },
  {
    title: "Build Your Online Store",
    desc: "Launch a high-converting E-commerce platform with seamless payment and user experience.",
    color: "from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-background text-foreground flex items-center selection:bg-indigo-500/30">
      {/* ================= BACKGROUND AMBIENT GLOWS ================= */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-sky-500/10 dark:bg-sky-500/[0.03] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-14 w-[400px] h-[300px] bg-purple-500/5 dark:bg-purple-500/[0.02] blur-[120px] rounded-full pointer-events-none" />
 


        {/* ================= SLIDE CONTENT WRAPPER ================= */}
        <div className="relative border-4 p-5 w-full max-w-7xl mx-auto px-6 z-10 mb-12  rounded-2xl shadow-2xl">
          <div className="relative h-[420px] md:h-[400px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 220, damping: 28 },
                  opacity: { duration: 0.25 }
                }}
                className="absolute w-full"
              >
                <div className="max-w-4xl">
                  {/* Badge Tagline */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 mb-6"
                  >
                    <div className="h-[1px] w-12 bg-sky-500 dark:bg-sky-400"></div>
                    <span className="text-sky-600 dark:text-sky-400 font-bold tracking-[0.2em] uppercase text-xs">Premium IT Solutions</span>
                  </motion.div>

                  {/* Main Heading Text Splitter */}
                  <h1 className="text-4xl font-blinker md:text-7xl font-black uppercase text-foreground tracking-tight mb-8 leading-[1.15]">
                    {slides[current].title.split(' ').map((word, i, arr) => {
                      // শেষ দুইটা শব্দকে গ্রেডিয়েন্ট কালার দেওয়ার লজিক (ফর মোর কন্টেন্ট ফ্লেক্সিবিলিটি)
                      const isGradientWord = i >= arr.length - 2;
                      return (
                        <span key={i} className={isGradientWord ? `bg-gradient-to-r ${slides[current].color} bg-clip-text text-transparent block md:inline` : ""}>
                          {word}{" "}
                        </span>
                      );
                    })}
                  </h1>

                  {/* Sub Description */}
                  <p className="text-muted-foreground text-base md:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
                    {slides[current].desc}
                  </p>

                  {/* Premium Action CTA Buttons */}
                  <div className="flex items-center gap-4">
                    <Button className="bg-primary text-primary-foreground hover:bg-sky-600 dark:hover:bg-sky-500 hover:text-white px-6 py-5 md:px-8 md:py-7 rounded-2xl text-sm font-bold transition-all group shadow-lg shadow-sky-500/10 dark:shadow-black/20">
                      Get Started
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform stroke-[2.5]" />
                    </Button>

                    <Button variant="outline" className="border-border bg-transparent text-foreground hover:bg-muted/60 dark:hover:bg-white/[0.03] px-6 py-5 md:px-8 md:py-7 text-sm font-bold rounded-2xl transition-all shadow-sm">
                      Case Studies
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ================= MODERN NAVIGATION CONTROLS ================= */}
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex items-end justify-between z-20">

          {/* Slide Progress Indicators */}
          <div className="flex gap-4">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className="cursor-pointer group select-none"
              >
                <div className={`text-[10px] font-black mb-2 transition-colors ${i === current ? 'text-foreground' : 'text-muted-foreground/60 group-hover:text-foreground/80'}`}>
                  0{i + 1}
                </div>
                <div className="h-[3px] w-12 lg:w-16 bg-muted dark:bg-white/[0.08] relative overflow-hidden rounded-full transition-colors">
                  {i === current && (
                    <motion.div
                      layoutId="progress"
                      className={`absolute inset-0 bg-gradient-to-r ${slides[i].color}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 7, ease: "linear" }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Action Controls Arrow Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-xl border border-border bg-card/60 dark:bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-foreground hover:bg-sky-500 hover:border-sky-500 dark:hover:bg-sky-500 hover:text-white transition-all active:scale-95 shadow-sm"
            >
              <ChevronLeft size={20} className="stroke-[2.5]" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-xl border border-border bg-card/60 dark:bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-foreground hover:bg-sky-500 hover:border-sky-500 dark:hover:bg-sky-500 hover:text-white transition-all active:scale-95 shadow-sm"
            >
              <ChevronRight size={20} className="stroke-[2.5]" />
            </button>
          </div>
        </div>

    
    </section>
  );
}