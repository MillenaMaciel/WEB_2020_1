// import React from "react"
// import Hero from "./Hero"
// Questão 1) Em mesmo arquivo, crie os seguintes componentes, usando funções:
// • “Hero”, o qual imprimirá a propriedade “name”, recebida via “props”. Além disso, mostre uma
// imagem de sua escolha, usando a tag <img>”.
// • “Enemy”, a mesma coisa de Hero, com um “name” e uma imagem.
// • “Arena”, o componente que será exportado pelo arquivo. Irá renderizar os componentes “Hero” e
// “Enemy”
// Ex. (render de Arena):
// <div>
// <Hero name = “Baki” img = “../baki.png”/>
// <Enemy name = “Yujiro” img = “../ogre.png”/>
// </div>

import React from 'react'
import Hero from '../questao1/Hero'
import Enemy from "../questao1/Enemy"


export default function Questao2(props) {
  return (
    <div>
    <Hero nome = "Twisted Fate" img = "/img/Twisted.png"/>
        <Enemy nome = "Syndra" img = "/img/Syndra.png"/>
    </div>
  )
}
