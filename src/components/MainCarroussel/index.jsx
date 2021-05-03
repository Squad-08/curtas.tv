import React from 'react';
import './styles.css';
import shortThumbnail1 from './img/shortThumbnail1.png'
import ButtonArrowLeft from '../ButtonArrowLeft';
import ButtonArrowRight from '../ButtonArrowRight';
import ShortTitleCarroussel from './ShortTitleCarroussel';

const MainCarroussel = () => {
    return (
        <section className='main-carroussel'>
            <ButtonArrowLeft />
            <div className="wrapper-thumbnail">
                <img className="short-thumbnail-carroussel"src={shortThumbnail1} alt="Thumbnail do Curta"/>
                <ShortTitleCarroussel />
            </div>
            <ButtonArrowRight />
        </section>
    )
}

export default MainCarroussel