import React, { useContext } from "react"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import About from "../components/About"
import ToolsAnimation from "../fragments/ToolsAnimation"
import Projects from "../components/Projects"
import Certification from "../components/Certification"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { DarkMode } from "../../context/DarkMode"

function Portofolio() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div className={`${isDarkMode ? `bg-[#171d32]` : `bg-white`} h-auto w-full overflow-hidden font-poppins`}>
    <Navbar />
    <Home />
    <About />
    <ToolsAnimation />
    <Projects />
    <Certification />
    <Contact />
    <Footer />
    </div>
  )
}

export default Portofolio
