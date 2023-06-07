import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
      <main className="min-h-screen flex flex-col items-center justify-between px-12 py-32 xs:py-24 sm:p-24">
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
  )
}
