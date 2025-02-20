import { useContext } from "react";
import ImageProfile from "../assets/about-me-image.jpg";
import ContactForm from "../fragments/ContactForm";
import PersonalInfo from "../fragments/ContactPersonalInfo";
import { DarkMode } from "../../context/DarkMode";

const Contact = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className={`${isDarkMode ? "bg-[#171d32] text-white" : "bg-white text-cyan-700"}  pb-20 pt-24 px-6 md:px-20`} id="contact">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left self-start">
          <img
            src={ImageProfile}
            alt="Profile"
            className="w-64 mx-auto md:mx-0 rounded-lg shadow-lg"
          />
          <PersonalInfo
            title="Daffa Mahendra"
            description="I look forward to the opportunity to collaborate with you and create creative and effective web solutions. Thank you for visiting this page!"
          />
        </div>
        <div className="self-start">
          <h2 className="text-3xl font-bold">My Contact</h2>
          <p className="text-gray-400 mt-2">
            Always available for collaboration in website development
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
