import ImgCard from "../components/ImgCard";
import WebsiteLink from "../components/WebsiteLink";
import img1 from "../img/hairtopia-01.webp";
import img2 from "../img/mpddsa-01.webp";
import img3 from "../img/mpddsa-02.webp";
import img4 from "../img/p5.webp";
import img5 from "../img/p4.webp";
import img6 from "../img/p7.webp";
import homepage from "../img/homepage.jpg";
import homepage2 from "../img/reactjobs.jpg";
import homepage3 from "../img/tasktracker.jpg";

const ProjectsPage = () => {
  return (
    <>
      <div className="bg-gray-900">
        <h1 className="text-3xl font-bold text-white text-center py-4">
          Browse through our Projects
        </h1>
        <h2 className="text-2xl font-bold text-gray-400 text-center pt-4">
          Visual designs
        </h2>
        <div className="grid grid-col md:grid-cols-3 gap-4 px-10 py-10">
          <ImgCard Img={img1} />
          <ImgCard Img={img2} />
          <ImgCard Img={img3} />
          <ImgCard Img={img4} />
          <ImgCard Img={img5} />
          <ImgCard Img={img6} />
        </div>
        <h2 className="text-2xl font-bold text-gray-400 text-center pt-4">
          Website designs
        </h2>
        <div className="grid grid-col md:grid-cols-3 gap-4 px-10 pt-5 pb-10">
          <WebsiteLink
            homepageImg={homepage}
            urlLink={"https://themitchellsplaindrivingschoolassociation.site/"}
          />
          <WebsiteLink
            homepageImg={homepage2}
            urlLink={"https://jismaeel.github.io/react-jobs-site/"}
          />
          <WebsiteLink homepageImg={homepage3} />
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
