import { useState, type FC, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  mobile: "",
  subject: "",
  message: "",
};

const inputClass =
  "form-control tw-py-4 tw-px-5 tw-rounded-xl border border-neutral-200 focus-border-main-600 tw-text-base text-heading fw-medium bg-white";

const EnquireFormOne: FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", form);
    setForm(initialForm);
  };

  return (
    <section className='py-120 section-bg-one'>
      <div className='container'>
        <div
          className='row g-0 overflow-hidden tw-rounded-3xl shadow-lg'
          data-aos='fade-up'
          style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}
        >
          {/* Left: Primary colored panel */}
          <div
            className='col-lg-6 tw-p-10 tw-p-lg-12 d-flex flex-column justify-content-center'
            style={{ backgroundColor: "var(--main-600)" }}
          >
            <div>
              <span className='tw-py-1 tw-px-705 bg-white/20 text-white tw-text-sm fw-bold rounded-pill tw-mb-4 d-inline-block' style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                Get In Touch
              </span>
              <h3 className='splitTextStyleOne fw-light tw-leading-104 text-white tw-mb-4'>
                <span className='d-inline-block'>Have a</span>
                <span className='d-inline-block'>&nbsp;</span>
                <span className='d-inline-block fw-semibold'>Question?</span>
              </h3>
              <p className='text-white tw-mb-8' style={{ opacity: 0.9 }}>
                Fill in the form and our team will get back to you within 24 hours.
              </p>
              <div className='d-flex flex-column tw-gap-4'>
                <a href='mailto:info@shypbyte.com' className='d-flex align-items-center tw-gap-3 text-white'>
                  <span className='tw-w-10 tw-h-10 flex-shrink-0 rounded-circle bg-white/20 d-flex align-items-center justify-content-center'>
                    <i className='ph ph-envelope-simple' />
                  </span>
                  <span>info@shypbyte.com</span>
                </a>
                <a href='tel:+917304617614' className='d-flex align-items-center tw-gap-3 text-white'>
                  <span className='tw-w-10 tw-h-10 flex-shrink-0 rounded-circle bg-white/20 d-flex align-items-center justify-content-center'>
                    <i className='ph ph-phone' />
                  </span>
                  <span>+91 7304617614</span>
                </a>
                <a href="javascript:void(0)" className='d-flex align-items-start tw-gap-3 text-white'>
                  <span className='tw-w-10 tw-h-10 flex-shrink-0 rounded-circle bg-white/20 d-flex align-items-center justify-content-center tw-mt-1'>
                    <i className='ph ph-map-pin' />
                  </span>
                  <span className='text-white' style={{ opacity: 0.9 }}>
                    Unit No 48, Adarsh Ind Estate, Chakala Sahar Road, Andheri East, Mumbai - 400099
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className='col-lg-6 bg-white tw-p-10 tw-p-lg-12'>
            <form onSubmit={handleSubmit}>
              <h5 className='fw-bold text-heading tw-mb-2'>Enquire Now</h5>
              <p className='text-neutral-500 tw-text-sm tw-mb-6'>We typically respond within 24 hours</p>
              <div className='row g-4 tw-mb-0'>
                <div className='col-sm-6'>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder='Your Name'
                    className={inputClass}
                    required
                  />
                </div>
                <div className='col-sm-6'>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='Email Address'
                    className={inputClass}
                    required
                  />
                </div>
                <div className='col-sm-6'>
                  <input
                    type='tel'
                    name='mobile'
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder='Mobile Number'
                    className={inputClass}
                    required
                  />
                </div>
                <div className='col-sm-6'>
                  <input
                    type='text'
                    name='subject'
                    value={form.subject}
                    onChange={handleChange}
                    placeholder='Subject'
                    className={inputClass}
                    required
                  />
                </div>
                <div className='col-12'>
                  <textarea
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Your Message'
                    rows={5}
                    className={inputClass}
                    style={{ resize: "none" }}
                    required
                  />
                </div>
                <div className='col-12'>
                  <button
                    type='submit'
                    className='w-100 hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Send Enquiry</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquireFormOne;
