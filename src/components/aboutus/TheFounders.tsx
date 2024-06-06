import {
  AboutUsProfile1,
  AboutUsProfile2,
  DhakalImage,
  GuddiImage,
  RajuImage,
  Shirt,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const TheFounders = () => {
  const founders = [
    {
      name: "Sujit Dhakal",
      image: DhakalImage,
    },
    {
      name: "Raju Acchami",
      image: RajuImage,
    },
    {
      name: "Anukul Ghimire",
      image: GuddiImage,
    },
    {
        name: "Sujit Dhakal",
        image: DhakalImage,
      }
  ];
  return (
    <div className="container py-10 md:py-20">
      <div className=" text-center mb-10 md:mb-20">
        <p className="text-4xl font-semibold text-[#1D1D1D]">The Founder</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-1 place-items-center
       ">
        {founders.map((item, index) => {
          return (
            <div  >
              <div className=" size-40 sm:size-48 md:h-72 md:w-72 flex items-start justify-start">
                <Image src={item.image} alt={item.name} className="h-full object-cover lg:object-contain" />
              </div>
              <p className="mt-1 lg:mt-4 mb-4 lg:mb-0 lg:ml-8 text-sm md:text-base font-semibold ">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TheFounders;
