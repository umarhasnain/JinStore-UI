"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows for a clean UI
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/assets/images/div.slick-list.png"
            alt="Slide 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/assets/images/div.slick-list.png"
            alt="Slide 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/assets/images/div.slick-list.png"
            alt="Slide 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
