import React from "react";
import ImgHero from "../../assets/images/Hero.png";

const Hero = () => {
    return (
    <section id="Home" className="min-h-[90vh] grid grid-cols-1 md:grid-cols-8">
        <div className="md:col-span-5   flex items-center justify-center p-12">
            <div className="flex flex-col gap-8">
                <h1 className="text-5xl md:text-7xl font-bold leading-[3.5rem] md:leading-[5.5rem]"> <span className="text-SecondaryColor">Bienvenidos</span> al 1er Congreso de Nacional de Cirugia</h1>
                <p className="text-gray-500 text-xl leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis condimentum nisi, mattis condimentum ex interdum eget. Etiam et nulla ipsum.</p>
                <div>
                    <button className="bg-primaryColor text-white py-2 px-8 rounded-xl text-xl">
                        Registrate!
                    </button>
                </div>
            </div>
        </div>
        <div className="md:col-span-3 flex items-start justify-center relative">
            <img src={ImgHero} alt=""/>
        </div>
    </section>
    );
};

export default Hero;