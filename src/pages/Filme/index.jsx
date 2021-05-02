import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as asctionsFilme from '../../core/actions/actionsFilme';
import BannerTelaFilme from '../../components/BannerTelaFilme';
import SinopseTelaFilme from '../../components/SinopseTelaFilme';
import TituloTelaFilme from '../../components/TituloTelaFilme';
import '../../assets/styles/base.css';
import Embed from '../../components/Embed';

class Filme extends Component {

    buscarFilme(id) {
        //this.props.buscarFilme(id);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.buscarFilme(id);
    }

    render() {
        return (
            <>
                <TituloTelaFilme />
                <BannerTelaFilme />
                <SinopseTelaFilme />
                <Embed />
            </>
        );
    }
}

const mapStateToProps = state => ({
    filme: state.filme.filme
});

export default connect(mapStateToProps, asctionsFilme)(Filme);