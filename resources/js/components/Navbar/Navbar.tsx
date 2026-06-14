
import TopNav from './TopNav'
import React, { useEffect, useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import logoImage from "../../../../public/logo-2.png";
import { BarChart, Globe, MapPinIcon, MessageCircle, PhoneIcon, SearchCheckIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import MenuItem from './menu-item';
import { ThemeToggle } from './theme';
import { SideBar } from './drawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { global_settings } = usePage().props as any;

  const logoLight = global_settings?.logo_light_path ? `/storage/${global_settings.logo_light_path}` : '/default-logo-light.png';
  const logoDark = global_settings?.logo_dark_path ? `/storage/${global_settings.logo_dark_path}` : '/default-logo-dark.png';



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

      <TopNav />
      <div className='z-50 flex justify-center transition-all duration-300 pt-0 '>




        {/* 2. Main Navigation Header */}

        <header
          className={cn(
            "flex h-16 items-center justify-between transition-all duration-300 px-6",
            isScrolled
              ? "w-[95%] fixed top-1 z-50  md:w-11/12 rounded-full mt-2 border bg-background backdrop-blur-md shadow-lg"
              : "w-full border-b bg-background"
          )}
        >
          <Link href="/" className="font-bold text-2xl tracking-tighter">
            <img
              className="h-10 w-auto object-contain dark:hidden"
              src={logoLight}
              alt="Logo"
            />

            <img
              className="h-10 w-auto object-contain hidden dark:block"
              src={logoDark}
              alt="Logo"
            />
          </Link>

          <div className="hidden md:flex justify-center ml-8 flex-1">
            <MenuItem />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center gap-2">
              <div>
                <ThemeToggle />
              </div>
            </div>

            <div className="flex md:hidden items-center gap-3 ml-4">
              <SideBar />
            </div>
          </div>


        </header>





      </div>
    </>
  )
}

