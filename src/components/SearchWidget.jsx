// src/components/SearchWidget.jsx
import { Compass, Mic, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SearchWidget() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [isFocused, setIsFocused] = useState(false);

  const tabs = [
    { id: "Buy", label: "Buy" },
    { id: "Rent", label: "Rent" },
    { id: "New Launch", label: "New Launch", badge: true },
    { id: "Commercial", label: "Commercial" },
    { id: "Plots/Land", label: "Plots/Land" },
    { id: "Projects", label: "Projects" },
  ];

  return (
    <div
      className={`bg-white w-full max-w-[1050px] rounded-3xl transition-shadow duration-300 flex flex-col pt-3 overflow-hidden ${
        isFocused
          ? "shadow-[0_20px_70px_rgba(251,146,60,0.15)] ring-1 ring-orange-200"
          : "shadow-[0_15px_60px_rgba(0,0,0,0.12)]"
      }`}
    >
      {/* Top Tabs */}
      <div className="flex items-center px-6 sm:px-10 pt-2 pb-0 gap-6 sm:gap-8 text-[15px] font-semibold text-slate-500 border-b border-slate-100 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-3 whitespace-nowrap transition-colors duration-200 cursor-pointer ${
              activeTab === tab.id ? "text-orange-500" : "hover:text-slate-800"
            }`}
          >
            {tab.label}
            {tab.badge && (
              <span className="absolute top-0 -right-2 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
            )}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-orange-500 rounded-t-full"></span>
            )}
          </button>
        ))}
        <div className="flex-1"></div>
        <button className="hidden sm:flex hover:text-orange-500 pb-3 text-slate-700 items-center gap-1.5 cursor-pointer transition-colors font-medium">
          Post Property{" "}
          <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded-sm uppercase tracking-wider font-bold shadow-sm">
            Free
          </span>
        </button>
      </div>

      {/* Search Input Row */}
      <div className="flex flex-col sm:flex-row items-center p-3 sm:px-4 sm:py-3 gap-3">
        {/* Category Dropdown */}
        <button className="flex items-center justify-between gap-2 text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-medium w-full sm:w-auto min-w-[160px] cursor-pointer hover:bg-slate-100 hover:border-slate-300 transition-all duration-200">
          All Residential <ChevronDown className="w-4 h-4 text-slate-500" />
        </button>

        {/* Input area */}
        <div
          className={`flex-1 relative flex items-center h-[52px] w-full bg-white rounded-xl border transition-all duration-200 ${
            isFocused
              ? "border-orange-400 shadow-[0_0_0_4px_rgba(251,146,60,0.1)]"
              : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <div className="absolute left-3.5 text-slate-400 transition-colors">
            <Search
              className={`w-5 h-5 ${isFocused ? "text-orange-500" : ""}`}
            />
          </div>
          <input
            type="text"
            placeholder='Search "Flats for rent in sector 77 Noida"'
            className="w-full h-full pl-11 pr-24 text-[15px] focus:outline-none placeholder-slate-400 bg-transparent text-slate-800"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* Action Icons */}
          <div className="absolute right-2 flex items-center gap-1.5">
            <button
              className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 hover:bg-orange-100 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="Search nearby"
            >
              <Compass className="w-[18px] h-[18px]" />
            </button>
            <button
              className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 hover:bg-orange-100 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="Voice search"
            >
              <Mic className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>

        {/* Search submit */}
        <button className="w-full sm:w-auto bg-orange-400 hover:bg-orange-500 active:scale-95 text-white font-bold py-3.5 px-8 rounded-xl text-[15px] transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-orange-400/30 cursor-pointer shrink-0">
          Search
        </button>
      </div>
    </div>
  );
}
