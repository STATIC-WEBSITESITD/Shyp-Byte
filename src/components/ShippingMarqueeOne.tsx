import type { FC } from "react";
import Marquee from "react-fast-marquee";
import SectionHead from "./SectionHead";

const steps = [
  { icon: "ph-package", label: "Book Shipment" },
  { icon: "ph-warehouse", label: "Warehouse Pickup" },
  { icon: "ph-barcode", label: "Label & Sort" },
  { icon: "ph-airplane-takeoff", label: "In Transit" },
  { icon: "ph-globe-hemisphere-west", label: "Customs Clearance" },
  { icon: "ph-truck", label: "Last Mile Delivery" },
  { icon: "ph-check-circle", label: "Delivered" },
] as const;

const ShippingMarqueeOne: FC = () => {
  return (
    <section className='shipping-journey py-120 section-flow-muted'>
      <div className='container'>
        <SectionHead
          eyebrow='Shipping Journey'
          title={
            <>
              <span className='d-inline-block'>Book,</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block'>Pickup,</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block'>Transit</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>
                &amp; Delivered
              </span>
            </>
          }
          description='Every Shyp Byte shipment follows one clear path — from booking in the app to doorstep delivery abroad.'
        />
      </div>

      <div className='shipping-journey__track' data-aos='fade-up' data-aos-delay={80}>
        <Marquee
          speed={36}
          gradient
          gradientColor='#f5f7fb'
          gradientWidth={64}
          pauseOnHover
          autoFill
        >
          {steps.map((step) => (
            <div key={step.label} className='shipping-journey__chip'>
              <span className='shipping-journey__icon'>
                <i className={`ph-bold ${step.icon}`} />
              </span>
              <span className='shipping-journey__label'>{step.label}</span>
              <i className='ph-bold ph-arrow-right shipping-journey__arrow' />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ShippingMarqueeOne;
