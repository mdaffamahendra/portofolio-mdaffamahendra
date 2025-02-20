import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const AboutContentTitle = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <h1
      className={`${
        isDarkMode ? "text-white" : "text-cyan-700"
      } text-3xl md:text-4xl font-bold`}
    >
      I AM AVAILABLE FOR{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        FRONT-END
      </span>{" "}
      WEB DEVELOPMENT
    </h1>
  );
};

export default AboutContentTitle;
