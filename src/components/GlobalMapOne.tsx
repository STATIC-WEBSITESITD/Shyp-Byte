import { useEffect, useRef, type FC } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world";
import "jsvectormap/dist/jsvectormap.css";


const PRIMARY = "#1350d8";
const PRIMARY_LIGHT = "#e8eefb";

// const markers: { name: string; coords: [number, number] }[] = [
//   { name: "Mumbai", coords: [19.076, 72.8777] },
//   { name: "New York", coords: [40.7128, -74.006] },
//   { name: "London", coords: [51.5074, -0.1278] },
//   { name: "Dubai", coords: [25.2048, 55.2708] },
//   { name: "Singapore", coords: [1.3521, 103.8198] },
//   { name: "Shanghai", coords: [31.2304, 121.4737] },
//   { name: "Sydney", coords: [-33.8688, 151.2093] },
//   { name: "São Paulo", coords: [-23.5505, -46.6333] },
//   { name: "Tokyo", coords: [35.6762, 139.6503] },
//   { name: "Johannesburg", coords: [-26.2041, 28.0473] },
// ];

const GlobalMapOne: FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<jsVectorMap | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    mapInstance.current = new jsVectorMap({
      selector: mapRef.current,
      map: "world",
      zoomButtons: false,
      zoomOnScroll: false,
      draggable: false,
      showTooltip: true,
      regionStyle: {
        initial: {
          fill: PRIMARY_LIGHT,
          stroke: "#d0daf0",
          strokeWidth: 0.5,
        },
        hover: {
          fill: PRIMARY,
          fillOpacity: 0.35,
          cursor: "pointer",
        },
      },
      markerStyle: {
        initial: {
          r: 6,
          fill: PRIMARY,
          stroke: "#fff",
          strokeWidth: 2,
        },
        hover: {
          fill: PRIMARY,
          stroke: PRIMARY,
          r: 8,
        },
      },
      // markers: markers.map((marker) => ({
      //   ...marker,
      //   coords: [marker.coords[0], marker.coords[1]],
      // })),
      markerLabelStyle: {
        initial: {
          fontFamily: "inherit",
          fontSize: 13,
          fontWeight: 500,
          fill: "#333",
        },
      },
    });

    return () => {
      mapInstance.current?.destroy();
    };
  }, []);

  return (
    <section className="global-map-one py-120 bg-white">
      <div className="container">
        <div className="text-center global-map-one__header tw-mb-16" data-aos="fade-up">
          <span className="tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block">
            Global Presence
          </span>
          <h3 className="splitTextStyleOne fw-light tw-leading-104 tw-mt-3">
            <span className="d-inline-block">We Ship&nbsp;</span>
            <span className="d-inline-block fw-semibold text-main-600">
              Worldwide
            </span>
          </h3>
          <p className="text-neutral-500 tw-mt-4 mx-auto" style={{ maxWidth: 560 }}>
            Our logistics network spans across continents, connecting businesses
            to every major trade hub around the globe.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration={800}
          className="overflow-hidden global-map-one__map-wrap"
        >
          <div
            ref={mapRef}
            className="global-map-one__map"
            style={{ width: "100%", height: 520 }}
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalMapOne;
