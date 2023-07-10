import React from 'react'
import Image from "next/image"
import htmlImg from "../../public/assets/skills/html.png"
import cssImg from "../../public/assets/skills/css.png"
import javascriptImg from "../../public/assets/skills/javascript.png"
import reactImg from "../../public/assets/skills/react.png"
import nextjsImg from "../../public/assets/skills/nextjs.png"
import tailwindImg from "../../public/assets/skills/tailwind.png"
import figmaImg from "../../public/assets/skills/figma.png"
import githubImg from "../../public/assets/skills/github.png"
import firebaseImg from "../../public/assets/skills/firebase.png"

const Skills = () => {
    const skillsImgArr = [
        {
            src: htmlImg,
            alt: "HTML",
            name: "HTML"
        },
        {
            src: cssImg,
            alt: "CSS",
            name: "CSS"
        },
        {
            src: javascriptImg,
            alt: "JavaScript",
            name: "JavaScript"
        },
        {
            src: reactImg,
            alt: "React",
            name: "React"
        },
        {
            src: nextjsImg,
            alt: "Next.js",
            name: "Next.js"
        },
        {
            src: tailwindImg,
            alt: "Tailwind",
            name: "Tailwind"
        },
        {
            src: firebaseImg,
            alt: "Firebase",
            name: "Firebase"
        },
        {
            src: figmaImg,
            alt: "Figma",
            name: "Figma"
        },
        {
            src: githubImg,
            alt: "GitHub",
            name: "GitHub"
        },
    ]

    const skillsEl = skillsImgArr.map((image, index) => (
        <div key={index} className="p-6 shadow-lg shadow-primaryShadow dark:shadow-primaryShadowDark rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center">
                <div className="flex justify-evenly items-center w-full gap-2">
                    <Image src={image.src} alt={image.alt} width="64" height="64" />
                    <h3>{image.name}</h3>
                </div>
            </div>
        </div>
    ))

  return (
    <section id="skills" className="w-full min-h-screen flex items-center bg-secondaryLight dark:bg-secondaryDark">
        <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center items-center px-8 py-16">
            <p className="text-xl tracking-widest uppercase text-accent dark:text-accentDark">Skills</p>
            <div className="bg-accent dark:bg-accentDark w-7 h-1 my-2"></div>
            <h2 className="py-4 lg:text-5xl capitalize text-center text-primaryHeading dark:text-primaryHeadingDark">What I&apos;ve worked with</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-4">
                {skillsEl}
            </div>
        </div>
    </section>
  )
}

export default Skills