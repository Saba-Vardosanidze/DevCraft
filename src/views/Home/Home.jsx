import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <HeroSection>
        <Header />
      </HeroSection>
      <Welcome />
    </div>
  );
};

export default Home;
