// src/components/Hero.jsx
import Navbar from "./Navbar";
import SearchWidget from "./SearchWidget";

export default function Hero() {
  return (
    <div className="relative w-full h-[650px] overflow-visible pb-12">
      <Navbar />

      {/* Background Image / Overlay */}
      <div className="absolute top-0 left-0 right-0 h-[580px] w-full overflow-hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1666884863150-280586cac42c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Premium Living"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Widget at the bottom center (positioned relative to hero bottom) */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center w-full px-4">
        <SearchWidget />
      </div>
    </div>
  );
}
