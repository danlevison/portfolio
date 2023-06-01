"use client"

import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import Link from "next/link"
import Lottie from "lottie-react"
import { BsCheckCircle } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import animationData from "../../public/assets/squat-animation.json"

const Contact = () => {
  const [showModal, setShowModal] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_fud1mj9', 'template_5ln9f2g', form.current, 'VLQLUF0GOeHJUzxWl')
      .then((result) => {
          console.log(result.text)
          e.target.reset()
          setShowModal(true)
          setTimeout(() => {
            setShowModal(false)
          }, 2000)
      }, (error) => {
          console.log(error.text)
      })
  }

  return (
    <section id="contact" className="w-full lg:h-screen py-16">
      <div className="max-w-[800px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-primary dark:text-primaryDark text-center">Contact</p>
        <h2 className="py-4 capitalize text-center">Get in touch</h2>

        <div className="w-full h-auto shadow-xl shadow-gray-400 dark:shadow-black rounded-xl lg:p-4">
          <div className="p-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input className="border-2 rounded-lg p-3 border-gray-300 focus:outline-primary dark:focus:outline-primaryDark" type="text" name="from_name" required/>
                </div>
                  
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input className="border-2 rounded-lg p-3 border-gray-300 focus:outline-primary dark:focus:outline-primaryDark" type="email" name="from_email" required />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea className="border-2 rounded-lg p-3 border-gray-300 focus:outline-primary dark:focus:outline-primaryDark" rows={10} name="message" required></textarea>
                </div>

                <button className="w-full p-4 mt-4 md:flex md:w-auto md:ml-auto text-gray-100 hover:scale-105 ease-in duration-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>

         {/* Modal */}
         {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800/50">
            <div className="relative bg-white p-8 mx-2 rounded-lg shadow-xl">
              <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 hover:scale-110 duration-300 text-black shadow-none bg-gradient-to-r from-white to-white">
                <AiOutlineClose size={18} />
              </button>
              <div className="flex items-center gap-2">
                  <BsCheckCircle size={30}/>
                  <p>Thank you for your message!</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center pt-16">
          <Link href={"/"}>
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-black p-2 cursor-pointer hover:scale-110 ease-in duration-300">
              <Lottie className="w-16" animationData={animationData} />
            </div>
          </Link>
        </div>
        </div>
    </section>
  )
}

export default Contact