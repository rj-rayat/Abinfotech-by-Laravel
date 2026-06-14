import React from 'react';
import { Phone, Mail, MapPin, Globe, ChevronDown, PhoneIcon, MessageCircle, MapPinIcon } from 'lucide-react';
import { usePage } from '@inertiajs/react';

const TopNav = () => {
      const {global_settings} = usePage().props as any
    
    return (
        <div className="bg-slate-900 text-slate-100 text-sm py-2 px-4 md:px-8 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-xs lg:text-md hover:text-white transition-colors">
                        <PhoneIcon className="h-4 w-4 text-sky-400" />
                        <span>Call: {global_settings?.company_phone}</span>
                    </div>
                    <div className="hidden md:flex items-center gap-2 hover:text-white transition-colors">
                        <MessageCircle className="h-4 w-4 text-sky-400" />
                        <span>Email: {global_settings?.company_email}</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4 text-sky-400" />
                        <span>Address: {global_settings?.company_address}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <Globe className="h-4 w-4 text-sky-400" />
                    <span>Bangladesh (BD)</span>
                    <span className="text-xs text-slate-400">(EN)</span>
                </div>
            </div>
    );
};

export default TopNav;
