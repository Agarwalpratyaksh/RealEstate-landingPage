// src/components/SearchWidget.jsx
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SearchWidget() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [isFocused, setIsFocused] = useState(false);

  const tabs = [
    { id: "Buy", label: "Buy" },
    { id: "Rent", label: "Rent" },
    { id: "Sell", label: "Sell" },
  ];

  return (
    <div className="w-full max-w-[900px] flex flex-col items-center">
      {/* Top Tabs */}
      <div className="flex bg-orange-950/40 backdrop-blur-md rounded-t-2xl p-1.5 w-[fit-content] self-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-2.5 rounded-xl text-[15px] font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === tab.id
                ? "bg-white text-black shadow-sm"
                : "text-white hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Inputs Container */}
      <div
        className={`bg-white w-full rounded-2xl md:rounded-[32px] md:rounded-tl-none transition-shadow duration-300 p-2 sm:p-2.5 ${
          isFocused
            ? "shadow-[0_20px_70px_rgba(30,41,59,0.15)] ring-1 ring-orange-200"
            : "shadow-[0_15px_60px_rgba(0,0,0,0.1)]"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-1 w-full">
          {/* Property Type */}
          <div
            className="flex-1 w-full px-5 py-3 hover:bg-orange-50 cursor-pointer transition-colors rounded-2xl group border-b lg:border-b-0 lg:border-r border-orange-200 lg:border-orange-100 last:border-0"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            tabIndex={0}
          >
            <div className="text-[13px] font-bold text-black mb-1">
              Property Type
            </div>
            <div className="flex items-center justify-between text-black text-[14px]">
              Select Property Type{" "}
              <ChevronDown className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Location */}
          <div className="flex-1 w-full px-5 py-3 hover:bg-orange-50 cursor-text transition-colors rounded-2xl border-b lg:border-b-0 lg:border-r border-orange-200 lg:border-orange-100 last:border-0">
            <label className="block text-[13px] font-bold text-black mb-1 cursor-text">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g Bandra, Mumbai"
              className="w-full text-[14px] focus:outline-none placeholder-gray-500 bg-transparent text-black font-medium"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          {/* Price Range */}
          <div
            className="flex-1 w-full px-5 py-3 hover:bg-orange-50 cursor-pointer transition-colors rounded-2xl group border-b lg:border-b-0 border-orange-200 lg:border-orange-100"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            tabIndex={0}
          >
            <div className="text-[13px] font-bold text-black mb-1">
              Price Range
            </div>
            <div className="text-black text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
              Min. Price - Max. Price
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full lg:w-auto bg-orange-400 hover:bg-orange-500 active:scale-95 text-white font-semibold py-4 md:py-5 px-8 md:px-10 rounded-[24px] text-[15px] transition-all duration-200 shadow-md cursor-pointer shrink-0 mt-2 lg:mt-0 lg:ml-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
