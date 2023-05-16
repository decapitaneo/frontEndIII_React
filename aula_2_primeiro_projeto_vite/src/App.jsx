
import './App.css'

const usuario = {
  nome: "Denise",
  sobrenome: "Capitaneo",
}
const OlaMundo = () => {
  return (
    <>
      <h3>Ola mundo</h3>
      <p>Usuario Denise</p>
    </>
  )
}

const BoasVindasUsuario = () => {
  return(
    <p>Seja bem vindo @Usuario {usuario.nome} {usuario.sobrenome}</p>
  )
}
//componente funcional
function App() {
 
  return (
    <>
      <OlaMundo/> 
      <BoasVindasUsuario/>
    </>
  )
}

export default App
