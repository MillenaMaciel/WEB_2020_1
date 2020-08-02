import React from 'react';
import './App.css';


import Arena from './components/questao1/Arena';
import Questao2 from './components/questao2/Questao2';
import World from './components/questao3/World';
import OutraArena from './components/questao3/OutraArena';
import Hero4 from './components/questao4/Hero4';
import Enemy4 from './components/questao4/Enemy4';
import NovaArena from './components/questao4/NovaArena'
import Questao5 from './components/Questao5';


function App() {
  return (
    <div className="App">
      <h1>Questao 1 </h1>
      <Arena/>
      <h1>Questao 2 </h1>
      <Questao2/>

      <h1>Questao 3 </h1>
      <World> 
        <OutraArena/> 
        <OutraArena/> 
        <OutraArena/> 
      </World>

      <h1>Questao 4 </h1>
      <NovaArena arena = 'LEAGUE OF LEGENDS'>
        <Hero4 nome = 'Twisted Fate' img = '/img/Twisted.png'/>
        <Enemy4 nome ='Syndra ' img = '/img/Syndra.png'/>
      </NovaArena>
      
      <Questao5/>
    </div>
  );
}



export default App;



