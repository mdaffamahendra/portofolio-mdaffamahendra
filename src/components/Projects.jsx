import React, { useContext } from "react";
import ProjectSlider from "../fragments/ProjectsSlider";
import { DarkMode } from "../../context/DarkMode";


const Projects = () => {
  const {isDarkMode} = useContext(DarkMode)
   return (
    <div className={`${isDarkMode ? "text-white" : "text-cyan-700"} py-20`} id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 pb-10">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <ProjectSlider />
      </div>
    </div>
  );
};

export default Projects;
