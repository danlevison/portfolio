import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
      <main className="min-h-screen flex flex-col items-center justify-between py-16 sm:py-24">
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </main>
  )
}
