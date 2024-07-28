import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { HiOutlineBugAnt as Bug} from "react-icons/hi2";
import { FaMoon as Moon } from "react-icons/fa";
import { MdSunny as Sun} from "react-icons/md";
import { SlOptions as Options } from "react-icons/sl";
import { IoClose as Close} from "react-icons/io5";
import { BiBorderAll } from "react-icons/bi";
import { FaHome as Home } from "react-icons/fa";
import { GrArticle as Blog} from "react-icons/gr";
import { FaInfoCircle as Info } from "react-icons/fa";
import { GrContact as Contact } from "react-icons/gr";
import { GrGallery as Gallery } from "react-icons/gr";


export default function Navbar({darkMode, darkMode$, currentPage, currentPage$}){

    var [navOptions, navOptions$] = useState(false)
    function changeCurrentPage(e){
        
        currentPage$(e.target.getAttribute('name'))
    } 
    useEffect(()=>{
        var home_li = document.querySelector('.home__li')
        var blog_li = document.querySelector('.blog__li')
        var contact_li = document.querySelector('.contact__li')
        var about_li= document.querySelector('.about__li')
        var gallery_li = document.querySelector('.gallery__li')
        home_li.classList.remove('selectedLi');
        blog_li.classList.remove('selectedLi');
        contact_li.classList.remove('selectedLi');
        about_li.classList.remove('selectedLi');
        gallery_li.classList.remove('selectedLi');
        currentPage == 'home' ? home_li.classList.add('selectedLi') : currentPage == 'blog' ? blog_li.classList.add('selectedLi') : currentPage == 'about' ? about_li.classList.add('selectedLi') : currentPage == 'contact' ? contact_li.classList.add('selectedLi') : currentPage == 'gallery' ? gallery_li.classList.add('selectedLi') : console.log('hi')
        // console.log(gallery_li)
    },[currentPage])

    function setDarkTheme(){
        darkMode$(p=>(!p))
    }

    function DoToggleNavOptions(){
        navOptions$(p=>(!p))
    }
    return(

        <header className="Navbar__header" style={darkMode ? {boxShadow:'none'} : {}}>

            <div className="Navbar__container1">
                <p className="Navbar__logo" style={darkMode ? {color:'var(--dt-color-6'} : {}}> <Bug /> </p>
                <p className="Navbar__logoText"> Ixtix</p>
            </div>

            <div className="Navbar__container2">
                <p className="Navbar__options" style={darkMode ? {color:'var(--white)'} : {}} onClick={DoToggleNavOptions}> 
                    {navOptions ? <Close/> : <Options/>}
                </p>
                <ul className={`Navbar__ul ${navOptions&&'ul_smallScreenShow'}`} style={{backgroundColor:darkMode?'var(--black)':'var(--white)'}}>
                    <NavLink id="Link" to={'/'} activeClassName={'active'}>  <li className={`Navbar__li home__li`} name={'home'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}><Home/> &nbsp; Home </li></NavLink>
                    <NavLink id="Link" to={'/blog'}><li className={`Navbar__li blog__li`} name={'blog'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> <Blog/> &nbsp; Blog </li></NavLink> 
                    <NavLink id="Link" to={'/about'}><li className={`Navbar__li about__li`} name={'about'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> <Info/> &nbsp; About </li></NavLink>
                    <NavLink id="Link" to={'/contact'}><li className={`Navbar__li contact__li`} name={'contact'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> <Contact/> &nbsp; Contact </li></NavLink>
                    <NavLink id="Link" to={'/gallery'}><li className={`Navbar__li gallery__li`} name={'gallery'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> <Gallery/> &nbsp; Gallery </li></NavLink>

                    <li className="Navbar__li" onClick={setDarkTheme} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> {darkMode ? <Sun/> : <Moon/>}</li>
                </ul>
            </div>

        </header>
    )
}