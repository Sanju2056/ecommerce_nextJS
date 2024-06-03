import { Background } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[663px] w-full relative">
      <Image
        src={Background}
        alt="background image"
        className="object-cover h-full w-full"
      />
      <div className="absolute top-60 right-32  text-white w-[500px] flex flex-col items-center gap-6">
        <p className="font-bold text-5xl text-center">STYLISH PICKS BEAT THE HEAT</p>
        <div className="border-4 border-gray-200 py-2 px-5 cursor-pointer">
          <p>SHOP NOW</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
