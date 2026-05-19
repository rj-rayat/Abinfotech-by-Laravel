import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, DollarSign, MessageSquare, Send } from 'lucide-react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log(formData);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden selection:bg-indigo-500/30">
      {/* Background Layer Tech Elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-background rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* ================= LEFT SIDE: INTERACTIVE MAP BENTO ================= */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group">
              {/* Background Neon Aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-[3rem] blur-2xl group-hover:bg-indigo-500/15 transition-all duration-700" />
              
              {/* Map Wrapper Card */}
              <div className="relative bg-background p-4 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
                <div className="p-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-2">Our Location</span>
                  <h3 className="text-3xl font-black font-koulen tracking-tight text-primary">Where We Are</h3>
                </div>

                {/* Google Map Iframe Integration */}
                <div className="rounded-[2rem] overflow-hidden h-[400px] w-full border border-slate-200/60 shadow-inner relative bg-slate-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.587399587844!2d90.3541813!3d23.7629255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755cbf47fa792db%3A0x88f259798436cd97!2sAb%20Infotech!5e0!3m2!1sen!2sbd!4v1716156000000!3m2!1sen!2sbd"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: PREMIUM FORM BENTO ================= */}
          <div className="lg:col-span-7">
            <div className="bg-background backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/30">
              
              <div className="mb-10">
                <h3 className="text-4xl font-black font-koulen tracking-tight text-primary mb-2">Send Us a Message</h3>
                <p className="text-slate-400 text-sm font-medium">Have a project framework in mind? Let's sync your corporate digital blueprints.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-400 block mb-2 ml-1">Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 placeholder-slate-300 focus:outline-none focus:border-indigo-600 focus:shadow-lg focus:shadow-indigo-500/5 transition-all"
                      />
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-400 block mb-2 ml-1">Email</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="name@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 placeholder-slate-300 focus:outline-none focus:border-indigo-600 focus:shadow-lg focus:shadow-indigo-500/5 transition-all"
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Row 2: Phone & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-400 block mb-2 ml-1">Phone</label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        placeholder="+880 17xx xxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 placeholder-slate-300 focus:outline-none focus:border-indigo-600 focus:shadow-lg focus:shadow-indigo-500/5 transition-all"
                      />
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-400 block mb-2 ml-1">Budget</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="e.g. $500 - $1000"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 placeholder-slate-300 focus:outline-none focus:border-indigo-600 focus:shadow-lg focus:shadow-indigo-500/5 transition-all"
                      />
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="relative">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-400 block mb-2 ml-1">Message</label>
                  <div className="relative">
                    <textarea 
                      rows={5}
                      placeholder="Describe your design or development vision..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 placeholder-slate-300 focus:outline-none focus:border-indigo-600 focus:shadow-lg focus:shadow-indigo-500/5 transition-all resize-none"
                    />
                    <MessageSquare className="absolute left-4 top-6 text-slate-300 w-5 h-5" />
                  </div>
                </div>

                {/* Action Submit Button Area */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  {/* Google reCAPTCHA Space */}
                  <div className="bg-white border border-slate-200 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-sm flex-none max-w-max">
                    <input type="checkbox" id="captcha" className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" required />
                    <label htmlFor="captcha" className="text-xs font-bold text-slate-500 select-none cursor-pointer">I'm not a robot</label>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-3 group"
                  >
                    Submit Request
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}