import React from "react"

export default function Hero4(props) {
  return (
    <div>
      <h2>Hero: {props.nome}</h2>
      <blockquote>
        <p>A Sorte sempre me sorri.</p>
        <footer>Por <cite title="Título da fonte">Twisted Fate</cite></footer>
      </blockquote>
      <img src="/img/Twisted.jpg" alt="" />
      <h1> nome arena: {props.arena} </h1>
      
    </div>
  )

}



