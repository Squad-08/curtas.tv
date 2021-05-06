import React from 'react';
import './styles.css'

const Rodape = () => {
    return (
        <footer className="main-footer">
            <a href="https://www.fcamara.com.br/" className="site-fcamara">
                <img className='logo-fcamara' src='https://blog.fcamara.com.br/wp-content/uploads/2019/10/Logotipo-FCamara.png' alt="Logo da FCâmara"></img>
            </a>
            <h3 className="made-by">
                Feito Por:
                Geverson Souza
                Giselle Piasetzki
                Matheus Leonardo
                WagnerCarestini
            </h3>
        </footer>
    );
}

export default Rodape;