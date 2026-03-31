import Hero from "./components/Hero";
import ExploreOptions from "./components/ExploreOptions";
import NeedsPortal from "./components/NeedsPortal";
import FeaturedProperties from "./components/FeaturedProperties";
import CityProperties from "./components/CityProperties";
import HowItWorks from "./components/HowItWorks";
import CommercialSpaces from "./components/CommercialSpaces";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Hero />
      <ExploreOptions />
      <NeedsPortal />
      <FeaturedProperties />
      <CityProperties />
      <HowItWorks />
      <CommercialSpaces />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
