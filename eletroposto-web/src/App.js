import api from '../src/api/index'
import React, {useEffect, useState} from 'react';
import Map from './components/Map'
import Container from './components/Container'
import './index.css';

function App() {

  const [eletroPostos, setEletroPostos] = useState([]);

  useEffect(() => {
    api.get().then(res => {
      setEletroPostos(res.data);
      console.log(res.data);
    })
  }, []);

  return (
    <div style={{width: "80vw",  height:"80vh", marginLeft: "100px"}}>
      <Map eletroPostos={eletroPostos}></Map>
    </div>
  );
}

export default App;
