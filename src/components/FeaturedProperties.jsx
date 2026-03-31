// src/components/FeaturedProperties.jsx
import { MapPin, BedDouble, Bath, Maximize } from "lucide-react";

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop",
      status: "FOR SALE",
      featured: true,
      title: "Luxury Family Home",
      location: "1800-1818 79th St",
      price: "$395,000",
      beds: 4,
      baths: 1,
      area: 400,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=400&fit=crop",
      status: "FOR SALE",
      featured: false,
      title: "Skyper Pool Apartment",
      location: "1020 Bloomingdale Ave",
      price: "$280,000",
      beds: 4,
      baths: 2,
      area: 450,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=400&fit=crop",
      status: "FOR RENT",
      featured: false,
      title: "North Dillard Street",
      location: "4330 Bell Shoals Rd",
      price: "$250",
      priceSuffix: "/month",
      beds: 4,
      baths: 2,
      area: 400,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=400&fit=crop",
      status: "FOR SALE",
      featured: true,
      title: "Eaton Garth Penthouse",
      location: "7722 18th Ave, Brooklyn",
      price: "$180,000",
      beds: 4,
      baths: 2,
      area: 450,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop",
      status: "FOR RENT",
      featured: true,
      title: "New Apartment Nice View",
      location: "42 Avenue O, Brooklyn",
      price: "$850",
      priceSuffix: "/month",
      beds: 4,
      baths: 1,
      area: 460,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=500&h=400&fit=crop",
      status: "FOR SALE",
      featured: true,
      title: "Diamond Manor Apartment",
      location: "7802 20th Ave, Brooklyn",
      price: "$259,000",
      beds: 4,
      baths: 2,
      area: 500,
    },
  ];

  return (
    <section className="py-16 px-8 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Featured Properties
        </h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
          <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-900 shadow-sm cursor-pointer hover:bg-gray-50">
            All Properties
          </button>
          <button className="px-5 py-2 rounded-full text-gray-500 cursor-pointer hover:text-gray-900">
            For Sale
          </button>
          <button className="px-5 py-2 rounded-full text-gray-500 cursor-pointer hover:text-gray-900">
            For Rent
          </button>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-sm"
          >
            {/* Background Image */}
            <img
              src={property.image}
              alt={property.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex gap-2 z-10 text-[10px] font-bold tracking-wider">
              <span className="bg-emerald-900 text-white px-3 py-1.5 rounded-lg uppercase">
                {property.status}
              </span>
              {property.featured && (
                <span className="bg-orange-400 text-white px-3 py-1.5 rounded-lg uppercase">
                  Featured
                </span>
              )}
            </div>

            {/* Bottom Info Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg z-10 transition-transform duration-300">
              <h3 className="font-bold text-gray-900 text-[15px] mb-1">
                {property.title}
              </h3>
              <div className="flex items-center text-gray-500 text-xs mb-3">
                <MapPin className="w-3 h-3 mr-1" />
                {property.location}
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-[17px] font-extrabold text-orange-500">
                  {property.price}
                  {property.priceSuffix && (
                    <span className="text-gray-400 text-[11px] font-medium tracking-normal">
                      {property.priceSuffix}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-gray-500 text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <BedDouble className="w-4 h-4 text-gray-400" />
                    {property.beds}
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4 text-gray-400" />
                    {property.baths}
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-3.5 h-3.5 text-gray-400" />
                    {property.area}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Action */}
      <div className="text-center mt-12">
        <button className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-bold px-8 py-3 rounded-full text-sm inline-flex items-center gap-2 transition-colors cursor-pointer">
          See All Listing <span>→</span>
        </button>
      </div>
    </section>
  );
}
