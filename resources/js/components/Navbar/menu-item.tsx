"use client";

import { ArrowRight, CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import * as React from "react";


import { Button } from "../ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { Link } from "@inertiajs/react";


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Digital Marketing with Freelancing",
    href: "/docs/primitives/alert-dialog",
    description:
      "Smart sell, Smart Career",
  },
  {
    title: "Web Design with AI",
    href: "",
    description:
      "You will learn extraordinary website design",
  },
  {
    title: "Graphics Design",
    href: "",
    description:
      "Paint your dream in tool",
  },
  {
    title: "Office Management System",
    href: "",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Web Development with PHP and Laravel",
    href: "",
    description:
      "Learn most demandable technology of software industry",
  },
  {
    title: "Full Stack Web Development with MERN and AI",
    href: "/docs/primitives/tooltip",
    description:
      "Your career path is here",
  },
];

export default function MenuItem() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList>
         <NavigationMenuItem>
            <NavigationMenuLink asChild>           
                <Link href="/" className={navigationMenuTriggerStyle()}>
                    Home
                </Link>          
            </NavigationMenuLink>
        </NavigationMenuItem>

         <NavigationMenuItem>
            <NavigationMenuLink asChild>           
                <Link href="about" className={navigationMenuTriggerStyle()}>
                    About
                </Link>          
            </NavigationMenuLink>
        </NavigationMenuItem>

       
        <NavigationMenuItem>
          <NavigationMenuTrigger className="">Portfolio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-auto  p-2.5">
             
             <li className="">
                <ListItem className="mt-2.5" href="">
                  
                    <Link href="/project" className={navigationMenuTriggerStyle()}>
                        Our Project
                    </Link> 
                </ListItem>

                <ListItem className="mt-2.5" href="">
                  
                    <Link href="/niva-wordpress-theme" className={navigationMenuTriggerStyle()}>
                        Niva Wordpress Theme
                    </Link> 
                </ListItem>
                <ListItem className="mt-2.5" href="">
                  
                    <Link href="/venor-wordpress-theme" className={navigationMenuTriggerStyle()}>
                        Venor Wordpress Theme
                    </Link> 
                </ListItem>
                
             </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink asChild>           
                <Link href="/pricing" className={navigationMenuTriggerStyle()}>
                    Pricing
                </Link>          
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="">Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-auto  p-2.5">
             
             <li className="">
                <ListItem className="mt-2.5 capitalize" href="">
                  
                    <Link href="/recent-news" className={navigationMenuTriggerStyle()}>
                        Our Recent News
                    </Link> 
                </ListItem>

                <ListItem className="mt-2.5 capitalize" href="">
                  
                    <Link href="/niva-wordpress-theme" className={navigationMenuTriggerStyle()}>
                        Top 6 artical you must read
                    </Link> 
                </ListItem>
                <ListItem className="mt-2.5 capitalize" href="">
                  
                    <Link href="/venor-wordpress-theme" className={navigationMenuTriggerStyle()}>
                       Top 7 creative ways to boost your media
                    </Link> 
                </ListItem>
                
             </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       

    
   
        <NavigationMenuItem>
         <NavigationMenuLink>
           
            <Link href="contact" className={navigationMenuTriggerStyle()} >
            Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* <NavigationMenuPositioner>
        <NavigationMenuPopup>
          <NavigationMenuArrow />
        </NavigationMenuPopup>
      </NavigationMenuPositioner> */}
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink >
        <div className="text-sm leading-none font-medium">{title}</div>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
}
