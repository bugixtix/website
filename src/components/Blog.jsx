import React, { useEffect, useRef, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'


import { MdOutlineKeyboardDoubleArrowLeft as Left } from "react-icons/md";
import { MdKeyboardDoubleArrowRight as Right } from "react-icons/md";
import { HiSearch as Search } from "react-icons/hi";
import { PiArticleNyTimes as ShowAll } from "react-icons/pi";


import BlogData from '../Blog.json'

export default function Blog({currentIndex, currentIndex$, searchQuery, searchQuery$,darkMode}){

    var [articlesShortInfo, articlesShortInfo$] = useState({id:"", title:"",img:""})
    var [fadeImg, fadeImg$] = useState(true)
    var intervalRef = useRef(null)
    var [loading, loading$] = useState(true)
    
    var navigate = useNavigate();
    
    var totalArticles = BlogData.length;

    var leftSectionArticle = BlogData[BlogData.length-2]
    var middleSectionArticle = BlogData[BlogData.length-3]
    var rightSectionArticle = BlogData[BlogData.length-4] ?  BlogData[BlogData.length-4] :  BlogData[BlogData.length-1]

    var colors = {
        lt_1:'#F0F2F5',
        lt_2:'#DCE1E3',
        lt_3:'#E0A800',
        lt_4:'#FFA500',
        lt_5:'#A9A9A9',
        lt_6:'#2C3E50',
        lt_7:'#34495E',
        dt_1:'#2C3E50',
        dt_2:'#1C2833',
        dt_3:'#F39C12',
        dt_4:'#E67E22',
        dt_5:'#707B7C',
        dt_6:'#ECF0F1',
        dt_7:'#020202',
    }
    useEffect(()=>{
        const root = document.documentElement;

        !darkMode ? root.style.setProperty('--dynamic-color-1', colors.dt_1)&&root.style.setProperty('--dynamic-color-2', colors.dt_2)&&root.style.setProperty('--dynmaic-color-3', colors.dt_3)&&root.style.setProperty('--dynmaic-color-4', colors.dt_4)&&root.style.setProperty('--dynmaic-color-5', colors.dt_5)&&root.style.setProperty('--dynmaic-color-6', colors.dt_6)&&root.style.setProperty('--dynmaic-color-7', colors.dt_7) : root.style.setProperty('--dynamic-color-1',colors.lt_1)&&root.style.setProperty('--dynamic-color-2',colors.lt_2)&&root.style.setProperty('--dynamic-color-3',colors.lt_3)&&root.style.setProperty('--dynamic-color-4',colors.lt_4)&&root.style.setProperty('--dynamic-color-5',colors.lt_5)&&root.style.setProperty('--dynamic-color-6',colors.lt_6)&&root.style.setProperty('--dynamic-color-7',colors.lt_7)
    },[darkMode])
    
    //
    useEffect(()=>{
        var timer = setTimeout(()=>{
            loading$(false)
          },0)
          return ()=>clearTimeout(timer)
    },[])
    
    //
    var showArticle = (id) =>{
        // Not necessary
    }
    //
    var searchWithEnter = (e) =>{
        if(e.key==='Enter'){
            search()
        }
    }
    var search = () =>{
        navigate('/search-result',{state:{searchQuery:searchQuery}})   
    }
    var previousArticle = () =>{
        fadeImg$(false);
        setTimeout(()=>{
            currentIndex$((p)=>(p === 0 ? totalArticles-1 : p - 1));
            fadeImg$(true)
        },1000)
        clearInterval(intervalRef.current)
    }  

    var nextArticle = () =>{
        fadeImg$(false);
        setTimeout(()=>{
            currentIndex$((p)=>(p === totalArticles - 1 ? 0 : p + 1));
            fadeImg$(true)
        },1000)
        clearInterval(intervalRef.current)
    }
    useEffect(()=>{
        articlesShortInfo$(BlogData[currentIndex])
    },[currentIndex])
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            fadeImg$(false);
            setTimeout(()=>{
                currentIndex$((p)=>(p === 0 ? totalArticles - 1 : p - 1));
                fadeImg$(true)
            },1000)
        },5000)

        return()=>clearInterval(intervalRef.current)
    },[])
    return(
        <div className={`Blog ${!loading && 'fadeIn-start'}`}>

            {/*MAIN SECTION */}
            <div className={`Blog__main`}>
            <Link to={`./article/${articlesShortInfo.title.replace(/ /g, "_").toLowerCase() || '#'}`} id="Link" className="Blog__mainTitleLink"><h2 className={`Blog__mainTitle`}> {articlesShortInfo.title || "Loading"} </h2></Link>
                <div className="Blog__mainSection">
                    <Left className="Blog__leftSvg" onClick={previousArticle}/>
                    <Link className={`Blog__imgLink ${fadeImg ? 'fade-in' : 'fade-out'}`} to={`./article/${articlesShortInfo.title.replace(/ /g, "_").toLowerCase() || '#'}`} >
                        <img className={`Blog__mainImg`} src={articlesShortInfo.img||''} onClick={showArticle} />
                    </Link>
                    <Right className="Blog__rightSvg" onClick={nextArticle}/>
                </div>
            </div>

            {/*SECONDARY SECTION */}

            {/* <div className="Blog__secondary">
                <div className="Blog__secondarySection" >
                    <Search className="Blog__secondarySvg" onClick={search}/>
                    <span className="Blog__span"></span>
                    <input className="Blog__secondaryInput" type="text" onKeyUp={searchWithEnter} onChange={(e)=>searchQuery$(e.target.value)} value={searchQuery} placeholder="Looking for something specific?"/>
                </div>
            </div> */}

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
                <Link to="/blog/articles" id="Link" className="Blog__bottomSectionLink">  <p className="Blog__bottomSectionText">Show All Articles</p> </Link>
            </div>
            
        </div>
    )
}