import React from 'react'
import Link from "next/link"
import {AiOutlineMail} from "react-icons/ai"
import {FaLinkedinIn, FaGithub} from "react-icons/fa"
import { RiPagesLine } from "react-icons/ri"
import MouseScroll from "./MouseScroll"

const Main = () => {

  return (
    <section id="home" className="flex flex-col justify-center items-center w-full min-h-screen text-center bg-[url('../../public/assets/portfolio-bg-light.svg')] dark:bg-[url('../../public/assets/portfolio-bg-dark.svg')]">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="md:text-7xl lg:text-9xl py-4 text-primaryHeading dark:text-primaryLight uppercase">Dan Levison</h1>
                <h2 className="py-1 sm:py-2 text-primaryHeading uppercase dark:text-primaryHeadingDark">front-end developer.</h2>
                <p className="py-4 text-primaryText dark:text-primaryTextDark max-w-[70%] m-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi distinctio cupiditate ut provident nemo perspiciatis debitis? Aperiam, quo cupiditate! Alias quo voluptatibus cumque, assumenda nam perspiciatis quam eveniet quaerat adipisci.
                </p>
            
                <div className="flex justify-between items-center gap-2 max-w-[330px] m-auto py-6 px-2">
                    <a href={"https://www.linkedin.com/in/daniel-levison-7250b9156/"} title="Linkedin" target="_blank" aria-label="Linkedin" className="rounded-full shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn size={20} />
                        <span className="sr-only">Opens in a new tab</span>
                    </a>
                    <a href={"https://github.com/danlevison"} title="GitHub" target="_blank" aria-label="GitHub" className="rounded-full shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub size={20} />
                        <span className="sr-only">Opens in a new tab</span>
                    </a>
                    <a href={"mailto:dan.ejlevison@gmail.com"} title="Email" aria-label="Email" className="rounded-full shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={20} />
                        <span className="sr-only">Opens in a new tab</span>
                    </a>
                    <Link href={"/cv"} title="CV" aria-label="Go to CV Page." className="rounded-full shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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