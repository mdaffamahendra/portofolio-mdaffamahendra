import { useContext } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { DarkMode } from "../../context/DarkMode";

const AboutContentIcon = () => {
  const { isDarkMode} = useContext(DarkMode);

  return (
    <div className="flex space-x-6">
      <a
        href="https://www.linkedin.com/in/muhammad-daffa-mahendra/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          isDarkMode
            ? "text-white hover:text-gray-500"
            : "text-cyan-700 hover:text-cyan-900"
        } text-2xl`}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/mdaffamahendra"
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          isDarkMode
            ? "text-white hover:text-gray-500"
            : "text-cyan-700 hover:text-cyan-900"
        } text-2xl`}
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/mdmp.dap"
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          isDarkMode
            ? "text-white hover:text-gray-500"
            : "text-cyan-700 hover:text-cyan-900"
        } text-2xl`}
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default AboutContentIcon;
