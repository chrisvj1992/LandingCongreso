import React from "react";
import ImgBanner from "../../assets/images/Banner.png";

const Hero = () => {
    return (
    <div className="w-full relative">
        <img src={ImgBanner} alt=""   />
        <h1 className="absolute bottom-2 left-10 xl:text-7xl text-base font-medium text-white w-1/3"> Bienvenidos al Congreso de cirugia</h1>
        <h3 className="absolute bottom-2 right-20 xl:text-7xl text-base font-medium text-secondaryColor w-1/3"> Fecha: 16 de octubre</h3>
    </div>
    );
};

export default Hero;