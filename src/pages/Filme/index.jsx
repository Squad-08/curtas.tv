import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as asctionsFilme from '../../core/actions/actionsFilme';
import ContentSegundaTela from '../../components/ContentSegundaTela';

class Filme extends Component {

    buscarFilme(id) {
        //this.props.buscarFilme(id);

        //Adicionando a tag <script> para a importação do vídeo
        // const script = document.createElement("script");
        // script.src = { ScriptEmbedJS };
        // script.async = true;
        // document.body.appendChild(script);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.buscarFilme(id);
        console.log('Id do filme é = '+id);
    }

    render() {
        return (
            <ContentSegundaTela />
        );
    }
}

const mapStateToProps = state => ({
    filme: state.filme.filme
});

export default connect(mapStateToProps, asctionsFilme)(Filme);