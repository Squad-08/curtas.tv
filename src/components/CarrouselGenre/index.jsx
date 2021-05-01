import React from 'react';
import { Link } from 'react-router-dom';
import './button-arrow.css';
import './carroussel-genre.css';
import './short-genre.css'
import '../../assets/styles/base.css';
import WrapperPoster from '../WrapperPoster';

const CarrouselGenre = () => {
    return (
            <section className="short-genre">
                <h2 className="genre-title">Gênero dos Curtas</h2>
                <div className="carroussel-genre">
                    <button class="button-arrow-left"><span class="direction">Anterior</span></button>
                    
                    <WrapperPoster />
                    <WrapperPoster />
                    <WrapperPoster />
                    <WrapperPoster />
                    
                    <button class="button-arrow-right"><span class="direction">Próximo</span></button>
                </div>
            </section>
    );
}

export default CarrouselGenre