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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-primary uppercase tracking-widest text-sm">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-primary font-koulen tracking-tight">
              What our <span className="text-indigo-600">Clients Say.</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="p-4 rounded-full text-white border border-slate-200 bg-secondary hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="p-4 rounded-full text-white border border-slate-200 bg-secondary hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="embla overflow-visible" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0">
                <div className="bg-background p-10 rounded-[2.5rem] border border-gray-200 shadow-xl shadow-slate-200/40 h-full flex flex-col group hover:bg-indigo-600 transition-all duration-500">
                 <div className='flex justify-between'>


                  <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:fill-white group-hover:text-white transition-colors" />
                  ))}
                </div>

                <div>
                         <Quote className="w-10 h-10 text-indigo-100 group-hover:text-indigo-500 mb-6 transition-colors" />
                    </div>
                 </div>

                  <p className="text-slate-600 text-lg leading-relaxed mb-8 group-hover:text-white transition-colors flex-grow">
                    "{review.comment}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-slate-50 group-hover:border-indigo-500">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-white">{review.name}</h4>
                      <p className="text-sm text-slate-400 group-hover:text-indigo-200">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


