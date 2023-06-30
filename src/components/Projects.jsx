import React from 'react'
import ProjectItem from "./ProjectItem"
import studentSpaceImg from "../../public/assets/projects/student-space-project.png"
import periodPlasterWorkImg from "../../public/assets/projects/period-plasterwork-project.png"

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16 lg:py-52 bg-primaryLight dark:bg-dark">
        <div className="max-w-[1240px] h-full mx-auto px-12 py-16 flex flex-col justify-center items-center">
            <p className="text-xl tracking-widest uppercase text-accent dark:text-accentDark">Projects</p>
            <div className="bg-accent dark:bg-accentDark w-7 h-1 my-2"></div>
            <h2 className="py-4 lg:text-5xl capitalize text-center text-primaryHeading dark:text-primaryHeadingDark">What i&apos;ve built</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectItem title="Student Space" tech="JavaScript" backgroundImg={studentSpaceImg} projectUrl="/studentSpace" alt="Student Space dashboard." />
              <ProjectItem title="Period Plasterwork" tech="Astro/React" backgroundImg={periodPlasterWorkImg} projectUrl="/periodPlasterwork" alt="Period Plasterwork landing page." />
            </div>
        </div>
    </section>
  )
}

export default Projects