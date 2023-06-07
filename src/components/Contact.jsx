"use client"

import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import { BsCheckCircle } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import ScrollToTop from "./ScrollToTop"

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
    <section id="contact" className="w-full lg:h-screen">
      <div className="max-w-[800px] m-auto px-2 md:py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-accent dark:text-accentDark text-center">Contact</p>
        <h2 className="py-4 lg:text-5xl capitalize text-center text-primaryHeading dark:text-primaryHeadingDark">Get in touch</h2>

        <div className="w-full h-auto shadow-xl shadow-primaryShadow dark:shadow-primaryShadowDark rounded-xl lg:p-4">
          <div className="p-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input className="border-2 rounded-lg p-3 bg-white dark:bg-[#3B3B3B] border-gray-300 dark:border-gray-700 focus:outline-accent dark:focus:outline-none dark:focus:outline-accentDark" type="text" name="from_name" required/>
                </div>
                  
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input className="border-2 rounded-lg p-3 bg-white dark:bg-[#3B3B3B] border-gray-300 dark:border-gray-700 focus:outline-accent dark:focus:outline-none dark:focus:outline-accentDark" type="email" name="from_email" required />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea className="border-2 rounded-lg p-3 bg-white dark:bg-[#3B3B3B] border-gray-300 dark:border-gray-700 focus:outline-accent dark:focus:outline-none dark:focus:outline-accentDark" rows={10} name="message" required></textarea>
                </div>

                <button className="w-full p-4 mt-4 md:flex md:w-auto md:ml-auto text-gray-100 hover:scale-105 ease-in duration-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>

         {/* Modal */}
         {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800/50">
            <div className="relative bg-white dark:bg-[#263345] p-8 mx-2 rounded-lg shadow-xl shadow-primaryShadow dark:shadow-primaryShadowDark">
              <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 hover:scale-110 duration-300 text-primaryText dark:text-primaryTextDark shadow-none bg-none">
                <AiOutlineClose size={18} />
              </button>
              <div className="flex items-center gap-2">
                  <BsCheckCircle size={30} className="text-primaryText dark:text-primaryTextDark"/>
                  <p className="text-primaryText dark:text-primaryTextDark">Thank you for your message!</p>
              </div>
            </div>
          </div>
          )}
          <ScrollToTop />
      </div>
    </section>
  )
}

export default Contact