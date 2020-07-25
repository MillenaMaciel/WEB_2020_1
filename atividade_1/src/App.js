import React from 'react';
import './App.css';
import Questao1 from './components/questao1/Questao1'
import Questao2 from './components/questao2/Questao2'
import Questao3Pai from './components/questao3/Questao3Pai';
import Questao4Pai from './components/questao4/Questao4Pai';

function App() {
  return (
    <div className="App">
      <Questao1/>
      <Questao2/>
      <Questao3Pai/>
      <Questao4Pai/>
    </div>
  );
}



export default App;



