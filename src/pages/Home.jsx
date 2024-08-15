import React from 'react';
import Header from '../components/Header/Header';
import Hero from "../components/Hero/Hero";
import MisVis from "../components/MisVis/MisVis";
import PonentesSection from "../components/Ponentes/PonentesSection";
import Abstracts from "../components/Abstracts/Abstracts";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <section className='bg-gray-100'>
    <Header/>
    <Hero/>    
    <MisVis/>
    <PonentesSection/>
    <Footer/>
    </section>
  );
};

export default Home;
