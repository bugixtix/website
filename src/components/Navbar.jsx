import React, { useEffect } from "react";
import { HiOutlineBugAnt as Bug} from "react-icons/hi2";
import { FaMoon as Moon } from "react-icons/fa";
import { SlOptions as Options } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BiBorderAll } from "react-icons/bi";

export default function Navbar({darkMode, darkMode$, currentPage, currentPage$}){

    function changeCurrentPage(e){
        
        currentPage$(e.target.getAttribute('name'))
    } 
    useEffect(()=>{
        var home_li = document.querySelector('.home__li')
        var blog_li = document.querySelector('.blog__li')
        var contact_li = document.querySelector('.contact__li')
        var about_li= document.querySelector('.about__li')
        home_li.classList.remove('selectedLi');
        blog_li.classList.remove('selectedLi');
        contact_li.classList.remove('selectedLi');
        about_li.classList.remove('selectedLi');
        currentPage == 'home' ? home_li.classList.add('selectedLi') : currentPage == 'blog' ? blog_li.classList.add('selectedLi') : currentPage == 'about' ? about_li.classList.add('selectedLi') : currentPage == 'contact' ? contact_li.classList.add('selectedLi') : console.log('hi')
        console.log(currentPage)
    },[currentPage])


    function setDarkTheme(){
        darkMode$(p=>(!p))
    }
    return(

        <header className="Navbar__header" style={darkMode ? {boxShadow:'none'} : {}}>

            <div className="Navbar__container1">
                <p className="Navbar__logo" style={darkMode ? {color:'var(--dt-color-6'} : {}}> <Bug /> </p>
                <p className="Navbar__logoText"> Ixtix</p>
            </div>

            <div className="Navbar__container2">
                <p className="Navbar__options" style={darkMode ? {color:'var(--white)', border:'0.2rem solid var(--lt-color-2)'} : {}}> 
                    <Options/>
                </p>
                <ul className="Navbar__ul">
                    <Link id="Link" to={'/'}><li className={`Navbar__li home__li`} name={'home'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> Home </li></Link>
                    <Link id="Link" to={'/blog'}><li className={`Navbar__li blog__li`} name={'blog'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> Blog </li></Link> 
                    <Link id="Link" to={'/about'}><li className={`Navbar__li about__li`} name={'about'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> About </li></Link>
                    <Link id="Link" to={'/contact'}><li className={`Navbar__li contact__li`} name={'contact'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> Contact </li></Link>
                    <li className="Navbar__li" onClick={setDarkTheme} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> <Moon/></li>
                </ul>
            </div>

        </header>
    )
}