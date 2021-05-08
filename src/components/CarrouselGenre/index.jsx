import React from 'react';
import './styles.css';
import '../../assets/styles/base.css';
import WrapperPoster from '../WrapperPoster';
import ButtonArrowLeft from '../ButtonArrowLeft';
import ButtonArrowRight from '../ButtonArrowRight';
import GenreTitle from '../GenreTitle';

const CarrouselGenre = (props) => {

    const items = [...props.items];

    const generos = items.map((item) => {
        return (
            <div className="carroussel-items">
                <WrapperPoster id={item.id} src={item.posterUrl} alt={item.id} titleCarrossel={item.title} />
            </div>
        );
    });

    return (
        <section className="short-genre">
            <GenreTitle tituloGenero={props.tituloGenero} />
            <div className="carroussel-genre">
                <ButtonArrowLeft />
                {generos}
                <ButtonArrowRight />
            </div>
        </section>
    );
}

export default CarrouselGenre