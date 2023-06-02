import React from 'react'
import Image from "next/image"
import Link from "next/link"

const ProjectItem = ({title, tech, backgroundImg, projectUrl}) => {
  return (
    <div className="relative flex justify-center items-center h-auto w-full min-w-[250px] shadow-xl shadow-primaryShadow dark:shadow-primaryShadowDark rounded-xl p-4 group hover:bg-gradient-to-r from-accent to-[#B17693] dark:from-accentDark dark:to-[#A6BDB6]">
        <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt={"/"} />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-lg lg:text-2xl text-white tracking-wider text-center">{title}</h3>
            <p className="pb-1 sm:pb-4 pt-1 text-white text-center text-sm sm:text-base">{tech}</p>
            <Link href={projectUrl}>
                <p className="text-center py-2 lg:py-3 rounded-lg bg-white text-primaryHeading font-bold text-sm md:text-lg cursor-pointer hover:scale-105 duration-300">More Info</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem