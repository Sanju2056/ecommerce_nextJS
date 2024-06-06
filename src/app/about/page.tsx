import HeroAboutUs from "@/components/aboutus/HeroAboutUs";
import Testimonials from "@/components/aboutus/Testimonials";
import TheFounders from "@/components/aboutus/TheFounders";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroAboutUs />
      <div className="bg-[#FBFBFB]">
        <TheFounders />
      </div>
      <Testimonials/>
    </div>
  );
};

export default page;
