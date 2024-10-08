import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegistroEnLinea from './pages/RegistroEnLinea';
import Abstracts from './pages/Abstracts';
import NotFound from './pages/NotFound';
import PreguntasFrec from './pages/PreguntasFrec';
import Ponentes from './pages/Ponentes';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RegistroEnLinea" element={<RegistroEnLinea />} />
          <Route path="/Abstracts" element={<Abstracts />} />
          <Route path="/PreguntasFrecuentes" element={<PreguntasFrec />} />
          <Route path="/Ponentes" element={<Ponentes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;