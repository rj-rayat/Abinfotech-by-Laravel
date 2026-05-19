import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowUpRight, Search, TrendingUp, Grid, List } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Top 7 Creative Ways to Boost Your Media",
    category: "Programming",
    date: "13 Mar 2026",
    author: "Admin",
    image: "/images/blog1.jpg", // আপনার ইমেজ পাথ দিন
    excerpt: "Branding has been around since 350 A.D and is derived from the word Brandr, meaning to burn. By the 1500s, it had come to mean the mark that ranchers burned on cattle to signify ownership. Yet branding today is more than just a look or a logo...",
    featured: true
  },
  {
    id: 2,
    title: "Top 6 Articles You Must Read",
    category: "Agency, Consulting",
    date: "13 Mar 2026",
    author: "Admin",
    image: "/images/blog2.jpg",
    excerpt: "Branding has been around since 350 A.D and is derived from the word Brandr, meaning to burn. By the 1500s, it had come to mean the mark that ranchers burned on cattle to signify ownership...",
    featured: false
  },
  {
    id: 3,
    title: "Tech designer John Doe's latest design",
    category: "Design, UI/UX",
    date: "13 Mar 2026",
    author: "Admin",
    image: "/images/blog3.jpg",
    excerpt: "Branding has been around since 350 A.D and is derived from the word Brandr, meaning to burn. By the 1500s, it had come to mean the mark that ranchers burned on cattle to signify ownership...",
    featured: false
  }
];

const categories = ["All Stories", "Programming", "Agency, Consulting", "Design, UI/UX", "Marketing"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-background min-h-screen  pb-24 selection:bg-indigo-500/30">
      
      {/* 1. Page Header (Modern Clean Breadcrumb & Title) */}
      <div className="relative py-20 bg-background  overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 block mb-3">Insights & Trends</span>
          <h1 className="text-5xl md:text-7xl font-black text-primary font-koulen tracking-tight mb-4">
            Our Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">News.</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-400">
            <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
            <span>•</span>
            <span className="text-slate-600">Our recent news</span>
          </div>
        </div>
      </div>

      {/* 2. Main Layout Container */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* ================= LEFT SIDE: BLOG FEED ================= */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Category Pills Slider (Modern Touch) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider whitespace-nowrap border transition-all ${
                    activeCategory === cat
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                      : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Blog Cards Loop */}
            <div className="space-y-10">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-background rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 overflow-hidden hover:shadow-2xl hover:shadow-indigo-100/50 hover:border-indigo-100 transition-all duration-500 flex flex-col"
                >
                  {/* Image Wrapper */}
                  <div className="relative overflow-hidden aspect-[21/9] w-full bg-slate-900">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Date Badge */}
                    <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
                      <Calendar size={14} />
                      {post.date}
                    </div>

                    {/* Meta Glass Bar */}
                    <div className="absolute bottom-6 right-6 bg-slate-950/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-xs font-semibold flex items-center gap-1.5">
                      <User size={14} className="text-indigo-400" />
                      <span>By {post.author}</span>
                    </div>
                  </div>

                  {/* Post Details */}
                  <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Tag */}
                      <div className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest mb-4">
                        <Tag size={12} className="stroke-[3]" />
                        {post.category}
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-bold primary mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-500 leading-relaxed font-medium mb-8 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Dynamic Read More Trigger */}
                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-wider group-hover:gap-4 transition-all">
                        Continue Reading <div className="h-[2px] w-8 bg-indigo-600" />
                      </div>
                      
                      <div className="w-12 h-12 bg-slate-50 text-slate-900 group-hover:bg-indigo-600 group-hover:text-white rounded-2xl flex items-center justify-center transition-all group-hover:rotate-45">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

          </div>


          {/* ================= RIGHT SIDE: MODERN SIDEBAR ================= */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* Widget 1: Premium Search Card */}
            <div className="bg-background rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-200/30">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                Search Articles
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type to search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-800 font-medium"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              </div>
            </div>

            {/* Widget 2: About Us Bento Box */}
            <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-indigo-200">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-200 block mb-2">Who we are</span>
                <h3 className="text-3xl font-black font-koulen tracking-tight mb-4">About Us</h3>
                <p className="text-indigo-100 text-sm leading-relaxed mb-6 font-medium">
                  Do you believe that your brand needs help from a creative team? Contact us to start working for your project!
                </p>
                <button className="w-full py-4 bg-white hover:bg-slate-900 text-indigo-600 hover:text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md">
                  Read More
                </button>
              </div>
            </div>

            {/* Widget 3: Elegant Banner Ad */}
            <div className="bg-background rounded-[2.5rem] border border-slate-100 p-6 shadow-xl shadow-slate-200/30 overflow-hidden relative group cursor-pointer">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 relative mb-4">
                <img 
                  src="/images/banner-ad.jpg" 
                  alt="Banner Ad" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-slate-950/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md">
                  Sponsored
                </div>
              </div>
              <h4 className="text-base font-bold text-primary mb-2 group-hover:text-indigo-600 transition-colors">
                Grow your business infrastructure with AI solutions
              </h4>
              <p className="text-slate-400 text-xs font-medium">Explore premium enterprise packages.</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}