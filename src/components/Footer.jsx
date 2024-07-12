import React from "react";

import { SlSocialGithub as Cat } from "react-icons/sl";
import { HiOutlineBugAnt as Bug} from "react-icons/hi2";

export default function Footer ({}){

    var logoText = "©Ixtix 2024"
    return(

        <div className="Footer">
            <div className="Footer__logoContainer">
                <p className="Footer_logoText">{logoText}</p>
            </div>
            <div className="Footer__socialMedia">
                <div className="Footer__socialMedia1">
                    <Cat/>
                </div>
                <div className="Footer__socialMedia2">
                    <Bug/>
                </div>
            </div>
        </div>
    )
}