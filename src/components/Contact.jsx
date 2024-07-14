import React, { useEffect, useState } from "react";
import ContactImg from '../images/contactUs.png'
import { FaUser as User } from "react-icons/fa";
import { MdOutlineAlternateEmail as Email } from "react-icons/md";
import { BiMessageDetail as Message } from "react-icons/bi";
import { GrSend as Send } from "react-icons/gr";

export default function Contact({}){
    var [inputFocused,inputFocused$] = useState({nameField:false, emailField:false, messageField:false })
    var title = 'Something in mind?'

    function doNothing(){}
    function elementFocused (e){
        var element_class = e.target.getAttribute('class') 
        element_class == "Contact__nameField" ? inputFocused$(p=>({...inputFocused, nameField:true})) : 
            element_class == "Contact__emailField" ? inputFocused$(p=>({...inputFocused, emailField:true})) :
                element_class == "Contact__messageField" ? inputFocused$(p=>({...inputFocused, messageField:true})) :
                    doNothing()
        console.log('ok')
    }
    useEffect(()=>{
        var nameText = document.querySelector('.Contact__nameText')
        var emailText = document.querySelector('.Contact__emailText')
        var messageText = document.querySelector('.Contact__messageText')
        inputFocused.nameField == true && !nameText.classList.contains('Contact__transform') ? 
            nameText.classList.add('Contact__transform') :
            inputFocused.emailField == true && !emailText.classList.contains('Contact__transform') ?
            emailText.classList.add('Contact__transform') : 
            inputFocused.messageField == true && !messageText.classList.contains('Contact__transform') ? 
            messageText.classList.add('Contact__transform') : doNothing()
    },[inputFocused])
    {/* <legend className="Contact__title">something in mind?</legend> */}
    return(
        <div className="Contact">
            <div className="Contact__container">

                <div className="Contact__titleContainer">
                    <h2 className="Contact__title">{title}</h2>
                </div>

                <div className="Contact__form">

                <div className="Contact__nameComponent">
                    <input type="text" className="Contact__nameField" onFocus={elementFocused} />
                    <p className="Contact__nameText"> <User/> Your name here</p>
                </div>
                
                <div className="Contact__emailComponent">
                    <p className="Contact__emailText"> <Email/> Your email here</p>
                    <input type="text" className="Contact__emailField" onFocus={elementFocused} />
                </div>

                <div className="Contact__messageComponent">
                    <p className="Contact__messageText"> <Message/> Your message here</p>
                    <textarea className="Contact__messageField" onFocus={elementFocused}> </textarea>
                </div>

                <button className="Contact__sendButton"> <Send/> Send </button>
                </div>

            </div>
        </div>
    )
}