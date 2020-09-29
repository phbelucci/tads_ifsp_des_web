
import React, { useState, useEffect } from 'react';
import { CardsPosto, SlidesCarousel, Map, Navegacao  } from '../components/index';
import postos from '../files/postos.json'
import '../index.css';

// import { Container } from './styles';

function Inicio({postosIn}) {

  const [filesInLocalStorage, setFilesInLocalStorage] = useState(localStorage.getItem("eletroPostos"));

  if (!filesInLocalStorage) {
    setFilesInLocalStorage(localStorage.setItem("eletroPostos", JSON.stringify(postos)));
  }

  console.log(postosIn)

  const [eletroPostos, setEletroPostos] = useState(JSON.parse(filesInLocalStorage));
  const [postosDestaque, setPostosDestaque] = useState([])

  useEffect(() => {
    ordenarPostos(eletroPostos);
  }, [eletroPostos]);

  function ordenarPostos(postos) {
    const postosOrdenados = postos.sort(function (a, b) {
      return a.likes > b.likes ? -1 : a.likes < b.likes ? 1 : 0;
    });
    if(postosOrdenados.length < 3) setPostosDestaque(eletroPostos.slice(0, 3));
    else setPostosDestaque(postosOrdenados.slice(0, 3));
  }

  console.log('eletropostos tela inicio',eletroPostos)

  return (

    <div className="container">
      <Navegacao></Navegacao>
      <header className="carousel" style={{ height: '300px',marginBottom: '20px', display: "flex", alignItems: "center"}}>
        <SlidesCarousel postosDestaque={postosDestaque} className="containerCardsDestaque" />
      </header>
      <main className="main">
        <CardsPosto eletroPostos={eletroPostos} setEletroPostos={setEletroPostos} filesInLocalStorage={filesInLocalStorage} />
        <Map eletroPostos={eletroPostos} setEletroPostos={setEletroPostos}/>
      </main>
      <footer>Ícones feitos por <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
      </footer>
    </div>

  );
}

export default Inicio;