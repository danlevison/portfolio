import React from 'react'
import Link from "next/link"

const Logo = ({ closeNav }) => {
  return (
    <div className="flex items-center cursor-pointer gap-2 transition-colors duration-300 hover:text-accent dark:hover:text-accentDark">
        <Link onClick={closeNav} href={"#home"}
        className="flex justify-center items-center gap-3">
            <div className="flex flex-col justify-center items-center w-12 h-12 bg-dark text-primaryLight dark:bg-primaryLight dark:text-dark rounded-full text-2xl font-bold">DL</div>
            <span href={"/"} className="hidden xl:block text-md font-bold tracking-widest uppercase">Dan Levison</span>
        </Link>
        
    </div>
  )
}

export default Logo
