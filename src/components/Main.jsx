import React from "react";
import { Link } from "react-router-dom";
import development from '../images/development.png'
import { FaChevronLeft as Left } from "react-icons/fa";
import { FaChevronRight as Right} from "react-icons/fa";
import { RxSlash as Slash} from "react-icons/rx";

export default function Main({darkMode}){

    var title = "Hi there!"
    var description = "I'm Ixtix, a passionate web developer with a passion for clean code and user-friendly designs :)"
    var btnText1 = "Take a look at my work"
    var btnText2 = "Say Hi"
    return(

        <div className="Main">

            <div className="Main__container0" style={darkMode ? {boxShadow:'none'} : {}} >

            <div className={`Main__container0Background ${darkMode && 'Main__darkBackground'}`} >
            </div>

            <div className="Main__container1">

                {/* <img src={development} alt="Main image"  className="Main__image"/> */}

                <div className="Main__container11">

                <div className="Main__firstCodeslash">
                    <Left className="CodeslashLeft"/>
                        <h2 className="Main__codeslashText" style={darkMode ? {color:'var(--dt-color-5)'} : {}}> body</h2>
                    <Right className="CodeslashRight"/>
                </div>



                <div className="Main__container111">
                    <Left className="Codeslash leftIcon"/>
                    <div className="Main__intro">
                        <h2 className="Main__title" style={darkMode ? {color:'var(--white)'} : {}} > {title}</h2>
                        <h6 className="Main__description" style={darkMode ? {color:'var(--white)'} : {}}> {description}</h6>
                        <Link id="Link" to={'https://github.com/bugixtix'} className="Main__aboutButton">{btnText1} </Link>
                    </div>
                    <Slash className="Codeslash slashIcon"/>
                    <Right className="Codeslash rightIcon"/>
                </div>

                <div className="Main__thirdCodeslash">
                    <Left className="CodeslashLeft"/>
                    <h2 className="Main__codeslashText" style={darkMode ? {color:'var(--dt-color-5)'} : {}}> body </h2>
                    <Slash className="CodeslashSlash"/>
                    <Right className="CodeslashRight"/>
                </div>
                </div>
            </div>


            <div className="Main__container2">
                <Link id="Link" to="/contact" className="Main__contactButton"> {btnText2}</Link>
            </div>

            </div>

        </div>
    )
}