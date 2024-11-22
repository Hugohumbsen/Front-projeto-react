import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importando o arquivo de estilo

function Header() {
  const handleLogout = () => {
    // Aqui você pode limpar o estado de login ou redirecionar para a tela de login
    window.location.href = '/';  // Redireciona para a tela de login
  };

  return (
    <header>
      <nav>
        <div className="navbar">
          <button onClick={handleLogout} className="nav-item">Sair</button>

          <div className="nav-links">
            <Link to="/filtro" className="nav-item">Filtro</Link>
            <Link to="/controle" className="nav-item">Controle</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
