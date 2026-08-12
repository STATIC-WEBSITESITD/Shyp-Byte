/// <reference types="vite/client" />

interface Window {
  dataLayer?: Record<string, unknown>[];
}

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/thumbs";
declare module "swiper/css/free-mode";
