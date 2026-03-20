import { useRef, useState, type FC, type FormEvent, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";

const senderTypes = [
  { value: "", label: "Please select" },
  { value: "individual", label: "Individual" },
  { value: "business", label: "Business / Company" },
  { value: "importer-exporter", label: "Importer / Exporter" },
  { value: "restaurant-hotel", label: "Restaurant / Hotel" },
  { value: "other", label: "Other" },
];

const weightOptions = [
  { value: "", label: "Please select" },
  { value: "under-5", label: "Under 5 kg" },
  { value: "5-20", label: "5 kg – 20 kg" },
  { value: "20-50", label: "20 kg – 50 kg" },
  { value: "50-100", label: "50 kg – 100 kg" },
  { value: "100-plus", label: "100 kg+" },
];

const goodsOptions = [
  { id: "fruits-veg", label: "Fruits & vegetables" },
  { id: "seafood", label: "Seafood / fish" },
  { id: "meat", label: "Meat (fresh / frozen)" },
  { id: "dairy", label: "Dairy products" },
  { id: "frozen", label: "Frozen food" },
  { id: "bakery", label: "Bakery / cakes / chocolates" },
  { id: "flowers", label: "Flowers / plants" },
  { id: "pharma", label: "Medicines / vaccines" },
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
  const goodsFieldsetRef = useRef<HTMLFieldSetElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [senderType, setSenderType] = useState("");
  const [weight, setWeight] = useState("");
  const [message, setMessage] = useState("");
  const [goods, setGoods] = useState<Record<string, boolean>>({});
  const [goodsError, setGoodsError] = useState(false);

  const toggleGood = (id: string) => {
    setGoodsError(false);
    setGoods((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const selectedGoods = goodsOptions.filter((g) => goods[g.id]).map((g) => g.label);
    if (selectedGoods.length === 0) {
      setGoodsError(true);
      goodsFieldsetRef.current?.focus();
      return;
    }
    setGoodsError(false);
    console.log("Perishable quote:", {
      name,
      email,
      mobile,
      company,
      senderType,
      weight,
      goods: selectedGoods,
      message,
    });
    setName("");
    setEmail("");
    setMobile("");
    setCompany("");
    setSenderType("");
    setWeight("");
    setMessage("");
    setGoods({});
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
          <div className='row gy-4 align-items-center justify-content-center'>
            <div className='col-lg-10 text-center'>
              <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                <span className='d-inline-block'>Fast &amp; safe</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>perishable courier</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block'>from airport to customer</span>
              </h1>
              <p className='text-white tw-text-lg fw-medium tw-mt-4 tw-opacity-95'>
                Deliver fresh seafood, fruits, medicines, flowers, and frozen foods straight from airport cargo to your
                customer&apos;s doorstep—with temperature-safe logistics and reliable, timely delivery.
              </p>
              <nav className='tw-mt-4 tw-text-sm text-white' aria-label='Breadcrumb'>
                <Link to='/' className='text-white text-decoration-none hover-underline'>
                  Home
                </Link>
                <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                <span className='tw-opacity-90'>Perishable courier</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section id='perishable-quote' className='py-120 section-bg-one' style={{ scrollMarginTop: "100px" }}>
        <div className='container max-w-1200-px'>
          <div className='text-center tw-mb-10'>
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
              Perishable shipment quote
            </span>
            <h2 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Tell us about</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>your shipment</span>
            </h2>
            <p className='text-neutral-500 tw-mt-4 max-w-700-px mx-auto mb-0'>
              Share a few details and our team will respond with temperature-safe options and pricing.
            </p>
          </div>
          <div
            className='tw-p-8 tw-p-lg-10 bg-white tw-rounded-3xl shadow-sm border border-neutral-100'
            data-aos='fade-up'
          >
            <form onSubmit={handleSubmit}>
              <div className='row g-4'>
                <div className='col-md-6'>
                  <label className='form-label fw-semibold text-heading tw-mb-2'>Name</label>
                  <input
                    type='text'
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
                    value={company}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
                    className={inputClass}
                    placeholder='Optional for individuals'
                  />
                </div>
                <div className='col-md-6'>
                  <label className='form-label fw-semibold text-heading tw-mb-2'>Type of sender</label>
                  <select
                    value={senderType}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setSenderType(e.target.value)}
                    className={inputClass}
                    required
                  >
                    {senderTypes.map((o) => (
                      <option key={o.value || "empty"} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='col-md-6'>
                  <label className='form-label fw-semibold text-heading tw-mb-2'>Shipment weight</label>
                  <select
                    value={weight}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setWeight(e.target.value)}
                    className={inputClass}
                    required
                  >
                    {weightOptions.map((o) => (
                      <option key={o.value || "w-empty"} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
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
                  <div className='row g-3'>
                    {goodsOptions.map((g) => (
                      <div key={g.id} className='col-sm-6 col-lg-4'>
                        <label className='d-flex align-items-center tw-gap-2 tw-p-3 tw-rounded-xl border border-neutral-200 bg-neutral-50 h-100 cursor-pointer user-select-none'>
                          <input
                            type='checkbox'
                            checked={!!goods[g.id]}
                            onChange={() => toggleGood(g.id)}
                            className='form-check-input flex-shrink-0 tw-mt-0'
                          />
                          <span className='tw-text-sm text-heading fw-medium'>{g.label}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                  </fieldset>
                </div>
                <div className='col-12'>
                  <label className='form-label fw-semibold text-heading tw-mb-2'>Message</label>
                  <textarea
                    value={message}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                    className={inputClass}
                    rows={4}
                    placeholder='Airport, destination, timeline, temperature needs…'
                    style={{ resize: "none" }}
                  />
                </div>
                <div className='col-12'>
                  <button
                    type='submit'
                    className='hover-black hover--translate-y-1 btn btn-main hover-style-one button--stroke tw-gap-5 tw-px-8 rounded-pill tw-py-6 fw-semibold'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Send message</span>
                  </button>
                </div>
              </div>
            </form>
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
          <div className='row g-4'>
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
