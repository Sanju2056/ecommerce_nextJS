import {
  ApplePayImage,
  MasterCardImage,
  PayPalImage,
  VisaImage,
} from "@/assets/images";
import Image from "next/image";
import React from "react";
import { footerData } from "@/data/FooterData";
import { ArrowRight } from "@/assets/icons";

const Footer = () => {
  const icons = [
    {
      image: MasterCardImage,
      alt: "MasterCardImage",
    },
    {
      image: VisaImage,
      alt: "VisaImage",
    },
    {
      image: PayPalImage,
      alt: "Paypalmage",
    },
    {
      image: ApplePayImage,
      alt: "ApplePayImage",
    },
  ];
  return (
    <div className="flex flex-col container bg-[#f7f7f7] py-10">
      <div className="flex flex-col py-10 gap-10 md:flex-row">
        <div className="gap-4 md:w-3/4 grid grid-cols-2 md:grid-cols-3">
          {footerData.map((item, index) => {
            return (
              <div key={index}>
                <div className="cursor-pointer md:mb-7">
                  <p className="font-bold">{item.title}</p>
                </div>
                {item.children.map((item, index) => {
                  return (
                    <div className="cursor-pointer mt-2" key={index}>
                      <p>{item.title}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="md:w-1/4 ">
          <p className="font-bold">GET IN THE KNOW</p>
          <div className="flex items-center md:gap-2 md:mt-8">
            <input
              className="h-10 w-2/3 md:w-40 lg:w-full border-b-[1px] border-gray-600
            outline-none bg-[#f7f7f7] pl-1 "
              placeholder="Enter email"
            />
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-t-[1px] border-gray-200 py-6 ">
        <div className="">
          <p className="text-sm">© 2020 NorthStar eCommerce</p>
          <div className="flex  items-center gap-2 text-sm">
            <p>Privacy Policy</p>
            <p> Terms & Conditions</p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          {icons.map((item, index) => {
            return (
              <div className={`h-12 w-12  flex items-center justify-center `}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  className={`object-contain `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
