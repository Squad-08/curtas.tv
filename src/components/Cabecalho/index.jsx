import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Cabecalho = () => {
    return (
        <header className="main-header">
            <Link className="site-logo" to='/'>Curtas<span className="dot">.</span>Tv</Link>

            <Link className="home" to='/'>home</Link>
        </header>
    );
}

export default Cabecalho;