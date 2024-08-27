import React from "react";
import ponente1 from "../../assets/images/ponente1.jpg";
import ponente2 from "../../assets/images/ponente2.jpg";
import ponente3 from "../../assets/images/ponente3.jpg";
import {
    RiDoubleQuotesL,
    RiDoubleQuotesR,
  } from "react-icons/ri";

const PonentesSection = () => {
    return (
    <section id="Ponentes" className="bg-gray-100 py-28 flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-medium text-gray-800 text-center"> 
            Ponentes que nos acompañarán
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <img src={ponente1} alt="" className="rounded-3xl w-40"/>
            <img src={ponente2} alt="" className="rounded-3xl w-40"/>
            <img src={ponente3} alt="" className="rounded-3xl w-40 border-quaternaryColor border-3"/>
        </div>

        <div>
            <h1 className="text-2xl text-center font-black">
            José de Letamendi y Manjarrés
            </h1>
            <div className="flex justify-center gap-4">
                <span className="text-5xl text-primary">
                <RiDoubleQuotesL />
                </span>
                <p className="max-w-4xl text-center text-gray-500">
                El que solo sabe medicina, ni medicina sabe
                </p>
                <span className="text-5xl text-primary">
                <RiDoubleQuotesR />
                </span>
            </div>
        </div>

    </section>
    );
};

export default PonentesSection;