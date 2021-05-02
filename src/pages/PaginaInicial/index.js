import React, { Component } from "react";
import MainBanner from "../../components/MainBanner";
import CarrouselGenre from "../../components/CarrouselGenre";
import { connect } from 'react-redux';
import * as actionsFilmes from '../../core/actions/actionsFilme';

class PaginaInicial extends Component {

  listarFilmes() {
    //this.props.listarFilmes();
    this.props.testeAPI({ email: 'geverson@gmail.com', senha: 'zxc123asd' }, (err) => {

    });
  }

  componentDidMount() {
    this.listarFilmes();
  }

  render() {
    return (
      <>
        <MainBanner />
        <CarrouselGenre />
      </>
    );
  }

};

export default connect(null, actionsFilmes)(PaginaInicial);
