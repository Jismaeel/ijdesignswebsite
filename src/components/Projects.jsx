import ImgCard from "./ImgCard";
import img1 from "../img/hairtopia-01.webp";

const Projects = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-80% from-gray-900">
        <h1 className="text-3xl font-bold text-white text-center py-4">
          Projects we've done
        </h1>
        <div className="grid grid-col md:grid-cols-3 gap-4  px-10">
          <ImgCard Img={img1} />
          <ImgCard Img={img1} />
          <ImgCard Img={img1} />
        </div>
      </div>
    </>
  );
};

export default Projects;
