import { useEffect, useRef, type FC } from "react";
import PrimaryButton from "./PrimaryButton";
import SectionHead from "./SectionHead";

type Step = {
  num: string;
  icon: string;
  title: string;
  desc: string;
};

const WAVE_PATH =
  "M60 70 C140 70, 160 210, 260 210 C360 210, 380 70, 480 70 C580 70, 600 210, 700 210 C800 210, 820 70, 920 70 C1020 70, 1040 210, 1140 210";

const LOOP_MS = 9000;

const steps: Step[] = [
  {
    num: "01",
    icon: "ph-map-pin",
    title: "Set Pickup & Drop",
    desc: "Pin your pickup and delivery address anywhere.",
  },
  {
    num: "02",
    icon: "ph-package",
    title: "Add Package Details",
    desc: "Share weight, size, and package value.",
  },
  {
    num: "03",
    icon: "ph-currency-inr",
    title: "Get Instant Rate",
    desc: "See a clear price before you book.",
  },
  {
    num: "04",
    icon: "ph-identification-card",
    title: "Sender & Receiver",
    desc: "Add contacts with quick Aadhaar KYC.",
  },
  {
    num: "05",
    icon: "ph-camera",
    title: "Upload Photos",
    desc: "Snap photos for safer customs clearance.",
  },
  {
    num: "06",
    icon: "ph-check-circle",
    title: "Pay & Track",
    desc: "Pay once and track live with booking ID.",
  },
];

const HowItWorksOne: FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const plane = planeRef.current;
    if (!path || !plane) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      plane.setAttribute("opacity", "0");
      return;
    }

    let raf = 0;
    let cancelled = false;
    const start = performance.now();

    const VIEW_W = 1200;
    const VIEW_H = 280;

    const tick = (now: number) => {
      if (cancelled) return;

      const length = path.getTotalLength();
      const svg = path.ownerSVGElement;
      if (length > 0 && svg) {
        const t = ((now - start) % LOOP_MS) / LOOP_MS;
        const dist = t * length;
        const point = path.getPointAtLength(dist);
        const look = path.getPointAtLength(Math.min(dist + 4, length));
        const angle =
          (Math.atan2(look.y - point.y, look.x - point.x) * 180) / Math.PI;

        const { width, height } = svg.getBoundingClientRect();
        const sx = width / VIEW_W || 1;
        const sy = height / VIEW_H || 1;
        const k = Math.min(sx, sy) * 2;

        plane.setAttribute(
          "transform",
          `translate(${point.x} ${point.y}) scale(${k / sx} ${k / sy}) rotate(${angle})`
        );
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className='how-it-works py-120 position-relative overflow-hidden section-flow-white'>
      <div className='container'>
        <SectionHead
          eyebrow='How the App Works'
          title={
            <>
              <span className='d-inline-block'>Book &amp; Ship in</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>6 Steps</span>
            </>
          }
          description='From pickup to delivery, everything happens inside one app.'
        />

        <div className='how-it-works__wave d-none d-lg-block'>
          <div className='how-it-works__wave-rail'>
            <svg
              className='how-it-works__wave-svg'
              viewBox='0 0 1200 280'
              preserveAspectRatio='none'
              aria-hidden
            >
              <path
                ref={pathRef}
                className='how-it-works__wave-line'
                d={WAVE_PATH}
                fill='none'
              />

              <g ref={planeRef} className='how-it-works__plane'>
                <circle className='how-it-works__plane-glow' r='20' />
                <circle className='how-it-works__plane-disc' r='15' />
                <g transform='rotate(90)'>
                  <path
                    className='how-it-works__plane-body'
                    transform='translate(-12 -12) scale(0.95)'
                    d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'
                  />
                </g>
              </g>
            </svg>

            <div className='how-it-works__wave-steps'>
              {steps.map((step, i) => {
                const textAbove = i % 2 === 0;
                return (
                  <article
                    key={step.num}
                    className={`how-it-works__wave-col ${textAbove ? "is-up" : "is-down"}`}
                    data-aos='zoom-in'
                    data-aos-duration={550 + i * 80}
                  >
                    <div className='how-it-works__wave-copy'>
                      <span className='how-it-works__wave-stepno'>Step {step.num}</span>
                      <h5 className='how-it-works__wave-title'>{step.title}</h5>
                      <p className='how-it-works__wave-desc'>{step.desc}</p>
                    </div>

                    <div className='how-it-works__wave-node-wrap'>
                      <div className='how-it-works__wave-node'>
                        <i className={`ph-bold ${step.icon}`} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className='how-it-works__mobile d-lg-none'>
          <div className='how-it-works__mobile-track'>
            {steps.map((step, i) => (
              <article
                key={step.num}
                className='how-it-works__mobile-item'
                data-aos='fade-up'
                data-aos-duration={500 + i * 60}
              >
                <div className='how-it-works__mobile-rail' aria-hidden>
                  <span className='how-it-works__wave-node how-it-works__wave-node--sm'>
                    <i className={`ph-bold ${step.icon}`} />
                  </span>
                  {i < steps.length - 1 ? (
                    <span className='how-it-works__mobile-line' />
                  ) : null}
                </div>
                <div className='how-it-works__mobile-copy'>
                  <span className='how-it-works__wave-stepno'>Step {step.num}</span>
                  <h5 className='how-it-works__wave-title'>{step.title}</h5>
                  <p className='how-it-works__wave-desc'>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='text-center tw-mt-10 tw-mt-lg-14' data-aos='fade-up' data-aos-duration={700}>
          <PrimaryButton />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksOne;
