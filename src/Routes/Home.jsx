import EmailSection from "../Components/EmailSection/EmailSection";
// import Footer from "../Components/Footer/Footer";
// import Header from "../Components/Header/Header";
import HeroSection2 from "../Components/HeroSection 2/HeroSection-2";
import HeroSection4 from "../Components/HeroSection 4/HeroSection-4";
import HeroSection5 from "../Components/HeroSection 5/HeroSection-5";
import HeroSection1 from "../Components/HeroSection1/HeroSection-1";
import HeroSection3 from "../Components/HeroSSetion 3/HeroSection-3";
import Testimonials from "../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <HeroSection1 />
      <HeroSection2 />
      <HeroSection3 />
      <Testimonials />
      <HeroSection4 />
      <HeroSection5 />
      <EmailSection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
