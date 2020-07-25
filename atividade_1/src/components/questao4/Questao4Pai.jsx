import React, { Component } from "react";

import Questao4Filho from './Questao4Filho';

class Questao4Pai extends Component {
  render() {
    return (
      <div>
        <Questao4Filho
          Nome="Millena Maciel da Silva"
          Curso="Engenharia de Software"
          Cidade="Quixadá"
        />
      </div>
    );
  }
}

export default Questao4Pai;