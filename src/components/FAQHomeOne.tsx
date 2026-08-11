import { useState, type FC } from "react";
import EnquireFormOne from "./EnquireFormOne";
import SectionHead from "./SectionHead";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How does international shipping from India work?",
    answer:
      "Shyp Byte offers doorstep pickup across India. We collect your shipment, handle customs documentation, and deliver to 220+ countries with real-time tracking from pickup to last-mile delivery.",
  },
  {
    question: "What countries do you ship to?",
    answer:
      "We ship to 220+ countries including USA, UK, UAE, Canada, Australia, and major destinations across Europe and Asia, with transparent rates and customs support.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "After booking you get a tracking number. Use our Tracking page or confirmation email link to follow warehouse pickup, transit, customs, and final delivery in real time.",
  },
  {
    question: "Do you offer pickup from my location?",
    answer:
      "Yes. Doorstep pickup is available across India from home, office, or warehouse. Schedule pickup in the app or with our support team.",
  },
  {
    question: "What documents are needed for international shipping?",
    answer:
      "Usually a commercial invoice and packing list; some items need extra certificates. Our team guides you and helps prepare customs-ready documents.",
  },
  {
    question: "Are rates fixed before I book?",
    answer:
      "Yes. Shyp Byte shows predefined, transparent rates upfront so you know the price before booking — no bidding or last-minute surprises.",
  },
  {
    question: "Is KYC required to ship?",
    answer:
      "Verified KYC helps smooth customs clearance. You can complete Aadhaar-based verification and upload docs securely in the app.",
  },
  {
    question: "How do I get support if something goes wrong?",
    answer:
      "Reach us by call, email, or in-app support. Real people help with booking, documents, tracking, and delivery issues — not just a chatbot.",
  },
];

const FAQHomeOne: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className='faq-enquire py-120 section-flow-white'>
      <div className='container'>
        <SectionHead
          eyebrow='FAQ & Enquire'
          title={
            <>
              <span className='d-inline-block'>Questions Answered,</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>
                Ready to Ship?
              </span>
            </>
          }
          description='Clear your doubts first — then send us a message and we’ll get back within 24 hours.'
        />

        <div className='row g-4 align-items-start'>
          <div className='col-lg-6' data-aos='fade-up' data-aos-duration={700}>
            <div className='accordion common-accordion faq-enquire__accordion'>
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className='faq-enquire__item accordion-item tw-py-3 tw-px-4 border-0 mb-2 position-relative'
                >
                  <h5 className='accordion-header mb-0'>
                    <button
                      className={`accordion-button shadow-none px-0 py-0 bg-transparent fw-semibold d-flex align-items-center justify-content-between w-100 tw-gap-3 ${
                        openIndex === index ? "" : "collapsed"
                      }`}
                      type='button'
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      aria-expanded={openIndex === index}
                    >
                      <span className='text-start tw-text-sm tw-leading-snug'>
                        {item.question}
                      </span>
                      <span className='faq-enquire__toggle'>
                        <i
                          className={`ph-bold tw-text-base ${
                            openIndex === index ? "ph-minus" : "ph-plus"
                          }`}
                        />
                      </span>
                    </button>
                  </h5>

                  {openIndex === index && (
                    <div className='accordion-collapse show'>
                      <div className='accordion-body p-0 tw-mt-2'>
                        <p className='text-neutral-500 tw-leading-snug mb-0 tw-text-sm'>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className='col-lg-6' data-aos='fade-up' data-aos-duration={800}>
            <div className='faq-enquire__form-wrap'>
              <EnquireFormOne embed />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQHomeOne;
