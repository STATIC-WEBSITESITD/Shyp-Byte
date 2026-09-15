import { Link, useParams } from "react-router-dom";
import type { FC } from "react";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";
import BlogContent from "../components/BlogContent";
import ErrorPage from "./ErrorPage";
import { getBlogBySlug } from "../data/blogs";

const BlogDetailsPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? getBlogBySlug(slug) : undefined;

  if (!blog) {
    return <ErrorPage />;
  }

  return (
    <>
      <TopHeaderOne />
      <HeaderOne />
      <section
        className='banner tw-py-100-px overflow-hidden position-relative'
        style={{
          background: "linear-gradient(135deg, #06343d 0%, #0c848d 100%)",
        }}
      >
        <div
          className='position-absolute top-0 tw-start-0 w-100 h-100 z-0'
          style={{ backgroundColor: "rgba(6, 52, 61, 0.35)" }}
          aria-hidden
        />
        <div className='container max-w-1400-px position-relative z-1'>
          <div className='row gy-4 align-items-center justify-content-center'>
            <div className='col-lg-10'>
              <div className='text-center'>
                <div className='d-flex justify-content-center flex-wrap tw-gap-2 tw-mb-4'>
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className='tw-py-1 tw-px-3 bg-white tw-text-xs fw-medium rounded-pill text-main-600'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                  {blog.title}
                </h1>
                <p className='text-white tw-text-base fw-medium tw-mt-4 tw-opacity-90'>
                  {blog.author} • {blog.date} • {blog.readTime}
                </p>
                <nav className='tw-mt-4 tw-text-sm text-white' aria-label='Breadcrumb'>
                  <Link to='/' className='text-white text-decoration-none hover-underline'>
                    Home
                  </Link>
                  <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                  <Link to='/blogs' className='text-white text-decoration-none hover-underline'>
                    Blog
                  </Link>
                  <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                  <span className='tw-opacity-90'>{blog.cover}</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-120'>
        <div className='container container-two'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <BlogContent blocks={blog.content} />
              <div className='tw-mt-6'>
                <Link
                  to='/blogs'
                  className='text-main-600 fw-semibold tw-text-sm d-inline-flex align-items-center tw-gap-2 hover-text-main-700'
                >
                  <i className='ph-bold ph-arrow-left tw-text-base' />
                  Back to all blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBannerOne />
      <FooterOne />
    </>
  );
};

export default BlogDetailsPage;
