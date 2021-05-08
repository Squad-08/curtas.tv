import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const WrapperPoster = (props) => {
    return (
        <>
            <Link to={`/filme/${props.id}`}>
                <figure className="wrapper-poster">
                    <img src={props.src} alt={props.alt} className="short-poster" />
                    <figcaption className="short-title">{props.title}</figcaption>
                </figure>
            </Link>
        </>
    )
}

export default WrapperPoster