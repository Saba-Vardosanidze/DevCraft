import AboutHero from "../../components/AboutHero/AboutHero";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";

export default function About() {
  return (
    <div className="myHeight">
      <main className="mainContainer">
        <Header />
        <AboutHero />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
