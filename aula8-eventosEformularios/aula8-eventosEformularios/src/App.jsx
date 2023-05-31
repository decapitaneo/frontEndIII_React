import { useState } from 'react'
import './App.css'
import { MeuForm } from './components/MeuForm';
import { MeuFormControlado } from './components/MeuFormControlado';

function App() {
  
  const handleClick = (userName) => {
    console.log(`Ola ${userName}`)
  }
  return (
    <>
      <MeuForm/>
      <button onClick={() => handleClick('Denise')}>Clique aqui</button>
      
      <MeuFormControlado/>
    </>
  )
}

export default App
