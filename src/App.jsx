import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "./components/Hero";
import ExploreOptions from "./components/ExploreOptions";
import NeedsPortal from "./components/NeedsPortal";
import FeaturedProperties from "./components/FeaturedProperties";
import InternationalNetwork from "./components/InternationalNetwork";
import CityProperties from "./components/CityProperties";
import HowItWorks from "./components/HowItWorks";
import CommercialSpaces from "./components/CommercialSpaces";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import ContactUs from "./pages/contactUs";
import PrivacyPolicy from "./pages/privacyPolicy";
import TermsAndConditions from "./pages/termsAndConditions";
import RefundPolicy from "./pages/refund";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LandingPage() {
  return (
    <>
      <Hero />
      {/* <ExploreOptions /> */}
      <NeedsPortal />
      <FeaturedProperties />
      {/* <InternationalNetwork /> */}
      <CityProperties />
      <HowItWorks />
      <CommercialSpaces />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-orange-950 overflow-x-hidden">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


//https://dribbble.com/shots/22328133-Eastate-Real-Estate-Agency-Landing-Page
//https://dribbble.com/shots/22328133-Eastate-Real-Estate-Agency-Landing-Page