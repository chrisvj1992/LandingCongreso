import React from "react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
    return (
    <header className="flex items-center p-4 w-full h-[14vh] bg-tertiaryColor border" >
        <div className="xl:m-20 w-1/6 items-center">
            <a href="#"><img className="" src={Logo} alt="Logo" /></a>
        </div>
        <nav className="fixed w-full h-full right-0 top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10" >
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
    </header>
    );
};

export default Header;