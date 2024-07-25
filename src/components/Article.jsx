import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

import 'highlight.js/styles/xt256.css';

export default function Article({ArticlesData}){

    var [content, content$] = useState('')

    useEffect(()=>{
        fetch('/articles/example.txt')
        .then(response=>response.text())
        .then(text=>content$(text))
        .catch(error=>console.log('Message:',error))
    },[])
    return(
        <div className='Article'>
            <div className='Article__imgSection'>
                <div className='Article__imgSection_textContainer'>
                    <h2 className='Article__imgSection_title'> {ArticlesData.title} </h2>
                    <h2 className='Article__imgSection_description'>{ArticlesData.description}</h2>
                </div>
                <div className='Article__imgSection_imgContainer'>
                    <img className='Article__imgSection_img' src={ArticlesData.img} />
                </div>
            </div>

            <div className='Article__mainSection'>


                <div className='Article__mainSection_main'>
                    <div className='Article__mainSection_titleContainer'>
                        <h2 className='Article__mainSection_title'>{'Paragraph title'}</h2>
                    </div>
                    <div className='Article__mainSection_mainContainer'>
                        
                            <Markdown className="markdown-content" rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]}>{content}</Markdown>

                        {/* <div className='Article__mainSection_column2Container'>
                            <Markdown remarkPlugins={[remarkGfm]} className={'Article__mainSection_column2'}>{loremIpsum}</Markdown>
                        </div> */}
                    </div>
                </div>

                {/* <div className='Article__mainSection_sides'>
                    <SideArticle ArticlesData={ArticlesData}/>
                    <SideArticle ArticlesData={ArticlesData}/>
                </div> */}

            </div>
        </div>
    )
}

export function SideArticle({ArticlesData}){
    var img = ArticlesData.img || '/'
    var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed luctus tortor. Nam pretium tristique augue vitae molestie. Nunc sapien elit, auctor ac ante aliquet, sollicitudin consectetur metus. Maecenas ut neque tellus."
    return(
        <div className='Article__mainSection_side'>
        <div className='Article__sideImgContainer'>
            <img className='Article__sideImg' src={img}/>
        </div>
        <div className='Article__sideTextForm'>
            <h3 className='Article__sideText'>
                 {ArticlesData.sideText || loremIpsum}
            </h3>
        </div>
    </div>   
    )
}