const Image = ({src = "", alt = "", className = "", aos = ""}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      data-aos={aos}
    />
  );
};

export default Image;