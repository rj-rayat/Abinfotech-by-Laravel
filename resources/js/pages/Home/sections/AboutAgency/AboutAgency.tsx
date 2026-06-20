import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ab from "../../../../../../public/ab.png"
import team from "../../../../../../public/team.png"

interface AboutAgencyData {
  badge: string;
  title: string;
  description: string;
  years_of_experience: number;
  main_image: string | null;
  small_image: string | null;
  feature_1: string;
  feature_2: string;
  feature_3: string;
  feature_4: string;
  button_text: string;
  button_url: string;
}

interface AboutAgencyProps {
  aboutAgency?: AboutAgencyData; // Data passed from Laravel controller via Inertia
}

export default function AboutAgency({ aboutAgency }: AboutAgencyProps) {
  // Fallback handling for images
  const mainImgUrl = aboutAgency?.main_image ? `/storage/${aboutAgency.main_image}` : team;
  const smallImgUrl = aboutAgency?.small_image ? `/storage/${aboutAgency.small_image}` : ab;

  // Features mapping from dynamic inputs
  const features = [
    aboutAgency?.feature_1 || 'Creative Design',
    aboutAgency?.feature_2 || 'Quick Delivery',
    aboutAgency?.feature_3 || '24/7 Support',
    aboutAgency?.feature_4 || 'Expert Team'
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Creative Image Stack */}
          <div className="relative group">
            {/* Main Office Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-accent"
            >
              <img
                src={mainImgUrl}
                alt="Our Team"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Logo/Identity Box - Floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -right-8 -bottom-8 z-20 w-64 h-64 bg-slate-950 rounded-3xl p-8 flex items-center justify-center shadow-2xl border-4 border-white"
            >
              <img src={smallImgUrl} alt="AB Infotech" className="w-full object-contain" />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -left-10 bottom-12 z-30 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-4">
                <span className="text-6xl font-black font-blinker text-slate-900 leading-none">
                  {aboutAgency?.years_of_experience ?? 5}
                </span>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-tighter leading-tight">
                  Years of<br />Experience
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-indigo-600"></div>
                <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm">
                  {aboutAgency?.badge || 'About Agency'}
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-primary mb-8 leading-[1.1] tracking-tight font-blinker">
                {aboutAgency?.title ? (
                  aboutAgency.title.includes('Super Projects.') ? (
                    <>
                      {aboutAgency.title.replace('Super Projects.', '')}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 block md:inline">
                        Super Projects.
                      </span>
                    </>
                  ) : (
                    aboutAgency.title
                  )
                ) : (
                  <>
                    Unlimited Skills for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                      Super Projects.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {aboutAgency?.description || 'Whether you need a new logo, website, video, marketing campaign, or ebook created for your business, the key to making the project a success starts with having a well-thought-out creative brief.'}
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-indigo-600 w-5 h-5" />
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a href={aboutAgency?.button_url || '#'} className="inline-block">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-10 py-7 text-lg font-bold shadow-lg transition-all hover:-translate-y-1">
                  {aboutAgency?.button_text || 'Get The Offer'} 
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}