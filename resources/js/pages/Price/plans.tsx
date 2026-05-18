import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, Sparkles } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$29",
    period: "month",
    description: "No coding skills required to create unique sites. Customize your site easily.",
    features: ["10GB Disk Space", "100GB Monthly Bandwidth", "20 Email Accounts", "Unlimited Subdomains"],
    isPopular: false,
    cta: "Get the offer"
  },
  {
    id: 2,
    name: "Professional Plan",
    price: "$79",
    period: "month",
    description: "Perfect for scaling agencies and businesses needing high-performance delivery.",
    features: ["50GB Disk Space", "500GB Monthly Bandwidth", "100 Email Accounts", "Unlimited Subdomains", "Priority Support 24/7"],
    isPopular: true,
    cta: "Get the offer"
  },
  {
    id: 3,
    name: "Advanced Plan",
    price: "$149",
    period: "month",
    description: "Full infrastructure management with custom AI integration tailored for enterprise.",
    features: ["Unlimited Disk Space", "Unlimited Bandwidth", "Unlimited Email Accounts", "Unlimited Subdomains", "Dedicated Manager"],
    isPopular: false,
    cta: "Get the offer"
  }
];

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-24 bg-background relative overflow-hidden selection:bg-indigo-500/30">
      {/* Dynamic Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="h-[2px] w-8 bg-indigo-600"></span>
            <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm">Flexible Pricing</span>
            <span className="h-[2px] w-8 bg-indigo-600"></span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-primary font-koulen tracking-tight mb-8">
            Choose Your <span className="text-indigo-600">Growth Plan.</span>
          </h2>

          {/* Monthly / Yearly Toggle */}
          <div className="inline-flex items-center gap-1 p-1.5 bg-white border border-slate-100 shadow-sm rounded-2xl">
            <button 
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${billingPeriod === 'monthly' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${billingPeriod === 'yearly' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Yearly 
              <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md font-black uppercase">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-[2.5rem] bg-white p-10 flex flex-col justify-between border transition-all duration-500 ${
                plan.isPopular 
                  ? 'border-indigo-600 shadow-2xl shadow-indigo-200/50 lg:scale-105 z-10' 
                  : 'border-slate-100 shadow-xl shadow-slate-200/30 hover:border-slate-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles size={14} />
                  Most Popular
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{plan.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed min-h-[40px]">{plan.description}</p>
                </div>

                {/* Pricing Area */}
                <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-slate-50">
                  <span className="text-5xl font-black text-slate-950 font-koulen tracking-tight">
                    {billingPeriod === 'yearly' ? `$${parseInt(plan.price.replace('$', '')) * 10 - 20}` : plan.price}
                  </span>
                  <span className="text-slate-400 font-medium text-sm">/ {plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium group">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-none ${plan.isPopular ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-500'}`}>
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="flex-grow">{feature}</span>
                      <HelpCircle size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button 
                className={`w-full py-4 rounded-2xl font-bold text-base transition-all active:scale-[0.98] ${
                  plan.isPopular 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-500/20' 
                    : 'bg-slate-50 hover:bg-slate-900 text-slate-900 hover:text-white border border-slate-100'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}