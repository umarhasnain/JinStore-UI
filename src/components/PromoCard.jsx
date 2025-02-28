"use client";
import React from "react";

const promoData = [
  {
    title: "Provides you experienced quality products",
    description: "Feed your family the best",
    image: "/assets/images/banner-05.jpg.png",
  },
  {
    title: "Shopping with us for better quality and the best price",
    description: "Only this week. Don’t miss...",
    image: "/assets/images/banner-07.jpg.png",
  },
  {
    title: "Get the best quality products at the lowest prices",
    description: "A different kind of grocery store",
    image: "/assets/images/banner-08.jpg.png",
  },
  {
    title: "Where you get all your favorite brands under one roof",
    description: "Only this week. Don’t miss...",
    image: "/assets/images/banner-09.jpg.png",
  },
];

const PromoCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {promoData.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
            className="relative bg-cover bg-center shadow-lg rounded-xl p-6 flex flex-col justify-between h-[400px] overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

            {/* Text Content */}
            <div className="relative z-10 text-white">
              <p className="text-orange-400 font-semibold text-sm">Only This Week</p>
              <h2 className="text-lg font-bold mt-2 leading-tight">{item.title}</h2>
              <p className="text-sm mt-1">{item.description}</p>
            </div>

            {/* Button */}
            <button className="relative z-10 w-[150px] mt-4 bg-white text-black px-5 py-2 rounded-full flex items-center gap-2 font-semibold hover:bg-gray-200 transition">
              Shop Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCards;
