// src/components/Navbar.jsx
import { ChevronDown, HeadphonesIcon, User, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4 text-slate-800"
          : "bg-gradient-to-b from-black/60 to-transparent py-6 text-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-6">
          <span className="text-2xl md:text-3xl font-black tracking-tighter">
            101{" "}
            <span className={scrolled ? "text-orange-500" : "text-orange-400"}>
              Gaj
            </span>
          </span>
          <div
            className={`hidden md:flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-full transition-colors cursor-pointer ${scrolled ? "hover:bg-slate-100" : "hover:bg-white/10"}`}
          >
            <span className="opacity-90">All India</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </div>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-7 text-[14px] font-semibold">
          <a
            href="#"
            className={`transition-colors ${scrolled ? "hover:text-orange-500" : "hover:text-orange-300"}`}
          >
            For Buyers
          </a>
          <a
            href="#"
            className={`transition-colors ${scrolled ? "hover:text-orange-500" : "hover:text-orange-300"}`}
          >
            For Tenants
          </a>
          <a
            href="#"
            className={`transition-colors ${scrolled ? "hover:text-orange-500" : "hover:text-orange-300"}`}
          >
            For Owners
          </a>

          <div className="w-px h-5 bg-current opacity-20"></div>

          <a
            href="#"
            className={`transition-colors flex items-center gap-1.5 ${scrolled ? "hover:text-orange-500" : "hover:text-orange-300"}`}
          >
            Insights
            <span className="text-[9px] bg-red-500 text-white px-1.5 py-0.5 rounded-full font-bold tracking-wider uppercase">
              New
            </span>
          </a>

          <div className="flex items-center gap-4 ml-2">
            <button
              className={`px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-md ${scrolled ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-white text-slate-900 hover:bg-gray-50"}`}
            >
              Post Property
              <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded-sm font-bold uppercase tracking-wide">
                Free
              </span>
            </button>

            <button
              className={`p-2.5 rounded-full transition-colors cursor-pointer ${scrolled ? "hover:bg-slate-100" : "bg-white/10 hover:bg-white/20 backdrop-blur-sm"}`}
            >
              <HeadphonesIcon className="w-5 h-5" />
            </button>

            <div
              className={`flex items-center gap-1.5 pl-2 py-1.5 pr-1.5 rounded-full border transition-colors cursor-pointer ${scrolled ? "border-slate-200 hover:border-slate-300" : "border-white/20 hover:bg-white/10"}`}
            >
              <Menu className="w-5 h-5 ml-1.5 opacity-80" />
              <div
                className={`p-1.5 rounded-full ${scrolled ? "bg-slate-100" : "bg-white/20"}`}
              >
                <User className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            className={`p-2 rounded-full ${scrolled ? "bg-slate-100" : "bg-white/20"}`}
          >
            <User className="w-5 h-5" />
          </button>
          <Menu className="w-7 h-7 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
