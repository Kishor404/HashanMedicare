import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



import Home from './Pages/Home';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();