require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ha más a MySQL usered, írd át!
  password: '', // Ha van jelszavad, add meg itt
  database: 'fixgo'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL csatlakoztatva!');
});

// 🔹 Regisztráció
app.post('/register', (req, res) => {
  const { vezeteknev, keresztnev, email, jelszo } = req.body;
  const hashedPassword = bcrypt.hashSync(jelszo, 10);

  db.query(
    'INSERT INTO users (vezeteknev, keresztnev, email, jelszo) VALUES (?, ?, ?, ?)',
    [vezeteknev, keresztnev, email, hashedPassword],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Hiba történt!' });
      res.json({ message: '✅ Sikeres regisztráció!' });
    }
  );
});

// 🔹 Bejelentkezés
app.post('/login', (req, res) => {
  const { email, jelszo } = req.body;

  // Ellenőrzés, hogy az email és jelszó mezők ki vannak-e töltve
  if (!email || !jelszo) {
    console.log('Kapott adatok:', req.body);  // Itt naplózzuk, hogy mi érkezik
    return res.status(400).json({ error: '❌ Kérlek töltsd ki az email és jelszó mezőt!' });
  }

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('SQL hiba:', err);
      return res.status(500).json({ error: 'Hiba történt!' });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: '❌ Helytelen email vagy jelszó!' });
    }

    const user = results[0];

    const passwordMatch = bcrypt.compareSync(jelszo, user.jelszo);

    if (!passwordMatch) {
      return res.status(401).json({ error: '❌ Helytelen email vagy jelszó!' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, 'secretkey', { expiresIn: '1h' });
    res.json({ message: '✅ Sikeres bejelentkezés!', token });
  });
});

app.listen(5000, () => console.log('🚀 Backend fut a 5000-es porton!'));
