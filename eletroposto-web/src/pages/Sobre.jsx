import React, { useEffect, useState } from 'react';
import { Navegacao } from '../components/index'
import CardsProfile from '../components/CardsProfile';
import { CardDeck } from 'react-bootstrap';
import axios from 'axios';

// import { Container } from './styles';

function Sobre() {

  // ### Substituir aqui pelo endpoint do firebase  ###
  // GET [https://carro-eletrico.firebaseio.com/autores.json]

  const [autores, setAutores] = useState([])
  const [autoresGit, setAutoresGit] = useState([])
  useEffect(() => {
    
    async function getAutores(){
      const autorPaulo = await axios.get('https://api.github.com/users/phbelucci').then(res => {
        return res.data;
      })
      const autorSilvio = await axios.get('https://api.github.com/users/SilvioDaCol').then(res => {
        return res.data;
      })

      setAutoresGit([autorPaulo, autorSilvio])
    } 
    
    getAutores()
  },[])

  console.log(autoresGit)

  return (
    <>
      <Navegacao></Navegacao>
      <h3>Sobre o projeto</h3>
      <p>
        Poucos são os proprietários de veículos elétricos no Brasil. No entanto, este número tende a
        crescer nas próximas décadas. Esta iniciativa visa facilitar a busca por unidades de abastecimento
        preparadas para receber veículos elétricos no estado de São Paulo.
      </p>
      <h3>Sobre os autores</h3>
      <CardDeck>
        {autoresGit.map(autor => (
          <CardsProfile profile_info={autor} />
        ))}
      </CardDeck>
    </>
  );
}

export default Sobre;