import { Link } from "react-router-dom";
import type { FC } from "react";

const linkClass =
  "text-white tw-text-sm tw-leading-relaxed hover-text-main-600 tw-duration-200 d-inline-block tw-py-1.5 tw-opacity-90";

const socialLinks = [
  { href: "https://www.facebook.com", label: "Facebook", icon: "ph-bold ph-facebook-logo" },
  { href: "https://x.com", label: "X (Twitter)", icon: "ph-bold ph-x-logo" },
  { href: "https://www.instagram.com", label: "Instagram", icon: "ph-bold ph-instagram-logo" },
  { href: "https://www.linkedin.com", label: "LinkedIn", icon: "ph-bold ph-linkedin-logo" },
] as const;

const FooterOne: FC = () => {
  return (
    <footer
      className='footer-one position-relative z-1 mt-auto overflow-hidden'
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #141414 50%, #111 100%)" }}
    >
      {/* Primary color accent line */}
      <div className='tw-h-1' style={{ background: "var(--main-600, #005eff)" }} aria-hidden />
      <div className='container container-two tw-pt-14 tw-pb-10'>
        <div className='row gy-5 gx-xl-5'>
          <div className='col-xl-4 col-lg-4 col-sm-6'>
            <Link to='/' className='d-inline-block tw-mb-5'>
              <img src='/assets/images/logo.png' alt='Shyp Byte Logo' className='max-w-200-px' />
            </Link>
            <p className='text-white max-w-320-px tw-leading-relaxed tw-text-base tw-opacity-90 tw-mb-6'>
              Shyp Byte transforms international courier service with smart
              technology. We provide seamless worldwide shipping and door to
              door delivery to 220+ countries making international shipping
              effortless.
            </p>
            <div className='d-flex align-items-center tw-gap-3'>
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer-one__social-link text-white tw-w-11 tw-h-11 rounded-lg d-flex align-items-center justify-content-center tw-text-xl border border-white/20 tw-duration-200'
                  style={{ color: "inherit" }}
                  aria-label={label}
                >
                  <i className={icon} style={{ fontSize: "1.25rem", color: "inherit" }} />
                </a>
              ))}
            </div>
          </div>
          <div className='col-xl-2 col-lg-2 col-sm-6'>
            <h6 className='fw-semibold text-white tw-mb-5 tw-text-sm tw-uppercase tw-tracking-wider' style={{ opacity: 1 }}>
              Quick Links
            </h6>
            <ul className='list-unstyled d-flex flex-column tw-gap-2 mb-0'>
              <li><Link to='/' className={linkClass}>Home</Link></li>
              <li><Link to='/about' className={linkClass}>About Us</Link></li>
              <li><Link to='/tracking' className={linkClass}>Tracking</Link></li>
              <li><Link to='/blogs' className={linkClass}>Blogs</Link></li>
              <li><Link to='/contact' className={linkClass}>Contact Us</Link></li>
              <li><Link to='/privacy-policy' className={linkClass}>Privacy Policy</Link></li>
              <li><Link to='/shipping-policy' className={linkClass}>Shipping &amp; Terms</Link></li>
            </ul>
          </div>
          <div className='col-xl-2 col-lg-2 col-sm-6'>
            <h6 className='fw-semibold text-white tw-mb-5 tw-text-sm tw-uppercase tw-tracking-wider' style={{ opacity: 1 }}>
              Our Products
            </h6>
            <ul className='list-unstyled d-flex flex-column tw-gap-2 mb-0'>
              <li><Link to='/product/ecommerce-business' className={linkClass}>E-Commerce Business</Link></li>
              <li><Link to='/product/d2c-brand' className={linkClass}>D2C Brand</Link></li>
              <li><Link to='/product/individual-customer' className={linkClass}>Individual Customer</Link></li>
              <li><Link to='/product/b2b-shippers' className={linkClass}>B2B Shippers</Link></li>
            </ul>
          </div>
          <div className='col-xl-4 col-lg-4 col-sm-6'>
            <h6 className='fw-semibold text-white tw-mb-5 tw-text-sm tw-uppercase tw-tracking-wider' style={{ opacity: 1 }}>
              Contact Us
            </h6>
            <ul className='list-unstyled d-flex flex-column tw-gap-4 mb-0'>
              <li className='d-flex align-items-center tw-gap-3'>
                <span
                  className='text-white tw-w-10 tw-h-10 rounded-lg d-flex align-items-center justify-content-center flex-shrink-0 tw-text-lg'
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <i className='ph ph-envelope-simple' />
                </span>
                <a
                  href='mailto:info@shypbyte.com'
                  className='text-white tw-text-sm tw-opacity-90 hover-text-main-600 tw-duration-200 text-decoration-none'
                >
                  info@shypbyte.com
                </a>
              </li>
              <li className='d-flex align-items-center tw-gap-3'>
                <span
                  className='text-white tw-w-10 tw-h-10 rounded-lg d-flex align-items-center justify-content-center flex-shrink-0 tw-text-lg'
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <i className='ph ph-phone' />
                </span>
                <a
                  href='tel:+917304617614'
                  className='text-white tw-text-sm tw-opacity-90 hover-text-main-600 tw-duration-200 text-decoration-none'
                >
                  +91 7304617614
                </a>
              </li>
              <li className='d-flex align-items-start tw-gap-3'>
                <span
                  className='text-white tw-w-10 tw-h-10 rounded-lg d-flex align-items-center justify-content-center flex-shrink-0 tw-text-lg tw-mt-0.5'
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <i className='ph ph-map-pin' />
                </span>
                <span className='text-white tw-text-sm tw-leading-relaxed tw-opacity-90'>
                  Unit No 48, Adarsh Ind Estate, Chakala Sahar Road, Andheri
                  East, Mumbai, Mumbai Suburban, Maharashtra - 400099
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container container-two'>
        <div className='tw-pt-6 tw-pb-6' style={{ borderTop: '1px solid rgba(255,255,255,0.6)' }}>
          <div className='d-flex align-items-center justify-content-center flex-wrap tw-gap-2'>
            <p className='text-white mb-0 tw-text-sm tw-opacity-90'>
              Copyright &copy; {new Date().getFullYear()} Shyp Byte. Powered by{" "}
              <a
                href='https://www.itdgrowthlabs.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover-text-main-600 tw-duration-200 text-decoration-underline'
              >
                ITD Growthlabs
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
