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
            <WrapperPoster id={item.id} src={item.posterUrl} alt={item.alt} titleCarrossel={item.titleCarrossel} />
        );
    });

    return (
        <section className="short-genre">
            <GenreTitle tituloGenero={props.tituloGenero} />
            <div className="carroussel-genre">
                <ButtonArrowLeft />
                <div className="carroussel-items">
                    <div className="carroussel-elements">
                        {generos}
                    </div>
                </div>
                <ButtonArrowRight />
            </div>
        </section>
    );
}

export default CarrouselGenre