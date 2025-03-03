import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Minden mezőt ki kell tölteni!");
      return;
    }

    // Naplózzuk a beküldött adatokat
    console.log('Email:', email);
    console.log('Jelszó:', password);

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, jelszo: password })
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
    } else {
      alert(data.error);
    }
  };

  return (
    <div className='asd'>
      <form onSubmit={handleSubmit}>
        <h2>Bejelentkezés</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email cím"
        />
        <p />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Jelszó"
        />
        <p />

        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />{' '}
          Emlékezz rám
        </label>
        <p />

        <button type="submit">Bejelentkezés</button>

        <p>Új vagy itt? <Link to="/register">Regisztrálj!</Link></p>
      </form>
    </div>

  );
};

export default LoginPage;
