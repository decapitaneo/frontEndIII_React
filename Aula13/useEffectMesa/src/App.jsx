import { useEffect, useState } from 'react';
import './App.css';
import ContadordeCliquesComponent from './ContadorDeCliquesComponent';

function App() {
  const [checkbox, setCheckbox] = useState(false);
  
  useEffect(
    () => {
      console.log("<App/> Foi montado");
      
      return function limpaComponente(){
        console.log("<App/> Foi desmontado/limpo");
        
      }
    }, []
  )


  return (
    <>
      <h2> Ciclo de vida (Hook: useEffect())</h2>
      
      <input type="checkbox" 
        value={checkbox}
        onChange={
          () => setCheckbox(!checkbox)
        }
      />
      <label>Exibir contador de cliques</label>
      {
        checkbox ? <ContadordeCliquesComponent/> : <></>
      }
      
    </>
  )
}

export default App
