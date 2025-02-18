import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [vezeteknev, setVezeteknev] = useState('');
  const [keresztnev, setKeresztnev] = useState('');
  const [email, setEmail] = useState('');
  const [jelszo, setJelszo] = useState('');
  const [jelszoMegerosites, setJelszoMegerosites] = useState('');
  const [hiba, setHiba] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (jelszo !== jelszoMegerosites) {
      setHiba('A két jelszó nem egyezik!');
      return;
    }

    alert(`Sikeres regisztráció!\n\nNév: ${keresztnev} ${vezeteknev}\nEmail: ${email}\nJelszó: ${jelszo}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Regisztráció</h2>
        
        <div>
          <input 
            type="text" 
            value={vezeteknev} 
            onChange={(event) => setVezeteknev(event.target.value)} 
            placeholder="Vezetéknév" 
          />
          <input 
            type="text" 
            value={keresztnev} 
            onChange={(event) => setKeresztnev(event.target.value)} 
            placeholder="Keresztnév" 
          />
        </div>

        <p />

        <input 
          type="email" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)} 
          placeholder="Email cím" 
        />
        <p />
        <input 
          type="password" 
          value={jelszo} 
          onChange={(event) => setJelszo(event.target.value)} 
          placeholder="Jelszó" 
        />
        <p />
        <input 
          type="password" 
          value={jelszoMegerosites} 
          onChange={(event) => setJelszoMegerosites(event.target.value)} 
          placeholder="Jelszó megerősítése" 
        />

        {hiba && <p style={{ color: 'red' }}>{hiba}</p>}

        <h5>A regisztrációval elfogadod a felhasználási feltételeket.</h5>

        <input type="submit" value="Regisztráció"/>
        
        <p>Van már fiókod? <Link to="/login">Jelentkezz be!</Link></p>
      </div>
    </form>
  );
}

export default RegisterPage;
