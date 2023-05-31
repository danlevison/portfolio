import React from 'react'
import ProjectItem from "./ProjectItem"
import studentSpaceImg from "../../public/assets/projects/student-space-project.png"

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16">
        <div className="max-w-[1240px] mx-auto px-2 py-16 flex flex-col justify-center items-center">
            <p className="text-xl tracking-widest uppercase text-primary">Projects</p>
            <h2 className="py-4 capitalize text-center">What i&apos;ve built</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectItem title="Student Space" tech="JavaScript" backgroundImg={studentSpaceImg} projectUrl="/studentSpace" />
              <ProjectItem title="Student Space" tech="JavaScript" backgroundImg={studentSpaceImg} projectUrl="/studentSpace" />
            </div>
        </div>
    </section>
  )
}

export default Projects