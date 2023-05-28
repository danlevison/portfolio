"use client"

import React from 'react'
import Lottie from "lottie-react"
import animationData from "../../public/assets/squat-animation.json"
import {AiOutlineMail} from "react-icons/ai"
import {FaLinkedinIn, FaGithub} from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"

const Main = () => {
  return (
    <section className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                <h1 className="py-4 text-gray-700 uppercase">
                    Hi, I'm <span className="text-primary">Dan</span>
                </h1>
                <h1 className="py-2 text-gray-700 uppercase">A front-end developer</h1>
                <p className="py-4 text-gray-600 m-w-[70%] m-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi distinctio cupiditate ut provident nemo perspiciatis debitis? Aperiam, quo cupiditate! Alias quo voluptatibus cumque, assumenda nam perspiciatis quam eveniet quaerat adipisci.
                </p>
            
                <div className="flex justify-between items-center gap-2 max-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                    </div>
                    <Lottie animationData={animationData} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main