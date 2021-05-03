import React from 'react';
import './styles.css';
import ButtonArrowLeft from '../ButtonArrowLeft';
import ButtonArrowRight from '../ButtonArrowRight';
import ShortTitleCarroussel from './ShortTitleCarroussel';
import ShortThumbnailCarroussel from './ShortThumbnailCarroussel';

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