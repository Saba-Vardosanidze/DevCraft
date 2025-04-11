import Collaborate from "../../components/Collaborate/Collaborate";
import Expertise from "../../components/Expertise/Expertise";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Offered from "../../components/offered/Offered";
import PrtfolioList from "../../components/PortfolioList/PortfolioList";
import Tools from "../../components/Tools/Tools";
import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
  return (
    <div className="myHeight">
      <main>
        <HeroSection>
          <Header />
        </HeroSection>
        <Welcome />
        <Offered />
        <Expertise />
        <PrtfolioList />
        <Tools />
        <Collaborate />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
