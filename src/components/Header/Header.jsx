import React, {useState} from "react";
import Logo from "../../assets/images/logo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
    <header className="flex bg-tertiaryColor items-center justify-between xl:justify-start w-full py-4 px-8 h-[14vh] z-50 " >
        <div className="xl:w-1/6 w-1/2 text-center">
            <a href="#"><img className="" src={Logo} alt="Logo" /></a>
        </div>
        
        <div className={`fixed absolute top-0 left-0 h-full hidden w-[50%] bg-tertiaryColor`}></div>
        <div className={`fixed absolute top-0 left-0 h-full hidden w-[60%] bg-tertiaryColor`}></div>
        <nav className={`fixed bg-tertiaryColor w-[80%] md:w-[80%] xl:w-full h-full ${showMenu ? 'left-10 bg-opacity-60' : '-left-full bg-opacity-100'} top-0  xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`} >
            <a href="#" class="bebas-neue-regular" className="text-2xl font-medium text-primaryColor">
                Ponentes
            </a>
            <a href="#" class="bebas-neue-regular" className="text-2xl font-medium text-primaryColor">
                Talleres
            </a>
            <a href="#" class="bebas-neue-regular" className="text-2xl font-medium text-primaryColor">
                Itinerario
            </a>
            <a href="#" class="bebas-neue-regular" className="text-2xl font-medium text-primaryColor">
                Abstracts
            </a>
            <a href="#" class="bebas-neue-regular" className="text-2xl font-medium text-primaryColor">
                Contacto
            </a>
        </nav>
        
        <button onClick={() => setShowMenu(!showMenu)} className={`md:hidden text-2xl p-2 ${showMenu ? '' :'hidden' }`} ><IoMdClose /></button>
        <button onClick={() => setShowMenu(!showMenu)} className={`xl:hidden text-2xl p-2 ${showMenu ? 'hidden' :'' }`}><IoMdMenu /></button>
    </header>
    );
};

export default Header;