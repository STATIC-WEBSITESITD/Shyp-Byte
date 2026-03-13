import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "./globals.css";
import PhosphorIconsLoader from "./helper/PhosphorIconsLoader";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <PhosphorIconsLoader />
    <App />
  </HelmetProvider>
);
