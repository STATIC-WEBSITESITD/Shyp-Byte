import type { FC } from "react";

import { Link } from "react-router-dom";

const BannerOne: FC = () => {














  return (
    <section className='banner tw-py-100-px overflow-hidden section-bg-three position-relative'>
      <div className='bg-gradient-color' aria-hidden />
      <img
        src='/assets/images/sqaure_shape.png'
        alt='Shape'
        className='position-absolute top-0 tw-end-0 tw-me-12-percent z-3'
      />
      <div className='container max-w-1400-px position-relative z-3'>
        <div className='row gy-4 align-items-center'>
          <div className='col-lg-6 order-2 order-lg-1'>
            <div>
              <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                <span className='d-inline-block'>Your </span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block fw-semibold text-main-600'> Brand  </span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>IS</span>{" "}
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>Ready</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>for </span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>the </span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block fw-semibold text-main-600'>World.</span>
                <span className='d-inline-block'>Your</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block fw-semibold text-main-600'>Logistics</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>Should</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>Be</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>Too.</span>
              </h1>
              <p className='text-white tw-text-lg max-w-500-px fw-medium tw-mt-8 splitTextStyleOne'>
              Shyp Byte transforms international shipping and cross-border ecommerce logistics into a powerful growth engine — helping brands ship from India to customers worldwide without operational complexity.
              </p>
              <div className='tw-mt-11 d-flex align-items-center tw-gap-42-px flex-wrap'>
                <div
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <Link
                    to='/register'
                    className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-sm-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Start Global Shipping</span>
                  </Link>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <div className='d-flex align-items-center tw-gap-4'>
                    <div className='d-flex align-items-center'>
                      <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-2'>
                        <img
                          src='/assets/images/client-img1.png'
                          alt='Client Image'
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                      <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative tw--ms-10-px z-1'>
                        <img
                          src='/assets/images/client-img2.png'
                          alt='Client Image'
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                      <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative tw--ms-10-px'>
                        <img
                          src='/assets/images/client-img3.png'
                          alt='Client Image'
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                    </div>
                    <span className='h5 counter text-white'>3 M+</span>
                  </div>
                  <p className='fw-bold tw-text-sm font-heading text-heading tw-mt-2 counter text-white'>
                    5000+ Client reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 order-1 order-lg-2'>
            <div className='tw-ps-98-px position-relative tw-pb-8'>
              <div className='position-relative z-1'>
                <img
                  src='/assets/images/t1.png'
                  alt=''
                  data-aos='zoom-in'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={1000}
                />
              </div>
              <div className='d-none d-lg-block bg-white tw-rounded-3xl tw-p-6 max-w-218-px position-absolute tw-end-0 top-0 w-100 tw--mt-8-px tw--me-8-px common-shadow-two z-1'>
                
                
                <div className='tw-mt-3 d-flex align-items-center justify-content-between max-w-154-px mt-0'>
                  <span className='tw-text-lg text-heading fw-semibold'>
                    Secure & Trusted Shipping Partner
                  </span>
                  
                </div>
              </div>
              <div
                className='d-none d-lg-block bg-main-600 tw-p-12 tw-pe-6 d-inline-block tw-rounded-xl clip-path-one position-absolute bottom-0 tw-end-0 z-1 tw--me-70-px tw-mb-205'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={900}
              >
                <h2 className='text-white counter'>99%</h2>
                <span className='text-white'>On-Time Delivery Rate</span>
              </div>
              <div className='d-none d-lg-flex bg-white-7 tw-py-6 tw-px-7 tw-rounded-2xl border border-white bg-blur-20 position-absolute bottom-0 tw-start-0 z-1 align-items-center tw-gap-8 common-shadow-two' data-aos='fade-up' data-aos-anchor-placement='top-bottom' data-aos-duration={800}>
                <img
                  src='/assets/images/shapes/revenue-shape.png'
                  alt=''
                  className='flower animate__wobble__two position-absolute tw-end-100 bottom-100 tw--m-24-px z-n1'
                />
                <div>
                  <div className='tab-content'>
                    
                        <span className='tw-text-sm text-neutral-500 tw-mb-1 text-uppercase'>
                          Automation-Driven Logistics
                        </span>
                        
                      
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
