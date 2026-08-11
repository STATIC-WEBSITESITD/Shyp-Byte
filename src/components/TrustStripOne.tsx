import type { FC } from "react";

const chips = [
  { icon: "ph-globe-hemisphere-west", label: "220+ Countries" },
  { icon: "ph-tag", label: "Fixed Predefined, Transparent Rates" },
  { icon: "ph-house-line", label: "Door-to-Door Pickup to Delivery" },
  { icon: "ph-shield-check", label: "Verified KYC & Customs-Ready Docs" },
] as const;

const TrustStripOne: FC = () => {
  return (
    <section className='trust-strip tw-mx-48-px'>
      <div className='trust-strip__panel overflow-hidden'>
        <div className='container'>
          <div className='row g-4 g-lg-0 tw-py-6 tw-py-lg-7 align-items-center'>
            {chips.map((chip, index) => (
              <div
                key={chip.label}
                className={`col-6 col-lg-3 trust-strip__col${
                  index < chips.length - 1 ? " trust-strip__col--divided" : ""
                }`}
              >
                <div className='trust-strip__item d-flex align-items-center justify-content-lg-center tw-gap-3 tw-h-full'>
                  <span className='trust-strip__icon tw-w-11 tw-h-11 rounded-circle text-white d-inline-flex align-items-center justify-content-center flex-shrink-0'>
                    <i className={`ph-bold ${chip.icon} tw-text-lg`} />
                  </span>
                  <span className='fw-semibold text-white tw-text-sm tw-leading-snug'>
                    {chip.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStripOne;
