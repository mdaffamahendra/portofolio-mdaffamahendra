import React from "react";
import { TypeAnimation } from "react-type-animation";
const HomeText = ({ aos }) => {
  return (
    <div className="md:w-2/4 md:pt-10" data-aos={aos}>
      <h2 className="text-2xl md:text-4xl font-bold"> I'm </h2>
      <h1 className="text-2xl md:text-4xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          <TypeAnimation
            sequence={[
              "Daffa Mahendra",
              1000,
              "Front-End Developer",
              1000,
              "Web Enthusiast",
              1000,
            ]}
            speed={30} // Kecepatan typing (semakin kecil, semakin cepat)
            repeat={Infinity} // Mengulang animasi secara terus-menerus
            style={{ display: "inline-block" }} // Gaya tambahan jika diperlukan
          />
        </span>
      </h1>
      <p className="text-sm md:text-2xl tracking-tight mt-2">
        I specialize in building modern and responsive web applications.
      </p>
      <a
        href="#contact"
        className="inline-block mt-5 bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer"
      >
        Contact Me
      </a>
    </div>
  );
};

export default HomeText;
