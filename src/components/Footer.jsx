import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full h-10 dark:bg-secondaryDark">
        <div className="flex justify-center items-center">
            <p className="text-sm">&copy; {currentYear}. Wesbite developed by <span className="font-bold underline"><a href="https://danlevison.vercel.app/">Dan Levison</a></span></p>
        </div>
    </footer>
  )
}

export default Footer