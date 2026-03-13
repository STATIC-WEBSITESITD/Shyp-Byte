declare module "jsvectormap" {
  interface MarkerConfig {
    name: string;
    coords: [number, number];
  }

  interface JsVectorMapOptions {
    selector?: string | HTMLElement;
    map?: string;
    zoomButtons?: boolean;
    zoomOnScroll?: boolean;
    draggable?: boolean;
    showTooltip?: boolean;
    regionStyle?: Record<string, unknown>;
    markerStyle?: Record<string, unknown>;
    markerLabelStyle?: Record<string, unknown>;
    markers?: MarkerConfig[];
    [key: string]: unknown;
  }

  export default class jsVectorMap {
    constructor(options: JsVectorMapOptions);
    destroy(): void;
  }
}

declare module "jsvectormap/dist/maps/world";
declare module "jsvectormap/dist/jsvectormap.css";
