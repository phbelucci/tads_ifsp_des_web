
import React, { useState, useEffect } from 'react';
import { CardsPosto, SlidesCarousel, Map, Navegacao } from '../components/index';
import postos from '../files/postos.json'
import '../index.css';

// import { Container } from './styles';

function Inicio({ postosIn }) {

  const [filesInLocalStorage, setFilesInLocalStorage] = useState(localStorage.getItem("eletroPostos"));

  if (!filesInLocalStorage) {
    setFilesInLocalStorage(localStorage.setItem("eletroPostos", JSON.stringify(postos)));
  }

  const [eletroPostos, setEletroPostos] = useState(JSON.parse(filesInLocalStorage));
  const [postosDestaque, setPostosDestaque] = useState([])

  useEffect(() => {
    ordenarPostos(eletroPostos);
  }, [eletroPostos]);

  function ordenarPostos(postos) {
    const postosOrdenados = postos.sort(function (a, b) {
      return a.likes > b.likes ? -1 : a.likes < b.likes ? 1 : 0;
    });
    if (postosOrdenados.length < 3) setPostosDestaque(eletroPostos.slice(0, 3));
    else setPostosDestaque(postosOrdenados.slice(0, 3));
  }

  return (

    <div className="container">
      <Navegacao></Navegacao>
      <header className="carousel">


      </header>
      <main className="main">
        <aside>
          <CardsPosto eletroPostos={eletroPostos} setEletroPostos={setEletroPostos} filesInLocalStorage={filesInLocalStorage} />
        </aside>
        <div>
          <div id="containerCardsDestaque">
            <SlidesCarousel postosDestaque={postosDestaque} />
          </div>
          <Map eletroPostos={eletroPostos} setEletroPostos={setEletroPostos} />
          <footer>
          Ícones feitos por <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
          </footer>
        </div>
      </main>
      
    </div>

  );
}

export default Inicio;