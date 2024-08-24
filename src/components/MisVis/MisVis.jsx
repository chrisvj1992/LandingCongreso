import React from "react";
import logoUni from "../../assets/images/logoUniversidadCuau.png"

const MisVis = () => {
    return (
    <section id="MisVis" className=" flex flex-col w-full py-16 bg-primaryColor">
        <div className="flex flex-col md:flex-row h-1/2 mx-16 my-10 gap-8 items-center">
            <div className="flex flex-col gap-1">
                <img src={logoUni} alt="logo Universidad Cuauhtemoc" />
                <h2 className="text-white text-lg md:text-xl font-bold tracking-widest text-center">San Luis Potosí</h2>
            </div>
            <p className=" text-white text-justify text-xl md:text-justify">Nuestro objetivo es desarrollar una experiencia educativa integral para los estudiantes de medicina que incluya conferencias magistrales, talleres prácticos,  y mesas redondas con reconocidos cirujanos, con el fin de fortalecer sus competencias.</p>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row  p-10 gap-10">
            <div className="bg-tertiaryColor flex flex-col xl:w-2/5 items-center justify-center rounded-md p-10">
                <h2 class="bebas-neue-regular" className="text-3xl font-bold">Misión</h2>
                <p>Organizar un congreso de cirugía estudiantil que ofrezca a los alumnos de medicina una plataforma de aprendizaje, promoviendo la interacción con expertos, el intercambio de conocimientos y la adopción de nuevas técnicas y tecnologías en el campo de la cirugía.</p>
            </div>
            <div className="bg-tertiaryColor flex flex-col xl:w-2/5 items-center justify-center rounded-md p-10">
                <h2 class="bebas-neue-regular" className="text-3xl font-bold">Visión</h2>
                <p>Convertirnos en un referente académico y científico en el ámbito de la cirugía, impulsando el desarrollo integral de futuros profesionales de la salud y fomentando la excelencia y la innovación en la práctica quirúrgica.</p>
            </div>
        </div>
    </section>
    );
};

export default MisVis;