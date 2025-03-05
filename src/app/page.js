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
import Image from "next/image";

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


      <div className="container mx-auto py-4 px-4 md:px-8 lg:px-16">
        <Section1 />
      </div>
      <Card />
      <Product />
      <PromoCards/>
      <FeatureProduct/>
      <CardSection/>
      {/* <div className="flex gap-6 p-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div> */}
      <ProductSection />
      <div className="w-full">
        <Image src='/assets/images/div.site-promo.png' alt="image" height={50} width={1500}></Image>
      </div>
      <PopularCompanies/>
      <Footer/>
    </div>
  );
};

export default Page;
