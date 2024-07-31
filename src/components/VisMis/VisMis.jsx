import React from "react";
import imgLogo from "../../assets/images/logoUniversidadCuau.png";

const VisMis = () => {
    return (
    <div className="w-full bg-primaryColor flex flex-col items-center px-20 py-5">
        <div className=" flex flex-col items-center gap-10 w-4/6">
            <img src={imgLogo} alt=""  className="w-1/3 "/>
            <h3 className="text-white text-xl">Somos una Universidad con más de 45 años de experiencia y nos distinguimos por ser innovadores en temas pedagógicos. Ofrecemos educación de calidad orientada en valores, formamos individuos que armonicen socialmente, comprendan la transformación histórica y evolutiva de la humanidad.</h3>
        </div>
        <div>
            <div> mision</div>
            <div> vision</div>
        </div>
    </div>
    );
};

export default VisMis;