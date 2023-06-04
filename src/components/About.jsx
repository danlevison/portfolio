import React from 'react'
// import { Link } from "react-scroll"


const About = () => {
  return (
    <section id="about" className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center items-center text-center sm:text-left">
                <p className="uppercase text-xl tracking-widest text-accent dark:text-accentDark">About</p>
                <h2 className="py-4 capitalize text-primaryHeading dark:text-primaryHeadingDark">Who I am</h2>
                <p className="py-2 text-primaryText dark:text-primaryTextDark">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eos quis maxime quas? Recusandae beatae vel nemo provident doloribus aliquid assumenda enim, praesentium fuga dignissimos ex iste maiores dicta reiciendis.
                </p>
                <p className="py-2 text-primaryText dark:text-primaryTextDark">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa nam expedita culpa soluta maiores officia voluptas, aspernatur iusto. Id officia enim a fuga dolor cum, repellendus facere sequi porro.
                </p>
                {/* <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}
                className="py-2 text-primaryText dark:text-primaryTextDark text-bold underline cursor-pointer">
                    Check out some of my latest projects 
                </Link> */}
            </div>
        </div>
    </section>
  )
}

export default About