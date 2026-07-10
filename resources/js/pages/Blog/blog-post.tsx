import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowUpRight, Search } from 'lucide-react';
import { Head, Link } from '@inertiajs/react';

interface BlogItem {
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
}

interface BlogPageProps {
  blogs: BlogItem[]; 
}

export default function BlogPage({ blogs = [] }: BlogPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

 
  const filteredPosts = blogs.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           post.body.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="bg-background text-foreground min-h-screen pb-24 selection:bg-indigo-500/30">
      <Head title="Our Recent News & Blogs" />

      {/* ================= 1. PAGE HEADER ================= */}
      <div className="relative py-24 bg-background overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/[0.03] blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 block mb-3">Insights & Trends</span>
          <h1 className="text-5xl md:text-7xl font-black text-foreground font-blinker tracking-tight mb-4 uppercase">
            Our Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">News.</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground">
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Home
            </Link>
            <span>•</span>
            <span className="text-foreground/80">Our recent news</span>
          </div>
        </div>
      </div>

      {/* ================= 2. MAIN LAYOUT CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ================= LEFT SIDE: BLOG FEED ================= */}
          <div className="lg:col-span-8 space-y-10">

            {/* 🚀 Dynamic Blog Cards Loop */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-card/10 border border-dashed rounded-[2.5rem] p-10">
                <p className="text-muted-foreground text-sm font-medium">No matching blog posts found!</p>
              </div>
            ) : (
              filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                  className="group bg-card/40 dark:bg-white/[0.01] rounded-[2.5rem] border border-border/80 dark:border-white/[0.04] shadow-xl shadow-slate-200/20 dark:shadow-black/40 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-black/60 hover:border-indigo-500/50 dark:hover:border-indigo-500/30 transition-all duration-500 flex flex-col backdrop-blur-md"
                >
                  {/* Image Wrapper */}
                  <Link href={route('blogs.show', post.slug)} className="relative overflow-hidden aspect-[21/9] w-full bg-muted block">
                    {post.image ? (
                      <img
                        src={`/storage/${post.image}`} 
                        alt={post.title}
                        className="w-full h-full object-cover opacity-90 dark:opacity-75 transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 text-xs">
                        No Image Preview Available
                      </div>
                    )}

                    {/* Floating Date Badge */}
                    <div className="absolute top-6 left-6 bg-slate-950/50 dark:bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
                      <Calendar size={13} />
                      {new Date(post.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>

                    {/* Meta Glass Bar */}
                    <div className="absolute bottom-6 right-6 bg-slate-950/50 dark:bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-xs font-semibold flex items-center gap-1.5">
                      <User size={13} className="text-indigo-400" />
                      <span>By Admin</span>
                    </div>
                  </Link>

                  {/* Post Details */}
                  <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Tags / Keywords Display */}
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-widest mb-4">
                        <Tag size={12} className="stroke-[3]" />
                        <span className="line-clamp-1">
                          {post.seo_meta_keywords || 'General'}
                        </span>
                      </div>

                      {/* Title Linked to Single Post */}
                      <Link href={route('blogs.show', post.slug)}>
                        <h2 className="text-2xl md:text-3xl font-bold font-blinker tracking-tight text-foreground mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>
                    </div>

                    {/* Dynamic Read More Trigger */}
                    <Link href={`/blogs/${post.slug}`} className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between group/btn">
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-wider group-hover/btn:gap-4 transition-all">
                        Continue Reading <div className="h-[2px] w-8 bg-indigo-600 dark:bg-indigo-500" />
                      </div>

                      <div className="w-12 h-12 bg-muted dark:bg-white/[0.03] border border-border dark:border-white/[0.05] text-foreground group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white rounded-2xl flex items-center justify-center transition-all group-hover:rotate-45 shadow-sm">
                         <Link href={route('blogs.show', post.slug)}><ArrowUpRight size={18} /></Link>
                      </div>
                    </Link>
                  </div>
                </motion.article>
              ))
            )}
          </div>

          {/* ================= RIGHT SIDE: MODERN SIDEBAR ================= */}
          <div className="lg:col-span-4 space-y-10">

            {/* Widget 1: Search Articles */}
            <div className="bg-card/40 dark:bg-white/[0.01] rounded-[2rem] p-6 border border-border/80 dark:border-white/[0.04] shadow-xl shadow-slate-200/20 dark:shadow-black/40 backdrop-blur-md">
              <h3 className="text-base font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                Search Articles
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type to search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-muted/50 dark:bg-black/20 border border-border dark:border-white/[0.05] rounded-2xl text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 focus:bg-background transition-all text-foreground font-medium placeholder:text-muted-foreground/60"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              </div>
            </div>

            {/* Widget 2: About Us Bento Box */}
            <div className="bg-indigo-600 dark:bg-indigo-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-indigo-600/10 dark:shadow-black/50">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />

              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-200 block mb-2">Who we are</span>
                <h3 className="text-3xl font-black font-blinker tracking-tight mb-4 uppercase">About Us</h3>
                <p className="text-indigo-100 text-sm leading-relaxed mb-6 font-medium">
                  Do you believe that your brand needs help from a creative team? Contact us to start working for your project!
                </p>
                <Link href="/about" className="block text-center w-full py-4 bg-white hover:bg-zinc-950 text-indigo-600 hover:text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md active:scale-95">
                  Read More
                </Link>
              </div>
            </div>

            {/* Widget 3: Elegant Banner Ad */}
            <div className="bg-card/40 dark:bg-white/[0.01] rounded-[2.5rem] border border-border/80 dark:border-white/[0.04] p-6 shadow-xl shadow-slate-200/20 dark:shadow-black/40 overflow-hidden relative group cursor-pointer backdrop-blur-md">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted relative mb-4">
                <img
                  src="/images/banner-ad.jpg"
                  alt="Banner Ad"
                  className="w-full h-full object-cover opacity-90 dark:opacity-80 transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute top-4 left-4 bg-slate-950/70 dark:bg-black/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/10">
                  Sponsored
                </div>
              </div>
              <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-blinker tracking-tight uppercase">
                Grow your business infrastructure with AI solutions
              </h4>
              <p className="text-muted-foreground text-xs font-medium">Explore premium enterprise packages.</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}