import React from 'react';
import BannerTelaFilme from '../../components/BannerTelaFilme'
import SinopseTelaFilme from '../../components/SinopseTelaFilme'
import Video from '../../components/Video'

const Filme = () => {
    return (
        <>
            <h1>Filme selecionado</h1>
            <BannerTelaFilme /> 
            <SinopseTelaFilme />
            <Video />
        </>
    );
}

export default Filme;