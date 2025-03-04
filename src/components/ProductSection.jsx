import itemData from '@/utils/productCard';
import Image from 'next/image';
import React from 'react';

const ProductSection = () => {
  return (
    <div className="px-4 py-12">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center mb-6 px-24">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">New Arrivals</h1>
          <p className="text-sm text-gray-600">Don't miss this opportunity at a special discount just for this week.</p>
        </div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-600 transition">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 px-20 py-12  md:grid-cols-3 lg:grid-cols-4 justify-center">
        {itemData.slice(6).map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-md p-4 w-full max-w-[300px] mx-auto relative  transition-transform hover:scale-105"
          >
            {/* Discount Badge */}
            {item.discount && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {item.discount}%
              </span>
            )}

            {/* Product Image */}
            <div className="flex justify-center">
              <Image 
                src={item.image} 
                alt={item.name} 
                width={150} 
                height={150} 
                className="object-contain"
              />
            </div>

            {/* Tags: Organic / Cold Sale */}
            <div className="flex gap-2 mt-2">
              {item.isOrganic && (
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  🌱 ORGANIC
                </span>
              )}
              {item.isCold && (
                <span className="bg-[#A5EFFF] text-[#0891B2] text-xs font-bold px-2 py-1 rounded-full">
                  ❄️ Cold Sale
                </span>
              )}
            </div>

            {/* Product Name */}
            <h2 className="text-gray-800 font-semibold text-md mt-2">
              {item.name}
            </h2>

            {/* Rating */}
            <p className="text-yellow-500 text-sm mt-1">⭐⭐⭐⭐⭐ {item.rating}</p>

            {/* Pricing */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-600 text-lg font-bold">${item.discountedPrice}</span>
              <span className="text-gray-500 text-sm line-through">${item.originalPrice}</span>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full mt-3 bg-white text-purple-500 border py-2 rounded-3xl text-sm font-semibold hover:bg-purple-600 hover:text-black transition">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
