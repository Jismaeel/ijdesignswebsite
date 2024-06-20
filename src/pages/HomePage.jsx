import HeroSection from "../components/HeroSection";
import Contactus from "../components/Contactus";
import Testamonials from "../components/Testamonials";
import FacebookFeed from "../components/FacebookFeed";
import Projects from "../components/Projects";
import HomeButton from "../components/HomeButton";



const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <HomeButton text={" View more"} />
      <FacebookFeed />
      <Testamonials />
      <Contactus />
    </>
  );
};

export default HomePage;
