import React from "react";

import { SlSocialGithub as Cat } from "react-icons/sl";
import { HiOutlineBugAnt as Bug} from "react-icons/hi2";

export default function Footer ({}){

    return(

        <div className="Footer">
            <div className="Footer__logoContainer">
                <p className="Footer_logoText">Let it simple, let it modern.</p>
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