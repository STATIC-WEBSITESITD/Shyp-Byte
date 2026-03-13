import { Link } from "react-router-dom";
import type { FC } from "react";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";
import blogsData from "../data/blogs.json";
import type { BlogItem } from "../types/blog";

const BlogPageOne: FC = () => {
  const blogs = blogsData as BlogItem[];

  return (
    <>
      <TopHeaderOne />
      <HeaderOne />
      <section
        className='banner tw-py-100-px overflow-hidden position-relative'
        style={{
          background: "url(/assets/images/blogs-bg.jpg) no-repeat center/cover",
        }}
      >
        <div
          className='position-absolute top-0 tw-start-0 w-100 h-100 z-0'
          style={{ backgroundColor: "rgba(6, 52, 61, 0.6)" }}
          aria-hidden
        />
        <div className='container max-w-1400-px position-relative z-1'>
          <div className='row gy-4 align-items-center justify-content-center'>
            <div className='col-lg-12'>
              <div className='text-center'>
                <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                  <span className='d-inline-block'>Our</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>Blog</span>
                </h1>
                <p className='text-white tw-text-lg fw-medium tw-mt-4 splitTextStyleOne tw-opacity-90'>
                  Insights on shipping, logistics, and global trade
                </p>
                <nav className='tw-mt-4 tw-text-sm text-white' aria-label='Breadcrumb'>
                  <Link to='/' className='text-white text-decoration-none hover-underline'>
                    Home
                  </Link>
                  <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                  <span className='tw-opacity-90'>Blog</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-120 section-bg-one'>
        <div className='container'>
          <div className='row gy-5'>
            {blogs.map((item, index) => (
              <div
                key={item.id}
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-duration={600}
                data-aos-delay={index * 100}
              >
                <article className='bg-white tw-rounded-2xl overflow-hidden shadow-sm h-100 d-flex flex-column'>
                  <Link to='/blogs' className='overflow-hidden'>
                    <img
                      src={item.img}
                      alt={item.title}
                      className='w-100 object-fit-cover hover-scale-108 tw-duration-500'
                      style={{ height: "220px" }}
                    />
                  </Link>
                  <div className='tw-p-6 tw-pt-5 d-flex flex-column flex-grow-1'>
                    <div className='d-flex align-items-center tw-gap-3 tw-mb-3 flex-wrap'>
                      <span className='text-neutral-600 tw-text-sm d-flex align-items-center tw-gap-1'>
                        <i className='ph ph-user tw-text-base text-main-600' />
                        {item.author}
                      </span>
                      <span className='text-neutral-400'>•</span>
                      <span className='text-neutral-600 tw-text-sm'>{item.date}</span>
                      <span className='text-neutral-400'>•</span>
                      <span className='text-neutral-600 tw-text-sm'>{item.readTime}</span>
                    </div>
                    <h5 className='tw-mb-3'>
                      <Link
                        to='/blogs'
                        className='text-heading hover-text-main-600 splitTextStyleOne fw-semibold tw-line-clamp-2'
                      >
                        {item.title}
                      </Link>
                    </h5>
                    <p className='text-neutral-500 tw-text-sm tw-line-clamp-3 tw-mb-4 flex-grow-1'>
                      {item.excerpt}
                    </p>
                    <div className='d-flex flex-wrap tw-gap-2 tw-mb-4'>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className='tw-py-1 tw-px-3 bg-main-50 text-main-600 tw-text-xs fw-medium rounded-pill'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to='/blogs'
                      className='text-main-600 fw-semibold tw-text-sm d-inline-flex align-items-center tw-gap-2 hover-text-main-700'
                    >
                      Read More
                      <i className='ph-bold ph-arrow-right tw-text-base' />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBannerOne />
      <FooterOne />
    </>
  );
};

export default BlogPageOne;
