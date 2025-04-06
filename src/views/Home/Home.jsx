import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Offered from "../../components/offered/Offered";
import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <HeroSection>
        <Header />
      </HeroSection>
      <Welcome />
      <Offered />
    </div>
  );
};

export default Home;
