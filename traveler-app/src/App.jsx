import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from '../src/pages/HomePage';
import WorkWithMePage from '../src/pages/WorkWithMe';

const navbarLinks = [
  { title: 'Home', url: '/' },
  { title: 'Trips', url: '/traveler/trips' },
  { title: 'Services', url: '/traveler/services' },
  { title: 'Contact', url: '/traveler/contact' },
];

function App() {
  return (
    <Router basename="/traveler/">
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
