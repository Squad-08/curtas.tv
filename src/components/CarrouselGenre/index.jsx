import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import './button-arrow.css';
import '../../assets/styles/base.css';

const CarrouselGenre = () => {
    return (
        <section class="genres"> 

            <section className="short-genre">
                <h2 className="genre-title">Gênero dos Curtas</h2>
                <div className="carroussel-genre">
                    <button class="button-arrow-left"><span class="direction">Anterior</span></button>
                    
                    <figure className="wrapper-poster">
                        <img src="https://m.media-amazon.com/images/M/MV5BZDMxNjhiZmYtY2YyMC00NWFkLWI0ZWEtYmJkZThhMjlhYWE1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY268_CR43,0,182,268_AL_.jpg" alt="Poster Sweet Tooth" className="short-poster"/>
                        <figcaption className="short-title">Sweet Tooth</figcaption>
                    </figure>

                    <figure className="wrapper-poster">
                        <img src="https://m.media-amazon.com/images/M/MV5BZDMxNjhiZmYtY2YyMC00NWFkLWI0ZWEtYmJkZThhMjlhYWE1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY268_CR43,0,182,268_AL_.jpg" alt="Poster Sweet Tooth" className="short-poster"/>
                        <figcaption className="short-title">Sweet Tooth</figcaption>
                    </figure>

                    <figure className="wrapper-poster">
                        <img src="https://m.media-amazon.com/images/M/MV5BZDMxNjhiZmYtY2YyMC00NWFkLWI0ZWEtYmJkZThhMjlhYWE1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY268_CR43,0,182,268_AL_.jpg" alt="Poster Sweet Tooth" className="short-poster"/>
                        <figcaption className="short-title">Sweet Tooth</figcaption>
                    </figure>

                    <figure className="wrapper-poster">
                        <img src="https://m.media-amazon.com/images/M/MV5BZDMxNjhiZmYtY2YyMC00NWFkLWI0ZWEtYmJkZThhMjlhYWE1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY268_CR43,0,182,268_AL_.jpg" alt="Poster Sweet Tooth" className="short-poster"/>
                        <figcaption className="short-title">Sweet Tooth</figcaption>
                    </figure>

                    <figure className="wrapper-poster">
                        <img src="https://m.media-amazon.com/images/M/MV5BZDMxNjhiZmYtY2YyMC00NWFkLWI0ZWEtYmJkZThhMjlhYWE1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY268_CR43,0,182,268_AL_.jpg" alt="Poster Sweet Tooth" className="short-poster"/>
                        <figcaption className="short-title">Sweet Tooth</figcaption>
                    </figure>
                    
                    <button class="button-arrow-right"><span class="direction">Próximo</span></button>
                </div>
            </section>
        </section>

    );
}

export default CarrouselGenre