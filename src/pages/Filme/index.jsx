import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as asctionsFilme from '../../core/actions/actionsFilme';
import ContentSegundaTela from '../../components/ContentSegundaTela';
import { Redirect } from 'react-router-dom';

class Filme extends Component {

    state = {
        id: "263fc922-b665-4bbf-9f26-0250d65c24ef",
        title: "Lost & Found",
        sinopse: "A clumsy crochet dinosaur must unravel itself to save the love of its life.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjI5NjRmYzMtYTUwNi11Y2JlLTllODktNGIxNTQ5ZGY5YmZjXkEyXkFqcGdeQXVyMTU1NTE4NDg@._V1_UX182_CR1,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=35i4zTky9pI",
        popularity: 56
    }


    buscarFilme(id) {
        this.props.buscarFilme(id);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.buscarFilme(id);
        // console.log(this.state.filme)
    }

    componentDidUpdate(props) {
        console.log(props)
    }

    render() {
        const { id, title, sinopse, posterUrl, videoUrl, popularity } = this.state;
        return (
            <ContentSegundaTela alt={id} title={title} sinopse={sinopse} posterUrl={posterUrl} videoUrl={videoUrl} popularity={popularity} />
        );
    }
}

const mapStateToProps = state => ({
    filme: state.filme
});

export default connect(mapStateToProps, asctionsFilme)(Filme);