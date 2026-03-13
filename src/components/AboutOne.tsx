
import type { FC } from "react";
const AboutOne: FC = () => {
  return (
    <section className='py-120 drag-rotate-element-section'>
      <div className='container'>
        <div className='tw-rounded-50-px gradient-bg-one tw-px-36-px tw-pt-9'>
          <div className='row gy-4'>
            <div className='col-lg-6'>
              <div className='position-relative tw-pb-8 tw-ps-0 tw-pe-4 h-100'>
                <div className='bg-white tw-p-205 tw-rounded-3xl h-100 tw-min-h-400-px'>
                  <img
                    src='/assets/images/about1.jpg'
                    id='faqImage'
                    alt='Image'
                    className='w-100 h-100 object-fit-cover tw-rounded-2xl tw-duration-300'
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='common-shadow-three tw-rounded-40-px bg-white tw-ps-56-px tw-pe-6 tw-py-84-px'>
                <div className='tw-mb-14'>
                  <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
                    About Us
                  </span>
                  <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
                    <span className='d-inline-block'>We</span>
                    <span className='d-inline-block'>&nbsp;</span>
                    <span className='d-inline-block'>Don’t</span>
                    <span className='d-inline-block'>&nbsp;</span>
                    <span className='d-inline-block'>Just</span>
                    <span className='d-inline-block'>&nbsp;</span>
                    <span className='d-inline-block'>Ship</span>
                    <span className='d-inline-block'>&nbsp;</span>
                    <span className='d-inline-block'>Packages.</span>
                    <span className='d-inline-block fw-semibold text-main-600'>&nbsp;</span>
                    <span className='d-inline-block fw-semibold text-main-600'>We</span>
                    <span className='d-inline-block fw-semibold text-main-600'>&nbsp;</span>
                    <span className='d-inline-block fw-semibold text-main-600'>Move</span>
                    <span className='d-inline-block fw-semibold text-main-600'>&nbsp;</span>
                    <span className='d-inline-block fw-semibold text-main-600'>Businesses</span>
                    <span className='d-inline-block fw-semibold text-main-600'>&nbsp;</span>
                    <span className='d-inline-block fw-semibold text-main-600'>Forward.</span>
                  </h3>
                  <div className='tw-mt-6 d-flex flex-column tw-gap-4'>
                    <p className='text-neutral-500 tw-leading-relaxed'>
                      Shypbyte is a leading international courier service provider that offers seamless shipping solutions for businesses and individuals.
                    </p>
                  </div>
                </div>

                <div className='d-flex flex-column tw-gap-10'>

                  <div
                    className='d-flex align-items-start tw-gap-26-px animation-item'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={600}
                  >
                    <span className='tw-w-14 tw-h-14 d-flex justify-content-center align-items-center rounded-3 bg-main-50 text-main-600'>
                      <i className='ph-bold ph-globe tw-text-2xl animate__bounce' />
                    </span>
                    <div>
                      <h6 className='tw-mb-4'>Global Reach</h6>
                      <p className='text-neutral-500 max-w-400-px'>
                        Ship to 150+ destinations worldwide.
                      </p>
                    </div>
                  </div>

                  <div
                    className='d-flex align-items-start tw-gap-26-px animation-item'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={600}
                  >
                    <span className='tw-w-14 tw-h-14 d-flex justify-content-center align-items-center rounded-3 bg-main-50 text-main-600'>
                      <i className='ph-bold ph-lightning tw-text-2xl animate__bounce' />
                    </span>
                    <div>
                      <h6 className='tw-mb-4'>Speed</h6>
                      <p className='text-neutral-500 max-w-400-px'>
                        Fast global delivery via top couriers.
                      </p>
                    </div>
                  </div>

                  <div
                    className='d-flex align-items-start tw-gap-26-px animation-item'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={600}
                  >
                    <span className='tw-w-14 tw-h-14 d-flex justify-content-center align-items-center rounded-3 bg-main-50 text-main-600'>
                      <i className='ph-bold ph-eye tw-text-2xl animate__bounce' />
                    </span>
                    <div>
                      <h6 className='tw-mb-4'>Visibility</h6>
                      <p className='text-neutral-500 max-w-400-px'>
                        Real-time tracking for every shipment.
                      </p>
                    </div>
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

export default AboutOne;
