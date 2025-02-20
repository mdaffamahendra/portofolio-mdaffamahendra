import AboutImage from "../assets/about-me-image.jpg";
import Image from "../elements/Image";
import AboutContentIcon from "./AboutContentIcon";
import AboutContentParaghraps from "./AboutContentParaghraps";
import AboutContentTitle from "./AboutContentTitle";

const AboutContent = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:space-x-12">
      <Image
        src={AboutImage}
        alt={"Profile Image"}
        className={
          "w-72 h-80 md:w-96 md:h-116 rounded-lg object-cover mb-8 md:mb-0 shadow-2xl transition-transform transform hover:scale-105 border border-1 border-white"
        }
      />
      <div className="flex-1 bg-opacity-20 pl-6 pr-18 rounded-lg">
        <AboutContentTitle />
        <AboutContentParaghraps />
        <AboutContentIcon />
      </div>
    </div>
  );
};

export default AboutContent;
