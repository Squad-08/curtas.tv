import React from 'react';
import './styles.css';

const ShortTitleCarroussel = (props) => {
    return (
        <h2 className="short-title-carroussel" key={props.key}>{props.titleCarrossel}</h2>
    )
}

export default ShortTitleCarroussel