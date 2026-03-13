import { useState } from "react";
import { Link } from "react-router-dom";
import type { FC } from "react";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";

const featureCards = [
  {
    icon: "ph-map-pin-line",
    title: "Shipment Tracking",
    desc: "Monitor every package with GPS precision and instant notifications.",
    bullets: ["Live location updates", "Delivery confirmations", "Digital proof of delivery", "Automated status alerts"],
    bg: "#e8f4fc",
  },
  {
    icon: "ph-calendar-check",
    title: "Flexible Scheduling",
    desc: "Book pickups instantly or schedule them according to your workflow.",
    bullets: ["Same-hour collection", "Recurring pickup slots", "Multiple location support", "Calendar integration"],
    bg: "#f0e8fc",
  },
  {
    icon: "ph-user-circle",
    title: "Account Management",
    desc: "Get personalized support from logistics experts who understand business.",
    bullets: ["Priority customer service", "Custom shipping solutions", "Volume-based discounts", "Performance analytics"],
    bg: "#e8fcee",
  },
  {
    icon: "ph-package",
    title: "Package Handling",
    desc: "Every shipment protected with insurance and careful handling protocols.",
    bullets: ["Temperature-controlled options", "Fragile item specialists", "Signature requirements", "Package photo verification"],
    bg: "#fdfcee",
  },
  {
    icon: "ph-truck",
    title: "Multi-Carrier Network",
    desc: "Access the best rates and fastest routes through our carrier partnerships.",
    bullets: ["Automatic rate comparison", "Carrier performance metrics", "Backup delivery options", "Network redundancy"],
    bg: "#fce8f4",
  },
  {
    icon: "ph-code",
    title: "API Integration",
    desc: "Connect Shyp Byte directly into your existing business management systems.",
    bullets: ["Full API access", "Secure notifications", "Custom integrations", "Technical documentation"],
    bg: "#e8f8fc",
  },
];

const whyChooseItems = [
  { label: "Cost-Effective Pricing", icon: "ph-currency-inr" },
  { label: "Nationwide Coverage", icon: "ph-map-trifold" },
  { label: "24/7 Support Access", icon: "ph-headset" },
  { label: "Eco-Friendly Option", icon: "ph-leaf" },
];

const benefitsSteps = [
  { title: "Scalable Solutions", desc: "B2B courier service that adapts to your shipping volume and business needs.", icon: "ph-trend-up" },
  { title: "Priority Support", desc: "Door to door delivery with dedicated support for smooth operations.", icon: "ph-headset" },
  { title: "Analytics Tools", desc: "Optimize costs and efficiency with insights from our B2B courier service.", icon: "ph-chart-bar" },
  { title: "Flexible Billing", desc: "Same day delivery and invoicing options tailored to your business cycle.", icon: "ph-credit-card" },
];

const faqItems = [
  { question: "What is B2B courier service with Shyp Byte?", answer: "Shyp Byte B2B courier service is designed for businesses shipping products or documents in volume. We offer door to door delivery, real-time tracking, dedicated account management, volume discounts, and integration with your systems for high-volume operations." },
  { question: "Can I use door to door delivery for all shipments?", answer: "Yes. We provide door to door delivery for B2B shipments—pickup from your location and delivery to your recipient's address. You can schedule same-hour or recurring pickups and track every parcel in real time." },
  { question: "Does Shyp Byte offer same day delivery?", answer: "Yes. We offer same day delivery options where available. Our flexible scheduling and multi-carrier network help meet urgent business deadlines. Contact us or your account manager for same day and express options." },
  { question: "How can I track my shipment?", answer: "Track shipments via our platform with live location updates, delivery confirmations, and digital proof of delivery. You get automated status alerts and full visibility from pickup to delivery." },
  { question: "Are there flexible payment options for businesses?", answer: "Yes. We offer flexible billing and invoicing tailored to your business cycle, plus volume-based discounts. Our account management team can outline payment terms and custom solutions for your operations." },
  { question: "What support does Shyp Byte provide for B2B shipping?", answer: "Businesses receive priority account management, dedicated customer support, and personalized logistics solutions to ensure smooth operations." },
];

const B2BShippersPage: FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <>
      <TopHeaderOne />
      <HeaderOne />
      <section
        className='banner tw-py-100-px overflow-hidden position-relative'
        style={{ background: "url(/assets/images/b2b-shippers-bg.jpg) no-repeat center/cover" }}
      >
        <div className='position-absolute top-0 tw-start-0 w-100 h-100 z-0' style={{ backgroundColor: "rgba(6, 52, 61, 0.65)" }} aria-hidden />
        <div className='container max-w-1400-px position-relative z-1'>
          <div className='row gy-4 align-items-center justify-content-center'>
            <div className='col-lg-10 text-center'>
              <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                <span className='d-inline-block'>B2B</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>Shippers</span>
              </h1>
              <p className='text-white tw-text-lg fw-medium tw-mt-4 tw-opacity-95'>
                Reliable B2B courier for products & documents. Fast, safe delivery to 200+ destinations.
              </p>
              <nav className='tw-mt-4 tw-text-sm text-white' aria-label='Breadcrumb'>
                <Link to='/' className='text-white text-decoration-none hover-underline'>
                  Home
                </Link>
                <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                <span className='tw-opacity-90'>B2B Shippers</span>
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
                  <span className='d-inline-block'>Quick</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>and</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>Convenient</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Delivery</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Solutions</span>
                </h3>
                <p className='text-neutral-500 tw-leading-relaxed tw-mt-6'>
                  Our door to door delivery and same day delivery services make shipping easy and fast. With real-time tracking and dedicated support, businesses can send parcels confidently, on time, every time.
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
              <span className='d-inline-block'>Comprehensive shipping and logistics solutions</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>designed for high-volume B2B operations</span>
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
              Why Businesses Choose Shyp Byte
            </span>
          </div>
          <div className='row g-4 justify-content-center'>
            {whyChooseItems.map((item, i) => (
              <div key={i} className='col-lg-6 col-md-6'>
                <div className='tw-p-5 tw-rounded-2xl bg-white shadow-sm border border-neutral-200 h-100 d-flex align-items-center tw-gap-3'>
                  <span className='tw-w-10 tw-h-10 rounded-circle bg-main-50 text-main-600 d-flex align-items-center justify-content-center flex-shrink-0'>
                    <i className={`ph-bold ${item.icon} tw-text-lg`} />
                  </span>
                  <span className='fw-semibold text-heading'>{item.label}</span>
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
              Benefits for Growth
            </span>
            <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Comprehensive B2B shipping solutions designed to</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>support your business growth</span>
            </h3>
          </div>
          <div className='row g-4 justify-content-center'>
            {benefitsSteps.map((step, i) => (
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
                  <span className='d-inline-block'>B2B Shippers</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Logistics</span>
                </h3>
                <p className='splitTextStyleOne text-neutral-500 tw-mt-6 max-w-350-px fw-medium'>
                  Common questions about B2B courier service and enterprise shipping.
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

export default B2BShippersPage;
