"use client"

import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import Link from "next/link"
import Lottie from "lottie-react"
import animationData from "../../public/assets/squat-animation.json"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_fud1mj9', 'template_5ln9f2g', form.current, 'VLQLUF0GOeHJUzxWl')
      .then((result) => {
          console.log(result.text)
          console.log("Message Sent")
          e.target.reset()
      }, (error) => {
          console.log(error.text)
      })
  }

  return (
    <section id="contact" className="w-full lg:h-screen py-16">
      <div className="max-w-[800px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-primary text-center">Contact</p>
        <h2 className="py-4 capitalize text-center">Get in touch</h2>

        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input className="border-2 rounded-lg p-3 border-gray-300" type="text" name="from_name" required/>
                </div>
                  
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input className="border-2 rounded-lg p-3 border-gray-300" type="email" name="from_email" required />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea className="border-2 rounded-lg p-3 border-gray-300" rows={10} name="message" required></textarea>
                </div>

                <button className="w-full p-4 mt-4 md:flex md:w-auto md:ml-auto text-gray-100 hover:scale-105 ease-in duration-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center pt-16">
          <Link href={"/"}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300">
              <Lottie className="w-16" animationData={animationData} />
            </div>
          </Link>
        </div>
        </div>
    </section>
  )
}

export default Contact