import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'


import { MdOutlineKeyboardDoubleArrowLeft as Left } from "react-icons/md";
import { MdKeyboardDoubleArrowRight as Right } from "react-icons/md";
import { HiSearch as Search } from "react-icons/hi";
import { PiArticleNyTimes as ShowAll } from "react-icons/pi";


import BlogData from '../Blog.json'

export default function Blog({currentIndex, currentIndex$, searchQuery, searchQuery$,darkMode}){

    var [articlesShortInfo, articlesShortInfo$] = useState({id:"", title:"",img:""})

    var navigate = useNavigate();
    
    var totalArticles = BlogData.length;

    var leftSectionArticle = BlogData[BlogData.length-2]
    var middleSectionArticle = BlogData[BlogData.length-3]
    var rightSectionArticle = BlogData[BlogData.length-4] ?  BlogData[BlogData.length-4] :  BlogData[BlogData.length-1]

    var showArticle = (id) =>{
        // Not necessary
    }
    var searchWithEnter = (e) =>{
        if(e.key==='Enter'){
            search()
        }
    }
    var search = () =>{
        navigate('/search-result',{state:{searchQuery:searchQuery}})   
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
                <h2 className="Blog__mainTitle"> {articlesShortInfo.title || "Loading"}</h2>
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
                    <input className="Blog__secondaryInput" type="text" onKeyUp={searchWithEnter} onChange={(e)=>searchQuery$(e.target.value)} value={searchQuery} placeholder="Looking for something specific?"/>
                </div>
            </div>

            {/*TERTIARY SECTION */}
            <div className="Blog__tertiary">

                <h2 className="Blog__tertiaryTitle"> Recently added articles</h2>

                <div className="Blog__tertiarySections">

                    <Link to={`/blog/article/${leftSectionArticle.title.replace(/ /g, '_').toLowerCase()}`} id="Link" className="Blog__tertiaryLeftSection">
                        <img  className="Blog__leftSectionImg" src={leftSectionArticle.img || '/images/placeholder.jpg'}/>
                        <p className="Blog__leftSectionTitle">{leftSectionArticle.title || 'loading...'}</p>
                        <p className="Blog__leftSectionText">{leftSectionArticle.description || 'loading...'}</p>
                    </Link>

                    <Link to={`/blog/article/${middleSectionArticle.title.replace(/ /g, '_').toLowerCase()}`} id="Link" className="Blog__tertiaryMiddleSection">
                        <img  className="Blog__middleSectionImg" src={middleSectionArticle.img || '/images/placeholder.jpg'}/>
                        <p className="Blog__middleSectionTitle">{middleSectionArticle.title || 'loading...'}</p>
                        <p className="Blog__middleSectionText">{middleSectionArticle.description || 'loading...'}</p>
                    </Link>

                    <Link to={`/blog/article/${rightSectionArticle.title.replace(/ /g, '_').toLowerCase()}`} id="Link" className="Blog__tertiaryRightSection">
                        <img  className="Blog__rightSectionImg" src={rightSectionArticle.img || '/images/placeholder.jpg'}/>
                        <p className="Blog__rightSectionTitle">{rightSectionArticle.title || 'loading...'}</p>
                        <p className="Blog__rightSectionText">{rightSectionArticle.description || 'loading...'}</p>
                    </Link>

                </div>

            </div>

            {/* Show all articles -button */}

            <div className="Blog__bottomSection">
                <Link to="/blog/articles" id="Link" className="Blog__bottomSectionLink"> <ShowAll className="Blog__bottomSectionSvg"/>  <p className="Blog__bottomSectionText">Show All Articles</p> </Link>
            </div>
            
        </div>
    )
}