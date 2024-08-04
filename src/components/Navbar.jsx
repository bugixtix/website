import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { HiOutlineBugAnt as Bug} from "react-icons/hi2";
// import { FaMoon as Moon } from "react-icons/fa";
import { GiMoonBats as Moon} from "react-icons/gi";
import { MdSunny as Sun} from "react-icons/md";
import { SlOptions as Options } from "react-icons/sl";
import { IoClose as Close} from "react-icons/io5";
import { BiBorderAll } from "react-icons/bi";
import { FaHome as Home } from "react-icons/fa";
import { GrArticle as Blog} from "react-icons/gr";
import { FaInfoCircle as Info } from "react-icons/fa";
import { GrContact as Contact } from "react-icons/gr";
import { GrGallery as Gallery } from "react-icons/gr";


export default function Navbar({darkMode, darkMode$, currentPage, currentPage$, AppMain, AppLoaded}){

    var [navOptions, navOptions$] = useState(false)
    var [screen,screen$] = useState(window.innerWidth)
    var [imagesLoaded, imagesLoaded$] = useState(-1)
    var location = useLocation();
    var menuRef = useRef(null)
    function changeCurrentPage(e){
        
        currentPage$(e.target.getAttribute('name'))
    } 
    //
    useEffect(()=>{
        var AppMain = document.querySelector('.AppMain') || document.createElement('div')
        var Footer = document.querySelector('.Footer') || document.createElement('div')
        var DoBlur = (confirmation) =>{
            if(confirmation){
                AppMain.classList.add('filter-blur'); 
                Footer.classList.add('filter-blur')
            }else{
                AppMain.classList.remove('filter-blur'); 
                Footer.classList.remove('filter-blur')
            }
        }
        navOptions === true ? DoBlur(true) : DoBlur(false);
    },[navOptions])

    //
    function DoChangeScreenWidth(){
        screen$(window.innerWidth);
        navOptions$(false)
        console.log(window.innerWidth)
    }
    //
    useEffect(()=>{
        window.addEventListener('resize', DoChangeScreenWidth)
        return ()=>{
            window.removeEventListener('resize',DoChangeScreenWidth)
        }
    },[screen])
    function setDarkTheme(){
        darkMode$(p=>(!p))
    }

    function DoToggleNavOptions(){
        navOptions$(p=>(!p))
    }
    //
    function DoHideMenu(){
        navOptions === true ? navOptions$(false) : console.log('__DoHideMenu')
    }
    return(

        <header className="Navbar__header" style={darkMode ? {boxShadow:'none'} : {}}>

            <div className="Navbar__container1">
                <p className="Navbar__logo" style={darkMode ? {color:'var(--dt-color-6'} : {}}> <Bug /> </p>
                <p className="Navbar__logoText"> Ixtix</p>
            </div>

            <div className="Navbar__container2">
                <p className="Navbar__options" style={darkMode&&!navOptions ? {color:'var(--white)'} : !darkMode&&navOptions ? {color:'red', transform:'scale(1.5)'} : darkMode&&navOptions ? {color:'red', transform:'scale(1.5)'} : {}} onClick={DoToggleNavOptions}> 
                    {navOptions ? <Close/> : <Options/>}
                </p>
                {/* <div className="Navbar__ulContainer"> */}

                 <ul ref={menuRef} className={`Navbar__ul ${navOptions&&'ul_smallScreenShow'}`} style={{backgroundColor:darkMode&&screen<=768?'var(--black)': (darkMode&&screen>768 || !darkMode&&screen>768) ? 'var(--transparent)': 'var(--white)'}}>
                    <NavLink id="Link" to={'/home'} onClick={DoHideMenu}>  <li className={`Navbar__li home__li`} name={'home'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}><Home/> &nbsp; Home </li></NavLink>
                    <NavLink id="Link" to={'/blog'} onClick={DoHideMenu}><li className={`Navbar__li blog__li`} name={'blog'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> <Blog/> &nbsp; Blog </li></NavLink> 
                    <NavLink id="Link" to={'/gallery'} onClick={DoHideMenu}><li className={`Navbar__li gallery__li`} name={'gallery'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> <Gallery/> &nbsp; Gallery </li></NavLink>
                    <NavLink id="Link" to={'/contact'} onClick={DoHideMenu}><li className={`Navbar__li contact__li`} name={'contact'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> <Contact/> &nbsp; Contact </li></NavLink>
                    <NavLink id="Link" to={'/about'} onClick={DoHideMenu}><li className={`Navbar__li about__li`} name={'about'} onClick={changeCurrentPage} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> <Info/> &nbsp; About </li></NavLink>

                    <li className="Navbar__li" onClick={setDarkTheme} style={darkMode ? {color:'var(--dt-color-6)'} : {}}> {darkMode ? <Sun/> : <Moon/>}</li>
                 </ul>
                {/* </div> */}
            </div>

        </header>
    )
}