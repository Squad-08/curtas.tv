import React from 'react';
import './styles.css';

const ContentPageNotFound = () => {
    return (
        <section className='message-page-not-found'>
            <img src="https://images.vexels.com/media/users/3/191488/isolated/preview/ca0eb6479874cbb254f85a11274eb893-a-ccedil-atilde-o-de-c-acirc-mera-de-cinema-by-vexels.png" alt="Camêra Cinematográfica Desenhada" className="message-image" />
            <div className="wrapper-message">
                <h1 className='message-title'>
                    Uhm... O que você está procurando?
                </h1>
                <p className="message">
                    Infelizmente, o que você estava procurando não está por aqui.
                    Volte a nossa home para encontrar um conteúdo que possa-lhe interessar. 
                </p>
            </div>
        </section>
    );
}

export default ContentPageNotFound