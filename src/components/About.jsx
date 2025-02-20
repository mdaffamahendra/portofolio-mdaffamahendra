import React from "react";
import Rectangle from "../elements/Rectangle";
import AboutContent from "../fragments/AboutContent";

const About = () => {
  return (
    <div className="pb-20 pt-24 text-cyan-700 min-h-screen relative px-16" id="about">
      <Rectangle  className={"hidden md:block md:absolute bottom-20 left-20 w-[180px] h-[180px]"} animateName={"animate-slow"}/>
      <Rectangle className={"hidden md:block md:absolute top-30 right-20 w-[140px] h-[140px] "} animateName={"animate-slow-back"}/>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
