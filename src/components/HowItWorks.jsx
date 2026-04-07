import { Home, Users, Key, Building } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Find Your Dream Home",
      description:
        "Browse our extensive collection of premium properties and find the perfect space that fits your lifestyle.",
      icon: Home,
    },
    {
      id: 2,
      title: "Connect with Experts",
      description:
        "Our professional realtors are here to guide you through every step of the buying or renting process.",
      icon: Users,
    },
    {
      id: 3,
      title: "Secure Your Key",
      description:
        "Complete the paperwork with ease and get ready to step into your brand new home or commercial space.",
      icon: Key,
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#fff8f4] overflow-hidden rounded-4xl mx-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Images Collage */}
        <div className="relative w-full aspect-square md:aspect-auto md:h-[650px] mx-auto max-w-[600px] lg:max-w-none">
          {/* Top Left Image */}
          <div className="absolute top-0 left-0 w-[60%] aspect-[4/3] rounded-3xl overflow-hidden shadow-sm z-0">
            <img
              src="https://themantriblog.wordpress.com/wp-content/uploads/2013/07/mantri-ecr_villa-d_night-c3-no-people-copy.jpg"
              alt="Family outside home"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Left Image */}
          <div className="absolute bottom-[10%] left-0 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-md z-10 hidden sm:block">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?black&black&fit=crop"
              alt="Family inside home"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-0 right-0 w-[55%] aspect-[3/4] rounded-3xl overflow-hidden shadow-sm z-0">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?graytext-black/80&h=800&fit=crop"
              alt="Modern architectural home"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Floating Widget */}
          <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)] z-20 flex items-center gap-4 min-w-[220px]">
            <div className="w-12 h-12 bg-[#1a4a38] rounded-full flex items-center justify-center shrink-0">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-black/80 text-[11px] font-semibold mb-0.5">
                Properties For Sale
              </p>
              <p className="text-orange-950 font-bold text-2xl leading-none">
                14K+
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Content & Steps */}
        <div className="flex flex-col">
          <h2 className="text-[34px] lg:text-[40px] leading-[1.2] mb-5 tracking-tight text-orange-950">
            <span className="font-semibold">How It works?</span>
            <br />
            <span className="font-bold">Find a perfect home</span>
          </h2>

          <p className="text-black text-[15px] mb-12 max-w-[90%] leading-relaxed">
            We simplify the process of finding your ideal property by providing
            expert guidance, verified listings, and a seamless closing
            experience.
          </p>

          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-6 group">
                {/* Custom Icon Container with Yellow offset background */}
                <div className="relative w-[50px] shrink-0 mt-1">
                  <div className="absolute top-1 left-2 w-10 h-10 bg-orange-100 rounded-full transition-transform group-hover:scale-110 duration-300"></div>
                  <step.icon
                    className="absolute top-0 left-0 w-8 h-8 text-black"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-orange-950 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-black/80 text-[14px] leading-relaxed max-w-[85%]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
