import React, { Component } from "react";
import CarrouselGenre from "../../components/CarrouselGenre";
import MainCarroussel from "../../components/MainCarroussel";
import { connect } from "react-redux";
import * as actionsFilmes from "../../core/actions/actionsFilme";
import image from "../../assets/images/shortThumbnail1.png";

class PaginaInicial extends Component {

  state = {
    items: [
      {
        key: 1,
        src: image,
        alt: "Thumbnail do Curta",
        titleCarrossel: "Here Is The Plan"
      },
      {
        key: 2,
        src: image,
        alt: "Thumbnail do Curta",
        titleCarrossel: "Here Is The Plan"
      },
      {
        key: 3,
        src: image,
        alt: "Thumbnail do Curta",
        titleCarrossel: "Here Is The Plan"
      }
    ],
    itemsGeneros: [
      {
        id: "1",
        src: "https://m.media-amazon.com/images/M/MV5BZDMxNjhiZmYtY2YyMC00NWFkLWI0ZWEtYmJkZThhMjlhYWE1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY268_CR43,0,182,268_AL_.jpg",
        alt: "Poster Sweet Tooth",
        tituloGenero: "Sweet Tooth"
      }
    ]
  }

  listarFilmes() {
    //this.props.listarFilmes();
    // this.props.testeAPI(
    //   { email: "geverson@gmail.com", senha: "zxc123asd" },
    //   (err) => { }
    // );
  }

  componentDidMount() {
    this.listarFilmes();
  }

  render() {
    return (
      <>
        <MainCarroussel items={this.state.items} />
        <CarrouselGenre items={this.state.itemsGeneros} />
      </>
    );
  }
}

export default connect(null, actionsFilmes)(PaginaInicial);
