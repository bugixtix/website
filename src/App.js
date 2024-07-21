import React,{useEffect, useState} from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'


import './App.css';
import './styles/Navbar.css'
import './styles/Main.css'
import './styles/Footer.css'
import './styles/About.css'
import './styles/Contact.css'
import './styles/Blog.css'

import Navbar from './components/Navbar'; 
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Article from './components/Article';

import BlogData from './Blog.json';


function App() {
  var [darkMode, darkMode$] = useState(false)
  var [currentPage, currentPage$] = useState("home")

  // index for current article
  var [currentIndex, currentIndex$] = useState(BlogData.length - 1 || 0)


  var darkTheme = () =>{
    return darkMode ? {backgroundColor:'white'} : {backgroundColor:'blue'}
  }
  return (
    <div className="App" style={darkMode ? {background:'var(--dt-color-1)'} : {background:'var(--lt-gradient-1)'}}>
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
                currentIndex={currentIndex} currentIndex$={currentIndex$}
              />}/>
            <Route path="/contact" element={
              <Contact
                  darkMode={darkMode} darkMode$={darkMode$}
                  currentPage={currentPage} currentPage$={currentPage$}
            />}/>
            
            {
              BlogData.map(oneBlogData=>{
                return(
                  <Route path={`blog/article/${oneBlogData.title.replace(/ /g, "_").toLowerCase()}`} element={<Article ArticlesData={oneBlogData}/>} key={oneBlogData.id} />
                )
              })
            }
              
              
              {/* <Article
                  darkMode={darkMode} darkMode$={darkMode$}
                  currentPage={currentPage} currentPage$={currentPage$}
              /> */}
              

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
