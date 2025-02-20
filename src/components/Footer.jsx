import React, { useContext } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { DarkMode } from "../../context/DarkMode";

const Footer = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    // <footer className="bg-[#0a192f] text-white py-6 px-6 md:px-20 text-center border-t border-gray-800">
    <footer className={` ${isDarkMode ? "bg-gray-800 text-cyan-800" : "bg-cyan-800 text-white" }  py-6 px-6 md:px-20 text-center border-t border-gray-800`}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-white">&copy;  Daffa Mahendra. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/muhammad-daffa-mahendra/" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? "text-white hover:text-gray-500" : "text-white hover:text-cyan-700" } text-2xl`}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/mdaffamahendra" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? "text-white hover:text-gray-500" : "text-white hover:text-cyan-700" } text-2xl`}>
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/mdmp.dap" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? "text-white hover:text-gray-500" : "text-white hover:text-cyan-700" } text-2xl`}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
