import type { FC } from "react";
import { Link } from "react-router-dom";

interface FeatureBlock {
  tag: string;
  title: string;
  titleHighlight: string;
  paragraphs: string[];
  ctaLabel: string;
  ctaTo: string;
  image: string;
  cardVariant: "customs" | "kyc" | "feature-3" | "feature-4";
}

const features: FeatureBlock[] = [
  {
    tag: "International",
    title: "Global Shipping",
    titleHighlight: "Simplified",
    paragraphs: [
      "Shypbyte helps businesses and online sellers ship products to customers worldwide without complicated logistics.",
      "From pickup to customs clearance and final delivery, our platform manages the entire international shipping process so you can focus on growing your business.",
    ],
    ctaLabel: "Start Shipping Globally",
    ctaTo: "/register",
    image: "/assets/images/global-shipping.png",
    cardVariant: "customs",
  },
  {
    tag: "E-Commerce",
    title: "Made for",
    titleHighlight: "Online Sellers",
    paragraphs: [
      "Shypbyte supports ecommerce brands by simplifying order fulfillment, international courier management, and shipment tracking.",
      "Instead of managing multiple logistics providers, businesses can handle everything from one dashboard designed for ecommerce shipping and cross-border delivery.",
    ],
    ctaLabel: "Start Ecommerce Shipping",
    ctaTo: "/register",
    image: "/assets/images/online-sellers.png",
    cardVariant: "kyc",
  },
  {
    tag: "Pickup",
    title: "Easy Pickup",
    titleHighlight: "Service",
    paragraphs: [
      "Shypbyte offers doorstep pickup across India, so your shipments can be collected directly from your home, office, or warehouse.",
      "Once picked up, we handle everything — international courier booking, export documentation, and delivery to your customer's doorstep anywhere in the world.",
    ],
    ctaLabel: "Schedule a Pickup",
    ctaTo: "/register",
    image: "/assets/images/easy-pickup.jpg",
    cardVariant: "feature-3",
  },
  {
    tag: "Delivery",
    title: "Smart Global",
    titleHighlight: "Delivery",
    paragraphs: [
      "Shypbyte connects your shipments with trusted global courier partners to ensure smooth and timely delivery.",
      "Our system automatically chooses the best shipping option based on destination, delivery time, and cost, helping businesses save money while maintaining reliable delivery.",
      "With real-time updates and shipment visibility, you always know where your package is.",
    ],
    ctaLabel: "Explore Global Shipping",
    ctaTo: "/register",
    image: "/assets/images/smart-global-delivery.jpg",
    cardVariant: "feature-4",
  },
];

const ShippingFeaturesOne: FC = () => {
  return (
    <>
      {features.map((block, idx) => {
        const imageFirst = idx % 2 !== 0;
        const cardClass = `about-feature-card about-feature-card--${block.cardVariant}`;

        const textCol = (
          <div
            className={`col-lg-6 tw-p-8 ${imageFirst ? "tw-ps-lg-4 order-lg-2" : "tw-pe-lg-6 order-lg-1"}`}
            data-aos={imageFirst ? "fade-left" : "fade-right"}
            data-aos-duration={600}
          >
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
              {block.tag}
            </span>
            <h2 className='tw-text-2xl fw-bold text-heading tw-mb-3 tw-mt-3'>
              <span className='d-inline-block'>{block.title}</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block text-main-600'>{block.titleHighlight}</span>
            </h2>
            <div className='tw-mt-6 d-flex flex-column tw-gap-4 tw-mb-8'>
              {block.paragraphs.map((p, i) => (
                <p key={i} className='text-neutral-500 tw-leading-relaxed mb-0'>
                  {p}
                </p>
              ))}
            </div>
            <Link
              to={block.ctaTo}
              className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill'
              data-block='button'
            >
              <span className='button__flair' />
              <span className='button__label'>{block.ctaLabel}</span>
            </Link>
          </div>
        );

        const imageCol = (
          <div
            className={`col-lg-6 tw-p-8 ${imageFirst ? "tw-pe-lg-4 order-lg-1" : "tw-ps-lg-4 order-lg-2"}`}
            data-aos={imageFirst ? "fade-right" : "fade-left"}
            data-aos-duration={600}
          >
            <div className='tw-rounded-3xl overflow-hidden h-100 tw-min-h-400-px'>
              <img
                src={block.image}
                alt={`${block.title} ${block.titleHighlight}`}
                className='w-100 h-100 object-fit-cover'
              />
            </div>
          </div>
        );

        // const sectionBg = idx % 2 === 0 ? "section-bg-one" : "";
        return (
          <section className={''} key={idx}>
            <div className={cardClass}>
              <div className='container py-120'>
                <div className='row g-0 align-items-center'>
                  {textCol}
                  {imageCol}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ShippingFeaturesOne;
