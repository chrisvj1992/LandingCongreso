import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MisVis from "./components/MisVis/MisVis";
import PonentesSection from "./components/Ponentes/PonentesSection";
import Abstracts from "./components/Abstracts/Abstracts";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <>
    <Header/>
    <Hero/>    
    <MisVis/>
    <PonentesSection/>
    <div className="h-96 w-full bg-green-500"> <h2>Talleres</h2></div>
    <Abstracts/>
    <div className="h-96 w-full bg-red-800"> <h2>Comite organizador</h2></div>
    <Footer/>
    </>
  )
}

export default App
