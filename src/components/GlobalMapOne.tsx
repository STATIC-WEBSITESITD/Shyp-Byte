import type { FC } from "react";
import SectionHead from "./SectionHead";

const hubs: {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  hub?: boolean;
}[] = [
  { id: "in", label: "India", sub: "Pickup Hub", x: 58, y: 52, hub: true },
  { id: "ae", label: "UAE", sub: "Middle East", x: 52, y: 42 },
  { id: "gb", label: "UK", sub: "Europe", x: 42, y: 28 },
  { id: "us", label: "USA", sub: "Americas", x: 22, y: 38 },
  { id: "sg", label: "Singapore", sub: "Asia Pacific", x: 68, y: 58 },
  { id: "au", label: "Australia", sub: "Oceania", x: 78, y: 72 },
];

const routes = [
  { from: "in", to: "ae" },
  { from: "in", to: "gb" },
  { from: "in", to: "us" },
  { from: "in", to: "sg" },
  { from: "in", to: "au" },
] as const;

const stats = [
  { value: "220+", label: "Countries" },
  { value: "Door-to-Door", label: "Pickup → Delivery" },
  { value: "Live", label: "Shipment Tracking" },
] as const;

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

          <svg
            className='global-presence__svg'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden
          >
            {routes.map((route) => {
              const a = point(route.from);
              const b = point(route.to);
              const mx = (a.x + b.x) / 2;
              const my = Math.min(a.y, b.y) - 8;
              return (
                <path
                  key={`${route.from}-${route.to}`}
                  className='global-presence__route'
                  d={`M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`}
                  fill='none'
                />
              );
            })}
          </svg>

          {hubs.map((hub) => (
            <div
              key={hub.id}
              className={`global-presence__pin${hub.hub ? " is-hub" : ""}`}
              style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
            >
              <span className='global-presence__pulse' aria-hidden />
              <span className='global-presence__dot' />
              <span className='global-presence__label'>
                <strong>{hub.label}</strong>
                <small>{hub.sub}</small>
              </span>
            </div>
          ))}

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
