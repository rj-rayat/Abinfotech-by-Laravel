import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Monitor, Search, Smartphone, Megaphone, ArrowRight } from 'lucide-react';


const services = [
  {
    title: "Web Design",
    description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Seo Solutions",
    description: "Research Keywords Well. The first place to begin when it comes to SEO solutions is your keywords themselves.",
    icon: Search,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "App development",
    description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
    icon: Smartphone,
    color: "from-rose-500 to-orange-500"
  },
  {
    title: "Advertise",
    description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
    icon: Megaphone,
    color: "from-emerald-500 to-teal-500"
  }
];

export default function Service() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000 })]);

  return (
    <section className="py-24 bg-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 font-koulen tracking-tight">
            How we can help take your next <br />
            <span className="text-indigo-600">project to new heights</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {services.map((service, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-background ml-2.5 p-10 rounded-[32px] border border-border shadow-xl shadow-slate-200/50 h-full flex flex-col group transition-all duration-300"
                >
                  {/* Icon with Gradient Glow */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between group/btn">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest group-hover/btn:text-indigo-600 transition-colors">Learn More</span>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-indigo-600 group-hover/btn:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className="w-3 h-3 rounded-full bg-indigo-200 hover:bg-indigo-600 transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
