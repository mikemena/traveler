import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from '../src/pages/HomePage';
import WorkWithMePage from '../src/pages/WorkWithMe';

const navbarLinks = [
  { title: 'Home', url: '/' },
  { title: 'Trips', url: '/trips' },
  { title: 'Services', url: '/services' },
  { title: 'Contact', url: '/contact' },
];

function App() {
  return (
    <Router>
      <NavBar navbarLinks={navbarLinks} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trips" element={<WorkWithMePage />} />
        <Route path="/services" element={<WorkWithMePage />} />
        <Route path="/contact" element={<WorkWithMePage />} />
      </Routes>
    </Router>
  );
}

export default App;
