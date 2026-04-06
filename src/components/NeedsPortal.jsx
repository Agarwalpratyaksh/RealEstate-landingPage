// src/components/NeedsPortal.jsx
import { ArrowRight, ArrowLeft, Play } from "lucide-react";

export default function NeedsPortal() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 bg-white">
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-12 md:mb-16">
        <h2 className="text-4xl md:text-[52px] leading-[1.15] font-medium text-black lg:w-[55%] tracking-tight">
          Your primary home might <br className="hidden lg:block" /> begin to
          feel left out.
        </h2>
      </div>

      {/* Middle Content Section */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        {/* Left Large Image Block */}
        <div className="w-full lg:w-[45%] relative rounded-[40px] overflow-hidden aspect-[4/3] lg:aspect-auto min-h-[400px] lg:min-h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Primary Home"
            className="w-full h-full object-cover"
          />
          {/* Floating Image Widget */}
          <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md p-2 rounded-full flex items-center gap-2 shadow-lg border border-white/50">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=200&auto=format&fit=crop"
              alt="Interior 1"
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=200&auto=format&fit=crop"
              alt="Interior 2"
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?q=80&w=200&auto=format&fit=crop"
              alt="Interior 3"
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
          </div>
        </div>

        {/* Right Info Cards */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6 lg:pl-2">
          <div className="flex flex-col sm:flex-row gap-6 lg:h-[420px]">
            {/* Center Info Card */}
            <div className="w-full sm:w-1/2 bg-orange-100/50 rounded-[40px] p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-orange-50">
              <h3 className="text-[26px] md:text-[32px] leading-[1.15] font-medium text-black mb-6">
                Big things can
                <br />
                happen in small
                <br />
                spaces.
              </h3>
              <p className="text-black text-[15px] mb-10 leading-relaxed font-normal px-2">
                With thoughtful design and smart organization, you can maximize
                every inch, making room for creativity
              </p>
              <button className="px-8 py-3 rounded-full border border-orange-200 text-black text-sm font-medium bg-white hover:bg-orange-50 transition-colors shadow-sm cursor-pointer">
                Details
              </button>
            </div>

            {/* Right Property Card */}
            <div className="w-full sm:w-1/2 bg-orange-100/50 rounded-[40px] p-4 flex flex-col shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-orange-50">
              <div className="w-full rounded-[32px] overflow-hidden mb-6 aspect-[5/4]">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern House"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-2 flex flex-col items-center text-center pb-2 mt-auto">
                <h4 className="text-[20px] font-medium text-orange-950 mb-6">
                  Pricing Start at ₹75 Lakh
                </h4>
                <button className="flex items-center gap-2 bg-orange-400/80 text-white px-6 py-4 rounded-full text-[15px] font-medium hover:bg-orange-400 transition-colors w-full justify-center shadow-md cursor-pointer">
                  Explore Properties <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Slider Text & Arrows */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 lg:pt-6 px-4 mt-auto">
            <p className="text-black text-[15px] leading-relaxed sm:max-w-[340px]">
              Whether it's creating a cozy corner for relaxation or transforming
              a small area into a workspace
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button className="w-12 h-12 rounded-full border border-orange-200 flex items-center justify-center text-black hover:bg-orange-50 transition-colors cursor-pointer">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border border-orange-900 flex items-center justify-center text-orange-900 hover:bg-orange-50 transition-colors cursor-pointer">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bottom Section */}
      <div className="mt-20 md:mt-28 w-full border-t border-orange-100 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-y sm:divide-y-0 md:divide-x divide-orange-200">
          <div className="flex flex-col items-center sm:items-start md:items-center justify-center text-center sm:text-left md:text-center md:pr-4 pt-10 sm:pt-0">
            <h4 className="text-5xl md:text-[56px] font-medium text-orange-950 mb-3 tracking-tight">
              100%
            </h4>
            <p className="text-black text-[16px]">Satisfactions Clients</p>
          </div>
          <div className="flex flex-col items-center sm:items-start md:items-center justify-center text-center sm:text-left md:text-center md:px-4 pt-10 sm:pt-0">
            <h4 className="text-5xl md:text-[56px] font-medium text-orange-950 mb-3 tracking-tight">
              500+
            </h4>
            <p className="text-black text-[16px]">Property sells</p>
          </div>
          <div className="flex flex-col items-center sm:items-start md:items-center justify-center text-center sm:text-left md:text-center md:px-4 pt-10 sm:pt-0">
            <h4 className="text-5xl md:text-[56px] font-medium text-orange-950 mb-3 tracking-tight">
              150+
            </h4>
            <p className="text-black text-[16px]">Countries & Cities</p>
          </div>
          <div className="flex flex-col items-center sm:items-start md:items-center justify-center text-center sm:text-left md:text-center md:pl-4 pt-10 sm:pt-0">
            <h4 className="text-5xl md:text-[56px] font-medium text-orange-950 mb-3 tracking-tight">
              2,00+
            </h4>
            <p className="text-black text-[16px]">Positive reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
