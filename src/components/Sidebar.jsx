import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaAppleAlt, FaFish, FaEgg, FaBreadSlice, FaCoffee, FaSnowflake, FaCookie, FaLeaf, FaHome, FaHeartbeat, FaBaby } from "react-icons/fa";

// import { ChevronRightIcon } from "@heroicons/react/solid";

const categories = [
    { name: "Fruits & Vegetables", icon: <FaAppleAlt className="text-black" /> },
    { name: "Meats & Seafood", icon: <FaFish className="text-black" /> },
    { name: "Breakfast & Dairy", icon: <FaEgg className="text-black" /> },
    { name: "Breads & Bakery", icon: <FaBreadSlice className="text-black" /> },
    { name: "Beverages", icon: <FaCoffee className="text-black" /> },
    { name: "Frozen Foods", icon: <FaSnowflake className="text-black" /> },
    { name: "Biscuits & Snacks", icon: <FaCookie className="text-black" /> },
    { name: "Grocery & Staples", icon: <FaLeaf className="text-black" /> },
    { name: "Household Needs", icon: <FaHome className="text-black" /> },
    { name: "Healthcare", icon: <FaHeartbeat className="text-black" /> },
    { name: "Baby & Pregnancy", icon: <FaBaby className="text-black" /> },
  ];
  

export default function Sidebar() {
  return (
    <aside className="w-[230px] h-[560px] bg-white border-[1px] border-slate-100 rounded shadow-lg rounded-lg p-4">
      <button className="flex items-center justify-between w-full text-left text-[14px] font-bold text-[14px] py-3 border-b">
        <span className="flex items-center"><FaBars className="mr-2" /> All Categories</span>
      </button>
      <ul className="mt-2 space-y-1 text-[14px]  text-gray-700">
        {categories.map((item, index) => (
          <li
            key={index}
            className="flex justify-between  items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            <span className="flex items-center gap-2">{item.icon} {item.name}</span>
            {/* <ChevronRightIcon className="w-4 h-4 text-gray-500" /> */}
          </li>
        ))}
      </ul>
    </aside>
  );
}
