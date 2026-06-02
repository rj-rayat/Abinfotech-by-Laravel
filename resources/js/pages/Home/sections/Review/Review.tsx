import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "CEO, TechFlow",
    comment: "Working with this team was a game-changer for our brand. Their expertise in MERN stack and creative design is top-notch!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Marketing Director",
    comment: "The SEO solutions provided helped us rank on the first page within months. Highly recommended for anyone looking for growth.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    name: "Rahat Khan",
    role: "Founder, ShopBD",
    comment: "Best app development experience! The UI is smooth, and the performance is incredible. Truly unlimited skills.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=3"
  },
  {
    id: 4,
    name: "David Miller",
    role: "Product Manager",
    comment: "The professionalism and attention to detail they bring to every project is rare. They delivered my Next.js site ahead of schedule.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=4"
  },
  {
    id: 5,
    name: "Rayat Ahmed",
    role: "Full Stack Developer",
    comment: "Their ability to integrate AI solutions into web platforms is outstanding. A truly forward-thinking agency.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=5"
  }
];

export default function ReviewCarousel() {
  // Embla configuration with clean scroll behavior
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      containScroll: 'keepSnaps'
    }, 
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      {/* Subtle Ambient Background Light */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-muted-foreground uppercase tracking-widest text-xs">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-blinker tracking-tight text-foreground uppercase">
              What our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Clients Say.</span>
            </h2>
          </div>

          {/* Navigation Buttons (Fixed colors for light/dark mode) */}
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="p-4 rounded-full border border-border bg-card text-card-foreground hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-4 rounded-full border border-border bg-card text-card-foreground hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 🚀 Carousel Wrapper (Overflow-visible to prevent card cutting) */}
        <div className="overflow-visible" ref={emblaRef}>
          {/* -ml-6 and pl-6 approach fixes the card overlapping and spacing perfectly */}
          <div className="flex -ml-6">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] pl-6 box-border min-w-0"
              >
                <motion.div 
                  whileHover={{ y: -6 }}
                  className="bg-card/70 dark:bg-white/[0.01] p-10 rounded-[2.5rem] border border-border/80 dark:border-white/[0.05] shadow-xl shadow-slate-200/30 dark:shadow-black/40 h-full flex flex-col justify-between group hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 backdrop-blur-md"
                >
                  <div>
                    {/* Top Section: Stars & Quote */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:fill-white group-hover:text-white transition-colors" 
                          />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-indigo-500/20 dark:text-indigo-400/20 group-hover:text-white/30 transition-colors transform rotate-180" />
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 group-hover:text-white/90 transition-colors font-medium">
                      "{review.comment}"
                    </p>
                  </div>

                  {/* User Profile Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/60 group-hover:border-white/20 transition-colors">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-background group-hover:border-white/50 transition-colors shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-foreground group-hover:text-white transition-colors">
                        {review.name}
                      </h4>
                      <p className="text-xs font-semibold text-muted-foreground group-hover:text-indigo-200 dark:group-hover:text-indigo-200 transition-colors">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}