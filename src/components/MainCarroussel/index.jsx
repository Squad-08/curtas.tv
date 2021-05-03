import React from 'react';
import './styles.css';
import ButtonArrowLeft from '../ButtonArrowLeft';
import ButtonArrowRight from '../ButtonArrowRight';
import ShortThumbnailCarroussel from '../ShortThumbnailCarroussel';
import ShortTitleCarroussel from '../ShortTitleCarroussel';

const MainCarroussel = () => {
    return (
        <section className='main-carroussel'>
            <ButtonArrowLeft />
            <div className="wrapper-thumbnail">
                <ShortThumbnailCarroussel />
                <ShortTitleCarroussel />
            </div>
            <ButtonArrowRight />
        </section>
    )
}

export default MainCarroussel