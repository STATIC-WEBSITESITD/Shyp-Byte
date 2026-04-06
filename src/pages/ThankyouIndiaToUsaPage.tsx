import { useEffect, type FC } from "react";
import { Link, useLocation } from "react-router-dom";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";

export type IndiaToUsaThankYouState = {
  leadSubmitted?: boolean;
  name?: string;
};

const ThankyouIndiaToUsaPage: FC = () => {
  const { state } = useLocation();
  const { leadSubmitted, name } = (state ?? {}) as IndiaToUsaThankYouState;
  const displayName = name?.trim();

  useEffect(() => {
    if (!leadSubmitted) return;

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: "generate_lead",
      form_name: "india_to_usa_quote",
      lead_source: "india_to_usa",
    });
  }, [leadSubmitted]);

  return (
    <>
      <TopHeaderOne />
      <HeaderOne />

      <section className='py-120 section-bg-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='bg-white border border-neutral-200 tw-rounded-3xl tw-p-8 tw-p-lg-12 text-center shadow-sm'>
                <h1 className='splitTextStyleOne fw-light tw-leading-104 text-heading'>
                  <span className='d-inline-block'>Thank</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block fw-semibold text-main-600'>You</span>
                </h1>

                <p className='text-neutral-600 tw-text-lg tw-mt-5 mb-0'>
                  {displayName ? (
                    <>
                      Thank you, {displayName}, for your India to USA shipping enquiry. Please check your email for further
                      instructions. Our team will reach out shortly regarding your request.
                    </>
                  ) : (
                    <>
                      Thank you for your India to USA shipping enquiry. Please check your email for further instructions.
                      Our team will reach out shortly regarding your request.
                    </>
                  )}
                </p>

                <p className='tw-mt-7 mb-0 text-heading fw-medium'>
                  Having trouble?{" "}
                  <Link to='/contact' className='text-main-600 text-decoration-underline'>
                    Contact us
                  </Link>
                </p>

                <div className='tw-mt-8 d-flex flex-column flex-sm-row align-items-center justify-content-center tw-gap-4'>
                  <Link
                    to='/'
                    className='hover-black hover--translate-y-1 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill border-0 text-decoration-none'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Continue To Home Page</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterOne />
    </>
  );
};

export default ThankyouIndiaToUsaPage;
