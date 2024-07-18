import React from "react";
import aboutImg from "../images/aboutImg.svg"

export default function About({darkMode}){

    var title = "About Ixtix"
    var text = <> <br></br>A passionate web developer who finds immense joy in creating websites and applications. This platform serves as a space where I share articles on various IT topics, including web development and programming languages. Here, you will also be able to view my portfolio and see some of the projects I've worked on (currently under construction, but coming soon). <br></br> <br></br>I have always been a curious individual, and I love spending my free time learning new things. My enthusiasm for technology and programming drives me to constantly explore and expand my knowledge. Through this website, I aim to connect with like-minded individuals, share insights, and contribute to the tech community. Stay tuned for updates on my latest projects and articles. <br></br><br></br>I hope you find the content here informative and inspiring. Thank you for visiting.</>

    return(
        <div className="About">
            <div className="About__container" style={darkMode ? {boxShadow:'none'} :{}}>
                <div className="About__background" style={darkMode ? {filter:'brightness(40%)'} : {filter:'brightness(100%)'}}></div>
                <div className="About__textContainer">
                    <h2 className="About__title" style={darkMode ? {color:'var(--white)'} : {}}>{title}</h2>
                    <p className="About__text" style={darkMode ? {color:'var(--white)'} : {}}>{text}</p>
                </div>
                <div className="About__imgContainer">
                    <img src={aboutImg} alt="about me image" className="About__svg"/>
                </div>
            </div>
        </div>
    )
}