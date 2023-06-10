import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  
  const [estadoSelecionado, setEstadoSelecionado] = useState();
  
  useEffect(
    () => {
      buscaEstadosApi();  
    },[]
  );
  
  
  const buscaCidadesApi = async () => {
    console.log("Buscando cidades brasieliras")
    const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios")
  }
  
  const buscaEstadosApi = async () =>{
      console.log("Buscando estads brasileiros....");
      const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
      
      setEstados(
        [{
            id:0,
            sigla: "Selecione..."
        },
        ...response.data
        ],
         );
      console.log(response.data);
  }
  
  
  /* Axios está instalado no projeto! 
    -> https://www.npmjs.com/package/axios
  */

  /* API IBGE Endpoints:
  
  -> Busca lista de UFs/estados: 
    https://servicodados.ibge.gov.br/api/v1/localidades/estados

  -> Busca cidades por estado/UF: 
    https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
 */

  return (
    <>

      <div className='div-selects'>

        <h1>IBGE: Localidades</h1>

        <label>Selecione o estado</label>
        <br />
        <select
          value={estadoSelecionado}
          onChange={(e) => setEstadoSelecionado(e.target.value)}
        >
          {///populando o select
            estados.map(estado => {
              return(
                <option
                  key={estado.id}
                  value={estado.sigla}>
                  {estado.sigla} - {estado.nome}
                </option>
              
              )
            })
          }
          <option value="default">Selecione...</option>
          <option value="RS">RS</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
        </select>

        <br />
        <br />

        <label>Selecione a cidade</label>
        <br />
        <select
          disabled={true}
          value={"city1"}
          onChange={() => { }}
        >
          <option value="default">Selecione...</option>
          <option value="city1">Cidade 1</option>
          <option value="city2">Cidade 2</option>
          <option value="city3">Cidade 3</option>
        </select>


      </div>


      <div className='div-resposta'>
        <h3>Dados selecionados</h3>
        <p>Estado: {estadoSelecionado ?? "Indefinido"}</p>
        <p>Cidade: {"Cidade 1" ?? "Indefinida"}</p>
      </div>
    </>
  )
}

export default App;