import React, { Component } from "react";
import CarrouselGenre from "../../components/CarrouselGenre";
import MainCarroussel from "../../components/MainCarroussel";
import { connect } from "react-redux";
import * as actionsFilmes from "../../core/actions/actionsFilme";
import ModalCarregando from '../../components/ModalCarregando';

class PaginaInicial extends Component {

  state = {
    generos: {
      tituloGenero: "Drama",
      itemsGeneros: [
        {
          id: "263fc922-b665-4bbf-9f26-0250d65c24ef",
          title: "Sweet Tooth",
          posterUrl: "https://m.media-amazon.com/images/M/MV5BZDMxNjhiZmYtY2YyMC00NWFkLWI0ZWEtYmJkZThhMjlhYWE1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY268_CR43,0,182,268_AL_.jpg",
        }
      ]
    },
    //Primeiro gennero
    generos1: {
      tituloGenero: "Drama",
      quantidade: 3,
    },
    itemsGeneros1: [
      {
        id: null,
        title: null,
        posterUrl: null,
      }
    ],
    //Segundo gennero
    generos2: {
      tituloGenero: "Fantasia",
      quantidade: 4,
    },
    itemsGeneros2: [
      {
        id: null,
        title: null,
        posterUrl: null,
      }
    ],
    //Terceiro gennero
    generos3: {
      tituloGenero: "Ficção Científica",
      quantidade: 5,
    },
    itemsGeneros3: [
      {
        id: null,
        title: null,
        posterUrl: null,
      }
    ],
    aguarde: false
  }

  listarDestaques() {
    this.setState({ aguarde: true });
    this.props.listarDestaques();
    this.setState({ aguarde: false });
  }

  listarGeneros() {
    this.setState({ aguarde: true });
    const { generos } = this.props;
    //Buscando primeiro gennero
    this.props.listarGeneros(this.state.generos1.tituloGenero, this.state.generos1.quantidade);
    this.setState({ itemsGeneros1: [...generos] });
    // //Buscando segundo gennero
    // this.props.listarGeneros(this.state.generos2.tituloGenero, this.state.generos2.quantidade);
    // this.setState({ itemsGeneros2: [...generos] });
    // //Buscando terceira gennero
    // this.props.listarGeneros(this.state.generos3.tituloGenero, this.state.generos3.quantidade);
    // this.setState({ itemsGeneros3: [...generos] });
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
    console.log('renderizando...');
    console.log(this.state.itemsGeneros1);

    var destaques = [];
    if (this.props.destaques) destaques = [...this.props.destaques];

    if (this.state.aguarde) {
      return <ModalCarregando isOpen={this.state.aguarde} />
    }

    return (
      <>
        <MainCarroussel items={destaques} />
        <CarrouselGenre tituloGenero={this.state.generos1.tituloGenero} items={this.state.itemsGeneros1} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  destaques: state.filme.destaques,
  generos: state.filme.generos
});

export default connect(mapStateToProps, actionsFilmes)(PaginaInicial);
