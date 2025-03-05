"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [shopDropdown, setShopDropdown] = useState(false);
  const [trendingDropdown, setTrendingDropdown] = useState(false);
  return (
    <nav className="w-full bg-white shadow-md font-Inter px-6 lg:px-2 py-4 text-[12px] flex flex-col lg:flex-row justify-between gap-[80px] items-start lg:items-center">
      
    {/* Menu Items */}
    <div className="flex flex-col font-bold lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full">
      <Link href="#" className="text-purple-600 font-medium">Home</Link>

      {/* Shop Dropdown */}
      <div className="relative">
        <button
          className="flex items-center space-x-1 text-gray-700"
          onClick={() => setShopDropdown(!shopDropdown)}
        >
          <span>Shop</span> <FaChevronDown size={12} />
        </button>
        {shopDropdown && (
          <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">All Products</Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">New Arrivals</Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Best Sellers</Link>
          </div>
        )}
      </div>

      <Link href="#" className="text-gray-700">Fruits</Link>
      <Link href="#" className="text-gray-700"> Vegetables</Link>
      <Link href="#" className="text-gray-700">Beverages</Link>
      <Link href="#" className="text-gray-700">Blog</Link>
      <Link href="#" className="text-gray-700">Contact</Link>
    </div>

    {/* Right Side - Trending Products & Sale */}
    <div className="flex flex-col font-bold lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 w-full mt-4 lg:mt-0">
      {/* Trending Dropdown */}
      <div className="relative">
        <button
          className="flex  items-center space-x-1 text-gray-700"
          onClick={() => setTrendingDropdown(!trendingDropdown)}
        >
          <span>Trending Products</span> <FaChevronDown size={12} />
        </button>
        {trendingDropdown && (
          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Most Popular</Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Top Rated</Link>
          </div>
        )}
      </div>

      {/* Almost Finished Sale */}
      <Link href="#" className="text-red-600 font-semibold flex items-center">
        Almost Finished
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 ml-2 rounded">
          SALE
        </span>
      </Link>
    </div>
  </nav>
  );
};

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto ">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative w-full">
          <Image
            src="/assets/images/div.slick-list.png"
            alt="Slide 1"
            width={1030}
            height={482}
            className="w-full h-[250px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* Slide 2 - Navigation Bar Screenshot */}
        <div className="relative w-full">
          <Image
            src="/assets/images/div.slick-list.png"
            alt="Slide 1"
            width={1030}
            height={482}
            className="w-full h-[250px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* Slide 3 */}
        <div className="relative w-full">
          <Image
            src="/assets/images/div.slick-list.png"
            alt="Slide 1"
            width={1030}
            height={482}
            className="w-full h-[250px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-contain rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

const HomePageLayout = () => {
  return (
    <>

      <div className="flex flex-col lg:flex-row items-center w-full py-8 md:py-12 px-4 md:px-12 lg:px-24 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Sidebar - Fixed width for large screens */}
        <div className="w-full lg:w-1/4 xl:w-1/4">
          <Sidebar />
        </div>

        {/* SliderComponent - Adjusted width for responsiveness */}
        <div className="w-full lg:w-2/3 xl:w-3/4 max-w-screen-xl">
          <Navbar />
          <SliderComponent />
        </div>
      </div>
    </>
  );
};

export default HomePageLayout;
