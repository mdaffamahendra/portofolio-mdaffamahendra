import React, { useEffect } from "react";
import Rectangle from "../elements/Rectangle";
import AboutContent from "../fragments/AboutContent";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div
      className="pb-20 pt-24 text-cyan-700 min-h-screen relative px-16"
      id="about"
    >
      <Rectangle
        className={
          "hidden md:block md:absolute bottom-20 left-20 w-[180px] h-[180px]"
        }
        animateName={"animate-slow"}
        aos={"fade-up"}
      />
      <Rectangle
        className={
          "hidden md:block md:absolute top-30 right-20 w-[140px] h-[140px] "
        }
        animateName={"animate-slow-back"}
        aos={"fade-up"}
      />
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
