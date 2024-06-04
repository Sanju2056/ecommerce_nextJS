import { ArrowRight } from "@/assets/icons";
import { ArrowDownImage, EmailImage, Shirt, StarImage } from "@/assets/images";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="container py-10">
      <div className="flex flex-col justify-center md:flex-row  md:items-start gap-4">
        <div className="h-[500px] ">
          <Image src={Shirt} alt="image" className="object-contain h-full" />
        </div>
        <div className="pl-2 md:pl-0 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex text-sm font-bold gap-1">
              <p className="text-[#888888]">HOME / SHOP / WOMEN /</p>{" "}
              <span className="text-[#1D1D1D]"> SHOP</span>
            </div>
            <p className="text-3xl font-semibold text-[#1D1D1D]">
              Plain White Shirt
            </p>
            <div className="flex gap-1 items-center">
              <div className="size-3">
                <Image src={StarImage} alt="star image" />
              </div>
              <div className="size-3">
                <Image src={StarImage} alt="star image" />
              </div>{" "}
              <div className="size-3">
                <Image src={StarImage} alt="star image" />
              </div>{" "}
              <div className="size-3">
                <Image src={StarImage} alt="star image" />
              </div>{" "}
              <div className="size-3">
                <Image src={StarImage} alt="star image" />
              </div>
              <p className="text-xs ml-1">(15)</p>
            </div>
            <div className="flex items-center gap-2 text-xl font-medium ">
              <s className="text-[#818181]">$69.00</s>
              <p className="text-[#024E82]">$59.00</p>
            </div>
            <div className="max-w-[550px] text-sm text-[#555555]">
              <p>
                A classic t-shirt never goes out of style. This is our most
                premium collection of shirt. This plain white shirt is made up
                of pure cotton and has a premium finish.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="border-[1px] border-gray-500 flex py-3 items-center max-w-48 justify-between px-2 cursor-pointer">
              <p className="text-[#1D1D1D]">Select size</p>
              <div className="size-4">
                <Image src={ArrowDownImage} alt="arrow down image" />
              </div>
            </div>
            <div className=" cursor-pointer bg-[#024E82] py-3 max-w-40 flex justify-center text-white">
              ADD TO CART
            </div>
            <div className="text-xs">
              <div className="flex items-center gap-1">
                <p className="text-[#1D1D1D]">Category:</p>
                <p className="text-[#555555]">Women,Polo,Casual</p>
              </div>
              <div className="flex items-center gap-1 ">
                <p className="text-[#1D1D1D]">Tags:</p>
                <p className="text-[#555555]">Modern,Design,cotton</p>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="size-5 rounded-full bg-gray-300"></div>
            <div className="size-5 rounded-full bg-gray-300"></div>
            <div className="size-5 rounded-full bg-gray-300"></div>
            <div className="size-5 rounded-full bg-gray-300"></div>
            <div className="size-5 rounded-full bg-gray-300 flex items-center justify-center">
              <Image
              src={EmailImage}
              alt="email image"
              className="size-3 opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
