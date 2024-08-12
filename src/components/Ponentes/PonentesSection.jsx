import React from "react";
import ponente1 from "../../assets/images/ponente1.jpg";
import ponente2 from "../../assets/images/ponente2.jpg";
import ponente3 from "../../assets/images/ponente3.jpg";

const PonentesSection = () => {
    return (
    <section id="Ponentes" className="bg-gray-100 p-8 pt-24 flex flex-col items-center justify-center gap-8 mt-5">
        <h1 className="text-2xl font-medium text-gray-800 text-center"> 
            Ponentes que nos acompañaran
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-20">
            <img src={ponente1} alt="" className="rounded-3xl w-40"/>
            <img src={ponente2} alt="" className="rounded-3xl w-40"/>
            <img src={ponente3} alt="" className="rounded-3xl w-40"/>
        </div>
    </section>
    );
};

export default PonentesSection;