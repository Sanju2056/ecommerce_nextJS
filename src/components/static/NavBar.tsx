import { HamburgerIcon, ShoppingBagIcon, UserIcon } from "@/assets/icons";
import { NavBarData } from "@/data/NavBarData";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  const Icons = [
    {
      icon: <UserIcon />,
    },
    {
      icon: <ShoppingBagIcon />,
    },
    {
      icon: <HamburgerIcon />,
    },
  ];
  return (
    <div className="hidden lg:block h-20 w-full container">
      <div className="h-full grid grid-cols-2">
        <div className=" flex items-center justify-between">
          <div>
            <p className="text-4xl">NorthStar</p>
          </div>
          <div className="flex gap-14">
            {NavBarData.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer group relative w-max pb-[2px]"
              >
                <p className="font-medium text-lg">{item.title}</p>
                <span className="absolute -bottom-[1px] left-0 w-0 transition-all  h-0.5 bg-[#706f6b]   group-hover:w-full"></span>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-end items-center gap-8 pr-4">
          {Icons.map((item, index) => (
            <div key={index} className="cursor-pointer">
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
