import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react'; // 👈 অবজেক্ট ম্যাপ হিসেবে সব আইকন একবারে ইম্পোর্ট

// থিম বা গ্রাডিয়েন্টের নামগুলো ডাটাবেজে স্ট্রিং আকারে থাকবে, আমরা ক্লাসের সাথে ম্যাপ করে নেব
const THEME_PRESETS = {
  'blue-cyan': { color: "from-blue-500 to-cyan-500", glow: "group-hover:shadow-blue-500/20" },
  'purple-indigo': { color: "from-purple-500 to-indigo-500", glow: "group-hover:shadow-indigo-500/20" },
  'rose-orange': { color: "from-rose-500 to-orange-500", glow: "group-hover:shadow-rose-500/20" },
  'emerald-teal': { color: "from-emerald-500 to-teal-500", glow: "group-hover:shadow-emerald-500/20" },
};

// ডাটাবেজ থেকে আসা সার্ভিসের টাইপ ডেফিনিশন
interface DBService {
  id: number;
  title: string;
  description: string;
  icon_name: string;   // ডাটাবেজে সেভ থাকবে যেমন: 'Monitor', 'SearchCheck', '<SmartphoneIcon />' ইত্যাদি
  color_theme: string; // 'blue-cyan', 'purple-indigo', ইত্যাদি
  sort_order: number;
}

interface ServiceProps {
  services: DBService[]; // Inertia বা প্রপ্স এর মাধ্যমে কন্ট্রোলার থেকে আসা ডাটা
}

export default function Service({ services = [] }: ServiceProps) {
  // Embla সেটআপ
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

  // ডাইনামিক আইকন রেন্ডার করার হেল্পার ফাংশন
  const renderIcon = (iconName: string) => {
  if (!iconName) return <LucideIcons.Monitor className="w-6 h-6 text-white" />;

  // ১. নাম রিফাইন করা
  let formattedName = iconName
    .replace(/[<\s\/>]/g, '') 
    .replace(/(Icon|icon|Lucide|lucide)$/, ''); 

  formattedName = formattedName
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replace(/[\s-_]+/g, '');

  // ২. অবজেক্ট ম্যাপ থেকে সম্ভাব্য আইকনটি খুঁজে বের করা
  const DetectedIcon = 
    (LucideIcons[formattedName as keyof typeof LucideIcons]) || 
    (LucideIcons[`${formattedName}Icon` as keyof typeof LucideIcons]) || 
    LucideIcons.Monitor;

  // ৩. টাইপস্ক্রিপ্টকে আশ্বস্ত করতে স্পষ্ট করে React.ComponentType টাইপ কাস্টিং করা 👈 (মেইন ফিক্স)
  const IconComponent = DetectedIcon as React.ComponentType<{ className?: string }>;

  return <IconComponent className="w-6 h-6 text-white" />;

  };

  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      {/* গ্লোবাল নিয়ন অ্যাম্বিয়েন্ট ব্যাকগ্রাউন্ড */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/5 dark:bg-indigo-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-blinker uppercase">
            How we can help take your next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-sky-400 dark:to-indigo-500">
              project to new heights
            </span>
          </h2>
        </div>

        {/* 🚀 এমব্লা ক্যারোসেল কন্টেইনার */}
        <div className="overflow-visible cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6"> 
            {services.map((service, index) => {
              // ডাটাবেজের থিম অনুযায়ী প্রেসেট সিলেক্ট করা, না মিললে ফলব্যাক 'blue-cyan'
              const currentTheme = THEME_PRESETS[service.color_theme as keyof typeof THEME_PRESETS] || THEME_PRESETS['blue-cyan'];

              return (
                <div key={service.id || index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] pl-6 box-border">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full flex flex-col justify-between p-8 md:p-10 rounded-[32px] bg-card/60 dark:bg-white/[0.02] border border-border/80 dark:border-white/[0.06] backdrop-blur-xl shadow-xl dark:shadow-black/40 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                  >
                    {/* কার্ডের ভেতরে কাস্টম নিয়ন হোভার গ্লো */}
                    <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full bg-gradient-to-br ${currentTheme.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 pointer-events-none`} />

                    <div>
                      {/* গ্রাডিয়েন্ট আইকন বক্স উইথ রিফ্লেক্টিভ শ্যাডো */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentTheme.color} flex items-center justify-center mb-8 shadow-lg shadow-inherit transition-transform duration-500 group-hover:scale-110`}>
                        {/* ডাইনামিক আইকন কল */}
                        {renderIcon(service.icon_name)}
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
                        {/* যদি ArrowRight উপরে ইম্পোর্ট করা না থাকে, তবে LucideIcons.ArrowRight ব্যবহার করতে পারেন */}
                        <LucideIcons.ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
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