import React from 'react';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Abstracts = () => {
  return (
    <section className='bg-gray-100'>
      <div className='h-[75vh] bg-cover bg-center custom-bg'>
        <Link to="/">
          <button className="bg-primaryColor text-white py-2 px-6 rounded-xl text-xl m-10">
            Atras
          </button>
        </Link>
        <div className=' flex flex-col items-center justify-center gap-5'>
          <h1 className='text-4xl font-bold text-center text-gray-900'>Concurso de Abstracts</h1>
          <p className='w-1/2 text-lg font-semibold text-center text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
            sollicitudin ipsum, id consectetur lectus ultricies ac. Nulla facilisi.
            Donec auctor, nunc vel pellentesque fermentum, mauris ex consectetur
            velit, vitae volutpat ipsum ex vel sapien.
          </p>
          <Link to="">
                <button className="bg-primaryColor text-white py-2 px-6 rounded-xl text-xl">
                  Inscríbete!
                </button>
          </Link>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Abstracts;
