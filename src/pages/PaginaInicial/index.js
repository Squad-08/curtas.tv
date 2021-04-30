import React from 'react';
import { Link } from 'react-router-dom';

const PaginaInicial = () => {
    return (
        <>
        <h1>Página inicial</h1>
        <Link to='/filme'>Ir para filme</Link>
        </>
    );
}

export default PaginaInicial;