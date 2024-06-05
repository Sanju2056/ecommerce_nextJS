import { ContactUsImage } from "@/assets/images";
import Image from "next/image";
import React from "react";

const page = () => {
  const inputFields = [
    {
      label: "Name",
      placeholder: "name",
      name: "name",
    },
    {
      label: "Email",
      placeholder: "email",
      name: "email",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-20">
      <div className="h-52 md:h-[400px] relative w-full">
        <Image
          src={ContactUsImage}
          alt="contact us image"
          className="h-full w-full "
        />
        <p className="absolute top-[60%]  left-8 md:top-[80%] md:left-28 text-2xl md:text-4xl text-white">
          CONTACT US
        </p>
      </div>
      <div className="container flex flex-col md:flex-row gap-12 pb-14 md:pb-20 ">
        <div className="flex gap-6 flex-col flex-1 md:w-2/3">
          <p className="text-2xl font-semibold text-[#3A3A39]">
            We would love to hear from you.
          </p>
          <p className="text-sm text-[#555555]">
            If you have any query or any type of suggestion, you can contact us
            here. We would love to hear from you.
          </p>
          <form className="flex flex-col gap-4">
            <div className="grid grid-rows-1-1 md:grid-cols-2 gap-2 md:gap-4">
              {inputFields.map((item, index) => {
                return (
                  <div className="flex flex-col gap-1">
                    <label className=" text-[#555555]">{item.label}</label>
                    <input
                      className="border-[1px] border-gray-200
                  outline-none px-2 py-2"
                      placeholder={item.placeholder}
                      name={item.name}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-1 !col-span-2 ">
              <label className=" text-[#555555]">Message</label>
              <textarea
                placeholder="type your message"
                className="border-[1px] border-gray-200 px-2 py-2 min-h-40 outline-none"
              />
            </div>
            <div className="px-8 py-4 cursor-pointer bg-[#024E82] text-white max-w-40 mt-2">
              SHOP NOW
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-8">
          <div className="">
            <p className="font-semibold text-[#1D1D1D]">Visit Us</p>
            <div className="flex flex-col text-xs text-[#555555]">
              <p>UET Lahore, Punjab, Pakistan </p>
              <p>Phone: +923039898987</p>
            </div>
          </div>
          <div className="">
            <p className="font-semibold text-[#1D1D1D]">Get in Touch</p>
            <div className="flex flex-col text-xs text-[#555555]">
              <p>You can get in touch with us on this provided email.</p>
              <p>Email: hmjawad087@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
