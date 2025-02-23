import Attetion from "../Components/PricingPage/Attetion";
import BackendSection from "../Components/PricingPage/Backend";
import PricingTitle from "../Components/PricingPage/Pricing";
import PricingSection from "../Components/PricingPage/PricingSection";
import WebDesigning from "../Components/PricingPage/WebDesign";
import WebMaintenence from "../Components/PricingPage/WebMaintenance";
import Wordpress from "../Components/PricingPage/Wordpress";

const Pricing = () => {
  return (
    <>
      <PricingTitle />
      <PricingSection />
      <BackendSection />
      <WebDesigning />
      <WebMaintenence />
      <Wordpress />
      <Attetion />
    </>
  );
};

export default Pricing;
