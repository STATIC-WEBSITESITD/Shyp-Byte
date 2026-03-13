import { useState, type FC } from "react";
import { Link } from "react-router-dom";

const FAQHomeOne: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  interface FAQItem {
    question: string;
    answer: string;
  }
  const faqItems: FAQItem[] = [
    {
      question: "How does international shipping from India work?",
      answer:
        "Shypbyte offers doorstep pickup across India. We collect your shipments from your location, handle customs documentation, and deliver to 150+ countries worldwide. You get real-time tracking at every stage from warehouse pickup to last-mile delivery.",
    },
    {
      question: "What countries do you ship to?",
      answer:
        "We ship to over 150 countries including USA, UK, UAE, Canada, Australia, and most European and Asian destinations. Our global courier network ensures reliable delivery with transparent pricing and customs clearance support.",
    },
    {
      question: "How can I track my shipment?",
      answer:
        "Once your shipment is booked, you'll receive a tracking number. Use our Tracking page or the link in your confirmation email to monitor your package in real time through warehouse pickup, transit, customs clearance, and final delivery.",
    },
    {
      question: "Do you offer pickup from my location?",
      answer:
        "Yes. Shypbyte provides doorstep pickup across India. We collect packages from your home, office, or warehouse at no extra cost for most locations. Schedule a pickup through our platform or contact our support team.",
    },
    {
      question: "What documents are needed for international shipping?",
      answer:
        "Requirements vary by destination and product type. Generally you'll need a commercial invoice, packing list, and for some items—export licenses or certificates. Our team guides you through the process and helps prepare all necessary documentation.",
    },
  ];

  return (
    <section className='faq py-120 position-relative z-1 overflow-hidden'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-4'>
            <div>
              <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
                FAQ
              </span>
              <h3 className='splitTextStyleOne fw-light tw-leading-104'>
                <span className='d-inline-block'>Frequently Asked</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block fw-semibold text-main-600'>Questions</span>
              </h3>
              <p className='splitTextStyleOne text-neutral-500 tw-mt-6 max-w-350-px fw-medium'>
                Everything you need to know about international shipping from India. Can't find your answer? Get in touch.
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
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={600}
                  >
                    <h5 className='accordion-header'>
                      <button
                        className={`accordion-button shadow-none px-0 bg-transparent h5 fw-semibold d-flex align-items-center justify-content-between w-100 tw-pe-12 ${
                          openIndex === index ? "" : "collapsed"
                        }`}
                        type='button'
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                        aria-expanded={openIndex === index}
                      >
                        <span className='text-start'>{item.question}</span>
                        <span className='tw-w-8 tw-h-8 rounded-circle border border-neutral-200 d-flex align-items-center justify-content-center flex-shrink-0 text-main-600'>
                          <i className={`ph-bold tw-text-lg ${openIndex === index ? "ph-minus" : "ph-plus"}`} />
                        </span>
                      </button>
                    </h5>

                    {openIndex === index && (
                      <div className='accordion-collapse show'>
                        <div className='accordion-body p-0 tw-mt-4'>
                          <p className='text-neutral-500 tw-leading-relaxed mb-0'>
                            {item.answer}
                          </p>
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
  );
};

export default FAQHomeOne;
