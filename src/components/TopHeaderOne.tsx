import type { FC } from "react";

const TopHeaderOne: FC = () => {
  return (
    <div className='bg-main-600 tw-py-2'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between flex-wrap tw-gap-2'>
          <a
            href='mailto:info@shypbyte.com'
            className='d-inline-flex align-items-center tw-gap-2 text-white tw-text-sm text-decoration-none hover-underline'
          >
            <i className='ph ph-envelope-simple tw-text-base' style={{ opacity: 0.9 }} />
            <span>info@shypbyte.com</span>
          </a>
          <a
            href='tel:+917208832472'
            className='d-inline-flex align-items-center tw-gap-2 text-white tw-text-sm text-decoration-none hover-underline'
          >
            <i className='ph ph-phone tw-text-base' style={{ opacity: 0.9 }} />
            <span>+91 7208832472</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderOne;
