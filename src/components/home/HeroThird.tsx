import {
  FreeShippingIcon,
  PaymentSecureIcon,
  ReturnIcon,
  Support24_7Icon,
} from "@/assets/icons";
import React from "react";

const HeroThird = () => {
  const data = [
    {
      icon: <FreeShippingIcon />,
      title: "FREE SHIPING",
      desc: "Enjoy free shipping on all orders above $100",
    },
    {
      icon: <Support24_7Icon />,
      title: "SUPPORT 24/7",
      desc: "Our support team is there to help you for queries",
    },
    {
      icon: <ReturnIcon />,
      title: "30 DAYS RETURN",
      desc: "Simply return it within 30 days for an exchange.",
    },
    {
      icon: <PaymentSecureIcon />,
      title: "100% PAYMENT SECURE",
      desc: "Our payments are secured with 256 bit encryption",
    },
  ];
  return (
    <div className="grid  grid-row-2 ">
      <div className="grid grid-row-4 md:grid-cols-2 place-items-center lg:grid-cols-4">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex gap-4  px-5  py-4">
              <div className="mt-1">{item.icon}</div>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold ">{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-14 flex flex-col lg:flex-row  gap-4">
        <div
          className=" lg:w-3/5 bg-[#000] flex items-center
         justify-center flex-col py-40 gap-8 "
        >
          <div className="text-white text-center flex flex-col gap-4 max-w-[400px]">
            <p className="text-3xl">PEACE OF MIND</p>
            <p>
              A one-stop platform for all your fashion needs, hassle-free. Buy
              with a peace of mind.
            </p>
          </div>
          <div className="px-8  py-2 bg-white">BUY NOW</div>
        </div>
        <div
          className="flex-1 bg-[#000] flex items-center
         justify-center flex-col py-40 gap-8 "
        >
          <div className="text-white text-center flex flex-col gap-4 max-w-[400px]">
            <p className="text-3xl">BUY 2 GET 1 FREE</p>
            <p>
            End of season sale. Buy any 2 items of your choice and get 1 free.
            </p>
          </div>
          <div className="px-8  py-2 bg-white">BUY NOW</div>
        </div>
      </div>
    </div>
  );
};

export default HeroThird;
