import HeroSection from "../components/HeroSection";
import Contactus from "../components/Contactus";
import Testamonials from "../components/Testamonials";
import FacebookFeed from "../components/FacebookFeed";
import Projects from "../components/Projects";
import HomeButton from "../components/HomeButton";

const HomePage = () => {
  return (
    <>
      <div className="bg-gray-900">
        <HeroSection />
        <Projects />
        <HomeButton text={" View more"} />
        <FacebookFeed />
        <Testamonials />
        <Contactus />
      </div>
    </>
  );
};

export default HomePage;
