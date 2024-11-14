import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            deserunt, veritatis quam eligendi mollitia, harum molestiae est
            debitis accusantium, impedit nam quo in eos nesciunt! Lorem ipsum
            dolor sit amet.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            deserunt, veritatis quam eligendi mollitia, harum molestiae est
            debitis accusantium, impedit nam quo in eos nesciunt! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Sint, distinctio.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            exercitationem sapiente asperiores dignissimos nihil excepturi eos,
            veritatis ratione nobis veniam velit, quod cumque corrupti nam.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 py-8 flex flex-col gap-5">
          <b className="">Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ipsa
            molestias fugiat! Fugiat eum ipsa quidem deserunt odit perspiciatis
            esse blanditiis possimus fuga.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 py-8 flex flex-col gap-5">
          <b className="">Convinience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ipsa
            molestias fugiat! Fugiat eum ipsa quidem deserunt odit perspiciatis
            esse blanditiis possimus fuga.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 py-8 flex flex-col gap-5">
          <b className="">Exceptional Costomer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ipsa
            molestias fugiat! Fugiat eum ipsa quidem deserunt odit perspiciatis
            esse blanditiis possimus fuga.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default About;
