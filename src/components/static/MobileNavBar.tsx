"use client";
import { HamburgerIcon, ShoppingBagIcon, UserIcon } from "@/assets/icons";
import { CancelImage } from "@/assets/images";
import { NavBarData } from "@/data/NavBarData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavBar = () => {
  const Icons = [
    {
      id: "user",
      icon: <UserIcon />,
    },
    {
      id: "shopping-bag",
      icon: <ShoppingBagIcon />,
    },
    {
      id: "hamburger",
      icon: <HamburgerIcon />,
    },
  ];

  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <div className="container lg:hidden ">
      <div className="h-16 flex items-center justify-between">
        <div>
          <p className="text-2xl">NorthStar</p>
        </div>
        {/* <div className="flex items-center gap-6 pr-3">
          {Icons.map((item, index) => (
            <div>
              <div key={index}>{item.icon}</div>
              {showSideMenu ? (
                <div
                  onClick={() => {
                    setShowSideMenu(!showSideMenu);
                  }}
                >
                  <Image src={CancelImage} alt="cancel image" />{" "}
                </div>
              ) : (
                <div
                  onClick={() => {
                    setShowSideMenu(!showSideMenu);
                  }}
                >
                  <HamburgerIcon />
                </div>
              )}
            </div>
          ))}
        </div> */}
        <div className="flex items-center gap-6 pr-3">
          {Icons.map((item, index) => (
            <div key={index} className="flex items-center cursor-pointer">
              {showSideMenu && item.id === "hamburger" ? (
                <div
                  onClick={() => {
                    setShowSideMenu(false);
                  }}
                  className="h-10 w-10"
                >
                  <Image
                    src={CancelImage}
                    alt="cancel image"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div
                  onClick={() => {
                    if (item.id === "hamburger") {
                      setShowSideMenu(true);
                    }
                  }}
                  className="h-10 w-10 flex items-center justify-center cursor-pointer"
                >
                  {item.icon}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {
        showSideMenu ?  <div className="shadow rounded-md flex flex-col overflow-hidden">

        {NavBarData.map((item, index) => (
          <Link href={item.link}>
            <div className=" shadow py-3 flex justify-center items-center cursor-pointer" key={index}>
              <p className="text-sm">{item.title}</p>
            </div>
          </Link>
        ))}
        </div> : ""
      }
     
    </div>
  );
};

export default MobileNavBar;
