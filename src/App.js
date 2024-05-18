
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Interests from './pages/Interests';
import Profession from './pages/Profession';
import Skills from './pages/Skills';
import Header from './components/Header';
import Footer from './components/Footer';
import SideNav from './components/SideNav';

function App() {
  return (
    <BrowserRouter>
      <SideNav />
      {/* <Header /> */}
      {/* <Footer /> */}
     
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/profession" element={<Profession />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;