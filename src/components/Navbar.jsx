'use client';
import { useState, useEffect } from "react";
import { Search, ShoppingCart, Heart, User, MapPin, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-xs sm:text-sm text-center py-2 px-4 flex flex-wrap justify-evenly gap-16 items-center">
        <span className="inter.className">FREE delivery & 40% Discount for next 3 orders!</span>
        <span>Sale ends in: <strong>47 days 06 hours 55 minutes 51 sec</strong></span>
      </div>
      
      {/* Center Navbar */}
      <div className="bg-gray-100 py-2 px-6 md:px-28 text-gray-700 text-xs sm:text-sm flex flex-wrap justify-between">
        <div className="hidden md:flex gap-2">
          <a href="#" className="hover:text-purple-600">About Us</a>
          <a href="#" className="hover:text-purple-600">My Account</a>
          
          <a href="#" className="hover:text-purple-600">Wishlist | </a>
          <a href="#" className="hover:text-purple-600">Delivery: <span>7:00 AM - 11:00 PM</span></a>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="relative">
            <button onClick={() => setLanguageOpen(!languageOpen)} className="flex items-center text-gray-700">
              English <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {languageOpen && (
              <div className="absolute bg-white shadow-md mt-2 py-2 w-24 text-sm">
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">English</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">Spanish</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={() => setCurrencyOpen(!currencyOpen)} className="flex items-center text-gray-700">
              USD <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {currencyOpen && (
              <div className="absolute bg-white shadow-md mt-2 py-2 w-24 text-sm">
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">USD</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-100">EUR</a>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-purple-600">Order Tracking</a>
        </div>
      </div>
      
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 md:px-28 py-4 bg-white border-b">
        {/* Mobile Menu Button */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 flex items-center">
          <Image src="/assets/images/logo.png" alt="logo" width={40} height={40} />
          <span className="text-orange-500 ml-2">Jin</span>Store
        </div>

        {/* Delivery Location */}
        {!isMobile && (
          <div className="hidden md:flex items-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5" />
            <span>Deliver to all</span>
          </div>
        )}

        {/* Search Bar */}
        {!isMobile && (
         <div className="flex-grow mx-4 max-w-xl relative">
         <input
           type="text"
           placeholder="Search for products, categories or brands..."
           className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
         />
         <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
       </div>
        )}

        {/* Icons */}
        <div className="flex items-center gap-4">
          <User className="w-6 h-6 cursor-pointer" />
          <Heart className="w-6 h-6 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <span className="text-red-600 text-sm">0</span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && isMobile && (
        <div className="bg-white p-4 shadow-md">
          <a href="#" className="block py-2 hover:text-purple-600">About Us</a>
          <a href="#" className="block py-2 hover:text-purple-600">My Account</a>
          <a href="#" className="block py-2 hover:text-purple-600">Wishlist</a>
          <a href="#" className="block py-2 hover:text-purple-600">Order Tracking</a>
        </div>
      )}
    </nav>
  );
}
