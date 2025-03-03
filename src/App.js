import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import Header from './components/Header';
import Footer from "./components/Footer";

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import PrivacyPage from './pages/PrivacyPage';
import TermsOfUsePage from './pages/TermsofUsePage';

import Alkatreszkereskedo from './pages/Alkatreszkereskedo';
import Automentok from './pages/Automentok';
import Automoso from './pages/Automoso';
import Autoszerelo from './pages/Autoszerelo';
import Gumis from './pages/Gumis';

function App() {
  return (
    <Router>

      <Header />

      <div className="container">
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/termsofuse" element={<TermsOfUsePage />} />

          <Route path="/alkatreszkereskedo" element={<Alkatreszkereskedo />} />
          <Route path="/automentok" element={<Automentok />} />
          <Route path="/automoso" element={< Automoso/>} />
          <Route path="/autoszerelo" element={< Autoszerelo/>} />
          <Route path="/gumis" element={< Gumis/>} />
          
        </Routes>
      </div>

      <Footer />

    </Router>
  );
}

export default App;
