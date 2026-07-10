"use client";

import { ArrowRight, CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import * as React from "react";


import { Button } from "../ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { Link } from "@inertiajs/react";



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
           <NavigationMenuLink asChild>           
                <Link href="/project" className={navigationMenuTriggerStyle()}>
                    Portfolio
                </Link>          
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink asChild>           
                <Link href="/price" className={navigationMenuTriggerStyle()}>
                    Pricing
                </Link>          
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink asChild>           
                <Link href="/blogs" className={navigationMenuTriggerStyle()}>
                    Blogs
                </Link>          
            </NavigationMenuLink>
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
