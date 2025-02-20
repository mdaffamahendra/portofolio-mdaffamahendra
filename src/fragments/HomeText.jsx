const HomeText = () => {
  return (
    <div className="md:w-2/4 md:pt-10 ">
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Daffa Mahendra
        </span>
        , Front-End Developer
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
