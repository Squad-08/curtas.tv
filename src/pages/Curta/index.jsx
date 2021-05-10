import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionsCurta from '../../core/actions/actionsCurta';
import ContentSegundaTela from '../../components/ContentSegundaTela';
import Carregando from '../../components/Carregando';
import { Redirect } from 'react-router';

class Curta extends Component {

    state = {
        aguarde: true,
        erro: false
    }

    buscarCurta() {
        const { id } = this.props.match.params;
        this.setState({ aguarde: true });
        this.props.buscarCurta(id, (erro) => {
            this.setState({ erro: true });
        });
        this.setState({ aguarde: false });
    }

    componentDidMount() {
        this.buscarCurta();
    }

    componentDidUpdate(nextProps) {
        (!this.props.curta && nextProps.curta) && this.buscarCurta();
    }

    componentWillUnmount() {
        this.props.limparCurta();
        this.props.limparDestaques();
        this.props.limparGeneros();
    }

    renderizaConteudo() {
        var curta = [];
        if (this.props.curta) curta = { ...this.props.curta };
        return (
            <>
                <Carregando isOpen={this.state.aguarde} />
                <ContentSegundaTela
                    alt={curta.id}
                    title={curta.title}
                    sinopse={curta.sinopse}
                    posterUrl={curta.posterUrl}
                    videoUrl={curta.videoUrl}
                    popularity={curta.popularity} />
            </>
        );
    }


    render() {
        console.log(this.state.erro);
        return (
            <>
                {this.state.erro ? <Redirect to='/pagina-inexistente' /> : ""}
                {this.props.curta ? this.renderizaConteudo() : <Carregando isOpen={true} pagina="Curta" />}
            </>
        );
    }
}

const mapStateToProps = state => ({
    curta: state.curta.curta
});

export default connect(mapStateToProps, actionsCurta)(Curta);