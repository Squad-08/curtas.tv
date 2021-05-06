import React from 'react';
import './styles.css';

const ContentPageNotFound = () => {
    return (
        <section className='message-page-not-found'>
            <h1 className='message-title'>
                Uhm... O que você está procurando?
            </h1>
            <p className="message">
                Infelizmente, o que você estava procurando não estava por aqui.
                Volte a nossa home para encontrar um conteúdo que possa-lhe interessar. 
            </p>
        </section>
    );
}

export default ContentPageNotFound