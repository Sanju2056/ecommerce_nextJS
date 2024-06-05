import { CrossImage, Shirt } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container py-10 md:py-20">
      <div className="flex flex-col gap-14">
        <div className="text-sm font-semibold">
          <p className="text-[#555555]">
            HOME / <span className="text-[#1D1D1D]">SHOPPING CART</span>
          </p>
        </div>
        <div>
          <div className="grid grid-cols-5 font-bold text-[#1D1D1D] place-content-center place-items-center mb-2">
            <div></div>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <div className="border-gray-200 border-y-[1px] grid text-[#555555] grid-cols-5 place-content-center place-items-center py-2 text-xs md:text-base ">
            <div className="flex items-center justify-between w-full ">
              <div className="size-7 cursor-pointer">
                <Image src={CrossImage} alt="cross Image" />
              </div>
              <div className="size-20">
                <Image
                  src={Shirt}
                  alt="shirt"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <p className="font-bold">Plain White Shirt</p>
            <p>$59.00</p>
            <div className="shadow px-4 py-2 max-content">
              <p>1</p>
            </div>
            <p>$59.00</p>
          </div>
          <div className="border-gray-200 border-y-[1px] grid text-[#555555] grid-cols-5 place-content-center place-items-center py-2 text-xs md:text-base">
            <div className="flex items-center justify-between w-full ">
              <div className="size-7 cursor-pointer">
                <Image src={CrossImage} alt="cross Image" />
              </div>
              <div className="size-20">
                <Image
                  src={Shirt}
                  alt="shirt"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <p className="font-bold  ">Plain White Shirt</p>
            <p>$59.00</p>
            <div className="shadow px-4 py-2 max-content">
              <p>1</p>
            </div>
            <p>$59.00</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-3xl font-semibold">Cart Totals</p>
          <div className="w-full md:w-[500px]">
            <div className="flex items-center py-4 justify-between text-[#555555]">
              <p>Subtotal</p>
              <p>$59.00</p>
            </div>
            <div className="border-y-[1px] border-gray-200 py-4 flex items-center text-[#555555] justify-between">
              <p>Shipping Free</p>
              <p>FREE!!!!!</p>
            </div>
            <div className="py-4 flex font-bold items-center  justify-between text-[#1D1D1D]">
              <p>Total</p>
              <p>$59.00</p>
            </div>
          </div>
          <Link href={'./checkout'}>
          <div className="px-8 py-4 cursor-pointer bg-[#D6763C] text-white max-content w-max">
            PROCEED TO CHECKOUT
          </div>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default page;
