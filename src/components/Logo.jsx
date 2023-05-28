import React from 'react'
import Link from "next/link"

const Logo = () => {
  return (
    <div href={"/"} className="flex items-center cursor-pointer gap-2 transition-colors duration-300 hover:text-primary">
        <Link href={"/"}
        className="w-12 h-12 bg-dark text-light flex flex-col justify-center items-center rounded-full text-2xl font-bold">
            DL
        </Link>
        <span className="text-md font-bold tracking-widest uppercase">Dan Levison</span>
    </div>
  )
}

export default Logo
