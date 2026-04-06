import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent! We will contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have a property in mind or need help buying, selling, or investing?
            We're here to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT INFO */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-orange-500 font-medium">query@sarvmanglaminvestors.com</p>
              <p className="text-sm text-gray-500 mt-1">We generally reply within 24 hours.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-700 text-lg">+91 9168805979</p>
              <p className="text-sm text-gray-500 mt-1">Mon–Sat, 10AM – 7PM IST</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Office</h3>
              <p className="text-gray-700 leading-relaxed max-w-xs">
                BHA Millennium Tower <br />
                Sector 62, Noida – 201301
              </p>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Promise</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Response within 24 hours</li>
                <li>Free property consultation</li>
                <li>Trusted support for buyers & sellers</li>
              </ul>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-[24px] border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-900"
                  >
                    <option value="">Select an option</option>
                    <option>Buy Property</option>
                    <option>Sell Property</option>
                    <option>Rent Property</option>
                    <option>Investment Consultation</option>
                    <option>Support / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Message *</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl p-3.5 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white hover:bg-slate-800 font-medium py-4 rounded-xl transition-all mt-4"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;