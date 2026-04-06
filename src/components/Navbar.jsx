// src/components/Navbar.jsx
import { Menu, Compass } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolledOrNotHome = scrolled || !isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolledOrNotHome
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4 text-black"
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-[22px] font-bold tracking-tight">Sarvmanglaminvestors</span>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-10 text-[15px] font-semibold">
          <Link to="/" className="transition-colors hover:text-orange-400">
            About Us
          </Link>
          <a href="#" className="transition-colors hover:text-orange-400">
            Property
          </a>
          <a href="#" className="transition-colors hover:text-orange-400">
            Agent
          </a>
        </div>

        {/* Right side contact button */}
        <div className="hidden lg:flex items-center">
          <Link to="/contact">
            <button className="bg-orange-400 text-white hover:bg-orange-500 active:scale-95 px-7 py-3 rounded-full font-semibold text-[14px] transition-all cursor-pointer shadow-md">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <Menu className="w-7 h-7 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
