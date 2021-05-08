import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as asctionsFilme from '../../core/actions/actionsFilme';
import ContentSegundaTela from '../../components/ContentSegundaTela';
import ModalCarregando from '../../components/ModalCarregando';

class Filme extends Component {

    state = {
        curta: {
            id: "263fc922-b665-4bbf-9f26-0250d65c24ef",
            title: "Lost & Found",
            sinopse: "A clumsy crochet dinosaur must unravel itself to save the love of its life.",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BMjI5NjRmYz…eQXVyMTU1NTE4NDg@._V1_UX182_CR1,1,182,268_AL_.jpg",
            videoUrl: "https://www.youtube.com/watch?v=35i4zTky9pI",
            popularity: 56
        },
        aguarde: false
    }

    buscarCurta(id) {
        //this.setState({ aguarde: true });
        this.props.buscarCurta(id);
        //const curta = this.props.curta;
        //this.setState({ aguarde: false });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.buscarCurta(id);
    }

    componentDidUpdate(nextProps) {
        const { id } = this.props.match.params;
        if (!this.props.curta && !nextProps.curta) this.buscarCurta(id);
    }

    componentWillUnmount() {
        this.props.limparCurta();
    }

    render() {
        console.log(this.props.curta);
        //var { id, title, sinopse, posterUrl, videoUrl, popularity } = { ...this.props.curta };
        const { id, title, sinopse, posterUrl, videoUrl, popularity } = this.state.curta;
        return (
            <>
                <ModalCarregando isOpen={this.state.aguarde} />
                <ContentSegundaTela
                    alt={id}
                    title={title}
                    sinopse={sinopse}
                    posterUrl={posterUrl}
                    videoUrl={videoUrl}
                    popularity={popularity}
                    curta={this.state.curta}
                />
            </>
        );
    }
}

const mapStateToProps = state => ({
    curta: state.curta
});

export default connect(mapStateToProps, asctionsFilme)(Filme);