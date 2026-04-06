import { useState, type FC, type FormEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Slider, { type Settings } from "react-slick";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";

const inputClass =
  "form-control tw-py-4 tw-px-5 tw-rounded-xl border border-neutral-200 focus-border-main-600 tw-text-base text-heading fw-medium bg-white";

const whyChooseIndiaUsa = [
  { label: "Free door pickup across India — home & office collection", icon: "ph-house-line" },
  { label: "Fast & reliable delivery to USA — NY, CA, TX, Chicago & more", icon: "ph-airplane-tilt" },
  { label: "End-to-end tracking in real time", icon: "ph-map-pin-line" },
  { label: "Complete customs & documentation assistance", icon: "ph-file-text" },
  { label: "Professional export-safe packing support", icon: "ph-package" },
  { label: "No hidden charges — transparent pricing", icon: "ph-receipt" },
  { label: "International shipping made simple & stress-free", icon: "ph-handshake" },
  { label: "Secure handling from pickup to delivery", icon: "ph-shield-check" },
  { label: "Dedicated customer support", icon: "ph-headset" },
];

const howItWorksSteps = [
  { step: 1, title: "Submit Inquiry or Call Us", icon: "ph-chats-circle" },
  { step: 2, title: "We Arrange Free Pickup", icon: "ph-truck" },
  { step: 3, title: "Documentation & Customs Clearance", icon: "ph-seal-check" },
  { step: 4, title: "Fast Delivery to USA with Tracking", icon: "ph-airplane-tilt" },
];

const deliveryCoverageUsa = [
  "New York",
  "Los Angeles",
  "San Francisco",
  "Houston",
  "Chicago",
  "New Jersey",
  "And All Major & Minor Cities in USA",
];

const uniqueAdvantagePoints = [
  "Help you choose the most cost-effective shipping option",
  "Provide weight & packaging guidance to reduce shipping cost",
  "Offer personal shipment consultation before booking",
  "Dedicated support team for USA shipments",
  "Assistance for first-time international senders",
];

const howItWorksSliderSettings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};

const whatYouCanSendUsa = [
  {
    title: "Personal Parcels",
    desc: "Clothes, gifts, shoes, accessories and other personal items securely delivered.",
    icon: "ph-bag-simple",
  },
  {
    title: "Documents",
    desc: "University papers, legal documents, certificates and important files.",
    icon: "ph-file-text",
  },
  {
    title: "Excess Baggage",
    desc: "Send extra luggage and avoid airline overweight baggage charges.",
    icon: "ph-suitcase-simple",
  },
  {
    title: "Student Shipments",
    desc: "Books, study materials, personal belongings for students moving to USA.",
    icon: "ph-student",
  },
  {
    title: "E-commerce Shipments",
    desc: "Small business and online seller shipments with proper documentation support.",
    icon: "ph-storefront",
  },
  {
    title: "Household Items (As per customs rules)",
    desc: "Kitchen items, decor and household goods (as per customs regulations).",
    icon: "ph-cooking-pot",
  },
];

const IndiaToUsaPage: FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [parcelWeight, setParcelWeight] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
    setIsSuccess(false);
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    formData.append("access_key", "e67d4197-8433-4b71-a58a-c0815c626d7f");
    formData.append("from_name", "Shyp Byte India to USA Quote");
    formData.append("subject", `India to USA Quote — ${name}`);
    formData.append("replyto", email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok && data.success) {
        const submittedName = name.trim();
        setResult("Form Submitted Successfully");
        setIsSuccess(true);
        formElement.reset();
        setName("");
        setEmail("");
        setMobile("");
        setCity("");
        setParcelWeight("");
        setMessage("");
        navigate("/thankyou-india-to-usa", {
          state: { leadSubmitted: true, name: submittedName },
        });
      } else {
        setResult(data.message || "Error: Unable to submit form");
        setIsSuccess(false);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setResult(error.message);
      } else {
        setResult("Error: Unable to submit form");
      }
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <TopHeaderOne />
      <HeaderOne />

      <section
        className='banner tw-py-100-px overflow-hidden position-relative'
        style={{ background: "url(/assets/images/india-to-usa.jpg) no-repeat center/cover" }}
      >
        <div
          className='position-absolute top-0 tw-start-0 w-100 h-100 z-0'
          style={{ backgroundColor: "rgba(6, 52, 61, 0.65)" }}
          aria-hidden
        />
        <div className='container max-w-1400-px position-relative z-1'>
          <div className='row gy-5 align-items-center justify-content-between'>
            <div className='col-lg-6 text-start'>
              <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                <span className='d-block'>Send Courier to USA from India - Fast, Safe & Affordable</span>
              </h1>
              <p className='text-white tw-text-lg fw-medium tw-mt-4 tw-opacity-95'>
                Door Pickup | Express Delivery | Live Tracking | Customs Support
              </p>
              <a
                href='tel:+917304617614'
                className='tw-mt-5 hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill border-0 text-decoration-none'
                data-block='button'
                aria-label='Call +91 7304617614 to book your USA courier'
              >
                <span className='button__flair' />
                <span className='button__label'>Book Your USA Courier</span>
              </a>
            </div>
            <div className='col-lg-6'>
              <div className='tw-p-7 tw-p-lg-10 tw-rounded-2xl bg-white shadow-lg border border-neutral-100'>
                <h3 className='text-heading fw-bold tw-mb-6 text-center'>India to USA Quote</h3>
                <form onSubmit={handleSubmit}>
                  <div className='row g-4'>
                    <div className='col-md-6'>
                      <label className='form-label fw-semibold text-heading tw-mb-2'>Name</label>
                      <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        className={inputClass}
                        placeholder='Full name'
                        required
                      />
                    </div>
                    <div className='col-md-6'>
                      <label className='form-label fw-semibold text-heading tw-mb-2'>Email</label>
                      <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        className={inputClass}
                        placeholder='you@company.com'
                        required
                      />
                    </div>
                    <div className='col-md-6'>
                      <label className='form-label fw-semibold text-heading tw-mb-2'>Mobile number</label>
                      <input
                        type='tel'
                        name='mobile'
                        value={mobile}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setMobile(e.target.value)}
                        className={inputClass}
                        placeholder='+91 …'
                        required
                      />
                    </div>
                    <div className='col-md-6'>
                      <label className='form-label fw-semibold text-heading tw-mb-2'>City (Pickup Location)</label>
                      <input
                        type='text'
                        name='city'
                        value={city}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                        className={inputClass}
                        placeholder='City'
                        required
                      />
                    </div>
                    <div className='col-12'>
                      <label className='form-label fw-semibold text-heading tw-mb-2'>Parcel Weight (Approx)</label>
                      <input
                        type='text'
                        name='parcel_weight'
                        value={parcelWeight}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setParcelWeight(e.target.value)}
                        className={inputClass}
                        placeholder='e.g. 2 kg'
                        required
                      />
                    </div>
                    <div className='col-12'>
                      <label className='form-label fw-semibold text-heading tw-mb-2'>Message</label>
                      <textarea
                        name='message'
                        value={message}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        className={inputClass}
                        placeholder='Your message'
                        rows={4}
                        style={{ resize: "none" }}
                      />
                    </div>
                    <div className='col-12'>
                      <button
                        type='submit'
                        disabled={isSubmitting}
                        className='w-100 hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill'
                        data-block='button'
                      >
                        <span className='button__flair' />
                        <span className='button__label'>
                          {isSubmitting ? "Sending..." : "Book Free Quote Now"}
                        </span>
                      </button>
                    </div>
                    {result && (
                      <div className='col-12'>
                        <p className={`tw-text-sm tw-mb-0 ${isSuccess ? "text-success" : "text-danger"}`}>{result}</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-120'>
        <div className='container'>
          <div className='text-center tw-mb-10'>
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
              Why choose Shyp Byte
            </span>
            <h2 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Why businesses trust us for</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>India to USA courier</span>
            </h2>
          </div>
          <div className='row g-3 justify-content-center'>
            {whyChooseIndiaUsa.map((item) => (
              <div key={item.label} className='col-sm-6 col-lg-4'>
                <div className='d-flex align-items-center tw-gap-3 tw-p-4 tw-rounded-2xl bg-white border border-neutral-200 h-100'>
                  <span className='tw-w-10 tw-h-10 rounded-circle bg-main-50 text-main-600 d-flex align-items-center justify-content-center flex-shrink-0'>
                    <i className={`ph-bold ${item.icon}`} />
                  </span>
                  <span className='fw-medium text-heading tw-text-sm'>{item.label}</span>
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
              How it works
            </span>
            <h2 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>How it</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>works</span>
            </h2>
          </div>
          <div className='plan-execute-slider one'>
            <Slider {...howItWorksSliderSettings}>
              {howItWorksSteps.map((item) => (
                <div key={item.step} className='px-1'>
                  <div className='text-center tw-p-6 tw-p-lg-8 tw-rounded-2xl bg-white border border-neutral-200 h-100 position-relative tw-mb-2'>
                    <span className='tw-w-14 tw-h-14 rounded-xl bg-main-50 text-main-600 d-flex align-items-center justify-content-center mx-auto tw-mb-4'>
                      <i className={`ph-bold ${item.icon} tw-text-2xl`} />
                    </span>
                    <h5 className='fw-semibold text-heading tw-mb-0 tw-leading-snug'>{item.title}</h5>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className='py-120'>
        <div className='container'>
          <div className='text-center tw-mb-10'>
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
              What you can send
            </span>
            <h2 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>What can you send to the</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>USA?</span>
            </h2>
          </div>
          <div className='row justify-content-center g-4'>
            {whatYouCanSendUsa.map((card) => (
              <div key={card.title} className='col-md-6 col-xl-4'>
                <div className='h-100 tw-p-6 tw-rounded-2xl bg-white border border-neutral-200 shadow-sm'>
                  <span className='tw-w-12 tw-h-12 rounded-xl bg-main-50 text-main-600 d-flex align-items-center justify-content-center tw-mb-4'>
                    <i className={`ph-bold ${card.icon} tw-text-xl`} />
                  </span>
                  <h5 className='fw-semibold text-heading tw-mb-2'>{card.title}</h5>
                  <p className='text-neutral-500 tw-text-sm mb-0 tw-leading-relaxed'>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-120 section-bg-one'>
        <div className='container'>
          <div className='row gy-5 align-items-center'>
            <div className='col-lg-5' data-aos='fade-right' data-aos-duration={600}>
              <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
                Delivery coverage
              </span>
              <h2 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
                <span className='d-inline-block'>Delivery</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block fw-semibold text-main-600'>coverage</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>in</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block fw-semibold text-main-600'>USA</span>
              </h2>
              <p className='text-neutral-500 tw-leading-relaxed tw-mt-6 mb-0'>
                Our delivery network covers all major and minor cities across the United States. Whether you are sending
                documents, personal goods, or commercial shipments, we ensure reliable and fast delivery to destinations
                including major metros and beyond.
              </p>
            </div>
            <div className='col-lg-7' data-aos='fade-left' data-aos-duration={600}>
              <div className='row g-3'>
                {deliveryCoverageUsa.map((city) => {
                  const isFullWidth = city.toLowerCase().includes("all major");
                  return (
                    <div key={city} className={isFullWidth ? "col-12" : "col-6 col-sm-4"}>
                      <div className='h-100 tw-p-4 tw-rounded-2xl bg-white border border-neutral-200 shadow-sm d-flex flex-column align-items-center justify-content-center text-center'>
                        <i className='ph-bold ph-map-pin-line text-main-600 tw-text-xl tw-mb-2' aria-hidden />
                        <span className='fw-semibold text-heading tw-text-sm tw-leading-snug'>{city}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-120'>
        <div className='container'>
          <div className='row gy-5 align-items-center'>
            <div className='col-lg-6' data-aos='fade-right' data-aos-duration={600}>
              <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
                Our unique advantage
              </span>
              <h2 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
                <span className='d-inline-block fw-semibold text-main-600'>Our unique advantage</span>
              </h2>
              <p className='text-neutral-500 tw-leading-relaxed tw-mt-6 mb-0'>
                Unlike traditional courier services, we don&apos;t just ship parcels. We guide you through the complete
                international shipping process.
              </p>
            </div>
            <div className='col-lg-6' data-aos='fade-left' data-aos-duration={600}>
              <div className='tw-p-8 tw-rounded-2xl section-bg-one border border-neutral-100'>
                <h5 className='fw-semibold text-heading tw-mb-4'>Unlike traditional courier services, we:</h5>
                <ul className='list-unstyled mb-0 d-flex flex-column tw-gap-3'>
                  {uniqueAdvantagePoints.map((point) => (
                    <li key={point} className='d-flex align-items-start tw-gap-3'>
                      <i className='ph-bold ph-check-circle text-main-600 tw-mt-1 flex-shrink-0' />
                      <span className='text-neutral-600'>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className='tw-mt-6'>
                  <p className='text-heading fw-semibold tw-mb-1'>We don&apos;t just ship parcels.</p>
                  <p className='text-neutral-500 mb-0'>We guide you through the complete international shipping process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-120 section-bg-one'>
        <div className='container'>
          <div
            className='tw-p-10 tw-p-lg-12 tw-rounded-3xl text-center text-white position-relative overflow-hidden'
            style={{ background: "linear-gradient(135deg, var(--main-700, #05303a) 0%, var(--main-600) 100%)" }}
            data-aos='zoom-in'
          >
            <h2 className='splitTextStyleOne fw-light tw-leading-104 text-white position-relative z-1'>
              <span className='d-inline-block'>Send Your Parcel to USA</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold'>Without Stress</span>
            </h2>
            <p className='text-white tw-opacity-90 tw-mt-4 max-w-640-px mx-auto position-relative z-1 mb-0'>
              Fast Pickup. Smooth Customs. Safe Delivery.
            </p>
            <div className='tw-mt-10 position-relative z-1'>
              <a
                href='tel:7304617614'
                className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill border-0 text-decoration-none'
                data-block='button'
              >
                <span className='button__flair' />
                <span className='button__label'>Get Free Quote Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <CtaBannerOne />
      <FooterOne />
    </>
  );
};

export default IndiaToUsaPage;
