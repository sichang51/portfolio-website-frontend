import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="relative">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-04/245d5f259ae4a3de3e9a4d4e062cb555.jpeg?h=9c2070a3&itok=YnwWoUKQ"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Simon Chang</h1>
          <h2 className="flex sm:text-3xl text2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer size={20}" />
            <FaFacebookF className="cursor-pointer size={20}" />
            <FaInstagram className="cursor-pointer size={20}" />
            <FaLinkedinIn className="cursor-pointer size={20}" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
