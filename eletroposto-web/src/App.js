import api from '../src/api/index'
import React, { useEffect, useState } from 'react';
import Map from './components/Map';
import PostoLista from './components/PostoLista';
import Destaques from './components/Destaques';
import logo from './assets/reciclar.svg'
import postos from './files/postos.json'
import './index.css';

function App() {

  const [filesInLocalStorage, setFilesInLocalStorage] = useState(localStorage.getItem("eletroPostos"));

  if (!filesInLocalStorage) {
    localStorage.setItem("eletroPostos", JSON.stringify(postos));
  }
  
  const [eletroPostos, setEletroPostos] = useState(JSON.parse(filesInLocalStorage));
  const [postosDestaque, setPostosDestaque] = useState([])

  useEffect(() => {
    ordenarPostos(eletroPostos);
  }, [setEletroPostos]);

  function ordenarPostos(postos) {
    const postosOrdenados = postos.sort(function (a, b) {
      return a.likes > b.likes ? -1 : a.likes < b.likes ? 1 : 0;
    });
    console.log("sem Ordenar", postos);
    console.log("ordenados", postosOrdenados);
    setPostosDestaque(postosOrdenados.slice(0, 4));
  }

  return (
    <>
      <div className="container">
        <header className="nav">
          <nav>
            <img src={logo}></img>
            <span>Eco Energy</span>
          </nav>
          <span>DESTAQUES</span>
          <Destaques postosDestaque={postosDestaque} className="containerCardsDestaque" />
        </header>
        <main className="main">
          <PostoLista eletroPostos={eletroPostos} setEletroPostos={setEletroPostos}/>
          <Map eletroPostos={eletroPostos} />
        </main>
        <footer>Ícones feitos por <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
        </footer>
      </div>
    </>
  );
}

export default App;
