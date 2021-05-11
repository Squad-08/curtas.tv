import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionsCurta from "../../core/actions/actionsCurta";
import ContentPageNotFound from "../../components/ContentPageNotFound";

class PaginaInexistente extends Component {
  componentWillUnmount() {
    this.props.limparCurta();
    this.props.limparDestaques();
    this.props.limparGeneros();
    window.document.title = "Curtas.tv";
  }

  componentDidMount() {
    window.document.title = "Erro 404 - Curtas.tv";
  }

  render() {
    return <ContentPageNotFound />;
  }
}

export default connect(null, actionsCurta)(PaginaInexistente);
