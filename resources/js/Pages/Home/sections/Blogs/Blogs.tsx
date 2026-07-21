import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowUpRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

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

interface BlogProps {
  blogs: {
    id: number;
    title: string;
    slug: string;
    image: string | null; 
    body: string;
    seo_meta_title: string | null;
    seo_meta_description: string | null;
    seo_meta_keywords: string | null;
    og_title: string | null;
    og_description: string | null;
    og_image: string | null;
    is_published: boolean;
    created_at: string;
    updated_at: string;
  }[];
}



export default function BlogSection({ blogs }: BlogProps) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-primary font-blinker tracking-tight"
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
              className="group cursor-pointer shadow-sm p-2.5 rounded-xl border"
            >
              {/* Image Wrapper */}

              <Link href={route('blogs.show', blog.slug)}>
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/3] bg-slate-100">
                {blog.image ? (
                      <img
                        src={`/storage/${blog.image}`} 
                        alt={blog.title}
                        className="w-full h-full object-cover opacity-90 dark:opacity-75 transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 text-xs">
                        No Image Preview Available
                      </div>
                    )}

                

                {/* Glassmorphism Info Bar */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl flex items-center justify-between text-white">
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> 
                      {new Date(blog.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}

                      </span>
                    
                  </div>
                  <div className="bg-white text-slate-900 p-2 rounded-full transition-transform group-hover:rotate-45">
                     <Link href={route('blogs.show', blog.slug)}><ArrowUpRight size={16} /> </Link>
                  </div>
                </div>
              </div>
              </Link>
              

              {/* Content */}
              <div className="px-2">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-indigo-600 transition-colors leading-snug">
                  {blog.title}
                </h3>
                

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
