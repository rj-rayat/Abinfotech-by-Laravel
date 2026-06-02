import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ArrowRight, MonitorIcon, SearchCheckIcon, SmartphoneIcon, MegaphoneIcon } from 'lucide-react';

const services = [
  {
    title: "Web Design",
    description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
    icon: <MonitorIcon className="w-6 h-6 text-white" />,
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/20"
  },
  {
    title: "Seo Solutions",
    description: "Research Keywords Well. The first place to begin when it comes to SEO solutions is your keywords themselves.",
    icon: <SearchCheckIcon className="w-6 h-6 text-white" />,
    color: "from-purple-500 to-indigo-500",
    glow: "group-hover:shadow-indigo-500/20"
  },
  {
    title: "App development",
    description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
    icon: <SmartphoneIcon className="w-6 h-6 text-white" />,
    color: "from-rose-500 to-orange-500",
    glow: "group-hover:shadow-rose-500/20"
  },
  {
    title: "Advertise",
    description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
    icon: <MegaphoneIcon className="w-6 h-6 text-white" />,
    color: "from-emerald-500 to-teal-500",
    glow: "group-hover:shadow-emerald-500/20"
  }
];

export default function Service() {
  // Embla সেটআপ: slidesToScroll: 1 দিলে স্ক্রল স্মুথ হবে
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      containScroll: 'keepSnaps'
    }, 
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('init', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      {/* গ্লোবাল নিয়ন অ্যাম্বিয়েন্ট ব্যাকগ্রাউন্ড */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/5 dark:bg-indigo-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black  font-blinker uppercase">
            How we can help take your next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-sky-400 dark:to-indigo-500">
              project to new heights
            </span>
          </h2>
        </div>

        {/* 🚀 এমব্লা ক্যারোসেল কন্টেইনার */}
        <div className="overflow-visible cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6"> 
            {services.map((service, index) => (
              /* basis-full: মোবাইলে ১টা 
                md:basis-1/2: ট্যাবলেটে ২টা 
                lg:basis-1/3: ডেক্সটপে ৩টা কার্ড রেসপন্সিভলি দেখাবে এবং গ্যাপের প্যারা ফিক্স করবে
              */
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] pl-6 box-border">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative h-full flex flex-col justify-between p-8 md:p-10 rounded-[32px] bg-card/60 dark:bg-white/[0.02] border border-border/80 dark:border-white/[0.06] backdrop-blur-xl shadow-xl dark:shadow-black/40 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  {/* কার্ডের ভেতরে কাস্টম নিয়ন হোভার গ্লো */}
                  <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 pointer-events-none`} />

                  <div>
                    {/* গ্রাডিয়েন্ট আইকন বক্স উইথ রিফ্লেক্টিভ শ্যাডো */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg shadow-inherit transition-transform duration-500 group-hover:scale-110`}>
                      {service.icon}
                    </div>

                    {/* টাইটেল */}
                    <h3 className="text-2xl font-bold mb-4 font-blinker tracking-tight text-foreground transition-colors group-hover:text-indigo-500 dark:group-hover:text-sky-400">
                      {service.title}
                    </h3>

                    {/* ডেসক্রিপশন */}
                    <p className="text-muted-foreground leading-relaxed text-base mb-8">
                      {service.description}
                    </p>
                  </div>

                  {/* লার্ন মোর বাটন উইথ বর্ডার ট্রানজিশন */}
                  <div className="pt-6 border-t border-border/40 flex items-center justify-between mt-auto group/btn">
                    <span className="text-sm font-bold tracking-wider uppercase text-muted-foreground group-hover/btn:text-indigo-500 dark:group-hover/btn:text-sky-400 transition-colors">
                      Learn More
                    </span>
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border border-border/40 group-hover/btn:bg-indigo-600 dark:group-hover/btn:bg-sky-500 group-hover/btn:text-white transition-all duration-300 -translate-x-1 group-hover/btn:translate-x-0">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎛️ মডার্ন ডট প্যাগিনেশন */}
        <div className="flex justify-center gap-2.5 mt-14">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === i 
                  ? 'w-8 bg-indigo-600 dark:bg-sky-500' 
                  : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}