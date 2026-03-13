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
    title: "Worldwide Parcel Delivery",
    desc: "Cross-border shipping solutions for D2C brands globally",
    bullets: ["Direct delivery for D2C parcels", "Cross-border logistics handled", "Customs and documentation done", "Global shipping made simple"],
    bg: "#e8f4fc",
  },
  {
    icon: "ph-storefront",
    title: "Online Store Integration",
    desc: "Manage D2C international courier service from one dashboard",
    bullets: ["Integrates with D2C websites", "Supports major marketplaces", "Track cross-border shipments", "Simplify returns process"],
    bg: "#f0e8fc",
  },
  {
    icon: "ph-currency-inr",
    title: "Transparent Global Pricing",
    desc: "Affordable international courier rates for D2C brands",
    bullets: ["No hidden shipping charges", "Cost effective courier service", "Profitable cross-border rates", "Clear pricing for shipments"],
    bg: "#e8fcee",
  },
  {
    icon: "ph-truck",
    title: "Faster Deliveries",
    desc: "Timely cross-border shipments for loyal D2C customers",
    bullets: ["Quick international delivery", "Secure handling for parcels", "Encourage repeat orders growth", "Improve brand reputation"],
    bg: "#fdfcee",
  },
  {
    icon: "ph-headset",
    title: "Dedicated Support",
    desc: "Expert assistance for D2C brands with global shipments",
    bullets: ["Bulk shipment management", "Seasonal campaign support", "Custom cross-border solutions", "Smooth logistics operations"],
    bg: "#fce8f4",
  },
  {
    icon: "ph-chart-line-up",
    title: "Analytics & Reporting",
    desc: "Track shipments and optimize your D2C shipping easily.",
    bullets: ["Monitor global shipments", "Track delivery performance", "Gain insights for efficiency", "Optimize D2C logistics"],
    bg: "#e8f8fc",
  },
];

const smartShippingPoints = [
  "Automated D2C order tracking",
  "Dashboard for shipments",
  "Easy courier label printing",
  "Seamless cross-border workflow",
];

const solutionSteps = [
  { title: "Scale Operations", desc: "Manage bulk shipments and expand your D2C business globally.", icon: "ph-trend-up" },
  { title: "Shipping Insights", desc: "Analyze D2C shipments to improve international courier efficiency.", icon: "ph-chart-bar" },
  { title: "Customer Experience", desc: "Deliver timely updates and a seamless shipping journey.", icon: "ph-heart" },
];

const faqItems = [
  { question: "Can Shyp Byte handle international shipping for my D2C brand?", answer: "Yes. Shyp Byte offers end-to-end international courier solutions for D2C brands. We manage logistics, customs, documentation, and delivery to 220+ countries so you can focus on growing your brand." },
  { question: "Do you offer doorstep pickup for cross-border deliveries?", answer: "Yes. We pick up D2C parcels from your warehouse, office, or doorstep across India. Schedule pickups through our platform or contact our team for bulk and recurring collections." },
  { question: "Which platforms can I integrate with for D2C international shipping?", answer: "You can integrate your D2C website, Shopify, WooCommerce, and major marketplaces with Shyp Byte. Our dashboard gives you one place to manage orders, labels, and cross-border shipments." },
  { question: "How much does international courier service cost for D2C brands?", answer: "Rates depend on weight, dimensions, and destination. We offer transparent pricing with no hidden charges. Contact us for a quote or volume-based rates for D2C brands." },
  { question: "Can I track my cross-border shipments in real-time?", answer: "Yes. Every cross-border shipment with Shyp Byte includes real-time tracking. You and your customers can monitor delivery status from pickup to destination." },
  { question: "Why should my D2C brand choose Shyp Byte for international shipping?", answer: "Shyp Byte is a trusted international courier service for D2C brands. We handle cross-border shipping, customs, documentation, and dedicated support for smooth global deliveries." },
];

const D2CBrandPage: FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <>
      <TopHeaderOne />
      <HeaderOne />
      {/* Hero */}
      <section
        className='banner tw-py-100-px overflow-hidden position-relative'
        style={{ background: "url(/assets/images/d2c-brand-bg.jpg) no-repeat center/cover" }}
      >
        <div className='position-absolute top-0 tw-start-0 w-100 h-100 z-0' style={{ backgroundColor: "rgba(6, 52, 61, 0.65)" }} aria-hidden />
        <div className='container max-w-1400-px position-relative z-1'>
          <div className='row gy-4 align-items-center justify-content-center'>
            <div className='col-lg-10 text-center'>
              <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                <span className='d-inline-block'>D2C</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>Brand</span>
              </h1>
              <p className='text-white tw-text-lg fw-medium tw-mt-4 tw-opacity-95'>
                Ship products worldwide with ease. We handle logistics, customs & documentation so you can focus on growth.
              </p>
              <nav className='tw-mt-4 tw-text-sm text-white' aria-label='Breadcrumb'>
                <Link to='/' className='text-white text-decoration-none hover-underline'>
                  Home
                </Link>
                <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                <span className='tw-opacity-90'>D2C Brand</span>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className='py-120'>
        <div className='container'>
          <div className='row gy-5 align-items-center justify-content-center'>
            <div className='col-lg-8 d-flex align-items-center text-center' data-aos='fade-up' data-aos-duration={600}
            >
              <div>
                <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
                  <span className='d-inline-block'>Shipping</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>That</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>Reflects</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Your</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Brand</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Globally</span>
                </h3>
                <p className='text-neutral-500 tw-leading-relaxed tw-mt-6'>
                  Deliver a superior experience to your global customers. Shyp Byte supports D2C brands with efficient cross-border shipping, ensuring every package reaches its destination safely and strengthens your brand reputation.
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
              <span className='d-inline-block'>Comprehensive solutions for D2C brands</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>to succeed in global markets</span>
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
              Smart Shipping Technology
            </span>
            <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Automated D2C order tracking.</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>Dashboard for shipments.</span>
            </h3>
          </div>
          <div className='row g-4 justify-content-center'>
            {smartShippingPoints.map((point, i) => (
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
              Optimized D2C Shipping Solutions
            </span>
            <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Comprehensive solutions designed for D2C brands</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>to succeed in global markets</span>
            </h3>
          </div>
          <div className='row g-4 justify-content-center'>
            {solutionSteps.map((step, i) => (
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
                  <span className='d-inline-block'>D2C Brand</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Questions</span>
                </h3>
                <p className='splitTextStyleOne text-neutral-500 tw-mt-6 max-w-350-px fw-medium'>
                  Common questions about D2C international shipping and cross-border delivery.
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

export default D2CBrandPage;
