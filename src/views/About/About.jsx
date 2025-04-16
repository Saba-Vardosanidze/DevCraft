import AboutHero from "../../components/AboutHero/AboutHero";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <div className="myHeight">
      <main className="mainContainer">
        <Header />
        <AboutHero />
      </main>
      <Footer />
    </div>
  );
}
