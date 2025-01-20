import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="AluraFlix Logo" className="logo" />
      <nav>
        <Link className="btn" to="/">Home</Link>
        <Link className="btn" to="/add-video">Novo Vídeo</Link>
      </nav>
    </header>
  );
};

export default Header;
