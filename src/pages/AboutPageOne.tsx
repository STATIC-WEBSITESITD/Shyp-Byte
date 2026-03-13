import { useEffect, useRef, useState, type FC } from "react";
import { Link } from "react-router-dom";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";

const faqItems = [
  {
    question: "When was Shyp Byte founded?",
    answer:
      "Shyp Byte was founded with a mission to make international shipping accessible to everyone. We combine modern technology with a reliable global courier network to simplify cross-border logistics from India.",
  },
  {
    question: "What makes Shyp Byte different from other shipping providers?",
    answer:
      "We offer single-point control with one expert team managing everything internally. This means faster processing, complete accountability, and no third-party delays. Our integrated approach gives you full transparency throughout the shipping process.",
  },
  {
    question: "Who does Shyp Byte serve?",
    answer:
      "We support ecommerce brands, exporters, businesses, and individuals who want to ship products across borders. Whether you're a small seller or a growing brand, we help you reach customers worldwide with confidence.",
  },
  {
    question: "What are Shyp Byte's core values?",
    answer:
      "Reliability, transparency, customer-first approach, and continuous innovation. We ship with integrity and build trust through every delivery. Our mission is to make global shipping accessible, efficient, and predictable.",
  },
  {
    question: "How can I get in touch with the Shyp Byte team?",
    answer:
      "Visit our Contact page to reach us via email, phone, or our enquiry form. Our team typically responds within 24 hours. You can also track your shipments on our Tracking page.",
  },
];

const AboutPageOne: FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const stackSectionRef = useRef<HTMLElement>(null);
  const [isSectionInView, setIsSectionInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px" }
    );
    if (stackSectionRef.current) observer.observe(stackSectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <TopHeaderOne />
      <HeaderOne />
      <section
        className='banner tw-py-100-px overflow-hidden position-relative'
        style={{
          background: "url(/assets/images/about-bg.jpg) no-repeat center/cover",
        }}
      >
        <div
          className='position-absolute top-0 tw-start-0 w-100 h-100 z-0'
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          aria-hidden
        />
        <div className='container max-w-1400-px position-relative z-1'>
          <div className='row gy-4 align-items-center justify-content-center'>
            <div className='col-lg-12'>
              <div className='text-center'>
                <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                  <span className='d-inline-block'>About</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>Us</span>
                </h1>
                <p className='text-white tw-text-lg fw-medium tw-mt-4 splitTextStyleOne tw-opacity-90'>
                  Building the Future of Global Logistics
                </p>
                <nav className='tw-mt-4 tw-text-sm text-white' aria-label='Breadcrumb'>
                  <Link to='/' className='text-white text-decoration-none hover-underline'>
                    Home
                  </Link>
                  <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                  <span className='tw-opacity-90'>About Us</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-120'>
        <div className='container'>
          <div className='row gy-5 align-items-center justify-content-center'>
            {/* <div className='col-lg-6'>
              <div
                className='tw-rounded-3xl overflow-hidden h-100 tw-min-h-400-px'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <img
                  src='/assets/images/about.jpg'
                  alt='Our Story'
                  className='w-100 h-100 object-fit-cover'
                />
              </div>
            </div> */}
            <div
              className='col-lg-12 d-flex align-items-center text-center'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div>
                {/* <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
                  Our Story
                </span> */}
                <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
                  <span className='d-inline-block'>Our</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Story</span>
                </h3>
                <p className='text-neutral-500 tw-leading-relaxed tw-mt-6'>
                  Shypbyte was founded with a simple belief that shipping should never limit growth. By combining modern technology with a reliable global courier network, we make international shipping from India faster, clearer, and easier to manage.
                  Today, Shypbyte supports ecommerce brands, exporters, businesses, and individuals who want to move products across borders with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-120 section-bg-one'>
        <div className='container'>
          <div className='text-center tw-mb-10' data-aos='fade-up' data-aos-duration={600}>
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
              Our Purpose
            </span>
            <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Mission,</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block'>Vision</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block'>&</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>Values</span>
            </h3>
          </div>
          <div className='row flip-boxes justify-content-center gy-4'>
            <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-duration={600}>
              <div className='flip-box'>
                <div
                  className='flip-front'
                  style={{ backgroundImage: "url(/assets/images/mission.jpg)" }}
                >
                  <div className='flip-content'>
                    <i className='ph-bold ph-target tw-text-4xl text-white tw-mb-3' />
                    <span className='flip-title'>Mission</span>
                  </div>
                </div>
                <div className='flip-back'>
                  <div className='flip-content'>
                    <h5 className='text-white fw-bold tw-mb-3'>Our Mission</h5>
                    <p className='text-white tw-text-sm tw-opacity-90 mb-0'>
                      To make global shipping accessible, efficient, and predictable by combining smart logistics technology with trusted courier partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-duration={700}>
              <div className='flip-box'>
                <div
                  className='flip-front'
                  style={{ backgroundImage: "url(/assets/images/vision.jpg)" }}
                >
                  <div className='flip-content'>
                    <i className='ph-bold ph-eye tw-text-4xl text-white tw-mb-3' />
                    <span className='flip-title'>Vision</span>
                  </div>
                </div>
                <div className='flip-back'>
                  <div className='flip-content'>
                    <h5 className='text-white fw-bold tw-mb-3'>Our Vision</h5>
                    <p className='text-white tw-text-sm tw-opacity-90 mb-0'>
                      To build the logistics infrastructure that powers the next generation of global businesses — where any brand can reach customers anywhere through simple, reliable international shipping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-duration={800}>
              <div className='flip-box'>
                <div
                  className='flip-front'
                  style={{ backgroundImage: "url(/assets/images/values.jpg)" }}
                >
                  <div className='flip-content'>
                    <i className='ph-bold ph-heart tw-text-4xl text-white tw-mb-3' />
                    <span className='flip-title'>Values</span>
                  </div>
                </div>
                <div className='flip-back'>
                  <div className='flip-content'>
                    <h5 className='text-white fw-bold tw-mb-3'>Our Values</h5>
                    <p className='text-white tw-text-sm tw-opacity-90 mb-0'>
                      Reliability, transparency, customer-first approach, and continuous innovation. We ship with integrity and build trust through every delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={stackSectionRef}
        className={`py-120 stack-section-offset ${isSectionInView ? "stack-section-in-view" : ""}`}
      >
        <div className='container'>
          <div className='row gy-5 align-items-start'>
            <div className='col-lg-6 position-sticky' style={{ top: '7.5rem' }} data-aos='fade-right' data-aos-duration={600}>
              <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
                Our Advantage
              </span>
              <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
                <span className='d-inline-block'>One Team,</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block fw-semibold text-main-600'>Complete Control</span>
              </h3>
              <p className='text-neutral-500 tw-leading-relaxed tw-mt-6'>
                Everything you need for international shipping success, managed internally by one expert team.
              </p>
              {/* <img src='/assets/images/about.jpg' alt='Steps of Medical Service' className='w-100 h-100 object-fit-cover' /> */}
              <div className='tw-rounded-3xl overflow-hidden h-100 tw-min-h-400-px mt-4'>
                <img
                  src='/assets/images/about2.jpg'
                  alt='Customs clearance workflow'
                  className='w-100 h-100 object-fit-cover'
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='cards_list_about' data-aos='fade-left' data-aos-duration={600}>
                {[
                  {
                    num: "1",
                    title: "Single Point of Control",
                    desc: "Manage all your shipping operations from one centralized platform.",
                    icon: "ph-squares-four",
                    bg: "#fdfcee",
                  },
                  {
                    num: "2",
                    title: "Faster Processing",
                    desc: "Accelerated shipping processes with optimized workflows.",
                    icon: "ph-lightning",
                    bg: "#e8f4fc",
                  },
                  {
                    num: "3",
                    title: "Complete Accountability",
                    desc: "Full transparency and responsibility throughout the shipping process.",
                    icon: "ph-clipboard-text",
                    bg: "#e8fcee",
                  },
                  {
                    num: "4",
                    title: "No Third-Party Delays",
                    desc: "Direct control eliminates external delays and complications.",
                    icon: "ph-shield-check",
                    bg: "#f0e8fc",
                  },
                ].map((item, index) => (
                  <div key={index} className='card_item_about'>
                    <div className='card_box card_box_about' style={{ backgroundColor: item.bg }}>
                      <div className='card_content card_content_about'>
                        <div className='card_icon_box'>
                          <i className={`ph-bold ${item.icon} text-main-600`} />
                        </div>
                        <h5 className='card_heading_about'>
                          {item.num}. {item.title}
                        </h5>
                        <p className='card_desc_about'>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className='cards_list_spacer_about' aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-120 section-bg-one'>
        <div className='container'>
          <div className='about-feature-card about-feature-card--customs'>
            <div className='row g-0 align-items-stretch'>
              <div className='col-lg-6 tw-p-8 tw-pe-lg-6' data-aos='fade-right' data-aos-duration={600}>
                <h2 className='tw-text-2xl fw-bold text-heading tw-mb-3'>Customs Clearance</h2>
                <p className='text-neutral-500 tw-mb-6 tw-leading-relaxed'>
                  Dedicated customs expertise ensuring zero delays in your international shipping process.
                </p>
                <div className='d-flex flex-column tw-gap-2'>
                  {[
                    { icon: "🏛️", text: "Licensed customs brokers" },
                    { icon: "📄", text: "Pre-clearance documentation preparation" },
                    { icon: "💰", text: "Automated duty calculations" },
                    { icon: "🤝", text: "Direct customs authority liaison" },
                  ].map((item, i) => (
                    <div key={i} className='about-feature-item'>
                      <span className='feature-icon'>{item.icon}</span>
                      <span className='feature-text'>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-lg-6 tw-p-8 tw-ps-lg-4' data-aos='fade-left' data-aos-duration={600}>
                <div className='tw-rounded-3xl overflow-hidden h-100 tw-min-h-400-px'>
                  <img
                    src='/assets/images/customs-clearance.jpg'
                    alt='Customs clearance workflow'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-120'>
        <div className='container'>
          <div className='about-feature-card about-feature-card--kyc about-kyc'>
            <div className='row g-0 align-items-stretch'>
              <div className='col-lg-6 tw-p-8 tw-pe-lg-4 order-lg-1' data-aos='fade-right' data-aos-duration={600}>
                <div className='tw-rounded-3xl overflow-hidden h-100 tw-min-h-400-px'>
                  <img
                    src='/assets/images/kyc.jpg'
                    alt='KYC compliance process'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
              </div>
              <div className='col-lg-6 tw-p-8 tw-ps-lg-6 order-lg-2' data-aos='fade-left' data-aos-duration={600}>
                <h2 className='tw-text-2xl fw-bold text-heading tw-mb-3'>KYC Compliance</h2>
                <p className='text-neutral-500 tw-mb-6 tw-leading-relaxed'>
                  In-house verification streamlining your worldwide shipping transactions seamlessly.
                </p>
                <div className='d-flex flex-column tw-gap-2'>
                  {[
                    { icon: "🔐", text: "Digital identity verification" },
                    { icon: "🤖", text: "Automated document authentication" },
                    { icon: "🛡️", text: "Secure encrypted storage" },
                    { icon: "📊", text: "Regular compliance audits" },
                  ].map((item, i) => (
                    <div key={i} className='about-feature-item'>
                      <span className='feature-icon'>{item.icon}</span>
                      <span className='feature-text'>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='faq py-120 position-relative z-1 overflow-hidden section-bg-one'>
        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-4'>
              <div>
                <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
                  FAQ
                </span>
                <h3 className='splitTextStyleOne fw-light tw-leading-104'>
                  <span className='d-inline-block'>About Us</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>Questions</span>
                </h3>
                <p className='splitTextStyleOne text-neutral-500 tw-mt-6 max-w-350-px fw-medium'>
                  Common questions about Shyp Byte, our team, and what we stand for. Need more info? Get in touch.
                </p>
                <div className='tw-mt-8' data-aos='fade-up' data-aos-duration={600}>
                  <Link
                    to='/contact'
                    className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke tw-gap-5 group active--translate-y-2 tw-px-8 rounded-pill tw-py-6 fw-semibold'
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

export default AboutPageOne;
