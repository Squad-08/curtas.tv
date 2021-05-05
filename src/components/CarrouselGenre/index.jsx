import React from 'react';
import './styles.css';
import '../../assets/styles/base.css';
import WrapperPoster from '../WrapperPoster';
import ButtonArrowLeft from '../ButtonArrowLeft';
import ButtonArrowRight from '../ButtonArrowRight';
import GenreTitle from '../GenreTitle';

const CarrouselGenre = () => {
    return (
            <section className="short-genre">
                <GenreTitle />
                <div className="carroussel-genre">
                    <ButtonArrowLeft />
                    <div className="carroussel-items">
                        <WrapperPoster />
                    </div>
                    <ButtonArrowRight />
                </div>
            </section>
    );
}

export default CarrouselGenre