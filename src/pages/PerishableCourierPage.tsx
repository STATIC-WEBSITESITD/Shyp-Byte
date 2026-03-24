import { useRef, useState, type FC, type FormEvent, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";
import ReactSelectField, { type SelectOption } from "../components/ReactSelectField";

const senderTypes = [
  { value: "", label: "Please Select" },
  { value: "Farmer", label: "Farmer" },
  { value: "Exporter", label: "Exporter" },
  { value: "Importer", label: "Importer" },
  { value: "Wholesaler", label: "Wholesaler" },
  { value: "Distributor", label: "Distributor" },
  { value: "Online Seller", label: "Online Seller (D2C)" },
  { value: "Restaurant", label: "Restaurant / Cloud Kitchen" },
  { value: "Pharma", label: "Pharmaceutical Company" },
  { value: "Florist", label: "Florist" },
  { value: "Other", label: "Other" },
];

const weightOptions = [
  { value: "", label: "Please Select" },
  { value: "200-300", label: "200 – 300 KG" },
  { value: "300-500", label: "300 – 500 KG" },
  { value: "500+", label: "500+ KG" },
];

const goodsOptions = [
  { id: "fruits-veg", label: "Fruits & Vegetables" },
  { id: "seafood", label: "Seafood / Fish" },
  { id: "meat", label: "Meat (Fresh/Frozen)" },
  { id: "dairy", label: "Dairy Products" },
  { id: "frozen", label: "Frozen Food" },
  { id: "bakery", label: "Bakery / Cakes / Chocolates" },
  { id: "flowers", label: "Flowers / Plants" },
  { id: "pharma", label: "Medicines / Vaccines" },
  { id: "other", label: "Other" },
];

const itemsWeHandle = [
  "Fresh fruits & vegetables directly from farms, mandis, and airports",
  "Seafood & meat with ice-packed, rush delivery",
  "Fresh flowers for florists, events, and weddings",
  "Dairy, cheese, gourmet food, and ready meals",
  "Pharmaceuticals, vaccines, lab samples & other temperature-sensitive goods",
  "Exotic & premium items like truffles, saffron, and rare imported produce",
];

const whoWeServe = [
  {
    title: "Farmers & agri‑producers",
    desc: "Direct-to-market delivery for fruits, vegetables, and fresh produce from farms and mandis.",
    icon: "ph-plant",
  },
  {
    title: "Wholesalers & distributors",
    desc: "Maintain freshness across bulk orders and multiple retail points with reliable cold-chain last-mile.",
    icon: "ph-storefront",
  },
  {
    title: "Importers & exporters",
    desc: "Airport cargo pickup within hours of landing, with proper handoff from international to domestic legs.",
    icon: "ph-globe-hemisphere-west",
  },
  {
    title: "Restaurants & hotels",
    desc: "Daily deliveries of seafood, produce, and specialty ingredients so your kitchen never runs short.",
    icon: "ph-fork-knife",
  },
  {
    title: "Online grocery & D2C brands",
    desc: "Scalable, branded, and reliable last-mile cold delivery for fresh and frozen D2C products.",
    icon: "ph-shopping-cart",
  },
  {
    title: "Pharma & healthcare",
    desc: "Secure movement of vaccines, medicines, blood samples, and other temperature-critical healthcare items.",
    icon: "ph-first-aid-kit",
  },
  {
    title: "Florists & event planners",
    desc: "On-time flower deliveries for weddings and events with optimal handling and minimal wilting.",
    icon: "ph-flower",
  },
];

const whyChoose = [
  { label: "Fast airport cargo clearance & pickup", icon: "ph-airplane-taxiing" },
  { label: "Specialized handling for perishables", icon: "ph-hand-heart" },
  { label: "Temperature-safe packaging", icon: "ph-thermometer-cold" },
  { label: "Real-time tracking", icon: "ph-map-pin-line" },
  { label: "Same-day & express options", icon: "ph-lightning" },
  { label: "Pan-India delivery network", icon: "ph-map-trifold" },
  { label: "Reliable logistics partners", icon: "ph-handshake" },
  { label: "End-to-end cold chain integrity", icon: "ph-snowflake" },
  { label: "Dedicated customer support", icon: "ph-headset" },
];

const processSteps = [
  {
    title: "Airport cargo pickup",
    desc: "Our team collects your shipment directly from the airport cargo terminal.",
    icon: "ph-airplane-takeoff",
  },
  {
    title: "Quality check & packaging",
    desc: "Items are carefully handled and packed using insulated or temperature-safe packaging.",
    icon: "ph-package",
  },
  {
    title: "Express transportation",
    desc: "Shipments move through our priority courier network.",
    icon: "ph-truck",
  },
  {
    title: "Doorstep delivery",
    desc: "Delivered safely to the customer, warehouse, or store—quickly and reliably.",
    icon: "ph-house-line",
  },
];

const inputClass =
  "form-control tw-py-4 tw-px-5 tw-rounded-xl border border-neutral-200 focus-border-main-600 tw-text-base text-heading fw-medium bg-white";

const PerishableCourierPage: FC = () => {
  const navigate = useNavigate();
  const goodsFieldsetRef = useRef<HTMLFieldSetElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [senderType, setSenderType] = useState("");
  const [senderTypeError, setSenderTypeError] = useState(false);
  const [weight, setWeight] = useState("");
  const [weightError, setWeightError] = useState(false);
  const [goods, setGoods] = useState<Record<string, boolean>>({});
  const [goodsError, setGoodsError] = useState(false);
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
    setIsSuccess(false);
    setIsSubmitting(true);
    setSenderTypeError(false);
    setWeightError(false);
    const selectedGoods = goodsOptions.filter((g) => goods[g.id]).map((g) => g.label);

    if (!senderType) {
      setSenderTypeError(true);
      return;
    }
    if (!weight) {
      setWeightError(true);
      return;
    }
    if (selectedGoods.length === 0) {
      setGoodsError(true);
      goodsFieldsetRef.current?.focus();
      setIsSubmitting(false);
      return;
    }

    setGoodsError(false);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "e67d4197-8433-4b71-a58a-c0815c626d7f");
    formData.append("from_name", "Shyp Byte Perishable Courier Form");
    formData.append("subject", `New Perishable Enquiry from ${name} | ${senderType}`);
    formData.append("replyto", email);
    formData.append("sender_type", senderType);
    formData.append("shipment_weight", weight);
    formData.append("goods", selectedGoods.join(", "));
    formData.append(
      "autoresponse",
      `Hello ${name},

Thank you for your perishable shipment enquiry with Shyp Byte.
We have received your request and our team will get back to you shortly.

If you have any urgent questions, feel free to reply to this email anytime.

Best regards,
Shyp Byte`
    );

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
        setResult("Form Submitted Successfully");
        setIsSuccess(true);
        setName("");
        setEmail("");
        setMobile("");
        setCompany("");
        setSenderType("");
        setSenderTypeError(false);
        setWeight("");
        setWeightError(false);
        setGoods({});
        window.alert("Form Submitted Successfully");
        navigate("/thankyou-perishable-courier");
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
        style={{ background: "url(/assets/images/perishable-courier.jpg) no-repeat center/cover" }}
      >
        <div className='position-absolute top-0 tw-start-0 w-100 h-100 z-0' style={{ backgroundColor: "rgba(6, 52, 61, 0.65)" }} aria-hidden />
        <div className='container max-w-1400-px position-relative z-1'>
          <div className='row gy-5 align-items-center justify-content-between'>
            <div className='col-lg-6 text-start'>
              <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                <span className='d-inline-block'>Fast &amp; Safe</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>Perishable Courier</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>from Airport to Customer</span>
              </h1>
              <p className='text-white tw-text-lg fw-medium tw-mt-4 tw-opacity-95'>
                Deliver fresh seafood, fruits, medicines, flowers, and frozen foods straight from airport cargo to your
                customer&apos;s doorstep—with temperature-safe logistics and reliable, timely delivery.
              </p>
            </div>
            <div className='col-lg-6'>
              <div className='tw-p-7 tw-p-lg-10 tw-rounded-2xl bg-white shadow-lg border border-neutral-100'>
                <h3 className='text-heading fw-bold tw-mb-6 text-center'>Perishable Shipment Quote</h3>
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
                      <label className='form-label fw-semibold text-heading tw-mb-2'>Company name</label>
                      <input
                        type='text'
                        name='company'
                        value={company}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
                        className={inputClass}
                        placeholder='Optional for individuals'
                      />
                    </div>
                    <div className='col-md-6'>
                      <label className='form-label fw-semibold text-heading tw-mb-2'>Type of sender</label>
                      <ReactSelectField
                        options={senderTypes
                          .filter((o) => o.value)
                          .map((o) => ({ value: o.value, label: o.label })) as SelectOption[]}
                        value={senderType || null}
                        onChange={(v) => setSenderType((v as string | null) ?? "")}
                        placeholder='Please select'
                        isClearable
                      />
                      {senderTypeError && (
                        <p className='text-danger tw-text-sm tw-mb-0 mt-2' role='alert'>
                          Please select a sender type.
                        </p>
                      )}
                    </div>
                    <div className='col-md-6'>
                      <label className='form-label fw-semibold text-heading tw-mb-2'>Shipment weight</label>
                      <ReactSelectField
                        options={weightOptions
                          .filter((o) => o.value)
                          .map((o) => ({ value: o.value, label: o.label })) as SelectOption[]}
                        value={weight || null}
                        onChange={(v) => setWeight((v as string | null) ?? "")}
                        placeholder='Please select'
                        isClearable
                      />
                      {weightError && (
                        <p className='text-danger tw-text-sm tw-mb-0 mt-2' role='alert'>
                          Please select shipment weight.
                        </p>
                      )}
                    </div>
                    <div className='col-12'>
                      <fieldset ref={goodsFieldsetRef} tabIndex={-1} className='border-0 p-0 m-0'>
                        <legend className='form-label fw-semibold text-heading tw-mb-2 float-none w-auto p-0'>
                          Type of perishable goods (select one or more)
                        </legend>
                        {goodsError && (
                          <p className='text-danger tw-text-sm tw-mb-2' role='alert'>
                            Please select at least one type of goods.
                          </p>
                        )}
                        <ReactSelectField
                          options={goodsOptions.map((g) => ({ value: g.id, label: g.label })) as SelectOption[]}
                          value={goodsOptions.filter((g) => goods[g.id]).map((g) => g.id)}
                          isMulti
                          onChange={(v) => {
                            const ids = Array.isArray(v) ? v : [];
                            if (ids.length === 0) {
                              setGoods({});
                              return;
                            }

                            const next: Record<string, boolean> = {};
                            ids.forEach((id) => {
                              next[id] = true;
                            });
                            setGoods(next);
                          }}
                          placeholder='Please select'
                          isClearable
                        />
                      </fieldset>
                    </div>
                    <div className='col-12'>
                      <button
                        type='submit'
                        disabled={isSubmitting}
                        className='hover-black hover--translate-y-1 btn btn-main hover-style-one button--stroke w-100 tw-gap-5 tw-px-8 rounded-pill tw-py-6 fw-semibold'
                        data-block='button'
                      >
                        <span className='button__flair' />
                        <span className='button__label'>{isSubmitting ? "Sending..." : "Send message"}</span>
                      </button>
                    </div>
                    {result && (
                      <div className='col-12'>
                        <p className={`tw-text-sm tw-mt-2 tw-mb-0 ${isSuccess ? "text-success" : "text-danger"}`}>
                          {result}
                        </p>
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
          <div className='row gy-5 align-items-center'>
            <div className='col-lg-6' data-aos='fade-right' data-aos-duration={600}>
              <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
                Perishable courier
              </span>
              <h2 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
                <span className='d-inline-block'>Fast &amp; safe</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block fw-semibold text-main-600'>temperature‑controlled</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>delivery</span>
              </h2>
              <p className='text-neutral-500 tw-leading-relaxed tw-mt-6 mb-0'>
                Shyp Byte helps you move temperature-sensitive goods from airport cargo to customers with speed, care,
                and full visibility—so freshness and compliance stay intact door to door.
              </p>
            </div>
            <div className='col-lg-6' data-aos='fade-left' data-aos-duration={600}>
              <div className='tw-p-8 tw-rounded-2xl section-bg-one border border-neutral-100'>
                <h5 className='fw-semibold text-heading tw-mb-4'>Perishable items we handle</h5>
                <ul className='list-unstyled mb-0 d-flex flex-column tw-gap-3'>
                  {itemsWeHandle.map((line) => (
                    <li key={line} className='d-flex align-items-start tw-gap-3'>
                      <i className='ph-bold ph-check-circle text-main-600 tw-mt-1 flex-shrink-0' />
                      <span className='text-neutral-600'>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-120 section-bg-one'>
        <div className='container'>
          <div className='text-center tw-mb-10'>
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
              Who we serve
            </span>
            <h2 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Who can use our</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>perishable courier?</span>
            </h2>
            <p className='text-neutral-500 max-w-750-px mx-auto tw-mt-4 mb-0'>
              Different industries rely on us to move temperature-sensitive shipments safely and on time.
            </p>
          </div>
          <div className='row justify-content-center g-4'>
            {whoWeServe.map((card) => (
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

      <section className='py-120'>
        <div className='container'>
          <div className='text-center tw-mb-10'>
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
              Why choose Shyp Byte
            </span>
            <h2 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Why businesses trust us for</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>perishable logistics</span>
            </h2>
          </div>
          <div className='row g-3 justify-content-center'>
            {whyChoose.map((item) => (
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
              Our process
            </span>
            <h2 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>How airport‑to‑customer</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>delivery works</span>
            </h2>
            <p className='text-neutral-500 max-w-700-px mx-auto tw-mt-4 mb-0'>
              A simple, efficient flow so your goods reach customers safely and on schedule.
            </p>
          </div>
          <div className='row g-4'>
            {processSteps.map((step, i) => (
              <div key={step.title} className='col-md-6 col-lg-3'>
                <div className='text-center tw-p-6 tw-rounded-2xl bg-white border border-neutral-200 h-100 position-relative'>
                  <span className='position-absolute top-0 start-50 translate-middle-x tw-mt-3 badge bg-main-600 rounded-pill px-3 py-2 fw-semibold'>
                    {i + 1}
                  </span>
                  <span className='tw-w-14 tw-h-14 rounded-xl bg-main-50 text-main-600 d-flex align-items-center justify-content-center mx-auto tw-mt-6 tw-mb-4'>
                    <i className={`ph-bold ${step.icon} tw-text-2xl`} />
                  </span>
                  <h5 className='fw-semibold text-heading tw-mb-2'>{step.title}</h5>
                  <p className='text-neutral-500 tw-text-sm mb-0'>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-120'>
        <div className='container'>
          <div
            className='tw-p-10 tw-p-lg-12 tw-rounded-3xl text-center text-white position-relative overflow-hidden'
            style={{ background: "linear-gradient(135deg, var(--main-700, #05303a) 0%, var(--main-600) 100%)" }}
            data-aos='zoom-in'
          >
            <h2 className='splitTextStyleOne fw-light tw-leading-104 text-white position-relative z-1'>
              <span className='d-inline-block'>Ready to move perishables</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold'>faster?</span>
            </h2>
            <p className='text-white tw-opacity-90 tw-mt-4 max-w-640-px mx-auto position-relative z-1 mb-0'>
              Connect with Shyp Byte for temperature-safe, airport-to-doorstep perishable courier solutions.
            </p>
            <div className='tw-mt-10 position-relative z-1'>
              <Link
                to='/contact'
                className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill border-0 text-decoration-none'
                data-block='button'
              >
                <span className='button__flair' />
                <span className='button__label'>Get a quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBannerOne />
      <FooterOne />
    </>
  );
};

export default PerishableCourierPage;
