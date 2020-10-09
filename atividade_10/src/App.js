import React, { Component } from 'react'
import './App.css'
import Numero1 from './components/Numero1'
import Numero2 from './components/Numero2'
import Soma from './components/Soma'
import Multiplicacao from './components/Multiplicacao'
import Maior from './components/Maior'







export default class App extends Component {



  render() {
    return (
      <div className='container'>

        <h1>Atividade 10  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg></h1>

        <div className='line'>
          <Numero1 />
          <Numero2 />
        </div>
        <div className='line'>
          <Soma />
          <Multiplicacao />
          <Maior />
        </div>
      </div>
    )
  }
}