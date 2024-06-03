import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col container">
      <div></div>
      <div className="flex items-center justify-between">
        <div className="border-t-[1px] border-gray-200 py-6 ">
          <p className="text-sm">© 2020 NorthStar eCommerce</p>
          <div className="flex  items-center gap-2 text-sm">
            <p>Privacy Policy</p>
            <p> Terms & Conditions</p>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
