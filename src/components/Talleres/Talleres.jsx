import React, { useEffect, useState } from 'react';
import BoletoJueves from "../../assets/images/TalleresJueves.png"
import BoletoMiercoles from "../../assets/images/TalleresMiercoles.png"

import { Link } from 'react-router-dom';

const Talleres = () => {
    const [isHalfway, setIsHalfway] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const section = document.getElementById('Talleres');
          const sectionTop = section.getBoundingClientRect().top;
          const halfwayPoint = window.innerHeight * 0.8;
    
          if (sectionTop < halfwayPoint) {
            setIsHalfway(true);
          } else {
            setIsHalfway(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className='bg-tertiaryColor'>
            <h1 className=' pt-5 text-4xl font-bold text-center justify-center text-primaryColor mx-5'> Inscríbete a los talleres que tenemos para ti!</h1>
            <section id='Talleres' className={`flex flex-col md:flex-row w-full items-center justify-center `}>
                    <div className={` w-full md:w-1/2 p-10 transition-all duration-1000 ${isHalfway ? '' : '-translate-x-[800px]'}`} >
                        <img src={BoletoJueves} alt="" />
                    </div>
                    <div className={` w-full md:w-1/2 p-10 transition-all duration-1000 ${isHalfway ? '' : '-translate-x-[1600px]'}`}>
                        <img src={BoletoMiercoles} alt="" />
                    </div>
                    <Link to="https://forms.gle/C99xnKkHZeXfZfTZ7">
                    <button className="bg-primaryColor text-white py-2 px-6 m-5 md:m-10 rounded-xl text-xl">
                                Inscríbete a los talleres!
                    </button>
                    </Link>
            </section>
        </div>
    );
};

export default Talleres;