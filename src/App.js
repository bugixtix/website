import React,{useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import './styles/Navbar.css'
import './styles/Main.css'
import './styles/Footer.css'
import './styles/About.css'
import './styles/Contact.css'

import Navbar from './components/Navbar'; 
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
function App() {
  var [darkMode, darkMode$] = useState(false)
  var [currentPage, currentPage$] = useState("home")

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar 
          darkMode={darkMode} darkMode$={darkMode$}
          currentPage={currentPage} currentPage$={currentPage$}
        />
          <Routes>
            <Route path="/" element={
              <Main
                darkMode={darkMode} darkMode$={darkMode$}
                currentPage={currentPage} currentPage$={currentPage$}
              />} />
            <Route path="/about" element={
              <About
                darkMode={darkMode} darkMode$={darkMode$}
                currentPage={currentPage} currentPage$={currentPage$}
              />}/>
            <Route path="/blog" element={
              <Blog
                darkMode={darkMode} darkMode$={darkMode$}
                currentPage={currentPage} currentPage$={currentPage$}
              />}/>
            <Route path="/contact" element={
              <Contact
                  darkMode={darkMode} darkMode$={darkMode$}
                  currentPage={currentPage} currentPage$={currentPage$}
            />}/>
          </Routes>
        <Footer
          darkMode={darkMode} darkMode$={darkMode$}
          currentPage={currentPage} currentPage$={currentPage$}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
