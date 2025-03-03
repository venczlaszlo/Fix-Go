import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import automosologo from '../images/logo.png';
import autoszerelologo from '../images/logo.png';
import alkatreszkereskedologo from '../images/logo.png';
import gumislogo from '../images/logo.png';
import automentoklogo from '../images/logo.png';


const HomePage = () => {
  return (
    <div>
      <h2>Találd meg a számodra megfelelő szolgáltatást!</h2>
      
      <div className="button-container">
        <Link to="/automoso">
          <button className="service-button">
            <img src={automosologo} alt="Autómosó ikon" className="service-icon" />
            Autómosók
          </button>
        </Link>
        <Link to="/autoszerelo">
          <button className="service-button">
            <img src={autoszerelologo} alt="Autószerelő ikon" className="service-icon" />
            Autószerelők
          </button>
        </Link>
        <Link to="/alkatreszkereskedo">
          <button className="service-button">
            <img src={alkatreszkereskedologo} alt="Alkatrészkereskedő ikon" className="service-icon" />
            Alkatrészkereskedők
          </button>
        </Link>
        <Link to="/gumis">
          <button className="service-button">
            <img src={gumislogo} alt="Gumis ikon" className="service-icon" />
            Gumisok
          </button>
        </Link>
        <Link to="/automentok">
          <button className="service-button">
            <img src={automentoklogo} alt="Autómentő ikon" className="service-icon" />
            Autómentők
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
