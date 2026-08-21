import type { CSSProperties, FC } from "react";
import SectionHead from "./SectionHead";

type LabelPos = "top" | "bottom" | "left" | "right";
type PinTier = "hub" | "pin";

type Hub = {
  id: string;
  label: string;
  x: number;
  y: number;
  tier: PinTier;
  labelPos?: LabelPos;
  delay?: number;
};

const hubs: Hub[] = [
  {
    id: "in",
    label: "India",
    x: 62,
    y: 50,
    tier: "hub",
    labelPos: "bottom",
  },
  {
    id: "ca",
    label: "Canada",
    x: 14,
    y: 22,
    tier: "pin",
    labelPos: "top",
    delay: 0.35,
  },
  {
    id: "us",
    label: "USA",
    x: 18,
    y: 40,
    tier: "pin",
    labelPos: "bottom",
    delay: 0.2,
  },
  {
    id: "ie",
    label: "Ireland",
    x: 30,
    y: 20,
    tier: "pin",
    labelPos: "top",
    delay: 0.55,
  },
  {
    id: "gb",
    label: "UK",
    x: 36,
    y: 28,
    tier: "pin",
    labelPos: "left",
    delay: 0.15,
  },
  {
    id: "nl",
    label: "Netherlands",
    x: 43,
    y: 18,
    tier: "pin",
    labelPos: "top",
    delay: 0.7,
  },
  {
    id: "de",
    label: "Germany",
    x: 48,
    y: 27,
    tier: "pin",
    labelPos: "right",
    delay: 0.85,
  },
  {
    id: "kw",
    label: "Kuwait",
    x: 46,
    y: 36,
    tier: "pin",
    labelPos: "top",
    delay: 0.5,
  },
  {
    id: "sa",
    label: "Saudi Arabia",
    x: 42,
    y: 48,
    tier: "pin",
    labelPos: "left",
    delay: 0.4,
  },
  {
    id: "ae",
    label: "UAE",
    x: 52,
    y: 44,
    tier: "pin",
    labelPos: "bottom",
    delay: 0.1,
  },
  {
    id: "bh",
    label: "Bahrain",
    x: 56,
    y: 36,
    tier: "pin",
    labelPos: "top",
    delay: 0.65,
  },
  {
    id: "qa",
    label: "Qatar",
    x: 58,
    y: 42,
    tier: "pin",
    labelPos: "right",
    delay: 0.8,
  },
  {
    id: "my",
    label: "Malaysia",
    x: 70,
    y: 46,
    tier: "pin",
    labelPos: "top",
    delay: 0.6,
  },
  {
    id: "sg",
    label: "Singapore",
    x: 74,
    y: 56,
    tier: "pin",
    labelPos: "bottom",
    delay: 0.25,
  },
  {
    id: "za",
    label: "South Africa",
    x: 40,
    y: 72,
    tier: "pin",
    labelPos: "right",
    delay: 0.45,
  },
  {
    id: "au",
    label: "Australia",
    x: 80,
    y: 68,
    tier: "pin",
    labelPos: "left",
    delay: 0.3,
  },
  {
    id: "nz",
    label: "New Zealand",
    x: 88,
    y: 78,
    tier: "pin",
    labelPos: "top",
    delay: 0.75,
  },
];

/** All routes radiate from India only */
const routes = hubs
  .filter((hub) => hub.id !== "in")
  .map((hub) => ({ from: "in", to: hub.id }));

const stats = [
  { value: "220+", label: "Countries" },
  { value: "Door-to-Door", label: "Pickup → Delivery" },
  { value: "Live", label: "Shipment Tracking" },
] as const;

const arcPath = (a: Hub, b: Hub, lift = 8): string => {
  const mx = (a.x + b.x) / 2;
  const my = Math.min(a.y, b.y) - lift;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
};

const GlobalMapOne: FC = () => {
  const point = (id: string) => hubs.find((h) => h.id === id)!;

  return (
    <section className='global-presence py-120 section-flow-white'>
      <div className='container'>
        <SectionHead
          eyebrow='Global Presence'
          title={
            <>
              <span className='d-inline-block'>220+ Countries,</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block'>Trade Hubs</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>
                &amp; Worldwide Delivery
              </span>
            </>
          }
          description='From India to every major trade corridor — one network for pickup, customs, and last-mile delivery.'
        />

        <div
          className='global-presence__stage'
          data-aos='fade-up'
          data-aos-duration={800}
        >
          <div className='global-presence__glow' aria-hidden />
          <div className='global-presence__grid' aria-hidden />

          {/* Soft territory auras — geographic presence without clutter */}
          <svg
            className='global-presence__svg global-presence__svg--auras'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden
          >
            {hubs.map((hub) => {
              const r = hub.tier === "hub" ? 5.5 : 2;
              return (
                <circle
                  key={`aura-${hub.id}`}
                  className={`global-presence__aura is-${hub.tier}`}
                  cx={hub.x}
                  cy={hub.y}
                  r={r}
                />
              );
            })}
          </svg>

          <svg
            className='global-presence__svg'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden
          >
            {routes.map((route) => {
              const a = point(route.from);
              const b = point(route.to);
              const lift = Math.max(4, Math.abs(a.x - b.x) * 0.12 + 4);
              return (
                <path
                  key={`${route.from}-${route.to}`}
                  className='global-presence__route'
                  d={arcPath(a, b, lift)}
                  fill='none'
                />
              );
            })}
          </svg>

          {hubs.map((hub) => {
            const style = {
              left: `${hub.x}%`,
              top: `${hub.y}%`,
              ["--gp-delay" as string]: `${hub.delay ?? 0}s`,
            } as CSSProperties;

            return (
              <div
                key={hub.id}
                className={[
                  "global-presence__pin",
                  `is-${hub.tier}`,
                  hub.labelPos ? `label-${hub.labelPos}` : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={style}
              >
                <span className='global-presence__pulse' aria-hidden />
                <span className='global-presence__ring' aria-hidden />
                <span className='global-presence__dot' />
                <span className='global-presence__label'>
                  <strong>{hub.label}</strong>
                </span>
              </div>
            );
          })}

          <div className='global-presence__badge'>
            <i className='ph-bold ph-airplane-takeoff' />
            <span>India → World</span>
          </div>
        </div>

        <div className='row g-3 tw-mt-8' data-aos='fade-up' data-aos-delay={100}>
          {stats.map((stat) => (
            <div key={stat.label} className='col-md-4'>
              <div className='global-presence__stat'>
                <span className='global-presence__stat-value'>{stat.value}</span>
                <span className='global-presence__stat-label'>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalMapOne;
