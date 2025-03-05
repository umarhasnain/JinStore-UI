"use client";
import React from "react";
import Card from "@/components/Card";
import SliderComponent from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Product from "@/components/ProductCard";
import Section1 from "@/components/Section1";
import TextData from "@/utils/dummyText";
import PromoCards from "@/components/PromoCard";
import PopularCompanies from "@/components/Reviews";
import Footer from "@/components/Footer";
import CardSection from "@/components/CardSection";
import ProductSection from "@/components/ProductSection";
import Sidebar from "@/components/Sidebar";
import HomePageLayout from "@/components/Carousel";
import ProductCard from "@/components/ProCard";
import FeatureProduct from "@/components/FeatureProduct";

const Page = () => {

  const products = [
    {
      name: "Marketside Fresh Organic Bananas, Bunch",
      image: "/images/bananas.png",
      price: 0.89,
      oldPrice: 1.99,
      discount: 56,
      rating: 3,
      reviews: 2,
      organic: true,
    },
    {
      name: "Lay’s Classic Potato Chips, 13 oz",
      image: "/images/lays.png",
      price: 1.0,
      oldPrice: 1.99,
      discount: 50,
      rating: 4,
      reviews: 3,
      organic: false,
    },
  ];

  return (
    <div className="min-h-screen w-full">
 
      <Navbar />

     <HomePageLayout/>
          {/* <div className="flex flex-col lg:flex-row items-center w-full py-8 md:py-12 px-4 md:px-12 lg:px-24 space-y-8 lg:space-y-0 lg:space-x-8">
       <div className="w-full lg:w-1/2">
         <Sidebar />
       </div>
       <div className="w-full lg:w-1/2">
         <SliderComponent />
       </div>
     </div>
   */}


      <div className="container mx-auto py-4 px-4 md:px-8 lg:px-16">
        <Section1 />
      </div>
      <Card />
      <Product />
      <PromoCards/>
      <CardSection/>
      {/* <div className="flex gap-6 p-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div> */}
      <ProductSection />
      <FeatureProduct/>
      <PopularCompanies/>
      <Footer/>
    </div>
  );
};

export default Page;
