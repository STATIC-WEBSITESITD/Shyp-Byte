import { Link } from "react-router-dom";
import type { FC } from "react";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";

const PrivacyPolicyPage: FC = () => {
  return (
    <>
      <TopHeaderOne />
      <HeaderOne />
      <section
        className='banner tw-py-100-px overflow-hidden position-relative'
        style={{
          background: "url(/assets/images/contact-bg.jpg) no-repeat center/cover",
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
                  <span className='d-inline-block'>Privacy</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>Policy</span>
                </h1>
                <p className='text-white tw-text-lg fw-medium tw-mt-4 splitTextStyleOne tw-opacity-90'>
                  How we collect, use and protect your information
                </p>
                <nav className='tw-mt-4 tw-text-sm text-white' aria-label='Breadcrumb'>
                  <Link to='/' className='text-white text-decoration-none hover-underline'>
                    Home
                  </Link>
                  <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                  <span className='tw-opacity-90'>Privacy Policy</span>
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
              <div className='tw-prose tw-prose-lg tw-max-w-none'>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  ShypByte Logistics Pvt. Ltd. (&quot;ShypByte&quot;) understands the importance of
                  protecting the privacy of users of the ShypByte website www.shypbyte.com. The
                  information collected on the ShypByte website is used to market and improve the
                  services of ShypByte and its subsidiaries, to improve the content and services on
                  the ShypByte web site and make it easier to use and more appropriate to individual
                  users and to contact its users with updates to the web site or for other marketing
                  purposes. ShypByte may use this information, with the users&apos; permission, for
                  the above purposes.
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  ShypByte never shares any information obtained on or from the ShypByte website with
                  any other organization, and will not do so in future, unless required by law.
                  ShypByte will not sell information obtained through the ShypByte website to any
                  party or parties.
                </p>

                <h2 className='h4 fw-semibold tw-mt-6 tw-mb-3'>Information Collection and Use</h2>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  Certain areas of the ShypByte website, including but not limited to the sections on
                  &apos;tracking&apos;, &apos;service guide&apos;, &apos;franchisee&apos;, &apos;corporate
                  solutions&apos;, &apos;careers&apos; and &apos;e-solutions&apos; require registration
                  or a password for access. Information obtained from registered users of these areas
                  may also be used for ShypByte&apos;s marketing purposes, and cookies may be used in
                  those and other areas, as is described in this privacy policy.
                </p>

                <h2 className='h4 fw-semibold tw-mt-6 tw-mb-3'>Cookies and Security</h2>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  A cookie is a series of data characters that, when programmed into a web site, is
                  placed by the web server into the browser&apos;s application folder on the user&apos;s
                  computer. Once placed onto the user&apos;s computer, the cookie will allow the web site
                  to recognize you as a unique user of the website.
                </p>

                <h2 className='h4 fw-semibold tw-mt-6 tw-mb-3'>Security Alert — Spam Mails</h2>
                <p className='tw-text-body tw-leading-relaxed tw-mb-3'>
                  <strong>Fraudulent Email Alert:</strong>
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  You may be receiving reports of fraudulent emails with the subject lines &quot;Shipping
                  Conformation,&quot; &quot;Verify Info,&quot; &quot;Promotion Gifts and Cheques&quot;,
                  &quot;Some Important Information Is Missing&quot; and &quot;Please Fulfil The
                  Documents Attached To Verify Your Identity.&quot;
                </p>

                <h2 className='h4 fw-semibold tw-mt-6 tw-mb-3'>Contact Information</h2>
                <p className='tw-text-body tw-leading-relaxed tw-mb-2'>
                  <strong>Registered Office:</strong>
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-4'>
                  Unit No 48, Adarsh Ind Estate,
                  <br />
                  Chakala Sahar Road, Andheri East,
                  <br />
                  Mumbai, Mumbai Suburban, Maharashtra - 400099
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-2'>
                  <strong>Email:</strong>{" "}
                  <a href='mailto:info@shypbyte.com' className='text-decoration-none'>
                    info@shypbyte.com
                  </a>
                </p>
                <p className='tw-text-body tw-leading-relaxed'>
                  <strong>Phone:</strong>{" "}
                  <a href='tel:+917304617614' className='text-decoration-none'>
                    +91 7304617614
                  </a>
                </p>
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

export default PrivacyPolicyPage;
