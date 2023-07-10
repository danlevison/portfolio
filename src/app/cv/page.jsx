import React from 'react'
import Link from "next/link"
import {GrDocumentDownload} from "react-icons/gr"
import ScrollToTop from "@/components/ScrollToTop"

const cv = () => {
  return (
    <main className="w-full px-8 py-40 flex flex-col justify-center items-center">
        <div className="max-w-[1240px]">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-2">
                <h1 className="uppercase tracking-wider text-primaryHeading dark:text-primaryHeadingDark text-6xl sm:text-7xl text-center">CV</h1>
                <Link 
                    href={"/"} 
                    className="order-[-2] sm:order-[-1] text-center uppercase shadow-xl shadow-gray-400 dark:shadow-primaryShadowDark rounded-xl bg-transparent border-accent dark:border-accentDark border-2 text-dark dark:text-primaryLight text-sm sm:text-md px-3 py-2 hover:scale-105 duration-300">
                    Go Back
                </Link>
                <a className= "order-[-1] sm:order-1 flex items-center gap-1 hover:scale-105 duration-300" href="/" download="Daniel Levison CV">
                    <div className="bg-[#fff] dark:bg-primaryLight p-2 mr-1 rounded-full">
                        <GrDocumentDownload size={20} />
                    </div>
                    Download
                </a>
            </div>

            <div className="grid lg:grid-cols-3 mx-auto py-8">
                <div className="bg-[#f4f4f4] dark:bg-gray-700 text-primaryText dark:text-primaryTextDark rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl col-span-3 lg:col-span-1">
                    <div className="py-16 px-8 lg:py-[13.25em]">
                        <h3 className="py-2 uppercase tracking-[.2em] text-primaryHeading dark:text-primaryHeadingDark border-b border-black dark:border-light">Details</h3>
                        <div className="py-4">
                            <h4 className="uppercase text-sm">Address</h4>
                            <p className="py-2">London</p>
                            <p>United Kingdom</p>
                        </div>
                        <div className="py-4">
                            <h4 className="uppercase text-sm">Phone</h4>
                            <p className="py-2">00000000000</p>
                        </div>
                        <div className="py-4">
                            <h4 className="uppercase text-sm">Email</h4>
                            <a href={"mailto:dan.ejlevison@gmail.com"} className="py-2 underline">dan.ejlevison@gmail.com</a>
                        </div>
                        <h3 className="py-2 uppercase tracking-[.2em] text-primaryHeading dark:text-primaryHeadingDark border-b border-black dark:border-light">Links</h3>
                        <div className="flex flex-col py-2">
                            <a className="underline py-2" href="https://www.linkedin.com/in/daniel-levison-7250b9156/" target="_blank">
                                LinkedIn
                                <span className="sr-only">Opens in a new tab</span>
                            </a>
                            <a className="underline py-2" href="https://github.com/danlevison" target="_blank">
                                GitHub
                                <span className="sr-only">Opens in a new tab</span>
                            </a>
                            <Link className="underline py-2" href="/" >Portfolio</Link>
                        </div>
                        <h3 className="py-2 uppercase tracking-[.2em] text-primaryHeading dark:text-primaryHeadingDark border-b border-black dark:border-light">Skills</h3>
                        <div className="py-2">
                            <ul className="flex flex-col">
                                <li className="py-2 cursor-default">HTML</li>
                                <li className="py-2 cursor-default">CSS</li>
                                <li className="py-2 cursor-default">JavaScript</li>
                                <li className="py-2 cursor-default">React</li>
                                <li className="py-2 cursor-default">Next.js</li>
                                <li className="py-2 cursor-default">Tailwind</li>
                                <li className="py-2 cursor-default">Firebase</li>
                                <li className="py-2 cursor-default">Figma</li>
                                <li className="py-2 cursor-default">GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 text-primaryText dark:text-primaryTextDark col-span-2 rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl px-10 py-8">
                    <div className="border-2 border-black dark:border-primaryLight py-6 px-12 text-center">
                        <h2 className="text-sm lg:text-2xl text-primaryHeading dark:text-primaryHeadingDark uppercase tracking-wider">Daniel Levison</h2>
                        <p className="uppercase pt-6 text-sm lg:text-xl text-primaryText dark:text-primaryTextDark">Front end developer</p>
                    </div>
                    <div>
                        <div className="pt-11 pb-4">
                            <h3 className="py-2 uppercase tracking-[.2em] text-primaryHeading dark:text-primaryHeadingDark border-b border-black dark:border-light">Profile</h3>
                            <p className="leading-8 py-2">
                                With over 7 years of experience in primary education, I am a motivated professional seeking a new challenge in the field of Front-End Development. I have developed transferable skills such as communication, organisation, problem-solving, and continuous learning throughout my teaching career.
                            </p>
                            <p className="leading-8 py-4">
                                My interest in Front-End Development stems from my passion for technology and I am excited by the prospect of working in a fast-paced and constantly evolving industry. I am eager to contribute to the development of innovative and user-friendly applications and websites whilst continuing to learn and refine my own abilities.
                            </p>
                        </div>
                        <div>
                            <h3 className="pb-2 uppercase tracking-[.2em] text-primaryHeading dark:text-primaryHeadingDark border-b border-black dark:border-light">Web dev experience</h3>
                            <p className="leading-8 py-2">
                                Student Space is a web app that I built during my time as a primary school teacher. I created Student Space as a personal project to provide a one-stop platform for managing rewards for my class and organising tools for daily classroom management.
                            </p>
                        </div>
                        <div className="py-4">
                            <h3 className="pb-2 uppercase tracking-[.2em] text-primaryHeading border-b dark:text-primaryHeadingDark border-black dark:border-light">Employment history</h3>
                                <div>
                                    <div className="flex flex-col md:flex-row md:justify-between py-2">
                                        <h2 className="text-sm">Associate Teacher/TA at St. John Fisher Catholic Primary School</h2>
                                        <p className="text-gray-600">London</p>
                                    </div>
                                    <p className="text-gray-600 text-sm">Jan 2016 - Present</p>
                                    <ul className="list-disc px-6 md:px-12">
                                        <li className="py-2 cursor-default">Organised a class of 30 students daily</li>
                                        <li className="py-1 cursor-default">Planned and prepared engaging and interactive lessons and learning materials</li>
                                        <li className="py-1 cursor-default">Taught lessons and delivered the curriculum to various classes</li>
                                        <li className="py-1 cursor-default">Assessed student progress and communicated the feedback to students and parents</li>
                                        <li className="py-1 cursor-default">Maintained accurate records and data of student progress and provided regular updates to senior management </li>
                                        <li className="py-1 cursor-default">Communicated and collaborated with colleagues to develop and implement school policies and procedures</li>
                                    </ul>
                                </div>

                                <div className="pt-4">
                                    <div className="flex flex-col md:flex-row md:justify-between py-2">
                                        <h2 className="text-sm">Client relations, Future Start Independent Financial Planning</h2>
                                        <p className="text-gray-600">London</p>
                                    </div>
                                    <p className="text-gray-600 text-sm">Jul 2019 - Sep 2019</p>
                                    <ul className="list-disc px-6 md:px-12">
                                        <li className="py-2 cursor-default">Communicated regularly with clients to understand their needs and goals, and to provide updates on their portfolios and financial plans</li>
                                        <li className="py-1 cursor-default">Managed client records and maintained accurate and up-to-date information in the company&apos;s databases</li>
                                        <li className="py-1 cursor-default">Communicated with new potential clients and created a database to store client details</li>
                                    </ul>
                                </div>
                        </div>
                        <div className="py-4">
                            <h3 className="py-2 uppercase tracking-[.2em] text-primaryHeading border-b dark:text-primaryHeadingDark border-black dark:border-light">Education</h3>
                            <div>
                                <div className="flex flex-col md:flex-row md:justify-between py-2">
                                    <h2 className="text-sm">BA (Hons) Accounting & Economics, University of Hertfordshire</h2>
                                    <p className="text-gray-600">Hertfordshire</p>
                                </div>
                                <p className="text-gray-600 text-sm">Sep 2016 - May 2019</p>
                                <p className="py-4">Graduated with First-Class Honours</p>
                            </div>
                            <div className="py-4">
                                <div className="flex flex-col md:flex-row md:justify-between py-2">
                                    <h2 className="text-sm">Qualified Teacher Status (QTS), e-Qualitas</h2>
                                    <p className="text-gray-600">London</p>
                                </div>
                                <p className="text-gray-600 text-sm">Apr 2021 - Apr 2022</p>
                            </div>
                            <div className="py-4">
                                <div className="flex flex-col md:flex-row md:justify-between py-2">
                                    <h2 className="text-sm">St. Joan of Arc Catholic School</h2>
                                    <p className="text-gray-600">Hertfordshire</p>
                                </div>
                                <p className="text-gray-600 text-sm">Apr 2021 - Apr 2022</p>
                                <li className="py-2 px-4 list-disc cursor-default">A Levels: Biology (B), Economics (C), Chemistry (D)</li>
                            </div>
                        </div>
                        <div className="pb-12">
                            <h3 className="py-2 uppercase tracking-[.2em] text-primaryHeading border-b dark:text-primaryHeadingDark border-black dark:border-light">References</h3>
                            <h4 className="py-2">References available upon request</h4>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <ScrollToTop />
    </main>
  )
}

export default cv