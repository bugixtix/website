import React, { useEffect, useRef, useState } from 'react'

import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

// import 'highlight.js/styles/stackoverflow-dark.css';
// import 'highlight.js/styles/tokyo-night-light.css';

import { Link } from 'react-router-dom';

import { IoShareSocial as Share } from "react-icons/io5";
import { GrCompliance as Swoosh } from "react-icons/gr";
import { TbArrowBigUpFilled as Top } from "react-icons/tb";
import { TbArrowBigDownFilled as Down } from "react-icons/tb";
import BlogData from '../Blog.json'
import SubscribeToNewsletter from './SubscribeToNewsletter';


export default function Article({ArticlesData, darkMode}){

    var [content, content$] = useState('')
    var [hrefCopied, hrefCopied$] = useState(false)
    var [windowScrollY, windowScrollY$] = useState(0)
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
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
        //
        fetch(ArticlesData.path)
        .then(response=>response.text())
        .then(text=>content$(text))
        .catch(error=>console.log('Message:',error))
    },[])

    useEffect(()=>{
        const root = document.documentElement;
        const themeLink = document.getElementById('theme-link');

        // change css colors in dark mode
        !darkMode ? root.style.setProperty('--dynamic-color-1', colors.dt_1)&&root.style.setProperty('--dynamic-color-2', colors.dt_2)&&root.style.setProperty('--dynmaic-color-3', colors.dt_3)&&root.style.setProperty('--dynmaic-color-4', colors.dt_4)&&root.style.setProperty('--dynmaic-color-5', colors.dt_5)&&root.style.setProperty('--dynmaic-color-6', colors.dt_6)&&root.style.setProperty('--dynmaic-color-7', colors.dt_7) : root.style.setProperty('--dynamic-color-1',colors.lt_1)&&root.style.setProperty('--dynamic-color-2',colors.lt_2)&&root.style.setProperty('--dynamic-color-3',colors.lt_3)&&root.style.setProperty('--dynamic-color-4',colors.lt_4)&&root.style.setProperty('--dynamic-color-5',colors.lt_5)&&root.style.setProperty('--dynamic-color-6',colors.lt_6)&&root.style.setProperty('--dynamic-color-7',colors.lt_7)

        // change code-tag theme in dark mode
        darkMode ?  themeLink.href = 'https://cdn.jsdelivr.net/npm/highlightjs-themes@1.0.0/tomorrow-night-blue.min.css' : themeLink.href = 'https://cdn.jsdelivr.net/npm/highlightjs-themes@1.0.0/foundation.css'
        
    },[darkMode])

    useEffect(()=>{
        document.addEventListener('scroll',()=>{
            windowScrollY$(window.scrollY)
        })
    },[windowScrollY])
    //
    useEffect(()=>{
        var timer = setTimeout(()=>{loading$(false)},0)
        return ()=>clearTimeout(timer)
    },[])

    // function for copy href to clipboard
    var DoCopyToClipboard = () =>{
        navigator.clipboard.writeText(window.location.href);
        hrefCopied$(true)
    }
    //
    var DoDynamicScroll = () =>{
        windowScrollY <= 100 ? 
            window.scrollTo({
                top:document.body.scrollHeight,
                behavior:'smooth'
            }) 
            : 
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        
    }
    return( 
        
        <div className={`Article`}>

            <div className='scrollToTheTop' onClick={DoDynamicScroll}>{windowScrollY <= 100 ? <Down/> : <Top/>}</div>
            <div className='Article__imgSection'>
                <div className='Article__imgSection_textContainer'>
                    <h2 className='Article__imgSection_title'> {ArticlesData.title} </h2>
                    <h6 className='Article__imgSection_description'>{ArticlesData.description}</h6>
                </div>
                <div className='Article__imgSection_imgContainer'>
                    <img className='Article__imgSection_img' src={ArticlesData.img} />
                </div>
            </div>

            <div className='Article__mainSection'>

                    <div className='Article__mainSectionContainer'>
                            <Markdown className={`markdown-content`} rehypePlugins={[rehypeHighlight, rehypeRaw]} remarkPlugins={[remarkGfm]}>{content}</Markdown>
                    </div>
                    <div className='Article__userOpinionSection'>
                        <div className='Article__userOpinionShareButton' onClick={DoCopyToClipboard}>
                            <p id='copy_button'>{ hrefCopied ? 'Copied!' : "Like it? Copy page's link"} <span id='copy_info'>{hrefCopied  ? 'Copied!' : 'copy to clipboard'}</span> </p> 
                                &nbsp; {hrefCopied ? <Swoosh/> : <Share/> }
                        </div>
                    </div>
                
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <div className='Article__SubscribeToNewsletter'>
                <SubscribeToNewsletter/>
            </div>

            <div className='Article__relatedSection' style={{backgroundColor:darkMode ? 'var(--dt-color-7)' : 'var(--dt-color-6)'}}>
                <div className='Article__relatedSectionTitle'>
                    <h4 className='Article__relatedArticleTitleText'>Related Articles</h4>
                </div>
                <div className='Article__relatedSectionWrapper'>
                    <RelatedArticle ArticlesData={BlogData[BlogData.length-2]}/>
                    <RelatedArticle ArticlesData={BlogData[BlogData.length-3]}/>
                    <RelatedArticle ArticlesData={BlogData[BlogData.length-4]}/>
                </div>
            </div>
        </div>
    )
}

export function RelatedArticle({ArticlesData}){
    var img = ArticlesData.img || '/'
    var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    // useEffect(()=>{console.log(`/blog/article/${ArticlesData.title.replace(/ /g, '_').toLowerCase()}`)},[])
    return(
        <Link className='Article__relatedArticle' to={`/blog/article/${ArticlesData.title.replace(/ /g, '_').toLowerCase()}`}>
            <div className='Article__relatedArticleImgContainer'>
                <img className='Article__relatedArticleImg' src={img}/>
            </div>
            <div className='Article__relatedArticleTextContainer'>
                <h3 className='Article__relatedArticleText'>
                    {ArticlesData.sideText || loremIpsum}
                </h3>
            </div>
        </Link>   
    )
}