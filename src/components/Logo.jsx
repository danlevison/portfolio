import React from 'react'
import Link from "next/link"

const Logo = () => {
  return (
    <div href={"/"} className="flex items-center cursor-pointer gap-2 transition-colors duration-300 hover:text-primary">
        <Link href={"/"}
        className="flex justify-center items-center gap-3">
            <div className="flex flex-col justify-center items-center w-12 h-12 bg-dark text-light rounded-full text-2xl font-bold">DL</div>
            <span href={"/"} className="text-md font-bold tracking-widest uppercase">Dan Levison</span>
        </Link>
        
    </div>
  )
}

export default Logo
