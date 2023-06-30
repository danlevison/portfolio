"use client"

import React, {useState, useEffect} from 'react'
import Link from "next/link"
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from "react-icons/ai"
import {FaLinkedinIn, FaGithub} from "react-icons/fa"
import { RiPagesLine } from "react-icons/ri"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const [nav, setNav] = useState(false)
 
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
    <nav className="fixed w-full h-[6rem] shadow-xl bg-slate-50 dark:bg-[#263345] z-[100]">
      <div className="flex justify-between items-center gap-4 w-full h-full px-2 2xl:px-16">
        <Logo />
        <div className="order-1 md:order-none mr-0 xl:mr-24">
          <ul className="hidden md:flex font-bold uppercase gap-12 lg:gap-32">
            <li>
              <NavLink href={"/"} title={"Home"} className="text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark cursor-pointer" />
            </li>
            <li>
              <NavLink href={"/#about"} title={"About"} className="text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark cursor-pointer" />
            </li>
            <li>
              <NavLink href={"/#skills"} title={"Skills"} className="text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark cursor-pointer" />
            </li>
            <li>
              <NavLink href={"/#projects"} title={"Projects"} className="text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark cursor-pointer" />
            </li>
            <li>
              <NavLink href={"/#contact"} title={"Contact"} className="text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark cursor-pointer" />
            </li>
          </ul>
          <button onClick={handleNav} aria-label="Open menu" className="bg-none rounded-none text-dark dark:text-primaryLight shadow-none md:hidden cursor-pointer py-4 ml-4">
            <AiOutlineMenu size={25} />
          </button>
        </div>
        <ThemeToggle />
      </div>

      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={
          nav 
            ? "fixed left-0 top-0 w-[100%] text-center sm:text-left sm:w-[60%] h-screen bg-primaryLight dark:bg-dark p-10 ease-in duration-500" 
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"}>
        <div>
          <div className="flex justify-between items-center w-full">
            <Logo closeNav={() => setNav(false)} />
            <button onClick={handleNav} aria-label="Close menu" className="bg-none rounded-none text-dark dark:text-primaryLight shadow-none cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineClose size={25} />
            </button>
          </div>
        
          <div className="border-b border-gray-300 my-4">
            <p className="w-[100%] md:w-[90%] py-4 break-words">Front-End Developer</p>
          </div>
        </div>
        <div className="py-4">
          <ul className="flex flex-col gap-14 font-bold uppercase">
            <li>
              <NavLink href={"/"} title={"Home"} className="py-5 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark cursor-pointer" />
            </li>
            <li>
              <NavLink href={"/#about"} title={"About"} className="py-5 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark cursor-pointer" />
            </li>
            <li>
              <NavLink href={"/#skills"} title={"Skills"} className="py-5 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark cursor-pointer" />
            </li>
            <li>
              <NavLink href={"/#projects"} title={"Projects"} className="py-5 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark cursor-pointer" />
            </li>
            <li>
              <NavLink href={"/#contact"} title={"Contact"} className="py-5 text-sm transition-colors duration-300 hover:text-accent dark:hover:text-accentDark cursor-pointer" />
            </li>
          </ul>

          <div className="pt-14">
            <p className="text-sm sm:text-base uppercase tracking-widest text-accent dark:text-accentDark">Connect with me</p>
            <div className="flex justify-evenly sm:justify-between items-center my-4 w-full sm:w-[80%]">
              <a href={"https://www.linkedin.com/in/daniel-levison-7250b9156/"} aria-label="LinkedIn" target="_blank" className="rounded-full shadow-lg shadow-gray-500 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
                <span className="sr-only">Opens in a new tab</span>
              </a>
              <a href={"https://github.com/danlevison"} target="_blank" aria-label="GitHub" className="rounded-full shadow-lg shadow-gray-500 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
                <span className="sr-only">Opens in a new tab</span>
              </a>
              <a href={"mailto:dan.ejlevison@gmail.com"} target="_blank" aria-label="Email" className="rounded-full shadow-lg shadow-gray-500 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
                <span className="sr-only">Opens in a new tab</span>
              </a>
              <Link href={"/cv"} onClick={handleNav} aria-label="Go to CV Page." className="rounded-full shadow-lg shadow-gray-500 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <RiPagesLine /> 
              </Link>
            </div>
          </div>
        </div>   
        </div>
      </div>

    </nav>
  )
}

export default Navbar