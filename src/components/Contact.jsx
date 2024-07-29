import React, { useEffect, useState } from "react";
import ContactImg from '../images/contactUs.png'
import { FaUser as User } from "react-icons/fa";
import { MdOutlineAlternateEmail as Email } from "react-icons/md";
import { BiMessageDetail as Message } from "react-icons/bi";
import { GrSend as Send } from "react-icons/gr";

export default function Contact({darkMode}){
    var [inputFocused,inputFocused$] = useState({nameField:false, emailField:false, messageField:false })
    var [message, message$] = useState({_name:"", _email:"",_message:""})
    var [showAlert, showAlert$] = useState(false)
    var [alertSection, alertSection$] = useState({show:false, text:''})
    var title = 'Get in touch :)'
    var PATH = 'http://localhost:5000/api/sendMessage'
    //
    function doNothing(){}
    //
    function elementFocused (e){
        var element_class = e.target.getAttribute('class') 
        element_class == "Contact__nameField" ? inputFocused$(p=>({...inputFocused, nameField:true})) : 
            element_class == "Contact__emailField" ? inputFocused$(p=>({...inputFocused, emailField:true})) :
                element_class == "Contact__messageField" ? inputFocused$(p=>({...inputFocused, messageField:true})) :
                    doNothing()
    }
    useEffect(()=>{
        // style
        var nameText = document.querySelector('.Contact__nameText')
        var emailText = document.querySelector('.Contact__emailText')
        var messageText = document.querySelector('.Contact__messageText')
        inputFocused.nameField == true && !nameText.classList.contains('Contact__transform') ? 
            nameText.classList.add('Contact__transform') :
            inputFocused.emailField == true && !emailText.classList.contains('Contact__transform') ?
            emailText.classList.add('Contact__transform') : 
            inputFocused.messageField == true && !messageText.classList.contains('Contact__transform') ? 
            messageText.classList.add('Contact__transform') : doNothing()
        // style end
    },[inputFocused])

    //
    //
    
    //
    function formSubmit(){
        validateForm(message) ? sendMessage() : alertSection$({show:true, text:"Message couldn't be sent, Please check your info"})    
        // console.log(message)
    }
    useEffect(()=>{
        if(alertSection.show){
            setTimeout(()=>alertSection$({text:'', show:false}), 5000)
        }
    },[alertSection])

    
    async function sendMessage(){
        try{
            const res = await fetch(PATH, {
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(message)
            })
            const data = await res.json()
            console.log(data)
            data.messageCode == 200 ? message$({_name:'',_email:'',_message:''}) : doNothing()
        }catch(error_){console.log(error_)}
    }
    //
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
      }
    //
    function validateForm() {
        var { _email : email, _name : name , _message } = message
        if (!validateEmail(email)) return false;
        if (name.trim() === '') return false;
        if (_message.trim() === '') return false;
        return true;
    }
    
    //
    function changeValue(e){
        var {target} = e;
        target.getAttribute("class") == 'Contact__nameField' ? message$({...message, _name:target.value}) : 
            target.getAttribute("class") == 'Contact__emailField' ? message$({...message, _email:target.value}) :
            target.getAttribute("class") == 'Contact__messageField' ? message$({...message, _message:target.value }) : 
            doNothing()
    }
    //

    return(
        <div className="Contact">
            <div className="Contact__container" style={darkMode ? {boxShadow:'none'} : {}}>

                <div className={`Contact__background ${darkMode&& 'Contact__darkBackground'}`}></div>

                <div className="Contact__wrapper">

                <div className="Contact__titleContainer">
                    <h2 className="Contact__title" style={darkMode ? {color:'var(--white)'} : {}}>{title}</h2>
                </div>

                <div className="Contact__form" style={darkMode ? {boxShadow:'none', backgroundColor:'var(--color-7)'} : {}}>

                <div className="Contact__nameComponent">
                    <input type="text" className="Contact__nameField" onFocus={elementFocused} value={message._name} onChange={changeValue}  />
                    <p className="Contact__nameText" style={(!darkMode && inputFocused.nameField) ? {color:'var(--black)'} : {}}> <User/> Your name here</p>
                </div>
                
                <div className="Contact__emailComponent">
                    <p className="Contact__emailText" style={(!darkMode && inputFocused.nameField) ? {color:'var(--black)'} : {}}> <Email/> Your email here</p>
                    <input type="text" className="Contact__emailField" onFocus={elementFocused} value={message._email} onChange={changeValue} />
                </div>

                <div className="Contact__messageComponent">
                    <p className="Contact__messageText" style={(!darkMode && inputFocused.nameField) ? {color:'var(--black)'} : {}}> <Message/> Your message here</p>
                    <textarea className="Contact__messageField" onFocus={elementFocused} value={message._message} onChange={changeValue}> </textarea>
                </div>

                <button className="Contact__sendButton" onClick={formSubmit}> <Send/> Send </button>

                <div className={`Contact__alert ${alertSection.show && 'show__alert'}`}>
                    {alertSection.text}
                </div>

                </div>

                </div>

            </div>
        </div>
    )
}