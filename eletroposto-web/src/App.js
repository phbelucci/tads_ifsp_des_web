import api from '../src/api/index'
import React, { useEffect, useState } from 'react';
import Map from './components/Map';
import PostoLista from './components/PostoLista';
import Destaques from './components/Destaques';
import logo from './assets/reciclar.svg'
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
        <header className="nav">
          <nav>
            <img src={logo}></img>
            <span>Eco Energy</span>
          </nav>
          <Destaques className="containerCardsDestaque" />
        </header>
        <main className="main">
          <PostoLista eletroPostos={eletroPostos} />
          <Map eletroPostos={eletroPostos} />
        </main>
      </div>
    </>
  );
}

export default App;
