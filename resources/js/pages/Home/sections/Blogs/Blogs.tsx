import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    category: "Programming",
    title: "Top 7 Creative Ways to Boost Your Media",
    description: "Branding has been around since 350 A.D and is derived from the word Brandr, meaning to burn.",
    date: "13 Mar 2026",
    author: "Admin",
    image: "/images/blog1.jpg",
    color: "bg-blue-600"
  },
  {
    id: 2,
    category: "Agency, Consulting",
    title: "Top 6 Articles You Must Read",
    description: "Branding has been around since 350 A.D and is derived from the word Brandr, meaning to burn.",
    date: "13 Mar 2026",
    author: "Admin",
    image: "/images/blog2.jpg",
    color: "bg-purple-600"
  },
  {
    id: 3,
    category: "Design, UI/UX",
    title: "Tech designer John Doe's latest design",
    description: "Branding has been around since 350 A.D and is derived from the word Brandr, meaning to burn.",
    date: "13 Mar 2026",
    author: "Admin",
    image: "/images/blog3.jpg",
    color: "bg-indigo-600"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-primary font-koulen tracking-tight"
          >
            Our Last <span className="text-indigo-600">News.</span>
          </motion.h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Wrapper */}
              <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[4/3] bg-slate-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Floating Category Badge */}
                <div className={`absolute top-6 left-6 ${blog.color} text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg`}>
                  {blog.category}
                </div>

                {/* Glassmorphism Info Bar */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl flex items-center justify-between text-white">
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {blog.author}</span>
                  </div>
                  <div className="bg-white text-slate-900 p-2 rounded-full transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-indigo-600 transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-slate-500 leading-relaxed line-clamp-2">
                  {blog.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Read More <div className="h-[2px] w-8 bg-indigo-600"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
