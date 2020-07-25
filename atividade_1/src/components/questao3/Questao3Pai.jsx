import React from 'react'
import Questao3Filho from "./Questao3Filho";



export default function Questao3Pai() {
  return (
    <div>
      <Questao3Filho
        nome="Millena Maciel da Silva"
        curso="Engenharia de Software"
        cidade="Quixadá"
      />
    </div>
  );
}