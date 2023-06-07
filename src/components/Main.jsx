import React from 'react'
import Link from "next/link"
import {AiOutlineMail} from "react-icons/ai"
import {FaLinkedinIn, FaGithub} from "react-icons/fa"
import { RiPagesLine } from "react-icons/ri"
import MouseScroll from "./MouseScroll"

const Main = () => {
  return (
    <section id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-primaryText dark:text-primaryTextDark">Lorem ipsum dolor sit amet consectetur.</p>
                <h1 className="py-4 text-gray-700 dark:text-light uppercase">
                    Hi, I&apos;m <span className="text-accent dark:text-accentDark">Dan</span>
                </h1>
                <h1 className="py-1 sm:py-2 text-primaryHeading uppercase dark:text-primaryHeadingDark">A front-end developer</h1>
                <p className="py-4 text-primaryText dark:text-primaryTextDark max-w-[70%] m-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi distinctio cupiditate ut provident nemo perspiciatis debitis? Aperiam, quo cupiditate! Alias quo voluptatibus cumque, assumenda nam perspiciatis quam eveniet quaerat adipisci.
                </p>
            
                <div className="flex justify-between items-center gap-2 max-w-[330px] m-auto py-6">
                    <a href={"https://www.linkedin.com/in/daniel-levison-7250b9156/"} target="_blank" className="rounded-full shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href={"https://github.com/danlevison"} target="_blank" className="rounded-full shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub size={20} />
                    </a>
                    <a href={"mailto:dan.ejlevison@gmail.com"} className="rounded-full shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={20} />
                    </a>
                    <Link href={"/cv"} className="rounded-full shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <RiPagesLine size={20} />
                    </Link>
                </div>
            </div>
            <MouseScroll />
        </div>
        
    </section>
  )
}

export default Main