import { useContext } from 'react';
import Image from '../assets/about-me-image.jpg';
import certifications from "../data/certifications"
import { DarkMode } from '../../context/DarkMode';

const Certification = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className={`${isDarkMode ? "text-white" : "text-cyan-700"} pb-20 pt-24`} id="certifications">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-4">Certifications</h2>
        <div className="mx-auto shadow-lg rounded-xl p-6 my-4 px-12 flex flex-col items-center space-x-4">
          <img
            src={Image}
            alt="Inspirational"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <div>
            <p className="font-semibold text-center">
              "Don't give up just because it's hard. All great things start with small steps
              filled with perseverance and passion. Keep moving forward!"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((data) => (
            <div
              key={data.id}
              className={`${isDarkMode ? "bg-gray-800" : "bg-cyan-800"}  p-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-105`}
            >
              <h3 className={`${isDarkMode ? "text-cyan-700" : "text-white"}  text-2xl font-bold mb-2`}>{data.name}</h3>
              <p className={`${isDarkMode ? "text-cyan-700" : "text-white"} mb-2`}>{data.company}</p>
              <a
                href={data.link}
                className="relative text-gray-400 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 decoration-1 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link Certification &#8599;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
