import type { FC } from "react";
import { Link } from "react-router-dom";
import SectionHead from "./SectionHead";

type OfferCard = {
  number: string;
  icon: string;
  title: string;
  description: string;
  ctaTo: string;
  image: string;
};

const offers: OfferCard[] = [
  {
    number: "01",
    icon: "ph-storefront",
    title: "E-Commerce Business",
    description:
      "Manage orders, labels, and tracking from one platform built for online sellers.",
    ctaTo: "/offer/ecommerce-business",
    image: "/assets/images/ecommerce-business.jpg",
  },
  {
    number: "02",
    icon: "ph-package",
    title: "D2C Brand",
    description:
      "Ship warehouse-to-customer worldwide with clear rates and end-to-end visibility.",
    ctaTo: "/offer/d2c-brand",
    image: "/assets/images/d2c-brand.jpg",
  },
  {
    number: "03",
    icon: "ph-user",
    title: "Individual Customer",
    description:
      "Send parcels to family abroad with easy booking and doorstep pickup.",
    ctaTo: "/offer/individual-customer",
    image: "/assets/images/individual-customers.jpg",
  },
  {
    number: "04",
    icon: "ph-buildings",
    title: "B2B Shippers",
    description:
      "Bulk and export logistics with trusted partners and dedicated support.",
    ctaTo: "/offer/b2b-shippers",
    image: "/assets/images/b2b-shippers.jpg",
  },
];

const StackCardsOne: FC = () => {
  return (
    <section className='solutions-offer py-120 section-flow-white'>
      <div className='container'>
        <SectionHead
          eyebrow='We Offer'
          title={
            <>
              <span className='d-inline-block'>E-Commerce,</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block'>D2C,</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block'>Individual</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>
                &amp; B2B Shippers
              </span>
            </>
          }
          description='Shipping solutions for every business — pick the flow that fits how you ship.'
        />

        <div className='row g-4'>
          {offers.map((offer, index) => (
            <div
              key={offer.ctaTo}
              className='col-md-6 col-xl-3'
              data-aos='fade-up'
              data-aos-duration={600 + index * 80}
            >
              <Link to={offer.ctaTo} className='solutions-offer__card text-decoration-none d-block h-100'>
                <div className='solutions-offer__media'>
                  <img src={offer.image} alt={offer.title} className='solutions-offer__img' />
                  <div className='solutions-offer__overlay' />
                  <span className='solutions-offer__num'>{offer.number}</span>
                </div>
                <div className='solutions-offer__body'>
                  <span className='solutions-offer__icon'>
                    <i className={`ph-bold ${offer.icon}`} />
                  </span>
                  <div className='solutions-offer__copy'>
                    <h4 className='solutions-offer__title'>{offer.title}</h4>
                    <p className='solutions-offer__desc'>{offer.description}</p>
                  </div>
                  <span className='solutions-offer__cta'>
                    Explore
                    <i className='ph-bold ph-arrow-right' />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackCardsOne;
