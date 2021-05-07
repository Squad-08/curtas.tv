import React from 'react';
import './styles.css';
import ShortThumbnailCarroussel from '../ShortThumbnailCarroussel';
import ShortTitleCarroussel from '../ShortTitleCarroussel';

const WrapperThumbnail = (props) => {
    return (
        <div className="wrapper-thumbnail">
            <ShortThumbnailCarroussel src={props.src} alt={props.alt} key={props.key} />
            <ShortTitleCarroussel titleCarrossel={props.titleCarrossel} key={props.key}/>
        </div>
    )
}

export default WrapperThumbnail