import type { FC } from "react";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import BannerFive from "../components/BannerFive";
import TrustStripOne from "../components/TrustStripOne";
import HowItWorksOne from "../components/HowItWorksOne";
import WhyChooseOne from "../components/WhyChooseOne";
import StackCardsOne from "../components/StackCardsOne";
import ShippingFeaturesOne from "../components/ShippingFeaturesOne";
import GlobalMapOne from "../components/GlobalMapOne";
import AboutOne from "../components/AboutOne";
import FAQHomeOne from "../components/FAQHomeOne";
import CtaBannerOne from "../components/CtaBannerOne";
import ShippingMarqueeOne from "../components/ShippingMarqueeOne";
import FooterOne from "../components/FooterOne";

const HomePageOne: FC = () => {
  return (
    <>
      <TopHeaderOne />
      <HeaderOne />
      <BannerFive />
      <TrustStripOne />
      <HowItWorksOne />
      <WhyChooseOne />
      <StackCardsOne />
      <ShippingFeaturesOne />
      <GlobalMapOne />
      <AboutOne />
      <FAQHomeOne />
      <CtaBannerOne />
      <ShippingMarqueeOne />
      <FooterOne />
    </>
  );
};

export default HomePageOne;
