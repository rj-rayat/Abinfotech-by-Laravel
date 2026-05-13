"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  
    const [theme, setTheme]= React.useState<"light" | "dark" | "system">("system")
    

    React.useEffect(()=>{
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null
        if (savedTheme){
            setTheme(savedTheme)
            applyTheme(savedTheme)
        }
    }, [])

    const applyTheme = (theme: "light" | "dark" | "system")=>{
        const root = window.document.documentElement
        root.classList.remove("light" , "dark")

        if (theme === "system"){
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
            root.classList.add(systemTheme)
        } else{
            root.classList.add(theme)
        }

        localStorage.setItem("theme", theme)
        setTheme(theme)
    }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => applyTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem  onClick={() => applyTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => applyTheme("system")}> 
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
