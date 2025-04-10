import Collaborate from "../../components/Collaborate/Collaborate";
import Expertise from "../../components/Expertise/Expertise";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Offered from "../../components/offered/Offered";
import PrtfolioList from "../../components/PortfolioList/PortfolioList";
import Tools from "../../components/Tools/Tools";
import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <HeroSection>
        <Header />
      </HeroSection>
      <Welcome />
      <Offered />
      <Expertise />
      <PrtfolioList />
      <Tools />
      <Collaborate />
    </div>
  );
};

export default Home;
