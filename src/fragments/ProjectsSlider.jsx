import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import projects from "../data/projects"
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";


const ProjectSlider = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className="max-w-5xl mx-auto p-8">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          768: { 
            slidesPerView: 2,
          },
        }} 
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }} 
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-cyan-700"} p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300`}>
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2 text-white">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
