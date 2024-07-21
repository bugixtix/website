import React from 'react'


export default function Article({ArticlesData}){


    return(
        <div className='Article'>
            <h2> here comes the Article: {ArticlesData.title || "--"}</h2>
        </div>
    )
}