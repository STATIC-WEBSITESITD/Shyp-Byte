import type { FC } from "react";
import PrimaryButton from "./PrimaryButton";
import SectionHead from "./SectionHead";

const AboutOne: FC = () => {
  return (
    <section className='about-home py-120 section-flow-muted'>
      <div className='container'>
        <div className='row gy-5 align-items-center'>
          <div className='col-lg-6'>
            <div
              className='about-home__media'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <img
                src='/assets/images/t1.png'
                alt='Shyp Byte international courier'
              />
            </div>
          </div>

          <div className='col-lg-6'>
            <SectionHead
              align='start'
              eyebrow='About Us'
              title='We Don’t Just Ship Packages — We Move Businesses Forward'
              description='Shyp Byte is an international courier platform for businesses and individuals — seamless booking, doorstep pickup, and delivery across 220+ countries.'
              className='mb-0'
            />

            <div className='d-flex flex-column tw-gap-5 tw-mt-10'>
              {[
                "App-first booking from India",
                "Transparent predefined rates",
                "KYC & customs-ready documents",
              ].map((item, i) => (
                <div
                  key={item}
                  className='d-flex align-items-center tw-gap-205'
                  data-aos='fade-up'
                  data-aos-duration={700 + i * 120}
                >
                  <span className='about-home__check tw-text-lg'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <span className='text-heading tw-text-lg fw-semibold'>{item}</span>
                </div>
              ))}
            </div>

            <div className='tw-mt-11' data-aos='fade-up' data-aos-duration={1000}>
              <PrimaryButton to='/about'>Learn More</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
