import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CityProperties() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const cities = [
    {
      id: 1,
      name: "Mumbai",
      properties: "1,240 Properties",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Delhi NCR",
      properties: "980 Properties",
      image:
        "https://images.unsplash.com/photo-1678966432189-d58296e45ad2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Bangalore",
      properties: "850 Properties",
      image:
        "https://plus.unsplash.com/premium_photo-1697729683472-5e39cf4471ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Hyderabad",
      properties: "620 Properties",
      image:
        "https://images.unsplash.com/photo-1657981630164-769503f3a9a8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Pune",
      properties: "540 Properties",
      image:
        "https://images.unsplash.com/photo-1577195943805-d9a2f1c404bd?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Chennai",
      properties: "410 Properties",
      image:
        "https://images.unsplash.com/photo-1650566696029-4d1c8e92e077?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Kolkata",
      properties: "320 Properties",
      image:
        "https://plus.unsplash.com/premium_photo-1697730353332-5584bed18fdf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / 240);
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-[36px] md:text-[46px] leading-[1.15] font-medium text-black mb-4 tracking-tight">
              Find Properties in <br className="hidden md:block" />
              Indian Cities
            </h2>
            <p className="text-black text-[15px] leading-relaxed max-w-lg">
              Explore a vast collection of verified residential and commercial
              properties across India's most vibrant urban centers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-orange-200 flex items-center justify-center text-orange-700 hover:bg-orange-50 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white hover:bg-orange-500 transition-all cursor-pointer shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cities Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto pb-10 snap-x hide-scrollbar scroll-smooth ml-11"
        >
          {cities.map((city) => (
            <div
              key={city.id}
              className="relative min-w-[280px] md:min-w-[320px] h-[440px] rounded-[32px] overflow-hidden snap-start cursor-pointer group shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              {/* Background Image */}
              <img
                src={city.image}
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/80 via-orange-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>

              {/* Text Content */}
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="text-white font-semibold text-[24px] tracking-tight mb-1">
                  {city.name}
                </h3>
                <p className="text-white/70 text-[14px] font-medium">
                  {city.properties}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (Visual Representation) */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(cities.length / 2) }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                Math.floor(activeIndex / 2) === i
                  ? "w-8 bg-[#1a1a1a]"
                  : "w-2 bg-orange-200"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
