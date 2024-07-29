
import React, { useEffect, useState } from "react";

import GalleryPictures from '../Gallery.json'
import { IoClose as Close} from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowLeft as Left } from "react-icons/md";
import { MdKeyboardDoubleArrowRight as Right } from "react-icons/md";

export default function Gallery ({darkMode}){
    var [selectedImage, selectedImage$] = useState('true')
    var [fadeImage, fadeImage$] = useState(true)
    var [fadePopup, fadePopup$] = useState(false)
    var DoOpenImage = (image) =>{
        selectedImage$(image)
        DoFadePopup('in')
        console.log('run')
    }
    var DoCloseImage = () =>{
        selectedImage$('true')
        DoFadePopup('out')
    }
    var DoFadePopup = (mode) =>{
        var DoExecute = () =>{
            fadePopup$(()=>(mode === 'in' ? true : false))
        }
        fadePopup$(()=>(mode==='in' ? false : true));
        setTimeout(DoExecute,0)
        return ()=>{clearTimeout(DoExecute)}
    }
    var DoChangeImage = (direction) =>{
        var DoNext = () =>{
            var DoExecute = () =>{
                selectedImage$((p)=>(p.id === GalleryPictures.length-1 ? GalleryPictures[0] : GalleryPictures[p.id + 1]))
                fadeImage$(true)
            }
            fadeImage$(false);
            setTimeout(DoExecute,1000)
            return ()=>{clearTimeout(DoExecute)}
        }
        var DoPrevious = () =>{
            var DoExecute = () =>{
                selectedImage$((p)=>(p.id === 0 ? GalleryPictures[GalleryPictures.length-1] : GalleryPictures[p.id - 1]));
                fadeImage$(true);
            }
            fadeImage$(false);
            setTimeout(DoExecute,1000)
            return ()=>{clearTimeout(DoExecute)}
        }
        direction == "next" ? 
         DoNext() : 
        direction == "previous" ?
         DoPrevious() :
        console.log("__ DoChangeImage")
    }
    
    //
    var DoEscape = (event) =>{
        event.key === "Escape" ? DoCloseImage() : console.log('__ DoEscape')
    }
    useEffect(()=>{
        document.body.addEventListener('keyup',DoEscape)

        return ()=>{ document.body.removeEventListener('keyup', DoEscape)}
    },[])
    return(
        <div className="Gallery">
            <div className="Gallery__container">
                {
                    GalleryPictures.map(picture=>(
                        <div key={picture.id} onClick={()=>DoOpenImage(picture)}>
                            <img src={picture.img} className="Gallery__item" />
                        </div>    
                        ))
                }
                    <div className={`Gallery__popup ${fadePopup ? 'show-popup' : 'hide-popup'}`}>
                        <div className={`Gallery__popupContent`}>
                            <div className="Gallery__popupFirstSection">
                                <Close className="Gallery__closeSvg" onClick={DoCloseImage}/>
                            </div>
                            <div className="Gallery__popupSecondSection">
                                <Left className="Gallery__leftSvg" onClick={()=>DoChangeImage("previous")}/>
                                <img src={selectedImage.img} className={`Gallery__popupItem ${fadeImage ? 'popup-fadein' : 'popup-fadeout'} ${fadePopup ? 'show-popup' : 'hide-popup'} `}/>
                                <Right className="Gallery__rightSvg" onClick={()=>DoChangeImage("next")}/>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}