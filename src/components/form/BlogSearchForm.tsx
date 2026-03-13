import type { FC } from "react";

const BlogSearchForm: FC = () => {
  return (
    <div className='position-relative'>
      <input
        type='text'
        name='search'
        className='tw-ps-4 tw-pe-12 tw-py-4 bg-white tw-placeholder-text-main-two-600 focus-outline-0 w-100 tw-placeholder-transition-2 focus-tw-placeholder-text-hidden rounded-0 shadow-none flex-grow-1 border border-white focus-border-main-600 tw-duration-300'
        placeholder='Search here...'
      />
      <button
        type='submit'
        className='position-absolute top-50 tw--translate-y-50 tw-end-0 text-main-two-600 tw-text-lg d-flex tw-me-5'
      >
        <i className='ph-bold ph-magnifying-glass' />
      </button>
    </div>
  );
};

export default BlogSearchForm;
