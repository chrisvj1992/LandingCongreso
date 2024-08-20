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
        <div className="w-1/2 md:w-1/6">
          <a href="#" className=" relative bg-quaternaryColor">
            <div className="flex flex-col gap-2">
                <img src={imgUni} alt="logo Universidad Cuauhtemoc" />
                <h2 className="text-white text-2xl md:text-2xl font-bold tracking-widest text-center">San Luis Potosí</h2>
            </div>
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="https://www.instagram.com/congresonacionalcirugiaslp/" className="block text-white p-4 bg-primaryColor rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="https://www.facebook.com/profile.php?id=61563796593516&mibextid=LQQJ4d&rdid=KB9ygGeDo7ql1ZUH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F7iiRktX3oeomRaVQ%2F%3Fmibextid%3DLQQJ4d" className="block text-white p-4 bg-primaryColor rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <nav className=" w-full mt-4 flex flex-col md:flex-row items-center justify-center gap-8">
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