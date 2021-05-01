import React from 'react';
import BannerTelaFilme from '../../components/BannerTelaFilme'
import SinopseTelaFilme from '../../components/SinopseTelaFilme'
import TituloTelaFilme from '../../components/TituloTelaFilme'
import '../../assets/styles/base.css';
import Embed from '../../components/Embed';

const Filme = () => {
    return (
        <>
        <div>
            <TituloTelaFilme />
            <BannerTelaFilme /> 
            <SinopseTelaFilme />
            <Embed />
            
        </div>
        </>
    );
}

export default Filme;