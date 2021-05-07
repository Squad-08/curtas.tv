import React from 'react';
import './styles.css';

const ContentSegundaTela = () => {
    return (
        <section className="short-data">
            <img src="https://m.media-amazon.com/images/M/MV5BZWYwZDA5MTEtNzUyOS00ZTNmLWE3YWItZDIwZWQwYzAwNWRiXkEyXkFqcGdeQXVyNzE2Njc3MzM@._V1_.jpg" alt="Poster do Curta" className="short-poster" />
            <div className="wrapper-data">
                <h1 className="short-title">Título do Curta</h1>
                <p className="short-sinopse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta praesentium rem eius cum.
                    Quidem hic explicabo at, tempora consectetur,
                    quisquam consequuntur quaerat odio
                    similique alias iusto modi
                    quae voluptatibus molestiae.
                </p>
            </div>
        </section>
    );
}

export default ContentSegundaTela