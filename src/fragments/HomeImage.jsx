import avatarImg from "../assets/programmer.webp";
import Image from "../elements/Image";

const HomeImage = ({aos}) => {
  return (
    <div data-aos={aos}>
      <Image src={avatarImg} alt={"Avatar Image"} className="w-64 h-64 md:w-128 md:h-128"/>
    </div>
  );
};

export default HomeImage;
