import { useState, type FC, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

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

type EnquireFormOneProps = {
  embed?: boolean;
};

const EnquireFormOne: FC<EnquireFormOneProps> = ({ embed = false }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>(initialForm);
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
    setIsSuccess(false);
    setIsSubmitting(true);

    const formElement = e.currentTarget;

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setResult("Form Submitted Successfully");
        setIsSuccess(true);
        formElement.reset();
        setForm(initialForm);
        window.alert("Form Submitted Successfully");
        navigate("/thankyou-enquiry");
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

  const formCard = (
    <form onSubmit={handleSubmit} className={embed ? "faq-enquire__form h-100" : undefined}>
      <h5 className='fw-bold text-heading tw-mb-2'>Enquire Now</h5>
      <p className='text-neutral-500 tw-text-sm tw-mb-6'>
        We typically respond within 24 hours
      </p>
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
            rows={embed ? 4 : 5}
            className={inputClass}
            style={{ resize: "none" }}
            required
          />
        </div>
        <div className='col-12'>
          <PrimaryButton as='button' type='submit' fullWidth disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Get Started"}
          </PrimaryButton>
        </div>
        {result && (
          <div className='col-12'>
            <p
              className={`tw-text-sm tw-mt-2 tw-mb-0 ${
                isSuccess ? "text-success" : "text-danger"
              }`}
            >
              {result}
            </p>
          </div>
        )}
      </div>
    </form>
  );

  if (embed) {
    return formCard;
  }

  return (
    <section className='py-120 section-flow-white'>
      <div className='container'>
        <div
          className='row g-0 overflow-hidden tw-rounded-3xl shadow-lg'
          data-aos='fade-up'
          style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}
        >
          <div
            className='col-lg-6 tw-p-10 tw-p-lg-12 d-flex flex-column justify-content-center'
            style={{ backgroundColor: "var(--main-600)" }}
          >
            <div>
              <span
                className='tw-py-1 tw-px-705 text-white tw-text-sm fw-bold rounded-pill tw-mb-4 d-inline-block'
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
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
                <a
                  href='mailto:info@shypbyte.com'
                  className='d-flex align-items-center tw-gap-3 text-white'
                >
                  <span className='tw-w-10 tw-h-10 flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center'
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <i className='ph ph-envelope-simple' />
                  </span>
                  <span>info@shypbyte.com</span>
                </a>
                <a
                  href='tel:+917208832472'
                  className='d-flex align-items-center tw-gap-3 text-white'
                >
                  <span className='tw-w-10 tw-h-10 flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center'
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <i className='ph ph-phone' />
                  </span>
                  <span>+91 7208832472</span>
                </a>
                <div className='d-flex align-items-start tw-gap-3 text-white'>
                  <span className='tw-w-10 tw-h-10 flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center tw-mt-1'
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <i className='ph ph-map-pin' />
                  </span>
                  <span className='text-white' style={{ opacity: 0.9 }}>
                    Unit No 48, Adarsh Ind Estate, Chakala Sahar Road, Andheri East,
                    Mumbai - 400099
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 bg-white tw-p-10 tw-p-lg-12'>{formCard}</div>
        </div>
      </div>
    </section>
  );
};

export default EnquireFormOne;
