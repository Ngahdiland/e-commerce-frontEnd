import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} className="mb-5 w-32 " alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            aperiam obcaecati doloremque. Velit exercitationem dolore assumenda
            vero non amet dignissimos commodi expedita porro reprehenderit nisi
            officia nemo, doloribus minima distinctio.
          </p>
        </div>
        <div className="">
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li className="">Home</li>
                <li className="">About Us</li>
                <li className="">Delivery</li>
                <li className="">Privacy Policy</li>
            </ul>
        </div>
        <div className="">
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li className="">+1(235) 657 8356</li>
                <li className="">Ngahdiland@gmail.com</li>
            </ul>
        </div>
      </div>

      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">&copy; 2024 @ forever.com - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
