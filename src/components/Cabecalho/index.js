import React from 'react';
import { Link } from 'react-router-dom';

const Cabecalho = () => {
    return (
        <>
            <h1>
                <Link to='/'>Home</Link>
                Cabeçalho
            </h1>
        </>
    );
}

export default Cabecalho;