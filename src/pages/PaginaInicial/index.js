import React from 'react';
import { Link } from 'react-router-dom';
import mainBanner from '../../components/mainBanner';

const PaginaInicial = () => {
    return (
        <>
            <mainBanner /> 

            <h1>Página inicial</h1>
            <br />
            <Link to='/filme'>Ir para filme</Link>
        </>
    );
}

export default PaginaInicial;