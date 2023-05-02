import s from "./main-page.module.scss";

import DescriptionSection from "../../components/DescriptionSection";
import HeroSection from "../../components/HeroSection";

const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <DescriptionSection />
    </div>
  );
};

export default MainPage;
