import type { FC } from "react";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.shypbyte.customer";

const BannerFive: FC = () => {
  return (
    <section className='banner-five'>
      <div className='tw-py-100-px tw-mx-48-px position-relative gradient-bg-seven rounded-top-30-px z-1 overflow-hidden'>
        <div className='container position-relative z-1'>
          <div className='row gy-5 align-items-center'>
            <div className='col-lg-6'>
              <div
                className='bg-white tw-py-2 tw-px-7 rounded-pill text-main-600 fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyEight'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                Send Courier Worldwide
              </div>
              <h1 className='splitTextStyleOne text-heading tw-leading-none'>
                Send courier with Shyp Byte — fast, simple &amp; reliable.
              </h1>
              <p className='text-neutral-600 tw-text-xl tw-mt-605 splitTextStyleOne fw-medium tw-leading-145 max-w-548-px'>
                Book international courier from India in minutes. Doorstep pickup,
                transparent rates, customs support, and live tracking — all in one app.
              </p>
              <div
                className='tw-mt-10'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={800}
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

            <div className='col-lg-6'>
              <div className='text-center text-lg-end'>
                <img
                  src='/assets/images/banner.png'
                  alt='Send courier with Shyp Byte app'
                  className='img-fluid'
                  data-aos='zoom-in'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={1200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFive;
