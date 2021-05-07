import React from 'react';
import './styles.css';

const ShortThumbnailCarroussel = (props) => {
    return (
        <img className="short-thumbnail-carroussel" src={props.src} alt={props.alt}  key={props.key}/>
    )
}

export default ShortThumbnailCarroussel