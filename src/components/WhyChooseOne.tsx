import type { FC } from "react";
import PrimaryButton from "./PrimaryButton";
import SectionHead from "./SectionHead";

const features = [
  {
    icon: "ph-tag",
    title: "No Bidding, No Guessing",
    desc: "Predefined rates mean the price you see is the price you pay. Re-weighing at the hub only adjusts for actual discrepancies, shown transparently at checkout.",
  },
  {
    icon: "ph-device-mobile",
    title: "End-to-End in One App",
    desc: "From pickup to final delivery tracking, every step happens without switching apps or calling anyone.",
  },
  {
    icon: "ph-identification-card",
    title: "KYC & Customs Ready",
    desc: "Built-in Aadhaar verification and document/photo uploads mean fewer customs delays.",
  },
  {
    icon: "ph-headset",
    title: "Real Human Support",
    desc: "Call, email, or use in-app support whenever you need help — not just a chatbot.",
  },
] as const;

const WhyChooseOne: FC = () => {
  return (
    <section className='why-choose py-120 section-flow-muted'>
      <div className='container'>
        <div className='row gy-5 align-items-center tw-mb-12 tw-mb-lg-14'>
          <div className='col-lg-6'>
            <div
              className='why-choose__media d-flex align-items-center justify-content-center'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <img
                src='/assets/images/wcu.png'
                alt='Shyp Byte mobile app'
                className='img-fluid'
              />
            </div>
          </div>

          <div className='col-lg-6'>
            <SectionHead
              align='start'
              eyebrow='Why Choose Shyp Byte'
              title='Built for People Who Just Want to Ship — Not Negotiate'
              description='Transparent rates, one app for every step, and real people when you need them — so shipping stays simple from pickup to delivery.'
              className='mb-0'
            />

            <div className='d-flex flex-column tw-gap-5 tw-mt-10'>
              {[
                "Fixed rates before you book",
                "Pickup to tracking in one place",
                "KYC & customs tools built in",
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
              <PrimaryButton />
            </div>
          </div>
        </div>

        <div className='row gy-4'>
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className='col-xl-3 col-sm-6'
              data-aos='fade-up'
              data-aos-duration={600 + i * 100}
            >
              <div className='why-choose__card bg-white tw-py-10 tw-px-7 h-100 group'>
                <span className='why-choose__icon tw-w-14 tw-h-14 d-flex align-items-center justify-content-center tw-mb-8 bg-main-50 text-main-600'>
                  <i className={`ph-bold ${feature.icon} tw-text-2xl`} />
                </span>
                <h4 className='splitTextStyleOne tw-mb-4 text-heading tw-text-xl'>
                  {feature.title}
                </h4>
                <p className='splitTextStyleOne fw-medium text-neutral-500 mb-0 tw-leading-relaxed'>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOne;
