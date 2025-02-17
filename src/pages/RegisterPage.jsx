import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h2>Regisztráció</h2>
      <div>
        <input type="text" placeholder="Vezetéknév" />
        <input type="text" placeholder="Keresztnév" />
      </div>
      <p/>
      <input type="email" placeholder="Email cím" />
      <p/>
      <input type="password" placeholder="Jelszó" />
      <h5>A regisztrációval elfogadod a felhasználási feltételeket.</h5>
      <button>Regisztráció</button>
      <p>Van már fiókod? <Link to="/login">Jelentkezz be!</Link></p>
    </div>
  );
};

export default RegisterPage;
