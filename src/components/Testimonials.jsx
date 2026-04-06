import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      role: "Home Owner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
      text: "The experience of finding our dream home was seamless and stress-free. The agents were incredibly responsive and understood exactly what we were looking for. Highly recommended!",
    },
    {
      id: 2,
      name: "Rajesh Malhotra",
      role: "Property Investor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
      text: "I have purchased multiple commercial properties through this portal. The level of detail and transparency provided for each listing makes the investment decision process so much easier.",
    },
    {
      id: 3,
      name: "Priya Iyer",
      role: "Tenant",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
      text: "Finding a rental in a new city is usually a nightmare, but the verified listings and neighborhood insights helped me find a safe, beautiful apartment within my budget in just a week.",
    },
  ];

  return (
    <section className="py-24 px-8 bg-orange-50">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold text-orange-400 tracking-widest uppercase mb-3">
            Client Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-950 mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Discover how we've helped thousands of people find their perfect
            home, investment property, or rental space.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-50 opacity-50" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-black text-[15px] leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-orange-100 pt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-orange-950">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-black font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
