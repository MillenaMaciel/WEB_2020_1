import React, { Component } from "react";

export default class Questao4Filho extends Component {
  render() {
    return (
      <div>
        <h2>Nome: {this.props.nome}</h2>
        <h3>Curso: {this.props.curso}</h3>
        <h4>Cidade Origem: {this.props.cidade}</h4>
      </div>
    );
  }
}