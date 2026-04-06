// src/components/FeaturedProperties.jsx
import { useState } from "react";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function FeaturedProperties() {
  const [filter, setFilter] = useState("all");

  const properties = [
    {
      id: 1,
      image:
        "https://assets.cntraveller.in/photos/61c6eb21ac6f6d462792bc2c/master/w_1600%2Cc_limit/La%2520casa%2520maestro.jpg",
      status: "For Sale",
      featured: true,
      title: "Luxury Family Villa",
      location: " BHA Millenium Tower Noida Sector 62 201309",
      price: "₹1.50 Cr",
      beds: 2,
      baths: 2,
      area: "2,200 sqft",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      status: "For Sale",
      featured: false,
      title: "Signature Sky Apartment",
      location: "Golf Course Road, Gurgaon",
      price: "₹8.20 Cr",
      beds: 3,
      baths: 3,
      area: "2,800 sqft",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      status: "For Rent",
      featured: false,
      title: "Modern Suburban Home",
      location: "Whitefield, Bangalore",
      price: "₹85,000",
      priceSuffix: "/mo",
      beds: 3,
      baths: 2,
      area: "1,800 sqft",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      status: "For Sale",
      featured: true,
      title: "Elite Heritage Penthouse",
      location: "Ballygunge, Kolkata",
      price: "₹15.80 Cr",
      beds: 5,
      baths: 5,
      area: "5,500 sqft",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      status: "For Rent",
      featured: true,
      title: "Premium Sea View Flat",
      location: "Marine Drive, Mumbai",
      price: "₹2.50 Lakh",
      priceSuffix: "/mo",
      beds: 3,
      baths: 2,
      area: "2,200 sqft",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070&auto=format&fit=crop",
      status: "For Sale",
      featured: true,
      title: "Grand Regency Estate",
      location: "Banjara Hills, Hyderabad",
      price: "₹18.40 Cr",
      beds: 6,
      baths: 6,
      area: "7,200 sqft",
    },
  ];

  const filteredProperties = properties.filter((property) => {
    if (filter === "all") return true;
    if (filter === "sale") return property.status === "For Sale";
    if (filter === "rent") return property.status === "For Rent";
    return true;
  });

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto bg-white">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
        <div className="text-center lg:text-left">
          <h2 className="text-[36px] md:text-[46px] leading-[1.15] font-medium text-slate-900 mb-4 tracking-tight">
            Discover our featured <br className="hidden md:block" />
            properties
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-lg">
            Explore our handpicked selection of premium properties across the
            most sought-after locations, tailored for your comfortable living.
          </p>
        </div>

        {/* Filters */}
        <div className="flex bg-slate-50 p-1.5 rounded-full border border-slate-100 shadow-sm">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 cursor-pointer ${
              filter === "all"
                ? "bg-white text-slate-900 shadow-sm border border-slate-200/50"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("sale")}
            className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 cursor-pointer ${
              filter === "sale"
                ? "bg-white text-slate-900 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-200/50"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setFilter("rent")}
            className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 cursor-pointer ${
              filter === "rent"
                ? "bg-white text-slate-900 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-200/50"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Rent
          </button>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="group bg-white rounded-[32px] p-3 border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-5 bg-slate-100">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-12">
                <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[12px] font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
                  {property.status}
                </span>
                {property.featured && (
                  <span className="bg-[#1a1a1a] backdrop-blur-md text-white text-[12px] font-semibold px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                    Featured
                  </span>
                )}
              </div>

              {/* Like Button */}
              <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm cursor-pointer z-10">
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="px-3 pb-3 flex flex-col flex-1">
              <div className="flex items-end justify-between mb-3">
                <h3 className="text-xl font-semibold text-slate-900 tracking-tight block truncate">
                  {property.title}
                </h3>
                <div className="text-[22px] font-semibold text-slate-900 ml-3 whitespace-nowrap">
                  {property.price}
                  {property.priceSuffix && (
                    <span className="text-slate-500 text-[14px] font-normal">
                      {property.priceSuffix}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center text-slate-500 text-[14px] mb-6">
                <MapPin className="w-4 h-4 mr-1.5 shrink-0" />
                <span className="truncate">{property.location}</span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-slate-100 mb-5 mt-auto"></div>

              {/* Amenities */}
              <div className="flex items-center justify-between text-slate-600 text-[14px] font-medium">
                <div className="flex items-center gap-2">
                  <BedDouble className="w-4 h-4 text-slate-400" />
                  {property.beds} Beds
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                <div className="flex items-center gap-2">
                  <Bath className="w-4 h-4 text-slate-400" />
                  {property.baths} Baths
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                <div className="flex items-center gap-2">
                  <Maximize className="w-4 h-4 text-slate-400" />
                  {property.area}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="text-center mt-14">
        <button className="bg-white border border-slate-200 hover:border-slate-800 text-slate-900 font-medium px-8 py-4 rounded-full text-[15px] inline-flex items-center gap-2 transition-all cursor-pointer hover:shadow-md hover:-translate-y-0.5">
          See All Listing <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
