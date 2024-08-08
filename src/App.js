import React,{useEffect, useRef, useState} from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import {CircleLoader as Loader} from 'react-spinners'

import Navbar from './components/Navbar'; 
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Article from './components/Article';
import AllArticles from './components/AllArticles'
import SearchResult from './components/SearchResult';
import Gallery from './components/Gallery';
import GetInTouch from './components/GetInTouch';
import SubscribeToNewsletter from './components/SubscribeToNewsletter';

import './App.css';
import './styles/Navbar.css'
import './styles/Main.css'
import './styles/Footer.css'
import './styles/About.css'
import './styles/Contact.css'
import './styles/Blog.css'
import './styles/Article.css'
import './styles/Gallery.css'
import './styles/AllArticles.css'
import './styles/GetInTouch.css'
import './styles/SubscribeToNewsletter.css'

import BlogData from './Blog.json';


function App({}) {
  var [darkMode, darkMode$] = useState(P=>(JSON.parse(localStorage.getItem('darkMode')) !== undefined ? JSON.parse(localStorage.getItem('darkMode')) : false))
  var [currentPage, currentPage$] = useState("home")
  var [searchQuery, searchQuery$] = useState("")
  var [loading, loading$] = useState(true)
  var AppMain = useRef(null)


  useEffect(()=>{
    var timer = setTimeout(()=>{
      loading$(false)
    },2000)
    return ()=>clearTimeout(timer)
  },[])

  // index for current article
  var [currentIndex, currentIndex$] = useState(BlogData.length - 1 || 0)


  return (
    <div className="App" style={darkMode ? {background:'var(--dt-color-1)'} : {background:'var(--lt-gradient-1)'}}>
      <BrowserRouter>
        <Navbar 
          darkMode={darkMode} darkMode$={darkMode$}
          currentPage={currentPage} currentPage$={currentPage$}
          AppMain={AppMain}
        />
      
      <div className={`AppMain`} ref={AppMain} > 

        <Routes>
          <Route path={"/home"} element={<Main
              darkMode={darkMode} darkMode$={darkMode$}
              currentPage={currentPage} currentPage$={currentPage$}
            />} />
          <Route path={"/"} element={
            <Main
              darkMode={darkMode} darkMode$={darkMode$}
              currentPage={currentPage} currentPage$={currentPage$}
            /> } />
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
              searchQuery={searchQuery} searchQuery$={searchQuery$}
            />}/>
          <Route path="/contact" element={
            <GetInTouch
            darkMode={darkMode} darkMode$={darkMode$}
            currentPage={currentPage} currentPage$={currentPage$}
            />}/>
          <Route path="/gallery" element={
            <Gallery
            darkMode={darkMode} darkMode$={darkMode$}
            currentPage={currentPage} currentPage$={currentPage$}
            />}/>
          {
            BlogData.map(oneBlogData=>{
              return(
                <Route path={`blog/article/${oneBlogData.title.replace(/ /g, "_").toLowerCase()}`} element={
                  <Article 
                    ArticlesData={oneBlogData}
                    darkMode={darkMode} darkMode$={darkMode$}
                />} 
                key={oneBlogData.id} />
              )
            })
          }

      <Route
        path='/blog/articles' element={
          <AllArticles
          darkMode={darkMode} darkMode$={darkMode$}
          />}
          />

      <Route
        path='/search-result' element={
          <SearchResult
          searchQuery={searchQuery} searchQuery$={searchQuery$} 
          />
        }
        />
          

      </Routes>
      </div>

        <Footer
          darkMode={darkMode} darkMode$={darkMode$}
          currentPage={currentPage} currentPage$={currentPage$}
          />
      </BrowserRouter>
    </div>
  );
}

export default App;
