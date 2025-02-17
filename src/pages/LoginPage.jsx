import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h2>Bejelentkezés</h2>
      <input type="email" placeholder="Email cím" />
      <input type="password" placeholder="Jelszó" />
      <p/>
      <label>
        <input type="checkbox" /> Emlékezz rám
      </label>
      <p/>
      <button>Bejelentkezés</button>
      <p>Új vagy itt? <Link to="/register">Regisztrálj!</Link></p>
    </div>
  );
};

export default LoginPage;
