import type { FC } from "react";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.shypbyte.customer";

const CtaBannerOne: FC = () => {
  return (
    <section className='download-app'>
      <div className='cta-band tw-py-100-px tw-mx-48-px position-relative z-1 overflow-hidden'>
        <div className='container position-relative z-1'>
          <div className='text-center mx-auto' style={{ maxWidth: "820px" }}>
            <div
              className='cta-band__eyebrow mx-auto'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              Mobile First
            </div>
            <h2
              className='splitTextStyleOne text-white tw-leading-none'
              data-aos='fade-up'
              data-aos-duration={700}
            >
              Shyp Byte Is Built Mobile-First — Get the Full Experience
            </h2>
            <p
              className='text-white tw-text-xl tw-mt-605 splitTextStyleOne fw-medium tw-leading-145 mx-auto mb-0'
              style={{ opacity: 0.82, maxWidth: "640px" }}
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Book shipments, track parcels, manage your profile, and get
              support — all from your pocket.
            </p>
            <div
              className='tw-mt-10'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={900}
            >
              <a
                href={PLAY_STORE}
                target='_blank'
                rel='noopener noreferrer'
                className='hover--translate-y-1 active--translate-y-scale-9 tw-rounded-2xl common-shadow-twentyEight d-inline-block'
              >
                <img
                  src='/assets/images/icons/store-two2.png'
                  alt='Get it on Google Play'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerOne;
