import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Send, X } from 'lucide-react';


interface AboutVideoData {
  sub_title: string;
  title: string;
  description_1: string;
  description_2: string;
  video_url: string ;
  video_thumbnail: string | null;
  btn_text: string;
  btn_link: string;
}

interface Props {
  data: AboutVideoData | null;
}

export default function AboutVideoSection({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const subTitle = data?.sub_title || "About Us";
  const title = data?.title || "Welcome to \nAB Infotech.";
  const desc1 = data?.description_1 || "Whether you need a new logo, website, video, marketing campaign, or ebook created for your business, the key to making the project a success starts with having a well-thought-out creative brief.";
  const desc2 = data?.description_2 || "No coding skills required to create unique sites. Customize your site in real-time and see the results instantly.";
  const btnText = data?.btn_text || "Contact Us";
  const btnLink = data?.btn_link || "#";


  const thumbnailSrc = (data?.video_thumbnail && data.video_thumbnail.trim() !== "") 
  ? `/storage/${data.video_thumbnail}` 
  : "/images/video-placeholder.jpg";

  const getEmbedUrl = (url: string | undefined) => {
    const defaultUrl = "https://www.youtube.com/embed/wNYtoZq7VvI?si=ZFI9Zff7TX-wPoqL";
    if (!url) return defaultUrl;
    
  
    if (url.includes('embed/')) return url;

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : url;
  };

  const finalVideoUrl = getEmbedUrl(data?.video_url);

  return (
    <section className="relative py-24 bg-background text-foreground overflow-hidden">
      
  
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Video Preview with Trigger */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative group cursor-pointer w-full"
            onClick={() => setIsOpen(true)}
          >
        
            <div className="absolute -inset-4 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-[3rem] blur-2xl group-hover:bg-indigo-500/20 dark:group-hover:bg-indigo-500/10 transition-all duration-700" />

         
            <div className="relative rounded-[2.5rem] overflow-hidden border-4 md:border-8 border-card dark:border-white/[0.05] shadow-2xl shadow-indigo-500/5 dark:shadow-black/60 aspect-video bg-muted/30 backdrop-blur-md">
              <img
                src={thumbnailSrc}
                alt={subTitle}
                className="w-full h-full object-cover opacity-80 dark:opacity-60 group-hover:scale-105 transition-transform duration-700"
              />

          
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-500">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(79,70,229,0.5)] dark:shadow-[0_0_50px_rgba(99,102,241,0.4)] group-hover:scale-110 transition-transform duration-500 ease-out relative">
                  <div className="absolute inset-0 rounded-full bg-indigo-600 dark:bg-indigo-500 animate-ping opacity-25" />
                  <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1 md:ml-1.5" />
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
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
       
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-indigo-600 dark:bg-indigo-500"></div>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                  {subTitle}
                </span>
              </div>

       
              <h2 className="text-4xl md:text-6xl font-black font-blinker tracking-tight text-foreground mb-8 leading-none uppercase whitespace-pre-line">
                {title.includes('AB Infotech.') ? (
                  <>
                    {title.replace('AB Infotech.', '')}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
                      AB Infotech.
                    </span>
                  </>
                ) : title}
              </h2>

         
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                <p>{desc1}</p>
                {desc2 && <p>{desc2}</p>}
              </div>

      
              <div className="mt-10">
                <a 
                  href={btnLink}
                  className="inline-flex px-10 py-5 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/10 dark:shadow-indigo-500/5 hover:shadow-indigo-500/20 transition-all hover:-translate-y-1 active:scale-95 items-center gap-3 group"
                >
                  {btnText}
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

   
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 dark:bg-black/90 backdrop-blur-md p-4 md:p-10"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl aspect-video bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
         
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-3 bg-white/10 hover:bg-white/20 dark:bg-zinc-900/80 dark:hover:bg-zinc-800 text-white rounded-full transition-all shadow-lg active:scale-90"
              >
                <X size={20} />
              </button>

          
              <iframe
                src={`${finalVideoUrl}${finalVideoUrl.includes('?') ? '&' : '?'}autoplay=1`}
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