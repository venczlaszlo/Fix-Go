import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import automosologo from '../images/automosologo.png';
import autoszerelologo from '../images/autoszerelologo.png';
import alkatreszkereskedologo from '../images/alkatreszkereskedologo.png';
import gumislogo from '../images/gumislogo.png';
import automentoklogo from '../images/automentoklogo.png';


const HomePage = () => {
  return (
    <div className='body'>
      <h2>Találd meg a számodra megfelelő szolgáltatást!</h2>

      <p className='feherter'/>
      
      <div className="button-container">
      <Link to="/alkatreszkereskedo">
          <button className="service-button">
            <img src={alkatreszkereskedologo} alt="Alkatrészkereskedő ikon" className="service-icon" />
            Alkatrészkereskedők
          </button>
        </Link>

        <Link to="/autoszerelo">
          <button className="service-button">
            <img src={autoszerelologo} alt="Autószerelő ikon" className="service-icon" />
            Autószerelők
          </button>
        </Link>

        <Link to="/gumis">
          <button className="service-button">
            <img src={gumislogo} alt="Gumis ikon" className="service-icon" />
            Gumisok
          </button>
        </Link>

        <Link to="/automoso">
          <button className="service-button">
            <img src={automosologo} alt="Autómosó ikon" className="service-icon" />
            Autómosók
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
