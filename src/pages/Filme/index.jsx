import React from 'react';
import BannerTelaFilme from '../../components/BannerTelaFilme'
import SinopseTelaFilme from '../../components/SinopseTelaFilme'
import Video from '../../components/Video'
import TituloTelaFilme from '../../components/TituloTelaFilme'
import '../../assets/styles/base.css';

const Filme = () => {
    return (
        <>
        <div>
            <TituloTelaFilme />
            <BannerTelaFilme /> 
            <SinopseTelaFilme />
            <Video />
            
        </div>
        </>
    );
}

export default Filme;