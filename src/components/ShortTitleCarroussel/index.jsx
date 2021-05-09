import React from 'react';
import './styles.css';

const ShortTitleCarroussel = (props) => {
    return (
        <div className="wrapper-short-title-carroussel">
            <h2 className="short-title-carroussel" key={props.key}>{props.titleCarrossel}</h2>
        </div>
    )
}

export default ShortTitleCarroussel