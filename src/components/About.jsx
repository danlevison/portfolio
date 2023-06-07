import React from 'react'
import Link from "next/link"


const About = () => {
  return (
    <section id="about" className="w-full md:h-screen p-2 flex items-center py-12">
        <div className="max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center items-center text-center sm:text-left">
                <p className="uppercase text-xl tracking-widest text-accent dark:text-accentDark">About</p>
                <h2 className="py-4 lg:text-5xl capitalize text-primaryHeading dark:text-primaryHeadingDark">Get to know me</h2>
                <p className="py-2 text-primaryText dark:text-primaryTextDark leading-8">
                I am a <span className="text-accent dark:text-accentDark font-bold capitalize">front-end developer</span> with a unique background in primary school teaching. After several fulfilling years in education, I decided to pursue my love for technology and design by transitioning into the world of web development. This career shift has allowed me to combine my creativity, problem-solving skills, and dedication to creating meaningful user experiences. <Link href="#projects" className="py-4 text-accent dark:text-accentDark text-bold underline cursor-pointer">
                    Check out some of my latest projects 
                </Link>
                </p>
                <p className="py-2 text-primaryText dark:text-primaryTextDark leading-8">
                I am currently seeking new job opportunities where I can make meaningful contributions, continuously learn, and grow as a Front-End Developer. If you have an exciting opportunity that aligns with my skills and experience, I would love to hear from you. Please feel free to get in <span className="text-accent dark:text-accentDark font-bold">contact.</span>
                </p>

                <Link 
                href="#contact" 
                className="mt-4 mb-6 text-center uppercase shadow-xl shadow-gray-400 dark:shadow-primaryShadowDark rounded-xl bg-transparent border-accent dark:border-accentDark border-2 text-dark dark:text-light text-sm sm:text-lg px-6 py-3 hover:scale-105 duration-300">Contact</Link>
            </div>
        </div>
    </section>
  )
}

export default About