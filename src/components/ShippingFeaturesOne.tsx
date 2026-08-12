import type { FC } from "react";
import PrimaryButton from "./PrimaryButton";
import SectionHead from "./SectionHead";

type Capability = {
  step: string;
  tag: string;
  icon: string;
  title: string;
  titleHighlight: string;
  description: string;
  points: string[];
  accent: string;
};

const capabilities: Capability[] = [
  {
    step: "01",
    tag: "International",
    icon: "ph-globe-hemisphere-west",
    title: "Global Shipping",
    titleHighlight: "Simplified",
    description:
      "Ship worldwide without juggling partners — pickup to customs to doorstep in one flow.",
    points: ["220+ countries", "Customs-ready docs", "Live tracking"],
    accent: "#005eff",
  },
  {
    step: "02",
    tag: "E-Commerce",
    icon: "ph-storefront",
    title: "Made for",
    titleHighlight: "Online Sellers",
    description:
      "Fulfillment, booking, and tracking in one place for stores that ship cross-border.",
    points: ["Order-ready labels", "Multi-channel fit", "Clear rates"],
    accent: "#7c3aed",
  },
  {
    step: "03",
    tag: "Pickup",
    icon: "ph-map-pin",
    title: "Easy Pickup",
    titleHighlight: "Service",
    description:
      "Doorstep collection across India from home, office, or warehouse — then we handle the rest.",
    points: ["Pan-India pickup", "Flexible slots", "App booking"],
    accent: "#0c848d",
  },
  {
    step: "04",
    tag: "Delivery",
    icon: "ph-truck",
    title: "Smart Global",
    titleHighlight: "Delivery",
    description:
      "Trusted courier partners, smarter options, and visibility until it reaches the door.",
    points: ["Partner network", "Time & cost fit", "Door-to-door"],
    accent: "#ea580c",
  },
];

const ShippingFeaturesOne: FC = () => {
  return (
    <section className='capabilities-flow py-120 section-flow-muted'>
      <div className='container'>
        <SectionHead
          eyebrow='Capabilities'
          title={
            <>
              <span className='d-inline-block'>International,</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block'>E-Commerce,</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>
                Pickup &amp; Delivery
              </span>
            </>
          }
          description='Four building blocks of every Shyp Byte shipment — clear before you book, reliable after you ship.'
        />

        <div className='row g-4'>
          {capabilities.map((item, index) => (
            <div
              key={item.tag}
              className='col-lg-3 col-sm-6'
              data-aos='fade-up'
              data-aos-duration={600 + index * 70}
            >
              <article
                className='capabilities-flow__card'
                style={{ ["--cap-accent" as string]: item.accent }}
              >
                <div className='capabilities-flow__visual' aria-hidden>
                  <span className='capabilities-flow__watermark'>{item.step}</span>
                  <span className='capabilities-flow__orb' />
                  <span className='capabilities-flow__icon-lg'>
                    <i className={`ph-bold ${item.icon}`} />
                  </span>
                </div>

                <div className='capabilities-flow__body'>
                  <div className='d-flex align-items-center tw-gap-3 tw-mb-3 flex-wrap'>
                    <span className='capabilities-flow__step-chip'>{item.step}</span>
                    <span className='capabilities-flow__tag'>{item.tag}</span>
                  </div>
                  <h4 className='capabilities-flow__title'>
                    {item.title}{" "}
                    <span className='text-main-600'>{item.titleHighlight}</span>
                  </h4>
                  <p className='capabilities-flow__desc'>{item.description}</p>
                  <ul className='capabilities-flow__points list-unstyled mb-0'>
                    {item.points.map((point) => (
                      <li key={point}>
                        <i className='ph-bold ph-check-circle' />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className='text-center tw-mt-11' data-aos='fade-up'>
          <PrimaryButton />
        </div>
      </div>
    </section>
  );
};

export default ShippingFeaturesOne;
