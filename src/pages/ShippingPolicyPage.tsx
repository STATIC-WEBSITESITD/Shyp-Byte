import { Link } from "react-router-dom";
import type { FC } from "react";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";

const ShippingPolicyPage: FC = () => {
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
                  <span className='d-inline-block'>Shipping</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>&amp; Terms</span>
                </h1>
                <p className='text-white tw-text-lg fw-medium tw-mt-4 splitTextStyleOne tw-opacity-90'>
                  Shipping, refund and terms of use
                </p>
                <nav className='tw-mt-4 tw-text-sm text-white' aria-label='Breadcrumb'>
                  <Link to='/' className='text-white text-decoration-none hover-underline'>
                    Home
                  </Link>
                  <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                  <span className='tw-opacity-90'>Shipping &amp; Terms</span>
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
                {/* Shipping Policy */}
                <h2 className='h4 fw-semibold tw-mb-4'>Shipping Policy</h2>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  Shipping policy cannot be defined since it is a courier service. It will differ
                  from location to location.
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  <strong>For Domestic shipping:</strong> The shipping duration will vary from a
                  minimum of 1 to 7 working days.
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  <strong>For International:</strong> The shipping duration will vary from a minimum
                  of 1 to 15 working days.
                </p>

                {/* Refund Policy */}
                <h2 className='h4 fw-semibold tw-mt-6 tw-mb-4'>Refund Policy</h2>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  Refunds will not be entertained. However, should the management feel that refund is
                  imminent due to some unforeseen circumstances refund may be processed and that too
                  within 10 days of subscribing to the service. Refund amount however will vary from
                  case-to-case basis.
                </p>

                {/* Terms of Use */}
                <h2 className='h4 fw-semibold tw-mt-6 tw-mb-4'>Terms of Use</h2>
                <p className='tw-text-body tw-leading-relaxed tw-mb-4'>
                  Terms &amp; Conditions of use of the ShypByte website
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  The following terms and conditions govern the use of the website www.shypbyte.com
                  (&quot;ShypByte website&quot;) of ShypByte Logistics Private Limited
                  (&quot;ShypByte&quot;), including all sections and services available on the
                  ShypByte website. The viewing or use of this site will constitute your agreement,
                  on behalf of yourself and the entity you represent (hereinafter collectively
                  &quot;You&quot; or &quot;Your&quot;), to all of the terms and conditions provided
                  below.
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  ShypByte may make future changes or modifications to such terms and conditions at
                  any time without notice, and any subsequent viewing or use of the ShypByte website
                  will constitute the user&apos;s agreement to the changes and modifications.
                </p>

                <h3 className='h5 fw-semibold tw-mt-5 tw-mb-3'>Definitions</h3>
                <p className='tw-text-body tw-leading-relaxed tw-mb-2'>
                  &quot;Content&quot; means information, graphics, products, features, functionality,
                  services, and links on the ShypByte website.
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-4'>
                  &quot;ShypByte&quot; means ShypByte Logistics Pvt. Ltd. having its registered office
                  at: Unit No 48, Adarsh Ind Estate, Chakala Sahar Road, Andheri East, Mumbai, Mumbai
                  Suburban, Maharashtra - 400099.
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  &quot;you&quot; means yourself and/or the entity that you represent.
                </p>

                <h3 className='h5 fw-semibold tw-mt-5 tw-mb-3'>Use of the ShypByte website</h3>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  The ShypByte website is provided solely for the use of current and potential
                  ShypByte customers to interact with ShypByte and may not be used by any other
                  person or entity, or for any other purpose.
                </p>

                <h3 className='h5 fw-semibold tw-mt-5 tw-mb-3'>Disclaimer of Warranty</h3>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  Use of the ShypByte website and its Content is at your sole risk. The ShypByte
                  website will in no event be liable to you or any person or entity claiming through
                  you for any direct, indirect, consequential, incidental or other damages under any
                  theory of law for any errors in or the use of or inability to use the ShypByte
                  website and its content.
                </p>

                <h3 className='h5 fw-semibold tw-mt-5 tw-mb-3'>Limitation of Liability</h3>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  Notwithstanding the above, to the extent permitted by applicable law, you agree that
                  in no event shall ShypByte&apos;s total liability for any damages (direct or
                  otherwise) or loss regardless of the form of action or claim, whether in contract,
                  tort or otherwise, exceed INR100/- (Rupees One Hundred only) for domestic
                  consignments.
                </p>

                <h3 className='h5 fw-semibold tw-mt-5 tw-mb-3'>Note</h3>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  For any queries regarding these policies, please contact our customer support team.
                </p>

                <h3 className='h5 fw-semibold tw-mt-5 tw-mb-3'>Indemnity</h3>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  You agree to defend, indemnify and hold harmless ShypByte and its affiliate
                  companies and their respective officers, directors, employees, agents and
                  representatives from any and all claims arising out of your breach of any of these
                  terms and conditions, and any of your activities conducted in connection with the
                  ShypByte website.
                </p>

                <h3 className='h5 fw-semibold tw-mt-5 tw-mb-3'>ShypByte Conditions of Carriage</h3>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  The terms and conditions for using the ShypByte website and related services are
                  contained in the most current version of the ShypByte Conditions of Carriage, which
                  is available on request. The most current version of the ShypByte Conditions of
                  Carriage will be applicable in the event of any conflict between any ShypByte
                  services or related service information on the ShypByte website.
                </p>

                <h3 className='h5 fw-semibold tw-mt-5 tw-mb-3'>Links to other web sites</h3>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  There are links on the ShypByte website that allows you to visit the sites of third
                  parties. Neither these sites nor the companies to whom they belong are controlled
                  by ShypByte. ShypByte makes no representations concerning the information provided
                  or made available on such sites nor the quality or acceptability of the products or
                  services offered by any persons or entities referenced in any such sites.
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  ShypByte has not tested and makes no representations regarding the correctness,
                  performance or quality of any software found at any such sites. You should research
                  and assess the risks which may be involved in accessing and using any software on
                  the Internet before using it.
                </p>

                <h3 className='h5 fw-semibold tw-mt-5 tw-mb-3'>Controlling Law and Severability</h3>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  This Agreement and your use of the ShypByte website is governed by and construed in
                  accordance with the laws of the Republic of India, excluding its conflict of
                  law&apos;s provisions.
                </p>
                <p className='tw-text-body tw-leading-relaxed tw-mb-5'>
                  If for any reason a court of competent jurisdiction finds any provision of this
                  Agreement, or a portion thereof, to be unenforceable, that provision shall be
                  enforced to the maximum extent permissible.
                </p>
                <p className='tw-text-body tw-leading-relaxed'>
                  Any action with respect to the ShypByte website or this Agreement must be
                  instituted within one year after the claim or cause of action has risen and must be
                  brought in a court of competent jurisdiction within the territory of the courts at
                  Bangalore, Karnataka, India.
                </p>

                <p className='tw-text-body tw-leading-relaxed tw-mt-6 tw-pt-4' style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
                  For any queries regarding these policies, please contact our customer support team
                  at{" "}
                  <a href='mailto:info@shypbyte.com' className='text-decoration-none'>
                    info@shypbyte.com
                  </a>{" "}
                  or call{" "}
                  <a href='tel:+917304617614' className='text-decoration-none'>
                    +91 7304617614
                  </a>
                  .
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

export default ShippingPolicyPage;
