import React from 'react';
import { motion } from 'framer-motion';


// আপনার লোগো লিস্ট (Screenshot_17.png অনুযায়ী)
const clientLogos = [
  { id: 1, name: "Janobani", src: "/17627650844.png" },
  { id: 2, name: "Businesslancer", src: "businesslancer.png" },
  { id: 3, name: "Edu Admin", src: "eduamin.png" },
  { id: 4, name: "Bangla Bosoti", src: "/banglabosoti.png" },
  { id: 5, name: "Manobkantha", src: "/logos/manobkantha.png" },
  { id: 6, name: "Park City", src: "/logos/park-city.png" },
  { id: 7, name: "Grameen Jibon", src: "/17627651205.png" },
  { id: 7, name: "ghorerbazar", src: "/ghorerbazar.png" },
];

// ইনফিনিট লুপের জন্য লিস্ট ডাবল করা হয়েছে
const scrollingLogos = [...clientLogos, ...clientLogos];

export default function HappyClient() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-primary font-koulen tracking-tight"
        >
          Trusted by <span className="text-indigo-600">Industry Leaders.</span>
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex flex-nowrap gap-16 md:gap-24 items-center whitespace-nowrap px-12"
        >
          {scrollingLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="w-32 md:w-48 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain filter drop-shadow-sm"
              />
            </div>
          ))}
        </motion.div>

        {/* Side Gradients for Smooth Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
