import React, { useContext, useEffect } from "react";
import HomeText from "../fragments/HomeText";
import HomeImage from "../fragments/HomeImage";
import { DarkMode } from "../../context/DarkMode";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { isDarkMode } = useContext(DarkMode);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div
      className={`${
        isDarkMode ? "text-white" : "text-cyan-700"
      } flex-col md:flex-row flex w-full justify-between items-center md:pb-20 md:pt-24 pb-24 pt-32 p-10 md:p-20`}
    >
      <HomeImage aos={"fade-left"}/>
      <HomeText aos={"fade-right"}/>
    </div>
  );
};

export default Home;
