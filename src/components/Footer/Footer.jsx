import React from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

import imgUni from "../../assets/images/logoUniversidadCuau.png";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-quaternaryColor p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
          <a href="#" className="text-2xl font-bold relative bg-quaternaryColor">
            <img src={imgUni} alt="" />
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="https://www.instagram.com/congresonacionalcirugiaslp/" className="block text-white p-4 bg-primaryColor rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primaryColor rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Sobre nosotros
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Preguntas Frecuentes
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Patrocinadores
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Terms of use
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Privacy policy
          </a>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © jotredev 2022 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;