import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// ক্যাটাগরি লিস্ট
const categories = ["All", "React", "WordPress", "Next", "Laravel", "Django", "Flutter"];

// প্রজেক্ট ডাটা (উদাহরণ হিসেবে কয়েকটি দেওয়া হলো)
const projects = [
  {
    id: 1,
    title: "Janobani - Online News Portal",
    category: "Next",
    image: "/images/news-portal.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Janobani - Digital E-Paper",
    category: "WordPress",
    image: "/images/epaper.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    category: "React",
    image: "/images/dashboard.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Inventory System",
    category: "Laravel",
    image: "/images/inventory.jpg",
    link: "#"
  }
];

export default function Project() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-indigo-600"></div>
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Selected Works</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-primary font-koulen tracking-tight">
              Our Premium <span className="text-indigo-600">Projects.</span>
            </h2>
          </div>

          {/* Tab Filters - Scrollable on Mobile */}
          <div className="flex flex-wrap gap-2 md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeTab === cat
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200"
                  : "bg-slate-50 text-slate-500 border-slate-100 hover:border-indigo-200 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid with Framer Motion Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
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
                <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-100 shadow-sm aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-indigo-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <button className="p-4 bg-white rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                      <ExternalLink className="w-6 h-6" />
                    </button>
                    <button className="p-4 bg-white rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                      <Github className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-6 px-2">
                  <span className="text-indigo-600 text-sm font-bold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-2xl font-bold text-primary mt-2 group-hover:text-indigo-600 transition-colors cursor-pointer leading-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
