
import React from "react";

import GalleryPictures from '../Gallery.json'

export default function Gallery ({darkMode}){


    return(
        <div className="Gallery">
            <div className="Gallery__container">
                {
                    GalleryPictures.map(picture=>(<img src={picture.img} key={picture.id} className="Gallery__item"/>))
                }
            </div>
        </div>
    )
}