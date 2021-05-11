import React from "react";
import Cabecalho from "../../../components/Cabecalho";
import Rodape from "../../../components/Rodape";
import "../../../assets/styles/reset.css";
import "../../../assets/styles/base.css";

class BasePrincial extends React.Component {
  render() {
    return (
      <div className="complete-page">
        <Cabecalho />
        <main className="wrapper-content">{this.props.children}</main>
        <Rodape />
      </div>
    );
  }
}

export default BasePrincial;
