import { useState } from "react";
import { Link } from "react-router-dom";
import type { FC } from "react";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";

const featureCards = [
  {
    icon: "ph-package",
    title: "Fast & Secure Ship",
    desc: "Send your parcel worldwide with safe, fast, and reliable global shipping.",
    bullets: ["Door-to-door parcel", "Safe handling globally", "Parcel insurance cover", "On-time global delivery"],
    bg: "#e8f4fc",
  },
  {
    icon: "ph-map-pin-line",
    title: "Real-Time Tracking",
    desc: "Track every parcel globally with live updates on app and website.",
    bullets: ["Live parcel tracking", "SMS & email alerts", "Global shipment log", "Monitor each parcel"],
    bg: "#f0e8fc",
  },
  {
    icon: "ph-truck",
    title: "Flexible Delivery",
    desc: "Choose global shipping options that suit your parcel needs anytime.",
    bullets: ["Standard or express", "Pick delivery dates", "Fragile parcel care", "Perishable parcel ship"],
    bg: "#e8fcee",
  },
  {
    icon: "ph-currency-inr",
    title: "Transparent Pricing",
    desc: "Affordable global parcel shipping with no hidden fees or surprises.",
    bullets: ["No hidden charges", "Competitive global rates", "Clear parcel costs", "Pay online easily"],
    bg: "#fdfcee",
  },
  {
    icon: "ph-headset",
    title: "Customer Support",
    desc: "Get help anytime for your global parcel with expert support.",
    bullets: ["24×7 phone support", "Chat & email help", "Customs assistance", "Quick issue resolve"],
    bg: "#fce8f4",
  },
  {
    icon: "ph-shield-check",
    title: "Fragile Parcel Care",
    desc: "Ensure every fragile parcel is shipped safely across the global network.",
    bullets: ["Parcel packaging tips", "Secure cushioning", "Expert parcel handling", "Extra care ensured"],
    bg: "#e8f8fc",
  },
];

const globalShippingPoints = [
  "Secure Parcel Transit",
  "Customizable Shipping",
  "Monitor shipments live",
  "Professional handling",
];

const advantageSteps = [
  { title: "Safe & Protected Parcel", desc: "Every parcel is handled carefully to ensure secure delivery.", icon: "ph-shield-check" },
  { title: "Custom Parcel Options", desc: "Flexible global shipping tailored to your parcel requirements.", icon: "ph-sliders" },
  { title: "Worldwide Parcel Access", desc: "Send parcel to any location with Shyp Byte's global network.", icon: "ph-globe" },
  { title: "Parcel Safety First", desc: "Strict protocols keep every parcel protected in transit.", icon: "ph-lock" },
];

const faqItems = [
  { question: "How can I send a parcel globally with Shyp Byte?", answer: "Book online through our website or contact us. We offer doorstep pickup across India. Share parcel details, get a quote, and we handle packing, customs, and delivery to 220+ countries." },
  { question: "Does Shyp Byte provide tracking for global parcels?", answer: "Yes. Every global parcel gets real-time tracking. You can monitor status on our website or app and receive SMS and email alerts at each stage of delivery." },
  { question: "Are there insurance options for my global parcel?", answer: "Yes. We offer parcel insurance cover for added protection. You can opt for it at the time of booking to safeguard your documents, gifts, or personal items during transit." },
  { question: "What types of parcels can I send internationally?", answer: "You can send documents, gifts, personal parcels, and more. We support standard, express, fragile, and perishable shipping with appropriate handling and documentation." },
  { question: "How long does global parcel delivery take?", answer: "Delivery time depends on destination and service (standard or express). We provide estimated delivery dates at booking and keep you updated with real-time tracking." },
  { question: "What support is available for global parcel shipping?", answer: "Our 24×7 customer support assists with parcel tracking, customs documentation, and shipping guidance for all global parcels." },
];

const IndividualCustomerPage: FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <>
      <TopHeaderOne />
      <HeaderOne />
      <section
        className='banner tw-py-100-px overflow-hidden position-relative'
        style={{ background: "url(/assets/images/individual-customers-bg.jpg) no-repeat center/cover" }}
      >
        <div className='position-absolute top-0 tw-start-0 w-100 h-100 z-0' style={{ backgroundColor: "rgba(6, 52, 61, 0.65)" }} aria-hidden />
        <div className='container max-w-1400-px position-relative z-1'>
          <div className='row gy-4 align-items-center justify-content-center'>
            <div className='col-lg-10 text-center'>
              <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                <span className='d-inline-block'>Individual</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>Customer</span>
              </h1>
              <p className='text-white tw-text-lg fw-medium tw-mt-4 tw-opacity-95'>
                Reliable global shipping for documents, gifts & parcels. Fast delivery, real-time tracking, 24×7 support.
              </p>
              <nav className='tw-mt-4 tw-text-sm text-white' aria-label='Breadcrumb'>
                <Link to='/' className='text-white text-decoration-none hover-underline'>
                  Home
                </Link>
                <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                <span className='tw-opacity-90'>Individual Customer</span>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className='py-120'>
        <div className='container'>
          <div className='row gy-5 align-items-center justify-content-center'>
            <div className='col-lg-8 d-flex align-items-center text-center' data-aos='fade-up' data-aos-duration={600}>
              <div>
                <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
                  <span className='d-inline-block'>Hassle-Free</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>Global</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>Shipping</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>with</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Real-Time</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Tracking</span>
                </h3>
                <p className='text-neutral-500 tw-leading-relaxed tw-mt-6'>
                  With Shyp Byte, you get real-time tracking, flexible delivery options, and personalized support. Our affordable global shipping makes it easy for individuals to send parcels anywhere, without hidden charges or delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-120 section-bg-one'>
        <div className='container'>
          <div className='text-center tw-mb-10'>
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
              Features
            </span>
            <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Everything you need to ship your personal packages</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>safely and affordably worldwide</span>
            </h3>
          </div>
          <div className='row g-4'>
            {featureCards.map((card, index) => (
              <div key={index} className='col-lg-4 col-md-6'>
                <div
                  className='h-100 tw-p-6 tw-rounded-2xl shadow-sm d-flex flex-column'
                  style={{ backgroundColor: card.bg }}
                >
                  <span className='tw-w-12 tw-h-12 rounded-xl bg-white d-flex align-items-center justify-content-center tw-shadow-sm mb-3'>
                    <i className={`ph-bold ${card.icon} text-main-600 tw-text-xl`} />
                  </span>
                  <h5 className='fw-semibold text-heading tw-mb-2'>{card.title}</h5>
                  <p className='text-neutral-500 tw-text-sm tw-mb-4'>{card.desc}</p>
                  <ul className='list-unstyled mb-0 tw-gap-2 d-flex flex-column'>
                    {card.bullets.map((b, i) => (
                      <li key={i} className='d-flex align-items-center tw-gap-2 tw-text-sm'>
                        <i className='ph-bold ph-check-circle text-main-600' />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='py-120'>
        <div className='container'>
          <div className='text-center tw-mb-8'>
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
              Global Shipping Made Easy
            </span>
            <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Secure parcel transit.</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>Professional handling.</span>
            </h3>
          </div>
          <div className='row g-4 justify-content-center'>
            {globalShippingPoints.map((point, i) => (
              <div key={i} className='col-lg-6 col-md-6'>
                <div className='tw-p-5 tw-rounded-2xl bg-white shadow-sm border border-neutral-200 h-100 d-flex align-items-center tw-gap-3'>
                  <span className='tw-w-10 tw-h-10 rounded-circle bg-main-50 text-main-600 d-flex align-items-center justify-content-center flex-shrink-0'>
                    <i className='ph-bold ph-check tw-text-lg' />
                  </span>
                  <span className='fw-semibold text-heading'>{point}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='py-120 section-bg-one'>
        <div className='container'>
          <div className='text-center tw-mb-10'>
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
              The Shyp Byte Advantage
            </span>
            <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Comprehensive shipping solutions</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>designed for individual customers</span>
            </h3>
          </div>
          <div className='row g-4 justify-content-center'>
            {advantageSteps.map((step, i) => (
              <div key={i} className='col-lg-4'>
                <div className='d-flex flex-column tw-gap-3 tw-p-5 tw-rounded-2xl border border-neutral-200 bg-white shadow-sm h-100 text-center'>
                  <span className='tw-w-14 tw-h-14 rounded-xl bg-main-50 text-main-600 d-flex align-items-center justify-content-center mx-auto'>
                    <i className={`ph-bold ${step.icon} tw-text-2xl`} />
                  </span>
                  <h5 className='fw-semibold text-heading tw-mb-0'>{step.title}</h5>
                  <p className='text-neutral-500 tw-text-sm mb-0'>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='faq py-120 position-relative z-1 overflow-hidden'>
        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-4'>
              <div>
                <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
                  FAQ
                </span>
                <h3 className='splitTextStyleOne fw-light tw-leading-104'>
                  <span className='d-inline-block'>Individual</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Shipping</span>
                </h3>
                <p className='splitTextStyleOne text-neutral-500 tw-mt-6 max-w-350-px fw-medium'>
                  Common questions about global parcel shipping for individuals.
                </p>
                <div className='tw-mt-8'>
                  <Link
                    to='/contact'
                    className='hover-black hover--translate-y-1 btn btn-main hover-style-one button--stroke tw-gap-5 tw-px-8 rounded-pill tw-py-6 fw-semibold'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='ps-xl-5'>
                <div className='accordion common-accordion accordion-border-left'>
                  {faqItems.map((item, index) => (
                    <div
                      key={index}
                      className='accordion-item tw-py-6 tw-px-5 tw-rounded-xl bg-white common-shadow-four border-0 mb-3 position-relative'
                    >
                      <h5 className='accordion-header'>
                        <button
                          className={`accordion-button shadow-none px-0 bg-transparent h5 fw-semibold d-flex align-items-center justify-content-between w-100 tw-pe-12 ${faqOpen === index ? "" : "collapsed"}`}
                          type='button'
                          onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                          aria-expanded={faqOpen === index}
                        >
                          <span className='text-start'>{item.question}</span>
                          <span className='tw-w-8 tw-h-8 rounded-circle border border-neutral-200 d-flex align-items-center justify-content-center flex-shrink-0 text-main-600'>
                            <i className={`ph-bold tw-text-lg ${faqOpen === index ? "ph-minus" : "ph-plus"}`} />
                          </span>
                        </button>
                      </h5>
                      {faqOpen === index && (
                        <div className='accordion-collapse show'>
                          <div className='accordion-body p-0 tw-mt-4'>
                            <p className='text-neutral-500 tw-leading-relaxed mb-0'>{item.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBannerOne />
      <FooterOne />
    </>
  );
};

export default IndividualCustomerPage;
