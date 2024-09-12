import React from 'react';
import Header from '../components/Header/Header';
import Hero from "../components/Hero/Hero";
import MisVis from "../components/MisVis/MisVis";
import PonentesSection from "../components/Ponentes/PonentesSection";
import Footer from "../components/Footer/Footer";
import Talleres from "../components/Talleres/Talleres";

const Home = () => {
  return (
    <section className='bg-gray-100'>
    <Header/>
    <Hero/>    
    <MisVis/>
    <Talleres/>
    <Footer/>
    </section>
  );
};

export default Home;
