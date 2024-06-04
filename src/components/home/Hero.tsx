import { Background } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[400px] md:h-[500px] lg:h-[663px] w-full relative">
      <Image
        src={Background}
        alt="background image"
        className="object-cover h-full w-full"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 right-1/2  translate-x-1/2 md:right-32 md:translate-x-0 text-white w-full md:w-[500px] flex flex-col items-center gap-6 px-4 md:px-0">
        <p className="font-bold text-2xl md:text-4xl lg:text-5xl text-center">STYLISH PICKS BEAT THE HEAT</p>
        <div className="border-4 border-gray-200 py-2 px-5 cursor-pointer">
          <p className="text-sm md:text-base lg:text-lg">SHOP NOW</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
