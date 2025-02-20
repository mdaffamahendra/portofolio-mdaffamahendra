const NavbarList = ({ isMenuOpen }) => {
  return (
    <ul
      className={`fixed top-0 right-0 w-1/2 px-4 py-14 transition-transform duration-300 ease-in-out transform ${
        isMenuOpen ? "translate-x-0 bg-white shadow-lg" : "translate-x-full"
      } md:translate-x-0 md:relative md:w-auto md:p-0 md:flex gap-6 text-center font-semibold rounded-lg`}
    >
      <li className="relative">
        <a
          href="#about"
          className="block p-2 md:p-0 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-700 after:transition-all after:duration-300 hover:after:w-full"
        >
          About
        </a>
      </li>
      <li className="relative">
        <a
          href="#projects"
          className="block p-2 md:p-0 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-700 after:transition-all after:duration-300 hover:after:w-full"
        >
          Projects
        </a>
      </li>
      <li className="relative">
        <a
          href="#certifications"
          className="block p-2 md:p-0 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-700 after:transition-all after:duration-300 hover:after:w-full"
        >
          Certifications
        </a>
      </li>
      <li className="relative">
        <a
          href="#contact"
          className="block p-2 md:p-0 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-700 after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavbarList;
