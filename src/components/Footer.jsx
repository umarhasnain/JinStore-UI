"use client";
import React from "react";
import { FaApple, FaFacebookF, FaGooglePlay, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaCcVisa, FaPaypal, FaCcStripe } from "react-icons/fa";
import { SiKlarna } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Newsletter Subscription */}
      <div className="container mx-auto px-4 py-8 border-b">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-semibold">Join our newsletter for £10 offs</h3>
            <p className="text-sm text-gray-600">
              Register now to get the latest updates on promotions & coupons. Don’t worry, we don’t spam!
            </p>
          </div>
          <div className="flex items-center w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 w-full md:w-80 rounded-l-lg border outline-none"
            />
            <button className="bg-purple-600 text-white px-5 py-3 rounded-r-lg hover:bg-purple-700 transition">
              SEND
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          By subscribing, you agree to our{" "}
          <span className="text-blue-600 cursor-pointer">Terms & Conditions</span> and{" "}
          <span className="text-blue-600 cursor-pointer">Privacy & Cookies Policy</span>.
        </p>
      </div>

      {/* Footer Sections */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Help Section */}
        <div>
          <h4 className="text-lg font-semibold">Do You Need Help?</h4>
          <p className="text-sm text-gray-600 mt-2">Auto seligen syr. Nek diarask fröbomba.</p>
          <p className="text-sm text-gray-600">Monday-Friday: 08am - 9pm</p>
          <p className="text-xl font-bold mt-1">0 800 300-353</p>
          <p className="text-sm mt-2">Need help with your order?</p>
          <p className="text-black font-semibold">info@example.com</p>
        </div>

        {/* Money-Making Links */}
        <div>
          <h4 className="text-lg font-semibold">Make Money with Us</h4>
          <ul className="text-sm text-gray-600 space-y-2 mt-2">
            <li>Sell on Grogin</li>
            <li>Sell Your Services</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Sell-Publish with Us</li>
          </ul>
        </div>

        {/* Help & Policies */}
        <div>
          <h4 className="text-lg font-semibold">Let Us Help You</h4>
          <ul className="text-sm text-gray-600 space-y-2 mt-2">
            <li>Accessibility Statement</li>
            <li>Your Orders</li>
            <li>Returns & Replacements</li>
            <li>Shipping Rates & Policies</li>
            <li>Privacy Policy</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Company Info & App Links */}
        <div>
          <h4 className="text-lg font-semibold">Download our app</h4>
          <div className="mt-2 flex flex-col gap-2">
      <button className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md">
        <FaGooglePlay className="text-white text-2xl" />
        <span>Get it on Google Play</span>
      </button>
      <button className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md">
        <FaApple className="text-white text-2xl" />
        <span>Download on the App Store</span>
      </button>
    </div>

          {/* Social Media Icons */}
          <h4 className="text-lg font-semibold mt-6">Follow us on social media:</h4>
          <div className="flex gap-3 mt-2">
            <FaFacebookF className="text-gray-700 hover:text-blue-600 text-xl cursor-pointer" />
            <FaXTwitter className="text-gray-700 hover:text-black text-xl cursor-pointer" />
            <FaInstagram className="text-gray-700 hover:text-pink-600 text-xl cursor-pointer" />
            <FaLinkedin className="text-gray-700 hover:text-blue-500 text-xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p>© 2024 Jinstore WooCommerce WordPress Theme. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
          <FaCcVisa className="text-blue-600 text-3xl" />
      <FaPaypal className="text-blue-500 text-3xl" />
      <FaCcStripe className="text-purple-600 text-3xl" />
      <SiKlarna className="text-pink-500 text-3xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
