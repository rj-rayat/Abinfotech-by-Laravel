import React from 'react';
import { Phone, Mail, MapPin, Globe, ChevronDown } from 'lucide-react';

const TopNav = () => {
    return (
        <div className="bg-[#0b1120] text-gray-300 py-2.5 px-4 md:px-12 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-[13px] font-medium">

                {/* Left Side: Contact Info */}
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-5 lg:gap-8">
                    {/* Phone */}
                    <a href="tel:+8801978224636" className="flex items-center gap-2 hover:text-sky-400 transition-colors group">
                        <div className="p-1 rounded-full bg-white/5 group-hover:bg-sky-500/20 transition-colors">
                            <Phone size={14} className="text-sky-400" />
                        </div>
                        <span>+8801978224636</span>
                    </a>

                    {/* Email */}
                    <a href="mailto:info@abinfotech.com.bd" className="hidden sm:flex items-center gap-2 hover:text-sky-400 transition-colors group">
                        <div className="p-1 rounded-full bg-white/5 group-hover:bg-sky-500/20 transition-colors">
                            <Mail size={14} className="text-sky-400" />
                        </div>
                        <span>info@abinfotech.com.bd</span>
                    </a>

                    {/* Address */}
                    <div className="hidden lg:flex items-center gap-2 group">
                        <div className="p-1 rounded-full bg-white/5">
                            <MapPin size={14} className="text-sky-400" />
                        </div>
                        <span>716/12, Adabor 10, Dhaka</span>
                    </div>
                </div>

                {/* Right Side: Language & Settings */}
                <div className="flex items-center gap-6 border-t md:border-t-0 border-white/10 pt-2 md:pt-0 w-full md:w-auto justify-center">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors group">
                        <Globe size={14} className="text-sky-400" />
                        <span className="flex items-center gap-1.5">
                            <img
                                src="https://flagcdn.com/w20/gb.png"
                                alt="English"
                                className="w-4 h-3 object-cover rounded-sm"
                            />
                            English
                        </span>
                        <ChevronDown size={12} className="group-hover:translate-y-0.5 transition-transform" />
                    </div>

                    {/* Social links (Optional but looks professional) */}
                    <div className="hidden xl:flex items-center gap-3 ml-2 pl-6 border-l border-white/10">
                        <span className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">Follow us</span>
                        {/* আপনি এখানে ফেসবুক বা লিংকডইন আইকন দিতে পারেন */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
