import React, {useState} from "react";
import Logo from "../../assets/images/logo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
    <header className="fixed flex bg-tertiaryColor items-center justify-between xl:justify-start w-full py-4 px-8 h-[14vh] z-50 " >
        <div className="md:w-1/6 w-1/2 text-center">
            <a href="#"><img className="" src={Logo} alt="Logo" /></a>
        </div>
        
        <div className={`fixed top-0 h-full md:w-0 ${showMenu ? 'left-0 w-full' : '-left-full'} bg-slate-600 bg-opacity-40 transition-all duration-500`}></div>
        <nav className={`fixed bg-tertiaryColor w-[80%] md:w-[90%] rounded-r-md xl:w-full h-full ${showMenu ? 'left-0 bg-opacity-85' : '-left-full'} top-0  xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`} >
            <a href="#Home" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-3xl font-medium text-primaryColor">
                Home
            </a>
            <a href="#Ponentes" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-3xl font-medium text-primaryColor">
                Ponentes
            </a>
            <a href="#" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-3xl font-medium text-primaryColor">
                Talleres
            </a>
            <a href="#" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-3xl font-medium text-primaryColor">
                Itinerario
            </a>
            <a href="#Abstracts" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-3xl font-medium text-primaryColor">
                Abstracts
            </a>
            <a href="#Footer" onClick={() => setShowMenu(false)} class="bebas-neue-regular" className="text-3xl font-medium text-primaryColor">
                Contacto
            </a>
        </nav>
        
        <button onClick={() => setShowMenu(!showMenu)} className={`xl:hidden text-3xl p-2 absolute ${showMenu ? '' :'hidden' }`} ><IoMdClose /></button>
        <button onClick={() => setShowMenu(!showMenu)} className={`xl:hidden text-3xl p-2 ${showMenu ? 'hidden' :'' }`}><IoMdMenu /></button>
    </header>
    );
};

export default Header;