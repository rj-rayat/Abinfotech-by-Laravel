import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Send, X } from 'lucide-react';

export default function AboutVideoSection() {
  const [isOpen, setIsOpen] = useState(false);


  const videoUrl = "https://www.youtube.com/embed/wNYtoZq7VvI?si=ZFI9Zff7TX-wPoqL";

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Video Preview with Trigger */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-[3rem] blur-2xl group-hover:bg-indigo-500/20 transition-all duration-700" />

            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl aspect-video bg-slate-900">
              <img
                src="/images/video-placeholder.jpg"
                alt="Welcome to AB Infotech"
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.6)] relative">
                  <div className="absolute inset-0 rounded-full bg-indigo-600 animate-ping opacity-20" />
                  <Play className="w-10 h-10 fill-current ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-indigo-600"></div>
                <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm">About Us</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-primary mb-8 leading-[1.1]  font-koulen">
                Welcome to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  AB Infotech.
                </span>
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Whether you need a new logo, website, video, marketing campaign, or ebook created for your business, the key to making the project a success starts with having a well-thought-out creative brief.
                </p>
                <p>
                  No coding skills required to create unique sites. Customize your site in real-time and see the results instantly.
                </p>
              </div>

              <div className="mt-12">
                <button className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 transition-all hover:-translate-y-1 flex items-center gap-3 group">
                  Contact Us
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
              >
                <X size={24} />
              </button>

              {/* Video Iframe */}
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="Video Player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
