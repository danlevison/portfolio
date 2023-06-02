import React from 'react'
import Image from "next/image"

const Skills = () => {
    const skillsImgArr = [
        {
            src: "/../public/assets/skills/html.png",
            alt: "/",
            name: "HTML"
        },
        {
            src: "/../public/assets/skills/css.png",
            alt: "/",
            name: "CSS"
        },
        {
            src: "/../public/assets/skills/javascript.png",
            alt: "/",
            name: "JavaScript"
        },
        {
            src: "/../public/assets/skills/react.png",
            alt: "/",
            name: "React"
        },
        {
            src: "/../public/assets/skills/nextjs.png",
            alt: "/",
            name: "Next.js"
        },
        {
            src: "/../public/assets/skills/tailwind.png",
            alt: "/",
            name: "Tailwind"
        },
        {
            src: "/../public/assets/skills/figma.png",
            alt: "/",
            name: "Figma"
        },
        {
            src: "/../public/assets/skills/github.png",
            alt: "/",
            name: "GitHub"
        },
    ]

    const skillsEl = skillsImgArr.map((image, index) => (
        <div key={index} className="p-6 shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center">
                <div className="flex justify-evenly items-center w-full">
                    <Image src={image.src} alt={image.alt} width="64" height="64" />
                    <h3>{image.name}</h3>
                </div>
            </div>
        </div>
    ))

  return (
    <section id="skills" className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center items-center">
            <p className="text-xl tracking-widest uppercase text-accent dark:text-accentDark">Skills</p>
            <h2 className="py-4 capitalize text-center text-primaryHeading dark:text-primaryHeadingDark">What I&apos;ve worked with</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-4">
                {skillsEl}
            </div>
        </div>
    </section>
  )
}

export default Skills