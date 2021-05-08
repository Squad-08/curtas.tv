import React, { Component } from "react";
import CarrouselGenre from "../../components/CarrouselGenre";
import MainCarroussel from "../../components/MainCarroussel";
import { connect } from "react-redux";
import * as actionsFilmes from "../../core/actions/actionsFilme";
import ModalCarregando from '../../components/ModalCarregando';

class PaginaInicial extends Component {

  state = {
    testeDestaques: [
      {
        id: "263fc922-b665-4bbf-9f26-0250d65c24ef",
        title: "Lost & Found",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BMzAxMzVmNWYtNzc4Yi00YWUxLTlkYWUtYWEyYzQ1YWFjYmVjXkEyXkFqcGdeQXVyNTkxMDU1Njg@._V1_.jpg"
      },
      {
        id: "6758c8f8-6d77-479e-a8f0-d99925059c8a",
        title: "Kitbull",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BNTQ1NTc3NjctNDA0ZC00NzcyLTljY2YtYjZmYzE3YTY4NTA0XkEyXkFqcGdeQXVyNjgwNDU3NTA@._V1_FMjpg_UX1000_.jpg"
      },
      {
        id: "7d8834e0-e6d5-41b2-a222-c3895d7e2764",
        title: "Chateau de Sable (Sand Castle)",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BZjdiYjAwMTAtODg4ZS00NmM1LWJjYjMtODAxODhkZThjYmZkXkEyXkFqcGdeQXVyNTk3NTY4NjI@._V1_FMjpg_UX1000_.jpg"
      }
    ],
    generos: {
      tituloGenero: "Ação",
      itemsGeneros: [
        {
          id: "263fc922-b665-4bbf-9f26-0250d65c24ef",
          title: "Sweet Tooth",
          posterUrl: "https://m.media-amazon.com/images/M/MV5BZDMxNjhiZmYtY2YyMC00NWFkLWI0ZWEtYmJkZThhMjlhYWE1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY268_CR43,0,182,268_AL_.jpg",
        }
      ]
    },
    aguarde: false
  }

  listarDestaques() {
    this.setState({aguarde:true});
    this.props.listarDestaques();
    this.setState({aguarde:false});
  }

  listarGeneros(genero, quantidade) {
    this.setState({aguarde:true});
    this.props.listarGeneros(genero, quantidade);
    this.setState({aguarde:true});
  }

  componentDidMount() {
    this.listarDestaques();
    this.listarGeneros(this.state.generos.tituloGenero, 3);
  }

  componentDidUpdate(nextProps) {
    (!this.props.destaques && nextProps.destaques) && this.listarDestaques();
    (!this.props.generos && nextProps.generos) && this.listarGeneros(this.state.generos.tituloGenero, 3);
  }

  render() {
    console.log('renderizando...');
    console.log(this.props.generos);

    var destaques = [];
    if (this.props.destaques) destaques = [...this.props.destaques];

    return (
      <>
        <ModalCarregando isOpen={this.state.aguarde} />
        <MainCarroussel items={destaques} />
        <CarrouselGenre tituloGenero={this.state.generos.tituloGenero} items={this.state.generos.itemsGeneros} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  destaques: state.filme.destaques
});

export default connect(mapStateToProps, actionsFilmes)(PaginaInicial);
