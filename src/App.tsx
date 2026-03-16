import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageMeta from "./components/PageMeta";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import InitializeAOS from "./helper/InitializeAOS";
import WhatsAppSticky from "./components/WhatsAppSticky";

const HomePageOne = lazy(() => import("./pages/HomePageOne"));
const AboutPageOne = lazy(() => import("./pages/AboutPageOne"));
const BlogPageOne = lazy(() => import("./pages/BlogPageOne"));
const ContactPageOne = lazy(() => import("./pages/ContactPageOne"));
const B2BShippersPage = lazy(() => import("./pages/B2BShippersPage"));
const D2CBrandPage = lazy(() => import("./pages/D2CBrandPage"));
const ECommerceBusinessPage = lazy(() => import("./pages/ECommerceBusinessPage"));
const IndividualCustomerPage = lazy(() => import("./pages/IndividualCustomerPage"));
const TrackPageOne = lazy(() => import("./pages/TrackPageOne"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const ShippingPolicyPage = lazy(() => import("./pages/ShippingPolicyPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  // const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  const [direction] = useState<"ltr" | "rtl">("ltr");

  return (
    <div dir={direction}>
      <BrowserRouter>
        <PageMeta />
        <Suspense fallback={<div className="min-vh-100 d-flex align-items-center justify-content-center" />}>
        <Routes>
          <Route path='/' element={<HomePageOne />} />
          <Route path='/about' element={<AboutPageOne />} />
          <Route path='/blogs' element={<BlogPageOne />} />
          <Route path='/contact' element={<ContactPageOne />} />
          <Route path='/tracking' element={<TrackPageOne />} />
          <Route path='/product' element={<Navigate to='/product/ecommerce-business' replace />} />
          <Route path='/product/ecommerce-business' element={<ECommerceBusinessPage />} />
          <Route path='/product/d2c-brand' element={<D2CBrandPage />} />
          <Route path='/product/individual-customer' element={<IndividualCustomerPage />} />
          <Route path='/product/b2b-shippers' element={<B2BShippersPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/shipping-policy' element={<ShippingPolicyPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        </Suspense>

        <RouteScrollToTop />
        <WhatsAppSticky />
        {/* <SettingsPanel direction={direction} setDirection={setDirection} /> */}
        <InitializeAOS />
      </BrowserRouter>
    </div>
  );
}

export default App;
