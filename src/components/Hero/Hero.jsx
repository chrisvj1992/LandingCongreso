import React from "react";
import '../../../src/index.css';
import ImgHero from "../../assets/images/FlyerOficial.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
    <section id="Home" className="grid grid-cols-1 md:grid-cols-8 bg-cover bg-center custom-bg" >
        <div className="md:col-span-5 flex items-center justify-center p-12 mt-24 md:mt-16">
            <div className="flex flex-col gap-8">
                <h1 className="text-5xl md:text-7xl font-bold text-quaternaryColor leading-[3.5rem] md:leading-[5.5rem]"> Bienvenidos al 1er Congreso Nacional de Cirugía</h1>
                <p className="text-gray-500 text-xl leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis condimentum nisi, mattis condimentum ex interdum eget. Etiam et nulla ipsum.</p>
                <div>
                    <Link to="https://forms.gle/TLsShMxdqFhtqSZv7">
                        <button className="bg-primaryColor text-white py-2 px-8 rounded-xl text-xl">
                            Inscríbete!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="md:col-span-3 flex items-center justify-center ">
            <img className="xl:w-3/4 w-full mt-20" src={ImgHero} alt=""/>
        </div>
    </section>
    );
};

export default Hero;