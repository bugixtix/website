import React from "react";
import aboutImg from "../images/aboutImg.svg"

export default function About({}){

    var title = "About Ixtix"
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar ante eu nibh dignissim, et semper est vehicula. Nulla scelerisque orci eget lorem vehicula hendrerit. Nulla pharetra tristique mauris sit amet sagittis. In rhoncus, lorem quis tincidunt scelerisque, magna odio sodales arcu, fermentum euismod augue est nec metus. Duis eget sollicitudin elit, vel ullamcorper nisi. Maecenas scelerisque iaculis euismod. Nulla rutrum justo dolor, nec ultricies velit pulvinar vitae. Maecenas pharetra consequat dolor, eu malesuada urna eleifend vitae. In hac habitasse platea dictumst. Mauris vitae egestas enim, vitae imperdiet quam. Duis consectetur nulla sit amet justo euismod iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sit amet mi sit amet ante mattis varius. Fusce elementum ligula facilisis velit posuere, sit amet sodales enim elementum. \n Proin ut elit sagittis, pellentesque magna ut, maximus libero. Suspendisse suscipit orci vitae lorem ultrices, et dictum arcu aliquam. Cras dignissim, mauris vel pulvinar aliquet, justo leo ullamcorper enim, a tempor nulla quam vitae diam. In non pharetra quam. Nullam sed augue nec sem pretium facilisis quis nec libero. Sed elementum, leo a mattis iaculis, nisi tellus congue justo, eget finibus neque odio pellentesque metus. Phasellus augue ante, rutrum vel."

    return(
        <div className="About">
            <div className="About__container">
                <div className="About__textContainer">
                    <h2 className="About__title">{title}</h2>
                    <p className="About__text">{text}</p>
                </div>
                <div className="About__imgContainer">
                    <img src={aboutImg} alt="about me image" className="About__svg"/>
                </div>
            </div>
        </div>
    )
}