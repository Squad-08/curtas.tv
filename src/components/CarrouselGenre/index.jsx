import React, { useState } from 'react';
import './styles.css';
import '../../assets/styles/base.css';
import WrapperPoster from '../WrapperPoster';
import ButtonArrowLeft from '../ButtonArrowLeft';
import ButtonArrowRight from '../ButtonArrowRight';
import GenreTitle from '../GenreTitle';

const CarrouselGenre = (props) => {

    const [items, setIttems] = useState([...props.items]);

    const generos = items.map((item) => {
        return (
            <div className="carroussel-items">
                <WrapperPoster id={item.id} src={item.src} alt={item.alt} titleCarrossel={item.titleCarrossel} />
            </div>
        );
    });

    return (
        <section className="short-genre">
            <GenreTitle />
            <div className="carroussel-genre">
                <ButtonArrowLeft />
                {generos}
                <ButtonArrowRight />
            </div>
        </section>
    );
}

export default CarrouselGenre