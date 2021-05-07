import React, { Component } from "react";
import CarrouselGenre from "../../components/CarrouselGenre";
import MainCarroussel from "../../components/MainCarroussel";
import { connect } from "react-redux";
import * as actionsFilmes from "../../core/actions/actionsFilme";
import image from "../../components/MainCarroussel/img/shortThumbnail1.png";

class PaginaInicial extends Component {

  state = {
    items: [
      {
        key: 1,
        src: image,
        alt: "Thumbnail do Curta",
        titleCarrosel: "Here Is The Plan"
      },
      {
        key: 2,
        src: image,
        alt: "Thumbnail do Curta",
        titleCarrosel: "Here Is The Plan"
      },
      {
        key: 3,
        src: image,
        alt: "Thumbnail do Curta",
        titleCarrosel: "Here Is The Plan"
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
        <CarrouselGenre />
      </>
    );
  }
}

export default connect(null, actionsFilmes)(PaginaInicial);
