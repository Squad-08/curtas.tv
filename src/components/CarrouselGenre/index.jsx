import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import '../../assets/styles/base.css'

const CarrouselGenre = () => {
    return (
        <section class="genres">
            <section className="short-genre">
                <h2 className="genre-title">Gênero dos Curtas</h2>
                <button class="button-arrow-left"><span class="direction">Anterior</span></button>
                <figure className="wrapper-banner">
                    <img src="" alt="" className="short-poster"/>
                    <figcaption className="short-title">Título do Curta</figcaption>
                </figure>
                <button class="button-arrow-right"><span class="direction">Próximo</span></button>
            </section>
        </section>

    );
}

export default CarrouselGenre