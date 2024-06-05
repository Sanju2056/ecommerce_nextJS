"use client";
import {
  ArrowDownImage,
  ArrowUpImage,
  EmailImage,
  Shirt,
  StarImage,
} from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [showSize, setShowSize] = useState(false);
  const [focused, setFocused] = useState(false);
  const [selectedSize, setSelectedSize] = useState({
    size: "Select size",
    shortForm: "",
  });
  const sizeList = [
    {
      size: "Small",
      shortForm: "S",
    },
    {
      size: "Medium",
      shortForm: "M",
    },
    {
      size: "Large",
      shortForm: "L",
    },
    {
      size: "ExtraLarge",
      shortForm: "XL",
    },
  ];
  return (
    <div className="container py-10">
      <div className="flex flex-col  md:flex-row  md:items-start gap-8 mb-14">
        <div className="flex flex-col  gap-2">
          <div className="h-[600px]  ">
            <Image src={Shirt} alt="image" className="object-cover h-full " />
          </div>
          <div className="h-24 w-20 bg-gray-200    "></div>
        </div>
        <div className=" flex flex-col gap-8">
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
            <div>
              <div
                className="border-[1px] border-gray-300 flex py-3 items-center max-w-48 justify-between px-2 cursor-pointer"
                onClick={() => {
                  setShowSize(!showSize);
                }}
              >
                <p className="text-[#1D1D1D]">{selectedSize?.size}</p>
                {selectedSize?.size === "Select size" ? (
                  !showSize ? (
                    <div className="size-4">
                      <Image src={ArrowDownImage} alt="arrow down image" />
                    </div>
                  ) : (
                    <div className="size-4">
                      <Image src={ArrowUpImage} alt="arrow up image" />
                    </div>
                  )
                ) : (
                  <p className="text-[#1D1D1D]">{selectedSize?.shortForm}</p>
                )}
              </div>
              {showSize && (
                <div>
                  {sizeList.map((item, index) => (
                    <div
                      key={index}
                      className="border-[1px] border-gray-300 flex py-3 items-center max-w-48 justify-between px-2 cursor-pointer"
                      onClick={() => {
                        setSelectedSize(item);
                        setShowSize(false);
                      }}
                    >
                      <p className="text-[#1D1D1D] text-sm">{item.size}</p>
                      <p className="text-[#1D1D1D]">{item.shortForm}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="cursor-pointer bg-[#024E82] py-3 max-w-40 flex justify-center text-white">
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
      <div className="flex flex-col">
        <div className="border-[1px] border-gray-300 flex text-sm w-max font-semibold">
          <div
            onClick={() => {
              setFocused(!focused);
            }}
            className={` px-3 border-r-[1px] py-2 border-gray-400 cursor-pointer ${
              !focused
                ? "text-[#1D1D1D] bg-[#fff]"
                : " text-gray-400 bg-[#FBFBFB]"
            }`}
          >
            <p>Description</p>
          </div>
          <div
            onClick={() => {
              setFocused(!focused);
            }}
            className={`py-2 px-3 cursor-pointer ${
              focused
                ? "text-[#1D1D1D] bg-[#fff]"
                : " text-gray-400 bg-[#FBFBFB]"
            }`}
          >
            <p>Review(0)</p>
          </div>
        </div>
        <div className="px-5 py-6 w-full border-[1px] border-gray-300 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          laudantium illum vel saepe voluptatibus, suscipit dolorem, illo
          officia aspernatur iste delectus consequuntur! Consectetur dolorem
          accusamus quisquam, eveniet quam molestiae totam.
        </div>
      </div>
    </div>
  );
};

export default page;
