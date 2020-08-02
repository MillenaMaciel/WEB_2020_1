import React from 'react'
import Hero from '../questao1/Hero'
import Enemy from '../questao1/Enemy'

export default function OutraArena(props){

    return (
        <div>
        <Hero nome = "Twisted Fate" img = "/img/Twisted.png"/>
            <Enemy nome = "Syndra" img = "/img/Syndra.png"/>
        </div>
      )
    }

