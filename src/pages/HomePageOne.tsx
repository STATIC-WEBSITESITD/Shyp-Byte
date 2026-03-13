import type { FC } from "react";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
// import TopFeaturesOne from "../components/TopFeaturesOne";
import BannerOne from "../components/BannerOne";
// import BrandSliderOne from "../components/BrandSliderOne";
import AboutOne from "../components/AboutOne";
import ShippingFeaturesOne from "../components/ShippingFeaturesOne";
import StackCardsOne from "../components/StackCardsOne";
import GlobalMapOne from "../components/GlobalMapOne";
import EnquireFormOne from "../components/EnquireFormOne";
import FAQHomeOne from "../components/FAQHomeOne";
import CtaBannerOne from "../components/CtaBannerOne";
// import RoadmapOne from "../components/RoadmapOne";
// import OfferOne from "../components/OfferOne";
// import FAQOne from "../components/FAQOne";
// import ChooseUsOne from "../components/ChooseUsOne";
// import ShowCaseOne from "../components/ShowCaseOne";
// import TestimonialsOne from "../components/TestimonialsOne";
// import BlogOne from "../components/BlogOne";
// import CtaOne from "../components/CtaOne";
import FooterOne from "../components/FooterOne";

const HomePageOne: FC = () => {
  return (
    <>    
      <TopHeaderOne />      
      <HeaderOne />      
      {/* <TopFeaturesOne /> */}      
      <BannerOne />      
      {/* <BrandSliderOne /> */}      
      <AboutOne />      
      <ShippingFeaturesOne />      
      <StackCardsOne />      
      <GlobalMapOne />      
      <EnquireFormOne />      
      <FAQHomeOne />      
      <CtaBannerOne />      
      {/* <RoadmapOne /> */}      
      {/* <OfferOne /> */}      
      {/* <FAQOne /> */}      
      {/* <ChooseUsOne /> */}      
      {/* <ShowCaseOne /> */}      
      {/* <TestimonialsOne /> */}      
      {/* <div className='position-relative z-1'>
        <img
          src='/assets/images/shapes/shape-image.png'
          alt='Shape'
          className='position-absolute w-100 tw-start-0 bottom-0 z-n1'
        />        
      <BlogOne />      
      <CtaOne />
      </div> */}      
      <FooterOne />
    </>
  );
};

export default HomePageOne;
