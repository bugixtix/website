import React from "react";
import development from '../images/development.png'
import { FaChevronLeft as Left } from "react-icons/fa";
import { FaChevronRight as Right} from "react-icons/fa";
import { RxSlash as Slash} from "react-icons/rx";

export default function Main({}){

    var title = "Simple website? Always."
    var description = "You need a simple, user-friendly and well-designed website? Let it on us!"
    var btnText1 = "Learn more about"
    var btnText2 = "Say Hi!"
    return(

        <div className="Main">

            <div className="Main__container0">

            <div className="Main__container1">

                {/* <img src={development} alt="Main image"  className="Main__image"/> */}

                <div className="Main__container11">

                <div className="Main__firstCodeslash">
                    <Left className="CodeslashLeft"/>
                        <h2 className="Main__codeslashText"> body</h2>
                    <Right className="CodeslashRight"/>
                </div>



                <div className="Main__container111">
                    <Left className="Codeslash leftIcon"/>
                    <div className="Main__intro">
                        <h2 className="Main__title"> {title}</h2>
                        <h3 className="Main__description"> {description}</h3>
                        <button className="Main__aboutButton"> {btnText1}</button>
                    </div>
                    <Slash className="Codeslash slashIcon"/>
                    <Right className="Codeslash rightIcon"/>
                </div>

                <div className="Main__thirdCodeslash">
                    <Left className="CodeslashLeft"/>
                    <h2 className="Main__codeslashText"> body </h2>
                    <Slash className="CodeslashSlash"/>
                    <Right className="CodeslashRight"/>
                </div>
                </div>
            </div>


            <div className="Main__container2">
                <button className="Main__contactButton"> {btnText2}</button>
            </div>

            </div>

        </div>
    )
}