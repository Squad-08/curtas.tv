import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as asctionsFilme from '../../core/actions/actionsFilme';
import ContentSegundaTela from '../../components/ContentSegundaTela';
import { Redirect } from 'react-router-dom';

class Filme extends Component {

    state = {
        posterUrl: '',
        tituloCurta: '',
        sinopse: ''
    }

    buscarFilme(id) {
        this.props.buscarFilme(id);

        //Adicionando a tag <script> para a importação do vídeo
        // const script = document.createElement("script");
        // script.src = { ScriptEmbedJS };
        // script.async = true;
        // document.body.appendChild(script);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.buscarFilme(id);
        console.log('Id do filme é = ' + id);
        // console.log(this.state.filme)

    }

    componentDidUpdate(props) {
        console.log(props)
    }

    render() {
        if (this.props.filme === 'undefined') {
            <Redirect to='/pagina-inexistente' />
        }
        console.log('ABC', this.props.filme)
        return (
            <ContentSegundaTela sinopse={this.props.filme} />
        );
    }
}

const mapStateToProps = state => ({
    filme: state.filme
});

export default connect(mapStateToProps, asctionsFilme)(Filme);