import { type FC } from "react";
import Marquee from "react-fast-marquee";

const steps = [
  { icon: "ph-package", label: "Book Shipment" },
  { icon: "ph-warehouse", label: "Warehouse Pickup" },
  { icon: "ph-barcode", label: "Label & Sort" },
  { icon: "ph-airplane-takeoff", label: "In Transit" },
  { icon: "ph-globe-hemisphere-west", label: "Customs Clearance" },
  { icon: "ph-truck", label: "Last Mile Delivery" },
  { icon: "ph-check-circle", label: "Delivered" },
];

const TopHeaderOne: FC = () => {
  return (
    // <div className='bg-main-600 tw-py-205 d-sm-block d-none'>
    //   <div className='container'>
    //     <div className='d-flex justify-content-center'>
    //       <p className='text-white bg-white-13 d-inline-block tw-py-1 tw-px-5 rounded-pill fw-normal'>
    //         Shyp Byte transforms international courier service with smart technology.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-main-600 tw-py-205 d-sm-block d-none overflow-hidden">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {steps.map((step, i) => (
          <div key={i} className="d-flex align-items-center text-white mx-4">
            <span className="d-flex align-items-center tw-gap-2">
              <i className={`ph ${step.icon} tw-text-lg`} style={{ opacity: 0.85 }} />
              <span className="fw-medium tw-text-sm text-uppercase" style={{ letterSpacing: "0.5px" }}>
                {step.label}
              </span>
            </span>
            {i < steps.length - 1 && (
              <i
                className="ph ph-arrow-right tw-text-xs mx-3"
                style={{ opacity: 0.5 }}
              />
            )}
          </div>
        ))}

        <span className="mx-4 d-inline-block" style={{ width: 1, height: 14, background: "rgba(255,255,255,0.3)" }} />

        {steps.map((step, i) => (
          <div key={`dup-${i}`} className="d-flex align-items-center text-white mx-4">
            <span className="d-flex align-items-center tw-gap-2">
              <i className={`ph ${step.icon} tw-text-lg`} style={{ opacity: 0.85 }} />
              <span className="fw-medium tw-text-sm text-uppercase" style={{ letterSpacing: "0.5px" }}>
                {step.label}
              </span>
            </span>
            {i < steps.length - 1 && (
              <i
                className="ph ph-arrow-right tw-text-xs mx-3"
                style={{ opacity: 0.5 }}
              />
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TopHeaderOne;
