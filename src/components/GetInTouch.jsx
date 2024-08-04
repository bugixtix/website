import React, { useEffect, useState } from "react";

import { BiMessageDetail as Message } from "react-icons/bi";
import { GrSend as Send } from "react-icons/gr";
import { BsCardText as Subject } from "react-icons/bs";
import { SlSocialGithub as Cat } from "react-icons/sl";
import { FaXTwitter as Twitter } from "react-icons/fa6";

import {Link} from 'react-router-dom'


export default function GetInTouch({darkMode}){
    var [inputFocused,inputFocused$] = useState({subjectField:false, emailField:false, messageField:false })
    var [message, message$] = useState({_subject:"", _email:"",_message:""})
    var [showAlert, showAlert$] = useState(false)
    var [alertSection, alertSection$] = useState({show:false, text:''})
    var title = 'SEND ME AN EMAIL :)'
    var [loading, loading$] = useState(true)

    // var PATH = 'http://localhost:5000/api/sendMessage'
    //
    function doNothing(){}
    //
    function elementFocused (e){
        var element_class = e.target.getAttribute('class') 
        element_class == "GetInTouch__subjectField" ? inputFocused$(p=>({...inputFocused, subjectField:true})) : 
                element_class == "GetInTouch__messageField" ? inputFocused$(p=>({...inputFocused, messageField:true})) :
                    doNothing()
    }
    useEffect(()=>{
        // style
        var subjectText = document.querySelector('.GetInTouch__subjectText')
        var messageText = document.querySelector('.GetInTouch__messageText')
        inputFocused.subjectField == true && !subjectText.classList.contains('GetInTouch__transform') ? 
            subjectText.classList.add('GetInTouch__transform') :
            inputFocused.messageField == true && !messageText.classList.contains('GetInTouch__transform') ? 
            messageText.classList.add('GetInTouch__transform') : doNothing()
        // style end
    },[inputFocused])

    //
    //
    
    //
    function formSubmit(e){

        e.preventDefault();

        const emailAddress = 'ixtix_bug@hotmail.com';
        const mailToLink  = `mailto:${emailAddress}?subject=${encodeURIComponent(message._subject)}&body=${encodeURIComponent(message._message)}`;
        window.location.href = mailToLink;
        // validateForm(message) ? sendMessage() : alertSection$({show:true, text:"Message couldn't be sent, Please check your info"})    
        // console.log(message)
    }
    useEffect(()=>{
        if(alertSection.show){
            setTimeout(()=>alertSection$({text:'', show:false}), 5000)
        }
    },[alertSection])
    //
    useEffect(()=>{
        var timer = setTimeout(()=>{loading$(false)},0)
        return ()=>clearTimeout(timer)
    },[])
    //
    function changeValue(e){
        var {target} = e;
        target.getAttribute("class") == 'GetInTouch__subjectField' ? message$({...message, _subject:target.value}) : 
            target.getAttribute("class") == 'GetInTouch__messageField' ? message$({...message, _message:target.value }) : 
            doNothing()
    }
    return(
        <div className={`GetInTouch ${!loading && 'fadeIn-start'}`}>
        
            <div className="GetInTouch__container" >

                <div className={`GetInTouch__background ${darkMode&& 'GetInTouch__darkBackground'}`}></div>

                <div className="GetInTouch__main">


                    <div className="GetInTouch__form">

                     <div className="GetInTouch__titleContainer">
                        <h2 className="GetInTouch__title">{title}</h2>
                     </div>

                     <div className="GetInTouch__components">
                        <div className="GetInTouch__subjectComponent">
                            <p className="GetInTouch__subjectText"> 
                                <Subject/> Subject
                            </p>
                            <textarea type="text" className="GetInTouch__subjectField" onFocus={elementFocused} value={message._subject} onChange={changeValue} rows={1}> </textarea>
                        </div>
                        
                        <div className="GetInTouch__messageComponent">
                            <label className="GetInTouch__messageText" htmlFor="GetInTouch__messageField"> <Message/> Your message</label>
                            <textarea id="GetInTouch__messageField" className="GetInTouch__messageField" value={message._message} onChange={changeValue}> </textarea>
                        </div>

                        <button className="GetInTouch__sendButton" onClick={formSubmit}> <span><Send/></span> OPEN IN OUTLOOK </button>

                        {/* <div className={`GetInTouch__alert ${alertSection.show && 'show__alert'}`}>
                            {alertSection.text}
                        </div> */}
                     </div>
                     <div className="GetInTouch__socialmedia">
                        <span className="GetInTouch__splitterText"> OR </span>
                        <span className="GetInTouch__socialmediaSection"> 
                            <Link id="Link" to={'https://github.com/bugixtix'}> <Cat/> </Link>    
                            <Link id="Link" to={'#'}> <Twitter/> </Link>
                        </span>   
                     </div>
                    </div>

                </div>

            </div>
        
        </div>
    )
}