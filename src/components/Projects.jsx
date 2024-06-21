import ImgCard from "./ImgCard";
import img1 from "../img/hairtopia-01.webp";
import img2 from "../img/mpddsa-01.webp";
import img3 from "../img/mpddsa-02.webp";

const Projects = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-90% from-gray-900 py-20">
        <h1 className="text-3xl font-bold text-white text-center py-10">
          Projects we've done
        </h1>
        <div className="grid grid-col md:grid-cols-3 gap-4  px-10">
          <ImgCard Img={img1} />
          <ImgCard Img={img2} />
          <ImgCard Img={img3} />
        </div>
      </div>
    </>
  );
};

export default Projects;
