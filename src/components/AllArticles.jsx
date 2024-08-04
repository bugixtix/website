import React, { useState, useEffect } from "react";
import Articles from '../Blog.json'
import { Link } from "react-router-dom";

export default function AllArticles({darkMode, darkMode$}){

    var [currentPage, currentPage$] = useState(1);
    var articlesPerPage = 9;
    var totalPages = Math.ceil(Articles.length / articlesPerPage);
    var [loading, loading$] = useState(true)

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

    var currentArticles = Articles.slice(
        (currentPage - 1 ) * articlesPerPage, 
        currentPage * articlesPerPage
    )

    var HandlePageChange = (pageNumber) =>{
        currentPage$(pageNumber)
    }
    //
    useEffect(()=>{
        var timer = setTimeout(()=>{loading$(false)},0)
        return ()=>clearTimeout(timer)
    },[])
    return(
        <div className={`AllArticles ${!loading && 'fadeIn-start'}`}>
            <div className="AllArticles__container">
                <h2> All Articles</h2>
                <div className="AllArticles__articlesSection">
                    {
                        currentArticles.map((article, index)=>(
                            <Link id="Link" to={`../../blog/article/${article.title.replace(/ /g, "_").toLowerCase() || '#'}`} key={index} className="AllArticles__oneItem">
                                <img src={article.img} alt={article.title}/>
                                <h3> {article.title}</h3>
                            </Link>
                        ))
                    }
                </div>
                <div className="AllArticles__paginationSection">
                    {
                        Array.from({length:totalPages},(_,index)=>(
                            <button key={index+1} onClick={()=>HandlePageChange(index+1)} className={currentPage === index + 1 ? 'pagination-active' : ''}>
                                {index+1}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}