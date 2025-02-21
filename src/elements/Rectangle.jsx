import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const Rectangle = ({ className, animateName, aos }) => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`border-4 ${
        isDarkMode ? "border-white" : " border-cyan-700"
      }  ${className} ${animateName}`} data-aos={aos}
    ></div>
  );
};

export default Rectangle;
