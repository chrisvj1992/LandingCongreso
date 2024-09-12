import React from 'react';
import Footer from '../components/Footer/Footer';
import Card from '../components/cardPonente/cardPonente';
import Alejandro from '../assets/images/Ponentes/Alejandro.jpg'
import AlejandroCV from '../assets/images/Ponentes/Alejandro cv.jpg'
import DavidDaniel from '../assets/images/Ponentes/David Daniel.jpg'
import DavidDanielCV from '../assets/images/Ponentes/David Daniel cv.jpg'
import Denisse from '../assets/images/Ponentes/Denisse.jpg'
import DenisseCV from '../assets/images/Ponentes/Denisse  cv.jpg'
import EmmanuelAntonio from '../assets/images/Ponentes/Emmanuel antonio.jpg'
import EmmanuelAntonioCV from '../assets/images/Ponentes/Emmanuel antonio cv.jpg'
import Erasto from '../assets/images/Ponentes/Erasto.jpg'
import ErastoCV from '../assets/images/Ponentes/Erasto cv.jpg'
import Fernanda from '../assets/images/Ponentes/Fernanda.jpg'
import FernandaCV from '../assets/images/Ponentes/Fernanda cv.jpg'
import GerardoDavalos from '../assets/images/Ponentes/Gerardo Davalos.jpg'
import GerardoDavalosCV from '../assets/images/Ponentes/Gerardo Davalos cv.jpg'
import GloriaLeticia from '../assets/images/Ponentes/Gloria Leticia.jpg'
import GloriaLeticiaCV from '../assets/images/Ponentes/Gloria Leticia cv.jpg'
import HugoAlberto from '../assets/images/Ponentes/Hugo alberto.jpg'
import HugoAlbertoCV from '../assets/images/Ponentes/Hugo alberto cv.jpg'
import JorgeJavier from '../assets/images/Ponentes/Jorge Javier.jpg'
import JorgeJavierCV from '../assets/images/Ponentes/jorge javier cv.jpg'
import MauricioP from '../assets/images/Ponentes/Mauricio P.jpg'
import MauricioPCV from '../assets/images/Ponentes/Mauricio P cv.jpg'
import { Link } from 'react-router-dom';

const cardsData = [
  { image1: Alejandro, image2: AlejandroCV },
  { image1: DavidDaniel, image2: DavidDanielCV },
  { image1: Denisse, image2: DenisseCV },
  { image1: EmmanuelAntonio, image2: EmmanuelAntonioCV },
  { image1: Erasto, image2: ErastoCV },
  { image1: Fernanda, image2: FernandaCV },
  { image1: GerardoDavalos, image2: GerardoDavalosCV },
  { image1: GloriaLeticia, image2: GloriaLeticiaCV },
  { image1: HugoAlberto, image2: HugoAlbertoCV },
  { image1: JorgeJavier, image2: JorgeJavierCV },
  { image1: MauricioP, image2: MauricioPCV },


];


const Ponentes = () => {
  return (
    <section className='bg-gray-100'>
      
      <div className='h-[720vh] md:h-[280vh] bg-cover bg-center custom-bg'>
        <Link to="/">
          <button className="bg-primaryColor text-white py-2 px-6 rounded-xl text-xl m-10">
            Atrás
          </button>
        </Link>
        
        <h1 className='text-4xl font-bold text-center text-gray-900'>Ponentes que nos acompañan</h1>
        <div className=' grid grid-cols-1 md:grid-cols-3 m-10 gap-2'>
          {cardsData.map((card, index) => (
            <Card key={index} image1={card.image1} image2={card.image2} />
          ))}
        </div>
      </div>

      <Footer className=" bottom-0"/>
    </section>
  );
};

export default Ponentes ;
