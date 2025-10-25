import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            consequatur aliquam consectetur, officiis corrupti at similique
            veritatis modi.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH </p>
          <ul className="flex flex-col text-gray-600">
            <li>+234 9048421246</li>
            <li>oladojatolu@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className=" text-gray-500" />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ forever.com- All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
