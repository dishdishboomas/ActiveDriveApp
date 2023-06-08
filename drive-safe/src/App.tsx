import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MetricsPage from './pages/MetricsPage';
import MainProfilePage from './pages/MainProfilePage';
import ArticlesPage from './pages/ArticlesPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/metrics" element={<MetricsPage />} />
        <Route path="/mainprofile" element={<MainProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;