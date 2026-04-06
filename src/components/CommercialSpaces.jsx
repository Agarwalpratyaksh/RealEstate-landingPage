export default function CommercialSpaces() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold text-orange-600 tracking-widest uppercase mb-4">
            Commercial Spaces
          </p>
          <h2 className="text-3xl md:text-[38px] leading-tight font-bold text-[#0f172a] max-w-2xl mx-auto">
            Choose from a wide variety of commercial properties
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buying Card */}
          <div className="relative rounded-[24px] overflow-hidden group min-h-[450px] shadow-sm flex flex-col justify-start p-12">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
              alt="Buy Commercial"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e6e9ed] via-[#e6e9ed]/90 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 max-w-[85%]">
              <p className="text-[#8c94a3] text-xs font-bold tracking-widest uppercase mb-4">
                Buy for commercial use
              </p>
              <h3 className="text-3xl lg:text-[34px] font-bold text-[#0f172a] leading-tight mb-4">
                Buy a Commercial
                <br />
                property
              </h3>
              <p className="text-[#3b4b60] text-[15px] leading-relaxed mb-8">
                Explore from Office Spaces, Co-working spaces, Retail Shops,
                Land, Factories and more
              </p>
              <button className="bg-orange-300 hover:bg-orange-400 text-white font-bold px-7 py-3.5 rounded-lg text-[15px] transition-colors shadow-md cursor-pointer">
                Explore Buying Commercial
              </button>
            </div>
          </div>

          {/* Leasing Card */}
          <div className="relative rounded-[24px] overflow-hidden group min-h-[450px] shadow-sm flex flex-col justify-start p-12">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1445359179985-460648949e10?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lease Commercial"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f3ebe1] via-[#f3ebe1]/90 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 max-w-[85%]">
              <p className="text-[#8c94a3] text-xs font-bold tracking-widest uppercase mb-4">
                Lease for commercial use
              </p>
              <h3 className="text-3xl lg:text-[34px] font-bold text-[#0f172a] leading-tight mb-4">
                Lease a Commercial
                <br />
                property
              </h3>
              <p className="text-[#3b4b60] text-[15px] leading-relaxed mb-8">
                Explore from Office Spaces, Co-working spaces, Retail Shops,
                Land, Factories and more
              </p>
              <button className="bg-orange-300 hover:bg-orange-400 text-white font-bold px-7 py-3.5 rounded-lg text-[15px] transition-colors shadow-md cursor-pointer">
                Explore Leasing Commercial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
