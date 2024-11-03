import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './Pages.css'
import Header from '../common/Header';
import { Footer } from '../common/Footer';
import Home from '../home/Home';

import Employment from '../Employment/Employment';


const Pages = () => (
  <div>
  <Header />
  <Router>
    
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employment" element={<Employment />} />

      </Routes>

  </Router>
  <Footer/>
  </div>
);

export default Pages;