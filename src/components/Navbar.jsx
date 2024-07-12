import React from "react";
import { HiOutlineBugAnt as Bug} from "react-icons/hi2";
import { FaMoon as Moon } from "react-icons/fa";
import { SlOptions as Options } from "react-icons/sl";

export default function Navbar({}){

    var site = 'Home'; 

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
                    <li className={`Navbar__li ${site =='Home' && 'selectedLi'}`}> Home </li>
                    <li className="Navbar__li"> Blog </li>
                    <li className="Navbar__li"> About </li>
                    <li className="Navbar__li"> Contact </li>
                    <li className="Navbar__li"> <Moon/></li>
                </ul>
            </div>

        </header>
    )
}