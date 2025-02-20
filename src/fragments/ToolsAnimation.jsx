import { motion } from "framer-motion";
import { useContext } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiPostman, SiTailwindcss, SiMongodb } from "react-icons/si";
import { DarkMode } from "../../context/DarkMode";

const tools = [
  { icon: <FaReact className="text-cyan-400" /> },
  { icon: <FaHtml5 className="text-orange-500" /> },
  { icon: <FaCss3Alt className="text-blue-500" /> },
  { icon: <FaJs className="text-yellow-400" /> },
  { icon: <FaNodeJs className="text-green-500" /> },
  { icon: <FaGitAlt className="text-red-500" /> },
  { icon: <SiPostman className="text-orange-400" /> },
  { icon: <FaBootstrap className="text-purple-600" /> },
  { icon: <SiTailwindcss className="text-cyan-500" /> },
  { icon: <SiMongodb className="text-green-600" /> }
];

const duplicatedTools = [...tools, ...tools];

const ToolsSection = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className={`w-full ${isDarkMode ? "bg-gray-800" : "bg-cyan-800"}  py-10 overflow-hidden flex flex-col items-center gap-4`}>
      <h1 className="text-3xl font-bold text-white">Tools</h1>
      <div className="relative flex items-center w-full overflow-hidden">
        <motion.div
          className="flex space-x-10 flex-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 30, 
            ease: "linear"
          }}
        >
          {duplicatedTools.map((tool, index) => (
            <div key={index} className="w-20 h-20 flex items-center justify-center text-5xl transition-transform transform hover:scale-110">
              {tool.icon}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ToolsSection 