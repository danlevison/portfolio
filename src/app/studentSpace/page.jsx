import React from 'react'
import { RiRadioButtonFill } from "react-icons/ri"
import Image from "next/image"
import Link from "next/link"
import studentSpaceImg from "../../../public/assets/projects/student-space-project.png"

const page = () => {
  return (
    <main className="w-full py-28 px-12">
        <div className="max-w-[1240px] flex flex-col justify-center items-center mx-auto p-4 pt-8">
            <div className="flex flex-col justify-center items-center">
                <div className="md:h-[50vh] w-full flex flex-col items-center justify-center">
                    <p className="uppercase text-xl tracking-widest text-accent dark:text-accentDark">Project</p>
                    <div className="bg-accent dark:bg-accentDark w-7 h-1 my-2"></div>
                    <h1 className="uppercase tracking-wider text-primaryHeading dark:text-primaryHeadingDark py-6 text-3xl sm:text-6xl text-center">Student Space</h1>
                    <a href={"https://student-space.netlify.app/"} target="_blank" className=" shadow-xl shadow-primaryShadow dark:shadow-primaryShadowDark rounded-xl uppercase bg-gradient-to-r from-accent to-[#B17693] dark:from-accentDark dark:to-[#A6BDB6] text-white text-sm sm:text-xl px-12 py-4 mt-6 hover:scale-105 duration-300"> 
                    Live Link
                    </a>
                </div>

                <div className="mt-24 p-4 w-full shadow-xl shadow-primaryShadow dark:shadow-primaryShadowDark rounded-xl">
                    <Image src={studentSpaceImg} alt={"/"} />
                </div>
                
                <div className="py-16">
                    <h3 className="text-2xl mb-6 text-primaryHeading dark:text-primaryHeadingDark">Project Overview</h3>
                    <p className="leading-8 dark:text-gray-300">
                        This app was built using JavaScript. It was designed for primary school teachers so that they can manage rewards for students and to provide daily tools for classroom management. I created Student Space as a personal project to provide a one-stop platform for managing rewards for my students and organising tools for daily classroom management.
                    </p>
                    <p className="leading-8 mt-6 dark:text-gray-300"> 
                        Users are able to set a class name and add students. You can then chose an avatar for each student and add reward points by clicking the ribbon icon. The app also contains a tool-bar which includes tools for daily classroom management and a calendar to keep track of events.
                    </p>
                    <p className="leading-8 mt-6 dark:text-gray-300">
                        Feel free to check out the project by visiting the Live Link.
                    </p>
                </div>

                <div className="w-full">
                    <h3 className="text-2xl text-primaryHeading dark:text-primaryHeadingDark font-bold pb-4">Technologies</h3>
                    <div className="w-full shadow-xl shadow-gray-400 dark:shadow-black p-4">
                        <div className="p-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center">
                                <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center gap-2">
                                    <RiRadioButtonFill />HTML
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center gap-2">
                                    <RiRadioButtonFill />CSS
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center gap-2">
                                    <RiRadioButtonFill />JavaScript
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center gap-2">
                                    <RiRadioButtonFill />OpenWeather API
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center gap-2">
                                    <RiRadioButtonFill />FullCalendar
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center gap-2">
                                    <RiRadioButtonFill />GitHub
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center gap-2">
                                    <RiRadioButtonFill />Netlify
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="w-full py-16">
                <h3 className="text-2xl text-primaryHeading dark:text-primaryHeadingDark mb-6">See Live</h3>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <a href={"https://student-space.netlify.app/"} target="_blank" className="text-center shadow-xl shadow-gray-400  dark:shadow-primaryShadowDark rounded-xl uppercase bg-gradient-to-r from-accent to-[#B17693] dark:from-accentDark dark:to-[#A6BDB6] text-white text-sm sm:text-xl px-6 py-4 hover:scale-105 duration-300"> 
                        Live Link
                        </a>
                        <a href={"https://github.com/danlevison/student-space"} target="_blank" className="text-center shadow-xl shadow-gray-400 dark:shadow-primaryShadowDark rounded-xl uppercase bg-gradient-to-r from-accent to-[#B17693] dark:from-accentDark dark:to-[#A6BDB6] text-white text-sm sm:text-lg px-6 py-4 hover:scale-105 duration-300"> 
                        View Code
                        </a>
                        <Link href={"/#projects"} className="text-center uppercase shadow-xl shadow-gray-400 dark:shadow-primaryShadowDark rounded-xl bg-transparent border-accent dark:border-accentDark border-2 text-dark dark:text-primaryLight text-sm sm:text-lg px-6 py-4 hover:scale-105 duration-300">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>    
    </main>
  )
}

export default page