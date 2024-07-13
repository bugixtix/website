import React, { useEffect } from "react";
import { HiOutlineBugAnt as Bug} from "react-icons/hi2";
import { FaMoon as Moon } from "react-icons/fa";
import { SlOptions as Options } from "react-icons/sl";
import { Link } from "react-router-dom";

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

    return(

        <header className="Navbar__header">

            <div className="Navbar__container1">
                <p className="Navbar__logo"> <Bug /> </p>
                <p className="Navbar__logoText"> Ixtix</p>
            </div>

            <div className="Navbar__container2">
                <p className="Navbar__options"> 
                    <Options/>
                </p>
                <ul className="Navbar__ul">
                    <Link id="Link" to={'/'}><li className={`Navbar__li home__li`} name={'home'} onClick={changeCurrentPage}> Home </li></Link>
                    <Link id="Link" to={'/blog'}><li className={`Navbar__li blog__li`} name={'blog'} onClick={changeCurrentPage}> Blog </li></Link> 
                    <Link id="Link" to={'/about'}><li className={`Navbar__li about__li`} name={'about'} onClick={changeCurrentPage}> About </li></Link>
                    <Link id="Link" to={'/contact'}><li className={`Navbar__li contact__li`} name={'contact'} onClick={changeCurrentPage}> Contact </li></Link>
                    <li className="Navbar__li"> <Moon/></li>
                </ul>
            </div>

        </header>
    )
}