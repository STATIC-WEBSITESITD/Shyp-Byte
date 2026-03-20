import type { FC } from "react";
import { Link } from "react-router-dom";

const CtaBannerOne: FC = () => {
  return (
    <section className='py-120 position-relative z-1 overflow-hidden'>
      <div
        className='position-absolute top-0 tw-start-0 w-100 h-100 z-n1'
        style={{ backgroundImage: 'url(/assets/images/cta.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        aria-hidden
      />
      <div className='position-absolute top-0 tw-start-0 w-100 h-100 z-n1' style={{ background: 'linear-gradient(180deg, rgba(0, 94, 255, 0.6), rgba(0, 0, 0, 0.8))' }} />
      <div className='container'>
        <div className='text-center max-w-672-px mx-auto'>
          <h3 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
            <span className='d-inline-block'>Ready for</span>
            <span className='d-inline-block'>&nbsp;</span>
            <span className='d-inline-block fw-semibold'>Better Shipping?</span>
          </h3>
          <p className='text-white tw-mt-6 tw-text-lg fw-medium mx-auto'>
            Experience international shipping the way it should be — simple,
            reliable, and scalable. Join the Shyp Byte revolution today.
          </p>
          <div className='tw-mt-10'>
            <Link
              to='/contact'
              className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill'
              data-block='button'
            >
              <span className='button__flair' />
              <span className='button__label'>Get Started Free</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerOne;
