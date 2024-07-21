import React, { useEffect, useState } from "react";
import {Link, unstable_useViewTransitionState} from 'react-router-dom'

import { MdOutlineKeyboardDoubleArrowLeft as Left } from "react-icons/md";
import { MdKeyboardDoubleArrowRight as Right } from "react-icons/md";
import { HiSearch as Search } from "react-icons/hi";

import BlogData from '../Blog.json'

export default function Blog({currentIndex, currentIndex$}){

    var [articlesShortInfo, articlesShortInfo$] = useState({id:"", title:"",img:""})
    var [searchValue, searchValue$] = useState('')
    
    var totalArticles = BlogData.length;

    var title = BlogData[0].title.toLocaleUpperCase();
    var id = BlogData[0].id;
    var img = BlogData[0].img;
    var articleTitle = title.replace(/ /g,'_')

    var showArticle = (id) =>{
        // Not necessary
    }
    var searchWithEnter = (e) =>{
        if(e.key==='Enter'){
            search()
        }
    }
    var search = () =>{
        console.log("SEARCHING ...")
    }
    var previousArticle = () =>{
        currentIndex$((p)=>(p === 0 ? totalArticles - 1 : p - 1));
    }  

    var nextArticle = () =>{
        currentIndex$((p)=>(p === totalArticles - 1 ? 0 : p + 1));
    }
    useEffect(()=>{
        articlesShortInfo$(BlogData[currentIndex])
        console.log(currentIndex)
    },[currentIndex])

    return(
        <div className="Blog">

            {/*MAIN SECTION */}
            <div className="Blog__main">
                <p className="Blog__mainTitle"> {articlesShortInfo.title || "Loading"}</p>
                <div className="Blog__mainSection">
                    <Left className="Blog__leftSvg" onClick={previousArticle}/>
                    <Link className="Blog__imgLink" to={`./article/${articlesShortInfo.title.replace(/ /g, "_").toLowerCase() || '#'}`}>
                        <img className="Blog__mainImg" src={articlesShortInfo.img||''} onClick={showArticle} />
                    </Link>
                    <Right className="Blog__rightSvg" onClick={nextArticle}/>
                </div>
            </div>

            {/*SECONDARY SECTION */}
            <div className="Blog__secondary">
                <div className="Blog__secondarySection" >
                    <Search className="Blog__secondarySvg" onClick={search}/>
                    <span className="Blog__span"></span>
                    <input className="Blog__secondaryInput" type="text" onKeyUp={searchWithEnter} onChange={(e)=>searchValue$(e.target.value)} value={searchValue}/>
                </div>
            </div>

            {/*TERTIARY SECTION */}
            <div className="Blog__tertiary">

            </div>
            
        </div>
    )
}