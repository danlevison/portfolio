"use client"

import React, {useState, useEffect} from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { BsSun, BsMoonStars } from "react-icons/bs"
import Image from "next/image"

export default function ThemeToggle() {
    const [isOn, setIsOn] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    const toggleSwitch = () => setIsOn(!isOn)

    useEffect(() => {
        setMounted(true)
        // set theme based on user theme settings
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (isDark) {
          setTheme("dark")
        } else {
          setTheme("light")
        }
      }, [setTheme])
    
      if (!mounted) {
        return null
      }
    
      const handleTheme = () => {
        if (theme === "light") {
          setTheme("dark")
        } else {
          setTheme("light")
        }
      }
  
    return (
      <div className={theme === "light" ? "ml-auto md:m-0 w-[70px] md:w-[80px] h-[35px] md:h-[40px] bg-gray-200 flex justify-start rounded-[50px] p-[5px] cursor-pointer" : "ml-auto md:m-0 px-4 w-[70px] md:w-[80px] h-[35px] md:h-[40px] bg-black/60 flex justify-end rounded-[50px] p-[5px] cursor-pointer"} onClick={handleTheme}>
        <motion.div className={theme === "light" ? "w-[25px] md:w-[30px] h-[25px] md:h-[30px] bg-yellow-400/70 rounded-[40px]" : "w-[25px] md:w-[30px] h-[25px] md:h-[30px] shadow-[11px_0px_0_0_white] rounded-full"} layout transition={spring} />
      </div>
    )
  }
  
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  }