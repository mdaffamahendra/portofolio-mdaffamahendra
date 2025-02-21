import React, { useContext, useEffect } from "react";
import ProjectSlider from "../fragments/ProjectsSlider";
import { DarkMode } from "../../context/DarkMode";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const {isDarkMode} = useContext(DarkMode)
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
   return (
    <div className={`${isDarkMode ? "text-white" : "text-cyan-700"} py-20`} id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-10">
        <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">My Projects</h2>
      <ProjectSlider aos={"flip-up"}/>
      </div>
    </div>
  );
};

export default Projects;
