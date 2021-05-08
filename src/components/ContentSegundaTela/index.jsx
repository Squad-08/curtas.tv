import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionsFilme from '../../core/actions/actionsFilme';
import Embed from '../Embed';
import './styles.css';

const ContentSegundaTela = (props) => {

    return (
        <>
            <section className="short-data">
                <img src={props.posterUrl} alt={props.id} className="short-poster" />
                <div className="wrapper-data">
                    <h1 className="short-title">{props.title}</h1>
                    <p className="short-sinopse">
                        {props.sinopse}
                    </p>
                </div>
            </section>
            <Embed src={props.videoUrl} title={props.title} />
        </>
    );
}

export default ContentSegundaTela;