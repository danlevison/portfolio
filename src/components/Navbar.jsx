"use client"

import React, {useState, useEffect} from 'react'
import Link from "next/link"
import { useTheme } from "next-themes"
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from "react-icons/ai"
import {FaLinkedinIn, FaGithub} from "react-icons/fa"
import { RiPagesLine } from "react-icons/ri"
import { BsSun, BsMoonStars } from "react-icons/bs"
import Logo from "./Logo"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
 
  // Because we cannot know the theme on the server, many of the values returned from useTheme will be undefined until mounted on the client. This means if you try to render UI based on the current theme before mounting on the client, you will see a hydration mismatch error.
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleTheme = () => {
    if(theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const handleNav = () => {
    setNav(!nav)
  }

  const NavLink = ({href, title, className=""}) => {
    return (
      <Link onClick={() => setNav(false)} scroll={false} href={href} className={`${className}`}>
        {title}
      </Link>
    )
  }

  return (
    <nav className="fixed w-full h-20 shadow-xl bg-slate-50 dark:bg-[#263345] z-[100]">

      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Logo />
        {theme === "light" ? 
          <button className="bg-none bg-gray-600 text-yellow-300 p-3 rounded-full hover:scale-105 duration-300 ml-auto" onClick={handleTheme}><BsSun size={18} /></button>
          :<button className="bg-none bg-light text-dark p-3 rounded-full hover:scale-105 duration-300 ml-auto" onClick={handleTheme}><BsMoonStars size={18} /></button>}
        <div>
          <ul className="hidden md:flex font-bold uppercase">
              <NavLink href={"/"} title={"Home"} className="ml-12 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark" />
              <NavLink href={"/#about"} title={"About"} className="ml-12 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark" />
              <NavLink href={"/#skills"} title={"Skills"} className="ml-12 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark" />
              <NavLink href={"/#projects"} title={"Projects"} className="ml-12 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark" />
              <NavLink href={"/#contact"} title={"Contact"} className="ml-12 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark" />
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer ml-2">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={
          nav 
            ? "fixed left-0 top-0 w-[100%] text-center sm:text-left sm:w-[60%] h-screen bg-light dark:bg-dark p-7 ease-in duration-500" 
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"}>
        <div>
          <div className="flex justify-between items-center w-full">
            <Logo />
            <div onClick={handleNav} className="cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineClose size={25} />
            </div>
          </div>
        
          <div className="border-b border-gray-300 my-4">
            <p className="w-[100%] md:w-[90%] py-4 break-words">Front-End Developer</p>
          </div>
        </div>
        <div className="py-4">
          <ul className="flex flex-col font-bold uppercase">
            <NavLink href={"/"} title={"Home"} className="py-5 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark" />
            <NavLink href={"/#about"} title={"About"} className="py-5 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark" />
            <NavLink href={"/#skills"} title={"Skills"} className="py-5 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark" />
            <NavLink href={"/#projects"} title={"Projects"} className="py-5 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark" />
            <NavLink href={"/#contact"} title={"Contact"} className="py-5 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark" />
          </ul>

          <div className="pt-40">
            <p className="text-sm sm:text-base uppercase tracking-widest text-accent dark:text-accentDark">Connect with me</p>
            <div className="flex justify-evenly sm:justify-between items-center my-4 w-full sm:w-[80%]">
              <a href={"https://www.linkedin.com/in/daniel-levison-7250b9156/"} target="_blank" className="rounded-full shadow-lg shadow-gray-500 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </a>
              <a href={"https://github.com/danlevison"} target="_blank" className="rounded-full shadow-lg shadow-gray-500 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </a>
              <a href={"mailto:dan.ejlevison@gmail.com"} target="_blank" className="rounded-full shadow-lg shadow-gray-500 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </a>
              <a href={"/cv"} className="rounded-full shadow-lg shadow-gray-500 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <RiPagesLine /> 
              </a>
            </div>
          </div>
        </div>   
        </div>
      </div>

    </nav>
  )
}

export default Navbar