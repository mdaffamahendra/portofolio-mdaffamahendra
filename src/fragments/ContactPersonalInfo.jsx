import { useContext } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { DarkMode } from "../../context/DarkMode";

const PersonalInfo = ({ title, description }) => {
  const { isDarkMode } = useContext(DarkMode);

  const socialLinks = [
    { icon: FaLinkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-daffa-mahendra/" },
    { icon: FaGithub, name: "Github", url: "https://github.com/mdaffamahendra" },
    { icon: FaInstagram, name: "Instagram", url: "https://www.instagram.com/mdmp.dap" },
  ];

  return (
    <div className="mt-6">
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-gray-400 mt-2">{description}</p>
      <div className="mt-4 space-y-2">
        {socialLinks.map(({ icon: Icon, name, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 ${
              isDarkMode ? "text-white hover:text-gray-400" : "text-cyan-700 hover:text-cyan-800"
            }`}
          >
            <Icon className="text-2xl" />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
