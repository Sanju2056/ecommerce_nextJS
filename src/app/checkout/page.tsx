"use client";
import React, { useState } from "react";

const page = () => {
  const [showSucess, setShowSucess] = useState(false);
  const InputFields = [
    {
      label: "Full Name",
      placeholder: "full name",
      name: "full name",
    },
    {
      label: "Street address",
      placeholder: "street address",
      name: "street address",
    },
    {
      label: "Town/City",
      placeholder: "town/city",
      name: "town/city",
    },
    {
      label: "Phone",
      placeholder: "phone",
      name: "phone",
    },
    {
      label: "Email address",
      placeholder: "email address",
      name: "email",
    },
  ];
  return (
    <div className="container flex flex-col gap-8 py-10 relative">
      <div className="text-sm font-semibold">
        <p className="text-[#555555]">
          HOME / <span className="text-[#1D1D1D]">CHECKOUT</span>
        </p>
      </div>
      <div>
        <p className="text-3xl font-semibold mb-8">Biling details</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {InputFields.map((item, index) => {
            return (
              <div className="flex flex-col gap-1">
                <label>{item.label}</label>
                <input
                  placeholder={item.placeholder}
                  name={item.name}
                  className="border-[1px] border-gray-200 py-2 px-2 outline-none"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-3xl font-semibold mb-8">Your order</p>
        <div className="border-[1px] border-gray-200 ">
          <div className="grid grid-cols-2 border-b-[1px] border-gray-200 font-bold text-lg py-3 text-[#1D1D1D] px-3">
            <p>Prouct</p>
            <p>Total</p>
          </div>
          <div className="grid grid-cols-2 border-b-[1px] border-gray-200 text-sm text-[#555555] py-5 px-3">
            <p>Plain White Shirt</p>
            <p>$59.00</p>
          </div>
          <div className="grid grid-cols-2 border-b-[1px] border-gray-200 text-sm text-[#555555] py-5 px-3">
            <p>Plain White Shirt</p>
            <p>$59.00</p>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-gray-200 p-6 ">
        <div className="px-2 py-4 bg-[#EBEBEB]">
          <p className="text-[#555555] text-sm">
            Cash on delivery. Please contact us if you require assistance or
            wish to make alternate arrangements.
          </p>
        </div>
        <div className="flex items-center justify-end mt-6">
          <div
            className="px-8 py-4 cursor-pointer bg-[#D6763C] text-white"
            onClick={() => {setShowSucess(!showSucess)}}
          >
            PLACE ORDER
          </div>
        </div>
        
        </div>
      {showSucess ? (
        <div 
        onClick={() => {setShowSucess(!showSucess)}}
        className="absolute h-full w-full flex items-center justify-center left-0 lg:left-8  md:bottom-36 ">
          <div className="bg-[#D6763C] text-xl  md:text-4xl font-bold text-white py-16 px-8 w-max top-1/2 absolute">
            Order placed successfully 🙌
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default page;
