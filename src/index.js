import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from './pages/experience';
import {ProjectsSection} from './pages/projects';
import './index.css';
import App from './App';
import NoiseCanvas from './components/utils/noisecanvas';
import Navbar from './components/navbar';
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NoiseCanvas />
      <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);