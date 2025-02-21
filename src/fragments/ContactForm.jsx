import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Button from "../elements/Button";
import { DarkMode } from "../../context/DarkMode";

const ContactForm = () => {
  const { isDarkMode } = useContext(DarkMode);
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_gwukpkl", 
        "template_mmjf64a", 
        form.current,
        "EPbHJtD59ELYtp3qf"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Message sent successfully!",
          confirmButtonText: "OK",
        });

        form.current.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send message. Please try again later.",
          confirmButtonText: "OK",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form className="mt-6 space-y-4" ref={form} onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name *"
          id="name"
          name="name"
          autoComplete="off"
          className={`w-full p-3 ${
            isDarkMode ? "bg-[#112240] text-white" : "bg-white text-cyan-700"
          } rounded-lg focus:outline-cyan-700 border-1 border-cyan-400`}
          required
        />
        <input
          type="email"
          placeholder="Your Email *"
          id="email"
          name="email"
          autoComplete="off"
          className={`w-full p-3 ${
            isDarkMode ? "bg-[#112240] text-white" : "bg-white text-cyan-700"
          } rounded-lg focus:outline-cyan-700 border-1 border-cyan-400`}
          required
        />
      </div>
      <input
        type="text"
        placeholder="Subject *"
        id="subject"
        name="subject"
        autoComplete="off"
        className={`w-full p-3 ${
          isDarkMode ? "bg-[#112240] text-white" : "bg-white text-cyan-700"
        } rounded-lg focus:outline-cyan-700 border-1 border-cyan-400`}
        required
      />
      <textarea
        placeholder="Your Message *"
        id="message"
        name="message"
        autoComplete="off"
        className={`w-full h-32 p-3 ${
          isDarkMode ? "bg-[#112240] text-white" : "bg-white text-cyan-700"
        } rounded-lg focus:outline-cyan-700 border-1 border-cyan-400`}
        required
      ></textarea>
      <Button
        type="submit"
        className={`w-full py-3 flex items-center justify-center ${
          isDarkMode
            ? "bg-[#112240] hover:bg-gray-600"
            : "bg-cyan-700 hover:bg-gray-600"
        } text-white font-bold rounded-lg transition`}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
