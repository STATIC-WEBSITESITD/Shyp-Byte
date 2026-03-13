import { useState } from "react";
import { Link } from "react-router-dom";
import type { FC } from "react";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";

const solutionsCards = [
  {
    icon: "ph-storefront",
    title: "Marketplace Integrations",
    desc: "Connect ecommerce business with top marketplaces in one place",
    bullets: ["Amazon, Flipkart sync", "Shopify, Etsy linked", "Manage orders easily", "Track shipments live"],
    bg: "#e8f4fc",
  },
  {
    icon: "ph-clipboard-text",
    title: "Seamless Order Management",
    desc: "One dashboard for marketplace sellers to simplify ecommerce tasks",
    bullets: ["Print shipping labels", "Reduce order errors", "Faster cross-border flow", "Easy ecommerce growth"],
    bg: "#f0e8fc",
  },
  {
    icon: "ph-truck",
    title: "Doorstep Pickup & Delivery",
    desc: "Global logistics support for ecommerce marketplace businesses",
    bullets: ["Pickup from doorstep", "Ship to 200+ nations", "Customs cleared fast", "Full documentation done"],
    bg: "#e8fcee",
  },
  {
    icon: "ph-currency-inr",
    title: "Affordable Shipping Rates",
    desc: "Cost-effective courier services for marketplace ecommerce sellers",
    bullets: ["Transparent pricing", "No hidden charges", "Save business profit", "Lower logistics cost"],
    bg: "#fdfcee",
  },
  {
    icon: "ph-map-pin-line",
    title: "Real-Time Tracking",
    desc: "Tracking solutions for ecommerce business and marketplace growth",
    bullets: ["Live parcel updates", "Customer trust builds", "Marketplace reputation", "Repeat order growth"],
    bg: "#fce8f4",
  },
  {
    icon: "ph-globe-stand",
    title: "Marketplace Edge",
    desc: "Reliable global courier partner for marketplace ecommerce business",
    bullets: ["Fast safe deliveries", "24x7 customer care", "Global marketplace reach", "Complete logistics help"],
    bg: "#e8f8fc",
  },
];

const expansionPoints = [
  "Wider marketplace reach",
  "Hassle-free onboarding",
  "Scalable business model",
  "Growth-focused shipping",
];

const advantageSteps = [
  { title: "Strong global reach", desc: "Shyp Byte helps ecommerce business connect with global marketplaces.", icon: "ph-rocket-launch" },
  { title: "Simple compliance", desc: "Ecommerce business shipping becomes easier with marketplace support.", icon: "ph-shield-check" },
  { title: "Smarter trade flow", desc: "Marketplace solutions simplify ecommerce trade and boost business.", icon: "ph-flow-arrow" },
  { title: "Business worldwide", desc: "Grow your ecommerce business and succeed in every marketplace.", icon: "ph-globe" },
];

const faqItems = [
  { question: "Can Shyp Byte handle international shipping for my ecommerce business?", answer: "Yes. Shyp Byte offers complete international courier solutions for ecommerce businesses. We integrate with Amazon, Flipkart, Shopify, and Etsy, with doorstep pickup, real-time tracking, and delivery to 200+ countries." },
  { question: "Do you provide doorstep pickup for international shipments?", answer: "Yes. We pick up parcels from your doorstep, warehouse, or office across India. No need to visit a courier office. Schedule a pickup through our platform or contact our team." },
  { question: "Which marketplaces can I integrate with Shyp Byte for international shipments?", answer: "You can integrate with Amazon, Flipkart, Shopify, Etsy, and other major marketplaces. Our platform connects your ecommerce business in one place for order management and shipping." },
  { question: "How much does international shipping cost for ecommerce parcels?", answer: "Pricing is based on weight, dimensions, and destination. We offer transparent rates with no hidden charges. Contact us or use our platform for a quote tailored to your ecommerce volume." },
  { question: "Can I track international shipments in real time?", answer: "Yes. Every parcel shipped internationally with Shyp Byte comes with real-time tracking, giving full visibility to both you and your customers." },
  { question: "Why should my ecommerce business choose Shyp Byte for international shipping?", answer: "Shyp Byte is a complete international courier for ecommerce businesses. With fast delivery, reliable handling, 24x7 customer support, and global logistics, marketplace sellers can scale smoothly worldwide." },
];

const ECommerceBusinessPage: FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <>
      <TopHeaderOne />
      <HeaderOne />
      <section
        className='banner tw-py-100-px overflow-hidden position-relative'
        style={{ background: "url(/assets/images/ecommerce-business-bg.jpg) no-repeat center/cover" }}
      >
        <div className='position-absolute top-0 tw-start-0 w-100 h-100 z-0' style={{ backgroundColor: "rgba(6, 52, 61, 0.65)" }} aria-hidden />
        <div className='container max-w-1400-px position-relative z-1'>
          <div className='row gy-4 align-items-center justify-content-center'>
            <div className='col-lg-10 text-center'>
              <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                <span className='d-inline-block'>E-Commerce</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>Business</span>
              </h1>
              <p className='text-white tw-text-lg fw-medium tw-mt-4 tw-opacity-95'>
                Integrate with Amazon, Flipkart, Shopify & Etsy. Fast delivery, doorstep pickup, real-time tracking.
              </p>
              <nav className='tw-mt-4 tw-text-sm text-white' aria-label='Breadcrumb'>
                <Link to='/' className='text-white text-decoration-none hover-underline'>
                  Home
                </Link>
                <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                <span className='tw-opacity-90'>E-Commerce Business</span>
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
                  <span className='d-inline-block'>Packages </span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>In</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>Motion</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Business</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>In</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Growth</span>
                </h3>
                <p className='text-neutral-500 tw-leading-relaxed tw-mt-6'>
                Shyp Byte offers trusted international courier solutions for ecommerce businesses and marketplace sellers, helping them ship faster, stress-free, and grow globally.
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
              Complete Ecommerce Shipping Solutions
            </span>
            <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Everything you need to ship internationally</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>and grow your online business</span>
            </h3>
          </div>
          <div className='row g-4'>
            {solutionsCards.map((card, index) => (
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
      {/* <section className='py-120'>
        <div className='container'>
          <div className='row gy-4 justify-content-center'>
            <div className='col-lg-8 text-center'>
              <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
                Why Choose Shyp Byte
              </span>
              <p className='text-neutral-500 tw-leading-relaxed tw-text-lg mb-0'>
                Shyp Byte is a complete international courier for ecommerce businesses. With fast delivery, reliable handling, customer support, and global logistics, marketplace sellers can scale smoothly worldwide.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className='py-120'>
        <div className='container'>
          <div className='text-center tw-mb-8'>
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
            Ecommerce Expansion Made Simple
            </span>
            <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Automated D2C order tracking.</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>Dashboard for shipments.</span>
            </h3>
          </div>
          <div className='row g-4 justify-content-center'>
            {expansionPoints.map((point, i) => (
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
              Global Marketplace Advantage
            </span>
            <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Unlock the power of global marketplaces</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>with Shyp Byte's comprehensive solutions</span>
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
                  <span className='d-inline-block'>E-Commerce</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Questions</span>
                </h3>
                <p className='splitTextStyleOne text-neutral-500 tw-mt-6 max-w-350-px fw-medium'>
                  Common questions about ecommerce shipping and marketplace integration.
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

export default ECommerceBusinessPage;
