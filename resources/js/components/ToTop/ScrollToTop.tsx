"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-slate-900 text-white shadow-xl border  transition-all duration-300 hover:bg-blue-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-blue-600 dark:hover:text-white dark:border-slate-800 hover:shadow-blue-500/20 active:scale-90 group"
          aria-label="Scroll to top"
        >
          {/* Arrow icon with hover animation */}
          <ArrowUp 
            size={20} 
            className="transition-transform duration-300 group-hover:-translate-y-1" 
            strokeWidth={2.5}
          />
          
          {/* Premium Ambient Glow Effect */}
          <span className="absolute inset-0 -z-10 rounded-2xl bg-red-600/0 blur-md transition-all duration-300 group-hover:bg-red-600/40" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}