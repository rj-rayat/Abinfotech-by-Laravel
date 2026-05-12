
import TopNav from './TopNav'
import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import logoImage from "../../../../public/logo-2.png";
import { BarChart, Globe, MapPinIcon, MessageCircle, PhoneIcon, SearchCheckIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import MenuItem from './menu-item';
import { ThemeToggle } from './theme';
import { SideBar } from './drawer';

export default function Navbar() {
const [isScrolled, setIsScrolled] = useState(false)



 useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      {/* 1. Top Modern Header (সবার উপরের কালারড বার) */}

     <TopNav/>
    <div className='fixed top-10 left-0 right-0 z-50 flex justify-center transition-all duration-300 pt-0 '>

      
          

            {/* 2. Main Navigation Header */}
            
                  <header
                  className={cn(
                      "flex h-16 items-center justify-between transition-all duration-300 px-6",
                      isScrolled 
                        ? "w-[95%] fixed top-1.5  md:w-11/12 rounded-full mt-2 border bg-background backdrop-blur-md shadow-lg" 
                        : "w-full border-b bg-background"
                    )}
                  >
                    <Link href="/" className="font-bold text-2xl tracking-tighter">
                      <img className='h-10 hidden md:flex' src={logoImage} alt="" />
                      <img className='h-10 flex md:hidden' src={logoImage} alt="" />
                    </Link>
            
                  <div className="hidden md:flex justify-center ml-8 flex-1">
                    <MenuItem/>
                  </div>
            
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center gap-2">
                        <div>
                          <ThemeToggle/>
                        </div>
                    </div>
            
                    <div className="flex md:hidden items-center gap-3 ml-4">
                        <SideBar/>
                    </div>
                  </div>
            
                  
                  </header>
            
                  
             
           
 
    </div>
    </>
  )
}

