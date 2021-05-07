import React from 'react';
import './styles.css';

const GenreTitle = (props) => {
    return (
        <span className="background-genre-title">
        <h2 className="genre-title">{props.tituloGenero}</h2>
        </span>
    );
}

export default GenreTitle