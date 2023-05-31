import { useState } from "react";
import "./styles.css";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
  }


  const [bancoDeDados, setBancoDeDados] = useState({quantidadeDeAlunos:0, mediaNotasAlunos:0});
  const [desenvolvimentoBackend, setDesenvolvimentoBackend] = useState({quantidadeDeAlunos:0, mediaNotasAlunos:0});
  const [desenvolvimentoFrontend, setDesenvolvimentoFrontend] = useState({quantidadeDeAlunos:0, mediaNotasAlunos:0});
  const [devops, setDevops] = useState({quantidadeDeAlunos:0, mediaNotasAlunos:0});
  
  const [disciplina, setDisciplina] = useState("");
  const [nota, setNota] = useState(0);
  
  const handleChange = (event) => {
    setDisciplina(event.target.value);
    console.log(disciplina);
  }
  

  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select value={disciplina}
          onChange={handleChange}
          >
            <option selected disabled>
              Selecione uma disciplina
            </option>
            <option value="database">Banco de Dados</option>
            <option value="backend">Desenvolvimento Backend</option>mesa
            <option value="frontend">Desenvolvimento Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input />
        </div>
        <input type="submit" value="Salvar" />
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Quantidade de Alunos</th>
              <th>Média das notas dos alunos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Banco de Dados</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desenvolvimento Frontend</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desenolvimento Backend</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
