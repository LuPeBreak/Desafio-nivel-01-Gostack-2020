//import dependecies
import React,{useState,useEffect} from "react";
//import configured axios
import api from './services/api';

//import css/style
import "./styles.css";

function App() {
  const [repositories,setRepositories] = useState([]);

  useEffect(()=>{
    api.get('/repositories').then(response=>{
      console.log(response.data)
      setRepositories(response.data);
    })
  },[])

  async function handleAddRepository() {
    const response = await api.post('repositories',{
      "title":`Dev ${Date.now()}`,
      "url":"https://github.com/LuPeBreak/Desafio-nivel-01-Gostack-2020",
      "techs":["nodeJS","Javascript","express"]
    });
    const repositorie = response.data;
    
    setRepositories([...repositories,repositorie]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repositorie=>
            <li key={repositorie.id}>
            {repositorie.title}
            <button onClick={() => handleRemoveRepository(repositorie.id)}>
              Remover
            </button>
            </li>
          )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
