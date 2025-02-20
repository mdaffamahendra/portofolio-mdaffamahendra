import React, { useContext } from "react";
import HomeText from "../fragments/HomeText";
import HomeImage from "../fragments/HomeImage";
import { DarkMode } from "../../context/DarkMode";

const Home = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`${
        isDarkMode ? "text-white" : "text-cyan-700"
      } flex w-full justify-between items-start md:pb-20 md:pt-24 pb-24 pt-32 p-10 md:p-20`}
    >
      <HomeText />
      <HomeImage />
    </div>
  );
};

export default Home;
