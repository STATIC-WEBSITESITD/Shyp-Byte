/// <reference types="vite/client" />
// types.d.ts (global)

/** Google Tag Manager / GA4 — push conversion events from thank-you pages */
interface Window {
  dataLayer?: Record<string, unknown>[];
}

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/thumbs";
declare module "swiper/css/free-mode";
