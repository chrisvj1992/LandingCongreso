import React from "react";
// Icons
import {
  RiTiktokLine,
  RiInstagramLine,
  RiFacebookLine,
} from "react-icons/ri";
import Sponsors from "../Patrocinadores/Patrocinadores";
import imgUni from "../../assets/images/logoUniversidadCuau.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="Footer" className="bg-quaternaryColor p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/2 md:w-1/6">
          <a href="#" className=" relative bg-quaternaryColor">
            <div className="flex flex-col">
                <img src={imgUni} alt="logo Universidad Cuauhtemoc" />
                <h2 className="text-white text-md md:text-2xl  font-bold tracking-widest text-center">San Luis Potosí</h2>
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
          <a href="https://www.tiktok.com/@congreso_nacional_ucslp?is_from_webapp=1&sender_device=pc" className="block text-white p-4 bg-primaryColor rounded-full">
            {" "}
            <RiTiktokLine />{" "}
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <nav className=" w-full mt-4 flex flex-col md:flex-row items-center justify-center gap-8">
        <Link to="/PreguntasFrecuentes" 
            className="text-gray-300 mt-4 font-bold text-xl hover:text-white transition-color">
        Preguntas Frecuentes
        </Link>
          <Sponsors/>
        </nav>
      </div>
      <div className="mt-16">
        <p className="text-gray-300 text-center">
        I Congreso Nacional Estudiantil de Cirugía 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;