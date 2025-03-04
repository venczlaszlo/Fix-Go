import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import automosologo from '../images/automosologo.png';
import autoszerelologo from '../images/autoszerelologo.png';
import alkatreszkereskedologo from '../images/alkatreszkereskedologo.png';
import gumiszervizlogo from '../images/gumiszervizlogo.png';
import automentoklogo from '../images/automentoklogo.png';


const HomePage = () => {
  return (
    <div className='body'>
      <h1>Találd meg a számodra megfelelő szolgáltatást!</h1>

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

        <Link to="/gumiszerviz">
          <button className="service-button">
            <img src={gumiszervizlogo} alt="Gumiszervíz ikon" className="service-icon" />
            Gumiszervízek
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
