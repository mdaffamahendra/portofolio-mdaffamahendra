import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const Rectangle = ({ className, animateName }) => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`border-4 ${
        isDarkMode ? "border-white" : " border-cyan-700"
      }  ${className} ${animateName}`}
    ></div>
  );
};

export default Rectangle;
