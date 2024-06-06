import { AboutUsProfile1, AboutUsProfile2, DhakalImage, GuddiImage } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Tiffany",
      desc: "I ordered 5 shirts from them and received them in no time. The customer support was awesome!",
      profile: AboutUsProfile2,
    },
    {
      name: "James",
      desc: "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
      profile: DhakalImage,
    },
    {
      name: "Stacy",
      desc: "Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.",
      profile: GuddiImage,
    },
  ];

  return (
    <div className="container flex flex-col items-center py-10 md:py-20">
      <p className="text-4xl font-semibold text-[#1D1D1D]">Testimonials</p>
      <div className="flex flex-col gap-14 mt-10 md:mt-20">
        {testimonials.map((item, index) => {
          return (
            <div key={index} className="flex gap-4 md:gap-10 items-center">
              <div className="size-24 sm:size-28 md:size-48 lg:h-64 lg:w-64 rounded-full bg-black overflow-hidden">
                <Image
                  alt={item.name}
                  src={item.profile}
              
                  className="object-cover"
                />
              </div>
              <div className="max-w-[230px] md:max-w-[500px] flex flex-col md:gap-10">
                <div>
                  <p className="text-[#555555] text-[10px]  md:text-base font-bold">" {item.desc} "</p>
                </div>
                <p className="font-bold mt-2 text-xs  md:text-base">- {item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
