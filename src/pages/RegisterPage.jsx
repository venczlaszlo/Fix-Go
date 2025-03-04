import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [vezeteknev, setVezeteknev] = useState('');
  const [keresztnev, setKeresztnev] = useState('');
  const [email, setEmail] = useState('');
  const [jelszo, setJelszo] = useState('');
  const [jelszoMegerosites, setJelszoMegerosites] = useState('');
  const [hiba, setHiba] = useState('');
  const [siker, setSiker] = useState('');
  const navigate = useNavigate(); // 🔄 Átirányításhoz

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (jelszo !== jelszoMegerosites) {
      setHiba('❌ A két jelszó nem egyezik!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vezeteknev, keresztnev, email, jelszo })
      });

      const data = await response.json();
      if (response.ok) {
        setSiker(data.message);
        setHiba('');
        setTimeout(() => {
          navigate('/login'); // 🔄 Siker esetén átirányítás
        }, 2000); // 2 másodperc után megy az átirányítás
      } else {
        setHiba(data.error);
      }
    } catch (error) {
      setHiba('❌ Hálózati hiba!');
    }
  };

  return (
    <div className='asd'>
      <form onSubmit={handleSubmit}>
        <h1>Regisztráció</h1>
        <input type="text" value={vezeteknev} onChange={e => setVezeteknev(e.target.value)} placeholder="Vezetéknév" />
        <input type="text" value={keresztnev} onChange={e => setKeresztnev(e.target.value)} placeholder="Keresztnév" /><p />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email cím" /><p />
        <input type="password" value={jelszo} onChange={e => setJelszo(e.target.value)} placeholder="Jelszó" />
        <input type="password" value={jelszoMegerosites} onChange={e => setJelszoMegerosites(e.target.value)} placeholder="Jelszó megerősítése" /><p />
        {hiba && <p style={{ color: 'red' }}>{hiba}</p>}
        {siker && <p style={{ color: 'green' }}>{siker}</p>}
        <input type="submit" value="Regisztráció" />
        <p>Van már fiókod? <Link to="/login">Jelentkezz be!</Link></p>
      </form>
    </div>

  );
}

export default RegisterPage;
