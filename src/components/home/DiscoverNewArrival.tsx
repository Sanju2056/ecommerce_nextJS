import { Shirt } from "@/assets/images";
import Image from "next/image";
import React from "react";

const DiscoverNewArrival = () => {
  const data = [
    {
      image: Shirt,
      title: "Shirt",
      alt: "shirt",
      price: "$23.50",
    },
    {
      image: Shirt,
      title: "Shirt",
      alt: "shirt",
      price: "$23.50",
    },
    {
      image: Shirt,
      title: "Shirt",
      alt: "shirt",
      price: "$23.50",
    },
    {
      image: Shirt,
      title: "Shirt",
      alt: "shirt",
      price: "$23.50",
    },
    {
      image: Shirt,
      title: "Shirt",
      alt: "shirt",
      price: "$23.50",
    },
    {
      image: Shirt,
      title: "Shirt",
      alt: "shirt",
      price: "$23.50",
    },
    {
      image: Shirt,
      title: "Shirt",
      alt: "shirt",
      price: "$23.50",
    },
    {
      image: Shirt,
      title: "Shirt",
      alt: "shirt",
      price: "$23.50",
    },
  ];
  return (
    <div className="items-center flex flex-col gap-14">
      <div className="text-center flex flex-col gap-3">
        <p className="text-4xl font-bold">Discover NEW Arrivals</p>
        <p className="text-xl opacity-60">Recently added shirts!</p>
      </div>
      <div className="w-full overflow-x-auto md:overflow-x-visible ">
        <div className="flex flex-nowrap md:grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col h-max gap-2 min-w-[200px] rounded shadow  overflow-hidden">
              <div className="flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="object-contain w-full"
                />
              </div>
              <div className="text-center flex flex-col gap-1 pb-3">
                <p className="font-semibold text-lg">{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DiscoverNewArrival;
