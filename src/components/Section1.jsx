"use client";
import TextData from "@/utils/dummyText.js";
import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Responsive Grid for all screen sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TextData.map((item, i) => (
          <div 
            key={i} 
            className="flex gap-4 items-center bg-white shadow-md rounded-lg p-4"
          >
            {/* Image */}
            <div className="w-20 h-20 relative">
              <Image 
                src={item.image} 
                layout="fill" 
                objectFit="contain" 
                alt="img" 
                className="rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-lg md:text-xl font-bold text-gray-800">{item.tittle}</h1>
              <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
