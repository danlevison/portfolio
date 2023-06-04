"use client"

import React from 'react'
import Link from "next/link"
import Lottie from "lottie-react"
import animationData from "../../public/assets/squat-animation.json"
import { BiArrowFromBottom } from "react-icons/bi"
import { usePathname } from "next/navigation"

const ScrollToTop = () => {
  const pathName = usePathname()

  return (
    <div className="flex justify-center pt-16">
        <Link href={pathName === "/" ? "/" : "/cv"} >
            <div className=" flex flex-col justify-center items-center rounded-xl shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark p-1 cursor-pointer hover:scale-110 ease-in duration-300">
                <BiArrowFromBottom size={24} className="text-accent dark:text-accentDark"/>
                <Lottie className="w-14" animationData={animationData} />
            </div>
        </Link>
    </div>
  )
}

export default ScrollToTop