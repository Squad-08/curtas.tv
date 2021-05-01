import React from 'react';
import './carroussel-genre.css';
import './short-genre.css'
import '../../assets/styles/base.css';
import WrapperPoster from '../WrapperPoster';
import ButtonArrowLeft from '../ButtonArrowLeft';
import ButtonArrowRight from '../ButtonArrowRight';

const CarrouselGenre = () => {
    return (
            <section className="short-genre">
                <h2 className="genre-title">Gênero dos Curtas</h2>
                <div className="carroussel-genre">
                    <ButtonArrowLeft />
                    <WrapperPoster />
                    <ButtonArrowRight />
                </div>
            </section>
    );
}

export default CarrouselGenre