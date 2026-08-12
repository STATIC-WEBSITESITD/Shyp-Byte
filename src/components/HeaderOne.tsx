import { useEffect, useState, type FC } from "react";
import { throttle } from "lodash";
import { Link, useLocation } from "react-router-dom";
import MENU from "../data/menu.json";
import type { MenuItem, SubMenuItem } from "../types/menu";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.shypbyte.customer";

const PlayStoreButton: FC<{ className?: string }> = ({ className = "" }) => (
  <a
    href={PLAY_STORE}
    target='_blank'
    rel='noopener noreferrer'
    className={`hover--translate-y-1 active--translate-y-scale-9 d-inline-block ${className}`.trim()}
  >
    <img
      src='/assets/images/icons/store-two2.png'
      alt='Get it on Google Play'
      className='tw-h-10 w-auto'
    />
  </a>
);

const HeaderOne: FC = () => {
  const { pathname } = useLocation();
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const y = window.scrollY;
      setScroll(y >= 150);
    }, 150);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const [openIndex, setOpenIndex] = useState<number>(-1);

  
  const itemIsActive = (item: MenuItem): boolean => {
    if (item.to && item.to === pathname) return true;

    if (item.children) {
      return item.children.some((child: SubMenuItem) => child.to === pathname);
    }

    return false;
  };

  return (
    <>
      <div className='overlay'></div>
      <div className={`side-overlay ${mobileMenu && "active"}`}></div>
      <header
        className={`header bg-white transition-all ${
          scroll && "fixed-header"
        } `}
      >
        <div className='container container-two'>
          <nav className='d-flex align-items-center justify-content-between'>
            
            <div className='logo'>
              <Link
                to='/'
                className='link hover--translate-y-1 active--translate-y-scale-9'
              >
                <img
                  src='/assets/images/logo.png'
                  alt='Logo'
                  className='max-w-200-px'
                />
              </Link>
            </div>

            
            

            <div className='header-menu d-xl-block d-none'>
              
              <ul className='nav-menu d-xl-flex align-items-center tw-gap-7'>
                {MENU.map((item) => {
                  const active = itemIsActive(item);

                  return (
                    <li
                      key={item.label}
                      className={`nav-menu__item ${
                        item.children
                          ? "nav-menu__item has-submenu position-relative"
                          : ""
                      } ${active ? "activePage" : ""}`}
                    >
                      {item.children ? (
                        <Link
                          to='#'
                          className='nav-menu__link hover--translate-y-1 tw-pe-5 text-heading tw-py-9 fw-semibold w-100'
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <Link
                          to={item.to}
                          className='nav-menu__link hover--translate-y-1 text-heading tw-py-9 fw-semibold w-100'
                        >
                          {item.label}
                        </Link>
                      )}

                      
                      {item.children && (
                        <ul className='nav-submenu scroll-sm position-absolute tw-start-0 top-100 tw-w-max bg-white tw-rounded-md overflow-y-auto tw-p-2 tw-mt-4 tw-duration-200 tw-z-99'>
                          {item.children.map((sub) => {
                            const isExternal = sub.to.startsWith("http");
                            return (
                              <li
                                key={sub.to}
                                className={`nav-submenu__item d-block tw-rounded tw-duration-200 position-relative ${
                                  sub.to === pathname ? "activePage" : ""
                                }`}
                              >
                                {isExternal ? (
                                  <a
                                    href={sub.to}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 '
                                  >
                                    {sub.label}
                                  </a>
                                ) : (
                                  <Link
                                    to={sub.to}
                                    className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 '
                                  >
                                    {sub.label}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
              
            </div>
            
            
            <div className='d-flex align-items-center tw-gap-6'>
              <div className='d-sm-inline-flex d-none'>
                <PlayStoreButton />
              </div>
              <button
                onClick={handleMobileMenu}
                type='button'
                className='toggle-mobileMenu leading-none d-xl-none text-neutral-800 tw-text-9'
              >
                <i className='ph ph-list' />
              </button>
            </div>
            
          </nav>
        </div>
      </header>

      
      <>
        <div
          className={`mobile-menu d-xl-none d-block scroll-sm position-fixed bg-white tw-w-300-px tw-h-screen overflow-y-auto tw-p-6 tw-z-999 tw--translate-x-full tw-pb-68 ${
            mobileMenu && "active"
          }`}
        >
          <button
            onClick={handleMobileMenu}
            type='button'
            className='close-button position-absolute tw-end-0 top-0 tw-me-2 tw-mt-2 tw-w-605 tw-h-605 rounded-circle d-flex justify-content-center align-items-center text-neutral-900 bg-neutral-200 hover-bg-neutral-900 hover-text-white'
          >
            <i className='ph ph-x' />
          </button>
          <div className='mobile-menu__inner'>
            <Link to='/' className='mobile-menu__logo'>
              <img src='/assets/images/logo.png' alt='Logo' />
            </Link>

            <div className='mobile-menu__menu'>
              <ul className='nav-menu d-xl-flex align-items-center nav-menu--mobile d-block tw-mt-8'>
                {MENU.map((item, idx) => {
                  const active = itemIsActive(item);
                  const open = idx === openIndex || active;

                  return (
                    <li
                      key={item.label}
                      className={`nav-menu__item ${
                        item.children ? "has-submenu position-relative" : ""
                      } ${active ? "activePage" : ""}`}
                    >
                      {item.children ? (
                        <button
                          type='button'
                          onClick={() => setOpenIndex(open ? -1 : idx)}
                          className='nav-menu__link  tw-pe-5 text-heading tw-py-9 fw-semibold w-100 text-start bg-transparent border-0'
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          to={item.to}
                          className='nav-menu__link  text-heading tw-py-9 fw-semibold w-100'
                        >
                          {item.label}
                        </Link>
                      )}

                      
                      {item.children && (
                        <ul
                          className={`nav-submenu scroll-sm position-absolute tw-start-0 top-100 tw-w-max bg-white tw-rounded-md overflow-y-auto tw-p-2 tw-mt-4 tw-duration-200 tw-z-99 ${
                            open ? "d-block" : "d-none"
                          }`}
                        >
                          {item.children.map((sub) => {
                            const isExternal = sub.to.startsWith("http");
                            return (
                              <li
                                key={sub.to}
                                className={`nav-submenu__item d-block tw-rounded tw-duration-200 position-relative ${
                                  sub.to === pathname ? "activePage" : ""
                                }`}
                              >
                                {isExternal ? (
                                  <a
                                    href={sub.to}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 '
                                  >
                                    {sub.label}
                                  </a>
                                ) : (
                                  <Link
                                    to={sub.to}
                                    className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 '
                                  >
                                    {sub.label}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <PlayStoreButton className='d-sm-none d-inline-block tw-mt-6' />
          </div>
        </div>
      </>
    </>
  );
};

export default HeaderOne;
