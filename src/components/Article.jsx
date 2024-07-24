import React from 'react'


export default function Article({ArticlesData}){

    var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed luctus tortor. Nam pretium tristique augue vitae molestie. Nunc sapien elit, auctor ac ante aliquet, sollicitudin consectetur metus. Maecenas ut neque tellus."

    return(
        <div className='Article'>
            <div className='Article__imgSection'>
                <div className='Article__imgSection_imgContainer'>
                    <img className='Article__imgSection_img' src={ArticlesData.img} />
                </div>
                <div className='Article__imgSection_textContainer'>
                    <h2 className='Article__imgSection_text'> {ArticlesData.title} </h2>
                </div>
            </div>

            <div className='Article__mainSection'>
                <div className='Article__mainSection_side'>
                    <div className='Article__sideImgContainer'>
                        <img className='Article__sideImg' src={ArticlesData.img}/>
                    </div>
                    <div className='Article__sideTextForm'>
                        <h3 className='Article__sideText'>
                             {ArticlesData.sideText || loremIpsum}
                        </h3>
                    </div>
                </div>

                <div className='Article__mainSection_main'>

                </div>
            </div>
        </div>
    )
}