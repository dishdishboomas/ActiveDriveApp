import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MetricsPage from './pages/MetricsPage';
import MainProfilePage from './pages/MainProfilePage';
import ArticlesPage from './pages/ArticlesPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/metrics" element={<MetricsPage />} />
        <Route path="/mainprofile" element={<MainProfilePage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;