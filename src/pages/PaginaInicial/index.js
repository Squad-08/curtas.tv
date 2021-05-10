import React, { Component } from "react";
import CarrouselGenre from "../../components/CarrouselGenre";
import MainCarroussel from "../../components/MainCarroussel";
import { connect } from "react-redux";
import * as actionsCurta from "../../core/actions/actionsCurta";
import ModalCarregando from '../../components/ModalCarregando';

class PaginaInicial extends Component {

  state = {
    //Primeiro gennero
    generos1: {
      tituloGenero: "Drama",
      quantidade: 7,
    },
    //Segundo gennero
    generos2: {
      tituloGenero: "Fantasia",
      quantidade: 7,
    },
    //Terceiro gennero
    generos3: {
      tituloGenero: "Ficção Científica",
      quantidade: 7,
    },
    aguarde: false
  }

  listarDestaques() {
    this.setState({ aguarde: true });
    this.props.listarDestaques();
    this.setState({ aguarde: false });
  }

  listarGeneros() {
    this.setState({ aguarde: true });
    this.props.listarGeneros1(this.state.generos1.tituloGenero, this.state.generos1.quantidade);
    this.props.listarGeneros2(this.state.generos2.tituloGenero, this.state.generos2.quantidade);
    this.props.listarGeneros3(this.state.generos3.tituloGenero, this.state.generos3.quantidade);
    this.setState({ aguarde: false });
  }

  componentDidMount() {
    this.listarDestaques();
    this.listarGeneros();
  }

  componentDidUpdate(nextProps) {
    (!this.props.destaques && nextProps.destaques) && this.listarDestaques();
    (!this.props.generos && nextProps.generos) && this.listarGeneros();
  }

  render() {
    var destaques = [];
    if (this.props.destaques) destaques = [...this.props.destaques];

    var generos1 = [];
    if (this.props.generos1) generos1 = [...this.props.generos1];

    var generos2 = [];
    if (this.props.generos2) generos2 = [...this.props.generos2];

    var generos3 = [];
    if (this.props.generos3) generos3 = [...this.props.generos3];

    if (this.state.aguarde) {
      return <ModalCarregando isOpen={this.state.aguarde} />
    }

    return (
      <>
        <MainCarroussel items={destaques} />
        <CarrouselGenre tituloGenero={this.state.generos1.tituloGenero} items={generos1} />
        <CarrouselGenre tituloGenero={this.state.generos2.tituloGenero} items={generos2} />
        <CarrouselGenre tituloGenero={this.state.generos3.tituloGenero} items={generos3} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  destaques: state.curta.destaques,
  generos1: state.curta.generos1,
  generos2: state.curta.generos2,
  generos3: state.curta.generos3
});

export default connect(mapStateToProps, actionsCurta)(PaginaInicial);
