import React from 'react';
import { Link } from 'react-router-dom';

const Cabecalho = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to='/'>Home</Link>
            </nav>
        </>
    );
}

export default Cabecalho;