// src/components/ExploreOptions.jsx
import { ChevronRight } from "lucide-react";

export default function ExploreOptions() {
  const options = [
    {
      title: "Buying a home",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    },
    {
      title: "Renting a home",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    },
    {
      title: "Invest in Real Estate",
      img: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      badge: "NEW",
    },
    {
      title: "Sell/Rent your property",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      subtitle: "Sell faster at the right price!",
    },
    {
      title: "Plots/Land",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    },
    {
      title: "Explore Insights",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      badge: "NEW",
    },
    {
      title: "PG",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-8 pt-8 pb-16">
      <div className="text-center mb-6">
        <p className="text-[11px] font-bold text-orange-600 tracking-wider uppercase mb-1">
          Get started with exploring real estate options
        </p>
      </div>

      <div className="relative group">
        <div className="flex gap-5 overflow-x-auto pb-6 pt-2 hide-scrollbar snap-x items-center px-2">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 min-w-[210px] w-[210px] cursor-pointer snap-start hover:-translate-y-1 transition duration-300"
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] relative aspect-[4/2.5] bg-orange-100">
                <img
                  src={opt.img}
                  alt={opt.title}
                  className="w-full h-full object-cover"
                />
                {opt.badge && (
                  <span className="absolute top-2 left-2 bg-pink-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase shadow-sm">
                    {opt.badge}
                  </span>
                )}
                {opt.subtitle && (
                  <div className="absolute inset-0 p-4 font-bold text-orange-900 text-sm w-2/3 leading-tight hidden lg:block">
                    {opt.subtitle}
                  </div>
                )}
              </div>
              <p className="text-[15px] font-bold text-orange-800 text-center">
                {opt.title}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 -mt-5 md:-right-4 w-10 h-10 bg-white border border-orange-100 rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-orange-50 z-10 opacity-90 hover:opacity-100">
          <ChevronRight className="w-5 h-5 text-orange-700" />
        </div>
      </div>
    </div>
  );
}
