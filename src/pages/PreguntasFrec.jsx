import React from 'react';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

const PreguntasFrec = () => {
  return (
    <section className='bg-gray-100'>
      <div className='h-[90vh] bg-cover bg-center custom-bg'>
        <Link to="/">
          <button className="bg-primaryColor text-white py-2 px-6 rounded-xl text-xl m-10">
            Atrás
          </button>
        </Link>
        <div className=' flex flex-col items-center justify-center gap-5'>
          <h1 className='text-5xl font-bold text-center text-gray-900'>Preguntas Frecuentes</h1>
          <div className='w-3/4 md:1/3 '>
          <h2 className='text-lg font-bold text-start text-gray-900'>
          1. ¿En dónde se llevará a cabo el Congreso?
          </h2>
          <p className='text-lg font-semibold text-left text-gray-700'>
          R: Centro de las Artes (CEART) San Luis Potosí, México
          </p>
          <h2 className='text-lg font-bold text-start text-gray-900'>
          2. ¿Qué fechas abarcará el I Congreso Nacional Estudiantil de Cirugía? 
          </h2>
          <p className='text-lg font-semibold text-left text-gray-700'>
            R: Del Miércoles 23 al Jueves 25 de Octubre 
          </p>
          <h2 className='text-lg font-bold text-start text-gray-900'>
            3. ¿Qué horarios tendrá el I Congreso Nacional Estudiantil de Cirugía?  
          </h2>
          <p className='text-lg font-semibold text-left text-gray-700'>
            - Miércoles 23 de Octubre: 8:00 am a 15:00 hrs. 
            - ⁠Jueves 24 de Octubre: 8:00 am a 15:00 hrs.
            - ⁠Viernes 25 de Octubre: 8:00 am a 16:00 hrs. 
          </p><h2 className='text-lg font-bold text-start text-gray-900'>
            4. ¿A quien va dirigido el  I Congreso Nacional Estudiantil de Cirugía?  
          </h2>
          <p className='text-lg font-semibold text-left text-gray-700'>
          - Estudiantes de pregrado, internos y residentes de Medicina, incluyendo distintas carreras del área de la salud como: Nutrición y Odintología/Estomatología enfocadas al aspecto quirúrgico.
          </p>
          </div>
        </div>
      </div>
      <Footer className=" mt-40"/>
    </section>
  );
};

export default PreguntasFrec;
