import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Course from "./Pages/Course";
import Contact from './Pages/Contact';


import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();