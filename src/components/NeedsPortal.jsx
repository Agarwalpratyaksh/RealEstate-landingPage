// src/components/NeedsPortal.jsx
import { ArrowRight, Home, Key, Building2, Sparkles } from "lucide-react";

export default function NeedsPortal() {
  const portals = [
    {
      id: 1,
      icon: <Home className="w-4 h-4" />,
      subtitle: "BUY A HOME",
      title: "Find, Buy & Own Your Dream Home",
      desc: "Explore from Apartments, builder floors, villas and more. Discover the perfect space to call your own with our curated selection of premium residential properties.",
      btnText: "Explore Buying",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      icon: <Key className="w-4 h-4" />,
      subtitle: "RENT A HOME",
      title: "Rental Homes for Everyone",
      desc: "Explore from Apartments, builder floors, villas and more. Find fully furnished, semi-furnished, or raw spaces that suit your lifestyle and budget perfectly.",
      btnText: "Explore Renting",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    },
    {
      id: 3,
      icon: <Building2 className="w-4 h-4" />,
      subtitle: "COMMERCIAL",
      title: "Commercial Spaces for Business",
      desc: "Explore from Office Spaces, Co-working spaces, Retail Shops and more. Set up your business in prime locations and scale to new heights.",
      btnText: "Explore Commercial",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 py-24 md:py-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[120px] opacity-60 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute top-[40%] -left-40 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-60 mix-blend-multiply pointer-events-none"></div>

      <div className="relative w-full max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="text-center mb-24 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <p className="text-xs font-bold text-slate-600 tracking-widest uppercase">
              All Property Needs - One Portal
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-black text-slate-800 mx-auto max-w-3xl capitalize tracking-tight">
            Find Better Places to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Live, Work
            </span>{" "}
            and Wonder
          </h2>
        </div>

        <div className="flex flex-col gap-28 md:gap-36">
          {portals.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center group"
            >
              {/* Image Block */}
              <div
                className={`relative md:col-span-7 ${
                  index % 2 !== 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                {/* Decorative background block behind image */}
                <div
                  className={`absolute -inset-4 md:-inset-6 rounded-[32px] bg-white shadow-xl shadow-slate-200/50 transition-transform duration-700 group-hover:scale-[1.02] ${
                    index % 2 !== 0 ? "md:-translate-x-4" : "md:translate-x-4"
                  } -z-10`}
                ></div>

                <div className="rounded-[24px] overflow-hidden aspect-[4/3] bg-slate-200 relative">
                  <div className="absolute inset-0 bg-slate-900/10 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Text Block */}
              <div
                className={`md:col-span-5 flex flex-col items-start ${
                  index % 2 !== 0
                    ? "md:order-1 lg:pr-12"
                    : "md:order-2 lg:pl-12"
                }`}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-100 rounded-lg text-orange-600 mb-6 transition-all duration-300 group-hover:bg-orange-100 group-hover:scale-105 origin-left">
                  {item.icon}
                  <p className="text-[11px] font-bold tracking-widest uppercase">
                    {item.subtitle}
                  </p>
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-800 leading-[1.1] mb-6 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-lg leading-relaxed mb-10 border-l-2 border-slate-200 pl-5">
                  {item.desc}
                </p>

                <button className="relative overflow-hidden flex items-center justify-between gap-4 bg-orange-400 text-white font-bold py-3.5 pl-8 pr-3 rounded-2xl text-[15px] transition-all duration-300 shadow-[0_8px_20px_rgba(251,146,60,0.3)] hover:shadow-[0_12px_25px_rgba(251,146,60,0.4)] hover:bg-orange-500 transform hover:-translate-y-1">
                  <span className="relative z-10">{item.btnText}</span>
                  <div className="relative z-10 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
