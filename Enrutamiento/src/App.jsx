import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Componentes/Home';
import Number from '../Componentes/Number';
import WordDisplay from '../Componentes/Word';
import Color from '../Componentes/Color';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:word" element={<WordDisplay />} />
        <Route path="/:number" element={<Number />} />
        <Route path="/:word/:color1/:color2" element={<Color />} />
      </Routes>
    </Router>
  );
};

export default App;
