import React from 'react';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Instrucciones from '../assets/images/Rúbrica de Instrucciones para Inscribirse a los Abstracts 2.0.pdf'
import ImagenConcurso from '../assets/images/ImagenAbstracts.jpg'

const Abstracts = () => {
  return (
    <section className='bg-gray-100'>
      
      <div className='h-[148vh] md:h-[116vh] bg-cover bg-center custom-bg'>
        <Link to="/">
          <button className="bg-primaryColor text-white py-2 px-6 rounded-xl text-xl m-10">
            Atrás
          </button>
        </Link>
        <div className='flex flex-col md:flex-row m-10 gap-2'>
        <div className=' flex flex-col items-center justify-center gap-2'>
          <h1 className='text-4xl font-bold text-center text-gray-900'>Concurso de Abstracts</h1>
          <p className='w-3/4 md:1/2 text-lg font-semibold text-justify text-gray-600'>
          El Congreso de Cirugía los invita a participar en el Concurso de Abstracts, 
          un proyecto cuyo propósito es integrar a estudiantes en la investigación a
           partir del análisis y creación de su abstract
          </p>
          <a className='text-2xl text-center text-blue-800 font-bold underline' href={Instrucciones} target="_blank">Consulta aqui las instrucciones del concurso</a>
          
          <Link to="https://forms.gle/VyQZ3bNJAszW8Loz5">
                <button className="bg-primaryColor text-white py-2 px-6 rounded-xl text-xl">
                  Inscríbete!
                </button>
          </Link>
          
          </div>
          
        <img className=' md:3/4 md:w-1/3' src={ImagenConcurso} alt="" />
        </div>
      </div>

      <Footer className=""/>
    </section>
  );
};

export default Abstracts;
