"use client"

import React from 'react'
import Link from "next/link"
import Lottie from "lottie-react"
import animationDataLight from "../../public/assets/scroll-to-top-light.json"
import animationDataDark from "../../public/assets/scroll-to-top-dark.json"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

const ScrollToTop = () => {
  const pathName = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex justify-center pt-16">
        <Link href={pathName === "/" ? "/" : "/cv"} >
            <div className=" flex flex-col justify-center items-center rounded-xl shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark cursor-pointer hover:scale-110 ease-in duration-300">
                {theme === "light" ? 
                  <Lottie className="w-16" animationData={animationDataLight} />
                : <Lottie className="w-16" animationData={animationDataDark} /> }
            </div>
        </Link>
    </div>
  )
}

export default ScrollToTop