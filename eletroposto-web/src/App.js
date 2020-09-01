import React, {useState, useEffect} from 'react';
import api from '../src/api/index'


function App() {
  const [eletroPostos, setEletroPostos] = useState([]);

  useEffect(() => {
    api.get().then(res => {
      setEletroPostos(res.data);
      console.log(res.data);
    })
  }, []);
  return (
    <div className="App">
      {eletroPostos.map( posto => {
        return (
          <>
          <div key={posto.coordenadas[0]}>{posto.nome}</div>
          <div>{posto.endereco}</div>
          <div>{posto.CEP}</div>
          <div>{posto.atendimento24}</div>
          <br></br>
          </>
        )
      })}
    </div>
  );
}

export default App;
