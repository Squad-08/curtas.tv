import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const WrapperPoster = (props) => {
    return (
        <figure className="wrapper-poster">
            <Link to={`/filme/${props.id}`}>
                <img src={props.src} alt={props.alt} className="short-poster" />
            </Link>
            <figcaption className="short-title">{props.tituloGenero}</figcaption>
        </figure>
    )
}

export default WrapperPoster