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

const Page = () => {
  console.log("data---", TextData);

  return (
    <div className="min-h-screen w-full">
     
      <Navbar />

     
      <div className="flex flex-col items-center w-full py-4">
        <SliderComponent />
      </div>


      <div className="container mx-auto py-4 px-4 md:px-8 lg:px-16">
        <Section1 />
      </div>
      <Card />
      <Product />
      <PromoCards/>
      <PopularCompanies/>
      <Footer/>
    </div>
  );
};

export default Page;
