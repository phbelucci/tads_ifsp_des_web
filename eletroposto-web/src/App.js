import api from '../src/api/index'
import React, { useEffect, useState } from 'react';
import Map from './components/Map'
import PostoLista from './components/PostoLista'
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
    <>
      <div className="container">
        <PostoLista eletroPostos={eletroPostos} />
        <Map eletroPostos={eletroPostos} />
      </div>
    </>
  );
}

export default App;
