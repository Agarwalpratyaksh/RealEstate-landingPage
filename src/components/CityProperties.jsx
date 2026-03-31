// src/components/CityProperties.jsx
export default function CityProperties() {
  const cities = [
    {
      id: 1,
      name: "Chicago",
      properties: "2 Properties",
      image:
        "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=400&h=600&fit=crop",
    },
    {
      id: 2,
      name: "Los Angeles",
      properties: "1 Property",
      image:
        "https://images.unsplash.com/photo-1609924211018-5526c55bad5b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Miami",
      properties: "2 Properties",
      image:
        "https://images.unsplash.com/photo-1597535973747-951442d5dbc7?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Florida",
      properties: "3 Properties",
      image:
        "https://images.unsplash.com/photo-1613231365704-22aa7ad7cffc?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "New York",
      properties: "8 Properties",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=600&fit=crop",
    },
  ];

  return (
    <section className="bg-[#fcfcfc] py-20 px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-[32px] font-bold text-gray-900 mb-3">
            Find Properties in These Cities
          </h2>
          <p className="text-[13px] text-gray-600 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Cities Carousel */}
        <div className="flex gap-5 overflow-x-auto pb-8 snap-x hide-scrollbar">
          {cities.map((city) => (
            <div
              key={city.id}
              className="relative min-w-[220px] w-[220px] h-[340px] rounded-[18px] overflow-hidden snap-start cursor-pointer group shadow-sm flex-1 md:flex-none"
            >
              {/* Background Image */}
              <img
                src={city.image}
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Top Gradient Overlay */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>

              {/* Text Content */}
              <div className="absolute top-5 left-5 z-10">
                <h3 className="text-white font-bold text-[17px] tracking-wide mb-1">
                  {city.name}
                </h3>
                <p className="text-white/80 text-[11px] font-medium">
                  {city.properties}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-4">
          <button className="w-2.5 h-2.5 rounded-full bg-orange-500 relative outline outline-1 outline-offset-4 outline-orange-300 cursor-pointer"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-orange-300 cursor-pointer transition"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-orange-300 cursor-pointer transition"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-orange-300 cursor-pointer transition"></button>
        </div>
      </div>
    </section>
  );
}
