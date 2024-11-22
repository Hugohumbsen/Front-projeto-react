import React from 'react';
import Header from './comp/header/Header';
import Footer from './comp/Footer/Footer'; // Caminho correto para Footer.jsx
import Login from './pages/login/Login';   // Caminho correto para Login.jsx
import Controle from './pages/Control/Control';   // Caminho correto para Controle.jsx
import Filtro from './pages/Filter/Filter';   // Caminho correto para Filtro.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/filtro" element={<Filtro />} />
        <Route path="/controle" element={<Controle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
