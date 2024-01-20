import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-04/245d5f259ae4a3de3e9a4d4e062cb555.jpeg?h=9c2070a3&itok=YnwWoUKQ"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div>
          <h1>I'm Simon Chang</h1>
          <h2>
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
          <div>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
