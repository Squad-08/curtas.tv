import React from 'react';
import './styles.css';
import shortThumbnail1 from './img/shortThumbnail1.png'
import ButtonArrowLeft from '../ButtonArrowLeft';
import ButtonArrowRight from '../ButtonArrowRight';

const MainCarroussel = () => {
    return (
        <section className='main-carroussel'>
            <ButtonArrowLeft />
            <div className="wrapper-thumbnail">
                <img className="short-thumbnail-carroussel"src={shortThumbnail1} alt="Thumbnail do Curta"/>
                <h2 className="short-title-carroussel">Here Is The Plan</h2>
            </div>
            <ButtonArrowRight />
        </section>
    )
}

export default MainCarroussel