import React, { useState, useEffect, useContext } from "react";
import {
  RiCloseLine,
  RiMenu2Line,
  RiMoonLine,
  RiSunLine,
} from "@remixicon/react";
import NavbarList from "../fragments/NavbarList";
import Button from "../elements/Button";
import { DarkMode } from "../../context/DarkMode";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode; 
    setIsDarkMode(newMode);
    localStorage.setItem("dark-mode", JSON.stringify(newMode)); 
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-opacity-60 px-10 py-6 md:px-20 flex justify-between items-start shadow-md ${isDarkMode ? 'bg-[#171d32] border-b-white border-b-2 text-white' : 'bg-white border-b-cyan-700 border-b-2 text-cyan-700'}`}>
      <span className="text-xl font-bold tracking-wide">DaffaMahendra</span>

      {/* Menu Items */}
      <div className="flex items-start gap-6">
        <NavbarList isMenuOpen={isMenuOpen}/>
        <Button onClick={toggleDarkMode} className="mr-12">
          {isDarkMode ?  <RiMoonLine size={24} /> : <RiSunLine size={24} />}
        </Button>
      </div>

      {/* Menu Toggle Button */}
      <Button
        onClick={toggleMenu}
        className="md:hidden absolute right-10 top-6 transition-all duration-300"
      >
        {isMenuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
      </Button>
    </nav>
  );
};

export default Navbar;
