import type { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BannerOne: FC = () => {

  const [activeTab, setActiveTab] = useState("Daily");
  interface TabItem {
    id: string;
    label: string;
    amount: number;
  }

  const tabs: TabItem[] = [
    { id: "Daily", label: "Daily", amount: 4820 },
    { id: "Weekly", label: "Weekly", amount: 24450 },
    { id: "Monthly", label: "Monthly", amount: 98500 },
  ];

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
              Shypbyte transforms international shipping and cross-border ecommerce logistics into a powerful growth engine — helping brands ship from India to customers worldwide without operational complexity.
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
                <div className='d-inline-flex align-items-center tw-gap-1 bg-green tw-py-05 tw-px-3 rounded-pill position-absolute top-0 tw-end-0 tw--mt-12-px tw--me-12-px'>
                  <span className='text-white fw-bold tw-text-sm'>4.9</span>
                  <span className='text-white d-flex'>
                    <img
                      src='/assets/images/icons/star.svg'
                      alt=''
                    />
                  </span>
                </div>
                <img
                  src='/assets/images/icons/ratings.svg'
                  alt=''
                />
                <div className='tw-mt-3 d-flex align-items-center justify-content-between max-w-154-px'>
                  <span className='tw-text-lg text-heading fw-semibold'>
                    Trust pilot
                  </span>
                  <img
                    src='/assets/images/icons/verified-icon.svg'
                    alt=''
                  />
                </div>
              </div>
              <div
                className='d-none d-lg-block bg-main-600 tw-p-12 tw-pe-6 d-inline-block tw-rounded-xl clip-path-one position-absolute bottom-0 tw-end-0 z-1 tw--me-70-px tw-mb-205'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={900}
              >
                <h2 className='text-white counter'>8+</h2>
                <span className='text-white'>Years in Global Shipping</span>
              </div>
              <div className='d-none d-lg-flex bg-white-7 tw-py-6 tw-px-7 tw-rounded-2xl border border-white bg-blur-20 position-absolute bottom-0 tw-start-0 z-1 align-items-center tw-gap-8 common-shadow-two' data-aos='fade-up' data-aos-anchor-placement='top-bottom' data-aos-duration={800}>
                <img
                  src='/assets/images/shapes/revenue-shape.png'
                  alt=''
                  className='flower animate__wobble__two position-absolute tw-end-100 bottom-100 tw--m-24-px z-n1'
                />
                <div>
                  <div className='tab-content'>
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        className={`tab-pane fade ${
                          activeTab === tab.id ? "show active" : ""
                        }`}
                      >
                        <span className='tw-text-sm text-neutral-500 tw-mb-1 text-uppercase'>
                          Shipments delivered
                        </span>
                        <h5 className='tw-mb-6 counter'>
                          {tab.amount >= 1000
                            ? `${(tab.amount / 1000).toFixed(1)}K`
                            : tab.amount}
                          +
                        </h5>
                      </div>
                    ))}
                  </div>
                  <ul className='nav nav-pills common-tab d-flex align-items-center tw-gap-205'>
                    {tabs.map((tab) => (
                      <li className='nav-item' key={tab.id}>
                        <button
                          className={`nav-link bg-transparent hover--translate-y-1 tw-transition-all tw-duration-300 text-neutral-500 tw-text-sm fw-medium p-0 ${
                            activeTab === tab.id ? "active" : ""
                          }`}
                          onClick={() => setActiveTab(tab.id)}
                          type='button'
                        >
                          {tab.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div>
                  <img
                    src='/assets/images/revenue-chart.png'
                    alt=''
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
