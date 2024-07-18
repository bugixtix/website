import React from "react";

import { SlSocialGithub as Cat } from "react-icons/sl";
import { HiOutlineBugAnt as Bug} from "react-icons/hi2";

export default function Footer ({darkMode}){

    var logoText = "©Ixtix 2024"
    return(

        <div className="Footer" style={darkMode ? {boxShadow:'none'} : {}}>
            <div className="Footer__logoContainer">
                <p className="Footer_logoText" style={darkMode ? {color:'var(--dt-color-6)'} : {}}>{logoText}</p>
            </div>
            <div className="Footer__socialMedia">
                <div className="Footer__socialMedia1" style={darkMode ? {color:'var(--dt-color-6)'} : {}}>
                    <Cat/>
                </div>
                <div className="Footer__socialMedia2" style={darkMode ? {color:'var(--dt-color-6)'} : {}}>
                    <Bug/>
                </div>
            </div>
        </div>
    )
}