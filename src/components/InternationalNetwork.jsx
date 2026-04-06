// src/components/InternationalNetwork.jsx
export default function InternationalNetwork() {
  const mapUrl =
    "https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg";

  return (
    <section className="mx-8 rounded-4xl">
      <div className="bg-[#242424] w-full h-full py-16 md:py-24 px-4 overflow-hidden relative flex flex-col justify-center rounded-4xl">
        {/* Header Content */}
        <div className="text-center relative z-10 mb-12 md:mb-20 shrink-0">
          <h2 className="text-3xl md:text-[46px] leading-[1.15] font-medium text-white mb-4 tracking-tight">
            Pan-India Property Network
          </h2>
          <p className="text-orange-300 text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto">
            Our nationwide reach opens doors to exclusive properties and
            provides you the <br className="hidden md:block" />
            best real estate opportunities across the country
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-[1000px] mx-auto aspect-[16/9] md:aspect-[2/1]">
          {/* Abstract World Map SVG background */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `url(${mapUrl})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "invert(1)",
            }}
          ></div>

          {/* Dots / Pins */}

          {/* North/West India */}
          <div className="absolute top-[30%] left-[45%] w-4 h-4 rounded-full bg-orange-400/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-[45%] left-[42%] w-4 h-4 rounded-full bg-orange-400/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-[65%] left-[46%] w-4 h-4 rounded-full bg-orange-400/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
          </div>

          {/* Mumbai Featured Pin */}
          <div className="absolute top-[55%] left-[47%] md:left-[47%] z-20">
            {/* The Dot */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-orange-400/30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
            </div>

            {/* Tooltip Card */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white rounded-2xl p-4 shadow-xl w-[180px] text-center before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-white">
              {/* Indian Flag placeholder */}
              <div className="w-10 h-10 mx-auto rounded-full bg-orange-100 mb-3 overflow-hidden border-2 border-orange-50 flex flex-col shadow-sm">
                <div className="w-full h-1/3 bg-[#FF9933]"></div>
                <div className="w-full h-1/3 bg-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full border border-[navy]"></div>
                </div>
                <div className="w-full h-1/3 bg-[#138808]"></div>
              </div>
              <h4 className="text-orange-950 font-bold text-[14px] mb-1.5">
                Mumbai, MH
              </h4>
              <p className="text-orange-600 text-[11px] leading-relaxed font-medium px-1">
                Bandra West
                <br />
                Mumbai 400050, IND
              </p>
            </div>
          </div>

          {/* Other India Dots */}
          <div className="absolute top-[35%] left-[52%] w-4 h-4 rounded-full bg-orange-400/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-[62%] left-[49%] w-4 h-4 rounded-full bg-orange-400/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-[62%] left-[55%] w-4 h-4 rounded-full bg-orange-400/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-[75%] left-[53%] w-4 h-4 rounded-full bg-orange-400/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-[80%] left-[54%] w-4 h-4 rounded-full bg-orange-400/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
