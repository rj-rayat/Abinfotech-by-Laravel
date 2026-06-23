import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const categories = ["All", "React", "WordPress", "Next", "Laravel", "Django", "Flutter"];

interface DBProject {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  github_link?: string; 
}

interface ProjectSectionProps {
  projects?: DBProject[]; 
}

export default function ProjectSection({ projects = [] }: ProjectSectionProps) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? projects
    : projects?.filter(p => p.category?.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden transition-colors duration-300">
    
      <div className="absolute -right-40 top-40 w-[600px] h-[600px] bg-indigo-600/5 dark:bg-indigo-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex col-span-1 items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-indigo-600 dark:bg-sky-500"></div>
              <span className="text-indigo-600 dark:text-sky-400 font-bold uppercase tracking-widest text-sm">Selected Works</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-primary font-blinker tracking-tight">
              Our Premium <span className="text-indigo-600 dark:text-sky-400">Projects.</span>
            </h2>
          </div>

          {/* Tab Filters */}
          <div className="flex col-span-2 flex-wrap gap-2 md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeTab === cat
                    ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500 shadow-lg shadow-indigo-600/20 dark:shadow-indigo-500/30"
                    : "bg-slate-50 text-slate-500 border-slate-100 hover:border-indigo-200 hover:text-indigo-600 dark:bg-white/[0.02] dark:border-white/[0.06] dark:text-slate-400 dark:hover:border-sky-500/30 dark:hover:text-sky-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects?.map((project) => {
              
         
              const imageSrc = project.image?.startsWith('/') || project.image?.startsWith('http')
                ? project.image
                : `/storage/${project.image}`;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-white/[0.06] shadow-sm aspect-[4/3]">
                    <img
                      src={imageSrc} // 👈 ফিক্সড ডাইনামিক সোর্স
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-indigo-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-white dark:bg-slate-900 rounded-full text-indigo-600 dark:text-sky-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-sky-500 dark:hover:text-slate-950 shadow-md transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                      <a 
                        href={project.github_link || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-white dark:bg-slate-900 rounded-full text-indigo-600 dark:text-sky-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-sky-500 dark:hover:text-slate-950 shadow-md transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mt-6 px-2">
                    <span className="text-indigo-600 dark:text-sky-400 text-sm font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-primary mt-2 group-hover:text-indigo-600 dark:group-hover:text-sky-400 transition-colors cursor-pointer leading-tight font-blinker">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Projects Found */}
        {filteredProjects?.length === 0 && (
          <div className="text-center py-20 border border-dashed border-border rounded-[2rem] dark:bg-white/[0.01]">
            <p className="text-slate-400 dark:text-slate-500 text-lg font-medium">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}