import {
  AboutUsImage,
  AboutUsProfile1,
  AboutUsProfile2,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const HeroAboutUs = () => {
  return (
    <div className="w-full">
      <div className="h-52 md:h-[400px] relative w-full">
        <Image
          src={AboutUsImage}
          alt="contact us image"
          className="h-full w-full "
        />
        <p className="absolute top-[60%]  left-8 md:top-[80%] md:left-28 text-2xl md:text-4xl text-white">
          ABOUT NORTHSTAR
        </p>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 gap-2 mt-10 md:mt-20">
          <div className="max-h-[500px] relative">
            <Image src={AboutUsProfile1} alt="about us 1" className="h-full object-cover" />
            <div className="absolute bg-white bottom-4 md:bottom-10 right-[30%] md:right-[35%] lg:right-[45%] px-2 md:px-5 rounded-lg cursor-pointer text-xs md:text-base font-semibold py-2">BUY NOW</div>
          </div>
          <div className="max-h-[500px] relative">
            <Image src={AboutUsProfile2} alt="about us 1" className="h-full object-cover" />
            <div className="absolute bg-white bottom-4 md:bottom-10 right-[30%] md:right-[35%] lg:right-[45%] px-2 md:px-5  rounded-lg cursor-pointer text-xs md:text-base font-semibold py-2">BUY NOW</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeroAboutUs;
