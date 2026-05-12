
import TopNav from './TopNav'
import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import logoImage from "../../../../public/logo.jpg";
import { BarChart, Globe, MapPinIcon, MessageCircle, PhoneIcon, SearchCheckIcon, X } from 'lucide-react';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About us', href: '/about' },
        { name: 'Portfolio', href: '/portfolio', dropdown: true },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Blog', href: '/blog', dropdown: true },
        { name: 'Contact', href: '/contact' },
    ];
  return (


    <div>
        
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            {/* 1. Top Modern Header (সবার উপরের কালারড বার) */}
            <div className="bg-slate-900 text-slate-100 text-sm py-2 px-4 md:px-8 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 hover:text-white transition-colors">
                        <PhoneIcon className="h-4 w-4 text-sky-400" />
                        <span>Call: +8801978224636</span>
                    </div>
                    <div className="hidden md:flex items-center gap-2 hover:text-white transition-colors">
                        <MessageCircle className="h-4 w-4 text-sky-400" />
                        <span>Email: info@abinfotech.com.bd</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4 text-sky-400" />
                        <span>Address: 716/12, Adabor 10, Dhaka</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <Globe className="h-4 w-4 text-sky-400" />
                    <span>Bangladesh (BD)</span>
                    <span className="text-xs text-slate-400">(EN)</span>
                </div>
            </div>

            {/* 2. Main Navigation Header */}
            <nav className="bg-white py-4 px-4 md:px-8 border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src={logoImage}
                            alt="AB Infotech Ltd Logo"
                            className="h-10 w-auto" // লোগো সাইজ আধুনিক করুন
                        />
                    </Link>

                    {/* Desktop Menu - Centered & Modern */}
                    <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className={`flex items-center gap-1 group transition-all duration-300 ${index === 0 ? 'text-sky-600 font-bold' : 'hover:text-sky-600'}`}
                            >
                                <span>{link.name}</span>
                                {link.dropdown && (
                                    <span className="text-xs text-gray-400 transition-transform duration-300 group-hover:rotate-180">▼</span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Icons (Search & Menu) */}
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-sky-600 focus:outline-none">
                            <SearchCheckIcon className="h-6 w-6" />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-7 w-7" />
                            ) : (
                                <BarChart className="h-7 w-7" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* 3. Mobile Navigation Menu (Hidden by default, shown on button click) */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full p-4 flex flex-col gap-3 border-t border-gray-100 transition-all duration-300">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 ${index === 0 ? 'bg-sky-50 text-sky-700 font-semibold' : 'text-gray-700'}`}
                            onClick={() => setIsMenuOpen(false)} // মেনু আইটেমে ক্লিক করলে মেনু বন্ধ করুন
                        >
                            <span>{link.name}</span>
                            {link.dropdown && (
                                <span className="text-xs text-gray-400">▼</span>
                            )}
                        </Link>
                    ))}
                    {/* মোবাইল মেনুতে বাকি কন্টেন্ট */}
                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-2">
                        <div className="flex items-center gap-2">
                            <MessageCircle className="h-4 w-4" />
                            <span>info@abinfotech.com.bd</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPinIcon className="h-4 w-4" />
                            <span>Address: 716/12, Adabor 10, Dhaka</span>
                        </div>
                    </div>
                </div>
            )}
        </header>
    </div>
  )
}

