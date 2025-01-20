import React from 'react';
import './Footer.css';
import logo from '../../assets/logo-footer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
      <img src={logo} alt="AluraFlix Logo" className="logo" />
      </p>
    </footer>
  );
};

export default Footer;