import React, { useState, useEffect } from 'react';
import Logo from "../../assets/images/logo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
    <header id="header" className={`fixed flex bg-tertiaryColor items-center justify-between xl:justify-start py-4 px-8 h-[14vh] z-50 my-3 mx-5 md:mx-14 rounded-md ${isScrolled ? 'opacity-90' : 'opacity-100'}`} >
        <div className="md:w-1/6 w-1/2 text-center">
            <a href="#"><img className="" src={Logo} alt="Logo" /></a>
        </div>
        
        <div className={`fixed top-0 h-full xl:w-0 ${showMenu ? 'left-0 w-full' : '-left-full'} bg-slate-600 bg-opacity-40 transition-all duration-500`}></div>
        <nav className={`fixed bg-tertiaryColor w-[70%] rounded-r-md xl:w-full h-full ${showMenu ? 'left-0' : '-left-full'} top-0  xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`} >
            <a href="#Home" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-2xl font-medium text-primaryColor">
                Inicio
            </a>
            <a href="#Ponentes" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-2xl font-medium text-primaryColor">
                Ponentes
            </a>
            <a href="#Talleres" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-2xl font-medium text-primaryColor">
                Talleres
            </a>
            <Link to="./Abstracts">
                <p href="#" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-2xl font-medium text-primaryColor">
                    Abstracts
                </p>
            </Link>
            <a href="#" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-2xl font-medium text-primaryColor">
                Itinerario
            </a>
            <a href="#Footer" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-2xl font-medium text-primaryColor">
                Contacto
            </a>
            <Link to="https://forms.gle/TLsShMxdqFhtqSZv7">
                <button className="bg-primaryColor text-white py-2 px-6 rounded-xl text-xl">
                            Inscríbete!
                </button>
            </Link>
        </nav>
        
        <button onClick={() => setShowMenu(!showMenu)} className={`xl:hidden text-3xl p-2 absolute right-9 ${showMenu ? '' :'hidden' }`} ><IoMdClose /></button>
        <button onClick={() => setShowMenu(!showMenu)} className={`xl:hidden text-3xl p-2 ${showMenu ? 'hidden' :'' }`}><IoMdMenu /></button>
    </header>

    
    );
};

export default Header;