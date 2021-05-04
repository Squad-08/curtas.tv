import React from 'react';
import './styles.css';
import ButtonArrowLeft from '../ButtonArrowLeft';
import ButtonArrowRight from '../ButtonArrowRight';
import WrapperThumbnail from '../WrapperThumbnail';

const MainCarroussel = () => {
    return (
        <section className='main-carroussel'>
            <ButtonArrowLeft />
            <WrapperThumbnail />
            <ButtonArrowRight />
        </section>
    )
}

export default MainCarroussel