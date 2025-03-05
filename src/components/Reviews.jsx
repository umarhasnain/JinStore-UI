"use client";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const companies = [
  {
    name: "Machic",
    rating: 4,
    reviews: 41,
    description: "Good quality product can only be found in good stores.",
  },
  {
    name: "Blonwe",
    rating: 4,
    reviews: 37,
    description: "All kinds of grocery products are available in our store.",
  },
  {
    name: "Bacola",
    rating: 3.5,
    reviews: 35,
    description: "Our work can definitely support the local economy.",
  },
  {
    name: "Medibazar",
    rating: 3,
    reviews: 30,
    description: "Save your time – save your money – shop from our grocery store.",
  },
];

// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center text-yellow-500">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {halfStar && <FaRegStar />}
    </div>
  );
};

const PopularCompanies = () => {
  return (
    <section className="container mx-auto px-24 py-8">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Popular Companies</h2>
        <button className="text-sm flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition">
          View All →
        </button>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-sm bg-white hover:shadow-md transition"
          >
            {/* Company Profile */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
               {/* Placeholder Profile Image */}
              <div>
                <h3 className="text-lg font-semibold">{company.name}</h3>
                <p className="text-xs text-gray-500">Featured</p>
              </div>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-2 mt-3">
              <StarRating rating={company.rating} />
              <span className="text-sm text-gray-600">{company.reviews}</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm mt-3">{company.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCompanies;
