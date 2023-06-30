"use client"

import React from 'react'
import Link from "next/link"
import Lottie from "lottie-react"
import { useTheme } from "next-themes"
import animationData from "../../public/assets/mouse-down.json"
import animationDataDark from "../../public/assets/mouse-down-dark.json"

const MouseScroll = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="hidden md:flex justify-center pt-16">
      {theme === "light" ? 
        <Link href="#about" aria-label="Scroll to about section.">
            <Lottie className="w-14" animationData={animationData} />
        </Link>

        :<Link href="#about" aria-label="Scroll to about section.">           
            <Lottie className="w-14" animationData={animationDataDark} />
        </Link> }
    </div>
  )
}

export default MouseScroll