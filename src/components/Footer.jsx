import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Fix-Go Logo" className="footer-logo" />
          <p className="quote">"A legjobb út a célhoz vezet."</p>
          <div className="settings">
            <select>
              <option value="hu">Magyar</option>
              <option value="en">English</option>
            </select>
            <select>
              <option value="light">Világos</option>
              <option value="dark">Sötét</option>
            </select>
          </div>
        </div>
        <div className="footer-right">
          <nav>
            <strong className="site-name">Fix-Go.hu</strong>
            <Link to="/privacy">Adatvédelem</Link>
            <Link to="/termsofuse">Felhasználói feltételek</Link>
          </nav>
        </div>
      </div>
      <hr />
      <p className="copyright">© 2025 Fix-Go.hu - Minden jog fenntartva</p>
    </footer>
  );
};

export default Footer;
