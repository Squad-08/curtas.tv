import React from 'react';
import './styles.css';
import ShortThumbnailCarroussel from '../ShortThumbnailCarroussel';
import ShortTitleCarroussel from '../ShortTitleCarroussel';
import { Link } from 'react-router-dom';

const WrapperThumbnail = (props) => {
    return (
        <Link to={`/curta/${props.id}`}>
            <div className="wrapper-thumbnail">
                <ShortThumbnailCarroussel src={props.src} alt={props.alt} key={props.key} />
                <ShortTitleCarroussel titleCarrossel={props.titleCarrossel} key={props.key}/>
            </div>
        </Link>
    )
}

export default WrapperThumbnail