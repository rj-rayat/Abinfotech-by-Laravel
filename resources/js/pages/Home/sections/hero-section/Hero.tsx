import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Mobile App Development",
    desc: "Crafting intuitive and powerful iOS & Android applications tailored to your business needs.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Website Development Solution",
    desc: "Build scalable, fast, and SEO-friendly web applications using the latest tech stacks.",
    color: "from-purple-600 to-indigo-500"
  },
  {
    title: "Digital Marketing & SEO",
    desc: "Expand your digital footprint and dominate search results with our expert marketing strategies.",
    color: "from-orange-500 to-rose-500"
  },
  {
    title: "Custom Software Solution",
    desc: "Automate your workflows with bespoke software systems designed for maximum efficiency.",
    color: "from-emerald-600 to-teal-500"
  },
  {
    title: "Build Your Online Store",
    desc: "Launch a high-converting E-commerce platform with seamless payment and user experience.",
    color: "from-blue-500 to-indigo-600"
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
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-background flex items-center">
      {/* Background Glows */}
      {/* <div className="absolute top-[-5%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" /> */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />


      <div className="relative w-full max-w-7xl mx-auto px-6 z-10 mb-6">
        <div className="relative h-[400px] flex items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <div className="h-[1px] w-12 bg-sky-500"></div>
                  <span className="text-sky-400 font-bold tracking-[0.2em] uppercase text-xs">Premium IT Solutions</span>
                </motion.div>

                <h1 className="text-6xl font-koulen md:text-8xl font-black text-primary leading-none mb-8">
                  {slides[current].title.split(' ').map((word, i) => (
                    <span key={i} className={i >= 2 ? `bg-gradient-to-r ${slides[current].color} bg-clip-text text-transparent` : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                  {slides[current].desc}
                </p>

                <div className="flex items-center gap-5">
                  <Button className="bg-secondary text-white hover:bg-sky-500 hover:text-white  lg:px-8 lg:py-7 rounded-2xl text-xs lg:text-lg font-bold transition-all group">
                    Get Started
                    <ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border-gray-200 text-primary shadow-lg hover:bg-white/5 lg:px-8 lg:py-7  text-xs lg:text-lg  rounded-2xl ">
                    Case Studies
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Navigation Controls */}
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
              className="cursor-pointer group"
            >
              <div className="text-[10px] font-bold text-gray-500 mb-2 group-hover:text-white transition-colors">0{i+1}</div>
              <div className="h-[3px] w-12 lg:16 bg-gray-300 relative overflow-hidden rounded-full">
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

        {/* Arrow Buttons */}
        <div className="lg:flex gap-3 hidden">
          <button
            onClick={() => paginate(-1)}
            className="w-14 h-14 rounded-2xl border border-white/5 bg-secondary backdrop-blur-xl flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all active:scale-90"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-14 h-14 rounded-2xl border border-white/5 bg-secondary backdrop-blur-xl flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all active:scale-90"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
